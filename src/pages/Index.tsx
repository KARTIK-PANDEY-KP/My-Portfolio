
import React, { useState, useEffect } from 'react';
import { Desktop } from '../components/Desktop';
import StartupVideo from '../components/StartupVideo';

const Index = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowVideo(false);
    }, 500); // Add a small delay to allow the video to finish completely
  };

  // This ensures that user interaction can trigger audio playback
  useEffect(() => {
    const handleUserInteraction = () => {
      if (showVideo && !videoEnded) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
      }
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [showVideo, videoEnded]);

  return (
    <div className="h-screen overflow-hidden relative font-segoe">
      {showVideo && <StartupVideo onVideoEnd={handleVideoEnd} />}
      {!showVideo && <Desktop />}
    </div>
  );
};

export default Index;
