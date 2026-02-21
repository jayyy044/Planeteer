import './VideoUploadPage.css'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const VideoUploadPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  const navigate = useNavigate()


const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 100 * 1024 * 1024) {
        alert("File exceeds 100MB limit.");
        e.target.value = null;
        return;
      }
      setUploadedFile(file);
    } else {
      alert("Only image files are allowed.");
      e.target.value = null;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      if (file.size > 20 * 1024 * 1024) {
        alert("File exceeds 20MB limit.");
        return;
      }
      setUploadedFile(file);
    } else {
      alert("Only video files are allowed.");
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

    const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!uploadedFile) {
      alert("Please upload an image.");
      return;
    }

    const COLAB_URL = "https://uninstructible-matronly-fredricka.ngrok-free.dev";

    const formData = new FormData();
    formData.append('image', uploadedFile);

    try {
      const response = await fetch(`${COLAB_URL}/analyze`, {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true'
        },
        body: formData,
      });
      const data = await response.json();
      console.log("Colab response:", data);
      navigate('/results', { state: { disease: data.disease, causes: data.causes, elimination: data.elimination, prevention: data.prevention } });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to Colab.");
    }
  };

  return (
    <div className="userDataForm">
      <form className="userformcont" onSubmit={handleSubmit}>
        <div className="userformtitle">
          <h1>Share Your Information to <span>Get Started</span></h1>
        </div>
        <div className="form-section">
          <div className="file-upload-header">
            <h2 className="file-upload-title">Upload Image</h2>
          </div>

          {!uploadedFile && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`upload-area ${isDragging ? "upload-area-dragging" : ""}`}
            >
              <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="upload-text">Upload your image here</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input-hidden"
                />
            </div>
          )}

          {!uploadedFile && <p className="file-size-info">Maximum size: 100MB</p>}

          {uploadedFile && (
            <div className="file-card">
              <div className="file-icon-container">
                <svg className="file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="file-info">
                <p className="file-name">{uploadedFile.name}</p>
                <p className="file-size">{formatFileSize(uploadedFile.size)}</p>
              </div>
              <button type="button" onClick={handleRemoveFile} className="delete-button">
                <svg className="delete-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="sr-only">Remove file</span>
              </button>
            </div>
          )}
        </div>

        <button type='submit' className="useformsubmit">Submit</button>
      </form>
    </div>
  )
}

export default VideoUploadPage