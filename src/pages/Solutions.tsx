import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Solutions() {
  useDocumentTitle('Solutions');

  const tiers = [
    {
      name: 'Silver Experience',
      subtitle: 'Insight & Awareness',
      bestForTitle: 'Best for',
      bestFor: [
        'Team away days',
        'Departmental development days',
        'New and emerging teams',
        'Leadership programme modules',
        'Introducing the Mosaic Leadership Archetypes™ methodology',
        'Building self-awareness and mutual understanding',
      ],
      overview: 'The Silver Experience provides an engaging introduction to the Mosaic Leadership Archetypes™ methodology. Participants gain insight into their individual leadership preferences, explore the diversity of styles within their team and begin to build a shared language around strengths, contributions and development opportunities.',
      overviewNote: 'The Silver Experience is delivered by an Accredited Mosaic Leadership Archetypes™ Facilitator.',
      programmeTitle: 'Team Development Workshop',
      programmeIntro: 'An interactive and engaging team experience focused on:',
      programmeItems: [
        'Understanding individual Leadership Archetypes',
        'Recognising and appreciating different leadership styles',
        'Exploring the team\'s collective strengths',
        'Identifying development opportunities',
        'Improving communication and collaboration',
      ],
      outcomesTitle: 'Outcomes',
      outcomesIntro: 'Teams leave with:',
      outcomes: [
        'Greater self-awareness',
        'A better understanding of colleagues',
        'Stronger communication',
        'Increased appreciation of difference',
        'A shared language for leadership and teamwork',
      ],
    },
    {
      name: 'Gold Experience',
      subtitle: 'Team Development & Effectiveness',
      bestForTitle: 'Best for',
      bestFor: [
        'Leadership and management teams',
        'Established teams seeking greater impact',
        'High-potential teams',
        'Team effectiveness initiatives',
        'Improving collaboration and performance',
        'Developing future leadership capability',
      ],
      overview: 'The Gold Experience is our signature team development intervention. Combining individual insight, team dynamics and future-focused leadership thinking, it helps teams understand how they operate collectively, identify what may be limiting their effectiveness and agree what they need to do to achieve greater impact.',
      overviewNote: 'The Gold Experience is designed and delivered by Kate Hargreaves and Ian Buckingham, Mosaic\'s founders and the creators of the Mosaic Leadership Archetypes™ methodology.',
      programmeTitle: 'Bespoke Team Development Programme',
      programmeIntro: 'An in-depth, tailored team development experience, delivered at a carefully selected external venue and focused on:',
      programmeItems: [
        'Understanding individual and collective leadership preferences',
        'Exploring team strengths and blind spots',
        'Understanding the team\'s phase and stage of development',
        'Strengthening team effectiveness',
        'Improving collaboration and communication',
        'Identifying future leadership capability requirements',
        'Agreeing practical development priorities',
      ],
      outcomesTitle: 'Outcomes',
      outcomesIntro: 'Teams leave with:',
      outcomes: [
        'Deeper individual and collective awareness',
        'Stronger team relationships',
        'Increased trust and collaboration',
        'Greater team effectiveness',
        'Clearer development priorities',
        'Enhanced future leadership capability',
        'Practical commitments for improving team performance',
      ],
    },
    {
      name: 'Platinum Experience',
      subtitle: 'Strategic Leadership & Organisational Transformation',
      bestForTitle: 'Best for',
      bestFor: [
        'Executive teams',
        'Boards',
        'Senior leadership teams',
        'Leadership transitions',
        'Organisational transformation',
        'Significant strategic challenges',
        'Succession planning',
        'Future capability development',
      ],
      overview: 'The Platinum Experience is our flagship and most bespoke leadership intervention. Designed for executive and senior leadership teams facing significant opportunities, challenges or transitions, it connects individual leadership insight and collective team awareness with strategic thinking, organisational capability and practical action. Every aspect of the experience is customised around the organisation\'s context, ambitions and priorities.',
      overviewNote: 'The Platinum Experience is personally designed and delivered by Kate Hargreaves and Ian Buckingham, creators and custodians of the Mosaic Leadership Archetypes™ methodology.',
      programmeTitle: 'Strategic Leadership Roundtable',
      programmeIntro: 'A premium, highly tailored strategic experience focused on:',
      programmeItems: [
        'The organisation\'s strategic context and priorities',
        'Individual and collective leadership contribution',
        'Executive team dynamics',
        'Significant organisational challenges and opportunities',
        'Leadership adaptation',
        'Succession and future capability',
        'Sustainable organisational performance',
        'Translating insight into strategic action',
      ],
      outcomesTitle: 'Outcomes',
      outcomesIntro: 'Leadership teams leave with:',
      outcomes: [
        'Greater strategic alignment',
        'Enhanced individual and collective leadership effectiveness',
        'Stronger executive collaboration',
        'Clearer succession and capability priorities',
        'Greater readiness for future challenges',
        'Stronger organisational resilience',
        'Agreed actions for immediate application',
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Solutions</p>
          <h1 className="section__title">Team Experiences &amp; Leadership Development Solutions</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            The Mosaic Leadership Archetypes™ methodology is designed to support leaders, teams
            and organisations at different stages of their development journey.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__body" style={{ fontSize: '1.0625rem' }}>
            Our experiences and development solutions combine individual insight, team
            understanding and practical application to create stronger leaders, healthier
            teams and more sustainable organisational performance.
          </p>
          <p className="section__body" style={{ fontSize: '1.0625rem' }}>
            Whether you are looking for an engaging introduction to the methodology, a bespoke
            team development programme or a strategic executive intervention, every experience
            provides a shared language for understanding how people lead, contribute and
            create impact.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      {tiers.map((tier, i) => (
        <section key={tier.name} className={`section ${i % 2 === 0 ? 'section--black' : 'section--white'}`}>
          <div className="section__inner" style={{ maxWidth: '900px' }}>
            <p className="section__label">{tier.name}</p>
            <h2 className="section__title" style={i % 2 === 0 ? {} : { color: 'var(--colour-black)' }}>
              {tier.subtitle}
            </h2>

            {/* Best For */}
            <div className="mt-6 mb-6">
              <p style={{
                fontFamily: 'var(--font-subheader)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--colour-mosaic-gold)',
                marginBottom: '0.75rem',
              }}>
                {tier.bestForTitle}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {tier.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)',
                    }}
                  >
                    <CheckCircle size={14} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Overview */}
            <h3 style={{
              fontFamily: 'var(--font-header)',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              color: i % 2 === 0 ? 'var(--colour-white)' : 'var(--colour-black)',
            }}>
              Overview
            </h3>
            <p className="section__body" style={i % 2 === 0 ? { color: 'rgba(255,255,255,0.7)' } : {}}>
              {tier.overview}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontStyle: 'italic',
              lineHeight: '1.5',
              color: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
              marginBottom: '2rem',
            }}>
              {tier.overviewNote}
            </p>

            {/* Programme */}
            <h3 style={{
              fontFamily: 'var(--font-header)',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              color: i % 2 === 0 ? 'var(--colour-white)' : 'var(--colour-black)',
            }}>
              {tier.programmeTitle}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              lineHeight: '1.5',
              color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)',
              marginBottom: '0.75rem',
            }}>
              {tier.programmeIntro}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '2rem' }}>
              {tier.programmeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)',
                  }}
                >
                  <CheckCircle size={14} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Outcomes */}
            <h3 style={{
              fontFamily: 'var(--font-header)',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              color: i % 2 === 0 ? 'var(--colour-white)' : 'var(--colour-black)',
            }}>
              {tier.outcomesTitle}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              lineHeight: '1.5',
              color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)',
              marginBottom: '0.75rem',
            }}>
              {tier.outcomesIntro}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {tier.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)',
                  }}
                >
                  <CheckCircle size={14} style={{ color: 'var(--colour-mosaic-gold)', marginTop: 3, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <p className="section__label">Get Started</p>
          <Button variant="gold" href="/enquiry">
            Cross the Threshold
          </Button>
        </div>
      </section>
    </>
  );
}
