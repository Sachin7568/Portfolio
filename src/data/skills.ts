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
    id: "languages",
    title: "Languages & Web Tech",
    icon: "Code",
    color: "primary",
    type: "badge",
    skills: [
      { name: "ReactJS", level: "Proficient", percentage: 0 },
      { name: "JavaScript", level: "Proficient", percentage: 0 },
      { name: "Python", level: "Advanced", percentage: 0 },
      { name: "C++", level: "Advanced", percentage: 0 },
      { name: "HTML/CSS", level: "Proficient", percentage: 0 },
      { name: "MySQL", level: "Advanced", percentage: 0 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    color: "tertiary",
    type: "badge",
    skills: [
      { name: "Git/GitHub", level: "Proficient", percentage: 0 },
      { name: "Docker", level: "Intermediate", percentage: 0 },
      { name: "Vercel", level: "Advanced", percentage: 0 },
      { name: "VS Code", level: "Proficient", percentage: 0 },
      { name: "Figma/Canva", level: "Intermediate", percentage: 0 },
      { name: "DaVinci Resolve", level: "Intermediate", percentage: 0 },
    ],
  },
  {
    id: "core-cs",
    title: "Computer Science",
    icon: "Cpu",
    color: "secondary",
    type: "badge",
    skills: [
      { name: "DSA", level: "Proficient", percentage: 0 },
      { name: "DBMS", level: "Proficient", percentage: 0 },
      { name: "OOPs", level: "Proficient", percentage: 0 },
      { name: "Operating Systems", level: "Advanced", percentage: 0 },
      { name: "Computer Network", level: "Intermediate", percentage: 0 },
    ],
  },
  {
    id: "styling",
    title: "Styling & UI",
    icon: "Brush",
    color: "primary",
    type: "badge",
    skills: [
      { name: "Tailwind CSS", level: "Proficient", percentage: 0 },
      { name: "Framer Motion", level: "Advanced", percentage: 0 },
      { name: "Vanilla CSS", level: "Proficient", percentage: 0 },
    ],
  },
];
