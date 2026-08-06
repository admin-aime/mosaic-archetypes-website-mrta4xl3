import { ArchetypeImageCard } from '../components/ArchetypeImageCard';
import { archetypes } from '../data/archetypes';
import { Button } from '../components/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Model() {
  useDocumentTitle('Archetype Model');

  // Only show Heroic, Maverick, and Nurturing leaders
  const displayed = archetypes.filter((a) =>
    a.id === 'heroic' || a.id === 'maverick' || a.id === 'nurturing'
  );

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <p className="section__label">The Framework</p>
          <h1 className="section__title">The Mosaic Archetype Model</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            Ten distinct leadership archetypes operating together across four quadrants – Power,
            Vision, Process, and Relationships. Every leader has a dominant archetype, their go
            to style. But the blend of traits working together within that individual forms their
            unique leadership mosaic.
          </p>
        </div>
      </div>

      {/* Wheel + Our System */}
      <section className="section section--white">
        <div className="section__inner">
          <div className="two-col items-center">
            <div>
              <p className="section__label">Our System</p>
              <h2 className="section__title" style={{ fontSize: '2rem' }}>Explore the Archetypes</h2>
              <p className="section__body">
                Click any card to explore that archetype in depth — understand the leadership
                style, strengths, and contribution each brings to your mosaic.
              </p>
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
            {displayed.map((a, i) => (
              <div key={a.id} className={`reveal stagger-${i + 1}`}>
                <ArchetypeImageCard archetype={a} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="section__body" style={{ marginBottom: '1.5rem' }}>
              Go deeper — ready to discover your archetypes?
            </p>
            <Button variant="white" href="/enquiry">
              Cross the Threshold
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
