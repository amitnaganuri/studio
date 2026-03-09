"use client"

import React from 'react';

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-12 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-white/5">
      <div className="font-headline text-xl font-bold tracking-tighter">
        <span className="text-primary">Dev</span>Sphere
      </div>
      <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
        <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">About</button>
        <button onClick={() => scrollTo('skills')} className="hover:text-primary transition-colors">Skills</button>
        <button onClick={() => scrollTo('projects')} className="hover:text-primary transition-colors">Projects</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
      </nav>
    </header>
  );
}
