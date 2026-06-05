export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  year: number;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "inventory-management",
    title: "Inventory & Order Management",
    description: "Full-stack, containerized system with dashboard, low stock alerts, and order management.",
    longDescription: "Built a full-stack, containerized system using FastAPI (Python) backend, React (TypeScript + Vite) frontend, and PostgreSQL database. Implemented CRUD for Products (SKUs, stock tracking), Customers, and Orders (auto total calculation & dynamic stock reduction). Designed an analytics dashboard with low stock alerts; containerized with Docker Compose for one-command deployment.",
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/Sachin7568/Inventory-Order-Management-System",
    demo: "https://inventory-order-management-system-rho.vercel.app/",
    featured: true,
    year: 2026,
    icon: "Box",
    color: "primary",
    highlights: [
      "Containerized with Docker Compose",
      "FastAPI backend & React TS frontend",
      "Dynamic stock reduction & order totals",
      "Analytics dashboard with low stock alerts"
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    description: "Responsive SPA for managing employee data with real-time search and floating modals.",
    longDescription: "Developed a responsive SPA for managing employee data with full CRUD, floating modals, and dynamic avatars. Added real-time search & filter (by Name, Role, Email), sorting, and localStorage-based data persistence.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/Employee-Management-System",
    demo: "https://employee-management-system-psi-gray.vercel.app/",
    featured: true,
    year: 2025,
    icon: "Users",
    color: "tertiary",
    highlights: [
      "Full CRUD with floating modals",
      "Real-time search & filter functionality",
      "Dynamic avatars generation",
      "localStorage-based data persistence"
    ],
  },
  {
    id: "notes-app",
    title: "Notes App",
    description: "Clean, responsive notes application with add, view, and delete functionality.",
    longDescription: "Built a clean, responsive notes application with add, view, and delete functionality using component-based architecture. Utilized React state management and reusable components to efficiently handle note operations and maintain a smooth user interface.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/notes-app-project",
    demo: "https://notes-app-project-zeta.vercel.app/",
    featured: true,
    year: 2024,
    icon: "StickyNote",
    color: "secondary",
    highlights: [
      "Component-based architecture",
      "React state management",
      "Responsive UI with Tailwind",
      "Add, view, and delete notes"
    ],
  },
  {
    id: "job-card",
    title: "Job Card Project",
    description: "Data-driven UI showcasing job openings using reusable React components.",
    longDescription: "Designed a data-driven UI showcasing job openings using reusable React components with Lucide icons and modern styling. Enhanced user experience with responsive layouts and interactive card designs optimized for both desktop and mobile devices.",
    technologies: ["React", "Lucide Icons", "Tailwind CSS"],
    github: "https://github.com/Sachin7568/card-project",
    demo: "https://card-project-sigma-three.vercel.app/",
    featured: true,
    year: 2023,
    icon: "Briefcase",
    color: "primary",
    highlights: [
      "Data-driven interactive UI",
      "Reusable React components",
      "Integration with Lucide icons",
      "Optimized for desktop and mobile"
    ],
  }
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);
