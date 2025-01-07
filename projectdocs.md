# AI Researcher Portfolio - Project Documentation

## Project Overview
A modern, professional personal website showcasing AI research and social impact focus, featuring interactive animations and smooth transitions.

## Core Structure
```
/your-website/
├── app/                    
│   ├── (routes)/          
│   │   ├── page.tsx           # Homepage with unique layout
│   │   ├── about/            # About page with MainLayout ✓
│   │   ├── projects/         # Projects listing with MainLayout ✓
│   │   ├── blog/             # Blog section with MainLayout ✓
│   │   └── contact/          # Contact page with MainLayout ✓
│   ├── layout.tsx            # Root layout with PageTransition
│   └── globals.css        
├── components/            
│   ├── Layout/           
│   │   ├── MainLayout.tsx    # Shared layout for content pages
│   │   ├── Header.tsx        # Site navigation
│   │   └── Footer.tsx        # Site footer
│   ├── Animation/         
│   │   └── PageTransition.tsx # Page transition wrapper
│   ├── Navigation/
│   │   └── MainNav.tsx       # Main navigation component
│   ├── projects/          
│   │   ├── ProjectCard.tsx    # Project preview component
│   │   ├── ProjectGrid.tsx    # Projects grid layout
│   │   ├── ProjectFilters.tsx # Project filtering component
│   │   └── ProjectSearch.tsx  # Project search functionality
│   ├── blog/              
│   │   ├── PostCard.tsx       # Blog post preview
│   │   └── PostHeader.tsx     # Blog post header
│   ├── shared/
│   │   └── SocialLinks.tsx    # Shared social media links
│   ├── Transitions/
│   │   ├── TransitionSection.tsx    # Section transitions
│   │   └── WorkToContact.tsx        # Work to contact section transition
│   └── NetworkAnimation.tsx    # Network visualization component
```

## Configuration Files
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};

// next.config.ts
const nextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Core Dependencies
```json
{
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.10",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.2.1",
    "@headlessui/react": "^1.7.18"
  }
}
```

## Design System
```typescript
// Color Scheme
colors: {
  background: 'slate-950',
  text: 'gray-100',
  accent: 'blue-400',
  gradient: 'from-blue-400 to-purple-400',
  cards: 'bg-slate-900/50'
}
```

## Roadmap for Improvement

### Phase 1: Core Functionality
- [ ] Enhance contact form with validation and email integration
- [ ] Implement robust error handling
- [ ] Add loading states and placeholders

### Phase 2: Technical Enhancement
- [ ] Implement image optimization
- [ ] Add progressive loading for content
- [ ] Enhance responsive design for all viewports

### Phase 4: User Experience
- [ ] Add loading states
- [ ] Enhance mobile navigation
- [ ] Improve accessibility

## Usage Instructions
This documentation can be used to:
1. Understand project structure and components
2. Maintain consistent styling across pages
3. Implement new features following established patterns
4. Reference component implementations
5. Track development progress
6. Ensure consistency in animations and transitions

