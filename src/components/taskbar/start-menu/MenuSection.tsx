
import React, { useState, useEffect } from 'react';
import { MenuSectionProps } from './types';
import { FileUploader } from './FileUploader';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const MenuSection = ({ items, className = "" }: MenuSectionProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File[] }>({});
  const [isUploaderOpen, setIsUploaderOpen] = useState<string | null>(null);
  const { toast } = useToast();

  // Load saved files on component mount
  useEffect(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      try {
        // Since Files can't be stored directly in localStorage, we'll store metadata
        const filesData = JSON.parse(savedFiles);
        const reconstructedFiles: { [key: string]: File[] } = {};
        
        Object.keys(filesData).forEach(key => {
          reconstructedFiles[key] = filesData[key].map((fileData: any) => {
            // Create a new File object with the saved metadata
            const file = new File([], fileData.name, {
              type: fileData.type,
              lastModified: fileData.lastModified
            });
            return file;
          });
        });
        
        setUploadedFiles(reconstructedFiles);
      } catch (error) {
        console.error('Error loading saved files:', error);
      }
    }
  }, []);

  const handleClick = (url?: string, label?: string, uploadAccept?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else if (uploadAccept) {
      setIsUploaderOpen(label);
    }
  };

  const handleUpload = (label: string, files: FileList) => {
    const newFiles = Array.from(files);
    const updatedFiles = {
      ...uploadedFiles,
      [label]: [...(uploadedFiles[label] || []), ...newFiles]
    };
    
    setUploadedFiles(updatedFiles);

    // Save to localStorage (only metadata)
    const filesForStorage = Object.keys(updatedFiles).reduce((acc, key) => {
      acc[key] = updatedFiles[key].map(file => ({
        name: file.name,
        type: file.type,
        lastModified: file.lastModified
      }));
      return acc;
    }, {} as any);

    localStorage.setItem('uploadedFiles', JSON.stringify(filesForStorage));

    toast({
      title: "Files uploaded successfully",
      description: `${newFiles.length} file(s) uploaded to ${label}`,
    });
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
