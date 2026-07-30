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
  figma: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="28" cy="16" r="6" fill="#1ABCFE" />
      <circle cx="28" cy="24" r="6" fill="#0ACF83" />
      <circle cx="18" cy="16" r="6" fill="#FF7262" />
      <circle cx="18" cy="24" r="6" fill="#A259FF" />
      <path d="M12 30a6 6 0 0012 0v-6h-6a6 6 0 00-6 6z" fill="#F24E1E" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="22" fill="#000000" />
      <path d="M37 36L22.5 17h-3v14h3v-9.5L34.5 37c2.5-3 4-7 4-11 0-8.8-7.2-16-16-16S6.5 17.2 6.5 26s7.2 16 16 16c3.8 0 7.2-1.3 10-3.5L37 36zm-17.5-19h3v19h-3V17z" fill="#ffffff" />
    </svg>
  ),
  tailwindcss: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 14.5c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.3 2.4 1.4 3.5 2.5C26.6 23.3 29.3 26 34.5 26c4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-4.5-4.5-9.7-4.5zm-10.5 11c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.4.3 2.4 1.4 3.5 2.5 1.8 1.8 4.5 4.5 9.7 4.5 4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-4.5-4.5-9.7-4.5z" fill="#06B6D4" />
    </svg>
  ),
  google_analytics: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect x="10" y="28" width="6" height="12" rx="1.5" fill="#F4B400" />
      <rect x="18" y="20" width="6" height="20" rx="1.5" fill="#DB4437" />
      <rect x="26" y="12" width="6" height="28" rx="1.5" fill="#EF6C00" />
      <rect x="34" y="4" width="6" height="36" rx="1.5" fill="#FF9E0F" />
    </svg>
  ),
  meta_ads: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M14.1 30.2c-3.4 0-6.1-2.8-6.1-6.2s2.7-6.2 6.1-6.2c3.1 0 5.4 2.1 6.5 5 1.1-2.9 3.4-5 6.5-5 3.4 0 6.1 2.8 6.1 6.2s-2.7 6.2-6.1 6.2c-3.1 0-5.4-2.1-6.5-5-1.1 2.9-3.4 5-6.5 5zm13.1-6.2c0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7zm-13.1 2.7c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7z" fill="#0064E0" />
    </svg>
  ),
  google_ads: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M32 14.5L18.5 38H11l13.5-23.5L32 14.5z" fill="#F4B400" />
      <path d="M18.5 38l13.5-23.5H39.5L26 38H18.5z" fill="#4285F4" />
      <circle cx="35.75" cy="18" r="3.75" fill="#34A853" />
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="20" cy="28" r="5" fill="#FF7A59" />
      <line x1="20" y1="28" x2="34" y2="14" stroke="#FF7A59" strokeWidth="4" />
      <line x1="20" y1="28" x2="20" y2="10" stroke="#FF7A59" strokeWidth="4" />
      <line x1="20" y1="28" x2="36" y2="28" stroke="#FF7A59" strokeWidth="4" />
      <circle cx="20" cy="10" r="4.5" fill="#FF7A59" />
      <circle cx="34" cy="14" r="4.5" fill="#FF7A59" />
      <circle cx="36" cy="28" r="4.5" fill="#FF7A59" />
    </svg>
  ),
  semrush: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M12 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12-12-5.4-12-12z" fill="#FF642D" opacity="0.15" />
      <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 26c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" fill="#FF642D" />
      <path d="M34 24h6c0-8.8-7.2-16-16-16v6c5.5 0 10 4.5 10 10z" fill="#430099" />
    </svg>
  ),
  shopify: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M15 14l-3 26h24l-3-26H15z" fill="#95BF47" />
      <path d="M24 4c-3.3 0-6 2.7-6 6v4h12v-4c0-3.3-2.7-6-6-6zm-4 10v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v4H20z" fill="#5E8E2D" />
      <path d="M15 14h18l1.5-3.5L30 8H18l-4.5 2.5L15 14z" fill="#7AB55C" />
    </svg>
  ),
  webflow: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect width="40" height="40" x="4" y="4" rx="8" fill="#4353FF" />
      <text x="24" y="30" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">W</text>
    </svg>
  ),
  wordpress: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="20" fill="#21759B" />
      <circle cx="24" cy="24" r="18" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      <path d="M15 14.5l5.5 15.5 3.5-10-3-5.5h-6zM33 14.5h-6l-3 5.5 3.5 10 5.5-15.5zm-14.7 17l5.7-16 5.7 16-5.7-8-5.7 8z" fill="#ffffff" />
    </svg>
  ),
  mailchimp: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="20" fill="#FFE01B" />
      <path d="M15 18h18v12H15z" fill="#000000" opacity="0.1" />
      <path d="M13 22l11 7 11-7v11H13V22z" fill="#231F20" />
      <path d="M13 20l11 7 11-7H13z" fill="#231F20" />
    </svg>
  ),
  zapier: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <circle cx="24" cy="24" r="20" fill="#FFEBE0" />
      <path d="M24 10v28M10 24h28M14.1 14.1l19.8 19.8M14.1 33.9l19.8-19.8" stroke="#FF4F00" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  ),
  hotjar: (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M24 4c0 0-14 8-14 20s10 20 14 20 14-8 14-20S24 4 24 4z" fill="#FF5C35" opacity="0.25" />
      <path d="M24 10c0 0-10 6-10 16s8 16 10 16 10-6 10-16-8-16-10-16z" fill="#FF5C35" />
      <path d="M24 18c0 0-6 4-6 10s4 10 6 10 6-4 6-10-4-10-6-10z" fill="#FF3B30" />
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
