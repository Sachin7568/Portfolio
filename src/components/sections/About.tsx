"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { Code2, Database, Terminal, Layers } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-outline-variant/50 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* 3D Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <SectionHeader title="About Me" id="about-heading" align="center" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <AnimatedSection delay={0.2} className="h-full">
            <Tilt3D tiltMaxAngleX={5} tiltMaxAngleY={5} depth={30} className="h-full">
              <div className="h-full font-body text-lg text-on-surface-variant space-y-6 glass dark:bg-zinc-900/40 p-10 md:p-14 rounded-[2.5rem] border border-outline-variant/30 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-6 group-hover:text-primary transition-colors duration-500 relative z-10">
                  Who am I?
                </h3>
                
                {personal.about.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed relative z-10">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Tilt3D>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="h-full">
            <div className="grid grid-cols-2 gap-6 h-full">
              {[
                { icon: Code2, title: "Frontend", desc: "React, Next.js, JS", color: "text-primary", bg: "bg-primary/10", border: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" },
                { icon: Database, title: "Backend", desc: "Python, MySQL", color: "text-tertiary", bg: "bg-tertiary/10", border: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]" },
                { icon: Terminal, title: "Core", desc: "C++, DSA, OOP", color: "text-secondary", bg: "bg-secondary/10", border: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]" },
                { icon: Layers, title: "Tools", desc: "Git, Docker, Figma", color: "text-primary", bg: "bg-primary/10", border: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" },
              ].map((item, i) => (
                <Tilt3D key={i} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} depth={20} className="h-full">
                  <div className={`h-full glass dark:bg-zinc-900/40 p-6 md:p-8 rounded-4xl border border-outline-variant/30 flex flex-col items-center justify-center text-center group transition-all duration-500 ${item.border}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${item.bg} ${item.color}`}>
                      <item.icon className="w-8 h-8 drop-shadow-sm" />
                    </div>
                    <h4 className="font-headline font-bold text-on-surface mb-2 relative z-10">{item.title}</h4>
                    <p className="text-sm font-medium text-on-surface-variant/70 relative z-10">{item.desc}</p>
                  </div>
                </Tilt3D>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
