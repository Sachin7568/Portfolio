"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/data/education";
import { GraduationCap, BookOpen, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  BookOpen,
  PenTool,
};

const colorMap = {
  primary: {
    iconBg: "bg-primary-container text-on-primary-container",
    decorBg: "bg-primary/5",
    textColor: "text-primary",
  },
  tertiary: {
    iconBg: "bg-tertiary-container text-on-tertiary-container",
    decorBg: "bg-tertiary/5",
    textColor: "text-tertiary",
  },
  secondary: {
    iconBg: "bg-secondary-container text-on-secondary-container",
    decorBg: "bg-secondary/5",
    textColor: "text-secondary",
  },
};

export function Education() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b border-outline-variant/50"
      aria-labelledby="education-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <SectionHeader title="Education" id="education-heading" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {education.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            const colors = colorMap[edu.color];

            return (
              <AnimatedSection key={edu.id} delay={index * 0.15}>
                <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-10 ambient-shadow relative overflow-hidden group h-full">
                  {/* Decorative corner */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500",
                      colors.decorBg
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-14 h-14 rounded-xl mb-6 relative z-10",
                      colors.iconBg
                    )}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-headline text-2xl font-semibold text-on-surface mb-2 relative z-10">
                    {edu.title}
                  </h3>
                  <p
                    className={cn(
                      "font-body text-base font-semibold mb-4 relative z-10",
                      colors.textColor
                    )}
                  >
                    {edu.institution}
                  </p>

                  {edu.dates && (
                    <p className="text-sm text-on-surface-variant mb-4 relative z-10">
                      {edu.dates}
                    </p>
                  )}

                  <div className="inline-block bg-surface-container-high px-4 py-2 rounded-lg font-body text-sm font-semibold tracking-[0.02em] text-on-surface relative z-10">
                    {edu.gradeLabel}:{" "}
                    <span className="font-bold">{edu.gradeValue}</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
