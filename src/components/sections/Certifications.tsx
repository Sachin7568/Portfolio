"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/certifications";
import {
  Award,
  BadgeCheck,
  Code2,
  Smartphone,
  Database,
  Cpu,
  Cloud,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Smartphone,
  Database,
  Cpu,
  Cloud,
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            title="Certifications & Specializations"
            id="certifications-heading"
           
          />
        </AnimatedSection>

        <div className="space-y-3">
          {certifications.map((cert, index) => {
            const isCoursera = cert.issuer.toLowerCase().includes("coursera");
            const IconComponent = iconMap[cert.icon] || (isCoursera ? BadgeCheck : Award);
            const isClickable = Boolean(cert.credentialUrl && cert.credentialUrl !== "#");

            const CardWrapper = isClickable ? "a" : "div";
            const wrapperProps = isClickable
              ? {
                  href: cert.credentialUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <AnimatedSection key={cert.id} delay={index * 0.05}>
                <CardWrapper
                  {...wrapperProps}
                  className={`card ${
                    isClickable ? "card-hover" : ""
                  } group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:px-6 sm:py-4`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="icon-tile w-9 h-9">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div>
                      <h4 className="font-headline text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                        {cert.title}
                      </h4>
                      <span className="font-code text-xs text-[var(--color-ink-2)]">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[var(--color-border)]">
                    <span className="font-code text-xs text-[var(--color-ink-3)]">
                      {cert.date}
                    </span>

                    {isClickable && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:underline">
                        <span>Verify</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
