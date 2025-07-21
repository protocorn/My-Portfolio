import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'LLMs', level: 85, color: 'from-violet-500 to-indigo-600' },
      { name: 'RAG Pipelines', level: 85, color: 'from-pink-500 to-red-500' },
      { name: 'Vector Search (FAISS, Pinecone)', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'CNN / RNN / Transformers', level: 75, color: 'from-purple-500 to-purple-700' },
      { name: 'Time Series Analysis', level: 70, color: 'from-yellow-400 to-yellow-600' },
    ],
  },
  {
    title: 'Software & Web Dev',
    skills: [
      { name: 'React.js / TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
      { name: 'Node.js / Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
      { name: 'REST APIs / Flask / FastAPI', level: 85, color: 'from-teal-400 to-teal-600' },
      { name: 'MongoDB / PostgreSQL', level: 70, color: 'from-emerald-500 to-emerald-700' },
      { name: 'HTML/CSS / Tailwind', level: 90, color: 'from-orange-400 to-red-500' },
    ],
  },
  {
    title: 'Tools, Platforms & DevOps',
    skills: [
      { name: 'Git / GitHub / VS Code', level: 90, color: 'from-gray-700 to-gray-900' },
      { name: 'Docker / Kubernetes', level: 75, color: 'from-blue-600 to-blue-800' },
      { name: 'AWS / GCP / Azure', level: 60, color: 'from-orange-500 to-yellow-600' },
      { name: 'LangChain', level: 80, color: 'from-indigo-400 to-indigo-600' },
      { name: 'Jupyter / Colab / Tableau', level: 85, color: 'from-cyan-400 to-cyan-600' },
    ],
  },
];

const SkillBar: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{skill.name}</span>
      <span className="text-gray-500 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </motion.div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A snapshot of the technologies I use to build, test, and deploy intelligent applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
            I'm currently deepening my expertise in model optimization and exploring advanced topics in distributed systems to build even more powerful AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {['Model Quantization', 'Distributed Training', 'Advanced Kubernetes'].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
