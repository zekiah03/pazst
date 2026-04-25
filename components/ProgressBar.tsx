'use client';

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-slate-400 mb-2">
        <span>{current} / {total} 問</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-1.5">
        <div
          className="bg-indigo-400 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
