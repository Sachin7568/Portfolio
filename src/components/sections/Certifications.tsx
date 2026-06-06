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
import { Tilt3D } from "@/components/ui/Tilt3D";

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
              {(() => {
                const isClickable = cert.credentialUrl && cert.credentialUrl !== "#";
                const CardWrapper = isClickable ? "a" : "div";
                const wrapperProps = isClickable
                  ? {
                      href: cert.credentialUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <Tilt3D tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} className="h-full">
                    // @ts-expect-error dynamic wrapper type mismatch is fine here
                    <CardWrapper
                      {...wrapperProps}
                      className="group block p-6 rounded-3xl glass dark:bg-zinc-900/40 border border-outline-variant/30 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 h-full relative overflow-hidden"
                    >
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex items-start gap-5 relative z-10">
                        <div
                          className={cn(
                            "shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
                            colors.iconBg
                          )}
                        >
                          <Icon className="w-7 h-7 drop-shadow-sm" />
                        </div>

                        <div className="flex-1 min-w-0 pt-1">
                          <h4 className="font-headline text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="font-body text-sm font-medium text-on-surface-variant mb-1">
                            {cert.issuer}
                          </p>
                          {cert.date && (
                            <p className="text-xs text-on-surface-variant/50 font-medium tracking-wide uppercase">
                              {cert.date}
                            </p>
                          )}
                        </div>

                        {isClickable && (
                          <div className="shrink-0 text-outline-variant group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    </CardWrapper>
                  </Tilt3D>
                );
              })()}
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
