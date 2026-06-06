import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low border-t border-[var(--b1)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] to-transparent pointer-events-none z-0" />
      
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-16 max-w-[1200px] mx-auto relative z-10">
        <div className="font-headline text-2xl font-bold text-[var(--t1)] mb-8 md:mb-0">
          Sachin.dev
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-code text-[var(--t2)] hover:text-[var(--accent)] transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--accent)] hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-code text-[var(--t2)] hover:text-[var(--accent)] transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--accent)] hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href={personal.social.email}
            className="flex items-center gap-2 text-sm font-code text-[var(--t2)] hover:text-[var(--accent)] transition-all duration-300 hover:drop-shadow-[0_0_10px_var(--accent)] hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>

        <div className="text-sm font-code text-[var(--t3)]">
          © {currentYear} Sachin. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
