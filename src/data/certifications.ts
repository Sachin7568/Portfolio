export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
}

export const certifications: Certification[] = [
  {
    id: "java-fullstack",
    title: "Java FullStack",
    issuer: "Coursera",
    date: "Jun 2025",
    credentialUrl: "https://drive.google.com/file/d/1u-H1qWMPWzsAgz-kG24A8AOnfQ5SNbk3/view?usp=drive_link",
    icon: "Code2",
    color: "primary",
  },
  {
    id: "react-native",
    title: "React Native",
    issuer: "Coursera",
    date: "Mar 2025",
    credentialUrl: "https://drive.google.com/file/d/1FfMncE_c2ZfAdAJ83PKSRlpb8xdyhf_7/view?usp=drive_link",
    icon: "Smartphone",
    color: "tertiary",
  },
  {
    id: "sql-querying",
    title: "SQL Querying Databases",
    issuer: "Coursera",
    date: "Jun 2025",
    credentialUrl: "https://drive.google.com/file/d/1Y0DtqTvKWpdI4M8gP7UlN7j8HYimw76N/view?usp=sharing",
    icon: "Database",
    color: "secondary",
  },
  {
    id: "cloud-iot-edge-ml",
    title: "Cloud IoT Edge ML",
    issuer: "Swayam",
    date: "Apr 2025",
    credentialUrl: "https://drive.google.com/file/d/1spjk0IWC6f84cedeGm0zTQpEyFBNqr-4/view?usp=drive_link",
    icon: "Cpu",
    color: "primary",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "Swayam",
    date: "Apr 2024",
    credentialUrl: "https://drive.google.com/file/d/1eylsM2KQxx4xgfOOqf1f94uF0Yj0Cyx9/view?usp=sharing",
    icon: "Cloud",
    color: "tertiary",
  },
];
