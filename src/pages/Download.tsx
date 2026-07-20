import { useState, FormEvent, useCallback } from 'react';
import { Button } from '../components/Button';
import { Download as DownloadIcon, CheckCircle, FileText, ArrowDown } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Download() {
  useDocumentTitle('Download Handbook');
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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'submit_form', { form_type: 'download' });
    }
  };

  const handleDirectDownload = useCallback(() => {
    // Simulated direct download — generates a placeholder PDF stub; in production serves the actual file
    const content = '%PDF-1.4\n% Placeholder — Replace with actual Mosaic Leadership Archetype Handbook PDF\n';
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mosaic-Leadership-Archetype-Handbook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_click', { asset: 'mosaic_guide' });
    }
  }, []);

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
              <h2 className="confirmation__title">Your Handbook Is Ready</h2>
              <p className="confirmation__text">
                Thank you for your interest in Mosaic Leadership Archetypes®.
              </p>

              {/* Direct download button */}
              <div style={{ marginBottom: '2rem' }}>
                <button
                  onClick={handleDirectDownload}
                  className="btn flex items-center gap-2 mx-auto"
                  style={{
                    background: 'var(--colour-mosaic-gold)',
                    color: 'var(--colour-black)',
                    border: 'none',
                    borderRadius: 6,
                    padding: '0.875rem 2rem',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <ArrowDown size={18} /> Download Handbook Now
                </button>
              </div>

              <p className="confirmation__text" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
                We've also sent a copy to <strong>{form.email}</strong>. If you don't receive it
                within a few minutes, please check your spam folder.
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
          <h1 className="section__title">Mosaic Leadership Archetype Handbook</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            A comprehensive guide to the ten leadership archetypes, leadership traits and how to apply them.
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
                    Mosaic Leadership Archetype Handbook
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
                  Understand all 10 archetypes in depth
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Explore leadership traits and behaviours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  Practical tools and real-world applications
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="form-card-dark">
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', color: 'var(--colour-white)', marginBottom: '0.5rem' }}>
                Get Your Free Handbook
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>
                Enter your details to receive the Mosaic Leadership Archetype Handbook by email.
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
                  Download the Handbook
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
