import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { STATS } from '../../data/content';
import './Stats.css';

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <motion.div
      className="stat-card"
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stat-card__number">
        {count}{stat.suffix}
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__bar" />
    </motion.div>
  );
}

export default function Stats() {
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

  return (
    <section className="stats section-padding" id="stats">
      <div className="stats__bg" />
      <div className="container stats__inner">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            Numbers Speak
          </h2>
          <p className="section-subtitle">
            Trusted by ambitious companies worldwide to deliver results that matter.
          </p>
        </div>

        <div className="stats__grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
