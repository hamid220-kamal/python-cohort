/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Send, Globe, Shield, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Email Support", href: "mailto:buildwithhamid@gmail.com", icon: Send, hoverColor: "hover:text-electric-blue hover:border-electric-blue/30" },
    { label: "learnquran.app", href: "https://learnquran.app", icon: Globe, hoverColor: "hover:text-cyan-accent hover:border-cyan-accent/30" },
    { label: "jugaaadi.com", href: "https://jugaaadi.com", icon: Globe, hoverColor: "hover:text-electric-blue hover:border-electric-blue/30" },
    { label: "hamid.jugaaadi.com", href: "https://hamid.jugaaadi.com", icon: Shield, hoverColor: "hover:text-cyan-accent hover:border-cyan-accent/30" }
  ];

  return (
    <footer className="border-t border-white/5 py-20 px-6 bg-[#030305] relative z-10 overflow-hidden">
      {/* Decorative subtle backlight */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-accent/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Core footer branding & links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          
          {/* Logo & Copyright block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-3xl font-display font-extrabold text-gradient-purple-green tracking-tighter">
              Advanced Python Course
            </span>
            <span className="text-white/10 hidden sm:inline">|</span>
            <span className="text-white/40 text-xs font-mono">
              © {currentYear} Hamid Kamal. All Rights Reserved.
            </span>
          </div>
          
          {/* Futuristic Link pill items */}
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer Navigation">
            {links.map((link, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -2 }}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`glass px-5 py-2.5 rounded-xl border border-white/5 text-white/40 transition-all flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold ${link.hoverColor}`}
              >
                <link.icon size={13} /> 
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
        
        {/* Hyderabad note & Legal Block */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white/30 text-xs font-sans">
            <span>Made with</span> 
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> 
            <span>in Hyderabad</span>
          </div>

          <div className="max-w-3xl text-center md:text-right text-[9px] font-mono text-white/20 tracking-wider uppercase leading-relaxed">
            LEGAL NOTE: ALL PRODUCTS AND INTELLECTUAL PROPERTY DEPLOYED VIA ADVANCED PYTHON COURSE ARE REGISTERED AND VERIFIED. COHORT PLACES ARE STRICTLY BOUND BY MENTORSHIP SLA TERMS.
          </div>
        </div>

      </div>
    </footer>
  );
}
