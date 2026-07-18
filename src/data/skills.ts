export interface Skill {
  name: string;
  category: string;
  icon?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code",
    color: "primary",
    skills: [
      { name: "Python", category: "Backend & Data" },
      { name: "JavaScript", category: "Full-Stack Development" },
      { name: "TypeScript", category: "Type-Safe Web Apps" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "Globe",
    color: "primary",
    skills: [
      { name: "ReactJS", category: "Single Page Apps" },
      { name: "Tailwind CSS", category: "Modern Styling" },
      { name: "HTML5", category: "Semantic Markup" },
      { name: "CSS3", category: "Layout & Animations" },
    ],
  },
  {
    id: "backend-db",
    title: "Backend & Databases",
    icon: "Server",
    color: "tertiary",
    skills: [
      { name: "Node.js", category: "Backend Runtime" },
      { name: "Express.js", category: "REST APIs" },
      { name: "FastAPI", category: "High Performance APIs" },
      { name: "PostgreSQL", category: "Relational Database" },
      { name: "MongoDB", category: "Document Store" },
      { name: "MySQL", category: "Relational Database" },
    ],
  },
  {
    id: "devops-tools",
    title: "DevOps & Tools",
    icon: "Wrench",
    color: "secondary",
    skills: [
      { name: "Docker", category: "Containerization" },
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Collaboration" },
      { name: "Linux (Ubuntu)", category: "OS Environment" },
      { name: "Vercel", category: "Cloud Hosting" },
      { name: "VS Code", category: "Primary IDE" },
    ],
  },
  {
    id: "design-media",
    title: "Design & Multimedia",
    icon: "Palette",
    color: "primary",
    skills: [
      { name: "Figma", category: "UI/UX Prototyping" },
      { name: "Canva", category: "Visual Assets" },
      { name: "DaVinci Resolve", category: "Video Production" },
    ],
  },
  {
    id: "core-cs",
    title: "Core CS Fundamentals",
    icon: "Cpu",
    color: "tertiary",
    skills: [
      { name: "DSA", category: "Data Structures & Algorithms" },
      { name: "OOP", category: "Object-Oriented Programming" },
      { name: "DBMS", category: "Database Management Systems" },
      { name: "OS", category: "Operating System Principles" },
      { name: "Computer Networks", category: "Network Protocols & Architecture" },
    ],
  },
];

export const allSkillsList = skillCategories.flatMap((c) => c.skills);
