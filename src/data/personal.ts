// Single source of truth for the canonical URL: metadata, JSON-LD, sitemap and
// robots all read this. Set NEXT_PUBLIC_SITE_URL in the host to override.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sachin.dev";

export const personal = {
  name: "Sachin",
  role: "Full-Stack Software Engineer & CS Graduate",
  location: "Haryana, India",
  email: "sachinportfoliowebdev@gmail.com",
  phone: "+91-7568330645",
  tagline: "Building responsive, data-driven web applications & scalable software solutions.",
  objective:
    "Results-driven Computer Science graduate with a strong foundation in full-stack web development. Builds responsive, data-driven applications with the MERN stack, Python, and PostgreSQL, deployed with Docker.",
  about: [
    "I am a results-driven Computer Science graduate with a strong foundation in full-stack web development.",
    "I build responsive, data-driven applications using the MERN stack, Python, FastAPI, and PostgreSQL, containerized and deployed with Docker and modern cloud tools."
  ],
  social: {
    github: "https://github.com/Sachin7568",
    linkedin: "https://www.linkedin.com/in/sachin-kumar-103762218/",
    email: "mailto:sachinportfoliowebdev@gmail.com",
    phone: "tel:+917568330645",
  },
} as const;
