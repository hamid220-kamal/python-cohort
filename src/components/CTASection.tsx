/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Lock, Smartphone, MapPin } from 'lucide-react';

interface CTASectionProps {
  onEnrollClick: () => void;
}

export function CTASection({ onEnrollClick }: CTASectionProps) {
  const benefits = [
    { icon: Lock, title: "100% Private & Personalized", color: "text-electric-blue", bg: "bg-electric-blue/5 border-electric-blue/20" },
    { icon: Smartphone, title: "Lifetime Repository Access", color: "text-cyan-accent", bg: "bg-cyan-accent/5 border-cyan-accent/20" },
    { icon: MapPin, title: "Made with ❤️ in Hyderabad", color: "text-red-400", bg: "bg-red-400/5 border-red-400/20" }
  ];

  return (
    <section className="py-32 px-6 relative z-10 bg-[#030305] overflow-hidden">
      {/* Intense Ambient light background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[48px] p-8 md:p-24 text-center relative overflow-hidden group bg-[#07070B]/85 border-2 border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        >
          {/* Internal Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-blue/15 blur-[130px] rounded-full -mr-48 -mt-48 transition-all duration-700 group-hover:bg-electric-blue/25 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-accent/10 blur-[130px] rounded-full -ml-48 -mb-48 transition-all duration-700 group-hover:bg-cyan-accent/20 pointer-events-none" />
          
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-6 relative text-white leading-none tracking-tighter">
            Ready to Build Real <br className="hidden md:block"/> Python Applications?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-sans leading-relaxed relative z-10">
            Join our elite 100% daily live classes with zero recorded sessions, build 4 Core Mega Projects, and learn directly from Hamid Kamal for just ₹666/Month.
          </p>
          
          <div className="inline-flex flex-col items-center gap-6 mb-16 relative z-10">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-electric-blue via-violet-600 to-cyan-accent px-16 py-7 rounded-[24px] font-extrabold text-xl md:text-2xl shadow-[0_0_55px_rgba(139,92,246,0.45)] hover:shadow-[0_0_75px_rgba(16,185,129,0.45)] transition-all duration-500 cursor-pointer text-white flex items-center gap-4 group/btn"
            >
              Enroll Now for ₹666/Month 
              <ArrowRight size={24} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-white/5 pt-12 relative z-10">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className={`glass p-5 rounded-2xl border ${benefit.bg} flex items-center justify-center gap-3.5`}
              >
                <benefit.icon size={20} className={`${benefit.color}`} />
                <span className="text-sm font-bold text-white/70 font-sans tracking-tight">{benefit.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
