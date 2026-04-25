'use client';

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { AxisResult } from '@/lib/types';

interface Props {
  results: AxisResult[];
}

export default function ResultChart({ results }: Props) {
  const data = results.map((r) => ({
    axis: r.label,
    value: r.score,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <Radar
            dataKey="value"
            stroke="#818cf8"
            fill="#818cf8"
            fillOpacity={0.25}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
