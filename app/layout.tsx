import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

// Font pairing (ref: Bemore Serif / Cortese Medium / Figtree Bold).
//   • Figtree  — body + UI sans (loaded for real from Google Fonts).
//   • Fraunces — expressive display serif standing in for the commercial
//     "Bemore Serif" / "Cortese" until their font files are self-hosted.
//     See app/globals.css for the drop-in swap instructions.
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karthikeyans.example.com"),
  title: "Karthikeyan S | Video Editor & Motion Designer",
  description:
    "Professional video editing and motion graphics portfolio.",
  openGraph: {
    title: "Karthikeyan S | Video Editor & Motion Designer",
    description:
      "Professional video editing and motion graphics portfolio.",
    images: ["/opengraph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeyan S | Video Editor & Motion Designer",
    description:
      "Professional video editing and motion graphics portfolio.",
    images: ["/opengraph-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${fraunces.variable}`}>
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
