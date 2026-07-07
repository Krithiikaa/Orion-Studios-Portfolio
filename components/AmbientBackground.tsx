"use client";

import { useEffect, useRef } from "react";

/**
 * Pure-black space-dust background: a field of glowing gold "granules" that
 * drift, twinkle and react to pointer/touch (subtle parallax), plus a fine
 * film-grain texture. Additive blending gives the dust a soft glow. Fixed
 * behind all content, non-interactive.
 */

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
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);

    type P = { x: number; y: number; r: number; a: number; tw: number; ph: number; vx: number; vy: number; big: boolean };
    let dust: P[] = [];

    const seed = () => {
      const n = Math.min(240, Math.max(70, Math.floor((w * h) / 7000)));
      dust = Array.from({ length: n }, () => {
        const big = Math.random() < 0.12;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: big ? rnd(1.4, 2.6) : rnd(0.5, 1.5),
          a: big ? rnd(0.4, 0.8) : rnd(0.12, 0.5),
          tw: rnd(0.001, 0.004),
          ph: rnd(0, Math.PI * 2),
          vx: rnd(-0.09, 0.09),
          vy: rnd(-0.11, 0.05),
          big,
        };
      });
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
      ctx.globalCompositeOperation = "lighter"; // additive → soft glow
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      const ox = (mouse.x - w / 2) * -0.02;
      const oy = (mouse.y - h / 2) * -0.02;

      for (const d of dust) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -4) d.x = w + 4; else if (d.x > w + 4) d.x = -4;
        if (d.y < -4) d.y = h + 4; else if (d.y > h + 4) d.y = -4;
        const tw = 0.45 + 0.55 * Math.sin(t * d.tw + d.ph);
        const alpha = d.a * tw;
        const x = d.x + ox * (d.big ? 1.8 : 1);
        const y = d.y + oy * (d.big ? 1.8 : 1);
        if (d.big) {
          const g = ctx.createRadialGradient(x, y, 0, x, y, d.r * 4);
          g.addColorStop(0, `rgba(236,191,126,${alpha})`);
          g.addColorStop(1, "rgba(236,191,126,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, d.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(x, y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,182,120,${alpha})`;
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
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
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />
    </div>
  );
}
