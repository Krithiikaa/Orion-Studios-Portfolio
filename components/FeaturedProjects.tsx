import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import FeaturedDeck from "./FeaturedDeck";
import { projects } from "@/lib/site";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section id="work" className="section-pad">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-label text-accent">
            Portfolio
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-text-muted">
            A curated selection of my latest video productions
          </p>
        </Reveal>

        <div className="mt-14">
          <FeaturedDeck projects={featured} />
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-md border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-label text-accent transition-colors hover:bg-accent-soft"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
