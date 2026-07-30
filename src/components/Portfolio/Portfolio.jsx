import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import './Portfolio.css';

/* ── tech-tag colour map ── */
const TECH_COLORS = {
  'SEO Audit': { bg: '#dbeafe', text: '#1e40af' },
  SEMrush: { bg: '#ffedd5', text: '#d97706' },
  GA4: { bg: '#fef3c7', text: '#d97706' },
  'Link Building': { bg: '#dcfce7', text: '#166534' },
  'Meta Ads': { bg: '#e0e7ff', text: '#3730a3' },
  'Google Ads': { bg: '#fef9c3', text: '#854d0e' },
  'CPA Scaling': { bg: '#ffe4e6', text: '#be123c' },
  'ROAS Analysis': { bg: '#f3e8ff', text: '#6b21a8' },
  'HubSpot CRM': { bg: '#ffedd5', text: '#c2410c' },
  'Email Marketing': { bg: '#e0e7ff', text: '#4338ca' },
  Copywriting: { bg: '#e0f2fe', text: '#0369a1' },
  Zapier: { bg: '#ffedd5', text: '#ea580c' },
  'CRO Strategy': { bg: '#d1fae5', text: '#065f46' },
  'Google Tag Manager': { bg: '#e0f2fe', text: '#0284c7' },
  'A/B Testing': { bg: '#ffe4e6', text: '#b91c1c' },
  'Local SEO': { bg: '#dcfce7', text: '#15803d' },
  'Google Business': { bg: '#e0f2fe', text: '#1d4ed8' },
  'Hyperlocal PPC': { bg: '#ffe4e6', text: '#be123c' },
  Analytics: { bg: '#e0e7ff', text: '#3730a3' },
  'Social Strategy': { bg: '#fce7f3', text: '#be185d' },
  'Instagram Growth': { bg: '#fce7f3', text: '#db2777' },
  'TikTok Video': { bg: '#e0f7fa', text: '#006064' },
  'Content Production': { bg: '#fef3c7', text: '#b45309' },
  'Community Mgmt': { bg: '#e0f2fe', text: '#0369a1' },
  'UGC Content': { bg: '#dcfce7', text: '#166534' },
  'Influence Marketing': { bg: '#f3e8ff', text: '#701a75' },
  TikTok: { bg: '#fce7f3', text: '#db2777' },
  'App Store Ads': { bg: '#e0f2fe', text: '#0369a1' },
  'Google App Campaigns': { bg: '#fef3c7', text: '#b45309' },
  'App Tracking': { bg: '#e0e7ff', text: '#4338ca' },
  Figma: { bg: '#f3e8ff', text: '#6b21a8' },
  'Shopify Schema': { bg: '#dcfce7', text: '#166534' },
  'E-commerce CRO': { bg: '#d1fae5', text: '#065f46' },
  'Marketing Automation': { bg: '#f3e8ff', text: '#6b21a8' },
  'Zapier Flows': { bg: '#ffedd5', text: '#ea580c' },
  'Lead Scoring': { bg: '#f3e8ff', text: '#7c3aed' },
  React: { bg: '#dbeafe', text: '#1e40af' },
  'Next.js': { bg: '#e0e7ff', text: '#3730a3' },
  TailwindCSS: { bg: '#cffafe', text: '#155e75' },
};

/* ── category accent colours ── */
const CATEGORY_ACCENTS = {
  SEO: '#2563eb',
  'Paid Ads': '#ef4444',
  'Social Media': '#ec4899',
  'Content Marketing': '#10b981',
};

/* ── filter tabs ── */
const FILTERS = ['All', 'SEO', 'Paid Ads', 'Social Media', 'Content Marketing'];

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
    SEO: '37, 99, 235',
    'Paid Ads': '239, 68, 68',
    'Social Media': '236, 72, 153',
    'Content Marketing': '16, 185, 129',
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
