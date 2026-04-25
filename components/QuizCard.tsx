'use client';

import { Question } from '@/lib/types';

interface Props {
  question: Question;
  onAnswer: (index: number) => void;
}

const LABELS = ['A', 'B', 'C', 'D'];

export default function QuizCard({ question, onAnswer }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-lg text-slate-100 leading-relaxed mb-8">{question.text}</p>
      <div className="flex flex-col gap-3">
        {question.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            className="flex items-start gap-4 text-left px-5 py-4 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-indigo-500 transition-all duration-200 group"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full border border-slate-600 group-hover:border-indigo-400 flex items-center justify-center text-sm text-slate-400 group-hover:text-indigo-300 transition-colors">
              {LABELS[i]}
            </span>
            <span className="text-slate-300 group-hover:text-slate-100 transition-colors leading-relaxed">
              {choice.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
