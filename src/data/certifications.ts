export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
}

export const certifications: Certification[] = [
  {
    id: "java-fullstack",
    title: "Java Full Stack Developer",
    issuer: "Professional Certification",
    date: "2024",
    credentialUrl: "#",
    icon: "Award",
    color: "primary",
  },
  {
    id: "react-native",
    title: "React Native",
    issuer: "Course Completion",
    date: "2024",
    credentialUrl: "#",
    icon: "BadgeCheck",
    color: "tertiary",
  },
  {
    id: "sql-intro",
    title: "SQL Practical Introduction",
    issuer: "Skill Certification",
    date: "2023",
    credentialUrl: "#",
    icon: "Database",
    color: "secondary",
  },
  {
    id: "cloud-iot",
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "Technical Foundation",
    date: "2023",
    credentialUrl: "#",
    icon: "Cloud",
    color: "primary",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "Course Completion",
    date: "2023",
    credentialUrl: "#",
    icon: "CloudCog",
    color: "tertiary",
  },
];
