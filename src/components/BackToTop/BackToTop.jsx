import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './BackToTop.css';

export default function BackToTop() {
  const progress = useScrollProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg className="back-to-top__ring" viewBox="0 0 48 48">
        <circle
          className="back-to-top__ring-circle"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 24 24)"
        />
      </svg>
      <ArrowUp size={20} className="back-to-top__icon" />
    </button>
  );
}
