/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Map, 
  ListChecks, 
  Hash, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  Brain, 
  History, 
  Zap, 
  Code2, 
  Globe, 
  Sparkles, 
  ShieldAlert,
  GraduationCap,
  Github,
  Youtube,
  Play,
  CheckCircle2,
  X,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Wand2,
  MessageSquare
} from 'lucide-react';

// --- Types & Data ---

type AtlasTab = 'Basics' | 'Roadmap' | 'Syllabus' | 'Glossary' | 'Resources';

const QUIZ_QUESTIONS = [
  {
    question: "What is the primary difference between Traditional Code and AI?",
    options: [
      "AI uses more memory",
      "Traditional code uses rules; AI finds patterns in examples",
      "Traditional code is faster for all tasks",
      "AI doesn't require computers to run"
    ],
    correct: 1
  },
  {
    question: "Which phase of AI history introduced Neural Networks inspired by the brain?",
    options: [
      "Symbolic AI",
      "Machine Learning",
      "Deep Learning",
      "Agentic AI"
    ],
    correct: 2
  },
  {
    question: "What does 'Hallucination' refer to in LLMs?",
    options: [
      "The AI getting a virus",
      "Generated text that is factually incorrect but confident",
      "The AI running too fast",
      "Images that look like dreams"
    ],
    correct: 1
  },
  {
    question: "What is 'Agentic AI'?",
    options: [
      "A chatbot that just talks",
      "AI that can independently use tools to complete goals",
      "AI used by government agents only",
      "A type of movie about robots"
    ],
    correct: 1
  },
  {
    question: "What is Python most commonly used for in AI development?",
    options: [
      "Building the car chassis",
      "Data processing and model training",
      "Making the computer screen brighter",
      "It is not used in AI"
    ],
    correct: 1
  }
];

const AI_HISTORY = [
  {
    phase: 1,
    title: "Symbolic AI",
    period: "1950s - 1980s",
    logic: "Rule-Based Systems",
    desc: "Programmers hard-coded every logic rule. It could play chess but failed at messy real-world tasks like recognizing a human face.",
    solution: "Basic logic puzzles and early factory automation.",
    examples: ["Logic Theorist", "Chess Engines"]
  },
  {
    phase: 2,
    title: "Machine Learning",
    period: "1990s - 2010s",
    logic: "Statistical Pattern Matching",
    desc: "Instead of hard-coding rules, we fed computers data to find patterns. It got better at predictions but lacked deep understanding.",
    solution: "Email spam filtering, product recommendations, credit card fraud detection.",
    examples: ["Spam Filters", "Netflix Recommendations"]
  },
  {
    phase: 3,
    title: "Deep Learning",
    period: "2010s",
    logic: "Neural Networks",
    desc: "Inspired by the human brain, multi-layered networks could process massive 'unstructured' data like raw pixels or audio waves.",
    solution: "Accurate image recognition (e.g., diagnosing cancer from X-rays), real-time speech-to-text.",
    examples: ["Cancer Diagnosis", "Self-Driving Vision"]
  },
  {
    phase: 4,
    title: "Generative AI",
    period: "2020s",
    logic: "Large Language Models",
    desc: "Transformers allowed AI to understand context across long sequences and generate completely new text, images, and code.",
    solution: "Natural language translation, creative writing assistance, boilerplate code generation.",
    examples: ["ChatGPT", "Midjourney", "v0.dev"]
  },
  {
    phase: 5,
    title: "Agentic AI",
    period: "Present - Future",
    logic: "Autonomous Agents",
    desc: "AI transitions from a chatbot you talk to, to a digital worker that can independently use tools and complete multi-step goals.",
    solution: "Complex workflow automation, autonomous software engineering, personal digital assistants.",
    examples: ["Devin", "Research Agents"]
  }
];

