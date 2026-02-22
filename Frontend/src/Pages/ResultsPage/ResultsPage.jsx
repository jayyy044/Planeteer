import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import './ResultsPage.css'


const ResultsPage = () => {
const { state } = useLocation()
const navigate = useNavigate()
const { disease, causes, elimination, prevention, annotatedImageB64 } = state
console.log("Received state in ResultsPage:", state)
    return (
        <>
        <div className='results-page-cont'>
            <div className="results-page">
                <h1>{disease}</h1>
                {annotatedImageB64 && (
                    <div className="annotated-image-wrapper" style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                    <img className="annotated-image"
                        src={`data:image/jpeg;base64,${annotatedImageB64}`}
                        alt="Annotated disease"
                        style={{ maxWidth: "480px", width: "100%", borderRadius: "12px" }}
                    />
                    </div>
                )}
                <p className='titles'>Causes:</p>
                <p className='information'>{causes}</p>
                <p className='titles'>Removing Disease:</p>
                <p className='information'>{elimination}</p>
                <p className='titles'>Prevention:</p>
                <p className='information'>{prevention}</p>
                <button onClick={() => navigate('/upload')}>Analyze Another Image</button>
            </div>
        </div>
        </>
    )
}

export default ResultsPage