"use client";

import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] py-12 bg-[var(--color-bg-0)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Bio summary */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <button 
            onClick={handleScrollToTop}
            className="font-headline text-xl font-bold tracking-tight text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
          >
            Sachin<span className="text-[var(--color-accent)]">.dev</span>
          </button>
          <p className="font-body text-xs text-[var(--color-ink-2)] max-w-sm">
            Computer Science Graduate & Full-Stack Engineer from Haryana, India.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] active:scale-95 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] active:scale-95 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.social.email}
            className="p-2.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] active:scale-95 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-code text-[var(--color-ink-3)]">
          <span>© {currentYear} Sachin.</span>
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] transition-all cursor-pointer active:scale-95"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
