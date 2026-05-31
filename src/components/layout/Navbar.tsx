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




export function Navbar() {
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden md:block sticky top-0 z-50 border-b border-outline-variant dark:border-outline bg-surface/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-6 max-w-[1200px] mx-auto">
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
    </nav>
  );
}
