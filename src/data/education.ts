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
    title: "B.E. – CSE",
    institution: "Chandigarh University, Mohali, Punjab",
    icon: "GraduationCap",
    color: "primary",
    gradeLabel: "CGPA",
    gradeValue: "7.42",
    dates: "Nov 2022 - June 2026",
  },
  {
    id: "senior-secondary",
    title: "Sr. Secondary (Non-Medical)",
    institution: "Sidhhartha Public School, Kanjhawala, Delhi",
    icon: "BookOpen",
    color: "tertiary",
    gradeLabel: "Score",
    gradeValue: "72%",
    dates: "Apr 2020 - July 2021",
  },
  {
    id: "secondary",
    title: "Secondary (CBSE)",
    institution: "Vaish Model Sr. Sec. School, Bhiwani, Haryana",
    icon: "PenTool",
    color: "secondary",
    gradeLabel: "Score",
    gradeValue: "85%",
    dates: "Apr 2018 - July 2019",
  },
];
