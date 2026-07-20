import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';
import { CheckCircle, Phone, Mail } from 'lucide-react';

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // In production, submit to CRM/email/Google Sheets
    setSubmitted(true);
    // Track event: window.gtag?.('event', 'enquiry_form_submit')
  };

  if (submitted) {
    return (
      <>
        <div className="page-header">
          <div className="page-header__texture" />
          <div className="page-header__inner">
            <p className="section__label">Enquiry</p>
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
          <p className="section__label">Connect</p>
          <h1 className="section__title">Enquire Now</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Interested in Mosaic workshops, coaching, or leadership development? Fill in the form
            and we'll be in touch within two business days.
          </p>
        </div>
      </div>

      {/* Form */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '700px' }}>
          <div className="two-col mb-10">
            <div className="flex gap-3 items-start">
              <Phone size={20} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                  Call Us
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(0,0,0,0.6)' }}>
                  +44 (0) 20 0000 0000
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Mail size={20} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--colour-black)', marginBottom: '0.25rem' }}>
                  Email Us
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(0,0,0,0.6)' }}>
                  hello@mosaicleadership.com
                </p>
              </div>
            </div>
          </div>

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
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
