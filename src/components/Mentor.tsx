/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Star, CheckCircle2, Linkedin, Github, ExternalLink, Cpu, Terminal, Flame, Award } from 'lucide-react';
import mentorImg from '../assets/images/HAMID_KAMAL.png';

export function Mentor() {
  const highlights = [
    { label: "Started Coding", value: "14", suffix: "Years Old", icon: Terminal, color: "text-cyan-accent" },
    { label: "Current Age", value: "17", suffix: "Years Old", icon: Flame, color: "text-red-500" },
    { label: "Built & Deployed", value: "100+", suffix: "Projects", icon: Cpu, color: "text-electric-blue" },
    { label: "Core Expertise", value: "AI", suffix: "Specialist", icon: Award, color: "text-amber-500" }
  ];

  const philosophyItems = [
    "Zero Mock Data Policy",
    "Build Live Projects Only",
    "Industry-Standard Repo Setup",
    "Logic-First Approach",
    "AI Workflow Integration",
    "Direct Mentorship Access"
  ];

  return (
    <section id="mentor" className="py-32 px-6 overflow-hidden relative z-10 bg-[#030305]">
      {/* Visual Backlighting */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[48px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-l-4 border-l-electric-blue bg-[#07070B]/85 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-electric-blue to-cyan-accent" />

          {/* Left Column: Highlight Dashboard */}
          <div className="lg:col-span-5 space-y-8 w-full">
            {/* Mentor Image Card */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/image bg-[#0a0a0f]">
              <img 
                src={mentorImg} 
                alt="Hamid Kamal" 
                className="w-full h-full object-cover object-top group-hover/image:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070B]/85 via-transparent to-transparent" />
            </div>

            {/* Quick Highlights Dashboard Grid */}
            <div className="glass p-6 rounded-3xl border border-white/10 relative overflow-hidden bg-white/[0.01]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-accent/5 blur-2xl pointer-events-none" />
              
              <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-accent mb-6 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
                Engineering Diagnostics
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="p-4 rounded-2xl border border-white/5 bg-white/[0.005] transition-all flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <stat.icon className={`${stat.color} w-4 h-4`} />
                      <span className="text-[9px] font-mono uppercase font-bold text-white/30">Active</span>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-white tracking-tighter">
                        {stat.value} <span className="text-xs font-normal text-white/40">{stat.suffix}</span>
                      </p>
                      <p className="text-[8px] uppercase tracking-wider text-white/30 font-bold font-mono mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content & Value Statement */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              {/* Premium Heading Label */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[10px] font-bold uppercase tracking-widest mb-6 font-mono"
              >
                <Star size={10} fill="currentColor" className="animate-pulse" /> Meet Your Mentor
              </motion.div>

              <h2 className="text-4xl sm:text-6xl font-display font-extrabold mb-4 leading-[1.1] text-white">
                Master Python <br /> 
                with <span className="text-gradient-purple-green italic font-black drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]">Hamid Kamal</span>
              </h2>
              
              <div className="inline-block px-4 py-2 rounded-xl border border-electric-blue/20 bg-electric-blue/[0.02] text-xs font-mono text-cyan-accent leading-relaxed mb-8 shadow-inner">
                17-Year-Old Developer | Co-Founder CNC Jugaaadi | Certified in Cyber Security via Corizo & IIT Bombay Mood Indigo
              </div>
              
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-sans">
                <p>
                  Coding isn't about memorizing dry theory—it's about building real assets. I started coding at 14, and by 17, I was already architecting production pipelines and building AI-driven solutions practically. 
                </p>
                <p>
                  My goal isn't just to talk about code structure; it's to show you exactly how to build and scale real projects by getting your hands dirty with real code from day one.
                </p>
                <p>
                  I believe age is just a number. If you have the curiosity and the right blueprint, you can dominate the tech world from your bedroom. I'm here to give you that blueprint.
                </p>
              </div>
            </div>

            {/* Build-First Philosophy Box */}
            <div className="glass p-8 rounded-3xl border border-white/5 bg-white/[0.01] relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-electric-blue/5 blur-3xl pointer-events-none" />
              
              <h4 className="font-bold mb-6 text-white flex items-center gap-2 font-display text-lg">
                <CheckCircle2 size={18} className="text-cyan-accent" /> Build-First Philosophy
              </h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {philosophyItems.map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-white/45 group cursor-default font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue group-hover:bg-cyan-accent group-hover:scale-150 transition-all shrink-0" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Connectivity Hub */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-white/5">
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://www.linkedin.com/in/hamid-kamal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 hover:bg-electric-blue hover:border-electric-blue/30 transition-all group shadow-xl"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} className="text-white group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://github.com/hamid220-kamal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 hover:bg-[#181717] hover:border-white/20 transition-all group shadow-xl"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} className="text-white group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://hamid.jugaaadi.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 hover:bg-cyan-accent hover:border-cyan-accent/30 hover:text-navy-dark transition-all group shadow-xl text-white"
                  aria-label="Portfolio Hub"
                >
                  <ExternalLink size={22} className="group-hover:scale-110 transition-transform group-hover:text-navy-dark" />
                </motion.a>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-white/35 uppercase tracking-widest font-black leading-none">Connect Directly</p>
                <a 
                  href="https://hamid.jugaaadi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-accent hover:underline font-mono"
                >
                  hamid.jugaaadi.com
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
