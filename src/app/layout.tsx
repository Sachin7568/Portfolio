import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--next-font-headline",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--next-font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--next-font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin | Computer Science Engineer & Software Developer",
  description:
    "Portfolio of Sachin — a Computer Science Engineering graduate from Haryana, India specializing in ReactJS, JavaScript, C++, and Modern Web Development. Turning complex problems into elegant, scalable code.",
  keywords: [
    "Sachin",
    "Computer Science Engineer",
    "Software Developer",
    "ReactJS",
    "JavaScript",
    "C++",
    "Java",
    "Web Developer",
    "Portfolio",
    "Frontend Developer",
  ],
  authors: [{ name: "Sachin" }],
  creator: "Sachin",
  metadataBase: new URL("https://sachin.dev"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sachin.dev",
    title: "Sachin | Computer Science Engineer & Software Developer",
    description:
      "Portfolio of Sachin — CSE graduate specializing in ReactJS, JavaScript, C++, and Modern Web Development.",
    siteName: "Sachin.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin - Computer Science Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin | Computer Science Engineer & Software Developer",
    description:
      "Portfolio of Sachin — CSE graduate specializing in ReactJS, JavaScript, C++, and Modern Web Development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sachin",
              jobTitle: "Computer Science Engineer",
              description:
                "Computer Science Engineering graduate specializing in ReactJS, JavaScript, C++, and Modern Web Development.",
              url: "https://sachin.dev",
              sameAs: [
                "https://github.com/sachin",
                "https://linkedin.com/in/sachin",
              ],
              knowsAbout: [
                "ReactJS",
                "JavaScript",
                "C++",
                "Java",
                "HTML",
                "CSS",
                "MySQL",
                "Git",
                "Data Structures",
                "Algorithms",
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
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-background font-body antialiased transition-colors duration-500">
        <ThemeProvider>
          {/* Skip to content — accessibility */}
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
