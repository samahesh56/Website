// app/about/page.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/Layout/MainLayout';
// import { SocialLinks } from '@/components/shared/SocialLinks';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Image */}
        <motion.div 
          {...fadeIn}
          className="lg:col-span-4"
        >
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
        </motion.div>

        {/* About Text */}
        <motion.div 
            {...fadeIn}
            className="lg:col-span-8"
            >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
            </h1>
            
            <div className="space-y-8">
                {/* Introduction */}
                <div className="space-y-4">
                <p className="text-xl text-gray-300">
                I'm a computer scientist learning to work at the intersection of machine learning and
                 social good, with a foundation in computer science and growing understanding of AI ethics.
                </p>

                <p className="text-gray-400">
                I'm actively exploring how AI can be used ethically and responsibly to benefit society, 
                 particularly through my ongoing research and learning. While I'm still building my foundations
                 in machine learning, my goal is to develop expertise that will enable me to create AI 
                 solutions that expand the capabilities of technology to solve real-world problems.
                </p>
                </div>

                {/* Bottom Section with CV */}
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
                <div className="flex-grow">
                    <p className="text-gray-400">
                    Interested in collaborating or learning more about my research?
                    </p>
                </div>
                <a 
                    href="/cv.pdf"
                    download
                    className="flex items-center space-x-2 bg-blue-600/20 text-blue-400 
                            px-6 py-3 rounded-xl hover:bg-blue-600/30 transition-colors 
                            ring-1 ring-blue-500/20"
                >
                    <span>Download CV</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Quick Facts */}
        <motion.div 
          {...fadeIn}
          className="lg:col-span-4 pt-0"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 shadow-xl ring-1 ring-blue-500/20">
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Facts</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-gray-400 text-sm">Location</dt>
                <dd className="font-medium text-gray-200">State College and Philadelphia Area</dd>
              </div>
              <div>
                <dt className="text-gray-400 text-sm">Core Focus</dt>
                <dd className="font-medium text-gray-200">AI Ethics & Social Impact</dd>
              </div>
              <div>
                <dt className="text-gray-400 text-sm">Technologies</dt>
                <dd className="font-medium text-gray-200">Python, SPSS, PyTorch (Learning) </dd>
              </div>
            </dl>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
            {...fadeIn}
            className="lg:col-span-8 -mt-[3.625rem]"
            >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl ring-1 ring-blue-500/20">
                <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
                
                {/* Degree Information - More Compact */}
                <div className="mb-4">
                <h3 className="text-lg font-medium text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-400">The Pennsylvania State University, University Park, PA • 2022-2026</p>
                </div>

                {/* Coursework - Using Grid Layout */}
                <div>
                <h4 className="text-gray-300 mb-3">Relevant Coursework</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <p className="text-blue-400 font-medium">CMPSC 465</p>
                    <p className="text-gray-400">Data Structures and Algorithms</p>
                    </div>
                    <div>
                    <p className="text-blue-400 font-medium">CMPEN 331</p>
                    <p className="text-gray-400">Computer Organization and Design</p>
                    </div>
                    <div>
                    <p className="text-blue-400 font-medium">CMPSC 360</p>
                    <p className="text-gray-400">Discrete Mathematics for CS</p>
                    </div>
                    <div>
                    <p className="text-blue-400 font-medium">CMPSC 461</p>
                    <p className="text-gray-400">Programming Language Concepts</p>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}