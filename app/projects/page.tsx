import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "All Projects | Karthikeyan S",
  description:
    "A curated gallery of video editing and motion graphics work across various industries.",
};

export default function ProjectsPage() {
  return (
    <section className="section-pad pt-[calc(var(--nav-height)+64px)]">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-label text-accent">
            Portfolio
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 text-text-muted">
            A curated gallery of video editing and motion graphics work across
            various industries.
          </p>
        </Reveal>

        <div className="mt-12">
          <ProjectsGallery />
        </div>
      </div>
    </section>
  );
}
