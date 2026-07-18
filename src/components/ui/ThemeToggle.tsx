"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-bg-1)] border border-[var(--color-border)] text-[var(--color-ink-2)]"
        aria-label="Toggle theme"
      >
        <Sun className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-bg-1)] hover:bg-[var(--color-bg-2)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors active:scale-95 overflow-hidden cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 16, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-[var(--color-accent)]" />
          ) : (
            <Moon className="w-4 h-4 text-[var(--color-accent)]" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
