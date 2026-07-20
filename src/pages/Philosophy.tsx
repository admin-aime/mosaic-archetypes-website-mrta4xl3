import { Button } from '../components/Button';
import { Lightbulb, Layers, Target, Users } from 'lucide-react';

export function Philosophy() {
  const pillars = [
    {
      icon: Layers,
      title: 'Multi-Dimensional Leadership',
      body: 'Every leader operates across Power, Vision, Process, and Relationships — not one dimension but all four simultaneously. Mosaic maps these dimensions to reveal the full picture of leadership capability.',
    },
    {
      icon: Lightbulb,
      title: 'Archetypes, Not Types',
      body: 'Unlike reductive personality tests that place people in boxes, Mosaic recognises that every leader embodies multiple archetypes. Your mosaic is unique — a blend of strengths that shifts with context and grows with development.',
    },
    {
      icon: Target,
      title: 'Precision Development',
      body: 'Generic leadership programmes fail because they treat every leader the same. Mosaic enables targeted development: strengthen dormant archetypes, balance overused ones, and build the leadership range your context demands.',
    },
    {
      icon: Users,
      title: 'Collective Leadership',
      body: 'The most effective organisations don\'t rely on a single heroic leader. They build leadership mosaics across teams — complementary archetypes that cover the full spectrum of Power, Vision, Process, and Relationships.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">Our Methodology</p>
          <h1 className="section__title">The Mosaic Philosophy</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Leadership is not a single trait. It is a pattern — a mosaic of capabilities,
            tendencies, and potential. Our framework reveals the complete picture.
          </p>
        </div>
      </div>

      {/* Core Framework */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="section__label">Core Framework</p>
          <h2 className="section__title">Why Mosaic Matters</h2>
          <p className="section__body">
            Traditional leadership models flatten complexity. They label leaders as one thing —
            visionary, or operational, or people-focused — ignoring the reality that effective
            leadership requires range across all dimensions. Mosaic refuses that trade-off. Our
            framework identifies ten distinct archetypes organised across four quadrants, and
            measures how strongly each archetype shows up in your leadership.
          </p>
          <p className="section__body">
            The result is not a category but a fingerprint: a detailed, personal map of your
            leadership strengths, blind spots, and development opportunities. This map informs
            everything from individual coaching to team composition to organisational culture
            transformation.
          </p>
        </div>
      </section>

      {/* The Circumplex Model */}
      <section className="section section--black">
        <div className="section__inner">
          <p className="section__label">The Circumplex Model</p>
          <h2 className="section__title">A Compass for Leadership</h2>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            The Mosaic Leadership System is built on a circumplex model with four quadrants
            representing different Influencer Themes. Ten leadership archetypes are positioned
            around the rim, reflecting different combinations of behavioural traits.
          </p>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Think of it as a compass for leadership: your position on the circle shows your
            natural style, and your ability to move around the circle demonstrates your
            leadership range and adaptability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {/* Power */}
            <div className="reveal stagger-1" style={{ borderLeft: '3px solid var(--colour-mosaic-gold)', paddingLeft: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>Power</h3>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--colour-mosaic-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Authority · Drive · Commercial Energy
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>
                <strong>Traits:</strong> Producing, Catalysing
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                <strong>Focus:</strong> Establishing authority and driving commercial outcomes
              </p>
            </div>

            {/* Vision */}
            <div className="reveal stagger-2" style={{ borderLeft: '3px solid var(--colour-mosaic-gold)', paddingLeft: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>Vision</h3>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--colour-mosaic-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Direction · Sense-Making · Transformation
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>
                <strong>Traits:</strong> Interpreting, Analysing
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                <strong>Focus:</strong> Seeing possibilities and driving meaningful change
              </p>
            </div>

            {/* Process */}
            <div className="reveal stagger-3" style={{ borderLeft: '3px solid var(--colour-mosaic-gold)', paddingLeft: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>Process</h3>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--colour-mosaic-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Delivery · Reliability · Discipline
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>
                <strong>Traits:</strong> Orchestrating, Systemising
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                <strong>Focus:</strong> Getting things done consistently and efficiently
              </p>
            </div>

            {/* Relationships */}
            <div className="reveal stagger-4" style={{ borderLeft: '3px solid var(--colour-mosaic-gold)', paddingLeft: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>Relationships</h3>
              <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--colour-mosaic-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Trust · Engagement · Development
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>
                <strong>Traits:</strong> Supporting, Engaging
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                <strong>Focus:</strong> Building connections and developing people
              </p>
            </div>
          </div>

          {/* Diagram */}
          <div className="model-diagram mt-12">
            <div className="wheel-container reveal" style={{ flexShrink: 0 }}>
              <img
                src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/5e28fbd7-4f8a-4c6a-a8c9-fe22f7511ef9-1784557508.png"
                alt="Mosaic Leadership Archetypes® Model"
                className="wheel-image"
              />
            </div>
            <div className="model-axes" style={{ flex: 1 }}>
              <div className="model-axis">
                <span className="model-axis__label">Power</span>
                <div className="model-axis__bar" />
              </div>
              <div className="model-axis">
                <span className="model-axis__label">Vision</span>
                <div className="model-axis__bar" />
              </div>
              <div className="model-axis">
                <span className="model-axis__label">Process</span>
                <div className="model-axis__bar" />
              </div>
              <div className="model-axis">
                <span className="model-axis__label">Relationships</span>
                <div className="model-axis__bar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="section__label">How It Is Applied</p>
          <h2 className="section__title">Four Pillars of Application</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`reveal stagger-${i + 1} flex gap-4`}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'var(--colour-mosaic-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: 'var(--colour-black)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--colour-black)' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: '1.5', color: 'rgba(0,0,0,0.65)' }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <p className="section__label">Next Step</p>
          <h2 className="section__title">Ready to Explore Your Mosaic?</h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            Discover your leadership archetypes and unlock your full potential with a Mosaic
            workshop or one-to-one coaching.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gold" href="/workshops">
              Explore Workshops
            </Button>
            <Button variant="gold" href="/enquiry">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
