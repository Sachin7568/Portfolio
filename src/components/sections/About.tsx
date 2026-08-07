"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import { Globe, Database, Container, Terminal } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="About Me" id="about-heading" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Main Bio - Left 7 columns */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 space-y-4 font-body text-base text-[var(--color-ink-2)] leading-relaxed">
            <h3 className="font-headline text-xl font-bold text-[var(--color-ink)] mb-2">
              Driven Full-Stack Engineer & Problem Solver
            </h3>

            {personal.about.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}

            <div className="pt-5 border-t border-[var(--color-border)] flex flex-wrap gap-2">
              <span className="pill"><Globe className="w-3.5 h-3.5 text-[var(--color-accent)]" /> MERN &amp; FastAPI</span>
              <span className="pill"><Container className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Docker &amp; Linux</span>
              <span className="pill"><Database className="w-3.5 h-3.5 text-[var(--color-accent)]" /> PostgreSQL &amp; MongoDB</span>
            </div>
          </AnimatedSection>

          {/* Core Areas - Right 5 columns */}
          <AnimatedSection delay={0.2} className="lg:col-span-5">
            <div className="card p-6 space-y-4">
              <h4 className="font-headline text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                Core Specialization
              </h4>

              <div className="space-y-3 font-body">
                {[
                  { icon: Globe, title: "Frontend Engineering", desc: "React, TypeScript, Tailwind CSS, Next.js" },
                  { icon: Database, title: "Backend Development", desc: "FastAPI, Node.js, Express.js, REST APIs" },
                  { icon: Container, title: "Database & DevOps", desc: "PostgreSQL, MongoDB, Docker, Git" },
                  { icon: Terminal, title: "CS Fundamentals", desc: "DSA, Object-Oriented Programming, OS, DBMS" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[var(--color-bg-2)] transition-colors">
                    <item.icon className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-[var(--color-ink)]">{item.title}</h5>
                      <p className="text-xs text-[var(--color-ink-2)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
