
import React from 'react';
import { TaskBar } from './TaskBar';
import RetroPage from './RetroPage';

export const Desktop = () => {
  return (
    <>
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 p-2 overflow-auto">
          <div className="grid grid-cols-auto-fit gap-4">
            <RetroPage />
          </div>
        </div>
      </div>
      <TaskBar />
    </>
  );
};
