"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function WorkToContactTransition() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center space-y-12"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg mb-16">
            Interested in collaboration, AI research, or just want to chat about the future of technology? 
          </p>
          
          <Link
            href="/contact"
            className="inline-block group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <button className="relative px-12 py-6 bg-slate-900 rounded-xl text-xl font-semibold text-white hover:bg-slate-800 transition duration-300">
              Get in Touch
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}