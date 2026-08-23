"use client"

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useTranslation } from "@/hooks/useTranslation";

export const TestimonialSection = () => {
  const { t, lang } = useTranslation();

  return (
    <section id="testimonials" className="relative py-16 md:py-32 overflow-hidden bg-background border-t border-border scroll-mt-24">
      <div className="max-container flex flex-col gap-12 md:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="w-12 h-px bg-accent" />
            <div className="text-label text-accent font-mono tracking-[0.4em] uppercase text-[10px]">
              {t.testimonials.badge}
            </div>
          </div>
          <h2 className="text-4xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
            {t.testimonials.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            {t.testimonials.description}
          </p>
        </div>

        {/* Cards Grid - static, no JS animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="group bg-background p-8 md:p-10 flex flex-col gap-8 hover:bg-muted/30 transition-colors duration-500"
            >
              <Quote size={20} aria-hidden="true" className="text-accent opacity-40 group-hover:opacity-100 transition-opacity" />

              <blockquote className="flex-1 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                &ldquo;{item.quote[lang]}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-6 border-t border-border">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 shrink-0 flex items-center justify-center bg-muted text-accent font-serif font-bold text-sm tracking-wider border border-border"
                >
                  {item.initials}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-bold text-foreground truncate">{item.name}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground truncate">
                    {item.role[lang]}{item.company ? ` · ${item.company[lang]}` : ""}
                  </span>
                </div>
                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`View ${item.name} profile`}
                  >
                    View →
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
