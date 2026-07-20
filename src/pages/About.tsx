import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">About</p>
          <h1 className="section__title">About Mosaic</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Redefining how the world understands and develops leadership — one mosaic at a time.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Our Mission</p>
          <h2 className="section__title">Leadership, Fully Seen</h2>
          <p className="section__body">
            Mosaic Leadership Archetypes® exists to replace reductive, single-dimensional
            leadership models with a framework that captures the full complexity of human
            leadership potential. We believe every leader contains a unique pattern of
            archetypes — some expressed, some latent — and that understanding this mosaic
            is the foundation of genuine growth.
          </p>
          <p className="section__body">
            Our mission is to equip individuals, teams, and organisations with the insight
            and tools to see leadership clearly — not as a single trait to be optimised, but
            as a rich, evolving pattern to be understood, balanced, and developed.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section section--black">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">The Founder</p>
          <h2 className="section__title">The Mind Behind Mosaic</h2>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Mosaic Leadership Archetypes® was developed through decades of hands-on leadership
            development work with executives, teams, and organisations across industries and
            continents. Drawing on deep experience in leadership psychology, organisational
            behaviour, and executive coaching, the Mosaic framework distils what actually
            works — not what sounds good in theory — into a practical, rigorous, and
            transformative methodology.
          </p>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.65)' }}>
            The framework has been refined through application with hundreds of leaders, from
            first-time managers to C-suite executives, in sectors ranging from financial
            services to technology, healthcare to education. Every archetype, every axis,
            and every tool has been tested in the field and proven to deliver insight that
            changes how leaders see themselves — and how they lead.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Our Values</p>
          <h2 className="section__title">What We Stand For</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[
              { title: 'Depth Over Simplicity', body: 'Leadership is complex. We refuse to reduce it to a four-letter code or a single label. Our framework honours that complexity while making it usable.' },
              { title: 'Evidence Over Opinion', body: 'Every archetype in the Mosaic framework is grounded in observed leadership behaviour and field-tested across hundreds of real-world applications.' },
              { title: 'Growth Over Fixing', body: 'Mosaic is not about what is wrong with your leadership. It is about what is possible — expanding range, not correcting flaws.' },
              { title: 'Context Over Dogma', body: 'There is no single "best" archetype. The right leadership pattern depends on context, challenge, and the people you lead.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--colour-black)' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(0,0,0,0.65)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section section--black">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Get in Touch</p>
          <h2 className="section__title">Contact Mosaic</h2>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Whether you're exploring Mosaic for your own development, considering a programme
            for your team, or interested in becoming a certified practitioner — we'd love to
            hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div
              style={{
                background: 'rgba(166,119,24,0.05)',
                border: '1px solid rgba(166,119,24,0.15)',
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--colour-mosaic-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}
              >
                <Mail size={18} style={{ color: 'var(--colour-black)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-white)', marginBottom: '0.5rem' }}>
                Email
              </p>
              <a
                href="mailto:hello@mosaic-archetypes.co.uk"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--colour-mosaic-gold)',
                  textDecoration: 'none',
                }}
              >
                hello@mosaic-archetypes.co.uk
              </a>
            </div>

            <div
              style={{
                background: 'rgba(166,119,24,0.05)',
                border: '1px solid rgba(166,119,24,0.15)',
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--colour-mosaic-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}
              >
                <Phone size={18} style={{ color: 'var(--colour-black)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-white)', marginBottom: '0.5rem' }}>
                Phone
              </p>
              <a
                href="tel:+442070000000"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--colour-mosaic-gold)',
                  textDecoration: 'none',
                }}
              >
                +44 (0)20 7000 0000
              </a>
            </div>

            <div
              style={{
                background: 'rgba(166,119,24,0.05)',
                border: '1px solid rgba(166,119,24,0.15)',
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--colour-mosaic-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}
              >
                <MapPin size={18} style={{ color: 'var(--colour-black)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-white)', marginBottom: '0.5rem' }}>
                Location
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Hexham, UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <h2 className="section__title">Let's Talk</h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            Ready to explore how Mosaic can transform leadership in your organisation?
            Get in touch to start the conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gold" href="/enquiry">
              Enquire Now
            </Button>
            <Button variant="gold" href="/download">
              Download Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
