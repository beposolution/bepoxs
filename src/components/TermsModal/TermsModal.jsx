import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { TERMS_AND_CONDITIONS } from '../../data/content';
import './TermsModal.css';

export default function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="terms-modal-overlay" onClick={onClose}>
          <motion.div
            className="terms-modal glass-card"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="terms-modal__header">
              <div className="terms-modal__title-row">
                <div className="terms-modal__icon">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="terms-modal__title">Terms & Conditions</h3>
                  <p className="terms-modal__subtitle">Built on trust, honesty, and clear communication.</p>
                </div>
              </div>
              <button className="terms-modal__close" onClick={onClose} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Intro */}
            <div className="terms-modal__intro">
              <p>At Bepoxs, we believe great partnerships are built on trust, honesty, and clear communication.</p>
              <p>These terms aren’t here to complicate things they’re here to help both of us work together smoothly and create the best possible results.</p>
            </div>

            {/* Content List */}
            <div className="terms-modal__content">
              {TERMS_AND_CONDITIONS.map((item) => (
                <div key={item.num} className="terms-item">
                  <span className="terms-item__num">{item.num < 10 ? `0${item.num}` : item.num}</span>
                  <div className="terms-item__body">
                    <h4 className="terms-item__title">{item.title}</h4>
                    <p className="terms-item__detail">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="terms-modal__footer">
              <div className="terms-modal__footer-note">
                <ShieldCheck size={18} className="terms-modal__shield" />
                <span>Thank you for trusting Bepoxs. We look forward to growing your brand with honesty, creativity, and purpose.</span>
              </div>
              <button className="btn btn-primary" onClick={onClose}>
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
