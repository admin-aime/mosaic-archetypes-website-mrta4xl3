import { useState, useCallback } from 'react';
import { Button } from '../components/Button';
import { ArchetypeCard } from '../components/ArchetypeCard';
import { archetypes } from '../data/archetypes';
import { Play, ChevronRight } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Home() {
  useDocumentTitle('Home');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showAllArchetypes, setShowAllArchetypes] = useState(false);

  const featuredArchetypes = showAllArchetypes ? archetypes : archetypes.slice(0, 6);

  const handleExploreAll = useCallback(() => {
    setShowAllArchetypes(true);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__texture" />
        <div className="hero__gradient" />
        <div className="hero__content">
          <p className="hero__tagline">Discover Your Leadership DNA</p>
          <img
            src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/0b38331b-e451-4680-ac34-cb7ccd7f1042-1784556518.png"
            alt="Mosaic Leadership Archetypes®"
            className="hero__logo"
          />
          <p className="hero__subtitle">
            A proprietary framework revealing the full spectrum of leadership archetypes present in
            every individual and organisation. Understand your natural strengths, hidden potential,
            and the complete picture of leadership capability.
          </p>

          {/* Video */}
          <div className="video-container reveal">
            {videoPlaying ? (
              <video
                controls
                autoPlay
                src=""
                onEnded={() => setVideoPlaying(false)}
                style={{ width: '100%', aspectRatio: '16/9', background: '#000' }}
                poster=""
              >
                <p>Introductory video about Mosaic Leadership Archetypes.</p>
              </video>
            ) : (
              <div
                className="video-placeholder"
                onClick={() => setVideoPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setVideoPlaying(true);
                }}
                aria-label="Play introductory video"
              >
                <div className="video-placeholder__icon">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          <div className="hero__cta">
            <Button variant="black" href="/download">
              Download the Mosaic Leadership Archetype Handbook
            </Button>
            <Button variant="black" href="/enquiry">
              Request a Call Back
            </Button>
          </div>
        </div>
      </section>

      {/* ===== ARCHETYPES OVERVIEW ===== */}
      <section className="section section--white" id="archetypes-overview">
        <div className="section__inner">
          <p className="section__label">The Framework</p>
          <h2 className="section__title">Mosaic Archetypes Overview</h2>
          <p className="section__body">
            Mosaic Leadership Archetypes® maps ten distinct leadership profiles across four
            quadrants: Power, Vision, Process, and Relationships. Each archetype represents a unique
            combination of strengths, tendencies, and contributions — and every leader embodies
            multiple archetypes in varying degrees. Understanding your mosaic unlocks deeper
            self-awareness, team dynamics, and development pathways.
          </p>

          {/* Archetype Wheel */}
          <div className="wheel-container reveal">
            <img
              src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/5e28fbd7-4f8a-4c6a-a8c9-fe22f7511ef9-1784557508.png"
              alt="Mosaic Leadership Archetypes® Model"
              className="wheel-image"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredArchetypes.map((a, i) => (
              <div key={a.id} className={`reveal stagger-${i + 1}`}>
                <ArchetypeCard archetype={a} />
              </div>
            ))}
          </div>

          {!showAllArchetypes && (
            <div className="text-center mt-10">
              <button
                onClick={handleExploreAll}
                className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider"
                style={{ color: 'var(--colour-mosaic-gold)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Explore the Full Archetype Model
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== PHILOSOPHY SNAPSHOT ===== */}
      <section className="section section--black" id="philosophy-snapshot">
        <div className="section__inner">
          <p className="section__label">Our Philosophy</p>
          <h2 className="section__title">Leadership Is a Mosaic</h2>
          <p className="section__body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            No leader is a single type. The Mosaic philosophy holds that every individual contains a
            unique pattern of leadership archetypes — some dominant, some dormant, all valuable.
            Our methodology surfaces the full picture, helping leaders and organisations understand
            not just who they are, but who they can become.
          </p>
          <Button variant="black" href="/philosophy">
            Explore Our Philosophy
          </Button>
        </div>
      </section>

      {/* ===== WORKSHOPS SNAPSHOT ===== */}
      <section className="section section--gold" id="workshops-snapshot">
        <div className="section__inner">
          <p className="section__label">Development</p>
          <h2 className="section__title">Workshops & Development</h2>
          <p className="section__body">
            From half-day intensives to multi-session leadership journeys, Mosaic workshops bring
            the archetypes to life. Available in-person and virtually, our programmes combine
            self-assessment, peer feedback, experiential exercises, and practical application —
            all grounded in the Mosaic framework.
          </p>
          <div className="flex flex-wrap gap-4">
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
