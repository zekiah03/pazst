export type AxisKey =
  | 'recognition'
  | 'love'
  | 'safety'
  | 'freedom'
  | 'order'
  | 'achievement'
  | 'expression'
  | 'belonging'
  | 'fairness'
  | 'trust';

export interface Choice {
  text: string;
  scores: Partial<Record<AxisKey, number>>;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export interface AxisResult {
  key: AxisKey;
  label: string;
  score: number; // 0-100
  level: 'high' | 'mid' | 'low';
  text: string;
}

export interface ProfileType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  primaryAxes: AxisKey[];
}

export interface ContradictionInsight {
  title: string;
  text: string;
}

export interface DiagnosisResult {
  axes: AxisResult[];
  profile: ProfileType;
  contradictions: ContradictionInsight[];
  overallSummary: string;
}
