"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal space-dust background: a completely BLACK canvas with tiny drifting,
 * softly-twinkling gold "granules" plus a fine film-grain texture. Subtle mouse/
 * touch parallax nudges the dust field. Fixed behind everything, non-interactive.
 */

// Fine film grain (inline SVG turbulence — no external asset).
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    type P = { x: number; y: number; r: number; a: number; tw: number; ph: number; vx: number; vy: number };
    let dust: P[] = [];

    const rnd = (a: number, b: number) => a + Math.random() * (b - a);

    const seed = () => {
      const density = Math.min(160, Math.floor((w * h) / 11000)); // scales with area
      dust = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rnd(0.35, 1.4),
        a: rnd(0.06, 0.4),
        tw: rnd(0.0006, 0.0022),
        ph: rnd(0, Math.PI * 2),
        vx: rnd(-0.05, 0.05),
        vy: rnd(-0.06, 0.03),
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.x = mouse.tx = w / 2;
      mouse.y = mouse.ty = h / 2;
      seed();
    };
    resize();

    const move = (e: MouseEvent | TouchEvent) => {
      const p = "touches" in e ? e.touches[0] : (e as MouseEvent);
      if (!p) return;
      mouse.tx = p.clientX;
      mouse.ty = p.clientY;
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });

    const drawFrame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      // Whole-field parallax: shifts a few px opposite the cursor.
      const ox = (mouse.x - w / 2) * -0.015;
      const oy = (mouse.y - h / 2) * -0.015;

      for (const d of dust) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = w; else if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; else if (d.y > h) d.y = 0;
        const tw = 0.55 + 0.45 * Math.sin(t * d.tw + d.ph);
        ctx.beginPath();
        ctx.arc(d.x + ox, d.y + oy, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,176,112,${d.a * tw})`;
        ctx.fill();
      }
    };

    let raf = 0;
    if (reduced) {
      drawFrame(0);
    } else {
      const loop = (t: number) => {
        drawFrame(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      {/* Drifting gold granules */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Fine film grain */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />
    </div>
  );
}
