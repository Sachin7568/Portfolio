"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

const floatingElements = [
  { size: 350, x: "-10%", y: "-10%", delay: 0, duration: 8, color: "bg-primary/20 dark:bg-primary/10" },
  { size: 450, x: "70%", y: "40%", delay: 1, duration: 10, color: "bg-tertiary/20 dark:bg-tertiary/10" },
  { size: 300, x: "20%", y: "80%", delay: 2, duration: 7, color: "bg-secondary/20 dark:bg-secondary/10" },
];

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
      className="py-16 md:py-32 flex flex-col items-center justify-center text-center gap-16 border-b border-outline-variant/50 relative overflow-hidden hero-bg"
      aria-label="Hero section"
    >
      {/* 3D Floating Shapes */}
      <FloatingShapes />
      
      {/* Premium Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-60", el.color)}
            style={{
              width: el.size,
              height: el.size,
              left: el.x,
              top: el.y,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 30, 0, -30, 0],
              scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/90 z-0" />

      <motion.div
        className="max-w-4xl space-y-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-primary font-body text-sm font-semibold tracking-[0.02em] border border-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            Available for Opportunities
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-headline text-[48px] md:text-[64px] lg:text-[72px] font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="text-on-surface">Engineering</span>{" "}
          <span className="relative inline-block bg-linear-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent pb-2">
            Practical
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </span>
          <br />
          <span className="text-on-surface">Software Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
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
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-secondary text-white font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border border-outline-variant/50 text-on-surface font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:border-primary/50 hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 glass"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-10 pt-10 text-on-surface-variant"
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href={personal.social.email}
            aria-label="Send Email"
            className="p-3 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
