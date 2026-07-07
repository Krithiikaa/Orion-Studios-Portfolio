"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Premium circular skill badge: a glassy domed disc holding the tool's original
 * colored logo, wrapped in a slowly rotating gold light-ring with an ambient
 * glow, plus polished hover interactions (lift + intensified glow + icon zoom).
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
      className="group flex flex-col items-center gap-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-28 w-28 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        {/* Ambient glow behind the badge */}
        <span
          aria-hidden
          className="absolute inset-1 rounded-full bg-accent/25 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
        />

        {/* Rotating gold light-ring (shows as a thin ring around the disc) */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(195,154,92,0.12) 55deg, var(--color-accent) 125deg, rgba(236,191,126,0.95) 158deg, var(--color-accent) 190deg, rgba(195,154,92,0.12) 250deg, transparent 320deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        {/* Faint static ring for definition */}
        <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-white/10" />

        {/* Glassy domed inner disc */}
        <span
          className="absolute inset-[2.5px] flex items-center justify-center rounded-full border border-white/5"
          style={{
            background: "radial-gradient(circle at 50% 32%, #1e1e1e 0%, #0b0b0b 78%)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -10px 22px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src={icon}
            alt={`${name} logo`}
            width={56}
            height={56}
            className="h-14 w-14 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </span>
      </div>

      <span className="text-sm font-medium tracking-wide text-text-muted transition-colors duration-300 group-hover:text-accent">
        {name}
      </span>
    </motion.div>
  );
}
