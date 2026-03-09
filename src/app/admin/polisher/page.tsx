"use client"

import React, { useState } from 'react';
import { polishProjectDescription } from '@/ai/flows/polish-project-description-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PolisherPage() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [polished, setPolished] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePolish = async () => {
    if (!projectName || !description) return;
    setLoading(true);
    try {
      const result = await polishProjectDescription({ projectName, description });
      setPolished(result.polishedDescription);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-headline font-bold">Project Polisher</h1>
            <p className="text-muted-foreground">AI-powered tool to refine your project descriptions.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Input Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input 
                  placeholder="e.g. AI Folder Organizer" 
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="bg-black/20 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Raw Description</label>
                <Textarea 
                  placeholder="Describe your project simply..."
                  rows={8}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-black/20 border-white/10"
                />
              </div>
              <Button 
                onClick={handlePolish} 
                disabled={loading || !projectName || !description}
                className="w-full h-11"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                Polish Description
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Polished Result</CardTitle>
            </CardHeader>
            <CardContent>
              {polished ? (
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm leading-relaxed whitespace-pre-wrap">
                  {polished}
                </div>
              ) : (
                <div className="h-[300px] flex flex-col items-center justify-center text-muted-foreground border border-dashed border-white/10 rounded-lg">
                  <p>Your polished description will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
