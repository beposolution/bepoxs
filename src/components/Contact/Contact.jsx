import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { COMPANY_INFO, SERVICES } from '../../data/content';
import './Contact.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  /* ── Status: "idle" | "sending" | "success" | "error" ── */
  const [status, setStatus] = useState('idle');

  const formRef  = useRef(null);
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

  /* ── Submit handler ── */
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();          // clear all fields
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
    circle.style.top  = `${e.clientY - btn.getBoundingClientRect().top  - radius}px`;
    circle.classList.add('ripple');
    const existing = btn.querySelector('.ripple');
    if (existing) existing.remove();
    btn.appendChild(circle);
  };

  const isSending = status === 'sending';

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        {/* CTA Banner */}
        <motion.div
          className="contact__cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated decorative orbs */}
          <div className="cta__orb cta__orb--1" />
          <div className="cta__orb cta__orb--2" />
          <div className="cta__orb cta__orb--3" />
          {/* Grid overlay */}
          <div className="cta__grid" />
          {/* Shimmer ring */}
          <div className="cta__ring" />

          <div className="cta__inner">
            {/* Badge pills */}
            <div className="cta__badge-row">
              <span className="cta__badge">🚀 Fast Delivery</span>
              <span className="cta__badge">⭐ Premium Quality</span>
              <span className="cta__badge">🔒 Secure &amp; Scalable</span>
            </div>

            <h2 className="contact__cta-title">
              Ready to Build Something
              <span className="cta__title-highlight"> Amazing?</span>
            </h2>
            <p className="contact__cta-text">
              Let's transform your vision into a product that users love and businesses rely on.
              <br />From idea to launch — we've got you covered.
            </p>

            <div className="contact__cta-actions">
              <a href="#contact-form" className="cta__btn-primary" onClick={handleRipple}>
                <span className="cta__btn-glow" />
                <span className="cta__btn-content">
                  Start a Project <ArrowRight size={18} />
                </span>
              </a>
              <a href="#portfolio" className="cta__btn-secondary" onClick={handleRipple}>
                <span>View Our Work</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="cta__trust-row">
              <span className="cta__trust-item">
                <span className="cta__trust-dot" />
                Response within 24hrs
              </span>
              <span className="cta__trust-sep">·</span>
              <span className="cta__trust-item">
                <span className="cta__trust-dot" />
                Free consultation
              </span>
              <span className="cta__trust-sep">·</span>
              <span className="cta__trust-item">
                <span className="cta__trust-dot" />
                No commitment required
              </span>
            </div>
          </div>
        </motion.div>


        {/* Contact Layout */}
        <div className="contact__layout" id="contact-form">
          <motion.form
            ref={formRef}
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="contact__form-title" ref={titleRef}>
              Get in Touch
            </h3>

            {/* ── Your Name ── */}
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                className="form-group__input"
                placeholder=" "
                required
                id="contact-name"
              />
              <label className="form-group__label" htmlFor="contact-name">Your Name</label>
            </div>

            {/* ── Email Address ── */}
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                className="form-group__input"
                placeholder=" "
                required
                id="contact-email"
              />
              <label className="form-group__label" htmlFor="contact-email">Email Address</label>
            </div>

            {/* ── Service Needed ── */}
            <div className="form-group">
              <label className="form-group__select-label" htmlFor="contact-service">Service Needed</label>
              <select
                name="service_needed"
                className="form-group__select"
                required
                id="contact-service"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* ── Message ── */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-group__textarea"
                placeholder=" "
                required
                id="contact-message"
              />
              <label className="form-group__label" htmlFor="contact-message">Tell us about your project</label>
            </div>

            {/* ── Submit button ── */}
            <button
              type="submit"
              className={`btn btn-primary contact__submit${isSending ? ' loading' : ''}`}
              onClick={!isSending ? handleRipple : undefined}
              disabled={isSending}
            >
              {isSending ? (
                <span className="contact__submit-spinner" />
              ) : status === 'success' ? (
                '✓ Sent Successfully!'
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>

            {/* ── Status messages ── */}
            {status === 'success' && (
              <p className="contact__status contact__status--success">
                ✅ Your message was sent! We'll be in touch within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                ❌ Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's Talk</h3>
            <p className="contact__info-text">
              We'd love to hear about your project. Reach out and we'll respond within 24 hours.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact__info-label">Email</span>
                  <div className="contact__info-value">{COMPANY_INFO.email}</div>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact__info-label">Phone</span>
                  <div className="contact__info-value">{COMPANY_INFO.phone}</div>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact__info-label">Location</span>
                  <div className="contact__info-value">{COMPANY_INFO.location}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
