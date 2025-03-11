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
      with automatic truncation to optimize token usage while preserving context.`,
    
    categories: ['AI Tools', 'Natural Language Processing', 'Developer Tools'],
    technologies: ['Python', 'OpenAI API', 'tkinter', 'JSON'],
    images: {
      thumbnail: '/projects/gpt-wrapper/featured.png',
      featured: '/projects/gpt-wrapper/featured.png',
      gallery: [
      ],
    },
    links: {
      github: 'https://github.com/samahesh56/gptApp',
    },
    dates: {
      started: 'Dec 2023',
      completed: 'Dec 2024',
    },
    featured: true,
    metrics: {
      impact: 'Reduced API costs while maintaining response quality',
      results: [
        'Optimized token usage through intelligent conversation truncation',
        'Enhanced prompt engineering capabilities through GUI',
        'Flexible conversation management system',
      ],
    },
  },

  {
    id: '2',
    slug: 'agilesteps-team-analysis',
    title: 'Building Better Agile Teams',
    shortDescription: 'Investigating the impact of personality traits and team reflexivity on agile software development team performance',
    fullDescription: `Research study examining how Big Five personality traits and team reflexivity influence agile team performance. Initial findings show team reflexivity explains 16.3% of performance variance, with personality traits increasing explained variance to 27.7%. Results suggest balanced team composition may be optimal, as high levels of certain traits like Conscientiousness and Openness could reduce reflexivity's positive effects.`,
    categories: ['Research', 'Agile Development', 'Team Psychology', 'Data Analysis'],
    technologies: ['SPSS', 'Statistical Analysis', 'Survey Tools'],
    images: {
      thumbnail: '/projects/agilesteps/agilemodel.png',
      featured: '/projects/default-thumb.jpg',
      gallery: [

      ]
    },
    links: {
      website: 'https://sites.psu.edu/mcreu/2024/07/22/building-better-agile-teams-by-investigating-the-influential-roles-of-personality-traits-and-team-reflexivity-on-performance-2/'
    },
    dates: {
      started: 'May 2024',
      completed: 'Present'
    },
    featured: true,
    metrics: {
      impact: 'Analyzing optimal team composition strategies in agile environments',
      results: [
        'Created detailed research documentation and analysis procedures',
        'Implemented secure data collection and encryption protocols',
        'Found balanced personality composition may enhance team performance'      
    ]
    },
  },

  {
    id: '3',
    slug: 'portfolio-website',
    title: 'AI-Assisted Portfolio Website',
    shortDescription: 'A modern, responsive portfolio website built through effective AI collaboration using Next.js and Tailwind CSS',
    fullDescription: `A dynamic portfolio website showcasing my projects and professional experience, developed through an innovative collaboration with Claude 3.7 Sonnet. I directed the development process through carefully crafted prompts, making key design decisions while leveraging AI capabilities for implementation. The site is built using Next.js 14 with App Router for optimal performance and SEO, styled with Tailwind CSS for responsive design, and features smooth animations with Framer Motion. This project demonstrates both my technical direction and prompt engineering skills in a practical application of human-AI collaboration.`,
    categories: ['Web Development', 'Frontend', 'Personal Project', 'AI Collaboration'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prompt Engineering'],
    images: {
      thumbnail: '/projects/portfolio/thumbnail.png',
      featured: '/projects/portfolio/featured.jpg',
      gallery: [
      ]
    },
    links: {
      github: 'https://github.com/samahesh56/Website'    
    },
    dates: {
      started: 'January 2024',
      completed: 'Present'
    },
    featured: true,
    metrics: {
      impact: 'Professional showcase and practical demonstration of AI-human collaboration',
      results: [
        'Implemented responsive design through directed AI collaboration',
        'Learned modern web development patterns through hands-on project guidance',
        'Developed effective prompt engineering techniques for technical implementation',
        'Created an optimized Next.js application with proper SEO and performance considerations'
      ]
    },
  },
];
