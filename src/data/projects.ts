export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  date: string;
  year: number;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "inventory-order-management",
    title: "Inventory & Order Management System",
    subtitle: "FastAPI / React / TypeScript / PostgreSQL / Docker",
    description:
      "Full-stack containerized system with CRUD operations for products, orders, customers, and automated low-stock analytics alerts.",
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/Sachin7568/Inventory-Order-Management-System",
    demo: "https://inventory-order-management-system-rho.vercel.app/",
    featured: true,
    date: "May 2026",
    year: 2026,
    icon: "Boxes",
    color: "primary",
    highlights: [
      "Built full-stack containerized system using FastAPI backend, React (TypeScript) frontend, and PostgreSQL database.",
      "Implemented CRUD operations for Products, Customers, and Orders with automatic order totals and dynamic stock reduction.",
      "Designed an interactive analytics dashboard featuring low-stock alerts, fully containerized with Docker Compose for one-command deployment."
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    subtitle: "React / Vite / Tailwind CSS",
    description:
      "Responsive SPA for managing employee data with real-time multi-field search, column sorting, and floating modal dialogs.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/Employee-Management-System",
    demo: "https://employee-management-system-psi-gray.vercel.app/",
    featured: true,
    date: "Aug 2025",
    year: 2025,
    icon: "Users",
    color: "tertiary",
    highlights: [
      "Developed a responsive SPA for managing employee data with full CRUD functionality and floating modal interfaces.",
      "Integrated real-time search & filter (by Name, Role, Email), sorting, and dynamic avatar generation.",
      "Implemented localStorage-based data persistence ensuring reliable offline data retention."
    ],
  },
  {
    id: "tracker-pay",
    title: "MERN Expense Tracker \"Tracker Pay\"",
    subtitle: "MongoDB / Express.js / React / Node.js",
    description:
      "Financial management application with RESTful APIs, transaction breakdown, balance tracking, and category analytics.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Sachin7568/MERN-Expense-Tracker",
    demo: "https://mern-expense-tracker-bay.vercel.app",
    featured: true,
    date: "May 2024",
    year: 2024,
    icon: "Wallet",
    color: "secondary",
    highlights: [
      "Engineered full-stack MERN expense tracking application for real-time budget management and income/expense monitoring.",
      "Built RESTful APIs in Express/Node.js backed by MongoDB for transaction logging, balance updates, and secure data handling.",
      "Created an intuitive dashboard interface featuring visual category breakdowns and financial overview statistics."
    ],
  },
  {
    id: "notes-app",
    title: "Notes App",
    subtitle: "React / Tailwind CSS",
    description:
      "Lightweight note-taking application using component-driven React architecture and state management.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/notes-app-project",
    demo: "https://notes-app-project-zeta.vercel.app/",
    featured: false,
    date: "Jan 2024",
    year: 2024,
    icon: "FileText",
    color: "primary",
    highlights: [
      "Built clean, responsive note-taking application using component-based React architecture.",
      "Utilized React hooks and state management for instant note creation, viewing, live search filtering, and deletion.",
      "Styled with Tailwind CSS for optimized layouts and fluid responsiveness across mobile and desktop screens."
    ],
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);
