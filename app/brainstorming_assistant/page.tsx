
"use client";


import React from "react";
import BrainstormingChat from "@/app/brainstorming_assistant/components/BrainstormingChat";
import UploadSection from "@/app/brainstorming_assistant/components/UploadSection";


// import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';

export default function BrainstormingAssistant() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        <span role="img" aria-label="lightbulb">💡</span> 
        Brainstorming Assistant
      </h1>
      <p className="text-black mb-8">Generate, refine, and expand on your ideas with AI assistance</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3 space-y-4">
          <div className="bg-blue-50 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              <span role="img" aria-label="notebook">📝</span> Let's Brainstorm Ideas!
            </h2>
            <p>I can help you generate, refine, and expand on your thoughts!</p>
          </div>

          {/* <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Upload a document</h2>
            <p>Drag and drop file here</p>
            <p className="text-sm text-gray-500">Limit 200MB per file • PDF, TXT, DOCX</p>
            <input type="file" className="mt-2" />
          </div> */}

          {/* Upload Section */}
        {/* <Card>
          <CardContent className="p-5 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FileText size={20} /> Upload a document
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center space-y-3 bg-gray-100">
              <UploadCloud className="mx-auto text-blue-500" size={40} />
              <p className="text-sm text-gray-600">Drag and drop file here</p>
              <p className="text-xs text-gray-500">Limit 200MB per file • PDF, TXT, DOCX</p>
              <Button variant="outline">Browse files</Button>
            </div>
          </CardContent>
        </Card> */}

<UploadSection />



        </div>
        <div className="md:w-2/3">
          <BrainstormingChat />
        </div>
      </div>
    </div>
  );
}
