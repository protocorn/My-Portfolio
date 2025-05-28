import React from 'react';

const educationData = [
  {
    year: '2018-2020',
    institution: 'Pace Junior Science College',
    degree: 'Science (PCM)',
  },
  {
    year: '2020-2024',
    institution: 'A.P Shah Institute of Technology, Thane', 
    degree: 'B.E in Computer Engineering',
  },
  {
    year: '2024-2026',
    institution: 'University of Maryland, College Park', 
    degree: 'MS in Data Science',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <div className={`text-xl font-semibold ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.year}</div>
                <h3 className={`text-2xl font-bold mt-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.institution}</h3>
                {item.degree && <p className={`mt-2 text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.degree}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 