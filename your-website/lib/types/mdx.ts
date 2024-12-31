// lib/types/mdx.ts
import { ReactNode } from 'react';

export interface MDXComponentProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}