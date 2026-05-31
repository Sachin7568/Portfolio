export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  type: "progress" | "badge";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code",
    color: "tertiary",
    type: "progress",
    skills: [
      { name: "C++", level: "Advanced", percentage: 90 },
      { name: "JavaScript", level: "Proficient", percentage: 85 },
      { name: "Java", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Globe",
    color: "primary",
    type: "progress",
    skills: [
      { name: "ReactJS", level: "Advanced", percentage: 88 },
      { name: "HTML/CSS", level: "Advanced", percentage: 95 },
      { name: "Modern Web Dev", level: "Proficient", percentage: 80 },
    ],
  },
  {
    id: "core-cs",
    title: "Core CS & Tools",
    icon: "Cpu",
    color: "secondary",
    type: "badge",
    skills: [
      { name: "DSA", level: "Advanced", percentage: 0 },
      { name: "DBMS", level: "Advanced", percentage: 0 },
      { name: "MySQL", level: "Proficient", percentage: 0 },
      { name: "Git/GitHub", level: "Proficient", percentage: 0 },
      { name: "VS Code", level: "Advanced", percentage: 0 },
    ],
  },
  {
    id: "design",
    title: "Design & Productivity",
    icon: "Brush",
    color: "primary",
    type: "badge",
    skills: [
      { name: "Figma", level: "Intermediate", percentage: 0 },
      { name: "Canva", level: "Proficient", percentage: 0 },
      { name: "DaVinci Resolve", level: "Intermediate", percentage: 0 },
      { name: "MS Office", level: "Advanced", percentage: 0 },
    ],
  },
];
