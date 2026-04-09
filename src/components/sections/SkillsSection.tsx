"use client"

import { motion } from "motion/react";
import { Sidebar } from "@/components/Sidebar";
import { SkillsCard } from "@/components/SkillsCard";
import { Brain, Clock3, LayoutTemplate } from "lucide-react";
import { techStack } from "@/data/techstack";
import { GridPattern } from "@/components/ui/grid-pattern";

export const SkillsSection = () => {
  // Filter stacks into Web and AI/ML categories
  const webStacks = techStack.filter(s => s.category !== "ai_ml");
  const aiStacks = techStack.filter(s => s.category === "ai_ml");

  return (
    <section
      id="skills"
      className="relative z-0 flex justify-center items-center h-auto py-20 overflow-hidden"
    >
      <GridPattern
        width={45}
        height={50}
        x={1}
        y={1}
        strokeDasharray={"4 2"}
        className="absolute inset-0 w-full h-full -z-10 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_90%)]"
      />
      <div className="max-container flex flex-col md:flex-row items-center md:items-center h-full gap-12 md:gap-24 px-4 sm:px-6">
        {/* Sidebar Kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Sidebar num="04" title="Tech Stack" />
        </motion.div>
 
        {/* Konten */}
        <div className="flex flex-col flex-1 relative z-10 items-center md:items-start">
          <motion.div
            className="flex flex-col gap-2 mb-8 items-center md:items-start w-full"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Clock3 className="text-yellow-600" size={40} />
              <h2 className="md:text-6xl text-4xl font-serif font-bold text-foreground">My Tech Stacks</h2>
            </div>
            
            <div className="flex items-center gap-2 mt-6">
              <LayoutTemplate className="text-yellow-600" size={25} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Full Stack Engineering</h2>
            </div>
            
            {/* Full-Stack Section */}
            <motion.div
              className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <SkillsCard data={webStacks} />
            </motion.div>
 
            {/* AI/ML Section */}
            <div className="flex items-center gap-2 mt-12">
              <Brain className="text-yellow-600 " size={25} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">AI/ML Engineering</h2>
            </div>
            <motion.div
              className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <SkillsCard data={aiStacks} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
