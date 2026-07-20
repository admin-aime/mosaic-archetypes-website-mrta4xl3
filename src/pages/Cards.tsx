import { useState } from 'react';
import { archetypes } from '../data/archetypes';
import { Button } from '../components/Button';
import {
  Compass,
  Star,
  Zap,
  Shield,
  Lightbulb,
  Key,
  BookOpen,
  Building2,
  Heart,
  Flame,
  Users,
  Package,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  versatile: Compass,
  heroic: Star,
  enterprising: Zap,
  reluctant: Shield,
  innovative: Lightbulb,
  guardian: Key,
  sagelike: BookOpen,
  architect: Building2,
  nurturing: Heart,
  maverick: Flame,
};

type CardSet = 'women' | 'men';

export function Cards() {
  const [activeSet, setActiveSet] = useState<CardSet>('women');

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Resources</p>
          <h1 className="section__title">Archetype Cards</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Physical archetype cards for workshops, coaching, and self-reflection. Available in
            two distinct sets designed for different audiences and contexts.
          </p>
        </div>
      </div>

      {/* Set Toggle + Cards Grid */}
      <section className="section section--white">
        <div className="section__inner">
          {/* Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <p className="section__label" style={{ marginBottom: '0.25rem' }}>Choose Set</p>
              <h2 className="section__title" style={{ fontSize: '2rem', marginBottom: 0 }}>
                {activeSet === 'women' ? "Women's Set" : "Men's Set"}
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveSet('women')}
                className="btn flex items-center gap-2"
                style={{
                  border: `1px solid ${activeSet === 'women' ? 'var(--colour-mosaic-gold)' : 'rgba(0,0,0,0.15)'}`,
                  color: activeSet === 'women' ? 'var(--colour-mosaic-gold)' : 'var(--colour-black)',
                  background: activeSet === 'women' ? 'rgba(166,119,24,0.08)' : 'transparent',
                  borderRadius: '999px',
                  padding: '0.625rem 1.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Users size={16} /> Women's Set
              </button>
              <button
                onClick={() => setActiveSet('men')}
                className="btn flex items-center gap-2"
                style={{
                  border: `1px solid ${activeSet === 'men' ? 'var(--colour-mosaic-gold)' : 'rgba(0,0,0,0.15)'}`,
                  color: activeSet === 'men' ? 'var(--colour-mosaic-gold)' : 'var(--colour-black)',
                  background: activeSet === 'men' ? 'rgba(166,119,24,0.08)' : 'transparent',
                  borderRadius: '999px',
                  padding: '0.625rem 1.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Users size={16} /> Men's Set
              </button>
            </div>
          </div>

          {/* Cards Grid — rendered as physical card placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((a) => {
              const Icon = iconMap[a.id];
              return (
                <div
                  key={a.id}
                  className="card"
                  style={{
                    border: '1px solid rgba(166,119,24,0.25)',
                    borderRadius: '0.75rem',
                    background: activeSet === 'women'
                      ? 'linear-gradient(135deg, #fdf8f0 0%, #faf5ea 40%, #f8f0e0 100%)'
                      : 'linear-gradient(135deg, #f5f5f5 0%, #f0f0f0 40%, #e8e8e8 100%)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    padding: '1.75rem 1.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Card decorative strip */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: 'var(--colour-mosaic-gold)',
                    }}
                  />

                  {/* Set label */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      fontFamily: 'var(--font-subheader)',
                      fontSize: '0.5625rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(0,0,0,0.3)',
                      background: 'rgba(166,119,24,0.08)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '999px',
                    }}
                  >
                    {activeSet === 'women' ? "Women's" : "Men's"}
                  </span>

                  <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                    {Icon && (
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: 'rgba(166,119,24,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1rem',
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--colour-mosaic-gold)' }} />
                      </div>
                    )}

                    <p
                      style={{
                        fontFamily: 'var(--font-subheader)',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--colour-mosaic-gold)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {a.axis}
                    </p>

                    <h3 className="card__title" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                      {a.leaderType} Leader
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-subheader)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--colour-mosaic-gold)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {a.role}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6875rem',
                        color: 'rgba(0,0,0,0.6)',
                        letterSpacing: '0.08em',
                        lineHeight: '1.5',
                      }}
                    >
                      {a.tagline}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'rgba(0,0,0,0.5)',
                        lineHeight: '1.5',
                        marginTop: '0.75rem',
                        borderTop: '1px solid rgba(166,119,24,0.15)',
                        paddingTop: '0.75rem',
                      }}
                    >
                      {a.description.length > 120
                        ? a.description.slice(0, 120) + '…'
                        : a.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Physical sets information */}
      <section className="section section--black">
        <div className="section__inner">
          <p className="section__label">Physical Cards</p>
          <h2 className="section__title" style={{ fontSize: '2rem' }}>
            Two Distinct Sets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Women's Set */}
            <div
              style={{
                background: 'rgba(166,119,24,0.05)',
                border: '1px solid rgba(166,119,24,0.15)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--colour-mosaic-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Users size={18} style={{ color: 'var(--colour-black)' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-header)',
                    fontSize: '1.25rem',
                    color: 'var(--colour-white)',
                  }}
                >
                  Women's Set
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: '1rem',
                }}
              >
                Designed for women's leadership development programmes, coaching engagements,
                and peer-group reflection. The card visuals and language have been carefully
                calibrated to resonate with the experiences and contexts of women leaders.
              </p>
              <div className="flex items-center gap-3">
                <Package size={16} style={{ color: 'var(--colour-mosaic-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-subheader)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  10 cards · 120 × 80mm · Gold foil accents
                </span>
              </div>
            </div>

            {/* Men's Set */}
            <div
              style={{
                background: 'rgba(166,119,24,0.05)',
                border: '1px solid rgba(166,119,24,0.15)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--colour-mosaic-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Users size={18} style={{ color: 'var(--colour-black)' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-header)',
                    fontSize: '1.25rem',
                    color: 'var(--colour-white)',
                  }}
                >
                  Men's Set
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: '1rem',
                }}
              >
                Tailored for men's leadership cohorts, executive programmes, and individual
                coaching. The card design and archetype framing speak directly to the challenges
                and aspirations common in men's leadership development journeys.
              </p>
              <div className="flex items-center gap-3">
                <Package size={16} style={{ color: 'var(--colour-mosaic-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-subheader)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  10 cards · 120 × 80mm · Gold foil accents
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <h2 className="section__title">Order Archetype Cards</h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            Cards are available to workshop participants and Mosaic-certified practitioners.
            Get in touch to discuss licensing and bulk orders for your organisation.
          </p>
          <Button variant="gold" href="/enquiry">
            Enquire Now
          </Button>
        </div>
      </section>
    </>
  );
}
