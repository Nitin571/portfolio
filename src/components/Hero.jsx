import React from 'react';
import { ArrowDown, ArrowDownToLine } from 'lucide-react';
import { heroData, personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-status-wrapper">
          <div className="status-badge">
            <span className="pulse-dot" />
            <span className="status-text">{personalInfo.availability.status}</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">{heroData.greeting}</h1>

        {/* Headline */}
        <h2 className="hero-headline">{heroData.headline}</h2>

        {/* Description */}
        <p className="hero-description">{heroData.description}</p>

        {/* Call-to-Action Buttons */}
        <div className="hero-cta-group">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="btn btn-primary"
          >
            <span>{heroData.primaryCtaText}</span>
            <ArrowDown size={15} />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Resume-Nitin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <ArrowDownToLine size={15} />
            <span>{heroData.secondaryCtaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
