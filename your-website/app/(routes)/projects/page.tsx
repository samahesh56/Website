// app/projects/page.tsx
import { MainLayout } from '@/components/Layout/MainLayout';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects } from '@/lib/utils/projects'; 

export default function ProjectsPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </MainLayout>
  );
}