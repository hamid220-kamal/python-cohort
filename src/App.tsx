import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, Menu, X } from 'lucide-react';

import { StarBackground } from './components/StarBackground';
import { EnrollmentModal } from './components/EnrollmentModal';
import { Hero } from './components/Hero';
import { Roadmap } from './components/Roadmap';
import { Outcomes } from './components/Outcomes';
import { Mentor } from './components/Mentor';
import { CTASection } from './components/CTASection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

import { getWhatsAppUrl } from './components/roadmapData';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(getWhatsAppUrl('general'), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen selection:bg-electric-blue/30 bg-obsidian-glow">
      <StarBackground />
      


      {/* Mobile Slide-out Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-navy-dark/95 backdrop-blur-2xl border-l border-white/10 p-8 z-[100] md:hidden flex flex-col justify-between"
            >
              <div className="space-y-10">
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-gradient-purple-green text-xl">Navigation</span>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <nav className="flex flex-col gap-6 text-lg font-medium text-white/80">
                  <a 
                    href="#syllabus" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyan-accent transition-colors flex items-center gap-1.5"
                  >
                    Curriculum
                  </a>
                  <a 
                    href="#outcomes" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyan-accent transition-colors flex items-center gap-1.5"
                  >
                    Outcomes
                  </a>
                  <a 
                    href="#mentor" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyan-accent transition-colors flex items-center gap-1.5"
                  >
                    Mentor
                  </a>
                  <a 
                    href="#faq" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-cyan-accent transition-colors flex items-center gap-1.5"
                  >
                    FAQ
                  </a>
                </nav>
              </div>
              
              <button 
                onClick={() => {
                  setIsEnrollModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-electric-blue hover:bg-violet-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-electric-blue/20 transition-all cursor-pointer"
              >
                Enroll Now 🚀
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <EnrollmentModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
      />
      
      {/* Premium Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-300">
            <span className="font-display font-bold text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300">ap</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-gradient-purple-green">Advanced Python</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#syllabus" className="hover:text-cyan-accent transition-colors">Curriculum</a>
          <a href="#outcomes" className="hover:text-cyan-accent transition-colors">Outcomes</a>
          <a href="#mentor" className="hover:text-cyan-accent transition-colors">Mentor</a>
          <a href="#faq" className="hover:text-cyan-accent transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsEnrollModalOpen(true)}
            className="hidden sm:block glass px-6 py-2 rounded-full text-sm font-bold text-electric-blue border-electric-blue/30 hover:bg-electric-blue hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            Enroll Now 🚀
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Main Core Elements */}
      <main>
        <Hero onEnrollClick={() => setIsEnrollModalOpen(true)} />
        <Roadmap />
        <Outcomes />
        <Mentor />
        <CTASection onEnrollClick={() => setIsEnrollModalOpen(true)} />
        <FAQ />
      </main>

      <Footer />

      {/* Persistent Floating Utility Hub */}
      <aside className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex flex-col gap-3.5 items-end" aria-label="Floating Shortcuts">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow cursor-pointer"
          aria-label="Contact Hamid Kamal on WhatsApp"
        >
          <MessageSquare className="text-white fill-white block sm:hidden" size={20} />
          <MessageSquare className="text-white fill-white hidden sm:block" size={24} />
        </motion.button>
        
        <button 
          onClick={() => setIsEnrollModalOpen(true)}
          className="bg-electric-blue text-white font-bold py-2.5 px-5 sm:py-3.5 sm:px-8 text-xs sm:text-base rounded-2xl shadow-xl flex items-center gap-2 group hover:bg-violet-600 transition-colors cursor-pointer"
        >
          <span className="sm:inline hidden">Enroll Now</span>
          <span className="inline sm:hidden">Enroll</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </aside>
    </div>
  );
}

