
import React, { useState } from 'react';
import { MenuSectionProps } from './types';
import { FileUploader } from './FileUploader';

export const MenuSection = ({ items, className = "" }: MenuSectionProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File[] }>({});
  const [isUploaderOpen, setIsUploaderOpen] = useState<string | null>(null);

  const handleClick = (url?: string, label?: string, uploadAccept?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else if (uploadAccept) {
      setIsUploaderOpen(label);
    }
  };

  const handleUpload = (label: string, files: FileList) => {
    const newFiles = Array.from(files);
    setUploadedFiles(prev => ({
      ...prev,
      [label]: [...(prev[label] || []), ...newFiles]
    }));
  };

  return (
    <>
      <div className={`space-y-1 ${className}`}>
        {items.map((item, index) => (
          <button 
            key={index}
            onClick={() => handleClick(item.url, item.label, item.uploadAccept)}
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

      {isUploaderOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full m-4">
            <div className="p-4">
              <FileUploader
                title={isUploaderOpen}
                acceptedTypes={items.find(item => item.label === isUploaderOpen)?.uploadAccept || '*'}
                files={uploadedFiles[isUploaderOpen] || []}
                onUpload={(files) => handleUpload(isUploaderOpen, files)}
              />
              <Button 
                onClick={() => setIsUploaderOpen(null)}
                className="mt-4 w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
