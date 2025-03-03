
import React, { useState, useEffect } from 'react';

interface StartupVideoProps {
  onVideoEnd: () => void;
}

const StartupVideo: React.FC<StartupVideoProps> = ({ onVideoEnd }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    const video = document.getElementById('startup-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  const handleVideoEnded = () => {
    onVideoEnd();
  };

  useEffect(() => {
    const video = document.getElementById('startup-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('ended', handleVideoEnded);
    }
    
    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, [onVideoEnd]);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center cursor-pointer"
      onClick={!clicked ? handleClick : undefined}
    >
      {!clicked && (
        <div className="text-white text-center">
          <p className="text-xl mb-4">Click to play startup sound</p>
          <p className="text-sm">(Browser requires user interaction to play audio)</p>
        </div>
      )}
      <video 
        id="startup-video"
        className="w-full h-full object-cover"
        src="/202502271923 (1).mp4"
        muted={!clicked}
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default StartupVideo;
