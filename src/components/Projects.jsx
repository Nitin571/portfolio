import React from 'react';
import { ArrowDown } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  const hasProjects = projectsData.projects && projectsData.projects.length > 0;

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{projectsData.heading}</h2>
          <p className="section-desc">{projectsData.description}</p>
        </div>

        {hasProjects ? (
          /* Projects Grid (when projects are added in portfolioData.js) */
          <div className="projects-grid">
            {projectsData.projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-category-badge">{project.category}</div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.stats && (
                      <span className="project-metric">{project.stats}</span>
                    )}
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm project-action-btn"
                    >
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm project-action-btn"
                    >
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Clean Single "Coming Soon" Card */
          <div className="projects-empty-container">
            <div className="projects-empty-card">
              <div className="coming-soon-badge">
                <span className="badge-emoji" role="img" aria-label="under construction">🚧</span>
                <span>Currently in active development</span>
              </div>
              <h3 className="empty-card-title">Coming Soon</h3>
              <p className="empty-card-desc">
                Full-stack web applications and Java backend services are currently in progress and will be featured here once ready.
              </p>
              <div className="empty-card-actions">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="btn btn-secondary btn-sm empty-cta-btn"
                >
                  <span>Drop a Project Idea / Message</span>
                  <ArrowDown size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
