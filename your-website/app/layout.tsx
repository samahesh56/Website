import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayoutWrapper from '@/components/Layout/ClientLayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Sankeerth Mahesh | AI Researcher',
    template: '%s | Sankeerth Mahesh'
  },
  description: 'AI Researcher focusing on social impact and human potential through ethical AI development',
  keywords: ['AI research', 'machine learning', 'social impact', 'ethics', 'portfolio', 'computer science'],
  authors: [{ name: 'Sankeerth Mahesh' }],
  creator: 'Sankeerth Mahesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sankeerth Mahesh | AI Researcher',
    description: 'AI Researcher focusing on social impact and human potential',
    siteName: 'Sankeerth Mahesh Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sankeerth Mahesh | AI Researcher'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankeerth Mahesh | AI Researcher',
    description: 'AI Researcher focusing on social impact and human potential',
    images: ['/images/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-950 text-gray-100 overflow-x-hidden w-full`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}