'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  sizes = '100vw',
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${className} ${isLoading ? 'bg-slate-800 animate-pulse' : ''} overflow-hidden relative ${fill ? 'w-full h-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={90}
        className={`
          ${isLoading ? 'scale-110 blur-md' : 'scale-100 blur-0'}
          transition-all duration-500
          ${fill ? 'object-cover' : ''}
        `}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}