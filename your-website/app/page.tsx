// app/(routes)/page.tsx
'use client';
import { MainLayout } from '@/components/Layout/MainLayout';
import Link from 'next/link';
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components with delays to prioritize critical content
const NetworkAnimation = lazy(() => 
  import('@/components/NetworkAnimation').then(mod => {
    // Add a small delay to prioritize critical content rendering
    return new Promise<typeof mod>(resolve => {
      setTimeout(() => resolve(mod), 300);
    });
  })
);

const TransitionSection = lazy(() => 
  import('@/components/Transitions/TransitionSection').then(mod => {
    return new Promise<typeof mod>(resolve => {
      setTimeout(() => resolve(mod), 100);
    });
  })
);

const WorkToContactTransition = lazy(() => 
  import('@/components/Transitions/WorkToContactTransition').then(mod => {
    return new Promise<typeof mod>(resolve => {
      setTimeout(() => resolve(mod), 200);
    });
  })
);

// Loading fallbacks
const NetworkAnimationFallback = () => (
  <div className="w-full h-screen bg-slate-800/30 animate-pulse rounded-lg"></div>
);

const TransitionSectionFallback = () => (
  <div className="w-full py-32 bg-gradient-to-b from-slate-800 to-slate-900"></div>
);

export default function Home() {
  return (
    <MainLayout>
      <div className="">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden flex items-center -mt-16">
          <div className="absolute inset-0 opacity-20 z-0">
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0 lg:pl-12 xl:pl-20">
                {/* Title pill - Centered on mobile, left-aligned on desktop */}
                <div className="flex justify-center lg:justify-start w-full">
                  <div className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-300/20 text-center lg:text-left">
                    <div className="text-blue-300 text-sm font-medium">
                      <span className="block sm:inline">Sankeerth Mahesh</span>
                      <span className="hidden sm:inline"> | </span>
                      <span className="block sm:inline">Computer Scientist & AI Researcher</span>
                    </div>
                  </div>
                </div>

                {/* Heading - Centered on mobile, left-aligned on desktop */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                  Advancing AI for<br />
                  <span className="text-blue-400">Social Impact</span>
                </h1>

                {/* Description - Centered on mobile, left-aligned on desktop */}
                <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
                  Learning to develop intelligent solutions that make technology
                  more practical and impactful in everyday life.
                </p>

                {/* Buttons - Centered on mobile, normal on desktop */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                  <Link
                    href="/projects"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center flex-1 sm:flex-none"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about"
                    className="px-6 sm:px-8 py-3 sm:py-4 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-900/50 transition cursor-pointer text-center flex-1 sm:flex-none"
                  >
                    About Me
                  </Link>
                </div>
              </div>

              {/* Right Visual - Lazy loaded */}
              <div className="hidden lg:block w-full h-screen relative">
                <Suspense fallback={<NetworkAnimationFallback />}>
                  <NetworkAnimation />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<TransitionSectionFallback />}>
          <TransitionSection />
        </Suspense>

        {/* Work & Updates Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Current Work & Updates
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Featured Work Column */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-300">
                  Research Focus
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition group hover:scale-[1.02] duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    Agile Team Research
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Investigating how personality traits and team dynamics influence software development performance
                  </p>
                  <div className="flex items-center text-blue-300 text-sm">
                    <span className="mr-2">🔍</span>
                    <span>Current Research Project</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition group hover:scale-[1.02] duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2">Machine Learning Fundamentals</h4>
                  <p className="text-gray-300 mb-4">
                    Learning ML basics through Penn State ML Club and practical applications
                  </p>
                  <div className="flex items-center text-blue-300 text-sm">
                    <span className="mr-2">📚</span>
                    <span>Ongoing Learning</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Latest Updates Column */}
              <motion.div
                className="space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-6">
                  Latest Progress
                </h3>

                {[
                  {
                    icon: '🔬',
                    text: 'Conducting statistical analysis on agile team performance data',
                    time: 'Current',
                  },
                  {
                    icon: '💻',
                    text: 'Developed GPT API Wrapper Application',
                    time: 'December 2023',
                  },
                  {
                    icon: '🌐',
                    text: 'Building personal portfolio website with Next.js',
                    time: 'January 2024',
                  },
                ].map((update, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 p-6 lg:p-8 rounded-xl space-y-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl">{update.icon}</span>
                      <p className="text-gray-300">{update.text}</p>
                    </div>
                    <div className="text-sm text-blue-300">{update.time}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Suspense fallback={<TransitionSectionFallback />}>
          <WorkToContactTransition />
        </Suspense>
      </div>
    </MainLayout>
  );
}