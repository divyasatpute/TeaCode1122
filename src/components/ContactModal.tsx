import React, { useState } from 'react';
import { X, Mail, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSuccessToast }) => {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'azfaralam.ops@gmail.com';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      onSuccessToast('Email address copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="contact-heading">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <div className="modal-icon-badge" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)' }}>
          <MessageSquare size={28} />
        </div>

        <h2 id="contact-heading" className="modal-title">
          Get In Touch
        </h2>

        <p className="modal-subtitle">
          Have questions or business inquiries ahead of our launch? We'd love to connect with you.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} color="#f472b6" />
            <span style={{ fontWeight: 600, color: '#ffffff' }}>{contactEmail}</span>
          </div>

          <button
            onClick={handleCopy}
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            title="Copy email to clipboard"
            aria-label="Copy email"
          >
            {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <button
          className="btn-primary"
          onClick={onClose}
          style={{ width: '100%', padding: '12px' }}
        >
          Back to Site
        </button>
      </div>
    </div>
  );
};
