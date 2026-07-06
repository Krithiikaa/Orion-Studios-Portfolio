"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { staggerContainer } from "@/lib/motion";
import type { Project } from "@/lib/site";

/**
 * Renders the project grid, first showing the shimmer loading skeleton
 * (matching the reference site's "Loading videos…" state) before the cards
 * mount and stagger in.
 */
export default function VideoGrid({
  projects,
  skeletonDelay = 900,
}: {
  projects: Project[];
  skeletonDelay?: number;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), skeletonDelay);
    return () => clearTimeout(t);
  }, [skeletonDelay]);

  if (loading) {
    return <LoadingSkeleton count={Math.min(projects.length, 6)} />;
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.1)}
      className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
