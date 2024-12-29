// lib/utils/projects.ts
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-education-platform',
    title: 'AI Education Platform',
    shortDescription: 'Personalizing learning experiences through adaptive AI technology',
    fullDescription: `A comprehensive education platform that leverages AI to create 
    personalized learning paths for students. The system adapts to individual learning 
    styles and pace, providing targeted recommendations and feedback.`,
    categories: ['Education', 'AI'],
    technologies: ['Python', 'TensorFlow', 'React'],
    images: {
      thumbnail: '/projects/default-thumb.jpg', // Using default image for now
      featured: '/projects/default-thumb.jpg',
      gallery: ['/projects/default-thumb.jpg']
    },
    links: {
      github: 'https://github.com/yourusername/ai-education',
      demo: 'https://demo.example.com'
    },
    dates: {
      started: '2023-01-01',
      completed: '2023-06-30'
    },
    featured: true,
    metrics: {
      impact: 'Reached 1000+ students',
      results: ['25% improvement in learning outcomes', 'Reduced study time by 30%']
    }
  },

  {
    id: '2',
    slug: 'ai-education-platform',
    title: 'AI Education Platform',
    shortDescription: 'Personalizing learning experiences through adaptive AI technology',
    fullDescription: `A comprehensive education platform that leverages AI to create 
    personalized learning paths for students. The system adapts to individual learning 
    styles and pace, providing targeted recommendations and feedback.`,
    categories: ['Education', 'AI'],
    technologies: ['Python', 'TensorFlow', 'React'],
    images: {
      thumbnail: '/projects/default-thumb.jpg', // Using default image for now
      featured: '/projects/default-thumb.jpg',
      gallery: ['/projects/default-thumb.jpg']
    },
    links: {
      github: 'https://github.com/yourusername/ai-education',
      demo: 'https://demo.example.com'
    },
    dates: {
      started: '2023-01-01',
      completed: '2023-06-30'
    },
    featured: true,
    metrics: {
      impact: 'Reached 1000+ students',
      results: ['25% improvement in learning outcomes', 'Reduced study time by 30%']
    }
  },

  {
    id: '3',
    slug: 'ai-education-platform',
    title: 'AI Education Platform',
    shortDescription: 'Personalizing learning experiences through adaptive AI technology',
    fullDescription: `A comprehensive education platform that leverages AI to create 
    personalized learning paths for students. The system adapts to individual learning 
    styles and pace, providing targeted recommendations and feedback.`,
    categories: ['Education', 'AI'],
    technologies: ['Python', 'TensorFlow', 'React'],
    images: {
      thumbnail: '/projects/default-thumb.jpg', // Using default image for now
      featured: '/projects/default-thumb.jpg',
      gallery: ['/projects/default-thumb.jpg']
    },
    links: {
      github: 'https://github.com/yourusername/ai-education',
      demo: 'https://demo.example.com'
    },
    dates: {
      started: '2023-01-01',
      completed: '2023-06-30'
    },
    featured: true,
    metrics: {
      impact: 'Reached 1000+ students',
      results: ['25% improvement in learning outcomes', 'Reduced study time by 30%']
    }
  }
];