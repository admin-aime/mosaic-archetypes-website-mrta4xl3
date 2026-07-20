import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { to: '/model', label: 'Archetype Model' },
    { to: '/philosophy', label: 'Philosophy' },
    { to: '/workshops', label: 'Workshops' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="site-header__texture" />
      <div className="site-header__gradient" />
      <div className="site-header__inner">
        <Link to="/" className="no-underline" onClick={closeMobile}>
          <span className="logo__text">MOSAIC® LEADERSHIP ARCHETYPES®</span>
        </Link>

        <nav className="main-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={isActive(link.to) ? { color: 'var(--colour-mosaic-gold)' } : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Button variant="black" href="/enquiry">
            Book a Call
          </Button>
          <Button variant="black" href="/download">
            Download Guide
          </Button>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobile}
              style={isActive(link.to) ? { color: 'var(--colour-mosaic-gold)' } : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="black" href="/enquiry" onClick={closeMobile}>
            Book a Call
          </Button>
          <Button variant="black" href="/download" onClick={closeMobile}>
            Download Guide
          </Button>
        </div>
      )}
    </header>
  );
}
