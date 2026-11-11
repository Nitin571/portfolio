import React from 'react';

/**
 * Pixel-perfect Monochrome Tech Icons
 * All icons use currentColor to perfectly inherit light/dark theme styling.
 */

export const JavaIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export const JavaScriptIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.3-.2 1.8-.5.4-.3.6-.8.6-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.8-.5-1.5-.7l-.8-.2c-1.1-.3-1.9-.6-2.4-1-.5-.4-.7-1-.7-1.8 0-.9.4-1.6 1.1-2.1.7-.5 1.7-.8 2.8-.8.8 0 1.5.1 2.2.4.7.3 1.2.7 1.5 1.2l-1.5 1.2c-.5-.6-1.2-.9-2.1-.9-.6 0-1.1.1-1.4.4-.3.2-.5.6-.5 1 0 .4.2.7.5.9.3.2.8.4 1.6.6l.8.2c1.2.3 2 .7 2.6 1.2.5.5.8 1.1.8 2 0 1-.4 1.8-1.2 2.3-.8.5-1.8.8-3 .8-1 0-1.9-.2-2.7-.6-.8-.4-1.3-1-1.7-1.7l1.7-1.2c.4.8 1.1 1.4 2.1 1.4zm-6.2.1c0 .8-.2 1.4-.6 1.8-.4.4-1 .6-1.8.6-.7 0-1.3-.2-1.7-.5-.4-.4-.7-.9-.9-1.5l1.8-.6c.1.4.3.7.5.9.2.2.5.3.8.3.4 0 .7-.1.9-.3.2-.2.3-.6.3-1.1V10h2.1v7z"/>
  </svg>
);

export const CIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 1 0 0 8" />
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export const PythonIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.9 1.5c-3.1 0-5.1.7-5.1 2.5v1.9h5.2v.7H4.3c-2 0-3.6 1.2-3.6 3.5 0 2.2 1.4 3.5 3.3 3.5h1.5v-2.1c0-1.8 1.6-3.3 3.4-3.3h5.2c1.5 0 2.6-1.2 2.6-2.7V3.9c0-1.7-2.1-2.4-4.8-2.4zm-2.8 1.7c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9zm2.9 20.2c3.1 0 5.1-.7 5.1-2.5V19h-5.2v-.7h7.7c2 0 3.6-1.2 3.6-3.5 0-2.2-1.4-3.5-3.3-3.5h-1.5v2.1c0 1.8-1.6 3.3-3.4 3.3H9.2c-1.5 0-2.6 1.2-2.6 2.7v1.6c0 1.7 2.1 2.4 4.8 2.4zm2.8-1.7c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z"/>
  </svg>
);

export const ReactIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const HtmlIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" />
    <path d="M8 8h8M8 12h7m-6.5 4h5.5l-.5 2.5-1.5.5-1.5-.5-.2-1.5" />
  </svg>
);

export const CssIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" />
    <path d="M16 8H8l.5 4.5h7l-.5 4.5-3 1-3-1-.2-2" />
  </svg>
);

export const SpringIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const ApiIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M7 15V9l3 3-3 3z" />
    <path d="M13 12h4" />
    <path d="M13 9h4" />
    <path d="M13 15h4" />
  </svg>
);

export const MySqlIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <line x1="12" y1="8" x2="12" y2="15" />
  </svg>
);

export const MongoDbIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2C8 7 5 11 5 14.5a7 7 0 0 0 14 0C19 11 16 7 12 2z" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

export const GitIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const VsCodeIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 2l6 4v12l-6 4-10-8 10-4V6L6 14" />
    <path d="M22 6L6 18" />
  </svg>
);

export const PostmanIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

export const DsaIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M10 7.2L6.8 16.5" />
    <path d="M14 7.2L17.2 16.5" />
  </svg>
);
