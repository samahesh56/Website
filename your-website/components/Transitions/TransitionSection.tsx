import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TransitionSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const skillCards = [
    {
      icon: '🤖',
      title: 'Machine Learning & AI',
      description: 'Deep learning architectures, neural networks, NLP models',
      tags: ['TensorFlow', 'PyTorch', 'Keras'],
    },
    {
      icon: '💻',
      title: 'Software Engineering',
      description:
        'Full-stack development, cloud architecture, distributed systems',
      tags: ['Python', 'JavaScript', 'AWS'],
    },
    {
      icon: '🧠',
      title: 'Neural Computing',
      description: 'Neural networks, deep learning, cognitive architectures',
      tags: ['Deep Learning', 'CNNs', 'RNNs'],
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-slate-900">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div className="floating-icons" style={{ opacity }}>
          {/* Background elements can be added here */}
        </motion.div>
      </div>

      <motion.div className="max-w-7xl mx-auto px-4" style={{ y }}>
        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-8 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white">
              Technical Proficiency
            </h2>
            <p className="text-gray-400">
              Leveraging cutting-edge technologies to build intelligent systems
            </p>
          </motion.div>

          <div className="lg:col-span-8 space-y-8">
            {skillCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-400">{card.description}</p>
                      <div className="mt-4 flex gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
