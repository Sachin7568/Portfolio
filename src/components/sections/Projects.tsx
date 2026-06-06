"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, allTechnologies, type Project } from "@/data/projects";
import {
  ExternalLink,
  Search,
  X,
  CheckCircle,
  Gamepad2,
  Crown,
  Sun,
  Coins,
  Box,
  Users,
  StickyNote,
  Briefcase
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { Tilt3D } from "@/components/ui/Tilt3D";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Crown,
  Sun,
  Coins,
  Box,
  Users,
  StickyNote,
  Briefcase,
};

const colorMap = {
  primary: {
    barBg: "bg-primary group-hover:bg-[#003ea8]",
    hoverText: "group-hover:text-primary",
    iconBg: "bg-primary/10 text-primary",
    checkColor: "text-primary",
    milestoneHover: "group-hover:border-primary group-hover:text-primary",
  },
  tertiary: {
    barBg: "bg-tertiary group-hover:bg-[#004e5c]",
    hoverText: "group-hover:text-tertiary",
    iconBg: "bg-tertiary/10 text-tertiary",
    checkColor: "text-tertiary",
    milestoneHover: "group-hover:border-tertiary group-hover:text-tertiary",
  },
  secondary: {
    barBg: "bg-secondary group-hover:bg-[#3c475a]",
    hoverText: "group-hover:text-secondary",
    iconBg: "bg-secondary/10 text-secondary",
    checkColor: "text-secondary",
    milestoneHover: "group-hover:border-secondary group-hover:text-secondary",
  },
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = iconMap[project.icon] || Gamepad2;
  const colors = colorMap[project.color];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 md:bg-black/60 md:backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-label={`${project.title} details`}
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="glass dark:bg-zinc-950/95 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/30"
      >
        {/* Header bar */}
        <div className={cn("h-2 rounded-t-2xl", colors.barBg.split(" ")[0])} />

        <div className="p-8">
          {/* Title row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-start gap-4">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", colors.iconBg)}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-on-surface">
                    {project.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{project.year}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <p className="text-on-surface-variant leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-surface-container text-on-surface font-body text-xs font-semibold rounded-lg border border-outline-variant/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-4">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                <CheckCircle className={cn("w-4 h-4 mt-0.5 shrink-0", colors.checkColor)} />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-4 mt-8 pt-6 border-t border-outline-variant/30">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass dark:bg-zinc-800/50 hover:bg-surface-container-highest text-on-surface font-semibold text-sm rounded-xl transition-all duration-300 border border-outline-variant/30 hover:shadow-md hover:-translate-y-0.5">
                  <Github className="w-4 h-4" /> View Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 px-6 py-3 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:-translate-y-0.5", colors.barBg.split(" ")[0])}>
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [yearFilter, setYearFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allYears = Array.from(new Set(projects.map(p => String(p.year)))).sort((a,b) => b.localeCompare(a));

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.technologies.includes(filter);
    const matchesYear = yearFilter === "All" || String(project.year) === yearFilter;
    const matchesSearch =
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesYear && matchesSearch;
  });

  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  // Close modal on Escape is handled elsewhere

  return (
    <section
      id="projects"
      className="py-24 md:py-40 border-b border-outline-variant/50"
      aria-labelledby="projects-heading"
    >
      <AnimatedSection>
        <SectionHeader title="Featured Projects" id="projects-heading" />
      </AnimatedSection>

      {/* Filters & Search */}
      <AnimatedSection delay={0.2}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          {/* Search */}
          <div className="flex justify-start w-full md:w-auto">
            <div className="relative h-10 w-full md:w-64 rounded-full bg-[var(--bg-1)] border border-[var(--b1)] flex items-center shadow-sm backdrop-blur-md">
              <Search className="absolute left-3 w-4 h-4 text-[var(--t2)] pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full bg-transparent text-[var(--t1)] text-sm font-body placeholder:text-[var(--t3)] focus:outline-none pl-10 pr-4"
                aria-label="Search projects"
              />
            </div>
          </div>

          {/* Filter Pills - Container */}
          <div className="flex flex-col items-start md:items-end gap-3 flex-1">
            {/* Tech Filter */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {["All", ...allTechnologies].map((tech) => {
                const isActive = filter === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setFilter(tech)}
                    className={cn(
                      "relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 border border-transparent",
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--t2)] hover:text-[var(--accent)] hover:border-[var(--b2)]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="filter-pill-tech"
                        className="absolute inset-0 bg-[var(--accent-2)] border border-[var(--accent-3)] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tech}
                  </button>
                );
              })}
            </div>
            
            {/* Year Filter */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {["All", ...allYears].map((year) => {
                const isActive = yearFilter === year;
                return (
                  <button
                    key={year}
                    onClick={() => setYearFilter(year)}
                    className={cn(
                      "relative px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 border border-transparent",
                      isActive
                        ? "text-[var(--t1)]"
                        : "text-[var(--t3)] hover:text-[var(--t1)] hover:border-[var(--b2)]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="filter-pill-year"
                        className="absolute inset-0 bg-[var(--b2)] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {year}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const Icon = iconMap[project.icon] || Gamepad2;
            const colors = colorMap[project.color];

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
              >
                <Tilt3D tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} className="h-full">
                  <div
                    className="project-card bg-[var(--bg-1)] backdrop-blur-md border border-[var(--b1)] rounded-[20px] overflow-hidden flex flex-col group transition-all duration-500 cursor-pointer h-full hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--accent-2)]"
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    aria-label={`View details for ${project.title}`}
                  >
                    {/* Color bar */}
                    <div
                      className={cn(
                        "h-2 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:h-3",
                        colors.barBg
                      )}
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="p-10 flex-1 flex flex-col">
                      {/* Badges row */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2 items-center">
                          {project.year === 2026 && (
                            <span className="px-2 py-1 bg-[var(--accent-2)] text-[var(--accent)] text-[10px] font-bold uppercase tracking-wider rounded-md border border-[var(--accent-3)] shadow-[0_0_10px_var(--accent-3)]">
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <span className="font-code text-xs text-on-surface-variant font-medium bg-surface-container-low px-2 py-1 rounded-md border border-outline-variant/30">
                          {project.year}
                        </span>
                      </div>

                      {/* Title row */}
                      <div className="flex justify-between items-start mb-4">
                        <h3
                          className={cn(
                            "font-headline text-2xl font-bold text-on-surface transition-colors",
                            colors.hoverText
                          )}
                        >
                          {project.title}
                        </h3>
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shrink-0 ml-4",
                            colors.iconBg
                          )}
                        >
                          <Icon className="w-5 h-5 drop-shadow-sm" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-body text-base text-on-surface-variant mb-10 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-surface-container-low/50 dark:bg-zinc-800/40 text-on-surface font-body text-xs font-semibold rounded-lg border border-outline-variant/30 backdrop-blur-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="font-body text-sm text-on-surface-variant list-none space-y-2 mb-6 flex-1">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              className={cn(
                                "w-4 h-4 mt-0.5 shrink-0",
                                colors.checkColor
                              )}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Links */}
                      {(project.github || project.demo) && (
                        <div className="flex gap-4 mt-auto pt-6 border-t border-outline-variant/30 relative z-10" onClick={(e) => e.stopPropagation()}>
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all duration-300 rounded-xl bg-surface-container-low/30 hover:bg-surface-container border border-outline-variant/30 hover:shadow-md hover:-translate-y-0.5">
                              <Github className="w-4 h-4" /> Code
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:-translate-y-0.5", colors.barBg.split(" ")[0])}>
                              <ExternalLink className="w-4 h-4" /> Live
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-on-surface-variant">
          <p className="text-lg">No projects match your search criteria.</p>
          <button
            onClick={() => {
              setFilter("All");
              setSearch("");
            }}
            className="mt-4 text-primary hover:underline font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
