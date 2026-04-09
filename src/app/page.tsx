"use client"

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="max-container flex flex-col">
        <div className="vertical-divider mx-auto" />
        <AboutSection />
        
        <div className="vertical-divider mx-auto" />
        <ExperienceSection />
        
        <div className="vertical-divider mx-auto" />
        <SkillsSection />
        
        <div className="vertical-divider mx-auto" />
        <ProjectSection />
        
        <div className="vertical-divider mx-auto" />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

