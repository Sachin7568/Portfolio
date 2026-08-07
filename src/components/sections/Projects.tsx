import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  CheckCircle2,
  Boxes,
  Wallet,
  TrendingUp,
  Layers,
  Users,
  Trophy,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Boxes,
  Wallet,
  TrendingUp,
  Layers,
  Users,
  Trophy,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Featured Projects" id="projects-heading" />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="font-body text-sm text-[var(--color-ink-2)] -mt-6 mb-8 max-w-2xl">
            Ordered by depth — full-stack systems first, then front-ends by the
            weight of the logic behind them.
          </p>
        </AnimatedSection>

        <div className="space-y-5">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] ?? Boxes;

            return (
              <AnimatedSection key={project.id} delay={index * 0.06}>
                <article className="card card-hover p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className="icon-tile w-11 h-11">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-code text-xs text-[var(--color-ink-3)]">
                            {project.date}
                          </span>
                          {project.featured && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-code font-semibold uppercase tracking-wider bg-[var(--color-accent-wash)] text-[var(--color-accent)] border border-[var(--color-border-active)]">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="font-headline font-bold text-xl text-[var(--color-ink)] mt-1">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="font-code text-xs text-[var(--color-ink-3)] mt-1">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label={`${project.title} source on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-sm text-[var(--color-ink-2)] mb-5 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-xs text-[var(--color-ink-2)] leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
