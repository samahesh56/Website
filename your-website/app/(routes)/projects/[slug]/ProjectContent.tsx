// app/projects/[slug]/ProjectContent.tsx
'use client';

import { Project } from '@/lib/types/project';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Link from 'next/link';

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300">{project.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section className="prose prose-invert max-w-none mt-0">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300">{project.fullDescription}</p>
            </section>

            {/* Key Features - Only show if results exist */}
            {project.metrics?.results && project.metrics.results.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.metrics.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-6 bg-slate-800 rounded-xl border border-blue-500/20"
                    >
                      <p className="text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery - Only show if gallery images exist */}
            {project.images.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video">
                      <OptimizedImage
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Technical Details */}
          <div className="space-y-8">
            {/* Project Links - Only show if any links exist */}
            {(project.links.github ||
              project.links.demo ||
              project.links.documentation ||
              project.links.website) && (
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Project Links
                </h3>
                <div className="space-y-3">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      target="_blank"
                    >
                      <span>GitHub Repository</span>
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      target="_blank"
                    >
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {project.links.documentation && (
                    <Link
                      href={project.links.documentation}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      target="_blank"
                    >
                      <span>Documentation</span>
                    </Link>
                  )}
                  {project.links.website && (
                    <Link
                      href={project.links.website}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      target="_blank"
                    >
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Timeline
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Started:{' '}
                  {new Date(project.dates.started).toLocaleDateString()}
                </p>
                {project.dates.completed && (
                  <p className="text-gray-300">
                    Completed:{' '}
                    {project.dates.completed === 'Present' 
                      ? 'Present'
                      : new Date(project.dates.completed).toLocaleDateString()
                    }
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
