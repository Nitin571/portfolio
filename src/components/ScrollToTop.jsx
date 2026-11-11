import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import '../styles/ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`floating-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <ChevronUp size={20} strokeWidth={2.2} />
    </button>
  );
}
