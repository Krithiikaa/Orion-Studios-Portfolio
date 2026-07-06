import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — sourced from "GOAT MEDIA Brandguideline.md" ("Elite Authority").
// This is the SINGLE SOURCE OF TRUTH for brand color/type/spacing. To rebrand,
// edit these values (and the matching CSS variables in app/globals.css) — nothing
// else in the codebase hardcodes brand colors.
//
// Palette summary (Prestige Dark):
//   - primary / accent gold:  #C39A5C  (bright tint #ecbf7e, hover #A0804D)
//   - base canvas:            #16130e  (near-black, cinematic)
//   - card / panel surface:   #121212
//   - border / definition:    #2A2A2A
//   - text primary:           #FFFFFF / #eae1d9   muted: #d2c4b5 / #9b8f81
//   - font: Poppins (headings + body)
// ─────────────────────────────────────────────────────────────────────────────

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-elevated": "var(--color-bg-elevated)",
        "bg-container": "var(--color-bg-container)",
        accent: "var(--color-accent)",
        "accent-bright": "var(--color-accent-bright)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-soft": "var(--color-accent-soft)",
        "on-accent": "var(--color-on-accent)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        label: "0.1em",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        "section": "120px",
        "section-mobile": "64px",
        "gutter": "24px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px var(--color-accent-soft)",
        "glow-strong": "0 0 60px -6px rgba(195,154,92,0.35)",
        card: "0 20px 50px -20px rgba(0,0,0,0.8)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
