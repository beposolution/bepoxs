import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { PROCESS_STEPS } from '../../data/content';
import './Process.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProcessBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="process-bg-wrapper">
      {/* Morphing color blobs */}
      <motion.div
        className="process-bg-blob process-bg-blob--1"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="process-bg-blob process-bg-blob--2"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="process-bg-blob process-bg-blob--3"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 40, 50, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating SVG elements */}
      <svg className="process-bg-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.08)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.02)" />
          </linearGradient>
        </defs>

        {/* Animated grid lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${15 * i + 10}%`}
            y1="0%"
            x2={`${15 * i + 10}%`}
            y2="100%"
            stroke="url(#line-grad)"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              strokeWidth: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating tech nodes / geometric elements */}
        {[...Array(12)].map((_, i) => {
          const size = 10 + (i % 3) * 8;
          const initialX = 8 + (i * 8.5);
          const initialY = 15 + ((i * 7.5) % 70);

          return (
            <motion.g
              key={`node-${i}`}
              initial={{ x: `${initialX}%`, y: `${initialY}%`, opacity: 0.1 }}
              animate={{
                y: [`${initialY}%`, `${initialY - 8}%`, `${initialY + 6}%`, `${initialY}%`],
                x: [`${initialX}%`, `${initialX + 3}%`, `${initialX - 2}%`, `${initialX}%`],
                opacity: [0.1, 0.25, 0.15, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {i % 3 === 0 ? (
                // Floating plus sign
                <path
                  d={`M-${size / 2} 0 H${size / 2} M0 -${size / 2} V${size / 2}`}
                  stroke="rgba(37, 99, 235, 0.4)"
                  strokeWidth="1.5"
                />
              ) : i % 3 === 1 ? (
                // Floating circle
                <circle
                  r={size / 2}
                  fill="none"
                  stroke="rgba(37, 99, 235, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              ) : (
                // Floating square/diamond
                <rect
                  x={-size / 2}
                  y={-size / 2}
                  width={size}
                  height={size}
                  fill="none"
                  stroke="rgba(37, 99, 235, 0.25)"
                  strokeWidth="1.5"
                  transform="rotate(45)"
                />
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process section-padding" id="process">
      {/* Background Animations */}
      <ProcessBackground />

      <div className="container">

        {/* Section Label */}
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="process__label">Our Workflow</span>
          <h2 className="process__heading">How We Work</h2>
          <p className="process__subheading">
            A transparent, step-by-step process designed to deliver quality results on time.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className={`process__timeline${inView ? ' in-view' : ''}`}
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* The continuous chain line — pure CSS, always aligned */}
          <div className="process__chain-line" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = LucideIcons[step.icon] || LucideIcons.Circle;
            return (
              <motion.div
                key={step.step}
                className="process__step"
                variants={stepVariants}
                whileHover="hover"
              >
                {/* Icon node with number */}
                <div className="process__node-wrapper">
                  <motion.div
                    className="process__node"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </motion.div>
                  <div className="process__node-ring" />
                  <div className="process__node-glow" />
                  <span className="process__node-num">0{step.step}</span>
                </div>

                {/* Card */}
                <motion.div
                  className="process__card"
                  whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(37,99,235,0.14)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <span className="process__card-badge">Step 0{step.step}</span>
                  <h3 className="process__card-title">{step.title}</h3>
                  <p className="process__card-desc">{step.description}</p>
                  <div className="process__card-line" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
