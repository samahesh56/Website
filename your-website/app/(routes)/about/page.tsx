// app/about/page.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/shared/SocialLinks';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Profile & Quick Info */}
        <motion.div 
          {...fadeIn}
          className="lg:col-span-4"
        >
          <div className="sticky top-8 space-y-6">
            {/* Profile Image */}
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-blue-500/20">
              <Image
                src="/images/profile.jpg"
                alt="Sankeerth Mahesh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>

            {/* Quick Facts Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-blue-500/20">
              <h2 className="text-xl font-semibold mb-4 text-white">Quick Facts</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400 text-sm">Location</dt>
                  <dd className="font-medium text-gray-200">San Francisco Bay Area</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm">Core Focus</dt>
                  <dd className="font-medium text-gray-200">AI Ethics & Social Impact</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm">Technologies</dt>
                  <dd className="font-medium text-gray-200">Python, PyTorch, TensorFlow</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm">Specialties</dt>
                  <dd className="font-medium text-gray-200">ML Systems, NLP, Computer Vision</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm">Connect</dt>
                  <dd className="mt-2">
                    <SocialLinks iconClassName="text-gray-400 hover:text-blue-400" />
                  </dd>
                </div>
              </dl>
            </div>

            {/* CV Download */}
            <a 
              href="/cv.pdf"
              download
              className="w-full block text-center py-3 px-4 bg-blue-600/20 text-blue-400 
                       rounded-xl hover:bg-blue-600/30 transition-colors ring-1 ring-blue-500/20"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Column - Main Content */}
        <motion.div 
          {...fadeIn}
          className="lg:col-span-8"
        >
          {/* Biography */}
          <section className="prose prose-invert max-w-none mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'm an AI Researcher focused on developing artificial intelligence 
              solutions that create positive social impact. With a background in 
              computer science and a deep interest in AI ethics, I work at the 
              intersection of machine learning and social good.
            </p>
            <p className="text-gray-400 mb-6">
              My research focuses on making AI systems more accessible, ethical, and 
              beneficial to society. I'm particularly interested in developing AI 
              solutions that enhance educational opportunities and improve access to 
              technology in underserved communities.
            </p>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white">Education</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-blue-500/20">
                <h3 className="text-lg font-medium text-white">Master of Science in Computer Science</h3>
                <p className="text-gray-400">Stanford University • 2022-2024</p>
                <p className="text-gray-400 mt-2">
                  Focus: Machine Learning, AI Ethics, Distributed Systems
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-blue-500/20">
                <h3 className="text-lg font-medium text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-400">University of California, Berkeley • 2018-2022</p>
                <p className="text-gray-400 mt-2">
                  Focus: Algorithms, Data Structures, Software Engineering
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}