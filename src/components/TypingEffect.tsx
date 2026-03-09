"use client"

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
}

export default function TypingEffect({ text, speed = 100 }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="inline-block border-r-2 border-accent pr-1 animate-pulse">
      {displayedText}
    </span>
  );
}
