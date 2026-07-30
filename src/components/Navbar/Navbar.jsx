import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/content';
import './Navbar.css';

export default function Navbar({ currentProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Combined scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  // Section observer to track active section
  useEffect(() => {
    if (currentProject) {
      setActiveSection('');
      return;
    }

    const sections = ['services', 'about', 'why-us', 'technologies', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollBottom = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScrollBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollBottom);
    };
  }, [currentProject]);

  useEffect(() => {
    const handleHash = () => {
      setMobileOpen(false);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

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

  const handleNavLinkClick = (e, href) => {
    const isDetails = window.location.hash.startsWith('#/project/');

    if (href === '#' || href === '#/') {
      e.preventDefault();
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileOpen(false);
      return;
    }

    if (isDetails) {
      e.preventDefault();
      window.__blockScrollRestoration = true;
      window.location.hash = '#/';
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, null, href);
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#/" onClick={(e) => handleNavLinkClick(e, '#')} className="navbar__logo">
          <img src="/bepo-xs.png" alt="Bepoxs Logo" className="navbar__logo-img" />
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link${isActive ? ' active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => { handleRipple(e); handleNavLinkClick(e, '#contact'); }}
          >
            Start Your Journey
          </a>
        </div>

        <button
          className={`navbar__toggle${mobileOpen ? ' active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile${mobileOpen ? ' open' : ''}`}>
        <div className="navbar__mobile-links">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__mobile-link${isActive ? ' active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          className="btn btn-primary navbar__mobile-cta"
          onClick={(e) => { handleRipple(e); handleNavLinkClick(e, '#contact'); closeMobile(); }}
        >
          Get Started
        </a>
      </div>

      <div
        className={`navbar__overlay${mobileOpen ? ' visible' : ''}`}
        onClick={closeMobile}
      />
    </nav>
  );
}
