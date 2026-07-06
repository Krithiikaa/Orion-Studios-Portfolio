import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

// Poppins — brand heading + body typeface (GOAT Media guideline).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
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
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
