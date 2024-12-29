// app/projects/page.tsx
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects } from '@/lib/utils/projects'; 


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}