import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Services from './components/Services/Services';
import Stats from './components/Stats/Stats';
import Process from './components/Process/Process';
import Portfolio from './components/Portfolio/Portfolio';
import Technologies from './components/Technologies/Technologies';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ProjectDetails from './components/Portfolio/ProjectDetails';
import { PROJECTS } from './data/content';

function App() {
  const [currentProject, setCurrentProject] = useState(null);
  const currentProjectRef = useRef(null);
  const scrollPosRef = useRef(0);
  
  // Keep currentProjectRef in sync with currentProject state to avoid closure issues in the listener
  useEffect(() => {
    currentProjectRef.current = currentProject;
  }, [currentProject]);

  // Custom Cursor Refs
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = parseInt(hash.replace('#/project/', ''), 10);
        const project = PROJECTS.find(p => p.id === projectId);
        if (project) {
          // If we are currently on the home page, save the scroll position
          if (!currentProjectRef.current) {
            scrollPosRef.current = window.scrollY;
          }
          setCurrentProject(project);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      
      setCurrentProject(null);

      // If returning to home, restore scroll position after components mount
      // If returning to home, always scroll to top
      if (currentProjectRef.current) {
        if (window.__blockScrollRestoration) {
          window.__blockScrollRestoration = false;
        } else {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // IntersectionObserver Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [currentProject]);

  // Custom Cursor follow-mouse tracking
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const moveCursor = (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      ring.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleHoverStart = () => {
      ring.classList.add('hovered');
    };

    const handleHoverEnd = () => {
      ring.classList.remove('hovered');
    };

    window.addEventListener('mousemove', moveCursor);

    // Dynamic selection of interactive elements for cursor resizing
    const interactives = document.querySelectorAll('a, button, select, input, textarea, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [currentProject]);

  return (
    <>
      {/* Custom follow cursor elements */}
      <div className="custom-cursor">
        <div className="custom-cursor__dot" ref={cursorDotRef} />
        <div className="custom-cursor__ring" ref={cursorRingRef} />
      </div>

      <Background />
      <ScrollProgress />
      <Navbar currentProject={currentProject} />
      <main>
<AnimatePresence mode="sync">
            {currentProject ? (
            <motion.div
              key="details"
             initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectDetails project={currentProject} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
             initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Hero />
              <Marquee />
              <div className="reveal-on-scroll">
                <Services />
              </div>
              <div className="reveal-on-scroll">
                <Stats />
              </div>
              <div className="reveal-on-scroll">
                <Process />
              </div>
              <div className="reveal-on-scroll">
                <Portfolio />
              </div>
              <div className="reveal-on-scroll">
                <Testimonials />
              </div>
              <div className="reveal-on-scroll">
                <Technologies />
              </div>
              <div className="reveal-on-scroll">
                <Contact />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
