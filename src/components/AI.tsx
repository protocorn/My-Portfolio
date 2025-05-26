import React from 'react';

const AI: React.FC = () => {
  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Chat with My AI Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience my personalized AI assistant powered by <strong>Mimikree</strong>. 
            Ask questions about my work, skills, or anything else you'd like to know!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="relative">
                <iframe 
                  src="https://mimikree.com/embed.html?username=sahil&apiKey=AIzaSyAcPmStNQlnzgYg_nWlrsOVxHfARIdMOIA&themeColor=2563eb" 
                  width="100%" 
                  height="600px" 
                  style={{
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                  }}
                  title="Personalized AI Assistant"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              This AI assistant is trained on my portfolio and experience. 
              Feel free to ask about my projects, skills, or career journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI; 