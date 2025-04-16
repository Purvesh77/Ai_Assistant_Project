"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, FileText, Info, Languages } from "lucide-react";

import LanguageSelect from "./components/LanguageSelect";
import FileUploader from "./components/FileUploader"; // adjust the path if needed



export default function DocumentScanner() {
  return (
    <div className="p-6 space-y-6">
      {/* <div className="text-center"> */}
        <h1 className="text-4xl font-bold text-black flex items-center gap-2">
          <FileText className="text-black" /> Document Scanner
        </h1>
        <p className="text-black mt-2">Extract text from documents with AI-powered OCR technology</p>
      {/* </div> */}

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-blue-50">
          <CardContent className="p-5">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              <FileText className="text-red-500" /> Upload a document
            </h2>
            <p className="mt-2 text-black">Upload a document to extract its text content.</p>
            <div className="mt-3">
              <p className="font-semibold">Supported file formats:</p>
              <ul className="list-disc list-inside text-black">
                <li>PDF, JPG, JPEG, PNG, GIF, BMP, TIFF, WebP</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardContent className="p-5">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              <Languages className="text-red-500" /> Translate
            </h2>
            <p className="mt-2 text-black">
              <strong>Enter text below</strong> to translate to another language. The extracted text will be fetched
              automatically.
            </p>
            <label className="block text-sm mt-4 text-black">Select target language</label>

            {/* <select className="w-full p-2 mt-1 border rounded">
              <option>Chinese (Simplified)</option>
              <option>Spanish</option>
              <option>German</option>
            </select> */}

            <LanguageSelect />


            <Button className="mt-3 text-blue-600" variant="ghost">
              🔍 Translate Document
            </Button>
          </CardContent>
        </Card>
        

        <Card className="bg-blue-50">
          <CardContent className="p-5">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              <Info className="text-blue-500" /> How It Works
            </h2>
            <ul className="list-decimal list-inside mt-3 text-black space-y-1">
              <li>
                <strong>Upload</strong> your document (PDF, image, etc.)
              </li>
              <li>
                <strong>Process</strong> the document to extract text
              </li>
              <li>
                <strong>View</strong> the extracted text
              </li>
              <li>
                <strong>Download</strong> the text as a file
              </li>
              <li>
                <strong>Translate</strong> text to a different language
              </li>
            </ul>
            <div className="mt-3 text-sm text-black">
              <p className="font-semibold text-black">Tips:</p>
              <ul className="list-disc list-inside">
                <li>Use clear, well-lit images</li>
                <li>PDFs with text layers process faster</li>
                <li>Large documents may take longer to process</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* <Card>
          <CardContent className="p-5">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Drag and drop file here</h3>
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gray-50 text-center">
              <UploadCloud className="mx-auto text-blue-500 mb-2" size={40} />
              <p className="text-gray-700">Limit 200MB per file • JPG, JPEG, PNG, GIF, BMP, TIFF, WEBP, PDF, TIF</p>
              <Button variant="outline" className="mt-3">Browse files</Button>
            </div>
          </CardContent>
        </Card> */}


        <FileUploader />


        <Card>
          <CardContent className="p-5">
            <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
              <FileText /> Sample Output
            </h3>
            <p className="text-black mt-2">Here's an example of what the extracted text might look like:</p>
            <pre className="bg-gray-100 p-4 mt-3 rounded overflow-auto text-sm text-black">
              
              {`# Sample Document

## Introduction
This is a sample document that demonstrates the text extraction capabilities of our Document Scanner.

## Features
- Extracts text from various document formats
- Preserves formatting where possible
- Provides downloadable text files

## Conclusion
- The Document Scanner is a powerful tool for digitizing your documents.`}

            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
