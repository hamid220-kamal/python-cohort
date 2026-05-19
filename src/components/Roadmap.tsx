/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Zap, ChevronRight, Layers, Star, Play, Terminal, Database, Cpu, Brain, Rocket, Search, X } from 'lucide-react';
import { SYLLABUS, PYTHON_MODULES, PROJECTS } from './roadmapData';

export function Roadmap() {
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'phase2' | 'phase3' | 'phase4' | 'phase5'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map icon component dynamically
  const getIcon = (iconName: any) => {
    const IconComponent = iconName;
    return <IconComponent className="text-cyan-accent w-6 h-6" />;
  };

  return (
    <section id="syllabus" className="py-32 px-6 bg-[#040407] relative overflow-hidden z-10 border-b border-white/5">
      {/* Dynamic Grid Background with Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-[20%] left-[5%] w-[45%] h-[45%] bg-electric-blue/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-cyan-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="text-center mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-mono font-bold uppercase tracking-widest"
          >
            <Code2 size={12} className="animate-pulse" /> 300+ Build Milestones
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 tracking-tighter leading-none text-white">
            Complete Python <br /> 
            <span className="text-gradient-purple-green font-black italic">Build Track — Basics to Pro</span>
          </h2>
          
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-sans leading-relaxed">
            From variables to advanced recursive math and overloaded OOP engines. Zero passive theory; we build at every single core milestone.
          </p>
        </header>

        {/* --- Interactive Stepper Timeline Dashboard --- */}
        <div className="mb-28">
          <h3 className="text-xs uppercase font-mono font-black text-white/30 tracking-[0.25em] text-center mb-8">
            Interactive Roadmap Stepper
          </h3>

          {/* Stepper Navigation Container with side fades on mobile */}
          <div className="relative max-w-5xl mx-auto mb-10 group/stepper">
            {/* Left and Right ambient shadows for horizontal scrolling on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#040407] to-transparent pointer-events-none z-10 md:hidden opacity-0 group-hover/stepper:opacity-100 transition-opacity" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#040407] to-transparent pointer-events-none z-10 md:hidden opacity-0 group-hover/stepper:opacity-100 transition-opacity" />
            
            <div className="flex md:grid md:grid-cols-5 gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1">
              {SYLLABUS.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBlock(idx)}
                  className={`snap-center shrink-0 w-[240px] md:w-auto glass p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    selectedBlock === idx 
                      ? 'border-electric-blue bg-white/[0.03] shadow-[0_0_25px_rgba(139,92,246,0.15)]' 
                      : 'border-white/5 hover:border-white/20 hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[10px] font-mono uppercase font-bold tracking-widest ${
                      selectedBlock === idx ? 'text-electric-blue' : 'text-white/30'
                    }`}>
                      Block 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{phase.days}</span>
                  </div>
                  <h4 className={`font-bold font-display text-sm truncate ${
                    selectedBlock === idx ? 'text-white' : 'text-white/60'
                  }`}>
                    {phase.title.split(': ')[1]}
                  </h4>
                  {selectedBlock === idx && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-cyan-accent"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Details Container */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedBlock}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 md:p-12 rounded-[36px] border border-white/10 bg-white/[0.01] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden"
              >
                {/* Visual Glow Core */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-electric-blue/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 shadow-inner">
                      {getIcon(SYLLABUS[selectedBlock].icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-cyan-accent font-bold tracking-wider">
                        {SYLLABUS[selectedBlock].days}
                      </span>
                      <h3 className="text-3xl font-display font-extrabold text-white">
                        {SYLLABUS[selectedBlock].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-white/70 italic font-sans border-l-2 border-cyan-accent pl-4 py-1">
                    "{SYLLABUS[selectedBlock].highlight}"
                  </p>

                  <ul className="space-y-4 pt-2">
                    {SYLLABUS[selectedBlock].items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed font-sans group">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent/60 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Capstone Highlights inside Phase Card */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between">
                  <div className="glass p-6 rounded-3xl border border-cyan-accent/20 bg-cyan-accent/[0.02] space-y-4">
                    <div className="flex items-center gap-2 text-cyan-accent">
                      <Layers size={16} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold">Capstone Build Project</span>
                    </div>
                    <h4 className="text-xl font-bold font-display text-white leading-snug">
                      {SYLLABUS[selectedBlock].capstone}
                    </h4>
                    <p className="text-xs text-white/40 leading-relaxed font-sans">
                      Verify your core skills by compiling, testing, and deploying this master classwork. Checked directly by our automated repo-audit system.
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Grid Library: Standard Chapters (PYTHON_MODULES) --- */}
        <div className="mb-32">
          <header className="text-center mb-16 space-y-2">
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Deep-Dive Modules Syllabus
            </h3>
            <p className="text-white/40 text-base max-w-2xl mx-auto font-sans">
              Take a comprehensive look at the modules covering the 13 core syllabus segments from start to finish.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYTHON_MODULES.map((module, idx) => (
              <motion.article 
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.06 }}
                className="glass p-8 rounded-[32px] border border-white/5 hover:border-cyan-accent/30 transition-all duration-300 group flex flex-col justify-between h-full bg-white/[0.01] hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.06)]"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-lg bg-cyan-accent/10 text-cyan-accent font-mono text-[10px] font-bold tracking-widest uppercase border border-cyan-accent/20">
                      {module.id}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider font-mono ${
                      module.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                      module.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                      module.difficulty === 'Advanced' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-electric-blue/10 text-electric-blue border border-electric-blue/20'
                    }`}>
                      {module.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-extrabold text-white group-hover:text-cyan-accent transition-colors leading-tight">
                    {module.title}
                  </h3>
                  
                  <p className="text-white/40 text-xs font-mono flex items-center gap-2 border-b border-white/5 pb-4">
                    <Zap size={10} className="text-cyan-accent" /> {module.duration}
                  </p>
                  
                  <ul className="space-y-3.5 pt-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-white/50 flex items-start gap-2.5 leading-snug font-sans group/li">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0 group-hover/li:bg-cyan-accent transition-colors" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <footer className="pt-6 mt-8 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">Build Milestone</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </footer>
              </motion.article>
            ))}
          </div>
        </div>

        {/* --- Redesigned Core & Mega Projects Showcase --- */}
        <section className="glass rounded-[48px] p-8 md:p-16 border-2 border-white/10 bg-[#07070B]/90 relative overflow-hidden">
          {/* Glowing particle backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-electric-blue/10 blur-[130px] rounded-full pointer-events-none" />

          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 relative z-10">
            <div className="max-w-2xl text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                <Star size={10} fill="currentColor" /> Real-World Systems
              </span>
              <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
                4 Core Mega Projects
              </h3>
              <p className="text-white/50 text-lg mt-3 font-sans leading-relaxed">
                Directly sourced from advanced AI engineering practices. Zero toy examples; we construct fully operational RAG engines, CrewAI agent teams, and autonomous OS interceptors.
              </p>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-electric-blue/15 border-2 border-electric-blue/25 text-white font-semibold font-mono text-xs text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-accent animate-ping" />
              <span className="text-cyan-accent font-bold">MEGAS INCLUDED:</span> <br />
              RAG Engines, Agentic Crews & OS Interceptors
            </div>
          </header>

          {/* Search bar & Category Tabs Container */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-start gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'phase2', label: 'Phase 2: LLM APIs (11)' },
                { id: 'phase3', label: 'Phase 3: RAG & Vector (11)' },
                { id: 'phase4', label: 'Phase 4: Agentic Graphs (11)' },
                { id: 'phase5', label: 'Phase 5: Multimodal & MLOps (7)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-electric-blue/15 border-electric-blue text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                      : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Real-time Project Search Bar */}
            <div className="relative w-full md:max-w-xs group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-cyan-accent transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-accent/55 focus:bg-white/[0.04] transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROJECTS.filter(project => {
              // Category filter
              let matchesCategory = true;
              if (selectedCategory === 'phase2') matchesCategory = project.id >= 1 && project.id <= 11;
              else if (selectedCategory === 'phase3') matchesCategory = project.id >= 12 && project.id <= 22;
              else if (selectedCategory === 'phase4') matchesCategory = project.id >= 23 && project.id <= 33;
              else if (selectedCategory === 'phase5') matchesCategory = project.id >= 34 && project.id <= 40;

              // Search query filter
              let matchesSearch = true;
              if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                matchesSearch = project.title.toLowerCase().includes(query) || 
                                (project.complexity || '').toLowerCase().includes(query) ||
                                `project ${project.id}`.includes(query);
              }

              return matchesCategory && matchesSearch;
            }).map((project) => {
              const isMega = project.title.toLowerCase().includes("mega") || project.id === 40;
              return (
                <article 
                  key={project.id} 
                  className={`glass p-8 rounded-3xl border transition-all duration-500 group flex flex-col justify-between min-h-[220px] ${
                    isMega 
                      ? 'border-electric-blue bg-electric-blue/[0.02] hover:bg-electric-blue/[0.04] shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:scale-[1.03]' 
                      : 'border-white/5 hover:border-cyan-accent/30 hover:bg-white/[0.03] hover:scale-[1.02]'
                  }`}
                >
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-white/35 font-mono text-[10px] font-bold uppercase tracking-widest">
                        Project {project.id < 10 ? `0${project.id}` : project.id}
                      </span>
                      {isMega && (
                        <span className="px-2 py-0.5 rounded bg-cyan-accent/20 border border-cyan-accent/30 text-cyan-accent font-mono text-[8px] font-bold tracking-widest uppercase">
                          Mega Build
                        </span>
                      )}
                    </div>
                    <h4 className="font-extrabold text-white text-lg leading-tight group-hover:text-cyan-accent transition-colors font-display">
                      {project.title.split(': ')[1] || project.title}
                    </h4>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className={`text-[9px] uppercase font-mono font-bold tracking-[0.2em] ${
                      project.complexity === 'Beginner' ? 'text-green-500' : project.complexity === 'Intermediate' ? 'text-amber-500' : 'text-electric-blue'
                    }`}>
                      {project.complexity}
                    </span>
                    <Play size={12} className="text-white/35 group-hover:text-cyan-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Redesigned Mastered Tools section */}
        <footer className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Code Environments", items: ["VS Code", "PyCharm", "Google Colab", "Docker Envs"] },
            { title: "Assessment Platforms", items: ["LeetCode", "HackerRank", "GitHub Issues"] },
            { title: "Enterprise Integrations", items: ["FastAPI", "Flask", "SQLAlchemy", "httpx"] },
            { title: "Deployment Platforms", items: ["Railway", "Vercel", "Streamlit Cloud", "Docker Hub"] }
          ].map((stack, i) => (
            <div key={i} className="space-y-4 text-left">
              <h4 className="text-xs uppercase font-mono font-black text-white/30 tracking-[0.25em]">{stack.title}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map(item => (
                  <span key={item} className="px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all text-xs text-white/60 font-mono">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </footer>

      </div>
    </section>
  );
}
