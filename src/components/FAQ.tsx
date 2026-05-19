/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Code } from 'lucide-react';
import { FAQ_DATA } from './roadmapData';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-32 px-6 bg-[#030305] relative overflow-hidden z-10 border-b border-white/5">
      {/* Background Backlights */}
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-cyan-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-[320px] h-[320px] bg-electric-blue/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[10px] font-bold uppercase tracking-widest font-mono">
            <HelpCircle size={10} className="animate-pulse" /> Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-none">
            Common Questions
          </h2>
          <p className="text-white/40 text-sm md:text-base font-sans max-w-xl mx-auto">
            Everything you need to know about starting your practical coding journey with our Advanced Python Course.
          </p>
        </header>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article 
                key={idx} 
                className={`glass rounded-3xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? 'border-electric-blue bg-white/[0.02] shadow-[0_0_35px_rgba(139,92,246,0.08)]' 
                    : 'border-white/5 hover:border-cyan-accent/30 hover:bg-white/[0.005]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display font-bold text-lg md:text-xl text-white flex items-center gap-4">
                    {/* Glowing status indicator bullet */}
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-cyan-accent shadow-[0_0_10px_rgba(16,185,129,0.8)] scale-110' 
                        : 'bg-white/20 group-hover:bg-cyan-accent/60'
                    }`} />
                    {item.q}
                  </h3>
                  
                  <div className={`w-9 h-9 rounded-xl glass border border-white/5 flex items-center justify-center transition-all ${
                    isOpen ? 'bg-cyan-accent text-navy-dark border-cyan-accent/20' : 'text-white/40 group-hover:text-white'
                  }`}>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-navy-dark' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 pl-12.5 text-white/60 text-sm md:text-base font-sans leading-relaxed border-t border-white/5 flex items-start gap-4">
                        <div className="hidden sm:flex mt-1 text-cyan-accent select-none">
                          <Code size={14} />
                        </div>
                        <div className="flex-1">
                          {item.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
