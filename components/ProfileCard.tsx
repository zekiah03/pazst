'use client';

import { ProfileType } from '@/lib/types';

interface Props {
  profile: ProfileType;
}

const PROFILE_COLORS: Record<string, { border: string; badge: string; dot: string }> = {
  A: { border: 'border-rose-500/40', badge: 'bg-rose-500/15 text-rose-300', dot: 'bg-rose-400' },
  B: { border: 'border-amber-500/40', badge: 'bg-amber-500/15 text-amber-300', dot: 'bg-amber-400' },
  C: { border: 'border-cyan-500/40', badge: 'bg-cyan-500/15 text-cyan-300', dot: 'bg-cyan-400' },
  D: { border: 'border-purple-500/40', badge: 'bg-purple-500/15 text-purple-300', dot: 'bg-purple-400' },
  E: { border: 'border-slate-500/40', badge: 'bg-slate-500/15 text-slate-300', dot: 'bg-slate-400' },
  F: { border: 'border-emerald-500/40', badge: 'bg-emerald-500/15 text-emerald-300', dot: 'bg-emerald-400' },
};

export default function ProfileCard({ profile }: Props) {
  const colors = PROFILE_COLORS[profile.id] ?? PROFILE_COLORS['F'];

  return (
    <div className={`rounded-2xl border ${colors.border} bg-slate-900/70 p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium tracking-wide ${colors.badge}`}>
          タイプ {profile.id}
        </span>
        <span className="text-slate-500 text-xs">{profile.tagline}</span>
      </div>
      <h2 className="text-xl font-light text-slate-100 mb-4">{profile.name}</h2>
      <div className="space-y-3">
        {profile.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-slate-300 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
