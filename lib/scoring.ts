import { AxisKey, AxisResult, DiagnosisResult, Question } from './types';
import { axisDefs } from './axes';
import { questions } from './questions';
import { detectProfile, detectContradictions, generateOverallSummary } from './profiles';

export function computeResults(answers: number[]): DiagnosisResult {
  const totals: Record<AxisKey, number> = {
    recognition: 0, love: 0, safety: 0, freedom: 0, order: 0,
    achievement: 0, expression: 0, belonging: 0, fairness: 0, trust: 0,
  };
  const maxPossible: Record<AxisKey, number> = { ...totals };

  questions.forEach((q: Question, qi: number) => {
    const choiceIndex = answers[qi];
    if (choiceIndex === undefined || choiceIndex < 0) return;

    const chosen = q.choices[choiceIndex];
    for (const [axis, score] of Object.entries(chosen.scores) as [AxisKey, number][]) {
      totals[axis] += score;
    }

    const axisMaxes: Partial<Record<AxisKey, number>> = {};
    for (const choice of q.choices) {
      for (const [axis, score] of Object.entries(choice.scores) as [AxisKey, number][]) {
        if ((axisMaxes[axis] ?? 0) < score) axisMaxes[axis] = score;
      }
    }
    for (const [axis, max] of Object.entries(axisMaxes) as [AxisKey, number][]) {
      maxPossible[axis] += max;
    }
  });

  const axes: AxisResult[] = axisDefs.map((def) => {
    const max = maxPossible[def.key];
    const raw = totals[def.key];
    const score = max === 0 ? 0 : Math.round((raw / max) * 100);
    // 理論に基づく閾値: 65 / 35
    const level: 'high' | 'mid' | 'low' = score >= 65 ? 'high' : score >= 35 ? 'mid' : 'low';
    return {
      key: def.key,
      label: def.label,
      score,
      level,
      text: def.texts[level],
    };
  });

  const profile = detectProfile(axes);
  const contradictions = detectContradictions(axes);
  const overallSummary = generateOverallSummary(profile, axes);

  return { axes, profile, contradictions, overallSummary };
}
