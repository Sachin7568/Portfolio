"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, User, Code, GraduationCap, Award, Folder } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#projects", label: "Projects", icon: Folder },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [close]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-0)] sticky top-0 z-40">
        <span className="font-headline text-lg font-bold text-[var(--color-ink)]">
          Sachin<span className="text-[var(--color-accent)]">.dev</span>
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed inset-y-0 right-0 z-50 flex flex-col w-72 bg-[var(--color-bg-1)] border-l border-[var(--color-border)] shadow-2xl"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="p-5 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-bg-0)]">
                <div>
                  <h2 className="font-headline text-lg font-bold text-[var(--color-ink)]">
                    Sachin
                  </h2>
                  <p className="text-xs text-[var(--color-ink-2)]">
                    Computer Science Engineer
                  </p>
                </div>
                <button
                  onClick={close}
                  className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)] p-2 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-3 text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-2)] px-6 py-4 font-body text-sm font-medium transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
