// components/projects/ProjectGrid.tsx
import { Project } from '@/lib/types/project';
import { ProjectCard } from './ProjectCard';  // Add this import

interface ProjectGridProps {
  projects: Project[];
  filter?: string;
  search?: string;
}

export function ProjectGrid({ projects, filter, search }: ProjectGridProps) {
  const filteredProjects = projects
    .filter(project => {
      if (filter && !project.categories.includes(filter)) return false;
      if (search && !project.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
        
    ))}
    </div>
  );
}

