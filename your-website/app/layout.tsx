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
      <body className={inter.className}>
        <MainNav />
        <main>{children}</main>
        <footer className="mt-auto py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Sankeerth Mahesh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
