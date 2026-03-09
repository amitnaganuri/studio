"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PolisherPage() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-headline font-bold">Project Polisher</h1>
            <p className="text-muted-foreground">AI-powered tool to refine your project descriptions.</p>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-yellow-500">
              <AlertCircle className="w-5 h-5" />
              Not Available in Static Mode
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The AI Polisher tool requires a server-side environment to run the GenAI models. 
              Since this version of the site is deployed as a <strong>static export</strong> on GitHub Pages, the tool is currently disabled.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To use AI features, consider deploying this application to <strong>Firebase App Hosting</strong> or a similar Node.js compatible provider.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
