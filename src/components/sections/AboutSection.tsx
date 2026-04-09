"use client"

import { motion } from "motion/react";
import { UserRound } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { profile } from "@/data/profile";
import { GridPattern } from "@/components/ui/grid-pattern";

export const AboutSection = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden" id="about">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className="[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
      />

      <div className="max-container flex flex-col md:flex-row items-center h-full gap-12 md:gap-24 relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Sidebar Kiri */}
          <Sidebar num="02" title="About" />
        </motion.div>

        {/* Konten */}
        <motion.div
          className="flex flex-col gap-6 text-justify flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Judul */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Ikon User */}
            <UserRound className="text-yellow-600" size={40} />
            <h2 className="md:text-6xl text-4xl font-serif font-bold">
              About Me
            </h2>
          </motion.div>

          {/* Subjudul */}
          <motion.h2
            className="md:text-4xl text-2xl font-serif font-bold text-foreground"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Hello, I&apos;m {profile.name}!
          </motion.h2>

          {/* Deskripsi */}
          {[profile.about1, profile.about2].map((text, index) => (
            <motion.p
              key={index}
              className="md:text-xl text-md font-serif text-muted-foreground leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
