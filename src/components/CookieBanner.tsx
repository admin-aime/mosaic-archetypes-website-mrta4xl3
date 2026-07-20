import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if user hasn't made a choice
    const choice = localStorage.getItem('mosaic-cookie-consent');
    if (!choice) {
      // Small delay so it doesn't flash on initial render
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('mosaic-cookie-consent', 'accepted');
    setVisible(false);
    // Enable GA4
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    // Reload GA4 with consent
    if ((window as any)['ga-disable-G-XXXXXXXXXX']) {
      delete (window as any)['ga-disable-G-XXXXXXXXXX'];
      (window as any).gtag?.('config', 'G-XXXXXXXXXX');
    }
  }

  function decline() {
    localStorage.setItem('mosaic-cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(0, 0, 0, 0.97)',
        borderTop: '1px solid rgba(166, 119, 24, 0.3)',
        padding: '1rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
        className="cookie-banner__inner"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            width: '100%',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--colour-mosaic-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Cookie size={18} style={{ color: 'var(--colour-black)' }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                lineHeight: '1.5',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              This website uses cookies to ensure you get the best experience. By continuing, you
              agree to our use of cookies.{' '}
              <a
                href="#/privacy"
                style={{
                  color: 'var(--colour-mosaic-gold)',
                  textDecoration: 'underline',
                }}
              >
                Privacy Policy
              </a>
              {' · '}
              <a
                href="#/cookies"
                style={{
                  color: 'var(--colour-mosaic-gold)',
                  textDecoration: 'underline',
                }}
              >
                Cookie Policy
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          className="cookie-banner__buttons"
        >
          <button
            onClick={decline}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.5rem 1.25rem',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
              color: 'var(--colour-white)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--colour-mosaic-gold)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.5rem 1.25rem',
              borderRadius: 6,
              border: 'none',
              background: 'var(--colour-mosaic-gold)',
              color: 'var(--colour-black)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#8b6314';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'var(--colour-mosaic-gold)';
            }}
          >
            Accept
          </button>
        </div>
      </div>
      {/* CSS override for wider screens */}
      <style>{`
        @media (min-width: 480px) {
          .cookie-banner__inner {
            flex-direction: row;
            gap: 1.5rem;
          }
          .cookie-banner__buttons {
            width: auto;
            flex-shrink: 0;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
}
