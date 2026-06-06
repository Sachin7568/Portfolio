"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

const sectionIds = ["about", "education", "skills", "certifications", "projects"];




import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "mx-auto transition-all duration-500 flex justify-between items-center pointer-events-auto",
        isScrolled 
          ? "max-w-4xl glass dark:bg-zinc-900/70 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full px-8 py-3 border border-outline-variant/30 backdrop-blur-xl" 
          : "max-w-6xl px-6 py-2"
      )}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-headline text-2xl font-bold text-primary dark:text-primary-fixed tracking-tight"
        >
          Sachin.dev
        </a>

        <div className="flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "font-body text-sm font-semibold tracking-[0.02em] transition-colors",
                activeSection === link.href.slice(1)
                  ? "text-primary dark:text-primary-fixed"
                  : "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
