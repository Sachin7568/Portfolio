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
    title: "Java FullStack Developer",
    issuer: "Coursera",
    date: "June 2025",
    credentialUrl: "#",
    icon: "Code",
    color: "primary",
  },
  {
    id: "react-native",
    title: "React Native",
    issuer: "Coursera",
    date: "March 2025",
    credentialUrl: "#",
    icon: "Smartphone",
    color: "tertiary",
  },
  {
    id: "sql-intro",
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "Coursera",
    date: "June 2025",
    credentialUrl: "#",
    icon: "Database",
    color: "secondary",
  },
  {
    id: "cloud-iot",
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "Swayam",
    date: "April 2025",
    credentialUrl: "#",
    icon: "Cloud",
    color: "primary",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "Swayam",
    date: "April 2024",
    credentialUrl: "#",
    icon: "CloudCog",
    color: "tertiary",
  },
];
