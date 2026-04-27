"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-serif font-bold">Project Not Found</h1>
        <button 
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px]"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Get other projects for recommendation
  const otherProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="max-container px-4">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <div className="text-xs font-mono text-accent font-bold uppercase tracking-[0.3em]">
                {project.classification}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none">
              {project.nameProject}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 pt-12 border-t border-border/50">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Role</span>
                <span className="text-lg font-medium">{project.role || "Lead Developer"}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Year</span>
                <span className="text-lg font-medium">{project.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Status</span>
                <span className="text-lg font-medium flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.status === 'Complete' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Visual */}
      <section className="mb-24 px-4 overflow-hidden">
        <div className="max-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative aspect-video w-full border border-border overflow-hidden bg-muted"
          >
            <Image 
              src={project.srcImg} 
              alt={project.imgAlt} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Description & Stacks */}
      <section className="mb-32 px-4">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Concept & Challenge</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {project.longDescription || project.deskProject}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href={project.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
              >
                <Github size={16} /> Source Code
              </a>
              {project.linkDemo && (
                <a 
                  href={project.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 border border-border font-bold uppercase tracking-widest text-[10px] hover:bg-muted/10 transition-all"
                >
                  <ExternalLink size={16} /> Live Preview
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2 className="text-xl font-serif font-bold uppercase tracking-widest">Stack Architecture</h2>
            <div className="flex flex-wrap gap-3">
              {project.stacks.map((stack) => (
                <div 
                  key={stack} 
                  className="px-5 py-3 border border-border text-[10px] font-mono uppercase tracking-widest bg-muted/5"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-48 px-4">
          <div className="max-container flex flex-col gap-12">
            <h2 className="text-xl font-serif font-bold uppercase tracking-widest">Gallery_Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-video w-full border border-border overflow-hidden bg-muted group">
                  <Image 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Projects */}
      <section className="border-t border-border pt-32 px-4">
        <div className="max-container flex flex-col gap-16">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">Explore More</h2>
            <Link href="/#work" className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent pb-2 border-b border-accent">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {otherProjects.map((p) => (
              <Link 
                href={`/projects/${p.slug}`} 
                key={p.slug}
                className="bg-background p-10 flex flex-col gap-6 group hover:bg-muted/10 transition-all duration-500"
              >
                <div className="text-[10px] font-mono opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all uppercase tracking-widest">
                  {p.classification}
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:translate-x-2 transition-transform duration-500">
                  {p.nameProject}
                </h3>
                <div className="mt-auto flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Detail <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
