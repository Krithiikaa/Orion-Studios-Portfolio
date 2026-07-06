"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { projects, projectCategories } from "@/lib/site";
import { staggerContainer } from "@/lib/motion";

export default function ProjectsGallery() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      {/* Category filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat
                ? "border-accent bg-accent text-on-accent"
                : "border-border bg-bg-elevated text-text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingSkeleton count={6} />
      ) : (
        <motion.div
          layout
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div key={project.id} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
