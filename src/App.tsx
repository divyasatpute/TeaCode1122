import { useState } from 'react';
import { Hero } from './components/Hero';
import { NotifyModal } from './components/NotifyModal';
import { ContactModal } from './components/ContactModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <>
      {/* Background Lighting & Atmospheric Ambiance matching screenshot */}
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="ambient-grid" />
      </div>

      {/* Pure Single Hero Section - Centered & Non-scrollable */}
      <Hero 
        onNotifyClick={() => setIsNotifyOpen(true)} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Interactive Modals */}
      <NotifyModal 
        isOpen={isNotifyOpen} 
        onClose={() => setIsNotifyOpen(false)} 
        onSuccessToast={triggerToast} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        onSuccessToast={triggerToast} 
      />

      {/* Feedback Toast */}
      {toastMessage && (
        <aside className="toast-notice" role="status" aria-live="polite">
          <CheckCircle2 size={20} color="#4ade80" />
          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#ffffff' }}>
            {toastMessage}
          </span>
        </aside>
      )}
    </>
  );
}

export default App;
