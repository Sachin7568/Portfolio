"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export function Navbar() {
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className={cn(
        "mx-auto transition-all duration-300 flex justify-between items-center pointer-events-auto",
        isScrolled
          ? "max-w-3xl bg-[var(--color-bg-1)]/80 backdrop-blur-xl border border-[var(--color-border)] rounded-full px-6 py-2.5 shadow-lg shadow-black/20"
          : "max-w-5xl px-6 py-2"
      )}>
        <a
          href="#hero"
          className="font-headline text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors tracking-tight"
        >
          Sachin<span className="text-[var(--color-accent)]">.dev</span>
        </a>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "font-body text-xs font-semibold tracking-wider transition-colors relative py-1",
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
