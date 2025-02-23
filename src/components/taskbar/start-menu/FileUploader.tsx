
import React, { useState } from 'react';
import { Upload, FolderOpen } from 'lucide-react';
import { Button } from '../../ui/button';

interface FileUploaderProps {
  title: string;
  acceptedTypes: string;
  files: File[];
  onUpload: (files: FileList) => void;
}

export const FileUploader = ({ title, acceptedTypes, files, onUpload }: FileUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <input
          type="file"
          accept={acceptedTypes}
          onChange={handleFileChange}
          className="hidden"
          id={`file-upload-${title}`}
          multiple
        />
        <label htmlFor={`file-upload-${title}`}>
          <Button variant="outline" className="cursor-pointer">
            <Upload className="mr-2" />
            Upload {title}
          </Button>
        </label>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold mb-2">Uploaded Files:</h3>
        {files.length === 0 ? (
          <p className="text-gray-500">No files uploaded yet</p>
        ) : (
          <ul className="space-y-1">
            {files.map((file, index) => (
              <li key={index} className="flex items-center space-x-2">
                <FolderOpen className="w-4 h-4" />
                <span>{file.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
