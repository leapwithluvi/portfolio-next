interface Project {
  name: string;
  type: string;
  description: string;
  status: string;
  repo: string;
  image: string;
  stacks: string[];
}

// Change name, type, description, status, repo, image, stacks to your own
export const projects: Project[] = [
    {
      name: "Library Management System",
      type: "Website",
      description:
        "Library Management System is a web-based platform that helps users browse, search, and view information about available books in the library, allowing them to check details online before visiting and borrowing books directly from the physical library.",
      status: "Complete",
      repo: "https://github.com/leapwithluvi/library-management-system",
      image: "/images/perpustakaan.png",
      stacks: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Express.js", "PostgreSQL", "Supabase", "Prisma", "TypeScript"],
    },
    {
      name: "Portfolio",
      type: "Website",
      description:
        "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
      status: "Complete",
      repo: "https://github.com/leapwithluvi/portfolio",
      image: "/images/portfolio.png",
      stacks: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI", "TypeScript"],
    },
    {
      name: "Express TypeScript Starter - Professional Backend Boilerplate",
      type: "Backend / Boilerplate",
      description:
        "A robust and secure boilerplate for building scalable RESTful APIs. It features a layered architecture, Express 5, TypeScript, Prisma, Zod validation, and industry-standard security practices like Helmet and Rate Limiting.",
      status: "Complete",
      repo: "https://github.com/leapwithluvi/express-typescript-starter",
      image: "/images/backend.png",
      stacks: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "JWT", "Zod", "ESLint", "Prettier", "TypeScript"],
    },
    {
      name: "Nexus AI - Conversational AI Platform",
      type: "Website",
      description:
        "Nexus AI is a lightweight yet powerful assistant designed for fast, intelligent, and private conversations. Built with a modern aesthetic, it provides a seamless chat experience while maintaining a professional and generic brand identity.",
      status: "On-Going",
      repo: "https://github.com/leapwithluvi/ai-chatbot",
      image: "/images/nexusai.png",
      stacks: ["Vite", "React", "Gemini API", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Express.js", "PostgreSQL", "Prisma","TypeScript"],
    },
    {
      name: "OSIS President Voting System",
      type: "Website",
      description:
        "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently, with real-time vote counting.",
      status: "Complete",
      repo: "https://github.com/leapwithluvi/ketos-voting-system",
      image: "/images/osis.png",
      stacks: ["React", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
    },
];
