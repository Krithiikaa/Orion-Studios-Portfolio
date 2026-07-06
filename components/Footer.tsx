import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import SocialRow from "./SocialRow";
import { site } from "@/lib/site";

const footerNav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Projects", href: "/projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-max grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        {/* Brand column */}
        <div className="md:col-span-2">
          <Link href="/#home" className="flex items-center gap-3">
            <Image
              src="/profile.jpg"
              alt="Karthikeyan S"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-border object-cover object-top"
            />
            <span className="font-heading text-base font-semibold text-text-primary">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
            {site.tagline}
          </p>
          <SocialRow size="sm" className="mt-5" />
        </div>

        {/* Nav column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-label text-text-muted">
            Navigate
          </h4>
          <ul className="mt-4 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-label text-text-muted">
            Contact
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-max py-6 text-center text-xs text-text-muted">
          © 2026 {site.name} — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
