"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SocialRow from "./SocialRow";
import { site } from "@/lib/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const contactLinks = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: site.whatsapp, Icon: MessageCircle },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      {/* Gold halo */}
      <div className="container-max relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 text-xs font-semibold uppercase tracking-label text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open for projects
          </span>
          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Let&apos;s create something{" "}
            <span className="text-gradient-gold">great</span>
          </h2>
          <p className="mt-5 text-lg text-text-muted">
            Ready to bring your vision to life? Reach out and let&apos;s talk
            about your next video project.
          </p>
        </Reveal>

        <motion.div
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-gutter sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          {contactLinks.map(({ label, value, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-bg-elevated p-6 text-center transition-colors hover:border-accent hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs uppercase tracking-label text-text-muted">
                {label}
              </span>
              <span className="text-sm font-medium text-text-primary break-all">
                {value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <SocialRow size="md" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
