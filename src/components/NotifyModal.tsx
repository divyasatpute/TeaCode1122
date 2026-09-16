import React, { useState, useEffect, useRef } from 'react';
import { X, Bell, Mail, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose, onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setError('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const stored = localStorage.getItem('teacode_waitlist') || '[]';
      const list = JSON.parse(stored);
      if (!list.includes(email.trim())) {
        list.push(email.trim());
        localStorage.setItem('teacode_waitlist', JSON.stringify(list));
      }
    } catch {
      // Ignore storage errors in restricted iframe environments
    }

    // Fire celebratory confetti!
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ec4899', '#a855f7', '#3b82f6', '#facc15']
    });

    setIsSubmitted(true);
    onSuccessToast(`Thank you! We'll notify ${email.trim()} the instant we go live.`);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-icon-badge" aria-hidden="true">
              <Bell size={28} />
            </div>

            <h2 id="modal-heading" className="modal-title">
              Be the First to Know
            </h2>

            <p className="modal-subtitle">
              Join our VIP list to receive exclusive early access and launch updates the moment we deploy.
            </p>

            <form onSubmit={handleSubmit} className="notify-form">
              <div className="input-group">
                <Mail size={18} className="input-icon" />
                <input 
                  ref={inputRef}
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="notify-input"
                  aria-invalid={!!error}
                  required
                />
              </div>

              {error && (
                <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'left' }}>
                  {error}
                </p>
              )}

              <button type="submit" className="modal-submit-btn">
                <span>Notify Me</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-check-icon">
              <Check size={32} strokeWidth={3} />
            </div>
            <h2 className="modal-title" style={{ fontSize: '1.5rem' }}>
              You're On The List!
            </h2>
            <p className="modal-subtitle" style={{ marginBottom: '1.5rem' }}>
              We've saved your spot. Watch your inbox for our launch announcement very soon.
            </p>
            <button 
              className="btn-primary" 
              onClick={onClose}
              style={{ width: '100%', padding: '12px' }}
            >
              Got It, Thanks!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
