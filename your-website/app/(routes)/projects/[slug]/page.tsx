// app/(routes)/projects/[slug]/page.tsx
import { projects } from '@/lib/utils/projects';
import { notFound } from 'next/navigation';
import ProjectContent from './ProjectContent';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}