"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import HeroGraphic from "./HeroGraphic";
import { heroStats } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-12 sm:pt-28"
    >
      {/* Gold halo backlight (per brand elevation spec) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent,var(--color-bg)_75%)]"
      />

      <motion.div
        className="container-max flex flex-col items-center text-center"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.14, 0.1)}
      >
        {/* Availability pill */}
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 text-xs font-semibold uppercase tracking-label text-text-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for freelance
        </motion.span>

        <motion.div variants={fadeUp} className="mt-2 w-full sm:mt-3">
          <HeroGraphic />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Turning raw footage into compelling cinematic experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-label text-on-accent shadow-glow transition-colors hover:bg-accent-hover"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
          <Link href="#contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-label text-accent transition-colors hover:bg-accent-soft"
            >
              <Sparkles className="h-4 w-4" />
              Let&apos;s work together
            </motion.span>
          </Link>
        </motion.div>

        {/* Stat row with count-up */}
        <motion.dl
          variants={fadeUp}
          className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dd className="font-heading text-3xl font-bold text-accent sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-xs uppercase tracking-label text-text-muted sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
