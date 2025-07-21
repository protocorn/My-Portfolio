import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';

const educationData = [
  {
    year: '2024-2026',
    institution: 'University of Maryland, College Park',
    degree: 'MS in Data Science',
    details: 'Focusing on advanced machine learning, statistical modeling, and building scalable data-intensive systems.'
  },
  {
    year: '2020-2024',
    institution: 'A.P Shah Institute of Technology, Thane',
    degree: 'B.E in Computer Engineering',
    details: 'Graduated with Distinction. Specialized in algorithms, software engineering, and foundational AI concepts.'
  },
  {
    year: '2018-2020',
    institution: 'Pace Junior Science College',
    degree: 'Science (PCM)',
    details: 'Developed a strong analytical foundation in Physics, Chemistry, and Mathematics.'
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          My Learning <span className="gradient-text">Journey</span>
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-10 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
                  <School className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <p className={`text-sm font-semibold text-primary-600 mb-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.year}</p>
                <h3 className={`text-xl font-bold text-gray-900 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.institution}</h3>
                <p className={`text-lg font-medium text-gray-700 mt-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.degree}</p>
                {item.details && <p className={`mt-2 text-gray-600 text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 