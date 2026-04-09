"use client";

import { motion } from "motion/react";
import { techStack } from "@/data/techstack";

export interface SkillsCardProps {
  data: typeof techStack;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ data }) => {
  return (
    <>
      {data.map((stack, idx) => (
        <motion.a
          key={idx}
          href={stack.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: idx * 0.01,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
          }}
          className="
            flex flex-col items-center justify-center
            sm:flex-row sm:justify-start sm:space-x-3
            aspect-square sm:aspect-auto
            p-1 sm:p-2.5
            bg-card rounded-xl border border-border/50 shadow-sm
            hover:border-yellow-600/50 hover:shadow-lg
            transition-all duration-300 cursor-pointer
          "
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={stack.logo}
              alt={stack.name}
              className={`h-8 w-8 object-contain transition-all duration-300
                ${
                  ["Hugging Face", "Ollama"].includes(stack.name)
                    ? "invert dark:invert-0"
                    : ""
                }
                ${
                  ["GitHub", "Railway"].includes(stack.name)
                    ? "dark:brightness-200"
                    : ""
                }
              `}
            />
          </div>

          {/* Info */}
          <div className="hidden sm:flex flex-col">
            <h3 className="text-base font-semibold text-foreground">
              {stack.name}
            </h3>
            <p className="text-sm text-muted-foreground">{stack.type}</p>
          </div>
        </motion.a>
      ))}
    </>
  );
};
