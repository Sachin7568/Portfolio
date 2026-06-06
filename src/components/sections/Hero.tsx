"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="py-16 md:py-32 flex flex-col items-center justify-center text-center gap-16 border-b border-[var(--b1)] relative overflow-hidden hero-bg"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[var(--bg)] z-0 pointer-events-none" />

      <motion.div
        className="max-w-4xl space-y-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-1)] backdrop-blur-md text-[var(--accent)] font-body text-sm font-semibold tracking-[0.02em] border border-[var(--b2)] shadow-[0_0_15px_var(--accent-3)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]" />
            </span>
            Available for Opportunities
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-headline text-[48px] md:text-[64px] lg:text-[72px] font-extrabold tracking-tight leading-[1.1] relative mix-blend-screen"
        >
          <span className="text-[var(--t1)] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Engineering Practical</span>
          <br />
          <span className="text-[var(--accent)] drop-shadow-[0_0_20px_var(--accent-2)]">Software Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-[var(--t2)] max-w-2xl mx-auto leading-relaxed"
        >
          {personal.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 pt-6 relative z-20"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent-3)] text-[var(--accent)] font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:bg-[var(--accent-2)] hover:shadow-[0_0_25px_var(--accent-3)] transition-all duration-300 backdrop-blur-md"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1y72evci1AKoov-q-fNGM4lKyfjOH4aiL/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent-3)] text-[var(--accent)] font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:bg-[var(--accent-2)] hover:shadow-[0_0_25px_var(--accent-3)] transition-all duration-300 backdrop-blur-md"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent-3)] text-[var(--accent)] font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:bg-[var(--accent-2)] hover:shadow-[0_0_25px_var(--accent-3)] transition-all duration-300 backdrop-blur-md"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex justify-center gap-10 pt-10 text-[var(--t2)]"
        >
          <motion.a
            variants={itemVariants}
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-3)] hover:text-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-7 h-7" />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-3)] hover:text-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin className="w-7 h-7" />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href={personal.social.email}
            aria-label="Send Email"
            className="p-3 rounded-full bg-[var(--bg-1)] backdrop-blur-sm border border-[var(--b1)] hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-3)] hover:text-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-7 h-7" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
