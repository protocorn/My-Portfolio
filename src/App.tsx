import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AI from './components/AI';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AI />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
