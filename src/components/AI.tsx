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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Talk to My <span className="gradient-text">Digital Twin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I built this AI assistant using my own platform, <strong>Mimikree</strong>. It's trained on my projects, skills, and experience. 
            Go ahead, ask it anything about me!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-4 sm:p-6">
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
                    <p className="text-gray-500">Loading Digital Twin...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center px-4">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              For the best experience, try asking specific questions like "What was your role in the Mimikree project?" or "Which machine learning models have you worked with?".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI; 