"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/data/education";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function Education() {
  const edu = education[0];

  return (
    <section
      id="education"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="education-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Education" id="education-heading" align="left" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-[var(--color-bg-1)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                    {edu.title}
                  </h3>
                  <p className="font-body text-base font-semibold text-[var(--color-accent)] mt-0.5">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[var(--color-ink-2)] font-code">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {edu.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Score Badge */}
              <div className="bg-[var(--color-bg-2)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-center shrink-0 md:min-w-[130px]">
                <span className="block text-[11px] font-code uppercase text-[var(--color-ink-3)] tracking-wider">
                  CGPA
                </span>
                <span className="font-headline text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                  {edu.gradeValue}
                </span>
              </div>
            </div>

            {/* Highlights */}
            {edu.highlights && (
              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <h4 className="font-headline text-xs uppercase tracking-wider text-[var(--color-ink-3)] mb-3">
                  Key Focus & Foundation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-[var(--color-ink-2)] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
