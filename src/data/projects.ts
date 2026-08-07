export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  date: string;
  icon: string;
  highlights: string[];
}

// Ordered most advanced first: full-stack with a database and container
// tooling, then full-stack, then front-ends ranked by depth of logic.
export const projects: Project[] = [
  {
    id: "inventory-order-management",
    title: "Inventory & Order Management System",
    subtitle: "FastAPI · React · TypeScript · PostgreSQL · Docker",
    description:
      "Full-stack containerized system with CRUD operations for products, orders, customers, and automated low-stock analytics alerts.",
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/Sachin7568/Inventory-Order-Management-System",
    demo: "https://inventory-order-management-system-rho.vercel.app/",
    featured: true,
    date: "Jun 2026",
    icon: "Boxes",
    highlights: [
      "Built a full-stack containerized system with a FastAPI backend, React (TypeScript) frontend, and PostgreSQL database.",
      "Implemented CRUD for Products, Customers, and Orders with automatic order totals and dynamic stock reduction.",
      "Designed an analytics dashboard with low-stock alerts, containerized via Docker Compose for one-command deployment.",
    ],
  },
  {
    id: "tracker-pay",
    title: 'MERN Expense Tracker "Tracker Pay"',
    subtitle: "MongoDB · Express.js · React · Node.js",
    description:
      "Financial management application with RESTful APIs, transaction breakdown, balance tracking, and category analytics.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    github: "https://github.com/Sachin7568/MERN-Expense-Tracker",
    demo: "https://mern-expense-tracker-bay.vercel.app",
    featured: true,
    date: "Jun 2026",
    icon: "Wallet",
    highlights: [
      "Engineered a full-stack MERN application for real-time budget management and income/expense monitoring.",
      "Built RESTful APIs in Express/Node.js over MongoDB for transaction logging, balance updates, and data handling.",
      "Created a dashboard with dynamic category breakdowns and live database sync alerts.",
    ],
  },
  {
    id: "trader-risk-dashboard",
    title: "Trader Risk Dashboard",
    subtitle: "React · Vite · Vitest",
    description:
      "Risk monitor for funded trading accounts that answers one question first: am I about to breach my account rules? Every figure is derived, never stored.",
    technologies: ["React", "Vite", "Vitest", "JavaScript"],
    github: "https://github.com/Sachin7568/trader-risk-dashboard",
    demo: "https://trader-risk-dashboard-amber.vercel.app",
    featured: true,
    date: "Aug 2026",
    icon: "TrendingUp",
    highlights: [
      "Modelled trailing drawdown against the equity high-water mark and daily loss limits as pure functions, so no derived figure can drift out of sync with the trade log.",
      "Built a next-trade simulator that re-runs the same calculations with a hypothetical trade appended, surfacing the real headroom before a breach.",
      "Covered the calculation layer with Vitest: supplied dataset, empty log, breakeven trades, breached account, and losing day.",
    ],
  },
  {
    id: "mediawave",
    title: "MediaWave",
    subtitle: "React 19 · Redux Toolkit · React Router",
    description:
      "Media search app querying Unsplash, Pexels, and Giphy through one interface, with a saved collection that survives reloads.",
    technologies: [
      "React 19",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
    ],
    github: "https://github.com/Sachin7568/MediaWave",
    demo: "https://media-wave.vercel.app",
    featured: false,
    date: "Jul 2026",
    icon: "Layers",
    highlights: [
      "Architected global search state and a persisted collection slice with Redux Toolkit, switching providers by tab without losing the active query.",
      "Integrated three third-party media APIs behind one search interface using Axios.",
      "Handled the full state matrix: loading skeletons, empty, no-results, and error with retry.",
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    subtitle: "React · Vite · Tailwind CSS",
    description:
      "Responsive SPA for managing employee data with real-time multi-field search, column sorting, and floating modal dialogs.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/Employee-Management-System",
    demo: "https://employee-management-system-psi-gray.vercel.app",
    featured: false,
    date: "Jun 2026",
    icon: "Users",
    highlights: [
      "Developed a responsive SPA for employee data with full CRUD and modal interfaces.",
      "Integrated real-time search and filtering by name, role, and email, plus sorting and generated avatars.",
      "Implemented localStorage persistence for reliable offline retention.",
    ],
  },
  {
    id: "botleague",
    title: "BotLeague — Robotics Competition Platform",
    subtitle: "React 19 · TypeScript · Tailwind CSS v4",
    description:
      "Landing platform for a national robotics competition, built around a custom design system with scroll animations and interactive brackets.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Sachin7568/BotMaker-Assignment",
    demo: "https://bot-maker-assignment.vercel.app",
    featured: false,
    date: "Jun 2026",
    icon: "Trophy",
    highlights: [
      "Defined a custom design system — Orbitron display type, dark base with a vibrant red accent — and applied it across every section.",
      "Built an interactive user-journey timeline and discipline cards with grayscale-to-color hover transitions.",
      "Implemented tournament bracket visualisations and registration flows, responsive from mobile to desktop.",
    ],
  },
];
