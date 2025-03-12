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
      icon: '💻',
      title: 'Programming & Development',
      description: 'Full-stack development experience with multiple languages and tools',
      tags: ['Python', 'Java', 'C/C++', 'HTML/CSS', 'Git', 'VS Code'],
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Experience in data analysis, technical documentation, and corporate outreach',
      tags: ['Data Analytics', 'Technical Writing', 'IBM SPSS'],
    },
    {
      icon: '🤖',
      title: 'Machine Learning & Research',
      description: 'Studying ML fundamentals through Penn State ML Club/ACM while conducting research under CS faculty mentorship',
      tags: ['Machine Learning Basics', 'PyTorch (Learning)', 'Research Methods']
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // reducing movement of scroll animation 
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <motion.div className="max-w-7xl mx-auto px-4" style={{ y, opacity }}> 
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-8 space-y-6"
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Slower, smoother transition
            viewport={{ once: true, margin: "-100px" }} // earlier time of animation execution
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Proficiency
            </h2>
            <p className="text-gray-400 text-lg">
              Leveraging cutting-edge technologies to build intelligent systems
            </p>
          </motion.div>

          <div className="lg:col-span-8 space-y-8">
            {skillCards.map((card, index) => (  // Technical Proficiency section 
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 
                  0.8, // slower duration
                  delay: index * 0.2, // spacing between cards
                  ease: "easeOut" 
                }} 
                viewport={{ once: true, margin: "-50px" }}
                className="group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 group-hover:border-blue-500/40 transition-colors shadow-lg">
                  <div className="flex items-start gap-6">
                    {/* Icon container - improved contrast */}
                    <div className="p-4 bg-blue-600/30 rounded-lg group-hover:bg-blue-600/40 transition-colors shadow-sm">
                      <span className="text-3xl">{card.icon}</span>
                    </div>
                    <div className="space-y-3">
                      {/* No change to title since it's already white */}
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      {/* Lighten description text */}
                      <p className="text-gray-200">{card.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-700/40 rounded-full text-sm text-blue-100 font-medium group-hover:bg-blue-700/50 transition-colors border border-blue-600/20"
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