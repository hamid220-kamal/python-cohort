<div align="center">
  <img width="1200" height="475" alt="Advanced Python Course - Academy Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Advanced Python Course — 90-Day Python Mastery & AI Engineer Bootcamp

Welcome to **Advanced Python Course**, the official production-grade learning hub and interactive landing page for **The 90-Day Python Mastery & AI Engineer Bootcamp** — mentored by **Hamid Kamal (Co-Founder, CNC Jugaaadi)**.

This repository hosts a high-performance, single-page reactive web application built with **React**, **TypeScript**, and **Tailwind CSS v4**, paired with a specialized print-ready static curriculum schedule dashboard. The application is crafted with a high-end **"Obsidian Cyber-Neon"** design system, delivering smooth micro-interactions, responsive typography, and an interactive real-time project filtering core.

---

## 🌟 Core Architecture & Features

### 1. Premium Obsidian Cyber-Neon Theme
* **Deep space obsidian background** (`#030306`) with dynamic HSL-glowing radial gradients.
* **Luminous cyberpunk accents**:
  * **Hyper-Violet** (`#8b5cf6`): Primary action triggers, timelines, and main glows.
  * **Radiant Teal** (`#14b8a6`): Success indicators, foundational badges, and highlights.
  * **Cyber Rose** (`#f43f5e`): Mega Capstone markers, warning states, and high-luminance elements.
* **High-End Typography System**:
  * **Space Grotesk**: Wide-tracking, geometric display font for structural titles and headers.
  * **Plus Jakarta Sans**: Clean, highly readable, organic sans-serif for general body copy.
  * **JetBrains Mono**: Developer-centric monospace font for sessions, calendar dates, badges, and terminal logs.

### 2. Flawless Responsiveness & Layout Hardening
* **Fluid Scaling**: Standard CSS fluid rules guarantee zero element overlapping or horizontal layout wrapping down to **320px** wide mobile viewports.
* **Sliding Mobile Navigation Drawer**: Interactive backdrop-blurred hamburger navigation slide-out (`Menu`/`X` triggers) built specifically for mobile viewports.
* **Floating Context Shortcuts**: Bottompersistent action nodes shrink dynamically on compact devices to avoid hiding primary content.

### 3. Curriculum Timelines & Horizontal Stepper Track
* **Roadmap Timeline**: A custom horizontal scroll-track with scrollbar-hiding utilities (`scrollbar-none`) and custom fading shadow boundaries for mobile devices, rendering as a clean 5-column grid on desktop screens.
* **Real-time Project Q&A Engine**: Instant filtering search bar inside the Roadmap. Students can search through all **4 Core Mega Projects** in real-time by title, complexity, sequence ID, or description keywords.

### 4. Adaptive Static Print Syllabus Engine
* **Print Dashboard**: Located in [bootcamp_schedule.html](bootcamp_schedule.html), this standalone dashboard provides a beautiful table cataloging **exactly 90 sessions** from Monday, May 25, 2026 to Friday, September 25, 2026 (Mon-to-Fri structure, excluding weekends and holidays).
* **Dual-Contrast Theme**: Displays a gorgeous dark obsidian screen theme in standard browsers, but triggers a specialized `@media print` contrast override when printed. Flipped to highly readable, ink-saving black text on solid white pages, styled with thin slate borders.

---

## 📅 The 90-Day Structural Syllabus

The curriculum spans **18 weeks** (90 Sessions, 1.5 Hours Daily with a 30m architecture / 60m live terminal coding split), perfectly structured into **5 phases**:

