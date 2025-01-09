// components/Layout/MainLayout.tsx
'use client';
import PageTransition from '../Animation/PageTransition';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b bg-slate-950 text-gray-100">
      <div className="relative">
        <PageTransition>
          <main
            className={`${
              !isHomePage ? 'container mx-auto px-4 sm:px-6 lg:px-8 py-8' : ''
            }`}
          >
            {children}
          </main>
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
};
