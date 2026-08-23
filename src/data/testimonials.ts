/**
 * DATA - Testimonials
 * Replace the anonymous placeholders below with real testimonials when available.
 * Text is bilingual and follows the site language toggle.
 * `initials` is used for the avatar fallback when no photo is provided.
 */
export interface LocalizedText {
  en: string;
  id: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  company?: LocalizedText;
  quote: LocalizedText;
  initials: string;
  linkUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Anonymous",
    role: { en: "Client", id: "Klien" },
    company: { en: "Website Project", id: "Proyek Website" },
    quote: {
      en: "The website was done on time and runs smoothly. Easy to communicate with and revisions were fast.",
      id: "Website-nya selesai tepat waktu dan berjalan lancar. Mudah diajak komunikasi dan revisinya cepat.",
    },
    initials: "A",
  },
  {
    id: "testimonial-2",
    name: "Anonymous",
    role: { en: "Teammate", id: "Rekan Tim" },
    company: { en: "School Project", id: "Proyek Sekolah" },
    quote: {
      en: "Great to work with. Always responsive and the final result turned out better than we expected.",
      id: "Nyaman diajak kerja sama. Selalu responsif dan hasil akhirnya melebihi ekspektasi kami.",
    },
    initials: "A",
  },
  {
    id: "testimonial-3",
    name: "Anonymous",
    role: { en: "User", id: "Pengguna" },
    company: { en: "Web App Project", id: "Proyek Web App" },
    quote: {
      en: "The app is easy to use and the design looks clean. Recommended!",
      id: "Aplikasinya mudah dipakai dan desainnya rapi. Recommended!",
    },
    initials: "A",
  },
];
