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
      className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-label={`${project.title} details`}
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="glass dark:bg-zinc-950/80 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/30"
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
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      filter === "All" || project.technologies.includes(filter);
    const matchesSearch =
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(search.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  // Close modal on Escape
  if (typeof window !== "undefined") {
    // This is handled via useEffect in the component lifecycle
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b border-outline-variant/50"
      aria-labelledby="projects-heading"
    >
      <AnimatedSection>
        <SectionHeader title="Featured Projects" id="projects-heading" />
      </AnimatedSection>

      {/* Learning Journey Timeline */}
      <AnimatedSection delay={0.1}>
        <div className="mb-16 overflow-x-auto pb-4 hide-scrollbar">
          <div className="min-w-[800px] flex justify-between items-start relative px-8">
            {/* Connecting Line */}
            <div className="absolute left-8 right-8 top-8 h-1 bg-surface-container-high -translate-y-1/2 z-0" />

            {/* Milestones */}
            {[...projects].reverse().map((project) => {
              const colors = colorMap[project.color];

              return (
                <div
                  key={project.id}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Tilt3D tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-16 h-16 shrink-0 z-10 relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
                    <div
                      className={cn(
                        "relative w-full h-full rounded-full shrink-0 flex items-center justify-center glass dark:bg-zinc-900/80 border-4 border-surface-container-high group-hover:border-primary/50 group-hover:scale-110 shadow-[0_0_20px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-500",
                        colors.milestoneHover
                      )}
                    >
                      <span className="font-body text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                        {project.year}
                      </span>
                    </div>
                  </Tilt3D>
                  <span className="font-body text-sm text-center whitespace-nowrap font-semibold text-on-surface-variant transition-colors">
                    {project.title.split(" ").slice(0, 2).join(" ")}
                    {project.title.split(" ").slice(2).join(" ") && (
                      <>
                        <br />
                        {project.title.split(" ").slice(2).join(" ")}
                      </>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Filters & Search */}
      <AnimatedSection delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
          {/* Search - put in front, expands compact (w-48), and no border highlight */}
          <div className="shrink-0">
            <div
              className={cn(
                "relative h-10 rounded-full bg-surface-container-low border border-outline-variant/30 flex items-center shadow-sm cursor-pointer transition-all duration-700 ease-in-out focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                isFocused || search !== "" ? "w-48" : "w-10"
              )}
              onClick={() => setIsFocused(true)}
            >
              <Search className="absolute left-3 w-4 h-4 text-on-surface-variant/70 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (e.target.value !== "") {
                    setFilter("All");
                  }
                }}
                className={cn(
                  "w-full bg-transparent text-on-surface text-sm font-body placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-opacity duration-700",
                  isFocused || search !== "" ? "pl-10 pr-4 opacity-100" : "pl-0 pr-0 opacity-0 pointer-events-none"
                )}
                aria-label="Search projects"
              />
            </div>
          </div>



          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", ...allTechnologies].map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                  filter === tech
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    className="project-card glass dark:bg-zinc-900/60 border border-outline-variant/30 rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 cursor-pointer h-full hover:-translate-y-2"
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
                      {/* Title row */}
                      <div className="flex justify-between items-start mb-6">
                        <h3
                          className={cn(
                            "font-headline text-2xl font-semibold text-on-surface transition-colors",
                            colors.hoverText
                          )}
                        >
                          {project.title}
                        </h3>
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
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
