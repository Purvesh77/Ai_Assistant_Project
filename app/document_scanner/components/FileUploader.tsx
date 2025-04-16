"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

export default function FileUploader() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Dropped file:", file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card>
      {/* <CardContent className="p-5"> */}
      <CardContent className="p-10 space-y-6">
        <h3 className="text-xl font-semibold text-black mb-3">Drag and drop file here</h3>

        <div
          className={`border-2 border-dashed rounded-lg bg-gray-50 p-10 text-center transition-colors ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <UploadCloud className="mx-auto text-blue-500 mb-2" size={40} />
          <p className="text-gray-700">
            Limit 200MB per file • JPG, JPEG, PNG, GIF, BMP, TIFF, WEBP, PDF, TIF
          </p>

          <Button variant="outline" className="mt-3" onClick={triggerFileSelect}>
            Browse files
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp,.pdf,.tif"
          />
        </div>

        {selectedFile && (
          <div className="mt-4 text-sm text-gray-800">
            <strong>Selected file:</strong> {selectedFile.name}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
