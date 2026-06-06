"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { Code, Globe, Cpu, Brush, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tilt3D } from "@/components/ui/Tilt3D";

const levelToWidth: Record<string, number> = {
  Proficient: 88,
  Advanced: 72,
  Intermediate: 55,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section
      id="skills"
      className="py-24 md:py-40 border-b border-outline-variant/50"
      aria-labelledby="skills-heading"
    >
      <AnimatedSection>
        <SectionHeader title="Technical Arsenal" id="skills-heading" />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex gap-2 p-1 bg-[var(--bg-1)] backdrop-blur-md rounded-xl border border-[var(--b1)] shadow-lg">
            {skillCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={cn(
                    "relative px-4 py-2.5 rounded-lg text-sm font-body font-semibold transition-colors duration-200 whitespace-nowrap",
                    isActive ? "text-[var(--bg)]" : "text-[var(--t2)] hover:text-[var(--t1)]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="skill-tab-indicator"
                      className="absolute inset-0 bg-[var(--accent)] border border-[var(--b3)] rounded-lg -z-10 shadow-[0_0_15px_var(--accent)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-[var(--bg-1)] backdrop-blur-xl border border-[var(--b1)] rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {activeCategory.skills.map((skill, index) => {
                const percentage = levelToWidth[skill.level] || 50;
                return (
                  <div key={skill.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group">
                    {/* Skill Name */}
                    <div className="w-40 font-body text-sm font-semibold text-on-surface transition-colors group-hover:text-[var(--accent)]">
                      {skill.name}
                    </div>

                    {/* Progress Bar Track */}
                    <div className="flex-1 h-3 bg-[var(--bg-2)] border border-[var(--b1)] rounded-full overflow-hidden relative">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[var(--accent)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>

                    {/* Level Label & Percentage */}
                    <div className="flex justify-between sm:justify-end gap-6 sm:w-32">
                      <span className="font-code text-xs text-on-surface-variant uppercase tracking-wider">
                        {skill.level}
                      </span>
                      <span className="font-code text-xs font-semibold text-on-surface">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </section>
  );
}
