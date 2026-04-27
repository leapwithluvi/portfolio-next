/**
 * DATA - Projects
 * Showcase your best projects here. 
 * Add project details, technologies used, and repository links.
 */
export interface Project {
  slug: string; // Unique identifier for URL
  nameProject: string;
  classification: string;
  deskProject: string;
  longDescription?: string; // Detailed case study
  status: string;
  year: string;
  linkRepo: string;
  linkDemo?: string; // Optional live preview
  srcImg: string;
  imgAlt: string;
  stacks: string[];
  role?: string; // Your role in the project
  gallery?: string[]; // Additional screenshots
}

export const projects: Project[] = [
  {
    slug: "library-management-system",
    nameProject: "Library Management System",
    classification: "E-Library Architecture",
    role: "Fullstack Developer",
    deskProject:
      "Library Management System is a web-based platform that helps users browse, search, and view information about available books in the library.",
    longDescription:
      "A comprehensive digital solution for modern libraries. This project involved building a robust backend with Prisma and Supabase to handle real-time book availability, a secure user authentication system, and a highly responsive dashboard for both librarians and students. The focus was on optimizing search performance across thousands of book records.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/library-management-system",
    linkDemo: "https://perpustakaan-teknologi.vercel.app",
    srcImg: "/images/projects/perpustakaan.png",
    imgAlt: "Library Management System",
    stacks: ["React", "Express.js", "Prisma", "TypeScript", "Tailwind CSS", "Supabase"],
    gallery: ["/images/projects/perpustakaan-1.png", "/images/projects/perpustakaan-2.png"]
  },
  {
    slug: "nexus-ai",
    nameProject: "Nexus AI",
    classification: "Intelligent Interface",
    role: "AI Integration Engineer",
    deskProject:
      "Nexus AI is a lightweight yet powerful assistant designed for fast, intelligent, and private conversations.",
    longDescription:
      "Nexus AI focuses on delivering a low-latency chat experience using specialized LLM integrations. The project required deep optimization of server-side streaming (using NestJS) and a clean, focus-oriented UI built with Next.js. Security was a top priority, ensuring all conversations remain private through encrypted sessions.",
    status: "On-Going",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
    linkDemo: "https://nexusai.my.id",
    srcImg: "/images/projects/nexusai.png",
    imgAlt: "Nexus AI",
    stacks: ["Next.js", "NestJS", "Supabase", "Prisma", "Tailwind CSS", "TypeScript"],
    gallery: ["/images/projects/nexusai-1.png"]
  },
  {
    slug: "portfolio-v1",
    nameProject: "Portfolio V1",
    classification: "Personal Infrastructure v1",
    role: "Frontend Developer",
    deskProject:
      "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    longDescription: 
      "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    status: "Complete",
    year: "2023",
    linkRepo: "https://github.com/leapwithluvi/portfolio",
    linkDemo: "https://luvi-portfolio.vercel.app",
    srcImg: "/images/projects/portfoliov1.png",
    imgAlt: "Portfolio V1",
    stacks: ["Vite", "React", "Tailwind CSS", "TypeScript"],
    gallery: ["/images/projects/portfoliov1-1.png"],
  },
  {
    slug: "portfolio-v2",
    nameProject: "Portfolio V2",
    classification: "Personal Infrastructure v2",
    role: "Lead Designer & Developer",
    deskProject:
      "A high-performance personal infrastructure designed with a minimalist aesthetic and optimized rendering paths.",
    longDescription:
      "This portfolio serves as a playground for advanced web techniques, including smooth scroll integration (Lenis), complex Framer Motion orchestrations, and a fully typed multi-language system. Every pixel was considered to reflect a high-end, enterprise-grade professional identity.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/portfolio-next",
    linkDemo: "https://luvi.my.id",
    srcImg: "/images/projects/portfoliov2.png",
    imgAlt: "Portfolio",
    stacks: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Motion"],
    gallery: ["/images/projects/portfoliov2-1.png"]
  },
  {
    slug: "express-typescript-starter",
    nameProject: "Express TypeScript Starter",
    classification: "Backend Core v5",
    role: "Backend Architect",
    deskProject:
      "A robust and secure boilerplate for building scalable RESTful APIs with industrial-standard security practices.",
    longDescription:
      "Built for developers who prioritize security and scalability. This starter pack includes a pre-configured layered architecture, Zod for schema validation, Helmet for security headers, and specialized middleware for rate limiting. It's designed to reduce setup time for production-ready APIs by 70%.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/express-typescript-starter",
    srcImg: "/images/projects/backend.png",
    imgAlt: "Express TypeScript Starter",
    stacks: ["Express.js", "PostgreSQL", "Prisma", "TypeScript", "Node.js"],
    gallery: ["/images/projects/backend-1.png"]
  },
  {
    slug: "osis-voting-system",
    nameProject: "OSIS Voting System",
    classification: "Election Architecture",
    role: "Systems Developer",
    deskProject:
      "A secure digital election platform developed to streamline the voting process for student council elections.",
    longDescription:
      "This system was engineered to handle high-concurrency voting during school elections. Key features include real-time vote counting with MongoDB aggregation, a secure QR-based token system for voters, and a transparent audit log to prevent manipulation. It successfully served over 1,000 voters in a single day.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
    // linkDemo: "",
    srcImg: "/images/projects/osis.png",
    imgAlt: "OSIS President Voting System",
    stacks: ["React", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
    gallery: ["/images/projects/osis-1.png"]
  }
];
