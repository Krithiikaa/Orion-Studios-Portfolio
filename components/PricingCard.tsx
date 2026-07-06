"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import type { PricingTier } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative flex flex-col rounded-lg border p-8 ${
        tier.popular
          ? "scale-[1.03] border-accent bg-bg-elevated shadow-glow-strong"
          : "border-border bg-bg-elevated"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-label text-on-accent">
          <Star className="h-3 w-3 fill-current" />
          Most Popular
        </span>
      )}

      <h3 className="font-serif text-xl font-medium text-text-primary">
        {tier.name}
      </h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-bold text-accent">
          {tier.price}
        </span>
        <span className="text-sm text-text-muted">/video</span>
      </div>
      <p className="mt-3 text-sm text-text-muted">{tier.positioning}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-border pt-5">
        <div className="text-xs uppercase tracking-label text-text-muted">
          Delivery
        </div>
        <div className="mt-1 text-sm font-medium text-text-primary">
          {tier.delivery}
        </div>
      </div>

      <a
        href="#contact"
        className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-label transition-colors ${
          tier.popular
            ? "bg-accent text-on-accent hover:bg-accent-hover"
            : "border border-accent text-accent hover:bg-accent-soft"
        }`}
      >
        Get started
      </a>
    </motion.div>
  );
}
