"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Project } from "@/lib/site";

/**
 * Video preview card.
 * - Shows a static poster thumbnail by default.
 * - Desktop: on hover the <video> autoplays muted + looped inline; the play
 *   overlay fades out.
 * - Touch: tap toggles play/pause (hover is unavailable).
 */
export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const stop = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) stop();
    else play();
  }, [playing, play, stop]);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-md border border-border bg-bg-elevated shadow-card hover:border-accent/50 hover:shadow-glow"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <div
        className="relative aspect-video w-full cursor-pointer overflow-hidden"
        onClick={toggle}
      >
        {/* Poster thumbnail (static) */}
        <Image
          src={project.poster}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Inline preview video */}
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Play overlay — fades out while playing (gold, per brand imagery spec) */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-on-accent shadow-glow-strong">
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="truncate text-sm font-semibold text-text-primary">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full border border-border bg-bg-container px-3 py-1 text-[11px] uppercase tracking-label text-accent">
          {project.category}
        </span>
      </div>
    </motion.article>
  );
}
