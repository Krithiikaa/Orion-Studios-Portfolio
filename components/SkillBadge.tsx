"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Circular skill badge (matches the reference "Powering my creativity" row):
 * a dark disc holding the tool's original colored logo, wrapped in a slowly
 * rotating gold glow ring, with the tool name beneath.
 */
export default function SkillBadge({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon: string;
  index?: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative h-24 w-24">
        {/* Rotating gold light-arc ring */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--color-accent) 90deg, transparent 200deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        {/* Faint full ring for definition */}
        <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-accent/25" />
        {/* Inner disc + colored logo */}
        <span className="absolute inset-[3px] flex items-center justify-center rounded-full border border-border bg-bg shadow-[0_0_28px_-6px_var(--color-accent-soft)] transition-transform duration-300 group-hover:scale-105">
          <Image src={icon} alt={`${name} logo`} width={40} height={40} className="h-10 w-10" />
        </span>
      </div>
      <span className="text-sm font-medium text-text-secondary">{name}</span>
    </motion.div>
  );
}
