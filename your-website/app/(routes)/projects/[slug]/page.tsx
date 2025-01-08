// app/projects/[slug]/page.tsx
import { projects } from '@/lib/utils/projects';
import { notFound } from 'next/navigation';
import ProjectContent from './ProjectContent';
import { use } from 'react';

// Remove 'use client' - this is now a server component
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const resolvedParams = use(Promise.resolve(params));
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return notFound();
  }

  return <ProjectContent project={project} />;
}
