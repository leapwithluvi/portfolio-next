interface JobDetail {
  id: number;
  description: string;
}

interface experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  details: JobDetail[];
  summary: string;
}


export const statistics = [
  { label: "Months Internship Experience", value: "6" },
  { label: "Years of Learning to Code", value: "2+" },
  { label: "Projects Published", value: "3" },
];

export const experiences: experience[] = [
  {
    company: "Rivolta Solusi Teknologi",
    location: "Samarinda",
    role: "Software Developer - Intern",
    duration: "Jun 2025 - Dec 2025",
    details: [
      {
        id: 1,
        description:
          "Develop web applications using React, Express, and other modern technologies.",
      },
      {
        id: 2,
        description:
          "Enhance existing applications to improve efficiency, performance, and user experience.",
      },
      {
        id: 3,
        description:
          "Collaborate with cross-functional teams to design and launch new features effectively.",
      },
    ],
      summary:
        "Gained hands-on experience in full-stack development, strengthening skills in modern web to deliver high-quality software solutions.",
  },
];
