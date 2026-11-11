import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowDownToLine } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for navbar styling & scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="brand-monogram">N</span>
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-dot" aria-hidden="true" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name} className="nav-item">
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Cluster */}
          <div className="navbar-actions">
            {/* Theme Toggle Button (Dark <-> Light) */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Current theme: ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode.`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
            </button>

            {/* Resume Download Button (Desktop) */}
            <a
              href={personalInfo.resumeUrl}
              download="Resume-Nitin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm resume-nav-btn desktop-only"
            >
              <ArrowDownToLine size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down / Overlay Drawer */}
        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="container mobile-menu-inner">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="mobile-active-bullet" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href={personalInfo.resumeUrl}
                download="Resume-Nitin.pdf"
                className="btn btn-primary btn-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ArrowDownToLine size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
