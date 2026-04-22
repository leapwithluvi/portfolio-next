"use client"

import { motion } from "motion/react";
import { techStack, skills } from "@/data/techstack";
import { useTranslation } from "@/hooks/useTranslation";
import { Terminal, Cpu, LayoutPanelLeft, Network, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  // Mapping icons based on the icon string in data
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutPanelLeft": return LayoutPanelLeft;
      case "Cpu": return Cpu;
      case "Network": return Network;
      case "ShieldCheck": return ShieldCheck;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className="relative py-16 md:py-48 overflow-hidden bg-background border-t border-border scroll-mt-24">
      {/* Decorative Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
      
      <div className="max-container relative z-10">
        {/* Header: Enterprise Dashboard Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32 items-end">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-accent" />
              <div className="text-label text-accent font-mono tracking-[0.4em] uppercase text-[10px]">{t.skills.badge}</div>
            </div>
            <h2 className="text-3xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
              The Technical <br /> 
              <span className="text-muted-foreground/90 italic">Matrix.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-6 lg:text-right lg:items-end">
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-sm">
              {t.skills.description}
            </p>
            <div className="flex flex-col gap-1">
               <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-accent">Deployment_Ready_v4.2</span>
               <div className="flex lg:justify-end gap-2 opacity-20">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <div className="w-2 h-2 rounded-full bg-accent" />
               </div>
            </div>
          </div>
        </div>

        {/* The Matrix: Accordion/Grid Hybrid */}
        <div className="flex flex-col border-t border-border">
          {skills.map((category, index) => {
            const Icon = getIcon(category.icon);
            const descKey = `${category.titleKey}Desc` as keyof typeof t.skills;
            
            return (
              <motion.div 
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid grid-cols-1 lg:grid-cols-12 md:gap-8 py-0 md:py-16 border-b border-border items-center hover:bg-muted/30 transition-colors duration-500"
              >

                {/* Index & Icon */}
                <div className="lg:col-span-1 p-8 md:p-12 border-r border-border hidden lg:flex flex-col justify-between items-center text-center">
                   <span className="text-meta font-mono opacity-20 group-hover:opacity-100 transition-all">0{index + 1}</span>
                   <Icon className="w-5 h-5 text-accent opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Category Content */}
                <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 items-center">
                   <div className="lg:col-span-5 px-6 pt-4 pb-1 md:p-12 lg:border-r border-border flex flex-col gap-2">
                      <div className="flex items-center gap-4 mb-2 lg:hidden">
                         <span className="text-accent font-mono text-xs">0{index + 1}</span>
                         <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground group-hover:translate-x-4 transition-transform duration-500">
                        {(t.skills as Record<string, string>)[category.titleKey]}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                         {t.skills[descKey]}
                      </p>
                   </div>

                   <div className="lg:col-span-6 px-6 pb-4 pt-0 md:p-12">
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {category.skills.map((skill) => (
                          <div key={skill} className="relative py-1 group/skill">
                            <span className="text-sm md:text-lg font-light text-muted-foreground group-hover/skill:text-foreground transition-colors cursor-default">
                               {skill}
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/skill:w-full transition-all duration-500" />
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DNA Stack: Grayscale to Color Logos */}
        <div className="mt-24 md:mt-48 flex flex-col gap-12 md:gap-24">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-border pb-8">
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.5em]">Global_Integration_Standards</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">{t.common.dependencies}</div>
           </div>

           <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-6 md:gap-x-20 gap-y-10 md:gap-y-24 items-center justify-items-center">
             {techStack.map((tech) => (
               <motion.a 
                 key={tech.name} 
                 href={tech.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 whileHover={{ y: -5 }}
                 className="group/logo relative w-8 h-8 md:w-14 md:h-14 flex items-center justify-center md:grayscale hover:grayscale-0 transition-all duration-700"
               >
                 <Image 
                   src={tech.logo} 
                   alt={tech.name} 
                   fill 
                   className="object-contain opacity-40 group-hover/logo:opacity-100 transition-opacity" 
                   title={tech.name} 
                 />
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[8px] font-bold uppercase tracking-tighter opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                 </div>
               </motion.a>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
