export { type Question, type QuizCategory, type Difficulty, categoryLabels, categoryColors } from './types';

import { vajningspliktQuestions } from './vajningsplikt';
import { vagmarkenQuestions } from './vagmarken';
import { hastighetQuestions } from './hastighet';
import { parkeringQuestions } from './parkering';
import { alkoholDrogerQuestions } from './alkohol-droger';
import { vagmarkeringarQuestions } from './vagmarkeringar';
import { miljoBransleQuestions } from './miljo-bransle';
import { fordonTeknikQuestions } from './fordon-teknik';
import { riskbeteendeQuestions } from './riskbeteende';
import { motorvagQuestions } from './motorvag';
import { morkerkorningQuestions } from './morkerkörning';
import { cykelMopedQuestions } from './cykel-moped';
import { forstaHjalpenQuestions } from './forsta-hjalpen';

import { Question, QuizCategory } from './types';

export const allQuestions: Question[] = [
  ...vajningspliktQuestions,
  ...vagmarkenQuestions,
  ...hastighetQuestions,
  ...parkeringQuestions,
  ...alkoholDrogerQuestions,
  ...vagmarkeringarQuestions,
  ...miljoBransleQuestions,
  ...fordonTeknikQuestions,
  ...riskbeteendeQuestions,
  ...motorvagQuestions,
  ...morkerkorningQuestions,
  ...cykelMopedQuestions,
  ...forstaHjalpenQuestions,
];

export function getQuestionsByCategory(category: QuizCategory): Question[] {
  return allQuestions.filter((q) => q.category === category);
}

export function getRandomQuestions(count: number, category?: QuizCategory): Question[] {
  const pool = category ? getQuestionsByCategory(category) : allQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getExamQuestions(): Question[] {
  return getRandomQuestions(65);
}

export {
  vajningspliktQuestions,
  vagmarkenQuestions,
  hastighetQuestions,
  parkeringQuestions,
  alkoholDrogerQuestions,
  vagmarkeringarQuestions,
  miljoBransleQuestions,
  fordonTeknikQuestions,
  riskbeteendeQuestions,
  motorvagQuestions,
  morkerkorningQuestions,
  cykelMopedQuestions,
  forstaHjalpenQuestions,
};
