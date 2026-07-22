import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { archetypes } from '../data/archetypes';
import { archetypeImages } from '../data/archetypeImages';
import { ArchetypeImageCard } from '../components/ArchetypeImageCard';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const quadrantNames: Record<string, string> = {
  Power: 'Power',
  Vision: 'Vision',
  Process: 'Process',
  Relationships: 'Relationships',
};

export function ArchetypeDetail() {
  const { id } = useParams<{ id: string }>();
  const archetype = archetypes.find((a) => a.id === id);
  const [variant, setVariant] = useState<'male' | 'female'>('male');

  useDocumentTitle(archetype ? `${archetype.leaderType} Leader` : 'Archetype');

  if (!archetype) {
    return (
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <h1 className="section__title">Archetype Not Found</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            The archetype you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Button variant="black" href="/model">Back to Model</Button>
          </div>
        </div>
      </div>
    );
  }

  const images = archetypeImages[archetype.id];
  const src = variant === 'male' ? images.male : images.female;

  // Related archetypes: same quadrant, excluding self
  const related = archetypes.filter(
    (a) => a.axis === archetype.axis && a.id !== archetype.id
  );

  return (
    <>
      {/* ======== HERO — Asymmetric split layout ======== */}
      <div className="detail-hero">
        <div className="detail-hero__texture" />
        <div className="detail-hero__gradient" />

        <div className="detail-hero__inner">
          {/* ---- Left: Text ---- */}
          <div className="detail-hero__text-col reveal">
            <Link to="/model" className="detail-hero__back">
              <ArrowLeft size={14} /> Back to All Archetypes
            </Link>

            <span className="detail-hero__quadrant">{archetype.axis}</span>

            <h1 className="detail-hero__title">
              {archetype.leaderType} Leader
            </h1>

            <p className="detail-hero__role">{archetype.role}</p>
            <p className="detail-hero__tagline">{archetype.tagline}</p>

            <p className="detail-hero__intro">
              {archetype.description.split('.')[0]}.
            </p>
          </div>

          {/* ---- Right: Image + M/F toggle ---- */}
          <div className="detail-hero__image-col reveal stagger-1">
            <div className="detail-hero__image-wrapper">
              <img
                src={src}
                alt={`${archetype.leaderType} Leader (${variant === 'male' ? 'Male' : 'Female'})`}
                className="detail-hero__image"
              />
            </div>

            <div className="detail-hero__toggle">
              <button
                className={`detail-hero__toggle-btn${variant === 'male' ? ' detail-hero__toggle-btn--active' : ''}`}
                onClick={() => setVariant('male')}
                aria-pressed={variant === 'male'}
                aria-label="Male variant"
              >
                Male
              </button>
              <button
                className={`detail-hero__toggle-btn${variant === 'female' ? ' detail-hero__toggle-btn--active' : ''}`}
                onClick={() => setVariant('female')}
                aria-pressed={variant === 'female'}
                aria-label="Female variant"
              >
                Female
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======== PROFILE — Full description & quadrant card ======== */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <div className="reveal">
            <p className="section__label">Profile</p>
            <h2 className="section__title" style={{ fontSize: '2rem' }}>
              About the {archetype.leaderType} Leader
            </h2>
            <p className="section__body" style={{ fontSize: '1.0625rem' }}>
              {archetype.description}
            </p>
          </div>

          <div className="quadrant-detail-card reveal stagger-1">
            <p className="quadrant-detail-card__label">
              {archetype.axis} Quadrant
            </p>
            <p className="quadrant-detail-card__body">
              The {archetype.leaderType} Leader operates in the{' '}
              <strong>{archetype.axis}</strong> quadrant. This quadrant shapes
              how the archetype contributes to leadership — whether through
              commercial drive and authority, forward-looking vision,
              disciplined execution, or transformative human connection.
            </p>
          </div>
        </div>
      </section>

      {/* ======== RELATED — Same quadrant archetypes ======== */}
      {related.length > 0 && (
        <section className="section section--black">
          <div className="section__inner">
            <div className="reveal">
              <p className="section__label">Same Quadrant</p>
              <h2 className="section__title" style={{ fontSize: '2rem' }}>
                Other {archetype.axis} Archetypes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {related.map((r, i) => (
                <div key={r.id} className={`reveal stagger-${Math.min(i + 1, 12)}`}>
                  <ArchetypeImageCard archetype={r} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== CTA ======== */}
      <section className="section section--gold">
        <div className="section__inner text-center reveal">
          <h2 className="section__title" style={{ fontSize: '2rem' }}>
            Discover Your Archetype Profile
          </h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            The {archetype.leaderType} Leader is just one part of your mosaic.
            Explore your full leadership profile with a Mosaic workshop or
            download the complete guide.
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
