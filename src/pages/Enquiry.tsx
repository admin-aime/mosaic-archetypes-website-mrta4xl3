import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, ShoppingBag } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Enquiry() {
  useDocumentTitle('Start the Journey');
  const [submitted, setSubmitted] = useState(false);
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [brochureForm, setBrochureForm] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'submit_form', { form_type: 'enquiry' });
    }
  };

  const handleBrochureSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!brochureForm.name || !brochureForm.email) return;
    setBrochureSubmitted(true);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'submit_form', { form_type: 'brochure_download' });
    }
  };

  const books = [
    {
      title: 'Brand Engagement',
      author: 'Ian P Buckingham',
      description: 'How to make your brand truly live inside your organisation — a practical guide to aligning brand promise with employee experience.',
    },
    {
      title: 'Culture, Leadership, and the Brand',
      author: 'Ian P Buckingham',
      description: 'Exploring the critical intersection of organisational culture, authentic leadership, and brand identity in driving sustainable performance.',
    },
    {
      title: 'The Engagement Manifesto',
      author: 'Ian P Buckingham',
      description: 'A systemic approach to employee engagement — moving beyond quick fixes to build organisations where people genuinely want to contribute.',
    },
  ];

  if (submitted) {
    return (
      <>
        <div className="page-header">
          <div className="page-header__texture" />
          <div className="page-header__inner">
            <p className="section__label">Connect</p>
            <h1 className="section__title">Thank You</h1>
          </div>
        </div>
        <section className="section section--white">
          <div className="section__inner">
            <div className="confirmation">
              <div className="confirmation__icon">
                <CheckCircle size={32} />
              </div>
              <h2 className="confirmation__title">Your Enquiry Has Been Received</h2>
              <p className="confirmation__text">
                Thank you for reaching out, <strong>{form.name}</strong>. A member of the Mosaic
                team will respond to <strong>{form.email}</strong> within two business days.
                We look forward to exploring how Mosaic can support your leadership development.
              </p>
              <Link to="/" className="btn btn--on-black" style={{ display: 'inline-block' }}>
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Connect</p>
          <h1 className="section__title">Start the Journey</h1>
        </div>
      </div>

      {/* Section 1 — Book a Call */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--font-header)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '0.5rem',
            color: 'var(--colour-black)',
          }}>
            Ready to discover your leadership destiny?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            textAlign: 'center',
            color: 'rgba(0,0,0,0.55)',
            marginBottom: '2.5rem',
          }}>
            Complete the form and a member of the Mosaic team will be in touch to discuss
            how we can support your leadership development.
          </p>

          <form
            onSubmit={handleSubmit}
            className="form-card-dark"
          >
            <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', color: 'var(--colour-white)', marginBottom: '2rem' }}>
              Send Us a Message
            </h3>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                Full Name *
              </label>
              <input
                type="text"
                className="form-input"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                Email Address *
              </label>
              <input
                type="email"
                className="form-input"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                Phone Number
              </label>
              <input
                type="tel"
                className="form-input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Your phone number (optional)"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                Message *
              </label>
              <textarea
                className="form-input"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your interest in Mosaic..."
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)', minHeight: 140 }}
              />
            </div>

            <button
              type="submit"
              className="btn btn--on-black w-full mt-2"
              style={{ padding: '0.875rem 1.5rem' }}
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Section 2 — Download the Brochure */}
      <section className="section section--black">
        <div className="section__inner" style={{ maxWidth: '700px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <BookOpen size={36} style={{ color: 'var(--colour-mosaic-gold)', marginBottom: '1rem' }} />
            <h2 style={{
              fontFamily: 'var(--font-header)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: 'var(--colour-white)',
              marginBottom: '0.5rem',
            }}>
              Download the Brochure
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
            }}>
              Enter your details below to download the Mosaic Leadership Archetypes® brochure
              and explore the full framework in detail.
            </p>
          </div>

          {brochureSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle size={48} style={{ color: 'var(--colour-mosaic-gold)', marginBottom: '1rem' }} />
              <h3 style={{
                fontFamily: 'var(--font-header)',
                fontSize: '1.5rem',
                color: 'var(--colour-white)',
                marginBottom: '0.5rem',
              }}>
                Thank You
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'rgba(255,255,255,0.6)',
              }}>
                Your brochure download is on its way to <strong style={{ color: 'var(--colour-white)' }}>{brochureForm.email}</strong>.
                In the meantime, explore the site to learn more about the Mosaic framework.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleBrochureSubmit}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '2rem',
              }}
            >
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={brochureForm.name}
                  onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                  placeholder="Your full name"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                  Role / Title *
                </label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={brochureForm.role}
                  onChange={(e) => setBrochureForm({ ...brochureForm, role: e.target.value })}
                  placeholder="Your role or job title"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  className="form-input"
                  required
                  value={brochureForm.email}
                  onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                  placeholder="you@example.com"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn--on-black w-full mt-1"
                style={{ padding: '0.875rem 1.5rem' }}
              >
                Download Brochure
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 3 — Books & Merchandise */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '900px' }}>
          {/* Books */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <BookOpen size={36} style={{ color: 'var(--colour-mosaic-gold)', marginBottom: '1rem' }} />
            <h2 style={{
              fontFamily: 'var(--font-header)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: 'var(--colour-black)',
              marginBottom: '0.5rem',
            }}>
              Books by the Founders
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(0,0,0,0.5)',
            }}>
              Explore the thinking that shaped the Mosaic framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {books.map((book) => (
              <div
                key={book.title}
                style={{
                  background: '#f8f8f8',
                  border: '1px solid rgba(0,0,0,0.08)',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Placeholder book cover */}
                <div style={{
                  width: '120px',
                  height: '170px',
                  background: `linear-gradient(135deg, #333 0%, #555 50%, #333 100%)`,
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  <BookOpen size={32} style={{ color: 'rgba(255,255,255,0.4)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-header)',
                  fontSize: '1.25rem',
                  color: 'var(--colour-black)',
                  marginBottom: '0.25rem',
                }}>
                  {book.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--colour-mosaic-gold)',
                  marginBottom: '0.75rem',
                }}>
                  {book.author}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  lineHeight: '1.5',
                  color: 'rgba(0,0,0,0.55)',
                  marginBottom: '1.25rem',
                  flex: 1,
                }}>
                  {book.description}
                </p>
                <button
                  className="btn btn--on-black"
                  style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}
                >
                  Order a Copy
                </button>
              </div>
            ))}
          </div>

          {/* Merchandise */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: '#f8f8f8',
            border: '1px solid rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}>
            <ShoppingBag size={32} style={{ color: 'var(--colour-mosaic-gold)', marginBottom: '0.75rem' }} />
            <h3 style={{
              fontFamily: 'var(--font-header)',
              fontSize: '1.5rem',
              color: 'var(--colour-black)',
              marginBottom: '0.5rem',
            }}>
              Mosaic Merchandise
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'rgba(0,0,0,0.55)',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              Our merchandise collection is coming soon. Sign up for updates or enquire
              about early access for existing customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
