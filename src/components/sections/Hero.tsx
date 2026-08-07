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
      className="pt-24 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center text-center border-b border-[var(--color-border)] relative isolate"
      aria-label="Introduction"
    >
      <div className="hero-backdrop" aria-hidden="true" />

      <motion.div
        className="relative z-10 max-w-3xl space-y-6 md:space-y-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status & location */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <div className="pill border-[var(--color-border-active)] text-[var(--color-accent)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            <span>Available for Opportunities</span>
          </div>

          <div className="pill">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-headline text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="text-[var(--color-ink)]">Hi, I&apos;m </span>
          <span className="text-gradient">{personal.name}</span>
          <span className="text-xl sm:text-3xl md:text-4xl font-bold text-[var(--color-ink-2)] tracking-normal mt-4 block">
            Computer Science Graduate &amp; Full-Stack Engineer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-base sm:text-lg text-[var(--color-ink-2)] max-w-2xl mx-auto leading-relaxed"
        >
          {personal.objective}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 pt-2 w-full"
        >
          <a href="#projects" className="btn btn-primary w-full sm:w-auto">
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full sm:w-auto"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Direct contact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <a
            href={personal.social.email}
            className="pill hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.email}</span>
          </a>
          <a
            href={personal.social.phone}
            className="pill hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>{personal.phone}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
