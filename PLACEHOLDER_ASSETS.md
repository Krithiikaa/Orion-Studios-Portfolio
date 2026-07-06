# Placeholder Assets & Content — Replacement Checklist

This build clones the layout/feature set of the reference portfolio, rebranded for
**Karthikeyan S** and skinned with **GOAT Media** brand tokens (from
`GOAT MEDIA Brandguideline.md` — design system "Elite Authority"). Every asset and
content string that stands in for real material is listed below. Swap each item
before going live.

> Nothing in this repo represents real client work. All project titles are marked
> `[REPLACE]` and all videos are ffmpeg-generated test patterns.

---

## 1. Media files (`public/`)

| File | What it is now | Replace with |
| --- | --- | --- |
| `public/logo.jpg` | Generated "KS" gold-on-dark monogram | Real KS logo / GOAT Media lockup |
| `public/profile.jpg` | Generated gradient placeholder portrait | Real headshot of Karthikeyan S (grayscale, per brand imagery spec) |
| `public/opengraph-image.jpg` | Generated OG card (name + role) | Branded 1200×630 social share image |
| `public/favicon.ico` | Generated "K" gold-on-dark icon | Real brand favicon |
| `public/videos/project-01.mp4 … project-12.mp4` | ffmpeg test-pattern clips (6s, 1280×720) | Real project videos |
| `public/videos/project-01.jpg … project-12.jpg` | First-frame poster thumbnails of the above | Real video poster frames |

Regenerate placeholder videos anytime with:
```bash
ffmpeg -f lavfi -i testsrc=size=1280x720:rate=30 -t 6 -c:v libx264 -pix_fmt yuv420p public/videos/project-01.mp4
```

### Tool icons (real brand assets — no replacement needed)
`public/icons/*.svg` are official brand marks from [simple-icons](https://simpleicons.org):
Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Blender.

---

## 2. Content strings (`lib/site.ts`)

| Field | Current value | Action |
| --- | --- | --- |
| `site.email` | `skarthikeyan2926@gmail.com` | ✅ real |
| `site.whatsapp` | `wa.me/916381378969` (auto-redirect to +91 63813 78969, prefilled message) | ✅ real |
| `site.socials.linkedin` | `.../in/karthikeyan-s-2401b11b7` | ✅ real |
| `site.socials.instagram` | `.../_karthi.k.n` | ✅ real |
| `site.socials.vimeo` | `https://vimeo.com/` | **[REPLACE WITH REAL PROFILE URL]** |
| `site.socials.behance` | `https://www.behance.net/` | **[REPLACE WITH REAL PROFILE URL]** |
| `site.socials.wix` | `https://www.wix.com/` | **[REPLACE WITH REAL PROFILE URL]** |
| `projects[].title` | `Client Project 01 [REPLACE]`, `Brand Reel 02 [REPLACE]`, … | Real project titles |
| `projects[].category` | Reels / Brand / Podcast / Motion Graphics | Real categories (drives the `/projects` filter pills) |

Stats, pricing tiers, skills, and bio copy are set per the brief but can also be
tuned here — this file is the single content source of truth.

---

## 3. Brand tokens (single-file swap)

Brand colors/fonts live in **two mirrored places** and nowhere else:
- `tailwind.config.ts` (utility classes)
- `app/globals.css` (`:root` CSS variables)

Current values come from the real GOAT Media guideline. To rebrand, edit those two
files only — no component hardcodes brand colors.

---

## 4. SEO / deploy

- `app/layout.tsx` → `metadataBase` is `https://karthikeyans.example.com`. Set the
  real production domain.
- Deployable to Vercel as-is (`npm run build`).
