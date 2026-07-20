import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';
import { Download as DownloadIcon, CheckCircle, FileText } from 'lucide-react';

export function Download() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    phone: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    // In production, submit to CRM/email/Google Sheets
    setSubmitted(true);
    // Track event: window.gtag?.('event', 'download_form_submit')
  };

  if (submitted) {
    return (
      <>
        <div className="page-header">
          <div className="page-header__texture" />
          <div className="page-header__inner">
            <p className="section__label">Download</p>
            <h1 className="section__title">Thank You</h1>
          </div>
        </div>
        <section className="section section--white">
          <div className="section__inner">
            <div className="confirmation">
              <div className="confirmation__icon">
                <CheckCircle size={32} />
              </div>
              <h2 className="confirmation__title">Your Guide Is Ready</h2>
              <p className="confirmation__text">
                Thank you for your interest in Mosaic Leadership Archetypes®. Your download link
                has been sent to <strong>{form.email}</strong>. If you don't receive it within a few
                minutes, please check your spam folder.
              </p>
              <Button variant="white" href="/">
                Return Home
              </Button>
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
          <p className="section__label">Resource</p>
          <h1 className="section__title">Download the Mosaic Archetypes Guide</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            A comprehensive overview of all eleven leadership archetypes, the three axes, and
            how to apply the Mosaic framework to your leadership development.
          </p>
        </div>
      </div>

      {/* Content + Form */}
      <section className="section section--white">
        <div className="section__inner">
          <div className="two-col">
            {/* Left: Asset description */}
            <div>
              <div
                className="flex items-center gap-3 mb-6"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(166,119,24,0.05)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(166,119,24,0.1)',
                }}
              >
                <FileText size={36} style={{ color: 'var(--colour-mosaic-gold)' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--colour-black)' }}>
                    Mosaic Leadership Archetypes® Guide
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(0,0,0,0.5)' }}>
                    PDF · 24 pages · Free
                  </p>
                </div>
              </div>

              <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--colour-black)' }}>
                What's Inside
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(0,0,0,0.65)' }}>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Full descriptions of all eleven Mosaic Leadership Archetypes®
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  The Vision · Process · Relationships axis framework explained
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Self-assessment prompts to explore your own archetype profile
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Practical guidance for applying Mosaic to team development
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Case examples of archetype combinations in real leadership contexts
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div
              style={{
                padding: '2rem',
                background: 'var(--colour-black)',
                borderRadius: '0.5rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', color: 'var(--colour-white)', marginBottom: '0.5rem' }}>
                Get Your Free Guide
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>
                Enter your details to receive the Mosaic Archetypes Guide by email.
              </p>

              <form onSubmit={handleSubmit}>
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
                    Organisation
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    placeholder="Your organisation (optional)"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--colour-white)' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: 'var(--colour-white)' }}>
                    Phone
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

                <button
                  type="submit"
                  className="btn btn--on-black w-full mt-4"
                  style={{ padding: '0.875rem 1.5rem' }}
                >
                  <DownloadIcon size={16} />
                  Download the Guide
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
