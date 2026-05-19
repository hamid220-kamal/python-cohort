/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Terminal, 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Brain,
  Rocket
} from 'lucide-react';

export interface SyllabusPhase {
  title: string;
  days: string;
  items: string[];
  capstone: string;
  highlight: string;
  icon: typeof Terminal | typeof Database | typeof Cpu | typeof Brain | typeof Rocket;
}

export interface PythonModule {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
  topics: string[];
}

export interface Project {
  id: number;
  title: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Outcome {
  icon: typeof Terminal | typeof Database | typeof Globe | typeof ShieldCheck;
  title: string;
  text: string;
}

export interface Stat {
  label: string;
  value: number | string;
  suffix: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const SYLLABUS: SyllabusPhase[] = [
  {
    title: "Phase 1: Core Python Foundations",
    days: "Days 01 - 15",
    highlight: "Core Python Basics, Functions, Files, OOP & Isolation",
    icon: Terminal,
    capstone: "Perfect Guess, Snake Water Gun CLI, and Isolated env freeze builds",
    items: [
      "Days 01-05: Setup, Variables, Data Types, Advanced Slicing & Mark list marks markers",
      "Days 06-08: Conditional flow, Range iterations, custom scopes (LEGB) & Recursive calls",
      "Days 09-10: Persistent File I/O stream buffers & OOP DRY class constructor mechanisms",
      "Days 11-13: Inheritance models, super(), operator overloading, Walrus operator & virtualenvs",
      "Days 14-15: Foundational Projects (String Utilities, Perfect Guess Game, Snake Water Gun)"
    ]
  },
  {
    title: "Phase 2: LLM APIs & Advanced AI Foundations",
    days: "Days 16 - 35",
    highlight: "API Integrations, Prompt Engineering, OS Daemons, System Automation",
    icon: Cpu,
    capstone: "P01 - P11: Build intelligent CLI git-commit, resume-tailors, and voice command macros",
    items: [
      "Days 16-20: Intelligent CLI Commit Gen (P01) & Resume Tailor System Prompt (P02)",
      "Days 21-25: Spam Comment classification (P03), Async Translation (P04) & Smart Organizer (P05)",
      "Days 26-30: Whisper-activated Desktop command daemon (P06) & PDF Finance Miner (P07)",
      "Days 31-35: GitHub automated responder (P08), SQL Query builder (P09), Marp slides (P10) & speed readers (P11)"
    ]
  },
  {
    title: "Phase 3: RAG Systems & Vector Databases",
    days: "Days 36 - 55",
    highlight: "Semantic Search, Text Chunking, Embeddings, Vector DBs, Persistence",
    icon: Database,
    capstone: "P12 - P22: Build codebase search, hybrid keyword engines, and ChromaDB visual explorers",
    items: [
      "Days 36-40: PDF Q&A Search Engine (P12) & ChromaDB local codebase semantic search (P13)",
      "Days 41-45: Dynamic Knowledge-Base Ingestor (P14) & Persistent PG-backed Chatbot (P15)",
      "Days 46-50: arXiv Paper cite-linker (P16), Hybrid BM25+Vector search (P17) & Chunk Evaluator (P18)",
      "Days 51-55: Async crawlers (P19), VideoDB transcription search (P20), Embedding comparer (P21) & Chroma CLI (P22)"
    ]
  },
  {
    title: "Phase 4: Agentic Frameworks & Multi-Agent Systems",
    days: "Days 56 - 75",
    highlight: "LangGraph, CrewAI, Function Calling, Dynamic Workflows, Self-Correcting Sandbox",
    icon: Brain,
    capstone: "P23 - P33: Build market intelligence teams, self-correcting sandboxes, and HITL agents",
    items: [
      "Days 56-60: Competitor Intelligence CrewAI team (P23) & LangGraph PR Code Auditor (P24)",
      "Days 61-65: Subprocess compiler error sandbox (P25) & Scrum Master+Dev collaborative agents (P26)",
      "Days 66-70: Instructor forced JSON schema extractor (P27) & support graph routing workflows (P28)",
      "Days 71-75: Excel finance analyzer (P29), deal finder scraper (P30), Human-in-the-Loop (P31), Math router (P32) & history compression (P33)"
    ]
  },
  {
    title: "Phase 5: Multimodal Pipelines & Production MLOps",
    days: "Days 76 - 90",
    highlight: "Audio/Video AI, Fine-tuning prep, Docker containerization, OpenTelemetry, Tracing",
    icon: Rocket,
    capstone: "P34 - P40: Build podcast generators, Docker serving backends, and Autonomous OS Daemons",
    items: [
      "Days 76-80: Podcasting AI scriptwriter & fal.ai voice (P34) & Image alt-text accessibility generator (P35)",
      "Days 81-85: Ollama served LLaMA/DeepSeek latency profiler (P36) & SFT dataset validation engine (P37)",
      "Days 86-90: FastAPI Docker MLOps deployment (P38), OpenTelemetry tracing (P39) & Autonomous OS interceptor (P40)"
    ]
  }
];

export const PYTHON_MODULES: PythonModule[] = [
  {
    id: "CH01",
    title: "Setup & Python Basics",
    duration: "Basics & Pip",
    difficulty: "Beginner",
    topics: [
      "VS Code setup & python.org download",
      "Interpreter vs compiler concepts",
      "REPL mode & Python as a calculator",
      "Pip package manager & module systems"
    ]
  },
  {
    id: "CH02",
    title: "Variables & Data Types",
    duration: "Memory & Inputs",
    difficulty: "Beginner",
    topics: [
      "Variables as named memory locations",
      "Integers, floats, strings, booleans, None",
      "Arithmetic & relational operators",
      "User input reading and type casting"
    ]
  },
  {
    id: "CH03",
    title: "Strings & Slicing",
    duration: "Text Manipulation",
    difficulty: "Beginner",
    topics: [
      "String syntax & string indexing",
      "String slicing with skip values",
      "Negative index slicing techniques",
      "Built-in methods: replace(), find(), etc."
    ]
  },
  {
    id: "CH04",
    title: "Lists & Tuples",
    duration: "Ordered Containers",
    difficulty: "Beginner",
    topics: [
      "List instantiation & mutable indexing",
      "pop() and remove() operations",
      "Tuple immutability & single-element comma rules",
      "Fruit store and marks sorter applications"
    ]
  },
  {
    id: "CH05",
    title: "Dictionary & Sets",
    duration: "Unique Collections",
    difficulty: "Beginner",
    topics: [
      "Dictionary key-value mappings",
      "Set non-repetitive collection elements",
      "Hindi-English word lookup dictionary",
      "Duplicate entry filtering from input lists"
    ]
  },
  {
    id: "CH06",
    title: "Conditional Expressions",
    duration: "Control Flow Logic",
    difficulty: "Beginner",
    topics: [
      "if, elif, and else flow control",
      "Relational & logical operators (and, or, not)",
      "Spam comment classification regex patterns",
      "Student pass/fail criteria calculations"
    ]
  },
  {
    id: "CH07",
    title: "Loops in Python",
    duration: "Iterative Control",
    difficulty: "Intermediate",
    topics: [
      "while loops vs for loops",
      "Range function sequence iteration",
      "break & continue loop execution guards",
      "Multiplication table and prime finder scripts"
    ]
  },
  {
    id: "CH08",
    title: "Functions & Recursions",
    duration: "Reusable Logic",
    difficulty: "Intermediate",
    topics: [
      "Function declarations (def) & calls",
      "Parameters, arguments, and return variables",
      "Recursion and call stack limits",
      "Celsius-to-Fahrenheit conversion formulas"
    ]
  },
  {
    id: "CH09",
    title: "File Input/Output",
    duration: "Data Persistence",
    difficulty: "Intermediate",
    topics: [
      "Volatile RAM vs persistent storage",
      "f.open() modes: read ('r'), write ('w'), append ('a')",
      "f.read() and f.write() buffers",
      "Real-time Hi-score file auto-updater"
    ]
  },
  {
    id: "CH10",
    title: "OOP Foundations",
    duration: "Class Blueprints",
    difficulty: "Intermediate",
    topics: [
      "DRY principles & class blueprints",
      "Class attributes vs instance attributes",
      "self parameter & decorator static methods",
      "__init__() constructor instantiation"
    ]
  },
  {
    id: "CH11",
    title: "Inheritance & Advanced OOP",
    duration: "Dunder & Overloading",
    difficulty: "Advanced",
    topics: [
      "Single, multiple, and multilevel inheritance",
      "super() base-class constructor calls",
      "@classmethod decorator & property setters",
      "Operator overloading using dunder methods"
    ]
  },
  {
    id: "CH12",
    title: "Advanced Python 1",
    duration: "Modern Additions",
    difficulty: "Advanced",
    topics: [
      "Walrus operator (:=) assignments",
      "Match-case statement control blocks",
      "Exception handling (try, except, finally)",
      "If __name__ == '__main__' modules",
      "enumerate() loops and list comprehensions"
    ]
  },
  {
    id: "CH13",
    title: "Advanced Python 2",
    duration: "Isolated Systems",
    difficulty: "Pro",
    topics: [
      "Virtual environment setup & pip freeze",
      "join() and format() string tools",
      "Map, Filter, and Reduce sequences",
      "Vertical table print format tools"
    ]
  }
];

export const PROJECTS: Project[] = [
  // Phase 2 (P01 - P11)
  { id: 1, title: "Project 01: Intelligent CLI Git Commit Generator", complexity: "Intermediate" },
  { id: 2, title: "Project 02: Dynamic AI Resume Tailor & Cover Letter Builder", complexity: "Beginner" },
  { id: 3, title: "Project 03: Spam Comment Classification Regex & LLM Filter", complexity: "Intermediate" },
  { id: 4, title: "Project 04: Local Markdown Translation & Localization Engine", complexity: "Intermediate" },
  { id: 5, title: "Project 05: Smart File Organizer & Automated Log Synthesizer", complexity: "Intermediate" },
  { id: 6, title: "Project 06: Voice-Activated Desktop Command Daemon", complexity: "Advanced" },
  { id: 7, title: "Project 07: PDF Financial Report Text-Miner & Excel Compiler", complexity: "Intermediate" },
  { id: 8, title: "Project 08: GitHub Issue Automated Responder Bot", complexity: "Intermediate" },
  { id: 9, title: "Project 09: Dynamic SQL Query Builder & Schema Validation Layer", complexity: "Advanced" },
  { id: 10, title: "Project 10: AI-Powered CLI Markdown Slideshow Creator", complexity: "Beginner" },
  { id: 11, title: "Project 11: Real-time Terminal Token Streaming Speed Reader", complexity: "Beginner" },
  
  // Phase 3 (P12 - P22)
  { id: 12, title: "Project 12: PDF Document Q&A Search Engine (Layout-Aware RAG)", complexity: "Intermediate" },
  { id: 13, title: "Project 13: Local Semantic Codebase Search Engine (ChromaDB)", complexity: "Advanced" },
  { id: 14, title: "Project 14: Multi-Format Dynamic Knowledge Base Ingestor", complexity: "Intermediate" },
  { id: 15, title: "Project 15: Context-Aware Chatbot with PostgreSQL Memory Buffer", complexity: "Advanced" },
  { id: 16, title: "Project 16: Automated Academic Paper Summarizer & Cite-Linker", complexity: "Intermediate" },
  { id: 17, title: "Project 17: Hybrid Keyword + Vector Search Engine (BM25 & Dense)", complexity: "Advanced" },
  { id: 18, title: "Project 18: Dynamic Chunk-Size Evaluator & Overlap Tuner", complexity: "Advanced" },
  { id: 19, title: "Project 19: High-Speed Async Scraper & Vector Database Synthesizer", complexity: "Advanced" },
  { id: 20, title: "Project 20: AI Video Search & Transcription Engine (VideoDB)", complexity: "Advanced" },
  { id: 21, title: "Project 21: Local Embedding Model Comparer & Benchmark Sheet", complexity: "Intermediate" },
  { id: 22, title: "Project 22: ChromaDB CLI Explorer & Schema Viewer", complexity: "Intermediate" },

  // Phase 4 (P23 - P33)
  { id: 23, title: "Project 23: Autonomous Market Competitor Intelligence Agent Team", complexity: "Advanced" },
  { id: 24, title: "Project 24: Intelligent Code Review & Automated PR Hardener Agent", complexity: "Advanced" },
  { id: 25, title: "Project 25: Self-Correcting Python Execution Sandbox Tool", complexity: "Advanced" },
  { id: 26, title: "Project 26: Multi-Agent Collaborative Software Development Team", complexity: "Advanced" },
  { id: 27, title: "Project 27: Structured Information Extractor with Strict JSON Schemas", complexity: "Intermediate" },
  { id: 28, title: "Project 28: Interactive Customer Service Router (LangGraph Router)", complexity: "Advanced" },
  { id: 29, title: "Project 29: AI Financial Portfolio Analysis & Excel Reporter Engine", complexity: "Intermediate" },
  { id: 30, title: "Project 30: Autonomous E-Commerce Search & Deal Finder Scraper", complexity: "Intermediate" },
  { id: 31, title: "Project 31: Human-in-the-Loop Content Editor Agent Graph", complexity: "Advanced" },
  { id: 32, title: "Project 32: Dynamic Multi-Modal Math Solver CLI (SymPy Router)", complexity: "Intermediate" },
  { id: 33, title: "Project 33: CLI Agent Shell with Chat History Compression", complexity: "Intermediate" },

  // Phase 5 (P34 - P40)
  { id: 34, title: "Project 34: Podcasting AI Scriptwriter & fal.ai Voice Synthesizer", complexity: "Advanced" },
  { id: 35, title: "Project 35: Image-to-Text Alt-Text Generator for Accessibility", complexity: "Intermediate" },
  { id: 36, title: "Project 36: Local LLaMA / DeepSeek Serving & Latency Profiler", complexity: "Advanced" },
  { id: 37, title: "Project 37: Fine-Tuning Dataset Preparator & Validation Engine", complexity: "Advanced" },
  { id: 38, title: "Project 38: Low-Latency AI API Backend with FastAPI & Docker Container", complexity: "Advanced" },
  { id: 39, title: "Project 39: AI API Performance Monitor & OpenTelemetry Tracing Suite", complexity: "Advanced" },
  { id: 40, title: "Project 40: Mega Capstone: Autonomous AI OS Interceptor Daemon", complexity: "Advanced" }
];

export const OUTCOMES: Outcome[] = [
  { icon: Terminal, title: "Automate Anything", text: "Turn repetitive data parsing, speech commands, and system workflows into lightweight daemons." },
  { icon: Database, title: "Vector & RAG Systems", text: "Build advanced multi-format RAG systems, layout parsers, and dense/sparse keyword search matrices." },
  { icon: Globe, title: "Agentic Frameworks", text: "Design recursive self-correcting graphs, multi-agent teams, and human-in-the-loop validation tools." },
  { icon: ShieldCheck, title: "Production MLOps Envs", text: "Deploy low-latency FastAPI backends containerized in Docker, complete with metrics, benchmarks, and OpenTelemetry." }
];

export const STATS: Stat[] = [
  { label: "Core Modules", value: 13, suffix: "" },
  { label: "Mega Projects", value: "4 Core", suffix: "" },
  { label: "Daily Live Classes", value: "1.5 Hrs", suffix: "" },
  { label: "Course Duration", value: "90 Days", suffix: "" },
  { label: "Launch Baseline", value: "May 25", suffix: "" }
];

export const FAQ_DATA: FAQItem[] = [
  { 
    q: "Do I need prior coding experience?", 
    a: "None at all. We start from absolute scratch—from setting up VS Code, understanding variables, to writing advanced recursive operations, and then scaling directly into hardcore AI engineering." 
  },
  { 
    q: "What is the course fee structure?", 
    a: "The entire 90-Day Python Mastery & AI Engineer Bootcamp is available as a monthly subscription of ₹666. There are no expensive upfront fees, and you can cancel anytime. Please note that all payments are final with a strict no-refund policy." 
  },
  { 
    q: "How is the curriculum structured?", 
    a: "The course is structured in a clear progression: the first 15 days establish a bulletproof core Python foundation. The remaining 75 days are entirely dedicated to designing and building 4 Core Mega Projects." 
  },
  { 
    q: "What hardware and software do I need?", 
    a: "Any standard laptop or computer (Windows, macOS, or Linux) with an internet connection. We use entirely open-source, free tools like VS Code, Docker, Ollama, and python-interpreter." 
  },
  { 
    q: "Will I build real projects?", 
    a: "Yes — exactly 4 Core Mega Projects representing the pinnacle of modern AI engineering, culminating in an autonomous desktop operating system interceptor daemon." 
  },
  { 
    q: "Is the course live or pre-recorded?", 
    a: "It is a 100% daily live class model. Every day from Monday to Friday, Hamid Kamal leads a 1.5-hour live interactive session consisting of 30 minutes of architecture/system design and 60 minutes of hands-on, live code execution. There are no pre-recorded video lectures." 
  },
  { 
    q: "Will I receive a certificate?", 
    a: "No. We do not provide certificates because we believe a piece of paper holds no weight in the real world. Our entire focus is on building real-world skills and high-caliber projects that you can proudly showcase on your GitHub portfolio. Your live, working projects are your ultimate certificate." 
  },
  {
    q: "What is the refund policy?",
    a: "We have a strict no-refund policy. Since the course is offered at an extremely affordable subsidized fee of just ₹666 per month, all subscription payments are final. However, you are free to cancel your subscription at any time to prevent any future billings."
  }
];

export const getWhatsAppUrl = (messageType: 'enroll' | 'general' | 'support') => {
  const phone = '918332059777';
  let text = '';
  
  if (messageType === 'enroll') {
    text = "Hi Hamid,\n\nI want to enroll in the Advanced Python Course (90-Day Python & 4 Core Mega Projects Bootcamp)! I am ready to transition from basics to AI pro for the ₹666 monthly fee. Please guide me through the registration steps. 🚀";
  } else if (messageType === 'support') {
    text = "Hi Hamid,\n\nI have a general query regarding the Advanced Python Course. ⚡";
  } else {
    text = "Hi Hamid,\n\nI would like to connect with you regarding the Advanced Python Course! 🐍";
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
