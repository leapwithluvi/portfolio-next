/**
 * DATA - Profile Information
 * This is the single source of truth for your identity across the portfolio.
 */

export interface Profile {
  name: string;
  logoName: string;
  title: string;
  image: string;
  resumeUrl: string;
  education: string;
  location: {
    city: string;
    region: string;
    country: string;
    countryCode: string;
    phone: string;
  };
  bio: {
    short: string;    // Used for SEO and Hero summary
    about1: string;   // Main biography part 1
    about2: string;   // Main biography part 2
  };
  greetings: string[];
}

export const profile: Profile = {
  // --- Basic Identity ---
  name: "Luvi Aprilyansyah Gabriel",
  logoName: "leapwithluvi",
  title: "Fullstack Web Developer & AI/ML Enthusiast",
  image: "/images/profile/me.jpeg",
  resumeUrl: "/docs/CV_Luvi_Aprilyansyah_Gabriel_Fullstack_Web_Developer.pdf",

  // --- Professional Context ---
  education: "SMK Negeri 1 Tenggarong",
  location: {
    city: "Kutai",
    region: "Kalimantan Timur",
    country: "Indonesia",
    countryCode: "ID",
    phone: "+6283152248722",
  },

  // --- Narratives ---
  bio: {
    short: "Fullstack Web Developer and Software Engineering Student at SMK Negeri 1 Tenggarong. Passionate about building modern applications and AI solutions in Kutai Kartanegara.",
    about1: "I am a dedicated Software Engineering student at SMK Negeri 1 Tenggarong, Kutai Kartanegara, Borneo. My journey in the world of programming started with a deep curiosity about digital systems, which eventually led me to specialize in high-performance web development. As a leading student in my vocational high school, I focus on bridging the gap between academic learning and real-world industry standards.",
    about2: "On the technical side, I master modern frameworks like Next.js and Express.js, while navigating the complexities of database management and AI integration. Being part of the SMK Negeri 1 Tenggarong community, I strive to showcase the potential of local talent from Kalimantan Timur to the global stage. My goal is to become an impactful Fullstack Engineer who sets new benchmarks for vocational students in Indonesia.",
  },

  // --- UI Elements ---
  greetings: [
    "Hello",
    "Halo",
    "Bonjour",
    "Ciao",
    "Olá",
    "Jambo",
    "Namaste",
    "こんにちは",
    "你好",
    "Selamat Datang",
  ],
};