"use client"

import { Sidebar } from "@/components/Sidebar";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export const About = () => {
  return (
    <section
      className="flex justify-center items-center h-auto px-6 md:px-12 py-12 overflow-hidden"
      id="about"
    >
      <div className="max-container flex items-center h-full">
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
        className="flex flex-col gap-4 text-justify max-w-[1550px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Ikon User */}
          <UserRound className="text-yellow-600" size={35} />
          <h2 className="md:text-5xl text-4xl font-serif">About Me</h2>
        </motion.div>

        {/* Subjudul */}
        <motion.h2
          className="md:text-3xl text-xl font-serif font-bold"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hello, I'm {profile.name}!
        </motion.h2>

        {/* Deskripsi */}
        {[
          profile.about1,
          profile.about2,
        ].map((text, index) => (
          <motion.p
            key={index}
            className="md:text-xl text-xl font-serif text-muted-foreground max-w-3xl"
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
