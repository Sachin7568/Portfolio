"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

const floatingElements = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 60, x: "85%", y: "15%", delay: 1, duration: 8 },
  { size: 40, x: "75%", y: "70%", delay: 2, duration: 7 },
  { size: 50, x: "15%", y: "75%", delay: 0.5, duration: 9 },
  { size: 30, x: "50%", y: "85%", delay: 1.5, duration: 5 },
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
      {/* Floating Background Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/[0.03] dark:bg-primary-fixed/[0.05]"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-0" />

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
          className="font-headline text-[48px] md:text-[64px] lg:text-[72px] font-[800] text-on-surface tracking-tight leading-[1.1]"
        >
          Engineering{" "}
          <span className="text-primary relative inline-block">
            Practical
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-primary-fixed"
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
          Software Solutions
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
          className="flex flex-wrap justify-center gap-6 pt-6"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:bg-[#003ea8] hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            className="inline-flex items-center justify-center gap-2 border-2 border-outline-variant text-on-surface font-body text-sm font-semibold tracking-[0.02em] px-8 py-4 rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-surface/50 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
