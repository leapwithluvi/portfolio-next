"use client"

import { motion } from "motion/react";
import { socials } from "@/data/socials";
import { useTranslation } from "@/hooks/useTranslation";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden bg-background">
      <div className="max-container flex flex-col items-center text-center gap-12 md:gap-20">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label text-accent uppercase tracking-widest text-[10px]"
          >
            {t.contact.badge}
          </motion.div>
          
          <div className="overflow-visible pb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-none tracking-tighter"
            >
              {t.contact.title}
            </motion.h2>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed"
        >
          {t.contact.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row gap-0 mt-8 w-full max-w-5xl border border-border"
        >
           <div className="flex-1 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-border p-8 md:p-12 hover:bg-muted/10 transition-all group">
              <span className="text-[10px] font-mono opacity-30 text-left uppercase tracking-widest">Primary_Channel</span>
              <a 
                href={socials.find(s => s.name === "Email")?.href || "#"} 
                className="text-xl md:text-3xl lg:text-4xl font-serif font-bold hover:text-accent transition-colors truncate text-left tracking-tighter"
              >
                {socials.find(s => s.name === "Email")?.href.replace('mailto:', '') || "leapwithluvi@gmail.com"}
              </a>
           </div>
           
           <div className="flex-1 flex flex-col gap-6 p-8 md:p-12 hover:bg-muted/10 transition-all group">
              <span className="text-[10px] font-mono opacity-30 text-left uppercase tracking-widest">Digital_Nodes</span>
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-start">
                 {socials.filter(s => s.name !== "Email").map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg md:text-xl lg:text-2xl font-serif font-bold hover:text-accent transition-colors tracking-tighter"
                    >
                      {social.name}
                    </a>
                 ))}
              </div>
           </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4 }}
        >
           <a
              href={socials.find(s => s.name === "Email")?.href || "#"}
              className="group flex items-center gap-4 px-10 py-5 md:px-16 md:py-8 bg-primary text-primary-foreground font-bold tracking-[0.4em] uppercase text-[10px] hover:opacity-90 transition-all duration-300"
           >
              {t.contact.establish}
              <div className="w-1.5 h-1.5 bg-background rounded-full animate-pulse" />
           </a>
        </motion.div>
      </div>
    </section>
  );
};
