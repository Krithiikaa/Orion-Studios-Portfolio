<!-- ══════════════════════════ HEADER ══════════════════════════ -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16130e,100:C39A5C&height=200&section=header&text=Karthikeyan%20S&fontSize=54&fontColor=ffffff&fontAlignY=38&desc=Video%20Editor%20%26%20Motion%20Designer&descSize=18&descAlignY=58&animation=fadeIn" width="100%" alt="Karthikeyan S — Video Editor & Motion Designer" />

<a href="https://readme-typing-svg.demolab.com">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=22&pause=1000&color=C39A5C&center=true&vCenter=true&width=680&lines=Turning+raw+footage+into+cinematic+experiences;Motion+Graphics+%E2%80%A2+Color+Grading+%E2%80%A2+VFX;Premiere+Pro+%7C+After+Effects+%7C+Photoshop" alt="Typing SVG" />
</a>

<br/>

<!-- Tech stack stickers -->
<p>
  <img src="https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>

<em>A cinematic, motion-first portfolio for a video editor & motion designer —<br/>built with Next.js, Framer Motion and a gold "Elite Authority" design system.</em>

</div>

<!-- ══════════════════════════ SHOWCASE ══════════════════════════ -->
<div align="center">

### 🎬 Showcase

<!-- Drop a screen recording of the live site (or a reel montage) at docs/demo.gif -->
<img src="./docs/demo.gif" width="82%" alt="Portfolio walkthrough — add docs/demo.gif" />

<sub>▶️ Add your own demo GIF at <code>docs/demo.gif</code> — a screen-recording of the site or a montage of your edits.</sub>

</div>

---

## ✨ Features

- 🎞️ **Cinematic hero** — full-bleed animated name lockup with a gold light-sweep aesthetic
- 🃏 **3D coverflow reel deck** — featured projects in a rotating, auto-playing carousel with inline video
- 🎬 **Filterable projects gallery** — category pills (Reels · Brand · Podcast · Motion Graphics)
- 👤 **About section** — gradient profile card, animated count-up stats, and glowing skill badges
- 💸 **Pricing tiers** — Core / Prime / Elite with a highlighted "popular" plan
- 📬 **Contact hub** — one-tap Email & auto-redirect WhatsApp + brand-colored social links
- 🌫️ **Glassmorphism floating navbar** with scroll-aware styling
- 📱 **Fully responsive** — tuned for mobile, tablet, and desktop
- ⚡ **Static-generated & fast** — optimized images, code-split, ~150 kB first load

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,netlify,git" alt="Tech stack" />
</div>

| Layer | Choice |
| --- | --- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + CSS custom-property design tokens |
| **Animation** | Framer Motion |
| **Icons** | lucide-react + simple-icons brand marks |
| **Fonts** | Figtree (body) · Fraunces → *Bemore Serif / Cortese* (headings) |
| **Hosting** | Netlify (Next.js Runtime) |

<div align="center">
  <img src="https://img.shields.io/badge/Premiere_Pro-9999FF?style=for-the-badge&logo=adobe&logoColor=white" alt="Premiere Pro" />
  <img src="https://img.shields.io/badge/After_Effects-9A9CFF?style=for-the-badge&logo=adobe&logoColor=white" alt="After Effects" />
  <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobe&logoColor=white" alt="Photoshop" />
</div>

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:3000)
npm run dev

# 3. Production build + preview
npm run build
npm run start
```

> Requires **Node 18.17+**.

---

## 📁 Project Structure

```
karthikeyan-s-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Home (Hero → Projects → About → Pricing → Contact)
│   ├── globals.css         # Design tokens + base styles
│   └── projects/page.tsx   # Full projects gallery
├── components/             # Hero, FeaturedDeck, AboutMe, SkillBadge, Navbar…
├── lib/
│   ├── site.ts             # 🔑 Single source of truth for all content
│   └── motion.ts           # Shared Framer Motion variants
├── public/
│   ├── icons/              # Premiere / After Effects / Photoshop logos
│   ├── videos/             # Project videos + poster frames
│   └── hero.jpg, profile.jpg, favicon.ico …
├── netlify.toml            # Netlify + Next.js runtime config
├── tailwind.config.ts      # Brand tokens (mirror of globals.css)
└── next.config.mjs
```

---

## 🎨 Customization

Everything is content- and token-driven — no brand values are hardcoded in components.

- **Content** → edit [`lib/site.ts`](lib/site.ts): name, bio, stats, projects, pricing, email & socials.
- **Brand colors / spacing** → edit the tokens in [`tailwind.config.ts`](tailwind.config.ts) **and** [`app/globals.css`](app/globals.css) (mirrored).
- **Assets** → replace files in [`public/`](public/) (see [`PLACEHOLDER_ASSETS.md`](PLACEHOLDER_ASSETS.md) for the full checklist).
- **Fonts** → body uses **Figtree**; headings use **Fraunces** as a stand-in for the commercial **Bemore Serif** (h1/h2) and **Cortese Medium** (h3–h6). To swap in the real fonts: add the files to `public/fonts/` and uncomment the `@font-face` blocks in `globals.css`.

---

## ☁️ Deployment (Netlify)

Auto-deploy on every push — connect once:

1. Push this repo to GitHub.
2. On [Netlify](https://app.netlify.com) → **Add new site → Import an existing project → GitHub** → pick the repo.
3. Netlify reads [`netlify.toml`](netlify.toml) (build `npm run build`, Next.js runtime auto-installed) → **Deploy**.
4. Thereafter, `git push` to `main` → automatic rebuild & deploy. ✨

---

## 📬 Connect

<div align="center">

[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:skarthikeyan2926@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/916381378969)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karthikeyan-s-2401b11b7)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_karthi.k.n)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/)
[![Behance](https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/)
[![Vimeo](https://img.shields.io/badge/Vimeo-1AB7EA?style=for-the-badge&logo=vimeo&logoColor=white)](https://vimeo.com/)

</div>

---

<div align="center">

<sub>🎬 Crafted with cinematic intent • Built with Next.js & Framer Motion</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C39A5C,100:16130e&height=120&section=footer" width="100%" alt="" />

</div>
