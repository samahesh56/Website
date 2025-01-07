// components/Layout/MainLayout.tsx
import  PageTransition from '../Animation/PageTransition';
import  Footer from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-slate-950 text-gray-100">
      <PageTransition>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};