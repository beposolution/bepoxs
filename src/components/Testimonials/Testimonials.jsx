import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';
import './Testimonials.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const titleRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);
  const intervalRef = useRef(null);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, nextSlide]);

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
    <section className="testimonials section-padding" id="testimonials">
      <div className="testimonials__bg-pattern" />
      <div className="container testimonials__inner">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2
            className={`section-title${titleInView ? ' in-view' : ''}`}
            ref={titleRef}
          >
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the companies we've helped grow.
          </p>
        </div>

        <motion.div
          className="testimonials__carousel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="testimonial-card__star" fill="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-card__quote">{t.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="testimonial-card__name">{t.name}</span>
                  {t.role || t.company ? (
                    <span className="testimonial-card__role">
                      {t.role} {t.role && t.company ? 'at' : ''} {t.company}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
