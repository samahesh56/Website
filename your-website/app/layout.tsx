import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/Navigation/MainNav';

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <MainNav />
        <main className="flex-grow">{children}</main>
        <footer className="py-8 bg-slate-950 border-t border-blue-500/20"> 
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm"> 
              © {new Date().getFullYear()} Sankeerth Mahesh. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}