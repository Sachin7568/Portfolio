export interface Education {
  id: string;
  title: string;
  institution: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  gradeLabel: string;
  gradeValue: string;
  dates?: string;
}

export const education: Education[] = [
  {
    id: "btech",
    title: "B.Tech CSE",
    institution: "Chandigarh University",
    icon: "GraduationCap",
    color: "primary",
    gradeLabel: "CGPA",
    gradeValue: "7.48",
    dates: "2022 - 2026",
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary",
    institution: "High School",
    icon: "BookOpen",
    color: "tertiary",
    gradeLabel: "Score",
    gradeValue: "72%",
    dates: "2020 - 2021",
  },
  {
    id: "secondary",
    title: "Secondary School",
    institution: "Middle School",
    icon: "PenTool",
    color: "secondary",
    gradeLabel: "Score",
    gradeValue: "85%",
    dates: "2018 - 2019",
  },
];
