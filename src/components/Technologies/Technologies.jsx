import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../data/content';
import './Technologies.css';

/* Inline SVG icons for each tech */
const TECH_SVGS = {
  react: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 24 24)" />
    </svg>
  ),
  flutter: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M28 4L8 24l6 6L34 10h-6zm0 20l-8 8 6 6 14-14h-6l-8 8" fill="#42A5F5" />
      <path d="M20 32l6 6 6-6-6-6z" fill="#1565C0" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 6l16 9.2v18.4L24 42 8 33.6V15.2L24 6z" fill="#43A047" />
      <text x="24" y="29" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">N</text>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M12 38l4-28 6 12-10 16z" fill="#FFA000" />
      <path d="M16 10l6 12 10-8L16 10z" fill="#F57C00" />
      <path d="M12 38l20-24 4 4-18 24-6-4z" fill="#FFCA28" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="8" y="14" width="32" height="20" rx="4" fill="#FF9900" opacity="0.9" />
      <text x="24" y="28" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">AWS</text>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 6c-2 8-8 14-8 22a8 8 0 0016 0c0-8-6-14-8-22z" fill="#4CAF50" />
      <path d="M23 28h2v12h-2z" fill="#388E3C" />
    </svg>
  ),
  swift: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#F05138" />
      <path d="M14 32c8-4 12-12 12-12s-4 4-10 6c6-4 10-12 10-12s-12 10-16 14c2 2 6 6 12 6" fill="white" opacity="0.9" />
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7F52FF" /><stop offset="100%" stopColor="#2196F3" /></linearGradient></defs>
      <path d="M8 8h32L24 24l16 16H8V8z" fill="url(#kg)" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="28" cy="16" r="6" fill="#1ABCFE" />
      <circle cx="28" cy="24" r="6" fill="#0ACF83" />
      <circle cx="18" cy="16" r="6" fill="#FF7262" />
      <circle cx="18" cy="24" r="6" fill="#A259FF" />
      <path d="M12 30a6 6 0 0012 0v-6h-6a6 6 0 00-6 6z" fill="#F24E1E" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <ellipse cx="24" cy="18" rx="14" ry="8" fill="#336791" opacity="0.3" />
      <path d="M24 10c-7.7 0-14 3.6-14 8v12c0 4.4 6.3 8 14 8s14-3.6 14-8V18c0-4.4-6.3-8-14-8z" stroke="#336791" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="18" rx="14" ry="8" stroke="#336791" strokeWidth="2" fill="#336791" opacity="0.15" />
      <text x="24" y="32" textAnchor="middle" fill="#336791" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PG</text>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="22" fill="#000000" />
      <path d="M37 36L22.5 17h-3v14h3v-9.5L34.5 37c2.5-3 4-7 4-11 0-8.8-7.2-16-16-16S6.5 17.2 6.5 26s7.2 16 16 16c3.8 0 7.2-1.3 10-3.5L37 36zm-17.5-19h3v19h-3V17z" fill="#ffffff" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M8 4l3.5 32L24 41l12.5-5L40 4H8zm24 13H17.2l.4 4H32l-.8 9-7.2 2.5-7.2-2.5-.4-5h4l.2 2.2 3.4 1 3.4-1 .3-3.7H13.6L12.5 11h20.5l-.6 6z" fill="#E34F26" />
    </svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#7952B3" />
      <path d="M16 14h9c3 0 5 1.5 5 4s-1.5 3.5-3.5 4c2.5.5 4 1.5 4 4.5s-2.5 5.5-6.5 5.5h-8V14zm4 4v5h5c1.5 0 2.5-.5 2.5-2.5s-1-2.5-2.5-2.5h-5zm0 9v5h6c1.5 0 2.5-.5 2.5-2.5s-1-2.5-2.5-2.5h-6z" fill="#ffffff" />
    </svg>
  ),
  tailwindcss: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 14.5c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.3 2.4 1.4 3.5 2.5C26.6 23.3 29.3 26 34.5 26c4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-4.5-4.5-9.7-4.5zm-10.5 11c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.3 2.4 1.4 3.5 2.5 1.8 1.8 4.5 4.5 9.7 4.5 4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-4.5-4.5-9.7-4.5z" fill="#06B6D4" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="4" y="4" width="40" height="40" fill="#F7DF1E" />
      <path d="M36 34.5c-.3.8-.8 1.4-1.5 1.8s-1.8.6-3.2.6c-1.3 0-2.3-.3-3-.9s-1.1-1.4-1.2-2.5h3.8c0 .6.2 1 .5 1.3s.9.4 1.7.4c.7 0 1.2-.1 1.5-.4s.4-.6.4-1c0-.4-.1-.7-.4-.9s-.8-.4-1.6-.7l-1.3-.5c-1.6-.6-2.6-1.2-3.1-1.8s-.8-1.5-.8-2.6c0-1.2.4-2.2 1.2-2.9s2.1-1 3.8-1c1.4 0 2.5.3 3.1.9s.9 1.4 1 2.3h-3.7c0-.5-.1-.8-.3-1.1s-.7-.3-1.3-.3c-.7 0-1.1.1-1.4.3s-.4.5-.4.8c0 .3.1.6.4.7s.7.3 1.4.5l1.3.5c1.7.6 2.7 1.2 3.2 1.9s.7 1.6.7 2.7zM24 37h-3.8V17H24v20z" fill="#000000" />
    </svg>
  ),
  django: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#092E20" />
      <text x="24" y="31" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif">dj</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 4c-6 0-10 1.5-10 6v6h10v2h-12c-4.5 0-6 2.5-6 7v6c0 4.5 1.5 7 6 7h4v-5c0-4.5 2.5-6 7-6h11c4.5 0 6-2.5 6-7v-6c0-4.5-1.5-7-6-7h-9v2h-1c0-4.5-4-5-9-5z" fill="#3776AB" />
      <path d="M24 44c6 0 10-1.5 10-6v-6H24v-2h12c4.5 0 6-2.5 6-7v-6c0-4.5-1.5-7-6-7h-4v5c0 4.5-2.5 6-7 6H14c-4.5 0-6 2.5-6 7v6c0 4.5 1.5 7 6 7h9v-2h1c0 4.5 4 5 9 5z" fill="#FFE873" />
      <circle cx="19.5" cy="9.5" r="1.5" fill="#fff" />
      <circle cx="28.5" cy="38.5" r="1.5" fill="#000" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="4" y="4" width="40" height="40" fill="#3178C6" />
      <text x="36" y="36" textAnchor="end" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">TS</text>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M6 22h4v4H6v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm-18-6h4v4H6v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm12 6h4v4h-4v-4zm-6-6h4v4h-4v-4zm-6-6h4v4h-4v-4z" fill="#0db7ed" />
      <path d="M42 28c-1.5 0-3-.5-4-1.5-3 3-8.5 3.5-12.5 3.5H10c-3 0-5-2-5-5v-1c6 0 9-3.5 11.5-6C19 15.5 22.5 14 26.5 14c8.5 0 14.5 4.5 15.5 12 1-.5 2-.5 3-.5v1c0 .8-.5 1.5-3 1.5z" fill="#0db7ed" />
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 4L6 14.5v21L24 46l18-10.5v-21L24 4z" stroke="#E10098" strokeWidth="2" fill="none" />
      <circle cx="24" cy="4" r="3" fill="#E10098" />
      <circle cx="6" cy="14.5" r="3" fill="#E10098" />
      <circle cx="6" cy="35.5" r="3" fill="#E10098" />
      <circle cx="24" cy="46" r="3" fill="#E10098" />
      <circle cx="42" cy="35.5" r="3" fill="#E10098" />
      <circle cx="42" cy="14.5" r="3" fill="#E10098" />
      <path d="M24 4l-18 10.5M6 14.5l18 21m0 0.5l18-21m-18 21v-31.5M6 14.5h36M6 35.5l36-21M6 35.5l18-31.5M42 35.5L24 4m0 42V14.5" stroke="#E10098" strokeWidth="1.5" />
      <circle cx="24" cy="25" r="4" fill="#E10098" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Technologies() {
  const titleRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleInView(true); },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const row1 = TECHNOLOGIES.slice(0, half);
  const row2 = TECHNOLOGIES.slice(half);

  return (
    <section className="technologies section-padding" id="technologies">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-label">Tech Stack</span> */}
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            Technologies We Use
          </h2>
          <p className="section-subtitle">
            We leverage the best modern tools and frameworks to build fast, scalable, and maintainable products.
          </p>
        </div>

        <div className="tech-marquee-wrapper">
          {/* Row 1: Left to Right */}
          <div className="tech-marquee-row tech-marquee-row--left">
            <div className="tech-marquee-track">
              {row1.concat(row1).concat(row1).map((tech, i) => (
                <div key={`${tech.name}-r1-${i}`} className="tech-chip">
                  <div className="tech-chip__icon">
                    {TECH_SVGS[tech.icon] || <span>{tech.name[0]}</span>}
                  </div>
                  <span className="tech-chip__name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="tech-marquee-row tech-marquee-row--right">
            <div className="tech-marquee-track">
              {row2.concat(row2).concat(row2).map((tech, i) => (
                <div key={`${tech.name}-r2-${i}`} className="tech-chip">
                  <div className="tech-chip__icon">
                    {TECH_SVGS[tech.icon] || <span>{tech.name[0]}</span>}
                  </div>
                  <span className="tech-chip__name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
