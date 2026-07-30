import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { 
  VISION_MISSION, 
  CORE_VALUES, 
  TARGET_AUDIENCE,
  BRAND_IDENTITY,
  UNIQUE_VALUE_PROPOSITION,
  VALUE_CREATION,
  CLIENT_SUCCESS
} from '../../data/content';
import './About.css';

export default function About() {
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

  return (
    <section className="about section-padding" id="about">
      <div className="about__bg-glow" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Vision & Values</span>
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            Who We Are & What Drives Us
          </h2>
          <p className="section-subtitle">
            {VISION_MISSION.brandStatement}
          </p>
        </div>

        {/* Vision & Mission Layout */}
        <div className="about__layout">
          <div className="about__text-side">
            <motion.div
              className="about__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about__card-icon">
                <LucideIcons.Eye size={28} />
              </div>
              <h3 className="about__card-title">Our Vision</h3>
              <p className="about__card-text">{VISION_MISSION.vision}</p>
            </motion.div>

            <motion.div
              className="about__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="about__card-icon">
                <LucideIcons.Target size={28} />
              </div>
              <h3 className="about__card-title">Our Mission</h3>
              <p className="about__card-text">{VISION_MISSION.mission}</p>
            </motion.div>
          </div>

          <motion.div
            className="about__image-side glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__image-glow" />
            <img 
              src="/images/digital_growth_agency.png" 
              alt="BEPOXS Digital Growth & Marketing AI Visual" 
              className="about__image"
            />
          </motion.div>
        </div>

        {/* Philosophy Banner */}
        <motion.div
          className="about__banner glass-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about__banner-badge">The Bepoxs Philosophy</div>
          <blockquote className="about__quote" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
            "{VISION_MISSION.philosophy}"
          </blockquote>
          <p className="about__philosophy-detail" style={{ fontStyle: 'italic', opacity: 0.9, fontSize: '1.05rem' }}>
            {VISION_MISSION.philosophyDetail}
          </p>
        </motion.div>

        {/* Purpose & Promise Grid */}
        <div className="about__purpose-promise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div
            className="about__purpose-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '2.5rem' }}
          >
            <div className="about__card-icon">
              <LucideIcons.Compass size={28} />
            </div>
            <h3 className="about__card-title">Bepoxs Purpose</h3>
            <p className="about__card-text">{VISION_MISSION.purpose}</p>
          </motion.div>

          <motion.div
            className="about__promise-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '2.5rem' }}
          >
            <div className="about__card-icon">
              <LucideIcons.ShieldCheck size={28} />
            </div>
            <h3 className="about__card-title">Brand Promise</h3>
            <p className="about__card-text">{VISION_MISSION.promise}</p>
          </motion.div>
        </div>

        {/* Unique Value Proposition */}
        <motion.div
          className="about__uvp glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__uvp-inner">
            <span className="about__banner-badge">{UNIQUE_VALUE_PROPOSITION.title}</span>
            <h3 className="about__uvp-intro" style={{ fontSize: 'var(--fs-h2)', color: 'var(--color-text-white)', marginTop: '1.25rem', marginBottom: '1.25rem', fontWeight: 800 }}>
              {UNIQUE_VALUE_PROPOSITION.intro} <span style={{ color: 'var(--electric-blue)' }}>{UNIQUE_VALUE_PROPOSITION.emphasis}</span>
            </h3>
            <p className="about__card-text" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              {UNIQUE_VALUE_PROPOSITION.description}
            </p>
          </div>
        </motion.div>

        {/* Value Creation & Client Success Section */}
        <div className="about__value-success-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div
            className="about__value-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '2.5rem' }}
          >
            <div className="about__card-icon">
              <LucideIcons.Sparkles size={28} />
            </div>
            <h3 className="about__card-title">{VALUE_CREATION.title}</h3>
            <p className="about__card-text">{VALUE_CREATION.text}</p>
          </motion.div>

          <motion.div
            className="about__success-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '2.5rem' }}
          >
            <div className="about__card-icon">
              <LucideIcons.CheckCircle size={28} />
            </div>
            <h3 className="about__card-title">{CLIENT_SUCCESS.title}</h3>
            <p className="about__card-text" style={{ marginBottom: '1.5rem' }}>{CLIENT_SUCCESS.intro}</p>
            <ul className="about__success-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CLIENT_SUCCESS.achievements.map((item, idx) => (
                <li key={idx} className="about__success-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: 'var(--fs-body)', color: 'var(--color-text-primary)' }}>
                  <LucideIcons.Check size={16} style={{ color: 'var(--electric-blue)', flexShrink: 0 }} />
                  <span>{item}.</span>
                </li>
              ))}
            </ul>
            <p className="about__success-outro" style={{ fontSize: 'var(--fs-small)', fontStyle: 'italic', color: 'var(--color-text-secondary)', borderTop: '1px solid rgba(217, 227, 240, 0.1)', paddingTop: '1rem' }}>{CLIENT_SUCCESS.outro}</p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="about__values-wrapper">
          <div className="about__sub-header">
            <h3 className="about__sub-title">Our Core Values</h3>
            <p className="about__sub-desc">Guided by principles that prioritize long-term value over shortcuts.</p>
          </div>

          <div className="about__values-grid">
            {CORE_VALUES.map((val, idx) => {
              const Icon = LucideIcons[val.icon] || LucideIcons.Check;
              return (
                <motion.div
                  key={val.title}
                  className="value-card glass-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="value-card__icon">
                    <Icon size={22} />
                  </div>
                  <h4 className="value-card__title">{val.title}</h4>
                  <p className="value-card__desc">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Brand Identity / Personality / Voice Section */}
        <div className="about__identity-wrapper" style={{ marginBottom: '4rem' }}>
          <div className="about__sub-header">
            <h3 className="about__sub-title">Brand Identity</h3>
            <p className="about__sub-desc">Who we are, how we present ourselves, and where we are heading.</p>
          </div>

          <div className="about__identity-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
            {/* Who We Are & Goal */}
            <motion.div
              className="identity-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ padding: '2.5rem' }}
            >
              <h4 className="value-card__title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--electric-blue)' }}>Who We Are</h4>
              <p className="about__card-text" style={{ marginBottom: '2.25rem' }}>{BRAND_IDENTITY.whoWeAre}</p>
              
              <h4 className="value-card__title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--electric-blue)' }}>Long-Term Goal</h4>
              <p className="about__card-text">{VISION_MISSION.longTermGoal}</p>
            </motion.div>

            {/* Brand Personality & Voice */}
            <div className="about__traits-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div
                className="identity-card glass-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ padding: '2.25rem' }}
              >
                <h4 className="value-card__title" style={{ marginBottom: '1.25rem' }}>Personality</h4>
                <div className="identity-card__badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {BRAND_IDENTITY.personality.map((trait) => (
                    <span key={trait} className="trait-badge" style={{ padding: '0.5rem 1.15rem', background: 'rgba(0, 184, 255, 0.08)', border: '1px solid rgba(0, 184, 255, 0.25)', borderRadius: '100px', fontSize: 'var(--fs-small)', color: 'var(--electric-blue)', fontWeight: 600 }}>
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="identity-card glass-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ padding: '2.25rem' }}
              >
                <h4 className="value-card__title" style={{ marginBottom: '1.25rem' }}>Brand Voice</h4>
                <div className="identity-card__badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {BRAND_IDENTITY.voice.map((voice) => (
                    <span key={voice} className="voice-badge" style={{ padding: '0.5rem 1.15rem', background: 'rgba(30, 144, 255, 0.08)', border: '1px solid rgba(30, 144, 255, 0.25)', borderRadius: '100px', fontSize: 'var(--fs-small)', color: 'var(--bright-azure)', fontWeight: 600 }}>
                      {voice}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Target Audience / Who We Work With */}
        <div className="about__target-wrapper">
          <div className="about__sub-header">
            <h3 className="about__sub-title">Target Audience</h3>
            <p className="about__sub-desc">{TARGET_AUDIENCE.intro}</p>
            <p className="about__sub-desc" style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.35rem', fontWeight: 600 }}>
              {TARGET_AUDIENCE.idealClientsTitle}
            </p>
          </div>

          <div className="about__audience-grid">
            {TARGET_AUDIENCE.clients.map((item, i) => (
              <motion.div
                key={i}
                className="audience-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="audience-pill__dot" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
