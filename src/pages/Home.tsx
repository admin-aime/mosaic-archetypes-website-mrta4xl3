import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import { ArchetypeImageCard } from '../components/ArchetypeImageCard';
import { archetypes } from '../data/archetypes';
import { Play } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function Home() {
  useDocumentTitle('Home');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoPlaying]);

  const featuredArchetypes = archetypes.filter(
    (a) => a.id === 'heroic' || a.id === 'nurturing' || a.id === 'maverick'
  );

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__texture" />
        <div className="hero__gradient" />
        <div className="hero__content">
          <p className="hero__tagline">Discover your leadership profile</p>
          <img
            src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/0b38331b-e451-4680-ac34-cb7ccd7f1042-1784556518.png"
            alt="Mosaic Leadership Archetypes®"
            className="hero__logo"
          />
          <p className="hero__subtitle">
            A proprietary framework revealing the full spectrum of leadership archetype potential
            present in every individual, team, and organisation. Understand your natural
            strengths, growth areas, and the complete picture of leadership capability to
            remain future fit.
          </p>

          {/* Video */}
          <div className="video-container reveal">
            {videoPlaying ? (
              <video
                ref={videoRef}
                controls
                preload="metadata"
                src="https://d38fqvqd8cmu1f.cloudfront.net/org/68d38d4de0df342f4aebb6d0/proj/6a5e2708d0111e8be008316c/think_space/assets/MP_Archetype_v1.2.mp4"
                onEnded={() => setVideoPlaying(false)}
                style={{ width: '100%', aspectRatio: '16/9', background: '#000' }}
              />
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
            <Button variant="black" href="/enquiry">
              Cross the Threshold
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
                <ArchetypeImageCard archetype={a} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="section__body" style={{ marginBottom: '1.5rem' }}>
              Contact us to find out more
            </p>
            <Button variant="gold" href="/enquiry">
              Start the Journey
            </Button>
          </div>
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
      <section className="section section--gold" id="solutions-snapshot">
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
