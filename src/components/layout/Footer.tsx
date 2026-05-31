import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low  border-t border-outline-variant dark:border-outline mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/50 to-transparent pointer-events-none" />
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-10 max-w-[1200px] mx-auto relative z-10">
        <div className="font-headline text-2xl font-bold text-primary mb-6 md:mb-0">
          Sachin.dev
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={personal.social.email}
            className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>

        <div className="text-sm text-secondary dark:text-secondary-fixed">
          © {currentYear} Sachin. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
