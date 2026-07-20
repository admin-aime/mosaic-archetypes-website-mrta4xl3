export interface Archetype {
  id: string;
  leaderType: string;
  role: string;
  tagline: string;
  axis: 'Vision' | 'Process' | 'Relationships';
  description: string;
}

export const archetypes: Archetype[] = [
  {
    id: 'versatile',
    leaderType: 'Versatile',
    role: 'Leader',
    tagline: 'QUESTION · EXPLORE · INNOVATE',
    axis: 'Vision',
    description:
      'Versatile Leaders adapt fluidly to changing circumstances, drawing on a broad repertoire of leadership styles. They question assumptions, explore new possibilities, and drive innovation through intellectual curiosity and openness to diverse perspectives.',
  },
  {
    id: 'heroic',
    leaderType: 'Heroic',
    role: 'Orchestrator',
    tagline: 'INSPIRE · MOBILISE · ACHIEVE',
    axis: 'Vision',
    description:
      'Heroic Leaders inspire through bold vision and decisive action. They mobilise teams around a compelling purpose, orchestrating resources and talent to achieve ambitious goals with energy and conviction.',
  },
  {
    id: 'enterprising',
    leaderType: 'Enterprising',
    role: 'Catalyser',
    tagline: 'IDENTIFY · IGNITE · ACCELERATE',
    axis: 'Vision',
    description:
      'Enterprising Leaders spot opportunities others miss and catalyse action. They ignite momentum, accelerate growth, and create value through commercial instinct and a bias toward bold, calculated moves.',
  },
  {
    id: 'reluctant',
    leaderType: 'Reluctant',
    role: 'Producer',
    tagline: 'STEADY · DEPENDABLE · DELIVER',
    axis: 'Process',
    description:
      'Reluctant Leaders rise to the occasion not through ambition but through duty. They are steady, dependable producers who deliver consistent results without fanfare — the quiet engine of organisational stability.',
  },
  {
    id: 'innovative',
    leaderType: 'Innovative',
    role: 'Challenger',
    tagline: 'QUESTION · DISRUPT · REBUILD',
    axis: 'Vision',
    description:
      'Innovative Leaders challenge the status quo and disrupt established patterns. They question orthodoxies, introduce breakthrough ideas, and rebuild systems to be more effective, creative, and forward-looking.',
  },
  {
    id: 'power',
    leaderType: 'Power',
    role: 'Organiser',
    tagline: 'DIRECT · ALIGN · EXECUTE',
    axis: 'Process',
    description:
      'Power Leaders bring structure and order to complexity. They direct resources, align teams around clear priorities, and execute with precision — turning strategy into disciplined, repeatable results.',
  },
  {
    id: 'guardian',
    leaderType: 'Guardian',
    role: 'Organiser',
    tagline: 'PROTECT · SUSTAIN · PRESERVE',
    axis: 'Process',
    description:
      'Guardian Leaders protect what matters most: culture, values, people, and long-term sustainability. They preserve institutional memory, maintain standards, and ensure the organisation endures beyond any single initiative.',
  },
  {
    id: 'sagelike',
    leaderType: 'Sagelike',
    role: 'Interpreter',
    tagline: 'REFLECT · DISTIL · GUIDE',
    axis: 'Relationships',
    description:
      'Sagelike Leaders bring wisdom and perspective. They reflect deeply, distil complexity into clarity, and guide others through ambiguity — offering insight that shapes better decisions and deeper understanding.',
  },
  {
    id: 'architect',
    leaderType: 'Architect',
    role: 'Systemiser',
    tagline: 'DESIGN · BUILD · OPTIMISE',
    axis: 'Process',
    description:
      'Architect Leaders design the frameworks and systems that enable organisations to scale. They build robust structures, optimise workflows, and create the blueprints for sustainable, repeatable success.',
  },
  {
    id: 'nurturing',
    leaderType: 'Nurturing',
    role: 'Supporter',
    tagline: 'CARE · DEVELOP · EMPOWER',
    axis: 'Relationships',
    description:
      'Nurturing Leaders invest deeply in people. They care for individual wellbeing, develop potential through coaching and encouragement, and empower others to grow into their best professional selves.',
  },
  {
    id: 'maverick',
    leaderType: 'Maverick',
    role: 'Disruptor',
    tagline: 'DEFY · PROVOKE · TRANSFORM',
    axis: 'Relationships',
    description:
      'Maverick Leaders defy convention and provoke necessary disruption. They challenge norms, push boundaries, and transform organisations by refusing to accept "the way things have always been done."',
  },
];

export const axes = ['Vision', 'Process', 'Relationships'] as const;
