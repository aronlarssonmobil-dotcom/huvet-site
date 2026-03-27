"use client";

import { useMemo, useState } from "react";

type Option = {
  label: string;
  correct?: boolean;
  explanation: string;
};

type Question = {
  id: number;
  category: string;
  prompt: string;
  note: string;
  options: Option[];
};

const questions: Question[] = [
  {
    id: 1,
    category: "Väjningsplikt",
    note: "Korsning i tätort · moment 1",
    prompt: "Du närmar dig en korsning där högerregeln gäller. Vad ska du göra?",
    options: [
      {
        label: "Köra först om du håller hög hastighet",
        explanation: "Hastighet ger ingen företrädesrätt i en korsning med högerregel.",
      },
      {
        label: "Lämna företräde åt trafik som kommer från höger",
        correct: true,
        explanation: "Rätt. När inget annat anges gäller högerregeln.",
      },
      {
        label: "Lämna företräde åt trafik som kommer från vänster",
        explanation: "Det är tvärtom mot högerregeln.",
      },
    ],
  },
  {
    id: 2,
    category: "Riskbeteende",
    note: "Säkerhet & omdöme · moment 2",
    prompt: "Vad händer typiskt med reaktionsförmågan vid trötthet bakom ratten?",
    options: [
      {
        label: "Den förbättras när du öppnar fönstret",
        explanation: "Lite frisk luft kan kännas bättre kortsiktigt, men tröttheten finns kvar.",
      },
      {
        label: "Den påverkas knappt alls om du dricker kaffe",
        explanation: "Koffein kan hjälpa kortvarigt men löser inte nedsatt reaktionsförmåga pålitligt.",
      },
      {
        label: "Den försämras och risken för felbedömningar ökar",
        correct: true,
        explanation: "Rätt. Trötthet påverkar både fokus, reaktionstid och beslut negativt.",
      },
    ],
  },
  {
    id: 3,
    category: "Skyltar",
    note: "Varningsmärken · moment 3",
    prompt: "Vad betyder en triangelformad skylt med röd kant normalt?",
    options: [
      {
        label: "Varningsmärke",
        correct: true,
        explanation: "Rätt. Triangelform med röd kant används vanligtvis för varningsmärken.",
      },
      {
        label: "Påbudsmärke",
        explanation: "Påbudsmärken är normalt runda och blå.",
      },
      {
        label: "Lokaliseringsmärke",
        explanation: "Lokaliseringsmärken har en annan utformning och färgsättning.",
      },
    ],
  },
];

const startingScores: Record<string, number> = {
  Väjningsplikt: 46,
  Riskbeteende: 51,
  Skyltar: 78,
};

