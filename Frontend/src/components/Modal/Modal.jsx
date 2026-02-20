// // import React, { useState } from 'react';
// // import './Modal.css';
// // import GlassCard from '../GlassCard/GlassCard';

// // const Modal = ({ onRestart }) => {
// //   const [isEvaluating, setIsEvaluating] = useState(false);

// //   const handleEvaluate = async () => {
// //     setIsEvaluating(true);

// //     try {
// //       const response = await fetch('YOUR_BACKEND_URL/api/evaluate');

// //       const result = await response.json();
// //       console.log('Evaluation result:', result);
      
// //     } catch (err) {
// //       console.error('Error evaluating conversation:', err);
// //     } finally {
// //       setIsEvaluating(false);
// //     }
// //   };

// //   return (
// //     <div className="modalOverlay">
// //       <div className="modalCont">
// //         <GlassCard
// //             blurAmount={0.2}
// //             bgOpacity={0.90}
// //             contentBgOpacity={0.0}
// //             borderOpacity={0.125}
// //             noiseOpacity={0.0}
// //             borderRadius={18}
// //         >
// //           <div className="modalContent">
// //             <h1>You finished a conversation with <span>Babbly</span></h1>
// //             <p>
// //               The next step is to allow us to process your conversation and evaluate how you did. 
// //               We will be evaluating the things you said and how you said them to provide key pointers 
// //               to improve your communication skills.
// //             </p>

// //             <div className="databtns">
// //               <button 
// //                 onClick={handleEvaluate}
// //                 disabled={isEvaluating}
// //                 className="evaluateBtn"
// //               >
// //                 {isEvaluating ? 'Evaluating...' : 'Evaluate'}
// //               </button>
// //               <button 
// //                 onClick={onRestart}
// //                 disabled={isEvaluating}
// //                 className="restartBtn"
// //               >
// //                 Restart
// //               </button>
// //             </div>
// //           </div>
// //         </GlassCard>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;


// import React, { useState } from 'react';
// import './Modal.css';
// import GlassCard from '../GlassCard/GlassCard';

// const Modal = ({ onRestart, audioRecording, conversation }) => {
//   const [isEvaluating, setIsEvaluating] = useState(false);

//   const handleEvaluate = async () => {
//     setIsEvaluating(true);

//     try {
//       // Create FormData to send both audio and conversation
//       const formData = new FormData();
      
//       // Add the audio file
//       if (audioRecording) {
//         formData.append('audio', audioRecording, `recording-${Date.now()}.wav`);
//       }
      
//       // Add the conversation transcript as JSON
//       formData.append('conversation', JSON.stringify(conversation));

//       const response = await fetch('https://nevada-replaced-lesser-truck.trycloudflare.com/evaluate', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('Evaluation result:', result);
      
//       // You can handle the result here (e.g., show results, navigate, etc.)
      
//     } catch (err) {
//       console.error('Error evaluating conversation:', err);
//       alert('Failed to evaluate conversation. Please try again.');
//     } finally {
//       setIsEvaluating(false);
//     }
//   };

//   return (
//     <div className="modalOverlay">
//       <div className="modalCont">
//         <GlassCard
//             blurAmount={0.2}
//             bgOpacity={0.90}
//             contentBgOpacity={0.0}
//             borderOpacity={0.125}
//             noiseOpacity={0.0}
//             borderRadius={18}
//         >
//           <div className="modalContent">
//             <h1>You finished a conversation with <span>Babbly</span></h1>
//             <p>
//               The next step is to allow us to process your conversation and evaluate how you did. 
//               We will be evaluating the things you said and how you said them to provide key pointers 
//               to improve your communication skills.
//             </p>

//             <div className="databtns">
//               <button 
//                 onClick={handleEvaluate}
//                 disabled={isEvaluating || !audioRecording}
//                 className="evaluateBtn"
//               >
//                 {isEvaluating ? 'Evaluating...' : 'Evaluate'}
//               </button>
//               <button 
//                 onClick={onRestart}
//                 disabled={isEvaluating}
//                 className="restartBtn"
//               >
//                 Restart
//               </button>
//             </div>

//             {!audioRecording && (
//               <p style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '10px' }}>
//                 No audio recording available
//               </p>
//             )}
//           </div>
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React, { useState } from 'react';
import './Modal.css';
import GlassCard from '../GlassCard/GlassCard';

const Modal = ({ onRestart, audioRecording, conversation }) => {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const handleEvaluate = async () => {
    setIsEvaluating(true);

    try {
      // Create FormData to send both audio and conversation
      const formData = new FormData();
      
      // Add the audio file
      if (audioRecording) {
        formData.append('audio', audioRecording, `recording-${Date.now()}.wav`);
      }
      
      // Add the conversation transcript as JSON
      formData.append('conversation', JSON.stringify(conversation));

      const response = await fetch('https://nevada-replaced-lesser-truck.trycloudflare.com/evaluate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Evaluation result:', result);
      
      // Store the evaluation result to display it
      setEvaluationResult(result.evaluation_paragraph);
      
    } catch (err) {
      console.error('Error evaluating conversation:', err);
      alert('Failed to evaluate conversation. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNewConversation = () => {
    setEvaluationResult(null);
    onRestart();
  };

  return (
    <div className="modalOverlay">
      <div className="modalCont">
        <GlassCard
            blurAmount={0.2}
            bgOpacity={0.90}
            contentBgOpacity={0.0}
            borderOpacity={0.125}
            noiseOpacity={0.0}
            borderRadius={18}
        >
          <div className="modalContent">
            {!evaluationResult ? (
              // Initial state: Show evaluation prompt
              <>
                <h1>You finished a conversation with <span>Babbly</span></h1>
                <p>
                  The next step is to allow us to process your conversation and evaluate how you did. 
                  We will be evaluating the things you said and how you said them to provide key pointers 
                  to improve your communication skills.
                </p>

                <div className="databtns">
                  <button 
                    onClick={handleEvaluate}
                    disabled={isEvaluating || !audioRecording}
                    className="evaluateBtn"
                  >
                    {isEvaluating ? 'Evaluating...' : 'Evaluate'}
                  </button>
                  <button 
                    onClick={onRestart}
                    disabled={isEvaluating}
                    className="restartBtn"
                  >
                    Restart
                  </button>
                </div>

                {!audioRecording && (
                  <p style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '10px' }}>
                    No audio recording available
                  </p>
                )}
              </>
            ) : (
              // Results state: Show evaluation results
              <>
                <div className="results">
                  <h1>Here is our advice to you on that conversation</h1>
                  <p>
                    {evaluationResult}
                  </p>
                </div>
    

                <div className="databtns">
                  <button 
                    onClick={handleNewConversation}
                    className="evaluateBtn"
                  >
                    Start New Conversation
                  </button>
                </div>
              </>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Modal;