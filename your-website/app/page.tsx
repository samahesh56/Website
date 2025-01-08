// app/(routes)/page.tsx
'use client';
import { MainLayout } from '@/components/Layout/MainLayout';
import Link from 'next/link';
import TransitionSection from '@/components/Transitions/TransitionSection';
import NetworkAnimation from '@/components/NetworkAnimation';
import WorkToContactTransition from '@/components/Transitions/WorkToContactTransition';
import { motion } from 'framer-motion';

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
              <div className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
                <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-300/20">
                  <span className="text-blue-300 text-sm font-medium">
                    AI Researcher & Computer Scientist
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Advancing AI for
                  <span className="text-blue-400"> Social Impact</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300">
                  Developing intelligent systems that enhance human potential
                  and democratize access to education.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    href="/projects"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center flex-1 sm:flex-none"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-900/50 transition cursor-pointer text-center"
                  >
                    About Me
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="hidden lg:block w-full h-screen relative">
                <NetworkAnimation />
              </div>
            </div>
          </div>
        </section>

        <TransitionSection />

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
                className="bg-slate-800 p-6 lg:p-8 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-6">
                  Research Focus
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition group hover:scale-[1.02] duration-300"
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition group hover:scale-[1.02] duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2">Ethics in AI</h4>
                  <p className="text-gray-300 mb-4">
                    Exploring frameworks for responsible AI development and
                    deployment
                  </p>
                  <div className="flex items-center text-blue-300 text-sm">
                    <span className="mr-2">📚</span>
                    <span>Ongoing Study</span>
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
                    icon: '📝',
                    text: 'Published new findings on AI education impact',
                    time: '2 weeks ago',
                  },
                  {
                    icon: '💡',
                    text: 'Released open-source AI learning tools',
                    time: '1 month ago',
                  },
                  {
                    icon: '🎓',
                    text: 'Started new research collaboration',
                    time: '1 month ago',
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
                    className="bg-slate-800 p-6 lg:p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
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

        <WorkToContactTransition />
      </div>
    </MainLayout>
  );
}
