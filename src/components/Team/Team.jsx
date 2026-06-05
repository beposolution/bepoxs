import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../../data/content';
import './Team.css';

/* Inline social SVGs since lucide-react doesn't include brand icons */
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Team() {
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
    <section className="team section-padding" id="team">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            Meet the Experts
          </h2>
          <p className="section-subtitle">
            A passionate team of designers, engineers, and strategists dedicated to your success.
          </p>
        </div>

        <div className="team__grid">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="team-card__avatar">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <span className="team-card__role">{member.role}</span>
              <p className="team-card__bio">{member.bio}</p>
              <div className="team-card__socials">
                <a href={member.linkedin} className="team-card__social-link" aria-label={`${member.name} LinkedIn`}>
                  <LinkedinIcon />
                </a>
                <a href={member.github} className="team-card__social-link" aria-label={`${member.name} GitHub`}>
                  <GithubIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
