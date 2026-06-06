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

  // Lock body scroll when open
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

  // Close on escape
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
    }, 300);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-outline-variant bg-surface/90 backdrop-blur-sm sticky top-0 z-40">
        <span className="font-headline text-2xl font-bold text-primary">
          Sachin.dev
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            className="text-on-surface-variant hover:text-primary p-2 bg-surface-container-low rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-y-0 right-0 z-50 flex flex-col w-72 bg-surface-container  shadow-2xl"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-primary dark:text-primary-fixed">
                    Sachin
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Computer Science Engineer
                  </p>
                </div>
                <button
                  onClick={close}
                  className="text-on-surface-variant hover:text-primary p-2 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center gap-4 text-on-surface-variant dark:text-surface-variant px-6 py-6 hover:bg-surface-container-high dark:hover:bg-surface-variant font-body text-sm font-semibold tracking-[0.02em] transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
