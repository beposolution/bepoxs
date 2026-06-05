import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, Calendar, ShieldCheck, User, Clock,
  Terminal, Globe, Sparkles, ChevronRight, Briefcase,
  Layers, Zap, CheckCircle2, Code2, Server, Database, Cloud
} from 'lucide-react';
import './ProjectDetails.css';

/* ── Architecture data map ──────────────────────── */
const ARCHITECTURES = {
  3: { entry: 'mexpo_website/src/index.js', tree: ['📁 src/components/Gallery.jsx', '📁 src/components/B2BGateway.jsx', '📁 src/utils/SEOManager.js', '📄 package.json', '📄 vite.config.js'], details: { framework: 'HTML5 & CSS3 Style Sheets', backend: 'Vanilla JS / Bootstrap Layouts', database: 'N/A (Decentralized static files)', hosting: 'AWS Cloudfront CDN & S3 static web host' } },
  4: { entry: 'bepocart_app/lib/main.dart', tree: ['📁 lib/blocs/cart_bloc.dart', '📁 lib/views/checkout_view.dart', '📁 lib/services/notifications.dart', '📄 pubspec.yaml', '📄 android/app/build.gradle'], details: { framework: 'Flutter SDK (Dart 3.x)', backend: 'Django (Python) Backend API', database: 'MongoDB Atlas & SQLite cache', hosting: 'Google Play / App Store' } },
  6: { entry: 'psage_erp/src/App.jsx', tree: ['📁 src/ledger/inventory_tracker.jsx', '📁 src/billing/invoice_generator.jsx', '📁 src/auth/rbac_middleware.jsx', '📄 package.json', '📄 server/db/schema.sql'], details: { framework: 'React (Redux) & Flutter Mobile App', backend: 'Django REST API Framework', database: 'PostgreSQL with triggers', hosting: 'Docker Swarm / App Stores' } },
  5: { entry: 'becall_crm/lib/main.dart', tree: ['📁 lib/telephony/call_receiver.dart', '📁 lib/blocs/sales_bloc.dart', '📁 lib/services/firebase_sync.dart', '📄 pubspec.yaml', '📄 ios/Runner/Info.plist'], details: { framework: 'Flutter (iOS / Android Client)', backend: 'Django REST API Backend', database: 'Cloud Firestore & Firebase DB', hosting: 'Internal Enterprise dist.' } },
  9: { entry: 'grocery_platform/manage.py', tree: ['📁 grocery/views/catalog_view.py', '📁 grocery/search/indexing.py', '📁 grocery/models/delivery.py', '📄 requirements.txt', '📄 config/settings.py'], details: { framework: 'Django & Flutter App Clients', backend: 'Django Python REST Controller', database: 'SQLite Dev / PostgreSQL Prod', hosting: 'Vercel Serverless + Redis' } },
  1: { entry: 'racing_landing/src/main.jsx', tree: ['📁 src/sections/VideoHeader.jsx', '📁 src/components/RaceTimeline.jsx', '📁 src/sections/Sponsors.jsx', '📄 tailwind.config.js', '📄 vite.config.js'], details: { framework: 'React / Vite + TailwindCSS', backend: 'Static + serverless API', database: 'N/A (JSON state)', hosting: 'Cloudflare Pages edge' } },
  7: { entry: 'myskates_app/lib/main.dart', tree: ['📁 lib/marketplace/p2p_listings.dart', '📁 lib/social/community_feed.dart', '📁 lib/payments/stripe_escrow.dart', '📄 pubspec.yaml', '📄 firebase.json'], details: { framework: 'Flutter SDK (Android & iOS)', backend: 'Firebase + Stripe webhooks', database: 'Firestore & Firebase Storage', hosting: 'Google & Apple App Stores' } },
  8: { entry: 'qdel_dispatch/lib/main.dart', tree: ['📁 lib/routing/gps_tracker.dart', '📁 lib/dispatch/route_opt.dart', '📁 lib/signatures/handover.dart', '📄 pubspec.yaml', '📄 package.json'], details: { framework: 'Flutter (iOS & Android)', backend: 'Django (REST API)', database: 'Google Maps API', hosting: 'GCP / App Stores' } },
  2: { entry: 'bepocart_storefront/pages/index.jsx', tree: ['📁 pages/product/[slug].jsx', '📁 components/Search.jsx', '📁 components/Checkout.jsx', '📄 package.json', '📄 next.config.js'], details: { framework: 'Next.js 14 App Router', backend: 'Next.js Server Actions', database: 'PostgreSQL + Redis layer', hosting: 'Vercel Edge Servers' } },
};

