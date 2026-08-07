"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories, allSkillsList } from "@/data/skills";
import { Code, Globe, Server, Wrench, Palette, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Server,
  Wrench,
  Palette,
  Cpu,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Technical Skills" id="skills-heading" />
        </AnimatedSection>

        {/* Category Filter Pills */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-body font-semibold transition-colors border cursor-pointer active:scale-95",
                activeTab === "all"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg-0)] border-[var(--color-accent)] shadow-[0_4px_18px_-6px_var(--color-accent-glow)]"
                  : "bg-[var(--color-bg-1)] text-[var(--color-ink-2)] border-[var(--color-border)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-active)]"
              )}
            >
              All Skills ({allSkillsList.length})
            </button>

            {skillCategories.map((category) => {
              const isActive = activeTab === category.id;
              const Icon = iconMap[category.icon] || Code;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-colors border cursor-pointer active:scale-95",
                    isActive
                      ? "bg-[var(--color-accent)] text-[var(--color-bg-0)] border-[var(--color-accent)] shadow-[0_4px_18px_-6px_var(--color-accent-glow)]"
                      : "bg-[var(--color-bg-1)] text-[var(--color-ink-2)] border-[var(--color-border)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-active)]"
                  )}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Flowing Skill Groups */}
        <AnimatedSection delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {filteredCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Code;

                return (
                  <div key={cat.id} className="card p-5">
                    <div className="flex items-center gap-2.5 mb-4 text-[var(--color-ink)] font-headline font-bold text-sm">
                      <span className="icon-tile w-8 h-8">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3>{cat.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="tag flex items-center gap-2 !text-[var(--color-ink)] font-medium"
                        >
                          <span>{skill.name}</span>
                          <span className="text-[10px] font-code text-[var(--color-ink-3)]">
                            {skill.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
