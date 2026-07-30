import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code2, Cpu, Database, Globe, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import './Hero.css';

const titleWords = ['Every', 'Brand', 'Has A', 'Story.'];

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
      .replace(/(createPartnership|scaleSustainably|launchCampaign)/g, '<span class="code-method">$1</span>')
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
  const [activeAdReach, setActiveAdReach] = useState(15.2);

  useEffect(() => {
    const codeString = `const Bepoxs = require('bepoxs-growth');

// Every Story Deserves to Grow.
const partner = Bepoxs.createPartnership({
  vision: 'Future-Ready Digital Growth',
  pillars: ['Branding', 'Strategy', 'Performance', 'Websites'],
  philosophy: 'Creativity with Purpose'
});

// Launch unified growth engine
partner.scaleSustainably(); // Status: Trusted Brand Built!`;

    let currentText = '';
    let index = 0;
    let timer;

    const typeChar = () => {
      if (index < codeString.length) {
        currentText += codeString[index];
        setTypedCode(currentText);
        index++;
        timer = setTimeout(typeChar, 25);
      } else {
        timer = setTimeout(() => {
          currentText = '';
          index = 0;
          setTypedCode('');
          typeChar();
        }, 4500);
      }
    };

    typeChar();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdReach((prev) => +(prev + (Math.random() * 0.1 - 0.04)).toFixed(1));
    }, 2500);
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

        <svg className="hero__ring hero__ring--1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="var(--electric-blue)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="50" cy="50" r="38" stroke="var(--bright-azure)" strokeWidth="0.25" opacity="0.3" />
        </svg>

        <svg className="hero__dot-grid" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotpattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="var(--electric-blue)" opacity="0.18" />
          </pattern>
          <rect width="180" height="180" fill="url(#dotpattern)" />
        </svg>

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
              <Sparkles size={14} style={{ color: 'var(--electric-blue)' }} />
              Future-Ready Digital Growth
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
              At Bepoxs, we combine branding, content, performance marketing, and strategy
              into one unified growth engine to help ambitious businesses build brands people trust and remember.
            </motion.p>

            <motion.div
              className="hero__actions"
              custom={1.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <a href="#contact" className="btn btn-primary" onClick={handleRipple}>
                Start Your Journey
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn btn-secondary" onClick={handleRipple}>
                <Sparkles size={18} />
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right Visual Panel */}
          <div className="hero__visual">
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

            {/* Code Editor Widget */}
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
                <div className="hero__code-title">bepoxs.growth.js</div>
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

            {/* Active Metrics Widget */}
            <motion.div
              className="hero__chart-window"
              initial={{ opacity: 0, x: 40, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero__chart-header">
                <div className="hero__chart-title">Growth System</div>
                <div className="hero__chart-status">
                  <span className="hero__chart-status-dot animate-pulse" />
                  Active
                </div>
              </div>

              <div className="hero__pipeline">
                <div className="hero__pipeline-step success">
                  <CheckCircle size={14} className="hero__pipeline-icon" />
                  <span>Strategy Aligned</span>
                </div>
                <div className="hero__pipeline-step success">
                  <CheckCircle size={14} className="hero__pipeline-icon" />
                  <span>Creativity Active</span>
                </div>
                <div className="hero__pipeline-step active">
                  <div className="hero__pipeline-spinner" />
                  <span>Scaling ROI</span>
                </div>
              </div>

              <div className="hero__metrics-grid">
                <div className="hero__metric-box">
                  <span className="hero__metric-label">Ad Reach</span>
                  <span className="hero__metric-val">{activeAdReach}M+</span>
                </div>
                <div className="hero__metric-box">
                  <span className="hero__metric-label">Avg ROI</span>
                  <span className="hero__metric-val">+250%</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Success Pill */}
            <motion.div
              className="hero__stat-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <ShieldCheck size={16} className="hero__stat-icon" />
              <span className="hero__stat-text">Partner Focused</span>
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
