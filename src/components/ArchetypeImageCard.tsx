import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Archetype } from '../data/archetypes';
import { archetypeImages } from '../data/archetypeImages';

interface Props {
  archetype: Archetype;
}

export function ArchetypeImageCard({ archetype }: Props) {
  const [variant, setVariant] = useState<'male' | 'female'>('male');
  const navigate = useNavigate();
  const images = archetypeImages[archetype.id];
  const src = variant === 'male' ? images.male : images.female;

  const handleCardClick = () => {
    navigate(`/archetype/${archetype.id}`);
  };

  return (
    <article
      className="archetype-image-card reveal"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleCardClick();
      }}
      aria-label={`${archetype.leaderType} Leader — ${variant === 'male' ? 'Male' : 'Female'} variant`}
    >
      {/* Image */}
      <div className="archetype-image-card__img-wrap">
        <img
          src={src}
          alt={`${archetype.leaderType} Leader (${variant === 'male' ? 'Male' : 'Female'})`}
          className="archetype-image-card__img"
          loading="lazy"
        />
      </div>

      {/* Labels */}
      <div className="archetype-image-card__body">
        <h3 className="archetype-image-card__title">
          {archetype.leaderType} Leader
        </h3>
        <p className="archetype-image-card__role">{archetype.role}</p>
        <p className="archetype-image-card__tagline">{archetype.tagline}</p>
      </div>

      {/* M / F toggle */}
      <div className="archetype-image-card__toggle" onClick={(e) => e.stopPropagation()}>
        <button
          className={`archetype-image-card__toggle-btn${variant === 'male' ? ' archetype-image-card__toggle-btn--active' : ''}`}
          onClick={() => setVariant('male')}
          aria-pressed={variant === 'male'}
          aria-label="Male variant"
        >
          M
        </button>
        <button
          className={`archetype-image-card__toggle-btn${variant === 'female' ? ' archetype-image-card__toggle-btn--active' : ''}`}
          onClick={() => setVariant('female')}
          aria-pressed={variant === 'female'}
          aria-label="Female variant"
        >
          F
        </button>
      </div>
    </article>
  );
}
