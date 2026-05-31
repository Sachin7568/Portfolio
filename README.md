# 🚀 Sachin — Personal Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-blue?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-ff69b4?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel Optimized](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com/)

A modern, high-performance, and responsive single-page developer portfolio website built using **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

Designed to showcase academic milestones, key technical capabilities, certs, and software engineering projects with smooth animations and layout transitions.

⭐ **Live Preview**: `https://sachin-portfolio.vercel.app` (Or run locally!)

---

## 🛠️ Tech Stack & Key Technologies

*   **Framework**: Next.js 16 (App Router, Turbopack) for server-side optimization and static page generation.
*   **Language**: TypeScript with strict types to ensure robust code quality.
*   **Styling (CSS)**: Tailwind CSS v4, customized with **50+ custom Material Design 3 tokens** (primary/secondary surfaces, dimming, and outline systems).
*   **Animations**: Framer Motion for scroll-triggered entrance revealing and seamless layout transitions.
*   **Theme Integration**: `next-themes` for manual and system-synced light/dark mode persistence.
*   **Icons**: Lucide React + custom handcrafted SVG brand icons for GitHub and LinkedIn (v1-compatible).

---

## ✨ Features & Micro-Interactions

*   **📱 Mobile-First Responsive Design**: Fluid layout optimized down to 320px screens. Uses a custom slide-in drawer menu with backdrop-blur overlays.
*   **🎭 Smooth Active Section Navigation**: Sticky navbar with scroll position tracking via `IntersectionObserver` to highlight the active page section linearly.
*   **✨ Availablity Badge**: Features a pinging interactive badge in the hero section displaying availability.
*   **📊 Technical Arsenal (Skills)**: Staggered entrance technical category bars with custom level tracking and CSS tags.
*   **🎓 Timeline Milestone Grid**: A chronological roadmap of projects with non-distorting flexible nodes.
*   **🔍 Compact Capsule Focus Search**: A minimalist search box in front of category filter tags. Collapses to a small circle when idle and expands smoothly to `w-48` on focus, with **zero border outlines/highlights** (only the caret blinking).
*   **📨 Serverless Contact Form**: Fully verified contact form with Formspree integration, complete inline client-side validation, and instant loading/success alerts.

---

## 📁 Directory Structure

```text
portfolio-app/
├── public/                  # Static assets (robots.txt, og-image.png)
├── src/
│   ├── app/
│   │   ├── globals.css      # Core styles, variables, dark overrides
│   │   ├── layout.tsx       # Metadata, structure, provider wraps
│   │   ├── page.tsx         # Main portfolio assembly page
│   │   └── sitemap.ts       # Dynamic sitemap generator
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ScrollProgress, BackToTop
│   │   ├── sections/        # Hero, About, Education, Skills, Certs, Projects, Contact
│   │   ├── ui/              # SectionHeader, AnimatedSection, SVG Icons
│   │   └── providers/       # ThemeProvider
│   ├── data/                # personal.ts, projects.ts, skills.ts, etc.
│   ├── hooks/               # useActiveSection, useScrollProgress
│   └── lib/                 # Tailwind utility classes helper
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or above recommended).

### 1. Clone & Navigate
```bash
git clone https://github.com/Sachin7568/Portfolio.git
cd Portfolio/portfolio-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application in action.

### 4. Create Production Build
To build and verify the optimized version of the website:
```bash
npm run build
npm run start
```

---

## 🌎 Contact & Connect

Feel free to reach out to connect, collaborate, or explore opportunities!

*   **LinkedIn**: [linkedin.com/in/sachin-kumar-103762218](https://www.linkedin.com/in/sachin-kumar-103762218)
*   **GitHub**: [github.com/Sachin7568](https://github.com/Sachin7568)
*   **Gmail**: [sachinvr10094@gmail.com](mailto:sachinvr10094@gmail.com)
