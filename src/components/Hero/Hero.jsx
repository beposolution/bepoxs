import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code2, Cpu, Database, Globe, CheckCircle, ShieldCheck } from 'lucide-react';
import './Hero.css';

const titleWords = ['We Build', 'Digital', 'Products', 'That Matter'];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const renderCode = (text) => {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    let html = line
      .replace(/(const|let|var|function|return|import|from)/g, '<span class="code-keyword">$1</span>')
      .replace(/(require)/g, '<span class="code-function">$1</span>')
      .replace(/(init|launch|createApp|deploy)/g, '<span class="code-method">$1</span>')
      .replace(/('[^']*')/g, '<span class="code-string">$1</span>')
      .replace(/(true|false)/g, '<span class="code-boolean">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>');
    return (
      <div key={i} className="code-line" dangerouslySetInnerHTML={{ __html: html || '&nbsp;' }} />
    );
  });
};

export default function Hero() {
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    const existing = btn.querySelector('.ripple');
    if (existing) existing.remove();
    btn.appendChild(circle);
  };

  const [typedCode, setTypedCode] = useState('');
  const [cpuUsage, setCpuUsage] = useState(12);
  const [memoryUsage, setMemoryUsage] = useState(142);

  useEffect(() => {
    const codeString = `const Bepoxs = require('bepoxs');

// Create premium project
const app = Bepoxs.createApp({
  design: 'premium',
  performance: 'ultra',
  responsive: true
});

// Deploy to cloud
app.deploy(); // Status: Active!`;

    let currentText = '';
    let index = 0;
    let timer;

    const typeChar = () => {
      if (index < codeString.length) {
        currentText += codeString[index];
        setTypedCode(currentText);
        index++;
        timer = setTimeout(typeChar, 30);
      } else {
        timer = setTimeout(() => {
          currentText = '';
          index = 0;
          setTypedCode('');
          typeChar();
        }, 4000);
      }
    };

    typeChar();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 8) + 8);
      setMemoryUsage(Math.floor(Math.random() * 6) + 138);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero__mesh" />
      <div className="hero__grid" />
      <div className="hero__scanner" />



      {/* Drifting radial gradient background orbs */}
      <div className="hero__orb-drift hero__orb-drift--1" />
      <div className="hero__orb-drift hero__orb-drift--2" />

      {/* Abstract geometric shapes */}
      <div className="hero__geo">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        {/* SVG Decorative concentric rings */}
        <svg className="hero__ring hero__ring--1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="var(--color-blue-300)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="50" cy="50" r="38" stroke="var(--color-blue-500)" strokeWidth="0.25" opacity="0.3" />
        </svg>

        {/* SVG Dot grid */}
        <svg className="hero__dot-grid" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotpattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="var(--color-blue-500)" opacity="0.15" />
          </pattern>
          <rect width="180" height="180" fill="url(#dotpattern)" />
        </svg>

        {/* Decorative elements */}
        <span className="hero__plus hero__plus--1">+</span>
        <span className="hero__plus hero__plus--2">+</span>
        <span className="hero__bracket hero__bracket--1">&#123;</span>
        <span className="hero__bracket hero__bracket--2">&#125;</span>
      </div>

      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="hero__badge-dot" />
              Available for new projects
            </motion.div>

            <h1 className="hero__title">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className={`hero__title-line ${i >= 1 && i <= 2 ? 'hero__title-gradient' : ''}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                >
                  {word}{' '}
                </motion.span>
              ))}
              <div className="hero__title-underline" />
            </h1>

            <motion.p
              className="hero__subtitle"
              custom={1.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              We're a team of designers and engineers who craft premium websites,
              web apps, and mobile apps for ambitious brands ready to scale.
            </motion.p>

            <motion.div
              className="hero__actions"
              custom={1.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <a href="#contact" className="btn btn-primary" onClick={handleRipple}>
                Get Started
                <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn btn-secondary" onClick={handleRipple}>
                <Briefcase size={18} />
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* Premium Right-side Visual Panels */}
          <div className="hero__visual">

            {/* Background Radar & Orbits */}
            <div className="hero__radar">
              <div className="hero__radar-ring hero__radar-ring--1" />
              <div className="hero__radar-ring hero__radar-ring--2" />
              <div className="hero__radar-ring hero__radar-ring--3" />

              <div className="hero__orbit-icon hero__orbit-icon--1">
                <Code2 size={16} />
              </div>
              <div className="hero__orbit-icon hero__orbit-icon--2">
                <Cpu size={16} />
              </div>
              <div className="hero__orbit-icon hero__orbit-icon--3">
                <Database size={16} />
              </div>
              <div className="hero__orbit-icon hero__orbit-icon--4">
                <Globe size={16} />
              </div>
            </div>

            {/* 1. Code Editor Widget */}
            <motion.div
              className="hero__code-window"
              initial={{ opacity: 0, x: -40, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero__code-header">
                <div className="hero__code-dots">
                  <span className="hero__code-dot hero__code-dot--red" />
                  <span className="hero__code-dot hero__code-dot--yellow" />
                  <span className="hero__code-dot hero__code-dot--green" />
                </div>
                <div className="hero__code-title">bepoxs.config.js</div>
                <span className="hero__code-lang">JavaScript</span>
              </div>
              <div className="hero__code-body">
                <pre>
                  <code>
                    {renderCode(typedCode)}
                    <span className="code-cursor">|</span>
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* 2. Active Deployment / Metrics Widget */}
            <motion.div
              className="hero__chart-window"
              initial={{ opacity: 0, x: 40, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero__chart-header">
                <div className="hero__chart-title">System Status</div>
                <div className="hero__chart-status">
                  <span className="hero__chart-status-dot animate-pulse" />
                  Active
                </div>
              </div>

              <div className="hero__pipeline">
                <div className="hero__pipeline-step success">
                  <CheckCircle size={14} className="hero__pipeline-icon" />
                  <span>Build Success</span>
                </div>
                <div className="hero__pipeline-step success">
                  <CheckCircle size={14} className="hero__pipeline-icon" />
                  <span>Tests Passed</span>
                </div>
                <div className="hero__pipeline-step active">
                  <div className="hero__pipeline-spinner" />
                  <span>Deploying Live</span>
                </div>
              </div>

              <div className="hero__metrics-grid">
                <div className="hero__metric-box">
                  <span className="hero__metric-label">CPU Usage</span>
                  <span className="hero__metric-val">{cpuUsage}%</span>
                </div>
                <div className="hero__metric-box">
                  <span className="hero__metric-label">Memory</span>
                  <span className="hero__metric-val">{memoryUsage}MB</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Floating Success Pill */}
            <motion.div
              className="hero__stat-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <ShieldCheck size={16} className="hero__stat-icon" />
              <span className="hero__stat-text">Production Ready</span>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-mouse" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}
