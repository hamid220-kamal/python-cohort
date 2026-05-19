/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from './roadmapData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    designation: '',
    location: '',
    course: 'Complete Python & AI Projects Bootcamp (₹666/Month)',
    knowsAnything: '',
    aboutSelf: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative glass w-full max-w-2xl rounded-[32px] overflow-hidden border-2 border-electric-blue/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-navy-dark"
        >
          {submitted ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-cyan-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-cyan-accent animate-bounce" size={40} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Application Received!</h2>
              <p className="text-white/60 mb-6">Hamid Kamal or his team will review your parameters and reach out via WhatsApp shortly.</p>
              
              <a 
                href={getWhatsAppUrl('enroll')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Message Directly on WhatsApp 🚀
              </a>
            </div>
          ) : (
            <article className="max-h-[90vh] overflow-y-auto p-8 md:p-12 scrollbar-hide">
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <header className="mb-8">
                <h2 className="text-3xl font-display font-bold text-gradient-purple-green mb-2">Apply for python cohort</h2>
                <p className="text-white/50">Submit your parameters to begin your logical transformation journey.</p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Syed Shahnawaz"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all text-white placeholder-white/20"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Age</label>
                    <input 
                      required
                      type="number" 
                      placeholder="e.g. 19"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all text-white placeholder-white/20"
                      value={formData.age}
                      onChange={e => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Occupation</label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full glass bg-[#121217] rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all appearance-none cursor-pointer text-white"
                        value={formData.designation}
                        onChange={e => setFormData({...formData, designation: e.target.value})}
                      >
                        <option value="" disabled>Select Occupation</option>
                        <option value="School Student">School Student</option>
                        <option value="College Student">College Student</option>
                        <option value="Engineering Student">Engineering Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Place / City</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Hyderabad, India"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all text-white placeholder-white/20"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Course Track</label>
                  <input 
                    disabled
                    type="text" 
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 border border-white/10 text-white/40 italic cursor-not-allowed"
                    value={formData.course}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Prior Knowledge (Optional)</label>
                  <textarea 
                    rows={2}
                    placeholder="Briefly state programming paradigms you've interacted with (or write 'None')..."
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all resize-none text-white placeholder-white/20"
                    value={formData.knowsAnything}
                    onChange={e => setFormData({...formData, knowsAnything: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50 block">Mentorship Goals</label>
                  <textarea 
                    rows={3}
                    placeholder="What specific skills or automation tools do you want to master in 90 days?"
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all resize-none text-white placeholder-white/20"
                    value={formData.aboutSelf}
                    onChange={e => setFormData({...formData, aboutSelf: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-electric-blue hover:bg-violet-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Submit parameters <Send size={20} />
                </button>
              </form>
            </article>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
