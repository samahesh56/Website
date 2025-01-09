// components/projects/ProjectCard.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-navy-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Make only the image and title clickable */}
      <Link href={`/projects/${project.slug}`}>
        <div className="cursor-pointer">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.images.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6 pb-2">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.shortDescription}</p>
          </div>
        </div>
      </Link>

      <div className="px-6 pb-6">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Dates */}
        <div className="text-gray-400 text-sm mb-4">
          {project.dates.started} - {project.dates.completed || 'Present'}
        </div>

        {/* Metrics/Impact */}
        {project.metrics && (
          <div className="mb-4">
            <p className="text-blue-300">{project.metrics.impact}</p>
            <ul className="text-gray-300 text-sm mt-2">
              {project.metrics.results.map((result, index) => (
                <li key={index}>• {result}</li>
              ))}
            </ul>
          </div>
        )}

        {/* External Links */}
        <div className="flex gap-4 mt-4">
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}
          {project.links.website && (
            <a 
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              Website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}