// app/(routes)/projects/[slug]/page.tsx
import { projects } from '@/lib/utils/projects';
import { notFound } from 'next/navigation';
import ProjectContent from './ProjectContent';

type Props = {
  params: {
    slug: string;
  }
};

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
    return null;
  }

  return <ProjectContent project={project} />;
}