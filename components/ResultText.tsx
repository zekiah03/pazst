'use client';

import { AxisResult } from '@/lib/types';

interface Props {
  results: AxisResult[];
}

const LEVEL_COLORS: Record<'high' | 'mid' | 'low', string> = {
  high: 'border-indigo-500/60 bg-indigo-950/40',
  mid: 'border-slate-600 bg-slate-800/40',
  low: 'border-emerald-700/50 bg-emerald-950/30',
};

const LEVEL_BADGE: Record<'high' | 'mid' | 'low', { label: string; color: string }> = {
  high: { label: '強く求めている', color: 'bg-indigo-500/20 text-indigo-300' },
  mid: { label: 'ほどほど', color: 'bg-slate-600/30 text-slate-400' },
  low: { label: '自然と持っている', color: 'bg-emerald-700/20 text-emerald-400' },
};

export default function ResultText({ results }: Props) {
  const sorted = [...results].sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col gap-5">
      {sorted.map((r) => {
        const badge = LEVEL_BADGE[r.level];
        return (
          <div
            key={r.key}
            className={`rounded-2xl border p-5 ${LEVEL_COLORS[r.level]}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-slate-100 font-medium">{r.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${badge.color}`}>
                {badge.label}
              </span>
              <span className="ml-auto text-slate-400 text-sm">{r.score}%</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{r.text}</p>
          </div>
        );
      })}
    </div>
  );
}
