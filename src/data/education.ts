export interface Education {
  id: string;
  title: string;
  institution: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  gradeLabel: string;
  gradeValue: string;
  dates: string;
  location: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    id: "btech-cse",
    title: "B.Tech Computer Science and Engineering",
    institution: "Chandigarh University",
    icon: "GraduationCap",
    color: "primary",
    gradeLabel: "CGPA",
    gradeValue: "7.5 / 10",
    dates: "Nov 2022 – June 2026",
    location: "Punjab, India",
    highlights: [
      "Strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks",
      "Hands-on full-stack development with MERN stack, Python, FastAPI, PostgreSQL, and Docker",
      "Hands-on project development and containerized application deployments"
    ]
  }
];
