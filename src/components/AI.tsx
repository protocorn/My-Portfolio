import React, { useState, useEffect, useRef } from 'react';

const AI: React.FC = () => {
  const [loadIframe, setLoadIframe] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeSrc = "https://mimikree.com/embed.html?username=sahil&apiKey=AIzaSyAcPmStNQlnzgYg_nWlrsOVxHfARIdMOIA&themeColor=2563eb";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          if (iframeContainerRef.current) {
            observer.unobserve(iframeContainerRef.current);
          }
        }
      },
      {
        rootMargin: '0px', // Start loading when the element is just about to enter the viewport
        threshold: 0.01    // Or trigger when even a small part (1%) is visible
      }
    );

    const currentContainerRef = iframeContainerRef.current;
    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    if (iframeContainerRef.current) {
      setTimeout(() => {
        iframeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Chat with My AI Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience my personalized AI assistant powered by <strong>Mimikree</strong>  — a platform I developed. 
            Ask questions about my work, skills, or anything else you'd like to know!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <div ref={iframeContainerRef} className="relative" style={{ minHeight: '600px' }}>
                {loadIframe ? (
                  <iframe 
                    ref={iframeRef}
                    src={iframeSrc}
                    width="100%" 
                    height="600px" 
                    style={{
                      border: 'none', 
                      borderRadius: '8px', 
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}
                    title="Personalized AI Assistant"
                    onLoad={handleIframeLoad}
                  />
                ) : (
                  <div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <p className="text-gray-500">Loading AI Assistant...</p>
                  </div>
                )}
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