export function DemoExperience() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = questions[step];
  const chosenOption = selected === null ? null : question.options[selected];

  const scores = useMemo(() => {
    const nextScores = { ...startingScores };

    answers.forEach((optionIndex, index) => {
      const answeredQuestion = questions[index];
      const isCorrect = answeredQuestion.options[optionIndex]?.correct;
      const delta = isCorrect ? 10 : -2;
      nextScores[answeredQuestion.category] = Math.max(
        0,
        Math.min(100, nextScores[answeredQuestion.category] + delta),
      );
    });

    return nextScores;
  }, [answers]);

  const correctAnswers = answers.filter((answer, index) => questions[index].options[answer]?.correct).length;
  const isFinished = step >= questions.length;
  const weakestCategory = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
  }

  function handleContinue() {
    if (selected === null) return;

    setAnswers((current) => [...current, selected]);
    setSelected(null);
    setStep((current) => current + 1);
  }

  function handleRestart() {
    setStep(0);
    setSelected(null);
    setAnswers([]);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="editorial-card overflow-hidden rounded-[32px]">
        <div className="border-b border-[var(--line-soft)] bg-[rgba(255,251,246,0.88)] px-6 py-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="muted-kicker">Elevläge</div>
              <div className="mt-2 font-[var(--font-display)] text-[1.7rem] font-semibold tracking-[-0.04em] text-[var(--ink-strong)]">
                Kort pass, tydlig riktning
              </div>
            </div>
            <div className="rounded-full border border-[var(--line-soft)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              {Math.min(step + 1, questions.length)} / {questions.length}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          {!isFinished ? (
            <>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--ink-muted)]">
                <span className="rounded-full border border-[var(--line-soft)] bg-[var(--surface)] px-3 py-1 font-medium text-[var(--pine)]">
                  {question.category}
                </span>
                <span>{question.note}</span>
              </div>

              <h3 className="display-title mt-5 text-[2.1rem] leading-tight font-semibold text-[var(--ink-strong)] sm:text-[2.35rem]">
                {question.prompt}
              </h3>

              <div className="mt-7 space-y-3">
                {question.options.map((option, index) => {
                  const isChosen = selected === index;
                  const reveal = selected !== null;
                  const isCorrect = !!option.correct;

                  let classes = "border-[var(--line-soft)] bg-white/72 text-[var(--ink-soft)] hover:border-[rgba(168,82,55,0.22)] hover:bg-white";
                  if (reveal && isChosen && isCorrect) classes = "border-[rgba(68,102,81,0.24)] bg-[rgba(231,240,234,0.9)] text-[var(--ink-strong)]";
                  if (reveal && isChosen && !isCorrect) classes = "border-[rgba(151,86,79,0.26)] bg-[rgba(245,231,228,0.92)] text-[var(--ink-strong)]";
                  if (reveal && !isChosen && isCorrect) classes = "border-[rgba(68,102,81,0.18)] bg-[rgba(236,244,239,0.74)] text-[var(--ink-strong)]";

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className={`w-full rounded-[22px] border px-4 py-4 text-left text-[0.98rem] leading-7 transition ${classes}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/15 text-xs font-semibold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-[24px] border border-[var(--line-soft)] bg-[var(--paper-strong)] p-4 text-sm leading-7 text-[var(--ink-soft)]">
                <div className="muted-kicker">Direkt återkoppling</div>
                <div className="mt-2">
                  {chosenOption ? chosenOption.explanation : "Välj ett svar för att se varför det är rätt eller fel direkt i flödet."}
                </div>
              </div>

              <button
                type="button"
                onClick={handleContinue}
                disabled={selected === null}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition enabled:hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Nästa steg
              </button>
            </>
          ) : (
            <>
              <div className="inline-flex rounded-full border border-[rgba(63,108,83,0.18)] bg-[rgba(221,234,225,0.8)] px-3 py-1 text-sm font-semibold text-[var(--success)]">
                Demo klar
              </div>
              <h3 className="display-title mt-4 text-[2.35rem] font-semibold leading-tight text-[var(--ink-strong)]">
                Du fick {correctAnswers} av {questions.length} rätt.
              </h3>
              <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--ink-soft)]">
                Här stannar inte upplevelsen vid en poäng. Eleven får en tydlig nästa handling, så att varje pass leder till bättre precision inför provet.
              </p>
              <div className="mt-6 rounded-[26px] border border-[rgba(32,70,60,0.12)] bg-[linear-gradient(180deg,rgba(243,246,241,0.95),rgba(231,238,232,0.82))] p-5">
                <div className="muted-kicker">Rekommenderad nästa handling</div>
                <div className="mt-3 font-[var(--font-display)] text-[1.55rem] font-semibold leading-tight text-[var(--ink-strong)]">
                  Träna extra på {weakestCategory[0].toLowerCase()} innan du går vidare till ett större blandtest.
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  Nuvarande nivå i ämnet: {weakestCategory[1]}%. Med 10–15 minuter riktad träning kan eleven lyfta helheten snabbare än genom att bara göra fler blandade frågor.
                </p>
              </div>
              <button
                type="button"
                onClick={handleRestart}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] px-5 py-3 text-sm font-semibold text-[var(--ink-strong)] transition hover:bg-white/60"
              >
                Kör demon igen
              </button>
            </>
          )}
        </div>
      </div>

      <div className="editorial-card rounded-[32px] p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line-soft)] pb-4">
          <div>
            <div className="muted-kicker">Analys i realtid</div>
            <div className="mt-2 font-[var(--font-display)] text-[1.7rem] font-semibold tracking-[-0.04em] text-[var(--ink-strong)]">
              Vad eleven behöver nu
            </div>
          </div>
          <div className="rounded-[18px] border border-[var(--line-soft)] bg-white/70 px-3 py-2 text-right">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">Provredo</div>
            <div className="text-lg font-semibold text-[var(--ink-strong)]">68%</div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {Object.entries(scores).map(([category, score]) => (
            <div key={category} className="rounded-[24px] border border-[var(--line-soft)] bg-[var(--surface)] p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-[var(--ink-strong)]">{category}</span>
                <span className="text-sm text-[var(--ink-muted)]">{score}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(19,32,28,0.08)]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#cf8a72)] transition-all duration-500"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-[var(--line-soft)] bg-[rgba(32,70,60,0.06)] p-5">
          <div className="muted-kicker">Vad demon visar</div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-soft)]">
            <li>Direkt feedback efter varje fråga — inte bara rätt eller fel.</li>
            <li>Ämnesanalysen uppdateras medan eleven tränar.</li>
            <li>Systemet föreslår nästa pass när sessionen är klar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
