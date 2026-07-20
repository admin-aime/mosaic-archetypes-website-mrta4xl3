import { useParams, Link } from 'react-router-dom';
import { archetypes } from '../data/archetypes';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
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
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
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

export function ArchetypeDetail() {
  const { id } = useParams<{ id: string }>();
  const archetype = archetypes.find((a) => a.id === id);
  useDocumentTitle(archetype ? `${archetype.leaderType} Leader` : 'Archetype');

  if (!archetype) {
    return (
      <div className="page-header">
        <div className="page-header__inner">
          <h1 className="section__title">Archetype Not Found</h1>
          <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            The archetype you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Button variant="black" href="/model">
              Back to Model
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const Icon = iconMap[archetype.id];
  const related = archetypes.filter((a) => a.axis === archetype.axis && a.id !== archetype.id);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__texture" />
        <div className="page-header__inner">
          <Link
            to="/model"
            className="inline-flex items-center gap-2 mb-6 no-underline"
            style={{
              fontFamily: 'var(--font-subheader)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--colour-mosaic-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            <ArrowLeft size={14} /> Back to All Archetypes
          </Link>
          {Icon && (
            <div style={{ marginBottom: '1.5rem' }}>
              <Icon size={56} style={{ color: 'var(--colour-mosaic-gold)' }} />
            </div>
          )}
          <p className="section__label">{archetype.axis}</p>
          <h1 className="section__title">
            {archetype.leaderType} Leader
          </h1>
          <p
            className="section__subtitle"
            style={{
              margin: '0 auto 0.5rem',
              color: 'var(--colour-mosaic-gold)',
              fontSize: '0.875rem',
            }}
          >
            {archetype.role}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
            {archetype.tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: '800px' }}>
          <p className="section__label">Profile</p>
          <h2 className="section__title" style={{ fontSize: '2rem' }}>
            About the {archetype.leaderType} Leader
          </h2>
          <p className="section__body" style={{ fontSize: '1.0625rem' }}>
            {archetype.description}
          </p>

          <div
            className="mt-10 p-6 rounded-lg"
            style={{ background: 'rgba(166,119,24,0.05)', border: '1px solid rgba(166,119,24,0.1)' }}
          >
            <p style={{ fontFamily: 'var(--font-subheader)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--colour-mosaic-gold)', marginBottom: '0.5rem' }}>
              Quadrant
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--colour-black)' }}>
              The {archetype.leaderType} Leader operates in the <strong>{archetype.axis}</strong> quadrant.
              This quadrant shapes how the archetype contributes to leadership — whether through
              commercial drive and authority, forward-looking vision, disciplined execution, or
              transformative human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Related Archetypes */}
      {related.length > 0 && (
        <section className="section section--black">
          <div className="section__inner">
            <p className="section__label">Same Quadrant</p>
            <h2 className="section__title" style={{ fontSize: '2rem' }}>
              Other {archetype.axis} Archetypes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/archetype/${r.id}`}
                  className="card block no-underline"
                >
                  <div className="card__icon">
                    {(() => {
                      const RI = iconMap[r.id];
                      return RI ? <RI className="card__icon-svg" /> : null;
                    })()}
                  </div>
                  <h3 className="card__title">{r.leaderType} Leader</h3>
                  <p className="card__subtitle">{r.role}</p>
                  <p className="card__tagline">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section section--gold">
        <div className="section__inner text-center">
          <h2 className="section__title" style={{ fontSize: '2rem' }}>
            Discover Your Archetype Profile
          </h2>
          <p className="section__body" style={{ margin: '0 auto 2rem' }}>
            The {archetype.leaderType} Leader is just one part of your mosaic. Explore your full
            leadership profile with a Mosaic workshop or download the complete guide.
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
