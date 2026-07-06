/**
 * Single source of truth for site content.
 * Values marked [REPLACE] are placeholders — see PLACEHOLDER_ASSETS.md.
 */

export const site = {
  name: "Karthikeyan S",
  role: "Video Editor & Motion Designer",
  tagline:
    "Crafting cinematic visual stories through video editing and motion graphics.",
  email: "skarthikeyan2926@gmail.com",
  // Automated WhatsApp redirect: opens a chat with +91 63813 78969 and a
  // prefilled message. (wa.me uses the number in international format, no "+".)
  whatsapp:
    "https://wa.me/916381378969?text=Hi%20Karthikeyan%2C%20I%27d%20like%20to%20discuss%20a%20video%20project.",
  socials: {
    linkedin: "https://www.linkedin.com/in/karthikeyan-s-2401b11b7",
    instagram: "https://www.instagram.com/_karthi.k.n?igsh=MXYxOG5mbGR0dmdmOA==",
    // [REPLACE WITH REAL PROFILE URLS] — platform placeholders for now.
    youtube: "https://www.youtube.com/",
    vimeo: "https://vimeo.com/",
    behance: "https://www.behance.net/",
    wix: "https://www.wix.com/",
  },
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export type Project = {
  id: string;
  title: string;
  category: "Reels" | "Brand" | "Podcast" | "Motion Graphics";
  video: string;
  poster: string;
};

// 12 placeholder projects. Titles clearly marked [REPLACE] so nothing reads as
// real client work. Home shows the first 6 (featured); /projects shows all 12.
export const projects: Project[] = [
  { id: "p01", title: "Client Project 01 [REPLACE]", category: "Reels", video: "/videos/project-01.mp4", poster: "/videos/project-01.jpg" },
  { id: "p02", title: "Brand Reel 02 [REPLACE]", category: "Brand", video: "/videos/project-02.mp4", poster: "/videos/project-02.jpg" },
  { id: "p03", title: "Podcast Edit 03 [REPLACE]", category: "Podcast", video: "/videos/project-03.mp4", poster: "/videos/project-03.jpg" },
  { id: "p04", title: "Motion Piece 04 [REPLACE]", category: "Motion Graphics", video: "/videos/project-04.mp4", poster: "/videos/project-04.jpg" },
  { id: "p05", title: "Client Project 05 [REPLACE]", category: "Reels", video: "/videos/project-05.mp4", poster: "/videos/project-05.jpg" },
  { id: "p06", title: "Brand Reel 06 [REPLACE]", category: "Brand", video: "/videos/project-06.mp4", poster: "/videos/project-06.jpg" },
  { id: "p07", title: "Podcast Edit 07 [REPLACE]", category: "Podcast", video: "/videos/project-07.mp4", poster: "/videos/project-07.jpg" },
  { id: "p08", title: "Motion Piece 08 [REPLACE]", category: "Motion Graphics", video: "/videos/project-08.mp4", poster: "/videos/project-08.jpg" },
  { id: "p09", title: "Client Project 09 [REPLACE]", category: "Reels", video: "/videos/project-09.mp4", poster: "/videos/project-09.jpg" },
  { id: "p10", title: "Brand Reel 10 [REPLACE]", category: "Brand", video: "/videos/project-10.mp4", poster: "/videos/project-10.jpg" },
  { id: "p11", title: "Podcast Edit 11 [REPLACE]", category: "Podcast", video: "/videos/project-11.mp4", poster: "/videos/project-11.jpg" },
  { id: "p12", title: "Motion Piece 12 [REPLACE]", category: "Motion Graphics", video: "/videos/project-12.mp4", poster: "/videos/project-12.jpg" },
];

export const projectCategories = [
  "All",
  "Reels",
  "Brand",
  "Podcast",
  "Motion Graphics",
] as const;

export const heroStats = [
  { value: 120, suffix: "+", label: "Projects Done" },
  { value: 4, suffix: "yr", label: "Experience" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export const aboutStats = [
  { value: 120, suffix: "+", label: "Projects Delivered", sub: "Cinematic Works" },
  { value: 4, suffix: "+", label: "Years Experience", sub: "Pro Industry" },
  { value: 98, suffix: "%", label: "Client Satisfaction", sub: "Top Rated" },
  { value: 7, suffix: "+", label: "Happy Clients", sub: "Worldwide" },
];

export const skills = [
  { name: "Premiere Pro", level: 98, icon: "/icons/adobe-premiere-pro-icon.svg" },
  { name: "After Effects", level: 98, icon: "/icons/adobe-after-effects-icon.svg" },
  { name: "Photoshop", level: 98, icon: "/icons/adobe-photoshop-icon.svg" },
  { name: "DaVinci Resolve", level: 70, icon: "/icons/davinci-resolve.svg" },
  { name: "Blender", level: 30, icon: "/icons/blender-icon.svg" },
];

export const skillTags = [
  "Motion Graphics",
  "Video Editing",
  "Color Grading",
  "Sound Design",
  "VFX Compositing",
];

export type PricingTier = {
  name: string;
  price: string;
  positioning: string;
  features: string[];
  delivery: string;
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Core",
    price: "$69",
    positioning: "Simple clean edits for social media",
    features: [
      "Basic cuts & assembly",
      "Color correction",
      "Music + sound design",
      "Captions",
    ],
    delivery: "1 business day",
  },
  {
    name: "Prime",
    price: "$149",
    positioning: "Engaging edited videos for better retention",
    features: [
      "Everything in Core",
      "Animated text & typography",
      "Transitions & visual elements",
      "Better pacing & structure",
    ],
    delivery: "2 business days",
    popular: true,
  },
  {
    name: "Elite",
    price: "$249+",
    positioning: "High-end cinematic / brand-level editing",
    features: [
      "Everything in Prime",
      "Motion graphics & VFX",
      "Advanced color grading",
      "Professional sound design",
      "Enhanced storytelling",
      "Custom lower thirds & titles",
      "Brand kit integration",
      "Priority turnaround",
    ],
    delivery: "5 business days",
  },
];

export const paymentMethods = ["Wise", "Bank Transfer", "USDT"];
