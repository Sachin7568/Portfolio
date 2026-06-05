"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-outline-variant/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeader title="About Me" id="about-heading" align="center" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="font-body text-lg text-on-surface-variant space-y-6 text-center glass dark:bg-zinc-900/60 p-8 md:p-12 rounded-3xl border border-outline-variant/30">
            {personal.about.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
