/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYLLABUS } from './roadmapData';

export function Blueprint() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const activePhase = SYLLABUS[activeAccordion];
  const ActiveIcon = activePhase.icon;

  return (
    <section id="syllabus" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <header className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tighter italic text-white underline decoration-electric-blue/50 underline-offset-8"
        >
          Zero-Theory Build Plan
        </motion.h2>
        <p className="text-xl text-white/50">Master the entire syllabus of our elite Python cohort via practical building, module-by-module.</p>
      </header>

      {/* Accordion Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {SYLLABUS.map((phase, idx) => (
          <button 
            key={idx} 
            onClick={() => setActiveAccordion(idx)}
            className={`p-6 rounded-3xl border-2 transition-all cursor-pointer text-left focus:outline-none ${
              activeAccordion === idx 
                ? "bg-electric-blue/10 border-electric-blue/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]" 
                : "bg-white/[0.01] border-white/5 hover:border-white/10"
            } flex flex-col group`}
          >
            <span className={`text-[10px] font-mono font-bold ${activeAccordion === idx ? "text-cyan-accent" : "text-white/40"} mb-1.5 tracking-widest uppercase`}>
              Phase 0{idx + 1} ({phase.days})
            </span>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-electric-blue transition-colors">
              {phase.title.split(': ')[1]}
            </h3>
          </button>
        ))}
      </div>

      {/* Blueprint Visual Details Card */}
      <div className="glass rounded-[50px] p-8 md:p-16 border-2 border-electric-blue/20 bg-electric-blue/[0.01] relative overflow-hidden group min-h-[480px]">
        {/* Ambient Glowing Logo overlay in the background */}
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] -rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none text-electric-blue hidden lg:block">
          <ActiveIcon size={350} />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeAccordion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
          >
            <div className="space-y-6">
              <header className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center text-3xl font-black text-electric-blue border border-electric-blue/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  {activeAccordion + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-white">{activePhase.title}</h3>
                  <p className="text-cyan-accent font-mono font-bold tracking-widest uppercase text-xs">
                    {activePhase.days} • {activePhase.highlight}
                  </p>
                </div>
              </header>
              
              <ul className="space-y-4">
                {activePhase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60 group/item leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-electric-blue mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="group-hover/item:text-white transition-colors text-sm md:text-base font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 glass rounded-2xl border-l-4 border-l-cyan-accent bg-white/[0.01]">
                <h4 className="text-[10px] font-mono text-cyan-accent uppercase tracking-widest mb-1.5 font-bold">Phase Highlight Capstone</h4>
                <p className="text-lg md:text-xl font-bold text-white italic font-display">
                  {activePhase.capstone}
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <article className="w-full max-w-sm aspect-square glass rounded-[40px] flex flex-col items-center justify-center text-center p-10 border-2 border-white/5 shadow-2xl group/card relative z-10 transition-all hover:scale-[1.02] duration-300">
                <div className="w-24 h-24 bg-electric-blue/10 border border-electric-blue/20 rounded-3xl flex items-center justify-center text-electric-blue mb-6 group-hover/card:bg-electric-blue group-hover/card:text-white transition-all duration-300">
                  <ActiveIcon size={48} />
                </div>
                <span className="text-[10px] font-mono text-cyan-accent uppercase tracking-widest mb-2 font-bold">Phase Highlight</span>
                <h4 className="text-3xl font-display font-bold leading-tight">
                  {activePhase.highlight}
                </h4>
              </article>
              {/* Premium Glow effect */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-electric-blue/20 blur-[80px] rounded-full -z-10 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-cyan-accent/10 blur-[60px] rounded-full -z-10 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
