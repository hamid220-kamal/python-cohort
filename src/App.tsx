/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import { 
  Rocket, 
  Terminal, 
  Code2, 
  Globe, 
  Database, 
  MessageSquare, 
  ChevronDown, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Github,
  Lock,
  Smartphone,
  MapPin,
  ExternalLink,
  X,
  Send,
  Cpu,
  BookOpen,
  Sparkles,
  Brain,
  Zap
} from 'lucide-react';
import { StarBackground } from './components/StarBackground';
import { CountdownTimer } from './components/CountdownTimer';
import { AIAtlas } from './components/AIAtlas';
import mentorImg from './assets/images/mentor_hamid_kamal_1779183073579.png';

// --- Components ---

function EnrollmentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    designation: '',
    location: '',
    course: 'Python for Beginners (90 Days)',
    knowsAnything: '',
    aboutSelf: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
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
          className="absolute inset-0 bg-navy-dark/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative glass w-full max-w-2xl rounded-[32px] overflow-hidden border-2 border-electric-blue/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
        >
          {submitted ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-green-500" size={40} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Application Received!</h2>
              <p className="text-white/50">Hamid or his team will contact you on WhatsApp/Email within 24 hours.</p>
            </div>
          ) : (
            <div className="max-h-[90vh] overflow-y-auto p-8 md:p-12 scrollbar-hide">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
                <X size={24} />
              </button>
              
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyan-accent mb-2">Start Your Journey</h2>
                <p className="text-white/40">Fill in your details to apply for the next cohort.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Syed Shahnawaz"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Age</label>
                    <input 
                      required
                      type="number" 
                      placeholder="e.g. 19"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all"
                      value={formData.age}
                      onChange={e => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Designation</label>
                    <select 
                      required
                      className="w-full glass bg-[#1a1f35] rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all appearance-none cursor-pointer"
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
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Place / City</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Hyderabad, India"
                      className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Course to Enroll</label>
                  <input 
                    disabled
                    type="text" 
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 border border-white/10 text-white/50 italic cursor-not-allowed"
                    value={formData.course}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Prior Knowledge (If any)</label>
                  <textarea 
                    rows={2}
                    placeholder="Tell us if you know any languages or programming basics..."
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all resize-none"
                    value={formData.knowsAnything}
                    onChange={e => setFormData({...formData, knowsAnything: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">More About Yourself</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell Hamid something he should know about your goals..."
                    className="w-full glass bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-electric-blue transition-all resize-none"
                    value={formData.aboutSelf}
                    onChange={e => setFormData({...formData, aboutSelf: e.target.value})}
                  />
                </div>

                <button type="submit" className="w-full bg-electric-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Submit Application <Send size={20} />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Counter({ value, suffix = "", duration = 2 }: { value: number | string, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = typeof value === 'number' ? value : 0;
  const isInfinity = value === '∞';

  useEffect(() => {
    if (isInfinity) return;
    const controls = animate(0, numericValue, {
      duration: duration,
      onUpdate(v) {
        setCount(Math.floor(v));
      },
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [numericValue, isInfinity]);

  if (isInfinity) return <span>∞</span>;
  return <span>{count}{suffix}</span>;
}

const SYLLABUS = [
  {
    title: "Phase 1: The Foundations (Days 1-30)",
    items: [
      "Introduction to Python & VS Code setup",
      "Variables, Data Types, and Operators",
      "Control Flow: If-Else & Loops",
      "Functions and Scope",
      "Project: Build a Smart Command-Line Tool"
    ]
  },
  {
    title: "Phase 2: Master Logic (Days 31-60)",
    items: [
      "File I/O and Error Handling",
      "Object-Oriented Programming (OOP) Deep Dive",
      "Working with APIs and JSON",
      "Advanced Data Structures (Lists, Sets, Dicts)",
      "Project: Automated Web Scraper & Task Bot"
    ]
  },
  {
    title: "Phase 3: The Pro Journey (Days 61-90)",
    items: [
      "Intro to Data Science with NumPy & Pandas",
      "Building a Web App with Flask/FastAPI",
      "Database Integration (SQLite/Postgres)",
      "Final Capstone Project: Portfolio-ready AI Agent",
      "Mock Interviews & Resume Review"
    ]
  }
];

const OUTCOMES = [
  { icon: Terminal, title: "Automate Anything", text: "Turn repetitive tasks into one-line commands." },
  { icon: Database, title: "Data Mastery", text: "Process millions of records in seconds." },
  { icon: Globe, title: "Web Developer", text: "Build backend systems for the modern web." },
  { icon: ShieldCheck, title: "Cyber-Ready", text: "Understand the logic behind secure systems." }
];

const STATS = [
  { label: "Days", value: 90, suffix: "" },
  { label: "Projects", value: 12, suffix: "" },
  { label: "Tools", value: 30, suffix: "+" },
  { label: "Mentor", value: 1, suffix: "" },
  { label: "Potential", value: "∞", suffix: "" }
];

const FAQ_DATA = [
  { 
    q: "Do I need coding experience?", 
    a: "Zero experience needed. We start from scratch—from installing Python to writing your first 'Hello World'." 
  },
  { 
    q: "What tools/software do I need?", 
    a: "Just a laptop and internet. We use free tools only (VS Code, Python, etc.). No paid software required." 
  },
  { 
    q: "Will I build real projects?", 
    a: "Yes — 12 projects, including an AI-powered application on Day 90 for your portfolio." 
  },
  { 
    q: "Is this live or recorded?", 
    a: "This is a hybrid model: High-quality recorded lessons for flexibility, plus weekly LIVE community sessions with Hamid for doubt clearing." 
  },
  { 
    q: "Will I get a certificate?", 
    a: "Yes, you will receive a completion certificate from Hamid Kamal personally to showcase your expertise." 
  }
];

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isAtlasOpen, setIsAtlasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/918332059777', '_blank');
  };

  return (
    <div className="relative min-h-screen selection:bg-electric-blue/30">
      <StarBackground />
      <AnimatePresence>
        {isAtlasOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-[1000]"
          >
            <AIAtlas onClose={() => setIsAtlasOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <EnrollmentModal isOpen={isEnrollModalOpen} onClose={() => setIsEnrollModalOpen(false)} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-navy-dark/90 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
            <span className="font-display font-bold text-white -rotate-45 group-hover:rotate-0 transition-transform">LL</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">LeT's lEaRN</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <button onClick={() => setIsAtlasOpen(true)} className="text-cyan-accent hover:text-white flex items-center gap-2 transition-all font-bold">
            <BookOpen size={16} /> AI Atlas
          </button>
          <a href="#mentor" className="hover:text-cyan-accent transition-colors">Mentor</a>
          <a href="#syllabus" className="hover:text-cyan-accent transition-colors">Course</a>
          <a href="#outcomes" className="hover:text-cyan-accent transition-colors">Outcomes</a>
          <a href="#faq" className="hover:text-cyan-accent transition-colors">FAQ</a>
        </div>
        <button 
          onClick={() => setIsEnrollModalOpen(true)}
          className="glass px-6 py-2 rounded-full text-sm font-bold text-electric-blue border-electric-blue/30 hover:bg-electric-blue hover:text-white transition-all shadow-lg shadow-electric-blue/20"
        >
          Enroll Now 🚀
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass px-4 py-1 rounded-full mb-8 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-cyan-accent rounded-full animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent">Hyderabad's Youngest AI Developer is teaching YOU</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-display font-bold mb-6 leading-[0.9] tracking-tighter"
        >
          From <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-accent">Zero</span> to <br />
          Python <span className="italic">Pro</span> in <span className="text-electric-blue">90 Days</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-white/50 text-lg mb-12"
        >
          No degree needed. Just curiosity, a laptop, and the right mentor to guide you through the future of programming.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button 
            onClick={() => setIsEnrollModalOpen(true)}
            className="bg-electric-blue hover:bg-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition-all"
          >
            Enroll Now 🚀
          </button>
          <a href="#mentor" className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
            Meet Your Mentor <ChevronDown size={20} />
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] font-mono mb-6 text-white/30">Next Cohort Starts In</p>
          <CountdownTimer targetDate="2026-06-01T00:00:00" />
        </motion.div>
      </section>

      {/* Course Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl text-center group hover:bg-white/10 transition-all border-b-4 border-b-transparent hover:border-b-electric-blue"
            >
              <h4 className="text-4xl md:text-5xl font-display font-bold text-electric-blue mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-white/40 text-xs uppercase tracking-widest font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes Grid */}
      <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {OUTCOMES.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-blue transition-colors">
                <item.icon className="text-electric-blue group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Syllabus Tabs */}
      <section id="syllabus" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4 italic"
          >
            The 90-Day Blueprint
          </motion.h2>
          <p className="text-white/40">From syntax to full-scale AI application deployment.</p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Tab Navigation */}
          <div className="glass p-2 rounded-2xl flex flex-wrap md:flex-nowrap gap-2 max-w-3xl mx-auto w-full">
            {SYLLABUS.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAccordion(idx)}
                className={`relative flex-1 px-6 py-4 rounded-xl text-center font-bold transition-all duration-300 z-10 ${
                  activeAccordion === idx ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {activeAccordion === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-electric-blue rounded-xl -z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Phase 0{idx + 1}</span>
                <span className="whitespace-nowrap">{idx === 0 ? "Foundations" : idx === 1 ? "Logic Mastery" : "Pro Journey"}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAccordion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-[40px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center text-electric-blue font-bold">
                      {activeAccordion !== null ? activeAccordion + 1 : ''}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">
                      {activeAccordion !== null ? SYLLABUS[activeAccordion].title.split(': ')[1] : ''}
                    </h3>
                  </div>
                  <ul className="space-y-6">
                    {activeAccordion !== null && SYLLABUS[activeAccordion].items.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 text-white/70 group"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full border border-cyan-accent flex items-center justify-center shrink-0 group-hover:bg-cyan-accent transition-colors">
                          <CheckCircle2 size={12} className="text-cyan-accent group-hover:text-navy-dark transition-colors" />
                        </div>
                        <span className="group-hover:text-white transition-colors text-lg leading-snug">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative group">
                   <div className="absolute -inset-2 bg-gradient-to-r from-electric-blue to-cyan-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                   <div className="relative glass aspect-video rounded-3xl flex items-center justify-center overflow-hidden border-2 border-white/5">
                      <Terminal className="text-electric-blue/40 absolute -bottom-10 -right-10 w-48 h-48 -rotate-12" />
                      <div className="z-10 text-center p-8">
                         <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                            {activeAccordion === 0 ? <Code2 className="text-electric-blue" /> : activeAccordion === 1 ? <Cpu className="text-electric-blue" /> : <Rocket className="text-electric-blue" />}
                         </div>
                         <p className="text-sm font-mono text-cyan-accent uppercase tracking-widest mb-2">Phase Highlight</p>
                         <p className="text-xl font-bold italic">
                            {activeAccordion === 0 ? "Building your first CLI tools" : activeAccordion === 1 ? "Mastering Scalable Architecture" : "Deploying Production-Ready AI"}
                         </p>
                      </div>
                      {/* Decorative Code Snippet */}
                      <div className="absolute top-4 left-4 font-mono text-[10px] text-white/10 select-none">
                        {`def learn_python():\n  while True:\n    practice()\n    build()\n    improve()`}
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* AI Atlas Entry Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass rounded-[50px] p-8 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
             <Globe size={300} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={12} /> Comprehensive Guide
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 italic">The AI Atlas</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12">
                 {(['Basics', 'Roadmap', 'Syllabus', 'Glossary', 'Resources']).map(chapter => (
                   <div key={chapter} className="flex items-center gap-3 text-white/50 group/item cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent opacity-30 group-hover/item:opacity-100 transition-opacity" />
                      <span className="font-medium group-hover/item:text-white transition-colors">{chapter}</span>
                   </div>
                 ))}
              </div>
              <p className="text-xl text-white/40 mb-10 leading-relaxed max-w-lg">
                Discover how the technology shaping our future actually works. From Zero to Everything. Understand AI. Build the Future.
              </p>
              <button 
                onClick={() => setIsAtlasOpen(true)}
                className="bg-white text-navy-dark px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-accent transition-all flex items-center gap-3 shadow-xl"
              >
                Start Exploring <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="relative">
               <div className="glass aspect-[4/3] rounded-[40px] p-8 flex flex-col justify-between border-2 border-white/5 relative z-10">
                  <div className="flex justify-between items-start">
                     <div className="w-16 h-16 bg-cyan-accent rounded-2xl flex items-center justify-center text-navy-dark">
                        <Brain size={32} />
                     </div>
                     <div className="text-right">
                        <div className="text-white/20 font-mono text-xs uppercase tracking-widest">Knowledge Module</div>
                        <div className="text-cyan-accent font-bold">100x Productivity</div>
                     </div>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ['0%', '70%', '40%', '90%'] }}
                          transition={{ duration: 10, repeat: Infinity }}
                          className="h-full bg-cyan-accent/40" 
                        />
                     </div>
                     <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-white/10 rounded-lg" />
                        <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
                     </div>
                  </div>

                  <div className="flex gap-2">
                     <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">AI</div>
                     <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">ML</div>
                     <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">DL</div>
                  </div>
               </div>
               {/* Decorative Background Elements */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-blue/20 blur-[80px] rounded-full" />
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-accent/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Code Club Section (Marketing Flyer) */}
      <section className="py-32 px-6 relative overflow-hidden bg-navy-dark">
        {/* Futuristic Background elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]" />
           <div className="absolute inset-0 bg-[#0a0f1d] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_20%,#000_100%)]" />
        </div>
        
        {/* Circuit Pattern overlays */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden font-mono text-[10px] whitespace-pre loading-code text-cyan-accent leading-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {`01101011001010110101010110110101 ${Math.random() > 0.5 ? 'Hamid.AI.Init()' : 'process.env.CODE_CLUB'} 1010110101010110110101`}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
           >
              THE MONTHLY CODE CLUB
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-2xl md:text-3xl text-white font-medium mb-12 tracking-tight"
           >
              Stop Watching Tutorials. <span className="text-cyan-accent italic">Start Writing Real Code.</span>
           </motion.p>
           
           <div className="inline-block bg-white text-navy-dark px-12 py-4 rounded-full font-black text-2xl mb-24 shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform cursor-default">
              LAUNCHING: MAY 25TH
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 text-center max-w-5xl mx-auto italic">
              <div className="space-y-4">
                 <div className="text-4xl">🚫</div>
                 <p className="text-xl font-bold text-white/90">NO Boring Slides</p>
              </div>
              <div className="space-y-4">
                 <div className="text-4xl">📊</div>
                 <p className="text-xl font-bold text-white/90">Daily Practice Tracking</p>
              </div>
              <div className="space-y-4">
                 <div className="text-4xl">⚡</div>
                 <p className="text-xl font-bold text-white/90">Real-World Experience</p>
              </div>
           </div>
           
           <div className="mb-24">
              <span className="inline-block glass px-6 py-2 rounded-full border border-white/10 text-white/50 text-xs font-mono uppercase tracking-[0.2em]">
                (Certified in Cyber Security via Corizo & IIT Bombay Mood Indigo)
              </span>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
              {/* Level 1 Card */}
              <div className="glass rounded-[40px] overflow-hidden border-2 border-cyan-400/30 group hover:border-cyan-400 transition-all flex flex-col shadow-2xl">
                 <div className="bg-cyan-400/20 p-8 border-b border-cyan-400/30">
                    <h3 className="text-2xl font-display font-black text-cyan-400 uppercase tracking-widest flex items-center gap-3">
                       <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                       LEVEL 1: FOUNDATION
                    </h3>
                 </div>
                 <div className="p-10 space-y-6 flex-1">
                    <ul className="space-y-4">
                       {['HTML5 & Semantic Web', 'CSS3 & Modern Layouts', 'Vanilla JavaScript (ES6+)', 'Git & Version Control'].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-white/70">
                            <span className="text-cyan-400">⚡</span> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <div className="text-3xl font-display font-bold text-white">₹499 <span className="text-sm font-normal text-white/40">/ Month</span></div>
                    <div className="w-12 h-12 bg-cyan-400 rounded-2xl flex items-center justify-center text-navy-dark font-black">→</div>
                 </div>
              </div>

              {/* Level 2 Card */}
              <div className="glass rounded-[40px] overflow-hidden border-2 border-blue-500/30 group hover:border-blue-500 transition-all flex flex-col shadow-2xl relative">
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 blur-2xl" />
                 <div className="bg-blue-500 p-8 border-b border-blue-600/50">
                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest flex items-center gap-3">
                       <Zap className="fill-white" size={24} />
                       LEVEL 2: PRO BUILDERS
                    </h3>
                 </div>
                 <div className="p-10 space-y-6 flex-1">
                    <ul className="space-y-4">
                       {['React.js & Ecosystem', 'Next.js 15 & SSR', 'Backend API Design', 'Production Architecture'].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-white/70 font-semibold">
                            <span className="text-blue-400">🔥</span> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <div className="text-3xl font-display font-bold text-white">₹999 <span className="text-sm font-normal text-white/40">/ Month</span></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black">→</div>
                 </div>
              </div>
           </div>
           
           <div className="mt-24 pt-16 border-t border-white/5 space-y-8">
              <p className="text-white/40 text-lg font-medium max-w-4xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
                 <span>Pay Month-by-Month</span>
                 <span className="text-white/10">|</span>
                 <span>Cancel/Upgrade Anytime</span>
                 <span className="text-white/10">|</span>
                 <span>No Long-term Contracts</span>
              </p>
              <div className="flex flex-col items-center gap-4">
                 <p className="text-white/30 uppercase tracking-[0.3em] text-xs font-bold">Inquiries & Support</p>
                 <a href="mailto:rahmani22052009@gmail.com" className="group flex items-center gap-3 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <span className="text-2xl">📧</span>
                    <span className="text-white font-bold group-hover:text-cyan-accent transition-colors">rahmani22052009@gmail.com</span>
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentor" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[40px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-l-4 border-l-electric-blue relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Users size={120} className="text-electric-blue" />
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric-blue to-cyan-accent blur-3xl opacity-20 -z-10" />
              <div className="relative w-full aspect-square mb-8 p-1">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-blue to-cyan-accent animate-pulse opacity-50 blur-sm" />
                 <img 
                   src={mentorImg} 
                   alt="Hamid Kamal" 
                   className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_50px_rgba(59,130,246,0.3)] border-4 border-electric-blue relative z-10"
                 />
              </div>
              <div className="glass p-8 rounded-3xl border border-white/10">
                 <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-accent mb-4 font-bold">Quick Highlights</h4>
                 <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide lg:grid lg:grid-cols-2 lg:overflow-visible">
                    <div className="space-y-1 min-w-[140px] lg:min-w-0">
                       <p className="text-2xl font-bold text-white tracking-tighter">14 <span className="text-sm font-normal text-white/40">Years Old</span></p>
                       <p className="text-[10px] uppercase text-white/30 font-bold">Started Coding</p>
                    </div>
                    <div className="space-y-1 min-w-[140px] lg:min-w-0">
                       <p className="text-2xl font-bold text-white tracking-tighter">17 <span className="text-sm font-normal text-white/40">Years Old</span></p>
                       <p className="text-[10px] uppercase text-white/30 font-bold">Current Age</p>
                    </div>
                    <div className="space-y-1 min-w-[140px] lg:min-w-0">
                       <p className="text-2xl font-bold text-white tracking-tighter">100+ <span className="text-sm font-normal text-white/40">Projects</span></p>
                       <p className="text-[10px] uppercase text-white/30 font-bold">Built & Deployed</p>
                    </div>
                    <div className="space-y-1 min-w-[140px] lg:min-w-0">
                       <p className="text-2xl font-bold text-white tracking-tighter">AI <span className="text-sm font-normal text-white/40">Specialist</span></p>
                       <p className="text-[10px] uppercase text-white/30 font-bold">Core Expertise</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[10px] font-bold uppercase tracking-widest mb-6"
                >
                  <Star size={10} fill="currentColor" /> Meet Your Mentor
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">Master Python <br/> with <span className="text-electric-blue italic">Hamid Kamal</span></h2>
                
                <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                  <p>
                    Programming isn't just about syntax—it's about building freedom. I started coding at 14, and by 17, I was already architecting AI-driven solutions for global industries. 
                  </p>
                  <p>
                    As Hyderabad's youngest AI developer, my goal isn't just to teach you Python; it's to share the professional workflow that allows me to build and scale products 10x faster than traditional developers.
                  </p>
                  <p>
                    I believe age is just a number. If you have the curiosity and the right blueprint, you can dominate the tech world from your bedroom. I'm here to give you that blueprint.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                 <h4 className="font-bold mb-4 text-white flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-cyan-accent" /> Hamid's Teaching Philosophy
                 </h4>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Zero Mock Data Policy",
                      "Build Live Projects Only",
                      "Industry-Standard Repo Setup",
                      "Logic-First Approach",
                      "AI Workflow Integration",
                      "Direct Mentorship Access"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/40 group cursor-default">
                         <div className="w-1 h-1 rounded-full bg-electric-blue group-hover:scale-150 transition-transform" />
                         <span className="group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/hamid-kamal" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-electric-blue transition-all group shadow-xl">
                    <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://github.com/hamid220-kamal" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-[#333] transition-all group shadow-xl">
                    <Github size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="mailto:rahmani22052009@gmail.com" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-electric-blue transition-all group shadow-xl">
                    <Send size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                <div className="h-px w-12 bg-white/10 hidden sm:block" />
                <p className="text-sm font-mono text-white/30 uppercase tracking-widest">Connect Directly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/10 blur-[120px] rounded-full -mr-48 -mt-48 transition-all group-hover:bg-electric-blue/20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-accent/10 blur-[120px] rounded-full -ml-48 -mb-48 transition-all group-hover:bg-cyan-accent/20" />
            
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 relative">Ready to Build the Future <br className="hidden md:block"/> with Python?</h2>
            <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">Limited seats available for the upcoming cohort. Hamid teaches this session personally to ensures everyone hits their 90-day goal.</p>
            
            <div className="inline-flex flex-col items-center gap-8 mb-12 relative">
               <div className="bg-white/5 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/10">
                  <span className="text-white/40 line-through mr-3 text-lg">₹2,999</span>
                  <span className="text-3xl font-display font-bold text-cyan-accent">₹999 <span className="text-sm font-normal text-white">only</span></span>
                  <div className="text-[10px] uppercase tracking-widest text-electric-blue mt-1 font-bold">Early Bird Offer — 66% OFF</div>
               </div>
               
               <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="bg-electric-blue hover:bg-blue-600 px-12 py-6 rounded-2xl font-bold text-2xl shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105 transition-all flex items-center gap-3"
               >
                  Join the 90-Day Challenge <ArrowRight size={24} />
               </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-10">
               <div className="flex items-center justify-center gap-3 text-white/50">
                  <Lock size={18} className="text-electric-blue" />
                  <span className="text-sm font-medium">100% Secure Payment</span>
               </div>
               <div className="flex items-center justify-center gap-3 text-white/50">
                  <Smartphone size={18} className="text-electric-blue" />
                  <span className="text-sm font-medium">Lifetime Dashboard Access</span>
               </div>
               <div className="flex items-center justify-center gap-3 text-white/50 col-span-2 md:col-span-1">
                  <MapPin size={18} className="text-electric-blue" />
                  <span className="text-sm font-medium">Made with ❤️ in Hyderabad</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center underline decoration-cyan-accent decoration-wavy underline-offset-8">Common Questions</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl group hover:border-cyan-accent/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-cyan-accent rounded-full" />
                {item.q}
              </h3>
              <p className="text-white/50 pl-5">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-navy-dark/95 backdrop-blur-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 lg:col-span-2">
                 <div className="flex items-center gap-2 mb-6">
                    <Code2 className="text-electric-blue" size={32} />
                    <span className="font-display font-bold text-2xl tracking-tighter">LeT's lEaRN</span>
                 </div>
                 <p className="text-white/40 text-lg mb-8 max-w-md">Building the next generation of problem solvers through the power of Python, logic, and AI.</p>
                 <div className="flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/in/hamid-kamal" target="_blank" rel="noreferrer" className="text-white/30 hover:text-electric-blue transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                       <Linkedin size={16} /> LinkedIn
                    </a>
                    <a href="https://github.com/hamid220-kamal" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                       <Github size={16} /> GitHub
                    </a>
                    <a href="mailto:rahmani22052009@gmail.com" className="text-white/30 hover:text-electric-blue transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                       <Send size={16} /> Email
                    </a>
                    <a href="#" className="text-white/30 hover:text-cyan-accent transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                       <ExternalLink size={16} /> CNC Jugaaadi
                    </a>
                 </div>
              </div>
              
              <div>
                 <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Resources</h4>
                 <ul className="space-y-4">
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Curriculum</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Success Stories</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Community</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Scholarships</a></li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Support</h4>
                 <ul className="space-y-4">
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">WhatsApp</a></li>
                    <li><a href="#" className="text-white/40 hover:text-cyan-accent transition-colors">Terms of Use</a></li>
                 </ul>
              </div>
           </div>
           
           <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/20 text-xs uppercase tracking-[0.5em]">Hamid Kamal &copy; 2026 &bull; Hyderabad, India</p>
              <p className="text-white/40 font-mono text-xs italic">"Built by a 17-year-old. Taught for the next generation."</p>
           </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={openWhatsApp}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow"
        >
          <MessageSquare className="text-white fill-white" size={24} />
        </motion.button>
        <button 
          onClick={() => setIsEnrollModalOpen(true)}
          className="bg-electric-blue text-white font-bold py-3 px-8 rounded-2xl shadow-xl flex items-center gap-2 group"
        >
          Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
