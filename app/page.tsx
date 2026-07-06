import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutMe from "@/components/AboutMe";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
      <Pricing />
      <ContactSection />
    </>
  );
}
