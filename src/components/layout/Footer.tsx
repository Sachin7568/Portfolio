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
    <footer className="relative overflow-hidden pt-20 pb-8 bg-[var(--bg)]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 rounded-t-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Brand Name */}
        <button 
          onClick={handleScrollToTop}
          className="font-headline text-3xl font-extrabold tracking-tight mb-8 relative group cursor-pointer focus:outline-none"
        >
          <span className="bg-gradient-to-r from-[var(--t1)] to-[var(--t2)] bg-clip-text text-transparent group-hover:from-[var(--accent)] group-hover:to-primary transition-colors duration-500">
            Sachin.dev
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-primary/30 rounded-full group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500 shadow-[0_0_10px_var(--accent)] opacity-0 group-hover:opacity-100" />
        </button>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] flex items-center justify-center text-[var(--t2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--accent-2)] transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] flex items-center justify-center text-[var(--t2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--accent-2)] transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personal.social.email}
            className="w-12 h-12 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] flex items-center justify-center text-[var(--t2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_20px_var(--accent-2)] transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[var(--b2)] to-transparent mb-8" />

        {/* Copyright & UX Action */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 text-sm font-code text-[var(--t3)]">
          <p>© {currentYear} Sachin. Crafted with passion.</p>
          
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-semibold hover:text-[var(--accent)] transition-colors group focus:outline-none bg-[var(--bg-1)] px-4 py-2 rounded-full border border-[var(--b1)] hover:border-[var(--accent)]"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
