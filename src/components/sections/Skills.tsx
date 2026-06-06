"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { Code, Globe, Cpu, Brush, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tilt3D } from "@/components/ui/Tilt3D";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Cpu,
  Brush,
  Wrench,
};

const colorMap = {
  primary: {
    iconBg: "bg-primary-container text-on-primary-container",
    barBg: "bg-primary",
    levelText: "text-primary",
    hoverBorder: "hover:border-primary/30",
  },
  tertiary: {
    iconBg: "bg-tertiary-container text-on-tertiary-container",
    barBg: "bg-tertiary",
    levelText: "text-tertiary",
    hoverBorder: "hover:border-tertiary/30",
  },
  secondary: {
    iconBg: "bg-secondary-container text-on-secondary-container",
    barBg: "bg-secondary",
    levelText: "text-secondary",
    hoverBorder: "hover:border-secondary/30",
  },
};

function SkillProgressBar({
  name,
  level,
  percentage,
  color,
  delay,
}: {
  name: string;
  level: string;
  percentage: number;
  color: "primary" | "tertiary" | "secondary";
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colors = colorMap[color];

  return (
    <div ref={ref} className="group relative">
      <div className="flex justify-between font-body text-sm font-semibold tracking-[0.02em] mb-2">
        <span className="group-hover:text-on-surface transition-colors">
          {name}
        </span>
        <span className={cn("font-semibold", colors.levelText)}>
          {level}
        </span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
        <motion.div
          className={cn("h-2 rounded-full", colors.barBg)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-inverse-surface text-inverse-on-surface text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {percentage}% proficiency
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-outline-variant/50"
      aria-labelledby="skills-heading"
    >
      <AnimatedSection>
        <SectionHeader title="Technical Arsenal" id="skills-heading" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {skillCategories.map((category, catIndex) => {
          const Icon = iconMap[category.icon] || Code;
          const colors = colorMap[category.color];

          return (
            <AnimatedSection key={category.id} delay={catIndex * 0.1}>
              <Tilt3D tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} className="h-full">
                <div
                  className={cn(
                    "glass dark:bg-zinc-900/60 border border-outline-variant/30 rounded-2xl p-10 transition-all duration-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] h-full",
                    colors.hoverBorder
                  )}
                >
                  <h3 className="font-headline text-2xl font-semibold text-on-surface mb-10 flex items-center gap-4 relative z-10">
                    <span
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-lg",
                        colors.iconBg
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    {category.title}
                  </h3>

                  {category.type === "progress" ? (
                    <div className="space-y-6 relative z-10">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillProgressBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          percentage={skill.percentage}
                          color={category.color}
                          delay={0.3 + skillIndex * 0.2}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3 relative z-10">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={cn(
                            "group/badge relative px-4 py-2.5 rounded-xl font-body text-sm font-semibold tracking-[0.02em] border border-outline-variant/30 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] inline-flex items-center gap-2.5",
                            "bg-surface-container-low/50 dark:bg-zinc-800/40 text-on-surface hover:bg-surface-container-lowest dark:hover:bg-zinc-800/80",
                            colors.hoverBorder
                          )}
                        >
                          <span className={cn("w-2 h-2 rounded-full shadow-sm", colors.barBg)}></span>
                          {skill.name}
                          {/* Badge tooltip */}
                          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-inverse-surface text-inverse-on-surface text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-all duration-200 group-hover/badge:-translate-y-1 pointer-events-none whitespace-nowrap z-20 shadow-xl">
                            {skill.level}
                            {/* Tooltip arrow */}
                            <svg className="absolute text-inverse-surface h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Tilt3D>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
