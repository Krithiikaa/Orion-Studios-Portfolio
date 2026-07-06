"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import { pricingTiers, paymentMethods } from "@/lib/site";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad border-t border-border">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-label text-accent">
            Built for social media
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Short-form Video Editing
          </h2>
          <p className="mt-4 text-text-muted">
            Transparent packages for every stage of your content journey.
          </p>
        </Reveal>

        <motion.div
          className="mt-14 grid grid-cols-1 items-stretch gap-gutter md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </motion.div>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <p className="text-sm text-text-muted">
            <span className="text-accent">✦</span> Final pricing depends on
            complexity and requirements
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-label text-text-muted">
              Payment methods
            </span>
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-border bg-bg-elevated px-4 py-1.5 text-sm text-text-secondary"
              >
                {method}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
