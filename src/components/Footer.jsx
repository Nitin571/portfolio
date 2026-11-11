import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LeetCodeIcon } from './Icons';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Left: Brand / Monogram & Name */}
        <div className="footer-brand-side">
          <div className="footer-brand-title">
            <span className="footer-monogram">N</span>
            <span className="footer-name">{personalInfo.name}</span>
          </div>
          <p className="footer-tagline">
            B.E. Computer Science student & full-stack developer.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="footer-social-side">
          <ul className="footer-social-list">
            <li>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon size={17} />
                <span>LeetCode</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Copyright & Back-to-Top */}
        <div className="footer-action-side">
          <span className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </span>

          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
