import { Link } from 'react-router-dom';
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
import type { Archetype } from '../data/archetypes';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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

interface ArchetypeCardProps {
  archetype: Archetype;
}

export function ArchetypeCard({ archetype }: ArchetypeCardProps) {
  const Icon = iconMap[archetype.id];

  return (
    <Link to={`/archetype/${archetype.id}`} className="card block no-underline">
      <div className="card__icon">
        {Icon && <Icon className="card__icon-svg" />}
      </div>
      <h3 className="card__title">{archetype.leaderType} Leader</h3>
      <p className="card__subtitle">{archetype.role}</p>
      <p className="card__tagline">{archetype.tagline}</p>
    </Link>
  );
}
