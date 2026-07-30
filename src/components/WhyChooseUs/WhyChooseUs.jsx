import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, Compass, Award } from 'lucide-react';
import { WHY_CHOOSE_US, VISION_MISSION } from '../../data/content';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleInView(true); },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const highlightIcons = [ShieldCheck, Compass, Zap, Award, TrendingUp, CheckCircle2];

  return (
    <section className="why-us section-padding" id="why-us">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Why Partner With Us</span>
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            {WHY_CHOOSE_US.heading}
          </h2>
          <p className="section-subtitle">
            {WHY_CHOOSE_US.subheading}
          </p>
        </div>

        {/* Narrative Box */}
        <motion.div
          className="why-us__intro glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {Array.isArray(WHY_CHOOSE_US.intro) ? (
            WHY_CHOOSE_US.intro.map((para, i) => (
              <p key={i} style={{ marginBottom: i < WHY_CHOOSE_US.intro.length - 1 ? '1.25rem' : 0 }}>
                {para}
              </p>
            ))
          ) : (
            <p>{WHY_CHOOSE_US.intro}</p>
          )}
        </motion.div>

        {/* What You Can Expect & Promise */}
        <div className="why-us__layout">
          <div className="why-us__expectations-wrapper glass-card">
            <div className="why-us__expectations-header">
              <h3 className="why-us__expectations-title">When You Work With Bepoxs, You Can Expect:</h3>
              <p className="why-us__expectations-desc">Built on trust, honest advice, and shared success.</p>
            </div>

            <div className="why-us__expectations-list">
              {WHY_CHOOSE_US.expectations.map((exp, i) => (
                <motion.div
                  key={i}
                  className="why-us__expectation-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="why-us__check-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>{exp}</span>
                </motion.div>
              ))}
            </div>

            <div className="why-us__promise-footer">
              <p className="why-us__promise-text">
                At the end of the day, your success is how we measure ours. That’s why every project we take on is driven by one simple goal:
              </p>
              <p className="why-us__promise-goal" style={{ marginTop: '0.85rem', color: 'var(--electric-blue)', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.5 }}>
                To help your business grow in a way that’s meaningful, sustainable, and true to who you are.
              </p>
            </div>
          </div>

          <motion.div
            className="why-us__image-side glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="why-us__image-glow" />
            <img 
              src="/images/customer_trust.png" 
              alt="BEPOXS Customer Trust and Collaboration AI Visual" 
              className="why-us__image"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