const GLOSSARY_DATA = [
  { term: "Agent", def: "An AI system logic capable of taking autonomous actions to achieve a specific goal via tools or APIs." },
  { term: "Attention", def: "A mechanism in Transformers that allows the model to weigh the importance of different words in a sequence when processing text." },
  { term: "Backpropagation", def: "The fundamental algorithm used for training neural networks by calculating gradients of error and adjusting weights." },
  { term: "Deep Learning", def: "A subset of Machine Learning based on artificial neural networks with many layers (hence 'deep')." },
  { term: "Diffusion", def: "A type of Generative AI architecture that creates content by gradually removing 'noise' from a signal." },
  { term: "Embedding", def: "A mathematical representation of data (like words) as vectors in a high-dimensional space." },
  { term: "Fine-tuning", def: "The process of taking a pre-trained model and training it further on a specific, smaller dataset." },
  { term: "GenAI", def: "AI systems capable of generating new content like text, images, or audio." },
  { term: "Hallucination", def: "When an AI model generates factually incorrect or nonsensical information with high confidence." },
  { term: "Inference", def: "The phase where a trained AI model is used to make predictions or generate outputs." },
  { term: "LLM", def: "Large Language Model. A neural network trained on trillions of words to understand and generate human language." },
  { term: "Multimodal", def: "AI systems that can process and relate information from different types of input, like images and text." }
];

const PROMPT_TECHNIQUES = [
  {
    title: "Zero-shot",
    desc: "Asking the model to perform a task without any examples.",
    bad: "Classify the sentiment of: 'The food was okay, but the service was slow.'",
    badOut: "The sentiment is mixed and somewhat negative.",
    good: "Classify the sentiment of the following text as Positive, Negative, or Neutral. Text: 'The food was okay, but the service was slow.'",
    goodOut: "Sentiment: Neutral",
    why: "Adding explicit labels (Positive/Negative/Neutral) reduces ambiguity and ensures the model picks from a predefined set of categories."
  },
  {
    title: "One-shot",
    desc: "Providing a single example to guide the model.",
    bad: "Translate 'Hello' to French.",
    badOut: "Bonjour.",
    good: "Translate English to French. Example: 'Apple' -> 'Pomme' Task: 'Hello' ->",
    goodOut: "'Bonjour'",
    why: "One example sets the pattern for formatting. Notice the 'engineered' version follows the 'Word' -> 'Translation' pattern exactly."
  },
  {
    title: "Chain-of-Thought",
    desc: "Forcing the model to show its reasoning process.",
    bad: "What is 25 * 42?",
    badOut: "1050.",
    good: "What is 25 * 42? Let's think step-by-step.",
    goodOut: "1. Multiply 25 by 40: 1000. 2. Multiply 25 by 2: 50. 3. Result: 1050.",
    why: "Reasoning steps improve accuracy in math and logic by using more compute layers for derivation."
  }
];

const TOOLS_LIBRARY = [
  { name: "Cursor", cat: "Coding", desc: "AI Code Editor - writes half your code for you.", state: "Free tier", link: "#" },
  { name: "Bolt.new", cat: "Build", desc: "Full-stack Web Builder - prompt to full website.", state: "Free tier", link: "#" },
  { name: "Antigravity", cat: "Build", desc: "Agentic AI Platform - build AI that does tasks.", state: "Free tier", link: "#" },
  { name: "v0.dev", cat: "Build", desc: "UI Generator - generates beautiful website designs.", state: "Free tier", link: "#" },
  { name: "Claude.ai", cat: "Chat", desc: "Advanced LLM - best for logic and clean code.", state: "Free tier", link: "#" },
  { name: "Replit", cat: "Build", desc: "Browser IDE with AI Agents.", state: "Free tier", link: "#" },
  { name: "Perplexity", cat: "Research", desc: "AI search engine with citations.", state: "Free tier", link: "#" },
  { name: "Suno", cat: "Audio", desc: "AI music generation - full songs from text.", state: "Free tier", link: "#" },
  { name: "ElevenLabs", cat: "Audio", desc: "Realistic AI voice cloning.", state: "Free tier", link: "#" },
  { name: "Leonardo AI", cat: "Image", desc: "High quality image and asset generation.", state: "Free tier", link: "#" }
];

