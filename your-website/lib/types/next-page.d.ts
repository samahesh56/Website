// types/next-page.d.ts

/**
 * This file adds custom type declarations to help with Next.js 15 compatibility
 */

import 'next';

declare module 'next' {
  // Override the PageProps to fix the params typing issue
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}