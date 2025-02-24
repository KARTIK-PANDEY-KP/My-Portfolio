
import React from 'react';
import { TaskBar } from './TaskBar';
import RetroPage from './RetroPage';
import { Briefcase } from 'lucide-react';

export const Desktop = () => {
  const resumeUrl = "https://drive.google.com/file/d/1E3qELLNBcobEiTwQhZl8sv3H4HvxJg_M/view?usp=sharing";

  return (
    <>
      <div 
        className="relative h-full overflow-hidden"
        style={{
          backgroundImage: "url('https://i.imgur.com/v5eQQr5.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 p-2 overflow-auto">
          <div className="grid grid-cols-auto-fit gap-4">
            <RetroPage />
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-icon flex flex-col items-center space-y-2 p-2 hover:bg-white/10 rounded"
            >
              <Briefcase className="w-10 h-10 text-vista-accent" />
              <span className="text-sm text-center text-white">Resume</span>
            </a>
          </div>
        </div>
      </div>
      <TaskBar />
    </>
  );
};
