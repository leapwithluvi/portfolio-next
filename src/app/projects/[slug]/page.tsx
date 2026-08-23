import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.nameProject} | ${seo.title}`;
  const description = project.longDescription || project.deskProject;
  const url = `${seo.url}/projects/${project.slug}`;

  return {
    title: project.nameProject,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: seo.title,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: seo.url },
              { "@type": "ListItem", position: 2, name: "Projects", item: `${seo.url}/#work` },
              { "@type": "ListItem", position: 3, name: project.nameProject, item: `${seo.url}/projects/${project.slug}` },
            ],
          }),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
