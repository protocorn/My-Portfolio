import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Mimikree (Personalized AI Assistant)',
      description: 'Mimikree is an AI assistant platform that creates personalized AI models by understanding your unique needs, preferences, and goals through your data.',
      image: '/mimikree.png',
      technologies: {
        'Frontend': ['HTML5', 'CSS3', 'JavaScript'],
        'Backend': ['Node.js', 'MongoDB', 'Flask (Python)'],
        'AI/ML': ['LLMs (Gemini 2.0)', 'Pinecone', 'Hybrid RAG', 'LangChain'],
        'DevOps & Infra': ['Docker', 'Environment-Based Key Rotation System']
      },
      githubUrl: 'https://github.com/protocorn/Mimikree---Your-own-LLM',
      liveUrl: 'https://www.mimikree.com',
      icon: Globe,
      category: 'Full-Stack'
    },
    {
      title: 'Automatic Infographics System for Medical Papers',
      description: 'This project converts medical research papers into infographic formats. Our system utilizes multiple techniques, including segmenting the text, summarizing key points, finding relevant captions and images, and applying heuristic methods to generate a suitable title.',
      image: '/infographics.png',
      technologies: {
        'Frontend': ['HTML5', 'CSS3'],
        'Backend': ['Django (Python)'],
        'AI/ML': ['LLMs (T5, BART, GPT)', 'LSTM', 'Hugging Face', 'Transformers', 'TextRank']
      },
      githubUrl: 'https://github.com/protocorn/automatic-infographics-system-for-medical-paper',
      icon: Code,
      category: 'AI/ML'
    },
    {
      title: 'Smart Gmail Assistant',
      description: 'It is a powerful Chrome extension that enhances your Gmail experience with AI-powered features for email composition, refinement, and management. ',
      image: '/gmail.png',
      technologies: {
        'Frontend': ['JavaScript', 'CSS3', 'HTML5'],
        'Backend': ['JavaScript', 'Oauth 2.0'],
        'AI/ML': ['Chrome Built-in APIs (Prompt, Summarizer, Translation)']
      },
      githubUrl: 'https://github.com/protocorn/Smart-AI-Assistant---Chrome-Extension',
      liveUrl: 'https://chromewebstore.google.com/detail/smart-gmail-assistant/ieccgcgkaihnjkocfaobaamapolhjckb?pli=1',
      icon: Smartphone,
      category: 'Frontend'
    },
  ];

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 120;
    const isLong = project.description.length > maxLength;
    const displayText = expanded || !isLong
      ? project.description
      : project.description.slice(0, maxLength) + '...';

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
      >
        {/* Project Image/Placeholder */}
        <div className={`h-48 relative overflow-hidden ${!project.image.startsWith('/') ? project.image : 'bg-gray-100'} flex items-center justify-center`}>
          {project.image.startsWith('/') ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-white/90" />
              </div>
            </>
          ) : (
            <project.icon className="w-16 h-16 text-white/80" />
          )}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">
            {displayText}
            {isLong && (
              <button
                className="ml-2 text-primary-600 underline font-medium focus:outline-none"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </p>

          {/* Technologies by Category */}
          <div className="mb-6 space-y-3">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{category}</h4>
                <p className="text-sm text-gray-600">
                  {(techs as string[]).join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects I've built to practice and showcase my development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These are just a few examples of my work. I'm constantly building new projects 
              and experimenting with different technologies. Check out my GitHub for more!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/protocorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 