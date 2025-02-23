
import React from 'react';

export const UserHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] p-2 w-full rounded-t-lg">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/b6dcc8bc-3f57-40a2-a102-f0de33065727.png" 
          alt="User" 
          className="w-12 h-12 rounded-lg border-2 border-white object-cover"
        />
        <span className="text-white font-bold text-lg">KARTIK PANDE</span>
      </div>
    </div>
  );
};
