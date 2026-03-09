import React from 'react';
import Header from '@/components/Header';
import TypingEffect from '@/components/TypingEffect';
import SectionReveal from '@/components/SectionReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Code, Terminal, Database, GitBranch, Layout, ArrowRight, Zap } from 'lucide-react';

export default function Home() {
  const skills = [
    { name: 'C Programming', icon: <Terminal className="w-6 h-6" />, color: 'bg-blue-500/20' },
    { name: 'Python', icon: <Code className="w-6 h-6" />, color: 'bg-yellow-500/20' },
    { name: 'Data Structures & Algorithms', icon: <Database className="w-6 h-6" />, color: 'bg-purple-500/20', badge: 'Learning' },
    { name: 'Git & GitHub', icon: <GitBranch className="w-6 h-6" />, color: 'bg-orange-500/20' },
    { name: 'Basic HTML & CSS', icon: <Layout className="w-6 h-6" />, color: 'bg-cyan-500/20' },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bg/1920/1080')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        
        <SectionReveal className="z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel text-xs font-medium tracking-wider uppercase text-accent">
            CSE Student Portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold mb-4 tracking-tighter">
            Amit <span className="text-primary">Naganuri</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            2nd Year Computer Science Engineering Student
          </p>
          <div className="text-lg md:text-xl text-white/80 h-8 mb-12">
            <TypingEffect text="Building practical Python projects & learning Data Structures." speed={50} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="h-14 px-8 rounded-xl text-lg glow-button">
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-xl text-lg glass-panel hover:bg-white/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </SectionReveal>

        <div className="absolute bottom-10 animate-bounce text-muted-foreground">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-12 bg-black/20">
        <SectionReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-12">About Me</h2>
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-lg md:text-xl leading-relaxed text-muted-foreground text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16" />
            "I am a 2nd year Computer Science Engineering student with a strong foundation in C programming and Python. I am currently learning Data Structures and Algorithms to improve my problem-solving skills. I enjoy building practical projects that solve real-world problems. I actively use Git and GitHub to manage my code and improve my development workflow. My goal is to become a skilled software developer through continuous learning and hands-on projects."
          </div>
        </SectionReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground">Technologies and tools I work with daily</p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <SectionReveal key={i} className={`delay-[${i * 100}ms]`}>
                <Card className="h-full bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-none group">
                  <CardContent className="p-8 flex items-center gap-4">
                    <div className={`p-4 rounded-2xl ${skill.color} text-foreground transition-transform group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-lg">{skill.name}</h3>
                      {skill.badge && (
                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-12 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">Practical solutions to real-world problems</p>
          </SectionReveal>

          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center glass-panel rounded-[2.5rem] overflow-hidden p-8 md:p-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs">
                  <Zap className="w-4 h-4" /> Featured Project
                </div>
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-white">AI Folder Organizer (Python)</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI Folder Organizer is a Python-based automation tool that organizes files inside a directory based on their file types. 
                  The program scans a selected folder, identifies file extensions such as .pdf, .jpg, .png, .txt, .zip, etc., and automatically moves them into categorized subfolders.
                </p>
                
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-accent">How It Works</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Scans selected directory',
                      'Detects file extensions',
                      'Creates folders automatically',
                      'Moves files into folders'
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0">
                          {i + 1}
                        </div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Button size="lg" className="rounded-full px-8 h-12 glow-button bg-primary hover:bg-primary/90" asChild>
                    <a href="https://github.com/AmitNaganuri" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/folder/800/800" 
                  alt="AI Folder Organizer" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  data-ai-hint="folder management"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal className="mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Interested in working together or just want to say hi?</p>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-6">
            <SectionReveal className="delay-100">
              <a href="mailto:amit@example.com" className="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                  <p className="text-lg font-headline font-bold">amit@example.com</p>
                </div>
              </a>
            </SectionReveal>

            <SectionReveal className="delay-200">
              <a href="https://github.com/AmitNaganuri" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
                <div className="p-3 bg-accent/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">GitHub</p>
                  <p className="text-lg font-headline font-bold">@AmitNaganuri</p>
                </div>
              </a>
            </SectionReveal>

            <SectionReveal className="delay-300">
              <a href="https://linkedin.com/in/AmitNaganuri" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                  <p className="text-lg font-headline font-bold">Amit Naganuri</p>
                </div>
              </a>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline text-xl font-bold tracking-tighter">
            <span className="text-primary">Dev</span>Sphere
          </div>
          <div className="text-muted-foreground text-sm font-medium">
            © 2026 Amit Naganuri • All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
