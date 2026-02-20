// import { useEffect, useRef, useState, useCallback } from 'react';
// import Vapi from '@vapi-ai/web';

// const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
// const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

// export function useVapi() {
//   const [volumeLevel, setVolumeLevel] = useState(0);
//   const [isSessionActive, setIsSessionActive] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [conversation, setConversation] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const vapiRef = useRef(null);

//   // Initialize Vapi
//   const initializeVapi = useCallback(() => {
//     if (!vapiRef.current && PUBLIC_KEY) {
//       const vapiInstance = new Vapi(PUBLIC_KEY);
//       vapiRef.current = vapiInstance;

//       // Call started
//       vapiInstance.on('call-start', () => {
//         console.log('Call started');
//         setIsSessionActive(true);
//         setIsLoading(false);
//       });

//       // Call ended
//       vapiInstance.on('call-end', () => {
//         console.log('Call ended');
//         setIsSessionActive(false);
//         setIsSpeaking(false);
//         setVolumeLevel(0);
//         // Don't clear conversation here - let the component handle it
//       });

//       // AI started speaking
//       vapiInstance.on('speech-start', () => {
//         console.log('AI started speaking');
//         setIsSpeaking(true);
//       });

//       // AI stopped speaking
//       vapiInstance.on('speech-end', () => {
//         console.log('AI stopped speaking');
//         setIsSpeaking(false);
//         setVolumeLevel(0); // Reset volume when not speaking
//       });

//       // Volume level updates (THIS IS THE KEY FOR SMOOTH VISUALIZER)
//       vapiInstance.on('volume-level', (level) => {
//         // Vapi sends a value between 0 and 1
//         setVolumeLevel(level);
//       });

//       // Message/transcript updates
//       vapiInstance.on('message', (message) => {
//         const isTranscript =
//           message.type === 'transcript' ||
//           message.type === 'transcript[transcriptType="final"]';

//         if (!isTranscript) return;

//         if (message.transcriptType && message.transcriptType !== 'final') return; // ignore partials

//         setConversation((prev) => [
//           ...prev,
//           {
//             id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
//             role: message.role,
//             text: message.transcript,
//             timestamp: new Date(),
//           }
//         ]);
//       });

//       // Error handling
//       vapiInstance.on('error', (error) => {
//         console.error('Vapi error:', error);
//         setIsLoading(false);
//         setIsSessionActive(false);
//       });
//     }

//     return vapiRef.current;
//   }, []);

//   // Start a call
//   const startCall = useCallback(async () => {
//     const vapi = initializeVapi();
//     if (!vapi) {
//       console.error('Vapi not initialized - missing PUBLIC_KEY');
//       return;
//     }

//     if (!ASSISTANT_ID) {
//       console.error('Missing ASSISTANT_ID');
//       return;
//     }

//     setIsLoading(true);
//     setConversation([]);

//     try {
//       await vapi.start(ASSISTANT_ID);
//     } catch (error) {
//       console.error('Failed to start call:', error);
//       setIsLoading(false);
//     }
//   }, [initializeVapi]);

//   // Stop the call
//   const stopCall = useCallback(() => {
//     if (vapiRef.current) {
//       vapiRef.current.stop();
//     }
//   }, []);

//   // Toggle call on/off
//   const toggleCall = useCallback(() => {
//     if (isSessionActive) {
//       stopCall();
//     } else {
//       startCall();
//     }
//   }, [isSessionActive, startCall, stopCall]);

//   // Mute/unmute
//   const toggleMute = useCallback(() => {
//     if (vapiRef.current) {
//       const isMuted = vapiRef.current.isMuted();
//       vapiRef.current.setMuted(!isMuted);
//       return !isMuted;
//     }
//     return false;
//   }, []);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (vapiRef.current) {
//         try {
//           vapiRef.current.stop();
//         } catch (error) {
//           console.warn('Cleanup error:', error);
//         }
//       }
//     };
//   }, []);

//   // Clear conversation (can be called externally)
//   const clearConversation = useCallback(() => {
//     setConversation([]);
//   }, []);

//   return {
//     volumeLevel,
//     isSessionActive,
//     isSpeaking,
//     isLoading,
//     conversation,
//     startCall,
//     stopCall,
//     toggleCall,
//     toggleMute,
//     clearConversation,
//   };
// }

