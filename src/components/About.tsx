import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Rocket, Scale, Milestone } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: BrainCircuit,
      title: 'Intellectual Curiosity',
      description: 'I thrive on dissecting complex problems and exploring the "why" behind data-driven technologies.'
    },
    {
      icon: Rocket,
      title: 'Pragmatic Execution',
      description: 'I bridge the gap between bold ideas and functional, scalable systems that deliver real-world value.'
    },
    {
      icon: Scale,
      title: 'Scalable Systems',
      description: 'I build robust, efficient, and maintainable applications designed for long-term growth and impact.'
    },
    {
      icon: Milestone,
      title: 'Purposeful Impact',
      description: 'I am driven to create intelligent software that meaningfully enhances user interactions and outcomes.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology and driven by curiosity to create meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
            <p>
            My fascination with AI began with a simple question: how can machines think? This curiosity led me down a rabbit hole of data, algorithms, and intelligent design. 
            </p>
            <p>
            I've since translated that curiosity into tangible results, building everything from personalized LLM assistants to autonomous document search engines. Each project has been a step toward mastering the art of creating context-aware systems that don't just function, but feel intuitive.
            </p>
            <p>
            I'm not just a coder; I'm an architect of digital intelligence. My goal is to build systems that learn, adapt, and create real value. This is my journey, and I'm just getting started.
            </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/linkedin_headshot.jpg"
                alt="Sahil Chordia"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">My Core Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 