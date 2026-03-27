export type QuizCategory =
  | 'vajningsplikt'
  | 'vagmarken'
  | 'hastighet'
  | 'parkering'
  | 'alkohol-droger'
  | 'vagmarkeringar'
  | 'miljo-bransle'
  | 'fordon-teknik'
  | 'riskbeteende'
  | 'motorvag'
  | 'morkerkörning'
  | 'cykel-moped'
  | 'forsta-hjalpen';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
  id: string;
  category: QuizCategory;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Key into roadSignComponents for visual sign display */
  signKey?: string;
};

export const categoryLabels: Record<QuizCategory, string> = {
  vajningsplikt: 'Väjningsplikt',
  vagmarken: 'Vägmärken',
  hastighet: 'Hastighet',
  parkering: 'Parkering',
  'alkohol-droger': 'Alkohol & Droger',
  vagmarkeringar: 'Vägmarkeringar',
  'miljo-bransle': 'Miljö & Bränsle',
  'fordon-teknik': 'Fordon & Teknik',
  riskbeteende: 'Riskbeteende',
  motorvag: 'Motorväg',
  morkerkörning: 'Mörkerkörning',
  'cykel-moped': 'Cykel & Moped',
  'forsta-hjalpen': 'Första Hjälpen',
};

export const categoryColors: Record<QuizCategory, string> = {
  vajningsplikt: '#d97706',
  vagmarken: '#006B3F',
  hastighet: '#dc2626',
  parkering: '#2563eb',
  'alkohol-droger': '#7c3aed',
  vagmarkeringar: '#0891b2',
  'miljo-bransle': '#16a34a',
  'fordon-teknik': '#475569',
  riskbeteende: '#e11d48',
  motorvag: '#0369a1',
  morkerkörning: '#1e293b',
  'cykel-moped': '#f97316',
  'forsta-hjalpen': '#ef4444',
};
