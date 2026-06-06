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
    credentialUrl: "https://drive.google.com/file/d/1u-H1qWMPWzsAgz-kG24A8AOnfQ5SNbk3/view?usp=drive_link",
    icon: "Code",
    color: "primary",
  },
  {
    id: "react-native",
    title: "React Native",
    issuer: "Coursera",
    date: "March 2025",
    credentialUrl: "https://drive.google.com/file/d/1FfMncE_c2ZfAdAJ83PKSRlpb8xdyhf_7/view?usp=drive_link",
    icon: "Smartphone",
    color: "tertiary",
  },
  {
    id: "sql-intro",
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "Coursera",
    date: "June 2025",
    credentialUrl: "https://drive.google.com/file/d/1Y0DtqTvKWpdI4M8gP7UlN7j8HYimw76N/view?usp=sharing",
    icon: "Database",
    color: "secondary",
  },
  {
    id: "cloud-iot",
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "Swayam",
    date: "April 2025",
    credentialUrl: "https://drive.google.com/file/d/1spjk0IWC6f84cedeGm0zTQpEyFBNqr-4/view?usp=drive_link",
    icon: "Cloud",
    color: "primary",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "Swayam",
    date: "April 2024",
    credentialUrl: "https://drive.google.com/file/d/1eylsM2KQxx4xgfOOqf1f94uF0Yj0Cyx9/view?usp=sharing",
    icon: "CloudCog",
    color: "tertiary",
  },
];
