/**
 * DATA - Tech Stack & Skills
 * Define your tech stack and group them into skill categories.
 * You can use DevIcons (https://devicon.dev/) for the logos.
 */
type TechCategory =
    | "language"
    | "frontend"
    | "backend"
    | "database" 
    | "devops"   
    | "library"  
    | "ai_ml";

/**
 * Domain filters shown in the Skills section.
 * A tech can belong to multiple domains (e.g. Python -> ai_ml + data_science + data_engineer).
 */
export type TechDomain = "web" | "ai_ml" | "data_science" | "data_engineer";

interface TechStack {
    name: string;
    category: TechCategory;
    type: string;
    logo: string;
    url: string;
    domains: TechDomain[];
}

export const techStack: TechStack[] = [
  // --- LANGUAGES ---
  {
    name: "JavaScript",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    domains: ["web"],
  },
  {
    name: "TypeScript",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
    domains: ["web"],
  },
  {
    name: "Python",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    url: "https://www.python.org/",
    domains: ["ai_ml", "data_science", "data_engineer"],
  },

  // --- FRONTEND ---
  {
    name: "React",
    category: "frontend",
    type: "JavaScript Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    url: "https://react.dev/",
    domains: ["web"],
  },
  {
    name: "Next.js",
    category: "frontend",
    type: "React Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org/",
    domains: ["web"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    type: "CSS Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com/",
    domains: ["web"],
  },
  {
    name: "Bootstrap",
    category: "frontend",
    type: "CSS Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    url: "https://getbootstrap.com/",
    domains: ["web"],
  },

  // --- BACKEND ---
  {
    name: "NodeJS",
    category: "backend",
    type: "JavaScript Runtime",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org/en",
    domains: ["web"],
  },
  {
    name: "ExpressJS",
    category: "backend",
    type: "Web Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    url: "https://expressjs.com/",
    domains: ["web"],
  },
  {
    name: "NestJS",
    category: "backend",
    type: "Web Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    url: "https://nestjs.com/",
    domains: ["web"],
  },

  // --- DATABASE ---
  {
    name: "MySQL",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    url: "https://www.mysql.com/",
    domains: ["web", "data_engineer"],
  },
  {
    name: "PostgreSQL",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org/",
    domains: ["web", "data_engineer"],
  },
  {
    name: "MongoDB",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    url: "https://www.mongodb.com/",
    domains: ["web"],
  },

  // --- LIBRARIES & ORM ---
  {
    name: "Prisma",
    category: "library",
    type: "ORM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    url: "https://www.prisma.io/",
    domains: ["web"],
  },
  {
    name: "Supabase",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    url: "https://supabase.com/",
    domains: ["web"],
  },

  // --- DEVOPS & TOOLS ---
  {
    name: "GitHub",
    category: "devops",
    type: "Git Hosting Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    url: "https://github.com/",
    domains: ["web"],
  },
  {
    name: "Git",
    category: "devops",
    type: "Version Control",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    url: "https://git-scm.com/",
    domains: ["web"],
  },
  {
    name: "Postman",
    category: "devops",
    type: "API Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    url: "https://www.postman.com/",
    domains: ["web"],
  },
  {
    name: "Vercel",
    category: "devops",
    type: "Cloud Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    url: "https://vercel.com/",
    domains: ["web"],
  },
  {
    name: "Railway",
    category: "devops",
    type: "Cloud Platform",
    logo: "https://railway.com/brand/logo-dark.svg",
    url: "https://railway.app/",
    domains: ["web"],
  },

  // --- AI & ML ---
  {
    name: "PyTorch",
    category: "ai_ml",
    type: "Machine Learning Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    url: "https://pytorch.org/",
    domains: ["ai_ml"],
  },
  {
    name: "TensorFlow",
    category: "ai_ml",
    type: "Machine Learning Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    url: "https://www.tensorflow.org/",
    domains: ["ai_ml"],
  },
  {
    name: "Scikit-learn",
    category: "ai_ml",
    type: "Machine Learning Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    url: "https://scikit-learn.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Keras",
    category: "ai_ml",
    type: "Deep Learning API",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    url: "https://keras.io/",
    domains: ["ai_ml"],
  },
  {
    name: "NumPy",
    category: "ai_ml",
    type: "Scientific Computing Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    url: "https://numpy.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "SciPy",
    category: "ai_ml",
    type: "Scientific Computing Library",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/scipy.svg",
    url: "https://scipy.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Pandas",
    category: "ai_ml",
    type: "Data Analysis Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    url: "https://pandas.pydata.org/",
    domains: ["ai_ml", "data_science", "data_engineer"],
  },
  {
    name: "Matplotlib",
    category: "ai_ml",
    type: "Data Visualization Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    url: "https://matplotlib.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Seaborn",
    category: "ai_ml",
    type: "Data Visualization Library",
    logo: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg",
    url: "https://seaborn.pydata.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "OpenCV",
    category: "ai_ml",
    type: "Computer Vision Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    url: "https://opencv.org/",
    domains: ["ai_ml"],
  },
  {
    name: "Google Colab",
    category: "ai_ml",
    type: "Cloud Notebook Environment",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg",
    url: "https://colab.research.google.com/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Jupyter Notebook",
    category: "ai_ml",
    type: "Data Science Environment",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
    url: "https://jupyter.org/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Kaggle",
    category: "ai_ml",
    type: "Data Science Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
    url: "https://www.kaggle.com/",
    domains: ["ai_ml", "data_science"],
  },
  {
    name: "Ollama",
    category: "ai_ml",
    type: "Local LLM Framework",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/ollama.svg",
    url: "https://ollama.com/",
    domains: ["ai_ml"],
  },

  // --- DATA ENGINEERING ---
  {
    name: "Docker",
    category: "devops",
    type: "Containerization Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    url: "https://www.docker.com/",
    domains: ["web", "data_engineer"],
  },
  // {
  //   name: "Apache Airflow",
  //   category: "devops",
  //   type: "Workflow Orchestration",
  //   logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apacheairflow.svg",
  //   url: "https://airflow.apache.org/",
  //   domains: ["data_engineer"],
  // },
  // {
  //   name: "Apache Spark",
  //   category: "library",
  //   type: "Distributed Computing Engine",
  //   logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachespark.svg",
  //   url: "https://spark.apache.org/",
  //   domains: ["data_engineer", "data_science"],
  // },
  // {
  //   name: "Apache Kafka",
  //   category: "devops",
  //   type: "Event Streaming Platform",
  //   logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachekafka.svg",
  //   url: "https://kafka.apache.org/",
  //   domains: ["data_engineer"],
  // },
  // {
  //   name: "dbt",
  //   category: "library",
  //   type: "Analytics Engineering Tool",
  //   logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dbt.svg",
  //   url: "https://www.getdbt.com/",
  //   domains: ["data_engineer", "data_science"],
  // },
];

export interface Skill {
  titleKey: "frontend" | "backend" | "aiml" | "infra";
  category: TechCategory | TechCategory[];
  icon: string; // lucide icon name or type
  skills: string[];
}
 
export const skills: Skill[] = [
  {
    titleKey: "frontend",
    category: "frontend",
    icon: "LayoutPanelLeft",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    titleKey: "backend",
    category: ["backend", "database", "library"],
    icon: "Cpu",
    skills: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MySQL", "Supabase", "Prisma"],
  },
  {
    titleKey: "aiml",
    category: "ai_ml",
    icon: "Network",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"],
  },
  {
    titleKey: "infra",
    category: "devops",
    icon: "ShieldCheck",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Docker", "Postman"],
  },
];
