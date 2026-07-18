"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type Project } from "@/data/projects";
import {
  ExternalLink,
  CheckCircle2,
  Boxes,
  Users,
  Wallet,
  FileText,
  X,
  ArrowUpRight
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Boxes,
  Users,
  Wallet,
  FileText,
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = iconMap[project.icon] || Boxes;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-label={`${project.title} details`}
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[var(--color-bg-1)] border border-[var(--color-border)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <span className="font-code text-xs font-medium text-[var(--color-ink-3)]">
              {project.date}
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-code text-xs text-[var(--color-ink-2)] mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        <p className="font-body text-sm text-[var(--color-ink-2)] mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="mb-6">
          <h4 className="font-headline text-xs uppercase tracking-wider text-[var(--color-ink-3)] mb-2.5">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[var(--color-bg-2)] border border-[var(--color-border)] font-code text-xs text-[var(--color-ink)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="font-headline text-xs uppercase tracking-wider text-[var(--color-ink-3)] mb-2.5">
            Key Features & Highlights
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] text-xs text-[var(--color-ink-2)] leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--color-border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg-0)] font-body text-xs font-semibold hover:bg-[var(--color-accent-dim)] transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] text-[var(--color-ink)] font-body text-xs font-semibold hover:border-[var(--color-border-active)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-12 md:py-20 border-b border-[var(--color-border)] relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader title="Featured Projects" id="projects-heading" align="left" />
        </AnimatedSection>

        {/* Stacked Full-Width Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || Boxes;

            return (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[var(--color-bg-1)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8 hover:border-[var(--color-border-active)] transition-all cursor-pointer relative"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-code text-xs text-[var(--color-ink-3)]">
                            {project.date}
                          </span>
                          {project.featured && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-code font-semibold uppercase bg-[var(--color-accent-wash)] text-[var(--color-accent)] border border-[var(--color-border-active)]">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="font-headline font-bold text-xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors mt-0.5 flex items-center gap-1.5">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] transition-colors"
                        aria-label="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[var(--color-bg-2)] border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-active)] transition-colors"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-sm text-[var(--color-ink-2)] mb-5 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--color-ink-2)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[var(--color-bg-2)] border border-[var(--color-border)] font-code text-xs text-[var(--color-ink-2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
