"use client";

import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';

export default function UploadSection() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  function handleFileUpload(file: File) {
    if (file.size > 200 * 1024 * 1024) {
      alert("File size exceeds 200MB limit.");
      return;
    }

    // Placeholder for actual upload logic
    console.log("Uploaded file:", file);
    setSelectedFile(file);
  }

  return (
    <Card>
      <CardContent className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-black flex items-center gap-2">
          <FileText size={20} /> Upload a document
        </h3>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center space-y-3 bg-gray-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            handleFileUpload(file);
          }}
        >
          <UploadCloud className="mx-auto text-blue-500" size={40} />
          <p className="text-sm text-black">Drag and drop file here</p>
          <p className="text-sm text-gray-500">Limit 200MB per file • PDF, TXT, DOCX</p>

          <div className="mt-2">
            <label htmlFor="file-upload">
              <Button variant="outline" asChild>
                <span>Browse files</span>
              </Button>
            </label>
          </div>

          <input
            id="file-upload"
            type="file"
            accept=".pdf,.txt,.docx"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
            className="hidden"
          />
        </div>

        {selectedFile && (
          <div className="text-sm text-gray-700 mt-2 flex justify-between items-center">
            <span>{selectedFile.name}</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setSelectedFile(null)}
            >
              <Trash2 className="text-red-500" size={16} />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
