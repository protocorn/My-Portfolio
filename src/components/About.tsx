import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing clean, maintainable, and well-documented code that others can easily understand and build upon.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always eager to learn new technologies and find creative solutions to complex problems.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and continuously improving my skills through hands-on projects and learning.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'I enjoy working with others, sharing knowledge, and contributing to team success.'
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
            <p>
  I’ve always been fascinated by autonomous systems — the idea that machines can learn, adapt, and make decisions independently sparked a deep curiosity in me. That spark led me into the world of data, algorithms, and intelligent system design.
</p>
<p>
  Through my Data Science journey, I’ve explored and built a variety of AI-driven applications — from personalized LLM-based assistants to local, autonomous document search engines. Each project helped me better understand what it takes to engineer scalable, context-aware systems that truly assist users.
</p>
<p>
  My journey isn’t just about coding. It’s about crafting systems that think, evolve, and deliver real value. I’m continuously pushing boundaries in AI, automation, and intelligent software design — and I’m just getting started.
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
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Drives Me</h3>
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