/* ── Animated count-up metric ───────────────────── */
function MetricValue({ value }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current; if (!node) return;
    const m = value.match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!m) { setDisplay(value); return; }
    const [, pre, numStr, suf] = m;
    const target = parseFloat(numStr);
    const dec = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      const t0 = performance.now();
      const ease = t => 1 - Math.pow(1 - t, 4);
      const tick = now => {
        const p = Math.min((now - t0) / 1600, 1);
        setDisplay(pre + (ease(p) * target).toFixed(dec) + suf);
        if (p < 1) requestAnimationFrame(tick); else setDisplay(value);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{display}</span>;
}

/* ── IDE Terminal widget ────────────────────────── */
function IDETerminal({ project }) {
  const arch = ARCHITECTURES[project.id] || { entry: 'main.js', tree: ['📁 src/', '📄 package.json'], details: { framework: 'Vanilla JS', backend: 'REST API', database: 'IndexedDB', hosting: 'Cloudflare' } };
  const [activeFile, setActiveFile] = useState(arch.entry);
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const log = [
      `$ npm run build --project=${project.title.toLowerCase().replace(/\s+/g, '')}`,
      `> Fetching source tree...`,
      `> Framework: ${arch.details.framework}`,
      `> Resolving dependencies...`,
      `> Linking DB [${arch.details.database}]...`,
      `✔ Architecture compiled successfully.`
    ];
    setLines([]); let i = 0;
    const id = setInterval(() => { if (i < log.length) setLines(p => [...p, log[i++]]); else clearInterval(id); }, 220);
    return () => clearInterval(id);
  }, [project.id]);

  return (
    <div className="ide-terminal">
      <div className="ide-terminal__titlebar">
        <div className="ide-terminal__macdots"><span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" /></div>
        <span className="ide-terminal__title">{project.title.toLowerCase().replace(/\s+/g, '')} — arch_log</span>
      </div>
      <div className="ide-terminal__layout">
        <div className="ide-terminal__sidebar">
          <span className="sidebar-title">workspace</span>
          <div className="sidebar-tree">
            {arch.tree.map((n, i) => <div key={i} className={`tree-node${activeFile === n ? ' active' : ''}`} onClick={() => !n.startsWith('📁') && setActiveFile(n)}>{n}</div>)}
          </div>
        </div>
        <div className="ide-terminal__editor">
          <div className="editor-status"><span>console</span><span>UTF-8</span></div>
          <div className="console-output">
            {lines.map((l, i) => <div key={i} className={`console-line${l.startsWith('$') ? ' cmd' : l.startsWith('✔') ? ' success' : ''}`}>{l}</div>)}
            <div className="console-cursor" />
          </div>
          <div className="editor-details">
            <span className="detail-header">// stack summary</span>
            <div className="detail-grid">
              {[['Framework', arch.details.framework], ['Backend', arch.details.backend], ['Database', arch.details.database], ['Hosting', arch.details.hosting]].map(([k, v]) => (
                <div key={k} className="detail-item"><span className="lbl">{k}:</span><span className="val">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Floating particle dot ──────────────────────── */
function HeroParticle({ style }) {
  return <div className="hero-particle" style={style} />;
}

/* ── Main Component ─────────────────────────────── */
export default function ProjectDetails({ project }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('screen');
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [imgFading, setImgFading] = useState(false);

  // reset on project change
  useEffect(() => {
    setActiveImgIdx(0);
    setActiveTab('screen');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  // scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress((window.scrollY / h) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [project]);

  // auto-cycle images with fade
  useEffect(() => {
    if (activeTab !== 'screen' || !project.images?.length) return;
    const id = setInterval(() => {
      setImgFading(true);
      setTimeout(() => { setActiveImgIdx(p => (p + 1) % project.images.length); setImgFading(false); }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, [project.images, activeTab]);

  const changeImg = (idx) => {
    setImgFading(true);
    setTimeout(() => { setActiveImgIdx(idx); setImgFading(false); }, 300);
  };

  const handleBack = e => {
    e.preventDefault();
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleRipple = e => {
    const btn = e.currentTarget;
    const c = document.createElement('span');
    const d = Math.max(btn.clientWidth, btn.clientHeight), r = d / 2;
    c.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - btn.getBoundingClientRect().left - r}px;top:${e.clientY - btn.getBoundingClientRect().top - r}px`;
    c.classList.add('ripple');
    btn.querySelector('.ripple')?.remove();
    btn.appendChild(c);
  };

  // parse primary color
  let primaryColor = '#2563eb';
  if (project.color?.startsWith('linear-gradient')) {
    const m = project.color.match(/#[a-fA-F0-9]{3,8}/g);
    if (m?.[0]) primaryColor = m[0];
  } else if (project.color?.startsWith('#')) primaryColor = project.color;

  if (primaryColor.startsWith('#') && primaryColor.length === 9) {
    primaryColor = primaryColor.slice(0, 7);
  }

  const isMobileApp = project.category === 'Mobile Apps' || project.forcePhone === true;

  // random hero particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width: `${4 + Math.random() * 8}px`,
    height: `${4 + Math.random() * 8}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${i * 0.4}s`,
    animationDuration: `${6 + Math.random() * 8}s`,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  const containerV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const itemV = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } };
  const slideV = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } };
  const scaleV = { hidden: { opacity: 0, scale: 0.93, y: 18 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } } };

  try {
    return (
      <motion.div
        className={`project-details-page project-id-${project.id}`}
        initial="hidden" animate="visible" exit="hidden"
        variants={containerV}
        style={{ '--project-gradient': project.color, '--project-primary': primaryColor, '--project-primary-glow': `${primaryColor}18`, '--project-primary-border': `${primaryColor}30` }}
      >
        {/* Ambient orbs */}
        <div className="pd__orbs">
          <div className="pd__orb pd__orb--1" />
          <div className="pd__orb pd__orb--2" />
        </div>

        {/* Sticky Breadcrumb Nav
        <div className="pd__nav">
          <div className="pd__progress-bar" style={{ width: `${scrollProgress}%` }} />
          <div className="container">
            <a href="#/" onClick={handleBack} className="pd__back-link">
              <ArrowLeft size={14} /> Back to Home
            </a>
          </div>
        </div> */}


        {/* ── HERO ── */}
        <section className="pd__hero">
          <div className="pd__hero-mesh" />
          <div className="pd__hero-grid" />
          {particles.map((s, i) => <HeroParticle key={i} style={s} />)}

          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <motion.div className="pd__hero-content" variants={itemV} style={{ flex: 1, minWidth: '320px' }}>
                <div className="pd__hero-badges">
                  <span className="pd__hero-cat">{project.category}</span>
                  {project.tech?.map(t => <span key={t} className="pd__tech-pill">{t}</span>)}
                </div>
                <h1 className="pd__hero-title">{project.title}</h1>
                <p className="pd__hero-desc">{project.description}</p>

                {project.metrics && (
                  <div className="pd__metrics-row">
                    {project.metrics.split(/&|,/).map((m, i) => {
                      const clean = m.trim();
                      const match = clean.match(/^([\d.]+%?\s*[x★kKmM]*\+?)\s*(.*)$/i) || [null, clean, 'Metric'];
                      return (
                        <motion.div key={i} className="pd__metric-card"
                          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } } }}
                          whileHover={{ y: -4, scale: 1.04 }}>
                          <span className="pd__metric-val"><MetricValue value={match[1]} /></span>
                          <span className="pd__metric-label">{match[2]}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
              {(() => {
                const LOGO_CONFIGS = {
                  1: { path: '/images/bepositive.png', bg: '#ffffff', scale: 'scale(1.25)' },
                  2: { path: '/images/bepocart2.png', bg: '#ffffff', scale: 'scale(1.25)' },
                  3: { path: '/images/mexpo.png', bg: '#ffffff', scale: 'scale(1.3)' },
                  4: { path: '/images/bepocart1.png', bg: '#ffffff', scale: 'scale(1.25)' },
                  5: { path: '/projects/becall.png', bg: '#000000', scale: 'scale(1.45)' },
                  6: { path: '/projects/beposoft_products.png', bg: primaryColor, scale: 'scale(1.5)' },
                  7: { path: '/projects/myskates.png', bg: '#022123', scale: 'none' },
                  8: { path: '/images/qdel.png', bg: '#ffffff', scale: 'none' },
                };

                const config = LOGO_CONFIGS[project.id];
                if (!config) return null;

                return (
                  <motion.div
                    variants={scaleV}
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: config.bg,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      padding: '1.75rem',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      zIndex: 2,
                      margin: '1rem auto 0 auto',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={config.path}
                      alt={`${project.title} Logo`}
                      style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '16px',
                        objectFit: 'contain',
                        transform: config.scale,
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="pd__content section-padding">
          <div className="container">
            <div className="pd__grid">

              {/* LEFT COLUMN */}
              <div className="pd__main-col">

                {/* Overview card */}
                <motion.div className="pd__card" variants={itemV} whileHover={{ y: -4 }}>
                  <div className="pd__card-header">
                    <div className="pd__card-icon"><Terminal size={17} /></div>
                    <h3>Project Overview</h3>
                  </div>
                  <p className="pd__long-desc">{project.longDescription}</p>

                  {/* Challenge box */}
                  <div className="pd__challenge-box">
                    <div className="pd__challenge-label">
                      <Zap size={14} /> The Challenge
                    </div>
                    <p>{project.challenge}</p>
                  </div>
                </motion.div>

                {/* Solution timeline */}
                <motion.div className="pd__card" variants={itemV} whileHover={{ y: -4 }}>
                  <div className="pd__card-header">
                    <div className="pd__card-icon"><ShieldCheck size={17} /></div>
                    <h3>Our Strategic Solution</h3>
                  </div>
                  <p className="pd__solution-text">{project.solution}</p>

                  {/* Solution step pills */}
                  <div className="pd__solution-steps">
                    {['Analysis', 'Architecture', 'Implementation', 'Testing & Launch'].map((s, i) => (
                      <motion.div key={s} className="pd__solution-step"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}>
                        <span className="pd__step-num">0{i + 1}</span>
                        <span className="pd__step-name">{s}</span>
                        <CheckCircle2 size={14} className="pd__step-check" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features grid */}
                {project.features && (
                  <motion.div className="pd__features-section" variants={itemV}>
                    <h3 className="pd__section-heading">
                      <Layers size={18} /> Key Features & Deliverables
                    </h3>
                    <div className="pd__features-grid">
                      {project.features.map((feat, idx) => (
                        <motion.div key={idx} className="pd__feature-item"
                          initial={{ opacity: 0, y: 22 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}>
                          <div className="pd__feature-badge">0{idx + 1}</div>
                          <div className="pd__feature-info">
                            <h5>{feat.title}</h5>
                            <p>{feat.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tech stack section */}
                {project.tech && (
                  <motion.div className="pd__card pd__tech-card" variants={itemV}>
                    <div className="pd__card-header">
                      <div className="pd__card-icon"><Code2 size={17} /></div>
                      <h3>Technology Stack</h3>
                    </div>
                    <div className="pd__tech-grid">
                      {[
                        { Icon: Code2, label: 'Frontend', val: project.tech[0] || 'React' },
                        { Icon: Server, label: 'Backend', val: project.tech[1] || 'Node.js' },
                        { Icon: Database, label: 'Database', val: project.tech[2] || 'PostgreSQL' },
                        { Icon: Cloud, label: 'Deployment', val: 'Cloud Hosted' },
                      ].map(({ Icon, label, val }) => (
                        <div key={label} className="pd__tech-item">
                          <div className="pd__tech-icon"><Icon size={16} /></div>
                          <div>
                            <span className="pd__tech-label">{label}</span>
                            <span className="pd__tech-val">{val}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>

              {/* RIGHT COLUMN */}
              <div className="pd__side-col">

                {/* Meta summary card */}
                <motion.div className="pd__meta-card" variants={scaleV}>
                  <div className="pd__meta-header">
                    <Briefcase size={16} /> Project Summary
                  </div>
                  <ul className="pd__meta-list">
                    {[
                      { Icon: User, label: 'Client', val: project.client || 'Beposoft Partner' },
                      { Icon: Clock, label: 'Timeline', val: project.duration || 'Flexible' },
                      { Icon: Briefcase, label: 'Role', val: project.role || 'Full Stack Engineering' },
                      { Icon: Calendar, label: 'Year', val: '2025 – 2026' },
                    ].map(({ Icon, label, val }) => (
                      <li key={label}>
                        <div className="pd__meta-icon-wrap"><Icon size={15} /></div>
                        <div className="pd__meta-text">
                          <span className="label">{label}</span>
                          <span className="val">{val}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {project.url && project.url !== '#' ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="pd__visit-btn btn btn-primary" onClick={handleRipple}>
                      <span>Visit Live Site</span><ExternalLink size={13} />
                    </a>
                  ) : (
                    <div className="pd__visit-btn disabled"><Globe size={13} /><span>Internal System</span></div>
                  )}
                </motion.div>

                {/* Tab controls */}
                <div className="pd__tab-controls">
                  {[['screen', 'View Screen', Globe], ['tech', 'System Stack', Terminal]].map(([id, label, Icon]) => (
                    <button key={id} className={`pd__tab-btn${activeTab === id ? ' active' : ''}`} onClick={() => setActiveTab(id)}>
                      <Icon size={12} /><span>{label}</span>
                    </button>
                  ))}
                </div>

                {/* Device simulator */}
                <motion.div className="pd__simulator-wrapper" variants={scaleV}
                  whileHover={activeTab === 'screen' ? { rotateY: -6, rotateX: 3, scale: 1.02 } : { scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}>

                  <AnimatePresence mode="wait">
                    {activeTab === 'tech' ? (
                      <motion.div key="tech" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <IDETerminal project={project} />
                      </motion.div>
                    ) : isMobileApp ? (
                      /* ── Phone chassis ── */
                      <motion.div key="phone" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                        <div className="sim-phone">
                          <div className="sim-phone__earpiece" />
                          <div className="sim-phone__vol" />
                          <div className="sim-phone__pwr" />
                          <div className="sim-phone__screen">
                            <div className="sim-phone__status">
                              <span>9:41</span>
                              <div style={{ display: 'flex', gap: '4px' }}><span>📶</span><span>🔋</span></div>
                            </div>
                            {project.images?.length > 0 ? (
                              <div className="sim-carousel">
                                <img
                                  src={project.images[activeImgIdx]}
                                  alt={`${project.title} ${activeImgIdx + 1}`}
                                  className={`sim-img${project.contain ? ' sim-img--contain' : ''}${imgFading ? ' fading' : ''}`}
                                />
                                <button className="sim-ctrl sim-ctrl--prev" onClick={e => { e.stopPropagation(); changeImg((activeImgIdx - 1 + project.images.length) % project.images.length) }}>‹</button>
                                <button className="sim-ctrl sim-ctrl--next" onClick={e => { e.stopPropagation(); changeImg((activeImgIdx + 1) % project.images.length) }}>›</button>
                                <div className="sim-dots">
                                  {project.images.map((_, i) => <span key={i} className={`sim-dot${i === activeImgIdx ? ' active' : ''}`} onClick={e => { e.stopPropagation(); changeImg(i) }} />)}
                                </div>
                              </div>
                            ) : project.image ? (
                              <img src={project.image} alt={project.title} className={`sim-img${project.contain ? ' sim-img--contain' : ''}`} />
                            ) : (
                              <div className="sim-fallback" style={{ background: 'var(--project-gradient)' }}><h4>{project.title}</h4></div>
                            )}
                            <div className="sim-phone__home" />
                            <div className="sim-phone__badge">
                              <span className="sim-dot-live green" /><span>Live App</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── Browser chassis ── */
                      <motion.div key="browser" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ width: '100%' }}>
                        <div className="sim-browser">
                          <div className="sim-browser__header">
                            <div className="sim-browser__dots">
                              <span className="b-dot b-dot--r" /><span className="b-dot b-dot--y" /><span className="b-dot b-dot--g" />
                            </div>
                            <div className="sim-browser__addr">
                              <Globe size={9} />
                              <span>{project.url && project.url !== '#' ? project.url.replace(/https?:\/\//, '') : `${project.title.toLowerCase().replace(/\s+/g, '')}.beposoft.io`}</span>
                            </div>
                          </div>
                          <div className="sim-browser__screen">
                            {project.images?.length > 0 ? (
                              <div className="sim-carousel">
                                <img
                                  src={project.images[activeImgIdx]}
                                  alt={`${project.title} ${activeImgIdx + 1}`}
                                  className={`sim-browser__img${imgFading ? ' fading' : ''}`}
                                />
                                <button className="sim-ctrl sim-ctrl--prev" onClick={e => { e.stopPropagation(); changeImg((activeImgIdx - 1 + project.images.length) % project.images.length) }}>‹</button>
                                <button className="sim-ctrl sim-ctrl--next" onClick={e => { e.stopPropagation(); changeImg((activeImgIdx + 1) % project.images.length) }}>›</button>
                                <div className="sim-dots">
                                  {project.images.map((_, i) => <span key={i} className={`sim-dot${i === activeImgIdx ? ' active' : ''}`} onClick={e => { e.stopPropagation(); changeImg(i) }} />)}
                                </div>
                              </div>
                            ) : project.image ? (
                              <img src={project.image} alt={project.title} className="sim-browser__img" />
                            ) : (
                              <div className="sim-fallback" style={{ background: 'var(--project-gradient)' }}><h4>{project.title}</h4></div>
                            )}
                            <div className="sim-browser__badge">
                              <span className="sim-dot-live blue" /><span>Production Build</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

              </div>
            </div>

            {/* ── Bottom CTA ── */}
            <motion.div className="pd__bottom-cta" variants={itemV}>
              <div className="pd__cta-inner">
                <Sparkles size={22} className="pd__cta-icon" />
                <div>
                  <h4>Interested in building something similar?</h4>
                  <p>Let's architect your next digital breakthrough together.</p>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary pd__cta-btn"
                onClick={e => { handleRipple(e); e.preventDefault(); window.__blockScrollRestoration = true; window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 300); }}>

                <span>Get in Touch</span><ChevronRight size={15} />
              </a>
            </motion.div>

          </div>
        </section>
      </motion.div>
    );
  } catch (err) {
    return (
      <div style={{ padding: '6rem 2rem', color: '#ef4444', background: '#f1f0f4ff', position: 'relative', zIndex: 9999 }}>
        <h2>Error: {err.message}</h2>
        <a href="#/" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', background: '#3b82f6', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>Go Home</a>
      </div>
    );
  }
}
