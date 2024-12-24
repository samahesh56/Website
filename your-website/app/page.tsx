'use client';
import React from 'react';
import Link from 'next/link';
import TransitionSection from '@/components/Transitions/TransitionSection';
import NetworkAnimation from '@/components/NetworkAnimation';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-300/20">
                <span className="text-blue-300 text-sm font-medium">
                  AI Researcher & Computer Scientist
                </span>
              </div>

              <h1 className="text-6xl font-bold leading-tight">
                Advancing AI for
                <span className="text-blue-400"> Social Impact</span>
              </h1>

              <p className="text-xl text-gray-300">
                Developing intelligent systems that enhance human potential and
                democratize access to education.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-900/50 transition"
                >
                  About Me
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <NetworkAnimation />
          </div>
        </div>
      </section>

      <TransitionSection />

      {/* Work & Updates Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Work & Updates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Work Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">
                Research Focus
              </h3>

              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
                <h4 className="text-lg font-semibold mb-2">
                  AI Education Systems
                </h4>
                <p className="text-gray-300 mb-4">
                  Developing adaptive learning platforms that personalize
                  education using AI
                </p>
                <div className="flex items-center text-blue-300 text-sm">
                  <span className="mr-2">🔍</span>
                  <span>Active Research Project</span>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
                <h4 className="text-lg font-semibold mb-2">Ethics in AI</h4>
                <p className="text-gray-300 mb-4">
                  Exploring frameworks for responsible AI development and
                  deployment
                </p>
                <div className="flex items-center text-blue-300 text-sm">
                  <span className="mr-2">📚</span>
                  <span>Ongoing Study</span>
                </div>
              </div>
            </div>

            {/* Latest Updates Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">
                Latest Progress
              </h3>

              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl">📝</span>
                  <p className="text-gray-300">
                    Published new findings on AI education impact
                  </p>
                </div>
                <div className="text-sm text-blue-300">2 weeks ago</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl">💡</span>
                  <p className="text-gray-300">
                    Released open-source AI learning tools
                  </p>
                </div>
                <div className="text-sm text-blue-300">1 month ago</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl">🎓</span>
                  <p className="text-gray-300">
                    Started new research collaboration
                  </p>
                </div>
                <div className="text-sm text-blue-300">1 month ago</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in AI research, collaboration, or just want to chat about
            the future of technology?
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="https://github.com/yourusername"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
            >
              GitHub Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}