"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import LoadingSkeleton from "./LoadingSkeleton";
import type { Project } from "@/lib/site";

/**
 * Featured Projects — 3D "coverflow" carousel (matches the reference site).
 * The center card is upright and can play its video; neighbouring cards are
 * pushed back, scaled down and rotated in 3D; further cards fade out. Auto-
 * advances every 8s (paused while a video is playing), with prev/next arrows
 * and a pagination dot row. Cards are vertical 9:16 reels, 290px wide.
 */
export default function FeaturedDeck({ projects }: { projects: Project[] }) {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const n = projects.length;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setPlayingId(null);
      setActive(((i % n) + n) % n);
    },
    [n]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance every 8s, paused while a video is playing.
  useEffect(() => {
    if (loading || playingId !== null) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 8000);
    return () => clearInterval(id);
  }, [loading, playingId, n]);

  if (loading) return <LoadingSkeleton count={6} />;

  // Circular offset of a card relative to the active one (-n/2 … n/2).
  const relOffset = (i: number) => {
    let o = i - active;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    return o;
  };

  const transformFor = (o: number) => {
    if (o === 0) return { x: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 10 };
    if (o === -1)
      return { x: -240, scale: 0.8, rotateY: 20, opacity: 0.85, zIndex: 5 };
    if (o === 1)
      return { x: 240, scale: 0.8, rotateY: -20, opacity: 0.85, zIndex: 5 };
    return {
      x: o < 0 ? -450 : 450,
      scale: 0.65,
      rotateY: o < 0 ? 35 : -35,
      opacity: 0,
      zIndex: 1,
    };
  };

  return (
    <div>
      {/* Desktop / tablet coverflow ------------------------------------- */}
      <div
        className="relative hidden h-[520px] items-center justify-center md:flex"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, i) => {
          const o = relOffset(i);
          const t = transformFor(o);
          const isCenter = o === 0;
          return (
            <motion.div
              key={project.id}
              className="absolute"
              style={{
                width: 290,
                transformStyle: "preserve-3d",
                borderRadius: isCenter ? 24 : 16,
                boxShadow: isCenter
                  ? "0 30px 60px -15px rgba(0,0,0,0.8)"
                  : "0 10px 30px -10px rgba(0,0,0,0.5)",
                border: isCenter
                  ? "1px solid var(--color-accent-soft)"
                  : "1px solid rgba(255,255,255,0.05)",
                pointerEvents: t.opacity === 0 ? "none" : "auto",
              }}
              animate={t}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              onClick={() => !isCenter && t.opacity !== 0 && goTo(i)}
            >
              <ReelCard
                project={project}
                isCenter={isCenter}
                playing={playingId === project.id}
                onPlay={() => setPlayingId(project.id)}
                onPause={() => setPlayingId(null)}
              />
            </motion.div>
          );
        })}

        {/* Prev / next arrows */}
        <button
          aria-label="Previous project"
          onClick={prev}
          className="absolute top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/15 active:scale-90"
          style={{ left: "calc(50% - 220px)" }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next project"
          onClick={next}
          className="absolute top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/15 active:scale-90"
          style={{ right: "calc(50% - 220px)" }}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile: single card + swipe ------------------------------------ */}
      <MobileCarousel
        projects={projects}
        active={active}
        goTo={goTo}
        playingId={playingId}
        setPlayingId={setPlayingId}
      />

      {/* Pagination dots ------------------------------------------------ */}
      <div className="mt-8 flex justify-center gap-2.5">
        {projects.map((project, i) => (
          <button
            key={project.id}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-2 rounded-full"
            style={{
              width: active === i ? 32 : 8,
              background: active === i ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** Vertical 9:16 reel card. Center card plays its video; others show poster. */
function ReelCard({
  project,
  isCenter,
  playing,
  onPlay,
  onPause,
}: {
  project: Project;
  isCenter: boolean;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [playing]);

  // Stop playback if this card scrolls out of center.
  useEffect(() => {
    if (!isCenter && playing) onPause();
  }, [isCenter, playing, onPause]);

  const toggle = () => {
    if (!isCenter) return;
    playing ? onPause() : onPlay();
  };

  return (
    <div
      className="relative aspect-[9/16] w-full select-none overflow-hidden rounded-[inherit] bg-black"
      style={{ cursor: isCenter ? "pointer" : "default" }}
      onClick={toggle}
    >
      <Image
        src={project.poster}
        alt={project.title}
        fill
        sizes="290px"
        className={`object-cover transition-opacity duration-500 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
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

      {/* Category chip */}
      <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-label text-accent backdrop-blur-sm">
        {project.category}
      </span>

      {/* Bottom gradient + title (center only) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
        {isCenter && (
          <p className="text-sm font-semibold text-white">{project.title}</p>
        )}
      </div>

      {/* Play / pause overlay (center only) */}
      {isCenter && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-on-accent shadow-glow-strong">
            {playing ? (
              <Pause className="h-6 w-6 fill-current" />
            ) : (
              <Play className="h-6 w-6 translate-x-0.5 fill-current" />
            )}
          </span>
        </div>
      )}
    </div>
  );
}

/** Mobile single-card carousel with horizontal swipe. */
function MobileCarousel({
  projects,
  active,
  goTo,
  playingId,
  setPlayingId,
}: {
  projects: Project[];
  active: number;
  goTo: (i: number) => void;
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}) {
  const startX = useRef(0);
  const project = projects[active];

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 50) goTo(active - 1);
    else if (dx < -50) goTo(active + 1);
  };

  return (
    <div className="md:hidden">
      <div
        className="mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-accent/25"
        >
          <ReelCard
            project={project}
            isCenter
            playing={playingId === project.id}
            onPlay={() => setPlayingId(project.id)}
            onPause={() => setPlayingId(null)}
          />
        </motion.div>
      </div>
    </div>
  );
}
