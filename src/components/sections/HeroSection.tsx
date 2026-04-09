"use client"

import { motion } from "motion/react";
import { ArrowUpRight, Download, Laptop } from "lucide-react";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { profile } from "@/data/profile";

const HeroImage = motion(Image)

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full py-32 md:py-32 overflow-hidden"
    >
      <div className="max-container flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Sidebar num="01" title="Hello" />
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            className="flex flex-col gap-4 text-center md:text-left items-center md:items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-lg font-medium text-yellow-600">
              <Laptop size={28} className="text-yellow-600" />
              {profile.title}
            </p>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {profile.description}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.querySelector("#about");
                  aboutSection?.scrollIntoView({ behavior: "smooth" });
                }}
                href="#about"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-gray-800 rounded-lg bg-gray-800 text-white hover:bg-white hover:text-black transition duration-300"
              >
                <ArrowUpRight size={20} />
                Explore
              </a>

              <button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-border rounded-lg bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition duration-300">
                <Download size={20} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative"
            >
              <HeroImage
                src={profile.image}
                alt={profile.name}
                width={500}
                height={500}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="w-full h-[450px] max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
