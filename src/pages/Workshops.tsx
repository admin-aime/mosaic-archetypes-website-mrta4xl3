import { Button } from '../components/Button';
import { Users, Monitor, Clock, Award, Target, BarChart3, CheckCircle } from 'lucide-react';

export function Workshops() {
  const workshops = [
    {
      title: 'Mosaic Discovery',
      duration: 'Half Day',
      format: 'In-Person or Virtual',
      description:
        'An immersive introduction to the Mosaic Leadership Archetypes®. Participants complete a self-assessment, explore their personal archetype profile, and begin mapping their development journey. Ideal for teams and leadership cohorts.',
      outcomes: [
        'Understand your personal leadership mosaic',
        'Identify dominant and dormant archetypes',
        'Create a personal development action plan',
        'Build shared language for leadership conversations',
      ],
    },
    {
      title: 'Mosaic Deep Dive',
      duration: 'Full Day',
      format: 'In-Person',
      description:
        'A comprehensive exploration of all eleven archetypes with in-depth peer feedback, experiential exercises, and scenario-based application. Participants leave with a detailed leadership map and practical strategies for growth.',
      outcomes: [
        'Master the full Mosaic framework',
        'Receive structured peer feedback',
        'Practice archetype flexibility in simulations',
        'Develop team-level mosaic awareness',
      ],
    },
    {
      title: 'Mosaic Leadership Journey',
      duration: '3–6 Months',
      format: 'Blended (Virtual + In-Person)',
      description:
        'A sustained leadership development programme combining workshops, one-to-one coaching, 360-degree feedback, and applied projects. Designed for senior leaders and high-potential talent ready for transformative growth.',
      outcomes: [
        'Sustained behavioural change',
        '360-degree feedback integration',
        'Executive coaching sessions',
        'Capstone leadership project',
        'Ongoing progress measurement',
      ],
    },
    {
      title: 'Mosaic Team Alignment',
      duration: 'Custom',
      format: 'In-Person or Virtual',
      description:
        'A team-focused programme that maps the collective mosaic of a leadership team, revealing complementary strengths, potential gaps, and dynamics that shape team performance. Includes facilitated dialogue and action planning.',
      outcomes: [
        'Team mosaic profile',
        'Gap and overlap analysis',
        'Team development roadmap',
        'Improved collaboration and trust',
      ],
    },
  ];

  const benefits = [
    { icon: Target, text: 'Precision: development targeted to your actual archetype profile, not generic advice' },
    { icon: BarChart3, text: 'Measurable: track archetype shifts over time with repeatable assessment' },
    { icon: Users, text: 'Scalable: from individual coaching to enterprise-wide leadership transformation' },
    { icon: Award, text: 'Credible: grounded in rigorous framework design and field-tested methodology' },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Development</p>
          <h1 className="section__title">Workshops & Programmes</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            From discovery to mastery — Mosaic workshops bring the archetypes to life through
            experiential learning, practical application, and sustained development.
          </p>
        </div>
      </div>

      {/* Workshop Types */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="section__label">Programmes</p>
          <h2 className="section__title">Workshop Formats</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="workshop-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--colour-black)' }}>
                  {w.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="badge badge--duration"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-subheader)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '0.25rem 0.625rem',
                      borderRadius: 999,
                      background: 'rgba(166, 119, 24, 0.1)',
                      color: 'var(--colour-mosaic-gold)',
                      border: '1px solid rgba(166, 119, 24, 0.25)',
                    }}
                  >
                    <Clock size={12} /> {w.duration}
                  </span>
                  {w.format === 'In-Person' && (
                    <span
                      className="badge badge--in-person"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-subheader)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '0.25rem 0.625rem',
                        borderRadius: 999,
                        background: 'rgba(166, 119, 24, 0.15)',
                        color: '#5a3e0c',
                        border: '1px solid rgba(166, 119, 24, 0.4)',
                      }}
                    >
                      <Monitor size={12} /> In Person
                    </span>
                  )}
                  {w.format === 'In-Person or Virtual' && (
                    <>
                      <span
                        className="badge badge--in-person"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-subheader)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          padding: '0.25rem 0.625rem',
                          borderRadius: 999,
                          background: 'rgba(166, 119, 24, 0.15)',
                          color: '#5a3e0c',
                          border: '1px solid rgba(166, 119, 24, 0.4)',
                        }}
                      >
                        <Monitor size={12} /> In Person
                      </span>
                      <span
                        className="badge badge--virtual"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-subheader)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          padding: '0.25rem 0.625rem',
                          borderRadius: 999,
                          background: 'rgba(0, 0, 0, 0.05)',
                          color: 'rgba(0, 0, 0, 0.6)',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <Monitor size={12} /> Virtual
                      </span>
                    </>
                  )}
                  {w.format === 'Blended (Virtual + In-Person)' && (
                    <>
                      <span
                        className="badge badge--in-person"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-subheader)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          padding: '0.25rem 0.625rem',
                          borderRadius: 999,
                          background: 'rgba(166, 119, 24, 0.15)',
                          color: '#5a3e0c',
                          border: '1px solid rgba(166, 119, 24, 0.4)',
                        }}
                      >
                        <Monitor size={12} /> In Person
                      </span>
                      <span
                        className="badge badge--virtual"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-subheader)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          padding: '0.25rem 0.625rem',
                          borderRadius: 999,
                          background: 'rgba(0, 0, 0, 0.05)',
                          color: 'rgba(0, 0, 0, 0.6)',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <Monitor size={12} /> Virtual
                      </span>
                    </>
                  )}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(0,0,0,0.65)', marginBottom: '1.5rem' }}>
                  {w.description}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', color: 'var(--colour-black)' }}>
                    Outcomes
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {w.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(0,0,0,0.65)' }}
                      >
                        <CheckCircle size={16} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 2, flexShrink: 0 }} />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--black">
        <div className="section__inner">
          <p className="section__label">Why Mosaic</p>
          <h2 className="section__title">Benefits & Outcomes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.text} className="flex gap-4 items-start">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'var(--colour-mosaic-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--colour-black)' }} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.7)' }}>
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <p className="section__label">Get Started</p>
          <h2 className="section__title">Find the Right Programme</h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            Every organisation and leader is different. Get in touch to discuss which Mosaic
            programme best fits your context, goals, and budget.
          </p>
          <Button variant="gold" href="/enquiry">
            Enquire Now
          </Button>
        </div>
      </section>
    </>
  );
}
