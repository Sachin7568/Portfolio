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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Cpu,
  Brush,
  Wrench,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section
      id="skills"
      className="py-16 md:py-40 border-b border-outline-variant/50 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* 3D Background Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 px-4">
        <AnimatedSection>
          <SectionHeader title="Technical Arsenal" id="skills-heading" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mb-16 px-2 sm:px-4">
            <div className="flex gap-1 sm:gap-2 p-1.5 bg-[var(--bg-1)] backdrop-blur-md rounded-full border border-[var(--b1)] shadow-sm w-full max-w-[340px] sm:max-w-[420px]">
              {skillCategories.map((category) => {
                const isActive = activeTab === category.id;
                const Icon = iconMap[category.icon] || Code;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={cn(
                      "relative rounded-full text-sm font-body font-semibold transition-all duration-300 whitespace-nowrap group flex items-center justify-center",
                      isActive ? "h-10 flex-1 text-[var(--bg)]" : "h-10 w-10 shrink-0 text-[var(--t2)] hover:text-[var(--t1)] hover:bg-[var(--bg-2)]"
                    )}
                    aria-label={category.title}
                    title={category.title}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="skill-tab-indicator"
                        className="absolute inset-0 bg-[var(--accent)] border border-[var(--b3)] rounded-full -z-10 shadow-[0_0_20px_var(--accent-2)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center">
                      <Icon className={cn("shrink-0 transition-transform duration-300", isActive ? "w-4 h-4 scale-110" : "w-5 h-5 group-hover:scale-110")} />
                      <span 
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isActive ? "max-w-[200px] opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"
                        )}
                      >
                        {category.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-[var(--bg-1)] backdrop-blur-xl border border-[var(--b1)] rounded-2xl p-5 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
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
                      <div className="w-full sm:w-40 font-body text-sm font-semibold text-on-surface transition-colors group-hover:text-[var(--accent)]">
                        {skill.name}
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full sm:flex-1 h-3 bg-[var(--bg-2)] border border-[var(--b1)] rounded-full overflow-hidden relative">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-[var(--accent)] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>

                      {/* Level Label & Percentage */}
                      <div className="flex justify-between sm:justify-end gap-6 w-full sm:w-32">
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
      </div>
    </section>
  );
}
