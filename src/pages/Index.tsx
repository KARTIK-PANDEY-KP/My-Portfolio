
import React, { useState } from 'react';
import { Desktop } from '../components/Desktop';
import StartupVideo from '../components/StartupVideo';

const Index = () => {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div className="h-screen overflow-hidden relative font-segoe">
      {showVideo ? (
        <StartupVideo onVideoEnd={handleVideoEnd} />
      ) : (
        <Desktop />
      )}
    </div>
  );
};

export default Index;
