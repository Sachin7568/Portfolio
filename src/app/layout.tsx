import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { SITE_URL } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin | Computer Science Engineer & Software Developer",
  description:
    "Portfolio of Sachin, a Computer Science Engineering graduate from Haryana, India specializing in React, TypeScript, Python, and Modern Web Development.",
  keywords: [
    "Sachin",
    "Computer Science Engineer",
    "Software Developer",
    "React",
    "JavaScript",
    "Python",
    "Web Developer",
    "Portfolio",
    "Frontend Developer",
  ],
  authors: [{ name: "Sachin" }],
  creator: "Sachin",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Sachin | Computer Science Engineer & Software Developer",
    description:
      "Portfolio of Sachin, CSE graduate specializing in React, TypeScript, Python, and Modern Web Development.",
    siteName: "Sachin.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin | Computer Science Engineer & Software Developer",
    description:
      "Portfolio of Sachin, CSE graduate specializing in React, TypeScript, Python, and Modern Web Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sachin",
  jobTitle: "Computer Science Engineer",
  description:
    "Computer Science Engineering graduate specializing in React, TypeScript, Python, and Modern Web Development.",
  url: SITE_URL,
  sameAs: [
    "https://github.com/Sachin7568",
    "https://www.linkedin.com/in/sachin-kumar-103762218/",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Docker",
    "PostgreSQL",
    "MongoDB",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Chandigarh University",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="bg-bg-0 text-ink font-body antialiased selection:bg-accent-wash selection:text-accent">
        {/* Next 16 wants JSON-LD in the body, not a hand-written <head>. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
