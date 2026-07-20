export interface Archetype {
  id: string;
  leaderType: string;
  role: string;
  tagline: string;
  axis: 'Power' | 'Vision' | 'Process' | 'Relationships';
  description: string;
}

export const archetypes: Archetype[] = [
  {
    id: 'reluctant',
    leaderType: 'Reluctant',
    role: 'Producer',
    tagline: 'STEADY · DEPENDABLE · DELIVER',
    axis: 'Power',
    description:
      'The dependable doer who leads through consistent delivery. Reluctant Leaders rise to the occasion through duty rather than ambition — producing reliable results without fanfare. They are the quiet engine of organisational stability, bringing a steady, task-focused presence that teams can count on.',
  },
  {
    id: 'enterprising',
    leaderType: 'Enterprising',
    role: 'Catalyser',
    tagline: 'IDENTIFY · IGNITE · ACCELERATE',
    axis: 'Power',
    description:
      'The opportunity seeker who spots potential others miss. Enterprising Leaders are opportunity-seeking, influential, and energetic — they ignite momentum through commercial instinct and a bias toward bold, calculated moves. They catalyse action and accelerate growth wherever they focus their attention.',
  },
  {
    id: 'heroic',
    leaderType: 'Heroic',
    role: 'Orchestrator',
    tagline: 'INSPIRE · MOBILISE · ACHIEVE',
    axis: 'Process',
    description:
      'The action-oriented achiever who drives results. Decisive, results-focused, and bold, Heroic Leaders inspire through conviction and mobilise teams around a compelling purpose. They orchestrate resources and talent to achieve ambitious goals with energy and determination.',
  },
  {
    id: 'guardian',
    leaderType: 'Guardian',
    role: 'Organiser',
    tagline: 'PROTECT · SUSTAIN · PRESERVE',
    axis: 'Process',
    description:
      'The systematic organiser who creates stability. Structured, systematic, and process-driven, Guardian Leaders protect what matters most — culture, values, people, and long-term sustainability. They maintain standards, preserve institutional memory, and ensure the organisation endures beyond any single initiative.',
  },
  {
    id: 'architect',
    leaderType: 'The Architect',
    role: 'Systemiser',
    tagline: 'DESIGN · BUILD · OPTIMISE',
    axis: 'Process',
    description:
      'The systems designer who sees the whole picture. A systems thinker who is holistic and integrative, the Architect designs the frameworks that enable organisations to scale. They build robust structures, optimise workflows, and create the blueprints for sustainable, repeatable success.',
  },
  {
    id: 'sagelike',
    leaderType: 'Sagelike',
    role: 'Interpreter',
    tagline: 'REFLECT · DISTIL · GUIDE',
    axis: 'Vision',
    description:
      'The wise advisor who provides perspective. Reflective, analytical, and wise, Sagelike Leaders bring depth of thought to every challenge. They distil complexity into clarity and guide others through ambiguity — offering insight that shapes better decisions and deeper understanding.',
  },
  {
    id: 'innovative',
    leaderType: 'Innovative',
    role: 'Challenger',
    tagline: 'QUESTION · DISRUPT · REBUILD',
    axis: 'Vision',
    description:
      'The creative thinker who challenges conventions. Creative, experimental, and transformative, Innovative Leaders question orthodoxies and introduce breakthrough ideas. They disrupt established patterns and rebuild systems to be more effective, forward-looking, and alive to new possibilities.',
  },
  {
    id: 'nurturing',
    leaderType: 'Nurturing',
    role: 'Supporter',
    tagline: 'CARE · DEVELOP · EMPOWER',
    axis: 'Relationships',
    description:
      'The people developer who grows others. Empathetic, developmental, and supportive, Nurturing Leaders invest deeply in individual wellbeing. They develop potential through coaching and encouragement, empowering others to grow into their best professional selves.',
  },
  {
    id: 'maverick',
    leaderType: 'Maverick',
    role: 'Disruptor',
    tagline: 'DEFY · PROVOKE · TRANSFORM',
    axis: 'Relationships',
    description:
      'The change agent who disrupts the status quo. Disruptive, intuitive, and unconventional, Maverick Leaders defy convention and provoke necessary change. They challenge norms, push boundaries, and transform organisations by refusing to accept "the way things have always been done."',
  },
  {
    id: 'versatile',
    leaderType: 'Versatile',
    role: 'Adaptable',
    tagline: 'ADAPT · BALANCE · INTEGRATE',
    axis: 'Vision',
    description:
      'The adaptable leader who encircles the archetypes. A rare individual, Versatile Leaders present as a balance and blend of all the archetypes, able to flex readily between them. Where other leaders operate from a dominant archetype, the Versatile Leader integrates diverse leadership styles, adapting fluidly to whatever the situation demands.',
  },
];

export const axes = ['Power', 'Vision', 'Process', 'Relationships'] as const;
