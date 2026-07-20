import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

const LOGO_TOP = 'https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/749318a9-bf24-4de6-b086-059a6af59ff3-1784557285.png';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="logo" onClick={closeMobile}>
          <img
            src={LOGO_TOP}
            alt="Mosaic Leadership Archetypes"
            className="logo__image"
          />
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
            Download Handbook
          </Button>
          <Button variant="black" href="/login" className="btn--login">
            Login
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
            Download Handbook
          </Button>
          <Button variant="black" href="/login" onClick={closeMobile} className="btn--login">
            Login
          </Button>
        </div>
      )}
    </header>
  );
}
