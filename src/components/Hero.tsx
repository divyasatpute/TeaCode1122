import React from 'react';
import { ChevronRight, Mail, Star } from 'lucide-react';

interface HeroProps {
  onNotifyClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotifyClick, onContactClick }) => {
  return (
    <div className="hero-wrapper" role="main">
      {/* Pill Badge matching screenshot: ⭐ Transforming Tech Careers */}
      <div className="hero-pill-badge" role="status">
        <span className="badge-star" aria-hidden="true">
          <Star size={16} fill="#facc15" stroke="#facc15" />
        </span>
        <span>Under Development</span>
      </div>

      {/* Hero Headline matching screenshot gradient typography */}
      <h1 className="hero-title">
        We’re Launching Very Soon
      </h1>

      {/* Subheading with user's exact requested message */}
      <p className="hero-description">
        We’re currently working on the website and will be going live very soon. 
        Thank you!
      </p>

      {/* Buttons matching screenshot: Get Started > and View Services */}
      <div className="hero-actions">
        <button 
          id="btn-get-notified"
          className="btn-primary"
          onClick={onNotifyClick}
          aria-label="Get notified when the website launches"
        >
          <span>Get Notified</span>
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>

        <button 
          id="btn-contact-us"
          className="btn-secondary"
          onClick={onContactClick}
          aria-label="Contact us"
        >
          <Mail size={17} />
          <span>Get in Touch</span>
        </button>
      </div>
    </div>
  );
};
