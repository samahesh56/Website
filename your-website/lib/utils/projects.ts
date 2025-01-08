// lib/utils/projects.ts
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'gpt-api-wrapper',
    title: 'GPT API Wrapper Application',
    shortDescription:
      "A sophisticated Python-based interface for OpenAI's GPT models with conversation management and cost optimization",
    fullDescription: `A comprehensive wrapper application that provides an intuitive interface 
    to OpenAI's GPT models while managing API costs and conversation history efficiently. 
    The tool features a GUI for easy interaction, conversation persistence, and dynamic 
    model configuration options. It implements intelligent conversation history management 
    with automatic truncation to optimize token usage while preserving context.
    
    Key innovations include:
    - Smart conversation history management with automatic truncation
    - Configurable model parameters through an intuitive GUI
    - Persistent conversation storage and retrieval
    - Token usage optimization while maintaining context quality
    - Dynamic model switching and parameter adjustment`,

    categories: ['AI Tools', 'Natural Language Processing', 'Developer Tools'],
    technologies: ['Python', 'OpenAI API', 'tkinter', 'JSON'],
    images: {
      thumbnail: '/projects/gpt-wrapper/thumbnail.jpg',
      featured: '/projects/gpt-wrapper/featured.jpg',
      gallery: [
        '/projects/gpt-wrapper/gui.jpg',
        '/projects/gpt-wrapper/config.jpg',
        '/projects/gpt-wrapper/conversation.jpg',
      ],
    },
    links: {
      github: 'https://github.com/yourusername/gpt-api-wrapper',
    },
    dates: {
      started: '2023-09-01',
      completed: '2024-01-15',
    },
    featured: true,
    metrics: {
      impact: 'Reduced API costs by 40% while maintaining response quality',
      results: [
        'Optimized token usage through intelligent conversation truncation',
        'Simplified GPT integration for developers',
        'Enhanced prompt engineering capabilities through GUI',
        'Flexible conversation management system',
      ],
    },
  },

  {
    id: '2',
    slug: 'ai-education-platform',
    title: 'AI Education Platform',
    shortDescription:
      'Personalizing learning experiences through adaptive AI technology',
    fullDescription: `A comprehensive education platform that leverages AI to create 
    personalized learning paths for students. The system adapts to individual learning 
    styles and pace, providing targeted recommendations and feedback.`,
    categories: ['Education', 'AI'],
    technologies: ['Python', 'TensorFlow', 'React'],
    images: {
      thumbnail: '/projects/default-thumb.jpg', // Using default image for now
      featured: '/projects/default-thumb.jpg',
      gallery: ['/projects/default-thumb.jpg'],
    },
    links: {
      github: 'https://github.com/yourusername/ai-education',
      demo: 'https://demo.example.com',
    },
    dates: {
      started: '2023-01-01',
      completed: '2023-06-30',
    },
    featured: true,
    metrics: {
      impact: 'Reached 1000+ students',
      results: [
        '25% improvement in learning outcomes',
        'Reduced study time by 30%',
      ],
    },
  },

  {
    id: '3',
    slug: 'ai-education-platform',
    title: 'AI Education Platform',
    shortDescription:
      'Personalizing learning experiences through adaptive AI technology',
    fullDescription: `A comprehensive education platform that leverages AI to create 
    personalized learning paths for students. The system adapts to individual learning 
    styles and pace, providing targeted recommendations and feedback.`,
    categories: ['Education', 'AI'],
    technologies: ['Python', 'TensorFlow', 'React'],
    images: {
      thumbnail: '/projects/default-thumb.jpg', // Using default image for now
      featured: '/projects/default-thumb.jpg',
      gallery: ['/projects/default-thumb.jpg'],
    },
    links: {
      github: 'https://github.com/yourusername/ai-education',
      demo: 'https://demo.example.com',
    },
    dates: {
      started: '2023-01-01',
      completed: '2023-06-30',
    },
    featured: true,
    metrics: {
      impact: 'Reached 1000+ students',
      results: [
        '25% improvement in learning outcomes',
        'Reduced study time by 30%',
      ],
    },
  },
];
