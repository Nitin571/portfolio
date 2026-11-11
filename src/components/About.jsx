import React from 'react';
import { Server, Code2, Layout, ArrowRight } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import '../styles/About.css';

const highlightIcons = {
  backend: Server,
  problemsolving: Code2,
  frontend: Layout,
};

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{aboutData.heading}</h2>
          <p className="section-desc">
            A quick overview of what I'm studying, my core skills, and what I build.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-layout">
          {/* Main Story & Highlights */}
          <div className="about-main">
            {/* Crisp Intro */}
            <div className="about-story">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Visual Highlight Cards */}
            <div className="about-highlights-grid">
              {aboutData.highlights.map((item) => {
                const IconComponent = highlightIcons[item.id] || Server;
                return (
                  <div key={item.id} className="about-highlight-card">
                    <div className="highlight-icon-box">
                      <IconComponent size={18} />
                    </div>
                    <div className="highlight-content">
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Details Sidebar */}
          <aside className="about-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-card-title">Quick Details</h3>

              <div className="sidebar-details-list">
                {aboutData.quickInfo.map((item, idx) => (
                  <div key={idx} className="sidebar-detail-item">
                    <span className="sidebar-label">{item.label}</span>
                    <span className="sidebar-value">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="sidebar-footer">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="btn btn-secondary btn-sm sidebar-cta-btn"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
