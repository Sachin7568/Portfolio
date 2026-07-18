"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center text-center border-b border-[var(--color-border)] relative"
      aria-label="Hero section"
    >
      <motion.div
        className="max-w-3xl space-y-6 md:space-y-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status & Location Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-1)] text-[var(--color-accent)] font-code text-xs font-medium border border-[var(--color-border-active)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            <span>Available for Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-1)] text-[var(--color-ink-2)] font-code text-xs font-medium border border-[var(--color-border)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-headline text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="text-[var(--color-ink)]">Hi, I&apos;m </span>
          <span className="text-[var(--color-accent)]">{personal.name}</span>
          <span className="text-xl sm:text-3xl md:text-4xl font-bold text-[var(--color-ink-2)] tracking-normal mt-3 block">
            Computer Science Graduate & Full-Stack Engineer
          </span>
        </motion.h1>

        {/* Objective / Bio */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base sm:text-lg text-[var(--color-ink-2)] max-w-2xl mx-auto leading-relaxed"
        >
          {personal.objective}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 pt-2 w-full"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg-0)] font-body text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-accent-dim)] hover:border-[var(--color-accent-dim)] transition-colors active:scale-95 w-full sm:w-auto cursor-pointer"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-1)] text-[var(--color-ink)] font-body text-sm font-semibold px-6 py-3 rounded-lg hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors active:scale-95 w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-1)] text-[var(--color-ink)] font-body text-sm font-semibold px-6 py-3 rounded-lg hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors active:scale-95 w-full sm:w-auto"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Contact Info Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-[var(--color-ink-2)] font-code"
        >
          <a
            href={personal.social.email}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-bg-1)] border border-[var(--color-border)] hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.email}</span>
          </a>
          <a
            href={personal.social.phone}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-bg-1)] border border-[var(--color-border)] hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.phone}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
