import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  // Theme state: 'dark' or 'light' (defaults to 'dark')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Toggle between Dark and Light mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <ScrollToTop />
    </div>
  );
}
