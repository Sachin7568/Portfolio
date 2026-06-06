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
      className="py-24 md:py-40 border-b border-outline-variant/50"
      aria-labelledby="certifications-heading"
    >
      <AnimatedSection>
        <SectionHeader
          title="Licenses & Certifications"
          id="certifications-heading"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => {
          const isCoursera = cert.issuer.toLowerCase().includes("coursera");
          const isSwayam = cert.issuer.toLowerCase().includes("swayam");

          const badgeClasses = isCoursera
            ? "bg-[#0056D2]/20 text-[#4A90E2] border-[#0056D2]/40"
            : isSwayam
            ? "bg-[#E87720]/15 text-[#E87720] border-[#E87720]/35"
            : "bg-[var(--b1)] text-[var(--t1)] border-[var(--b2)]";

          const hoverBorderClass = isCoursera
            ? "hover:border-[#0056D2]/60 hover:shadow-[0_0_30px_rgba(0,86,210,0.25)]"
            : isSwayam
            ? "hover:border-[#E87720]/60 hover:shadow-[0_0_30px_rgba(232,119,32,0.25)]"
            : "hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--accent-2)]";

          const topBorderClass = isCoursera
            ? "border-t-[#0056D2]"
            : isSwayam
            ? "border-t-[#E87720]"
            : "border-t-[var(--accent)]";

          const bgGradientClass = isCoursera
            ? "from-[#0056D2]/10 to-transparent"
            : isSwayam
            ? "from-[#E87720]/10 to-transparent"
            : "from-[var(--accent-2)] to-transparent";
            
          const CertIcon = isCoursera ? BadgeCheck : Award;

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
            <AnimatedSection key={cert.id} delay={index * 0.1}>
              <Tilt3D tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} className="h-full">
                <CardWrapper
                  {...wrapperProps}
                  className={cn(
                    "group relative flex flex-col p-8 rounded-[20px] bg-[var(--bg-1)] backdrop-blur-md border-x border-b border-[var(--b1)] border-t-[4px] transition-all duration-500 ease-out h-full hover:-translate-y-2 cursor-pointer shadow-lg overflow-hidden",
                    topBorderClass,
                    hoverBorderClass
                  )}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100", bgGradientClass)} />

                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-4">
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm", badgeClasses)}>
                        <CertIcon className="w-6 h-6" />
                      </div>
                      <span className={cn("font-code text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border w-fit", badgeClasses)}>
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="font-code text-xs font-medium text-[var(--t3)] bg-[var(--bg-2)] px-3 py-1.5 rounded-lg border border-[var(--b1)] shadow-sm">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="relative z-10 font-headline text-xl font-bold text-[var(--t1)] leading-snug mt-2 mb-10 transition-colors duration-300 group-hover:text-[var(--t1)]">
                    {cert.title}
                  </h4>

                  <div className="mt-auto relative z-10 pt-6 border-t border-[var(--b1)]/50">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold text-[var(--t2)] group-hover:text-[var(--t1)] transition-colors">
                        View Credential
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] border border-[var(--b1)] flex items-center justify-center text-[var(--t1)] transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white group-hover:scale-110 shadow-sm">
                        <ExternalLink className="w-4 h-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </Tilt3D>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
