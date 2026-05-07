'use client';

import { ContradictionInsight } from '@/lib/types';

interface Props {
  contradictions: ContradictionInsight[];
}

export default function ContradictionCard({ contradictions }: Props) {
  if (contradictions.length === 0) return null;

  return (
    <div className="rounded-2xl border border-yellow-600/30 bg-yellow-950/20 p-6">
      <p className="text-yellow-500/80 text-xs uppercase tracking-wider mb-4">
        パターンの逆説
      </p>
      <div className="space-y-5">
        {contradictions.map((c, i) => (
          <div key={i}>
            <p className="text-yellow-300/90 text-sm font-medium mb-2">{c.title}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
