import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function About() {
  useDocumentTitle('About');
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">About</p>
          <h1 className="section__title">About – The Mosaic Approach</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            A sustainable future focused approach to leadership development.
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
            leadership potential. We believe every leader contains a unique pattern of archetypes
            — some expressed, some latent — and that understanding this mosaic is the foundation
            of genuine growth.
          </p>
          <p className="section__body">
            Our mission is to equip individuals, teams, and organisations with the insight and
            tools to see leadership clearly — not as a single trait to be optimised, but as a
            rich, evolving systemic pattern to be understood, balanced, and developed in order
            that leaders remain future fit.
          </p>
        </div>
      </section>

      {/* Why Mosaic Archetypes — moved from Workshops */}
      <section className="section section--black">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">The Framework</p>
          <h2 className="section__title">Why Mosaic Archetypes</h2>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Traditional leadership models flatten complexity and pigeon-hole potential. They
            label leaders as one thing — visionary, or operational, or people-focused, or
            outcome-focused — ignoring the reality that leadership, like IQ, requires range
            across multiple dimensions. The Mosaic method refuses the 'one size fits all'
            approach. Our framework and system is built on classical as well as progressive
            thinking and practice, and identifies ten distinct archetypes organised across
            four quadrants measuring how strongly each archetypal style shows up in your
            leadership practice.
          </p>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.65)' }}>
            The result is not a category but a profile that is future focused; a detailed
            personal map of your leadership strengths, preferences, blind spots, and continuous
            development opportunities. This profile informs everything from individual and team
            coaching through to team and individual recruitment and composition as well as
            organisational culture.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">The Founders</p>
          <h2 className="section__title">The Minds Behind Mosaic – The Founders</h2>
          <p className="section__body">
            Mosaic Leadership Archetypes™ is grounded in decades of hands-on leadership
            development work with executives, teams and organisations across industries and
            continents. Drawing on deep expertise in leadership psychology, organisational
            behaviour and executive coaching, the framework distils what works in practice, not
            simply what sounds compelling in theory, into a rigorous, practical and transformative
            methodology.
          </p>
          <p className="section__body">
            The framework has been shaped and refined through work with hundreds of leaders, from
            first-time managers to C-suite executives, across sectors including financial services,
            technology, healthcare and education. Every Archetype, axis and supporting tool has
            been developed through real-world application to generate meaningful insight into how
            leaders see themselves, how they contribute and how they lead.
          </p>
          <p className="section__body">
            Ian P Buckingham and Kate Hargreaves are the co-creators of the Mosaic Leadership
            Archetypes™ methodology, bringing together complementary expertise in leadership,
            organisational development, executive coaching, employee engagement, communications
            and brand.
          </p>
          <p className="section__body">
            Ian conceived the original idea, drawing on decades at the forefront of systemic
            leadership and engagement thinking. He has worked as a cross-industry consultant and
            global agency practice leader and authored three influential books at the intersection
            of HR, communications and brand.
          </p>
          <p className="section__body">
            Kate took the initial concept and helped to shape, systematise and develop it into a
            rigorous leadership methodology. An accomplished organisation development specialist,
            business leader and executive coach, she is recognised for her systemic approach to
            developing leaders, teams and organisations.
          </p>
          <p className="section__body">
            Together, drawing on their complementary Archetypal strengths, they have created an
            original, future-focused methodology that combines established leadership thinking and
            practice with their ongoing research into the characteristics leaders need to succeed
            in an increasingly complex world.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section section--black">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Core Principles</p>
          <h2 className="section__title">Core Principles</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[
              { title: 'Depth Over Simplicity', body: 'Leadership is complex. We refuse to reduce it to a four-letter code or a single label. Our framework honours that complexity while making it usable.' },
              { title: 'Evidence Over Opinion', body: 'Every archetype in the Mosaic framework is grounded in observed leadership behaviour and field-tested across hundreds of real-world applications.' },
              { title: 'Sustainable Improvement', body: 'Mosaic is not about what is wrong with your leadership. It is about what is possible — expanding range, not correcting flaws and pivoting to meet new challenges.' },
              { title: 'Context Over Dogma', body: 'There is no single "best" archetype. The right leadership pattern depends on context, challenge, and the people you lead.' },
            ].map((v, i) => (
              <div key={v.title} className={`reveal stagger-${i + 1}`}>
                <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--colour-white)' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Get in Touch</p>
          <h2 className="section__title">Contact Mosaic</h2>
          <p className="section__body">
            Whether you're exploring Mosaic for your own development, considering a programme
            for your team, or interested in becoming a certified practitioner — we'd love to
            hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div
              className="reveal stagger-1"
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
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-black)', marginBottom: '0.5rem' }}>
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
              className="reveal stagger-2"
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
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-black)', marginBottom: '0.5rem' }}>
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
              className="reveal stagger-3"
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
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colour-black)', marginBottom: '0.5rem' }}>
                Location
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'rgba(0,0,0,0.6)',
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
              Cross the Threshold
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
