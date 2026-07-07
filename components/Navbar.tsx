"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5"
    >
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between rounded-[22px] px-4 py-3 transition-all duration-300 sm:px-6"
        style={{
          background: scrolled ? "rgba(20,20,24,0.62)" : "rgba(20,20,24,0.42)",
          backdropFilter: "blur(24px) saturate(185%)",
          WebkitBackdropFilter: "blur(24px) saturate(185%)",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.30), inset 0 -1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Liquid-glass specular sheen (top light) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 20%, transparent 55%)",
          }}
        />

        {/* Logo + wordmark */}
        <Link href="/#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/profile.jpg"
            alt="Karthikeyan S"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-white/10 object-cover object-top"
            priority
          />
          <span className="font-heading text-base font-semibold tracking-tight text-text-primary">
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-label text-on-accent transition-colors hover:bg-accent-hover"
          >
            Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-text-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile menu — floating glass panel under the bar */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 top-full mt-2 rounded-2xl p-2 md:hidden"
              style={{
                background: "rgba(14,14,17,0.72)",
                backdropFilter: "blur(24px) saturate(185%)",
                WebkitBackdropFilter: "blur(24px) saturate(185%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-text-secondary transition-colors hover:bg-white/10 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold uppercase tracking-label text-on-accent"
                >
                  Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
