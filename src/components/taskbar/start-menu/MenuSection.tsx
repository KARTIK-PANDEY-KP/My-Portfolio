
import React from 'react';
import { MenuSectionProps } from './types';

export const MenuSection = ({ items, className = "" }: MenuSectionProps) => {
  const handleClick = (url?: string) => {
    if (!url) return;

    // Create a new window element
    const windowElement = document.createElement('div');
    windowElement.className = 'fixed top-10 left-10 w-3/4 h-3/4 bg-white shadow-lg rounded z-50';
    windowElement.innerHTML = `
      <div class="flex items-center justify-between bg-blue-600 p-2 text-white">
        <span>External Link</span>
        <button class="close-btn px-2">&times;</button>
      </div>
      <div class="flex items-center justify-center w-full h-[calc(100%-2.5rem)] bg-white p-4">
        <div class="text-center">
          <p class="mb-4">This link will open in a new window.</p>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Click here to open ${url}
          </a>
        </div>
      </div>
    `;

    // Add close functionality
    const closeBtn = windowElement.querySelector('.close-btn');
    closeBtn?.addEventListener('click', () => {
      document.body.removeChild(windowElement);
    });

    // Add the window to the document
    document.body.appendChild(windowElement);
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {items.map((item, index) => (
        <button 
          key={index}
          onClick={() => handleClick(item.url)}
          className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {React.cloneElement(item.icon as React.ReactElement, {
              className: 'w-8 h-8'
            })}
          </div>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  );
};
