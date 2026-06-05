"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/certifications";
import {
  Award,
  BadgeCheck,
  Database,
  Cloud,
  CloudCog,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  BadgeCheck,
  Database,
  Cloud,
  CloudCog,
};

const colorMap = {
  primary: {
    iconBg: "bg-primary/10 text-primary",
  },
  tertiary: {
    iconBg: "bg-tertiary/10 text-tertiary",
  },
  secondary: {
    iconBg: "bg-secondary/10 text-secondary",
  },
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 border-b border-outline-variant/50"
      aria-labelledby="certifications-heading"
    >
      <AnimatedSection>
        <SectionHeader
          title="Licenses & Certifications"
          id="certifications-heading"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const Icon = iconMap[cert.icon] || Award;
          const colors = colorMap[cert.color];

          return (
            <AnimatedSection key={cert.id} delay={index * 0.1}>
              <div className="group flex items-start gap-4 p-6 rounded-2xl glass dark:bg-zinc-900/60 border border-outline-variant/30 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-1 h-full">
                <div
                  className={cn(
                    "shrink-0 w-12 h-12 flex items-center justify-center rounded-xl",
                    colors.iconBg
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-headline text-lg font-semibold text-on-surface mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-1">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-xs text-on-surface-variant/70 mb-3">
                      {cert.date}
                    </p>
                  )}

                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Verify Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