* **Phase 1: Core Python Foundations (Sessions 01 - 15)**: Complete coverage of 13 core foundations modules, advanced OOP constructs, LEGB scopes, constructing snake-water-gun compilers, and standard package freezers.
* **Phase 2: LLM APIs & Advanced AI Foundations (Sessions 16 - 35)**: Deep-dive into structured LLM outputs, asynchronous file translators, Log Synthesizers, Whisper voice daemons, and financial text-miners (Projects P01 to P11).
* **Phase 3: RAG Systems & Vector Databases (Sessions 36 - 55)**: Layout-aware PDF RAG, local codebase indexing (ChromaDB), PostgreSQL session storage, dense/sparse hybrid search (BM25 + Dense) with Reciprocal Rank Fusion, and VideoDB transcription overlays (Projects P12 to P22).
* **Phase 4: Agentic Frameworks & Multi-Agent Systems (Sessions 56 - 75)**: Multi-agent research crews (CrewAI), LangGraph cyclic graphs, self-correcting sandboxes, strict JSON schemas, and Slack approval hooks (Projects P23 to P33).
* **Phase 5: Multimodal Pipelines & Production MLOps (Sessions 76 - 90)**: fal.ai voice podcast generators, LLaMA/DeepSeek serving benchmarks, ChatML dataset compilers, FastAPI Docker backends, and OpenTelemetry instrumentation (Projects P34 to P40 - Capstone OS Interceptor).

---

## 📂 Codebase Directory Structure

```text
d:\LeT-s_lEaRN
├── .env.example               # Template environment configuration
├── README.md                  # Comprehensive bootcamp documentation
├── index.html                 # Main SPA entrypoint with optimized SEO tags
├── bootcamp_schedule.html     # High-end printable static HTML A4 syllabus
├── package.json               # Package and build script declarations
├── tsconfig.json              # TypeScript compilation rules
├── vite.config.ts             # Vite bundler configurations
└── src
    ├── main.tsx               # SPA React mounting bootstrap
    ├── index.css              # Main global stylesheets & Tailwind utilities
    ├── App.tsx                # Master page layout & navigation drawer shell
    ├── assets
    │   └── images             # High-quality asset images & graphics
    └── components
        ├── AIAtlas.tsx        # Dynamic roadmap atlas component
        ├── Blueprint.tsx      # Core educational mathematical blueprints
        ├── CTASection.tsx     # High-fidelity CTA card components
        ├── CountdownTimer.tsx # Premium real-time launch countdown
        ├── EnrollmentModal.tsx# Glassmorphic registration form modal
        ├── FAQ.tsx            # Glowing accordion interactive component
        ├── Footer.tsx         # Sleek brand footer element
        ├── Hero.tsx           # Advanced terminal-focused landing hero
        ├── Mentor.tsx         # 3D perspective mentor profile & bio
        ├── Outcomes.tsx       # Mastered skill grids & targets
        ├── Roadmap.tsx        # Curved timeline phase stepper & search hub
        └── roadmapData.ts     # Core database for the projects
```

---

## ⚡ Quick Start & Deployment Guide

### Prerequisites
* **Node.js**: Recommended v18.0.0 or higher.
* **NPM**: Built-in packages.

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Set Up Environment Variables
Duplicate `.env.example` to create `.env.local`:
```bash
cp .env.example .env.local
```
*(Optional)* Add any required API keys or endpoints into `.env.local` to integrate dynamic services.

### 3. Local Development Run
Boot up Vite's reactive development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the interactive single-page application.

### 4. Build for Launch & Production Deployment
Compile the optimized production bundle:
```bash
npm run build
```
Vite will output highly optimized, compressed assets into the `dist` folder:
```text
dist/
├── index.html
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```
The output within `dist` is ready to be hosted on any premium server platform (Vercel, Netlify, Cloudflare Pages, or AWS S3).

---

## 🛠️ Verification & Quality Assurance

To maintain perfect code quality and type safety, the following test scripts must pass successfully before committing any code changes:

### Type Safety Verification
Verify that there are zero TypeScript compiler warnings or error loops:
```bash
npx tsc --noEmit
```

### Production Bundle Packaging
Confirm that the bundle wraps cleanly without broken dependencies or unknown classes:
```bash
npm run build
```

---

## 🌟 The Creator & Mentor Ecosystem
The curriculum and codebase are built and managed by:
* **Mentor**: Hamid Kamal (Co-Founder, CNC Jugaaadi)
* **Official Inbound Contact**: +91 8332059777 (WhatsApp / Text Only)
* **Official Email**: buildwithhamid@gmail.com
* **Official Syllabus Page**: [bootcamp_schedule.html](bootcamp_schedule.html) (A4 Print-Friendly)

*Powered by The Monthly Code Club / CNC Jugaaadi Ecosystem.*
