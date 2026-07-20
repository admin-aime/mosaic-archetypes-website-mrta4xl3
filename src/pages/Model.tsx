import { useState } from 'react';
import { ArchetypeCard } from '../components/ArchetypeCard';
import { archetypes, axes } from '../data/archetypes';
import { Button } from '../components/Button';

export function Model() {
  const [selectedAxis, setSelectedAxis] = useState<string | null>(null);

  const filtered = selectedAxis
    ? archetypes.filter((a) => a.axis === selectedAxis || a.id === 'versatile')
    : archetypes;

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">The Framework</p>
          <h1 className="section__title">The Mosaic Archetype Model</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Ten distinct leadership archetypes across four quadrants — Power, Vision, Process, and
            Relationships. Every leader embodies multiple archetypes; together they form
            your unique leadership mosaic.
          </p>
        </div>
      </div>

      {/* Filter + Wheel */}
      <section className="section section--white">
        <div className="section__inner">
          <div className="two-col items-center">
            <div>
              <p className="section__label">Filter by Quadrant</p>
              <h2 className="section__title" style={{ fontSize: '2rem' }}>Explore the Archetypes</h2>
              <p className="section__body">
                Select a quadrant to see the archetypes within it, or browse all ten. Click any
                card to explore that archetype in depth.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={() => setSelectedAxis(null)}
                  className="btn"
                  style={{
                    border: `1px solid ${selectedAxis === null ? 'var(--colour-mosaic-gold)' : 'rgba(0,0,0,0.15)'}`,
                    color: selectedAxis === null ? 'var(--colour-mosaic-gold)' : 'var(--colour-black)',
                    background: selectedAxis === null ? 'rgba(166,119,24,0.08)' : 'transparent',
                    borderRadius: '999px',
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  All
                </button>
                {axes.map((axis) => (
                  <button
                    key={axis}
                    onClick={() => setSelectedAxis(axis === selectedAxis ? null : axis)}
                    className="btn"
                    style={{
                      border: `1px solid ${axis === selectedAxis ? 'var(--colour-mosaic-gold)' : 'rgba(0,0,0,0.15)'}`,
                      color: axis === selectedAxis ? 'var(--colour-mosaic-gold)' : 'var(--colour-black)',
                      background: axis === selectedAxis ? 'rgba(166,119,24,0.08)' : 'transparent',
                      borderRadius: '999px',
                      padding: '0.5rem 1.25rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {axis}
                  </button>
                ))}
              </div>
            </div>

            <div className="wheel-container reveal">
              <img
                src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/5e28fbd7-4f8a-4c6a-a8c9-fe22f7511ef9-1784557508.png"
                alt="Mosaic Leadership Archetypes® Model"
                className="wheel-image"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {filtered.map((a, i) => (
              <div key={a.id} className={`reveal stagger-${(i % 10) + 1}`}>
                <ArchetypeCard archetype={a} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center" style={{ fontFamily: 'var(--font-body)', color: 'rgba(0,0,0,0.5)' }}>
              No archetypes found for this filter.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <p className="section__label">Go Deeper</p>
          <h2 className="section__title">Ready to Discover Your Archetypes?</h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            Download the complete Mosaic Leadership Archetypes® guide for a deeper exploration
            of the framework, or book a call to discuss how Mosaic can transform your leadership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gold" href="/download">
              Download Handbook
            </Button>
            <Button variant="gold" href="/enquiry">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
