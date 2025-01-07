import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/Navigation/MainNav';
import PageTransition from '@/components/Animation/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name | AI Researcher',
  description: 'AI Scientist focusing on social impact and human potential',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-950 text-gray-100`}>
        <MainNav />
        <PageTransition>
          <main className="flex-grow pt-16">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}