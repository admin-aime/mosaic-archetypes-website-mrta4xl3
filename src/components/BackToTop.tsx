import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 99,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--colour-mosaic-gold)',
        border: 'none',
        color: 'var(--colour-black)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.background = '#8b6314';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.background = 'var(--colour-mosaic-gold)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
