"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#hero"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] active:scale-95 transition-all shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