export function AIAtlas({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<AtlasTab>('Basics');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    if (optionIndex === QUIZ_QUESTIONS[currentQuestionIndex].correct) {
      setUserScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserScore(0);
    setShowResults(false);
    setSelectedOption(null);
  };

  const filteredGlossary = useMemo(() => {
    return GLOSSARY_DATA.filter(item => 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.def.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-navy-dark text-white font-sans selection:bg-cyan-accent/30">
      {/* Atlas Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-navy-dark/90 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-accent rounded-lg flex items-center justify-center">
              <Globe className="text-navy-dark" size={24} />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl leading-none">AI Atlas</h1>
              <p className="text-[10px] text-cyan-accent uppercase tracking-widest font-bold">Interactive Guide</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 glass p-1 rounded-xl">
            {(['Basics', 'Roadmap', 'Syllabus', 'Glossary', 'Resources'] as AtlasTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-cyan-accent text-navy-dark shadow-lg shadow-cyan-accent/20' : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'Basics' && (
            <motion.div 
              key="basics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              {/* Hero */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-block glass px-4 py-1 rounded-full text-cyan-accent text-xs font-mono uppercase tracking-widest mb-6"
                >
                  Start From Zero to Everything
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Understand AI. <br /> <span className="text-cyan-accent italic">Build the Future.</span></h2>
                <p className="text-white/50 text-lg leading-relaxed">No coding background needed. Just curiosity. Discover how the technology shaping our future actually works.</p>
              </div>

              {/* Intro Card */}
              <div className="glass rounded-[40px] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="text-cyan-accent" /> What is AI?
                  </h3>
                  <p className="text-xl text-white/70 leading-relaxed italic border-l-4 border-cyan-accent pl-6">
                    "Artificial Intelligence is the science of making computers do things that would require intelligence if done by people."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-6 rounded-3xl text-center">
                    <h4 className="text-cyan-accent font-bold mb-1">AI is the Future</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Global Shift</p>
                  </div>
                  <div className="glass p-6 rounded-3xl text-center border-white/20">
                    <h4 className="text-white font-bold mb-1">How it Works</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Logic & Data</p>
                  </div>
                </div>
              </div>

              {/* History Timeline */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="text-4xl font-display font-bold mb-4">The 5 Phases of AI History</h3>
                  <p className="text-white/40">Tracing the evolution from rules to autonomy.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {AI_HISTORY.map((phase, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="glass p-6 rounded-3xl relative overflow-hidden group border-t-4 border-t-cyan-accent/20 hover:border-t-cyan-accent"
                    >
                      <div className="absolute -right-4 -top-4 text-8xl font-display font-black text-white/5 select-none">{phase.phase}</div>
                      <span className="text-[10px] font-mono text-cyan-accent uppercase tracking-widest mb-2 block">{phase.period}</span>
                      <h4 className="text-xl font-bold mb-4">{phase.title}</h4>
                      <p className="text-white/40 text-sm mb-6 leading-relaxed">{phase.desc}</p>
                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="text-xs">
                          <span className="text-cyan-accent font-bold block mb-1">Real-World Solution:</span>
                          <span className="text-white/60">{phase.solution}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.examples.map((ex, i) => (
                            <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">{ex}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Quiz Section */}
              <div className="glass rounded-[40px] p-8 md:p-16 border border-cyan-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <ListChecks size={200} />
                </div>
                
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-cyan-accent/20 rounded-lg flex items-center justify-center text-cyan-accent">
                      <Zap size={18} />
                    </div>
                    <span className="text-cyan-accent font-mono text-sm font-bold uppercase tracking-widest">Basics Challenge</span>
                  </div>
                  
                  <h3 className="text-4xl font-display font-bold mb-8">Test Your Knowledge</h3>
                  
                  <AnimatePresence mode="wait">
                    {!showResults ? (
                      <motion.div 
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-2">
                           <div className="flex justify-between items-center text-xs font-bold text-white/30 uppercase tracking-[.2em]">
                              <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                              <span>{Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                           </div>
                           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-cyan-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                              />
                           </div>
                        </div>

                        <p className="text-2xl font-bold leading-tight">{QUIZ_QUESTIONS[currentQuestionIndex].question}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                             const isCorrect = idx === QUIZ_QUESTIONS[currentQuestionIndex].correct;
                             const isSelected = selectedOption === idx;
                             
                             let btnClass = "glass p-6 rounded-2xl text-left transition-all border-2 ";
                             if (selectedOption === null) {
                               btnClass += "border-white/5 hover:border-cyan-accent/40 hover:bg-white/5";
                             } else {
                               if (isSelected) {
                                 btnClass += isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10";
                               } else if (isCorrect) {
                                 btnClass += "border-green-500/50 bg-green-500/5";
                               } else {
                                 btnClass += "border-white/5 opacity-50";
                               }
                             }

                             return (
                               <button 
                                 key={idx}
                                 onClick={() => handleAnswerSelect(idx)}
                                 disabled={selectedOption !== null}
                                 className={btnClass}
                               >
                                 <div className="flex items-center gap-4">
                                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-sm ${
                                     isSelected ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-white/5 text-white/40'
                                   }`}>
                                     {String.fromCharCode(65 + idx)}
                                   </div>
                                   <span className="font-medium">{option}</span>
                                 </div>
                               </button>
                             );
                           })}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 space-y-8"
                      >
                         <div className="inline-block p-6 rounded-full bg-cyan-accent/10 relative">
                            <Sparkles className="text-cyan-accent w-12 h-12" />
                            <motion.div 
                              className="absolute inset-0 rounded-full border-2 border-cyan-accent/30"
                              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                         </div>
                         
                         <div>
                            <h4 className="text-3xl font-display font-bold mb-2">Quiz Completed!</h4>
                            <p className="text-white/40">You scored <span className="text-cyan-accent font-bold">{userScore}</span> out of <span className="text-white/60">{QUIZ_QUESTIONS.length}</span></p>
                         </div>
                         
                         <div className="max-w-xs mx-auto">
                            <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-white/30">
                               <span>Final Grade</span>
                               <span>{Math.round((userScore / QUIZ_QUESTIONS.length) * 100)}%</span>
                            </div>
                            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                               <motion.div 
                                 className="h-full bg-cyan-accent rounded-full"
                                 initial={{ width: 0 }}
                                 animate={{ width: `${(userScore / QUIZ_QUESTIONS.length) * 100}%` }}
                                 transition={{ delay: 0.5, duration: 1 }}
                               />
                            </div>
                         </div>

                         <button 
                           onClick={restartQuiz}
                           className="bg-white text-navy-dark px-10 py-4 rounded-2xl font-bold hover:bg-cyan-accent transition-all inline-flex items-center gap-2"
                         >
                           Try Again <ArrowRight size={18} />
                         </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Roadmap' && (
            <motion.div 
              key="roadmap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <h2 className="text-5xl font-display font-bold mb-4">Core AI Roadmap</h2>
                  <p className="text-white/40">Step-by-step path from literacy to deployment.</p>
                </div>
                <div className="flex gap-4">
                   <div className="glass px-6 py-2 rounded-full text-sm font-bold text-cyan-accent">6 Steps</div>
                   <div className="glass px-6 py-2 rounded-full text-sm font-bold text-white/50">12 Projects</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { step: "Phase 01", title: "Core AI Literacy", desc: "Understand ML, DL, and Transformers.", icons: [Brain, Zap] },
                  { step: "Step 1", title: "Prompt Engineering", desc: "Master In-context learning & CoT.", icons: [Terminal, Wand2] },
                  { step: "Step 2", title: "AI Orchestration", desc: "Build with APIs, RAG, and Vector DBs.", icons: [Layers, Cpu] },
                  { step: "Step 3", title: "AI Agents", desc: "Deploy autonomous workflows.", icons: [Globe, Zap] },
                  { step: "Step 4", title: "Edge AI & Vision", desc: "Applied Computer Vision systems.", icons: [ExternalLink, Cpu] },
                ].map((item, idx) => (
                  <div key={idx} className="glass p-8 rounded-[32px] group hover:border-cyan-accent/30 transition-all">
                    <div className="flex justify-between items-start mb-6">
                       <span className="text-cyan-accent font-mono text-sm font-bold">{item.step}</span>
                       <button className="text-white/20 group-hover:text-cyan-accent transition-colors">
                          <ArrowRight size={20} />
                       </button>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-white/50 mb-8">{item.desc}</p>
                    <div className="flex gap-3">
                       {item.icons.map((Icon, i) => (
                         <div key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/30">
                            <Icon size={18} />
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Syllabus' && (
            <motion.div 
               key="syllabus"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="space-y-16"
            >
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-5xl font-display font-bold mb-6">Structured Syllabus</h2>
                  <p className="text-white/40">A deep dive into intelligence primitives.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { mod: "Module 01", title: "Intelligence Primitives", items: ["Definition of AI", "Related Fields", "Philosophy of AI", "Problem Solving"] },
                    { mod: "Module 02", title: "Search & Strategy", items: ["Search Algorithms", "A* & Heuristics", "Game Theory Basics", "Real World AI"] },
                    { mod: "Module 03", title: "Probability & Bayes", items: ["Odds and Probability", "The Bayes Rule", "Naive Bayes Classification"] },
                    { mod: "Module 04", title: "Machine Learning", items: ["Types of ML", "K-Nearest Neighbors", "Linear Regression", "Logistic Regression"] },
                    { mod: "Module 05", title: "Neural Networks", items: ["NN Basics", "Building Blocks", "Backpropagation"] },
                    { mod: "Module 06", title: "Societal Implications", items: ["Predicting the Future", "Ethics & Bias", "Economic Impact"] }
                  ].map((mod, idx) => (
                    <div key={idx} className="glass p-8 rounded-[40px] flex flex-col border-l-4 border-l-cyan-accent/20">
                       <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent mb-2 font-bold">{mod.mod}</span>
                       <h3 className="text-2xl font-bold mb-6">{mod.title}</h3>
                       <div className="space-y-4">
                          {mod.items.map((item, i) => (
                            <div key={i} className="flex justify-between items-center group cursor-pointer">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-white/10 rounded-full group-hover:bg-cyan-accent transition-colors" />
                                  <span className="text-white/60 group-hover:text-white transition-colors">{item}</span>
                               </div>
                               <span className="text-[10px] font-mono text-white/30 group-hover:text-cyan-accent">0/{i+1}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeTab === 'Glossary' && (
            <motion.div 
              key="glossary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-12"
            >
              <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-4xl font-display font-bold text-center">Glossary & AI Tools</h2>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                  <input 
                    type="text"
                    placeholder="Search the glossary..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full glass bg-white/5 rounded-2xl pl-12 pr-6 py-4 outline-none border border-white/10 focus:border-cyan-accent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGlossary.map((item, idx) => (
                  <motion.div 
                    layout
                    key={item.term}
                    className="glass p-6 rounded-3xl group hover:bg-white/5 transition-all"
                  >
                    <h4 className="text-xl font-bold mb-3 text-cyan-accent">{item.term}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.def}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Resources' && (
             <motion.div 
               key="resources"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-24"
             >
                {/* Featured Tools */}
                <div className="space-y-12">
                   <div className="text-center">
                      <h2 className="text-5xl font-display font-bold mb-6">Free AI Tools Hub</h2>
                      <p className="text-white/40 max-w-2xl mx-auto">Hand-picked free tools to code, write, research, design, and build. <br /> "Bas yeh 5 yaad rakh lo — baaki sab inhi ke around revolve karta hai."</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      {TOOLS_LIBRARY.slice(0, 5).map((tool, idx) => (
                        <a 
                          key={tool.name}
                          href={tool.link}
                          target="_blank"
                          rel="noreferrer"
                          className="glass p-6 rounded-3xl group border-b-4 border-b-transparent hover:border-b-cyan-accent transition-all"
                        >
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-10 h-10 bg-cyan-accent/10 rounded-xl flex items-center justify-center text-cyan-accent">
                                 {tool.cat === 'Coding' ? <Code2 size={20}/> : <Zap size={20}/>}
                              </div>
                              <ExternalLink size={16} className="text-white/20 group-hover:text-cyan-accent transition-colors" />
                           </div>
                           <h4 className="font-bold mb-1">{tool.name}</h4>
                           <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">{tool.cat}</p>
                           <p className="text-xs text-white/50 leading-relaxed mb-6">"{tool.desc}"</p>
                           <span className="text-[10px] font-mono font-bold text-cyan-accent bg-cyan-accent/10 px-2 py-1 rounded-full">{tool.state}</span>
                        </a>
                      ))}
                   </div>
                </div>

                {/* Video Vault */}
                <div className="space-y-12">
                   <div className="flex justify-between items-end">
                      <div>
                         <h3 className="text-4xl font-display font-bold mb-2">Video Learning Vault</h3>
                         <p className="text-white/40 tracking-tight">Structured visual deep-dives.</p>
                      </div>
                      <div className="flex gap-4">
                         <button className="glass px-6 py-2 rounded-full text-xs font-bold text-white/50 hover:text-white transition-colors">View All</button>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        { title: "How Transformers Work", dur: "12:45", lvl: "Intermediate", desc: "A deep dive into the architecture that revolutionized AI." },
                        { title: "AI Agents Explained", dur: "15:20", lvl: "Advanced", desc: "Learn how autonomous agents plan tasks and use tools." },
                        { title: "Prompt Engineering Masterclass", dur: "10:15", lvl: "Beginner", desc: "Stop talking to AI like a human. Use CoT patterns." },
                        { title: "State of AI 2026", dur: "18:30", lvl: "All Levels", desc: "Overview of current breakthroughs in multimodal video/audio." }
                      ].map((vid, idx) => (
                        <div key={idx} className="glass p-8 rounded-[40px] flex gap-8 items-start group hover:bg-white/5 transition-all">
                           <div className="aspect-square w-32 glass rounded-3xl flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-cyan-accent/40 shadow-2xl">
                              <Play className="text-cyan-accent group-hover:scale-125 transition-transform" fill="currentColor" />
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-[10px] font-mono font-bold text-cyan-accent border border-cyan-accent/20 px-2 py-0.5 rounded">{vid.lvl}</span>
                                 <span className="text-[10px] text-white/30 font-bold">{vid.dur}</span>
                              </div>
                              <h4 className="text-xl font-bold mb-2">{vid.title}</h4>
                              <p className="text-sm text-white/50">{vid.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Subscription Card */}
                <div className="glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
                   <Youtube className="absolute -bottom-10 -left-10 w-64 h-64 text-red-500/5 rotate-12" />
                   <div className="relative z-10">
                      <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">Subscribe for Weekly Guides</h2>
                      <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">Get notified when we release new deep-dives into Agentic AI and LLMs. <br /> Built for the curious, by the persistent.</p>
                      <button className="bg-red-600 hover:bg-red-700 px-12 py-6 rounded-2xl font-bold text-xl flex items-center gap-3 mx-auto shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-[0.98]">
                         Subscribe on YouTube <Youtube />
                      </button>
                   </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        {/* Knowledge Check (Persistent Preview) */}
        <div className="mt-32 pt-24 border-t border-white/5">
           <div className="bg-cyan-accent/5 rounded-[40px] p-8 md:p-16 border border-cyan-accent/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                 <div className="max-w-xl">
                    <span className="text-cyan-accent font-mono text-sm font-bold uppercase tracking-widest block mb-4">Assessment</span>
                    <h2 className="text-4xl font-display font-bold mb-6 italic">Quick Knowledge Check</h2>
                    <p className="text-white/50 text-lg mb-8">What is the primary difference between Traditional Code and AI?</p>
                    <div className="space-y-4">
                       {[
                         "AI uses more memory",
                         "Traditional code uses rules; AI finds patterns in examples",
                         "Traditional code is faster for all tasks",
                         "AI doesn't require computers to run"
                       ].map((opt, i) => (
                         <button 
                           key={i}
                           className="w-full text-left glass p-4 rounded-xl border border-white/5 hover:border-cyan-accent/30 hover:bg-white/5 transition-all text-sm font-medium"
                         >
                           {opt}
                         </button>
                       ))}
                    </div>
                 </div>
                 <div className="text-center md:text-right space-y-4">
                    <div className="text-7xl font-display font-bold text-cyan-accent">20%</div>
                    <p className="text-white/30 uppercase tracking-widest text-xs font-bold">Progress Completed</p>
                    <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden mx-auto md:ml-auto">
                       <div className="w-[20%] h-full bg-cyan-accent" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      {/* Atlas Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-navy-dark/80">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-8">
               <Globe className="text-cyan-accent" size={32} />
               <span className="font-display font-bold text-3xl tracking-tighter">AI Atlas</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 text-white/40 text-sm font-bold uppercase tracking-widest">
               <a href="https://github.com/hamid220-kamal" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                 <Github size={16} /> GitHub
               </a>
               <a href="#" className="hover:text-white transition-colors">Ethics & Safety</a>
               <a href="#" className="hover:text-white transition-colors">Case Studies</a>
               <a href="#" className="hover:text-white transition-colors">AI News</a>
               <a href="#" className="hover:text-white transition-colors">Community</a>
            </div>
            <p className="text-white/20 text-xs uppercase tracking-[0.5em] mb-4">Produced by LEt's lEaRN Academy &bull; 2026</p>
            <p className="max-w-xl text-white/30 text-sm">"AI isn't here to replace humans, but to replace human effort. Those who leverage AI will be significantly more effective than those who don't."</p>
         </div>
      </footer>
    </div>
  );
}
