import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import './Portfolio.css';

/* ── tech-tag colour map ── */
const TECH_COLORS = {
  React: { bg: '#dbeafe', text: '#1e40af' },
  'Next.js': { bg: '#e0e7ff', text: '#3730a3' },
  Flutter: { bg: '#ccfbf1', text: '#0f766e' },
  Dart: { bg: '#ccfbf1', text: '#0f766e' },
  Firebase: { bg: '#ffedd5', text: '#9a3412' },
  'Node.js': { bg: '#dcfce7', text: '#166534' },
  Express: { bg: '#f1f5f9', text: '#334155' },
  PostgreSQL: { bg: '#ede9fe', text: '#5b21b6' },
  TailwindCSS: { bg: '#cffafe', text: '#155e75' },
  Vite: { bg: '#fef3c7', text: '#92400e' },
  'Android SDK': { bg: '#dcfce7', text: '#166534' },
  'iOS SDK': { bg: '#f1f5f9', text: '#334155' },
  Django: { bg: '#dcfce7', text: '#166534' },
  Python: { bg: '#fef9c3', text: '#854d0e' },
  SQLite: { bg: '#e0e7ff', text: '#3730a3' },
  Stripe: { bg: '#ede9fe', text: '#5b21b6' },
  'Google Maps API': { bg: '#dbeafe', text: '#1e40af' },
  MongoDB: { bg: '#dcfce7', text: '#166534' },
};

/* ── category accent colours ── */
const CATEGORY_ACCENTS = {
  Websites: '#2563eb',
  'Web Apps': '#2563eb',
  'Mobile Apps': '#7c3aed',
  Design: '#059669',
};

/* ── filter tabs ── */
const FILTERS = ['All', 'Websites', 'Web Apps', 'Mobile Apps'];

/* ── Framer Motion helpers ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.3 } },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const titleRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleInView(true); },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const CATEGORY_ACCENTS_RGB = {
    Websites: '33, 150, 243',
    'Web Apps': '33, 150, 243',
    'Mobile Apps': '124, 58, 237',
    Design: '5, 150, 105',
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="portfolio-v2" id="portfolio">
      {/* Premium background elements */}
      <div className="pf-dot-pattern" />
      <div className="pf-blob pf-blob--1" />
      <div className="pf-blob pf-blob--2" />
      <div className="pf-blob pf-blob--3" />

      <div className="container">
        {/* Section Header */}
        <div
          className={`pf-header${titleInView ? ' in-view' : ''}`}
          ref={titleRef}
        >
          <h2 className="pf-header__title">
            Featured Projects
            <span className="pf-header__accent" />
          </h2>
          <p className="pf-header__subtitle">
            A curated collection of projects that showcase our craft across web, mobile, and design.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="pf-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`pf-filters__pill${activeFilter === f ? ' pf-filters__pill--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pf-layout"
          >
            {filtered.length > 0 && (
              <div className="pf-grid">
                {filtered.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    className={`pf-card pf-card--${project.id}`}
                    variants={cardMotion}
                    onMouseMove={handleMouseMove}
                    style={{
                      '--accent': CATEGORY_ACCENTS[project.category] || '#2563eb',
                      '--accent-rgb': CATEGORY_ACCENTS_RGB[project.category] || '33, 150, 243'
                    }}
                    onClick={() => { window.location.hash = `#/project/${project.id}`; }}
                  >
                    <div
                      className={`pf-card__img-wrap${project.contain ? ' pf-card__img-wrap--contain' : ''}`}
                      style={{ background: project.color || 'linear-gradient(145deg, #f1f5f9, #e8edf5)' }}
                    >
                      {project.metrics && (
                        <div className="pf-card__metric">
                          <TrendingUp size={11} className="pf-card__metric-icon" />
                          <span>{project.metrics}</span>
                        </div>
                      )}
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`pf-card__img${project.contain ? ' pf-card__img--contain' : ''}`}
                        />
                      ) : (
                        <div className="pf-card__img-placeholder" style={{ background: project.color }} />
                      )}
                    </div>
                    <div className="pf-card__body">
                      <div className="pf-card__meta-row">
                        <span className="pf-card__cat" style={{ color: CATEGORY_ACCENTS[project.category] }}>
                          {project.category}
                        </span>
                        <span className="pf-card__index">#0{idx + 1}</span>
                      </div>
                      <h4 className="pf-card__title">{project.title}</h4>
                      <p className="pf-card__desc">{project.description}</p>
                      <div className="pf-card__tags">
                        {project.tech.map(t => (
                          <span
                            key={t}
                            className="pf-tag"
                            style={{
                              background: (TECH_COLORS[t] || { bg: '#f1f5f9' }).bg,
                              color: (TECH_COLORS[t] || { text: '#334155' }).text,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pf-card__actions">
                        {project.url && project.url !== '#' && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pf-btn-view"
                            onClick={e => e.stopPropagation()}
                          >
                            View Project <ExternalLink size={14} />
                          </a>
                        )}
                        <button
                          className="pf-btn-explore pf-btn-explore--sm"
                          onClick={(e) => { e.stopPropagation(); window.location.hash = `#/project/${project.id}`; }}
                        >
                          Case Study <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
