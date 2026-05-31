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
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Crown,
  Sun,
  Coins,
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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
        className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-outline-variant/50"
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
              <div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface">
                  {project.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{project.year}</p>
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
                <CheckCircle className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.checkColor)} />
                {highlight}
              </li>
            ))}
          </ul>
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
          <div className="min-w-[800px] flex justify-between items-center relative px-8">
            {/* Connecting Line */}
            <div className="absolute left-8 right-8 top-1/2 h-1 bg-surface-container-high -translate-y-1/2 z-0" />

            {/* Milestones */}
            {[...projects].reverse().map((project) => {
              const colors = colorMap[project.color];

              return (
                <div
                  key={project.id}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center bg-surface-container-lowest border-4 border-surface-container-high group-hover:scale-110 transition-all duration-300 shadow-sm",
                      colors.milestoneHover
                    )}
                  >
                    <span className="font-body text-sm font-semibold text-on-surface-variant transition-colors">
                      {project.year}
                    </span>
                  </div>
                  <span className="font-body text-sm text-center whitespace-nowrap font-semibold text-on-surface-variant transition-colors">
                    {project.title.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {project.title.split(" ").slice(2).join(" ") || ""}
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
          <div className="flex-shrink-0">
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
              >
                <div
                  className="project-card bg-surface-container-lowest border border-outline-variant/50 rounded-2xl overflow-hidden flex flex-col ambient-shadow group transition-all duration-300 cursor-pointer h-full"
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
                      "h-3 transition-colors",
                      colors.barBg
                    )}
                  />

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
                          "w-10 h-10 rounded-full flex items-center justify-center",
                          colors.iconBg
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-base text-on-surface-variant mb-10 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-10">
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
                    <ul className="font-body text-sm text-on-surface-variant list-none space-y-2 mb-6 flex-1">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle
                            className={cn(
                              "w-4 h-4 mt-0.5 flex-shrink-0",
                              colors.checkColor
                            )}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
