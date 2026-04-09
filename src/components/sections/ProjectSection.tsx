"use client"

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import { CardCertificate } from "@/components/CertificateCard";
import { Sidebar } from "@/components/Sidebar";
import { Folders, Award } from "lucide-react";
import { DataCertificates } from "@/data/certificate";
import { projects } from "@/data/projects";

type Tab = "projects" | "certificates";

const tabConfig = [
  { id: "projects" as Tab, label: "My Projects", icon: Folders },
  { id: "certificates" as Tab, label: "My Certificates", icon: Award },
];

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <section id="work" className="relative w-full py-16 overflow-hidden">
      <div className="max-container flex items-center gap-8 md:gap-16 px-4 sm:px-6">
        {/* SIDEBAR */}
        <Sidebar num="05" title="Work" />

        {/* CONTENT */}
        <div className="flex flex-col w-full">
          {/* Section Header */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Folders className="text-yellow-600" size={40} />
            <h2 className="md:text-6xl text-4xl font-serif font-bold">My Work</h2>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex items-center gap-1 mb-10 border-b border-border"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {tabConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
              <motion.div
                key="projects"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
              >
                {projects.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex h-full"
                  >
                    <ProjectCard data={card} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certificates"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {DataCertificates.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <CardCertificate data={cert} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
