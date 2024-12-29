// components/layout/Footer.tsx
'use client';
import Link from 'next/link';
import { SocialLinks } from '@/components/shared/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Sankeerth Mahesh
            </h3>
            <p className="text-gray-400 text-sm">
              AI Researcher focused on enhancing human potential through responsible AI development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-semibold">Connect</h4>
            <SocialLinks />
            <p className="text-gray-400 text-sm">
              Get in touch: <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300">
                your.email@example.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sankeerth Mahesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;