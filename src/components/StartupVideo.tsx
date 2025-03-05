
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

  // If video fails to load or ends, proceed to desktop
  useEffect(() => {
    const video = document.getElementById('startup-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('error', () => {
        console.error('Video failed to load, proceeding to desktop');
        onVideoEnd();
      });
    }
  }, [onVideoEnd]);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center cursor-pointer"
      onClick={!clicked ? handleClick : undefined}
    >
      {!clicked && (
        <div className="absolute z-10 bg-[#ECE9D8] border-2 border-[#0054E3] rounded-sm shadow-vista-window p-6 max-w-md w-full mx-4">
          <div className="bg-gradient-to-r from-[#0054E3] to-[#3C81E5] text-white py-1 px-2 absolute top-0 left-0 right-0">
            <h2 className="text-sm font-semibold">Windows</h2>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-tahoma">Click to launch Windows XP desktop</p>
          </div>
        </div>
      )}
      <video 
        id="startup-video"
        className="w-full h-full object-cover"
        src="/lovable-uploads/202502271923 (1).mp4"
        onError={() => onVideoEnd()}
        muted={!clicked}
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default StartupVideo;
