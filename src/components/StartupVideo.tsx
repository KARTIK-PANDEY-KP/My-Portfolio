
import React, { useState, useEffect } from 'react';

interface StartupVideoProps {
  onVideoEnd: () => void;
}

const StartupVideo: React.FC<StartupVideoProps> = ({ onVideoEnd }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // This helps ensure the video is ready to play
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {loaded && (
        <video
          className="w-full h-full object-cover"
          autoPlay
          onEnded={onVideoEnd}
          muted={false}
          playsInline
        >
          <source 
            src="https://ia600302.us.archive.org/13/items/windows-xp-startup-and-shutdown-compilation/Windows%20XP%20Startup%20Sound.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default StartupVideo;
