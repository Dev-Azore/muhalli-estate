import type { Metadata } from 'next';
import { sampleProjects } from '@/data/projects';
import ProjectDetailClient from '@/components/projects/ProjectDetailClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = sampleProjects.find((p) => p.slug === resolvedParams.slug) || sampleProjects[0];

  return {
    title: `${project.title} - Case Study`,
    description: `${project.title} delivered in ${project.location}. Scope: ${project.scope}. Completed in ${project.yearCompleted}. ${project.summary}`,
    openGraph: {
      title: `${project.title} | Muhalli Estate Portfolio`,
      description: project.summary,
      images: [{ url: project.afterImage, alt: project.title }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = sampleProjects.find((p) => p.slug === resolvedParams.slug) || sampleProjects[0];

  return <ProjectDetailClient project={project} />;
}
