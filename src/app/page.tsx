import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 pt-0">
        <div className="relative">
          <HeroSection />
          <AboutSection />
        </div>
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <GithubSection />
        <CertificateSection />
        <TestimonialSection />
        <ContactSection />
      </main>

    </div>
  );
}
