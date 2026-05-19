/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Terminal as TerminalIcon, Code2, Flame } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  onEnrollClick: () => void;
}

export function Hero({ onEnrollClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'editor' | 'terminal'>('editor');
  const [typedCode, setTypedCode] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [hasCompiled, setHasCompiled] = useState(false);

  const fullCode = `import advanced_python as academy

class Developer:
    def __init__(self):
        self.method = "100% Practical"
        self.theory_only = False
        self.projects = [
            "Jarvis Voice Assistant",
            "Auto-Reply Naruto Bot"
        ]

    def build(self):
        for project in self.projects:
            self.write_code(project)
            self.deploy_to_production()
            print(f"[OK] Deployed {project}")

# Booting Practical Cohort...
dev = Developer()
dev.build()`;

  // Code typewriter simulation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, index));
      index += 2; // Type two characters at a time for smooth speed
      if (index >= fullCode.length) {
        clearInterval(interval);
        // Start compilation sequence automatically once typing finishes
        setTimeout(() => {
          triggerCompilation();
        }, 1000);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const triggerCompilation = () => {
    if (isCompiling) return;
    setActiveTab('terminal');
    setIsCompiling(true);
    setHasCompiled(false);
    setTerminalLogs([]);

    const logs = [
      "python main.py",
      "[INFO] Resolving system dependencies...",
      "[OK] venv active.",
      "[OK] Core modules linked.",
      "[INFO] Booting Snake Water Gun Game...",
      "[OK] Snake Water Gun Game compiled.",
      "[INFO] Booting Jarvis Voice Assistant (Mega Project)...",
      "[OK] Speech Recognition operational.",
      "[INFO] Booting Auto-Reply Naruto Chatbot (Mega Project)...",
      "[OK] PyAutoGUI established.",
      "[SUCCESS] main.py executed in 2.45s! 🚀",
      "Student transitioned to a building PRO."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, log]);
        if (index === logs.length - 1) {
          setIsCompiling(false);
          setHasCompiled(true);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden z-10 flex items-center justify-center border-b border-white/5 bg-[#030305]">
      {/* High-tech matrix grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
      
      {/* Ambient color gradient blobs */}
      <div className="absolute top-[10%] right-[5%] w-[45%] h-[45%] bg-electric-blue/15 blur-[130px] rounded-full pointer-events-none animate-pulse [animation-duration:8s]" />
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-cyan-accent/8 blur-[130px] rounded-full pointer-events-none animate-pulse [animation-duration:6s]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Brand & Value Prop */}
        <div className="lg:col-span-6 space-y-8 text-left">
          {/* Neon Glow Interactive Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full border border-electric-blue/30 shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="w-2.5 h-2.5 bg-cyan-accent rounded-full animate-ping" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent font-bold">
              ADVANCED PYTHON COURSE — ENROLLMENT ACTIVE
            </span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-[4.5rem] font-display font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Stop Watching. <br />
            Start <span className="text-gradient-purple-green font-black drop-shadow-[0_0_30px_rgba(16,185,129,0.25)]">Building</span>. <br />
            Learn Python <span className="italic font-light text-white/95">Practically</span>.
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-sans"
          >
            Zero dry theory loops. Zero passive video hell. Master Python by writing raw code, structuring real packages, and deploying robust applications with our elite production-grade curriculum.
          </motion.p>

          {/* Value Stats Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 max-w-xl"
          >
            <div className="space-y-1 text-center flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">150+</h4>
              <p className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Active Builders</p>
            </div>
            <div className="space-y-1 border-x border-white/5 px-2 md:px-4 text-center flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">4 Core</h4>
              <p className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Mega Projects</p>
            </div>
            <div className="space-y-1 text-center flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">₹666/Mo</h4>
              <p className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Monthly Fee</p>
            </div>
          </motion.div>

          {/* Premium Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl z-10"
          >
            <button 
              onClick={onEnrollClick}
              className="bg-electric-blue hover:bg-violet-600 px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_0_45px_rgba(139,92,246,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer text-white group"
            >
              Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#syllabus" 
              className="glass px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-white border-white/10"
            >
              Explore Build Plan <ChevronDown size={20} />
            </a>
          </motion.div>

          {/* Countdown Utility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-md pt-4"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-mono mb-4 text-white/30">Next Cohort Starts In</p>
            <CountdownTimer targetDate="2026-05-25T00:00:00" />
          </motion.div>
        </div>

        {/* Right Column: Interactive Code Editor Simulation */}
        <div className="lg:col-span-6 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full glass rounded-[36px] border-2 border-white/10 bg-[#07070B]/85 shadow-2xl relative overflow-hidden group/editor min-h-[460px] flex flex-col"
          >
            {/* Editor Window Chrome Header */}
            <header className="flex justify-between items-center px-3 sm:px-6 py-3 sm:py-4 border-b border-white/5 bg-[#050508]/90 gap-2">
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
              </div>
              
              <div className="flex gap-1 sm:gap-2.5 glass p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-white/5">
                <button 
                  onClick={() => setActiveTab('editor')}
                  className={`px-2 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer ${
                    activeTab === 'editor' ? 'bg-electric-blue text-white shadow' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Code2 size={10} className="sm:w-3 sm:h-3" /> <span className="hidden min-[380px]:inline">main.py</span><span className="inline min-[380px]:hidden">.py</span>
                </button>
                <button 
                  onClick={() => setActiveTab('terminal')}
                  className={`px-2 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer ${
                    activeTab === 'terminal' ? 'bg-electric-blue text-white shadow' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <TerminalIcon size={10} className="sm:w-3 sm:h-3" /> <span className="hidden min-[380px]:inline">terminal.log</span><span className="inline min-[380px]:hidden">.log</span>
                </button>
              </div>

              <button 
                onClick={triggerCompilation}
                disabled={isCompiling}
                className="glass hover:bg-cyan-accent hover:text-navy-dark px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-cyan-accent/20 text-cyan-accent font-bold text-[10px] sm:text-xs transition-all flex items-center gap-1 sm:gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                <Flame size={10} className={`${isCompiling ? "animate-bounce" : ""} sm:w-3 sm:h-3`} /> <span>{isCompiling ? "..." : "Run"}</span>
              </button>
            </header>

            {/* Window Content Container */}
            <div className="p-6 flex-1 font-mono text-sm leading-relaxed overflow-y-auto max-h-[380px]">
              <AnimatePresence mode="wait">
                {activeTab === 'editor' ? (
                  <motion.div 
                    key="editor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left select-none relative"
                  >
                    <pre className="text-white/80 whitespace-pre-wrap font-mono text-xs">
                      {typedCode}
                      <span className="w-2 h-4 bg-cyan-accent inline-block ml-0.5 animate-pulse" />
                    </pre>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left space-y-2 font-mono"
                  >
                    {terminalLogs.length === 0 ? (
                      <p className="text-white/30 italic">Press Run to execute main.py script...</p>
                    ) : (
                      terminalLogs.map((log, i) => {
                        let textClass = "text-white/70";
                        if (log.startsWith("python")) textClass = "text-white/40 font-bold";
                        else if (log.includes("[OK]")) textClass = "text-cyan-accent font-medium";
                        else if (log.includes("[INFO]")) textClass = "text-electric-blue";
                        else if (log.includes("[SUCCESS]")) textClass = "text-green-500 font-bold bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10";
                        else if (log.includes("Student")) textClass = "text-gradient-purple-green font-bold text-base mt-2 block border-t border-white/5 pt-2";

                        return (
                          <motion.p 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`${textClass} text-xs font-mono`}
                          >
                            {log.startsWith("python") ? `$ ${log}` : log}
                          </motion.p>
                        );
                      })
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Glowing Accent strip */}
            <div className="h-1 bg-gradient-to-r from-electric-blue via-transparent to-cyan-accent opacity-30" />
          </motion.div>

          {/* Premium Floating IDE Background Glow Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric-blue/15 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-accent/10 blur-[50px] rounded-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
