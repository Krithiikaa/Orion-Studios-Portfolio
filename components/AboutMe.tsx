"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import SkillBadge from "./SkillBadge";
import Reveal from "./Reveal";
import { aboutStats, skills } from "@/lib/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function AboutMe() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="container-max">
        {/* About card — profile photo + bio, gradient panel with a glowing edge */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-elevated via-bg to-bg-container p-6 sm:p-10">
            {/* Top edge highlight + accent halo */}
            <div
              aria-hidden
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
              <div className="relative w-44 shrink-0 sm:w-52">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/profile.jpg"
                    alt="Karthikeyan S — portrait"
                    fill
                    sizes="(max-width: 768px) 208px, 208px"
                    className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  About me <span className="text-accent">✦</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
                  I&apos;m Karthikeyan S, a video editor and motion graphics
                  designer with over three years of professional experience. I
                  specialize in creating cinematic videos and digital content,
                  focusing on creativity, precision, and strong storytelling.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stat row */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-gutter lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          {aboutStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-bg-elevated p-6 text-center transition-colors hover:border-accent/50"
            >
              <div className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-text-primary">
                {stat.label}
              </div>
              <div className="text-xs text-text-muted">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Powering my creativity — circular tool badges */}
        <div className="mt-20 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-label text-accent">
              Powering my creativity
            </span>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-16">
            {skills.map((skill, i) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
