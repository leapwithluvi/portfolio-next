"use client"

import { motion } from "motion/react";
import { Sidebar } from "@/components/Sidebar";
import { experiences, statistics } from "@/data/experience";
import { ExperienceCard } from "@/components/ExperienceCard";
import { BriefcaseBusiness } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-16"
    >
      <div className="max-container flex flex-col md:flex-row items-center md:items-center h-full gap-12 md:gap-24 px-4 sm:px-6">
        {/* sidebar kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Sidebar num="03" title="Experience" />
        </motion.div>

        {/* Konten */}
        <div className="flex flex-1 flex-col">
          <motion.div
            className="flex flex-col gap-4 mb-8 items-center md:items-start w-full"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row items-center gap-4">
              <BriefcaseBusiness className="text-yellow-600" size={40} />
              <h2 className="md:text-6xl text-4xl font-serif font-bold">Experience</h2>
            </div>

            <motion.div className="md:ml-4 flex flex-row gap-8 md:gap-16 mt-10 justify-center md:justify-start flex-wrap">
              {statistics.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <span className="text-5xl font-serif font-bold text-foreground">
                    {item.value}
                  </span>
                  <p className="text-sm font-serif md:text-2xl text-muted-foreground mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ExperienceCard data={experiences[0]} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
