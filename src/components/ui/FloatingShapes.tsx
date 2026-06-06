"use client";

import { motion } from "framer-motion";

const IsometricCube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M50 50V85" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M50 50L85 35" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M50 50L15 35" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M50 15L50 50" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.3"/>
  </svg>
);

const IsometricPyramid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20L80 70L50 85L20 70L50 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M50 20V85" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 70L80 70" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 4" opacity="0.5"/>
  </svg>
);

const IsometricCylinder = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="25" rx="30" ry="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="50" cy="75" rx="30" ry="10" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeDasharray="4 4"/>
    <path d="M20 25V75" stroke="currentColor" strokeWidth="2"/>
    <path d="M80 25V75" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 75A30 10 0 0 0 80 75" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotateX: [0, 20, 0],
          rotateY: [0, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[10%] text-primary/30 dark:text-primary/20 w-32 h-32 blur-[1px]"
      >
        <IsometricCube className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 50, 0],
          rotateX: [0, -20, 0],
          rotateY: [360, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[15%] text-secondary/30 dark:text-secondary/20 w-40 h-40 blur-[2px]"
      >
        <IsometricPyramid className="w-full h-full drop-shadow-[0_0_15px_rgba(167,139,250,0.3)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotateX: [20, -20, 20],
          rotateZ: [0, 360],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[20%] text-tertiary/30 dark:text-tertiary/20 w-24 h-24 blur-[1px]"
      >
        <IsometricCylinder className="w-full h-full drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]" />
      </motion.div>
    </div>
  );
}
