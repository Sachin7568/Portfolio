# 🚀 Sachin — Personal Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-blue?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-ff69b4?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel Optimized](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com/)

A responsive single-page developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Every route is statically prerendered.

⭐ **Live**: [portfolio-orpin-psi-13.vercel.app](https://portfolio-orpin-psi-13.vercel.app)

---

## 🛠️ Tech Stack

*   **Framework**: Next.js 16 (App Router, Turbopack), fully static output.
*   **Language**: TypeScript, strict mode.
*   **Styling**: Tailwind CSS v4 with an OKLCH design-token palette and a small component layer (`.card`, `.btn`, `.pill`, `.tag`, `.field`) so the visual identity lives in one file.
*   **Animation**: Framer Motion for scroll-triggered reveals, wrapped in `MotionConfig reducedMotion="user"`.
*   **Theming**: `next-themes` for persisted light/dark mode.
*   **Icons**: Lucide React, plus hand-written SVG brand marks for GitHub and LinkedIn.
*   **Contact**: [Web3Forms](https://web3forms.com) — no backend to run.

---

## ✨ Features

*   **Mobile-first responsive layout** down to 320px, with a slide-in drawer nav behind a backdrop blur.
*   **Active section tracking** via `IntersectionObserver`, marking the current section in the navbar.
*   **Native smooth scrolling.** Anchor links are plain `<a href="#id">` — CSS `scroll-behavior` handles the motion, so navigation updates the URL hash, is deep-linkable, and works without JavaScript.
*   **Zero-JS reading progress bar**, driven by a CSS `animation-timeline: scroll()` rather than a scroll listener, so scrolling triggers no React re-renders.
*   **Working contact form** — client-side validation, honeypot spam guard, live sending/sent/failed states, and a `mailto:` fallback when no Web3Forms key is configured.
*   **Accessibility**: skip link, visible focus rings on every interactive element, labelled and `aria-describedby`-linked form fields, and full `prefers-reduced-motion` support in both CSS and Framer Motion.
*   **SEO**: one canonical `SITE_URL` feeding metadata, Open Graph, JSON-LD (`schema.org/Person`), `sitemap.xml`, and `robots.txt`.

---

## 📁 Directory Structure

```text
portfolio-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, component layer, hero backdrop
│   │   ├── layout.tsx       # Metadata, JSON-LD, providers
│   │   ├── page.tsx         # Section assembly
│   │   ├── robots.ts        # Generated robots.txt
│   │   └── sitemap.ts       # Generated sitemap.xml
│   ├── components/
│   │   ├── layout/          # Navbar, MobileNav, Footer, ScrollProgress, BackToTop
│   │   ├── sections/        # Hero, About, Education, Skills, Certifications, Projects, Contact
│   │   ├── ui/              # SectionHeader, AnimatedSection, Icons, ThemeToggle
│   │   └── providers/       # ThemeProvider
│   ├── data/                # personal.ts, projects.ts, skills.ts, education.ts, certifications.ts
│   ├── hooks/               # useActiveSection
│   └── lib/                 # contact.ts (+ tests), utils.ts
├── .env.example
├── package.json
└── tsconfig.json
```

Content lives in `src/data/` — editing a project or a skill never means touching a component.

---

## 🚀 Getting Started

### Prerequisites
[Node.js](https://nodejs.org/) 20 or newer. `npm test` additionally needs 22.18+, since it runs TypeScript through Node's native type stripping.

### 1. Clone & Navigate
```bash
git clone https://github.com/Sachin7568/Portfolio.git
cd Portfolio/portfolio-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key. Without it the contact form falls back to opening the visitor's mail client. Public by design — it appears in the page markup either way. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, JSON-LD, sitemap, and robots. Defaults to `https://sachin.dev`. |

Set both in your Vercel project settings too — a local `.env.local` does not reach the deployment.

### 4. Run
```bash
npm run dev      # http://localhost:3000
npm test         # contact validation + payload encoding
npm run lint
npm run build    # static production build
npm run start
```

---

## 🌎 Contact

*   **LinkedIn**: [linkedin.com/in/sachin-kumar-103762218](https://www.linkedin.com/in/sachin-kumar-103762218)
*   **GitHub**: [github.com/Sachin7568](https://github.com/Sachin7568)
*   **Email**: [sachinportfoliowebdev@gmail.com](mailto:sachinportfoliowebdev@gmail.com)