import { useEffect, useRef, useState, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

export function useVapi() {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [audioRecording, setAudioRecording] = useState(null); // Store the WAV blob

  const vapiRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioStreamRef = useRef(null);

  // Convert audio blob to WAV format
  const convertToWav = async (audioBlob) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    const wavBuffer = audioBufferToWav(audioBuffer);
    return new Blob([wavBuffer], { type: 'audio/wav' });
  };

  // Helper function to convert AudioBuffer to WAV format
  const audioBufferToWav = (buffer) => {
    const numberOfChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;

    let result;
    if (numberOfChannels === 2) {
      result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
    } else {
      result = buffer.getChannelData(0);
    }

    const wavBuffer = new ArrayBuffer(44 + result.length * 2);
    const view = new DataView(wavBuffer);

    // WAV header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + result.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numberOfChannels * (bitDepth / 8), true);
    view.setUint16(32, numberOfChannels * (bitDepth / 8), true);
    view.setUint16(34, bitDepth, true);
    writeString(view, 36, 'data');
    view.setUint32(40, result.length * 2, true);

    // Write audio data
    floatTo16BitPCM(view, 44, result);

    return wavBuffer;
  };

  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const floatTo16BitPCM = (view, offset, input) => {
    for (let i = 0; i < input.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
  };

  const interleave = (leftChannel, rightChannel) => {
    const length = leftChannel.length + rightChannel.length;
    const result = new Float32Array(length);

    let inputIndex = 0;
    for (let i = 0; i < length; ) {
      result[i++] = leftChannel[inputIndex];
      result[i++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  };

  // Start recording user audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        
        // Convert to WAV
        const wavBlob = await convertToWav(audioBlob);
        
        // Store in state instead of downloading
        setAudioRecording(wavBlob);

        // Cleanup
        audioChunksRef.current = [];
        if (audioStreamRef.current) {
          audioStreamRef.current.getTracks().forEach(track => track.stop());
          audioStreamRef.current = null;
        }
      };

      mediaRecorder.start();
      console.log('Recording started');
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  // Stop recording user audio
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      console.log('Recording stopped');
    }
  };

  // Initialize Vapi
  const initializeVapi = useCallback(() => {
    if (!vapiRef.current && PUBLIC_KEY) {
      const vapiInstance = new Vapi(PUBLIC_KEY);
      vapiRef.current = vapiInstance;

      // Call started
      vapiInstance.on('call-start', () => {
        console.log('Call started');
        setIsSessionActive(true);
        setIsLoading(false);
        startRecording(); // Start recording when call starts
      });

      // Call ended
      vapiInstance.on('call-end', () => {
        console.log('Call ended');
        setIsSessionActive(false);
        setIsSpeaking(false);
        setVolumeLevel(0);
        stopRecording(); // Stop recording when call ends
      });

      // AI started speaking
      vapiInstance.on('speech-start', () => {
        console.log('AI started speaking');
        setIsSpeaking(true);
      });

      // AI stopped speaking
      vapiInstance.on('speech-end', () => {
        console.log('AI stopped speaking');
        setIsSpeaking(false);
        setVolumeLevel(0);
      });

      // Volume level updates
      vapiInstance.on('volume-level', (level) => {
        setVolumeLevel(level);
      });

      // Message/transcript updates
      vapiInstance.on('message', (message) => {
        const isTranscript =
          message.type === 'transcript' ||
          message.type === 'transcript[transcriptType="final"]';

        if (!isTranscript) return;

        if (message.transcriptType && message.transcriptType !== 'final') return;

        setConversation((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            role: message.role,
            text: message.transcript,
            timestamp: new Date(),
          }
        ]);
      });

      // Error handling
      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error);
        setIsLoading(false);
        setIsSessionActive(false);
        stopRecording(); // Stop recording on error
      });
    }

    return vapiRef.current;
  }, []);

  // Start a call
  const startCall = useCallback(async () => {
    const vapi = initializeVapi();
    if (!vapi) {
      console.error('Vapi not initialized - missing PUBLIC_KEY');
      return;
    }

    if (!ASSISTANT_ID) {
      console.error('Missing ASSISTANT_ID');
      return;
    }

    setIsLoading(true);
    setConversation([]);
    setAudioRecording(null); // Clear previous recording

    try {
      await vapi.start(ASSISTANT_ID);
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsLoading(false);
    }
  }, [initializeVapi]);

  // Stop the call
  const stopCall = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  }, []);

  // Toggle call on/off
  const toggleCall = useCallback(() => {
    if (isSessionActive) {
      stopCall();
    } else {
      startCall();
    }
  }, [isSessionActive, startCall, stopCall]);

  // Mute/unmute
  const toggleMute = useCallback(() => {
    if (vapiRef.current) {
      const isMuted = vapiRef.current.isMuted();
      vapiRef.current.setMuted(!isMuted);
      return !isMuted;
    }
    return false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRecording();
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (error) {
          console.warn('Cleanup error:', error);
        }
      }
    };
  }, []);

  // Clear conversation and recording
  const clearConversation = useCallback(() => {
    setConversation([]);
    setAudioRecording(null);
  }, []);

  return {
    volumeLevel,
    isSessionActive,
    isSpeaking,
    isLoading,
    conversation,
    audioRecording, // Export the audio recording
    startCall,
    stopCall,
    toggleCall,
    toggleMute,
    clearConversation,
  };
}