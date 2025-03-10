import type { Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';

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
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
          '100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#d1d5db', // gray-300
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#d1d5db',
              backgroundColor: '#1f2937',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: '#9ca3af', // gray-400
              borderLeftColor: '#3b82f6', // blue-500
            },
            a: {
              color: '#60a5fa', // blue-400
              '&:hover': {
                color: '#93c5fd', // blue-300
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
  ],
};

export default config;