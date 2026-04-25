'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizCard from '@/components/QuizCard';
import ProgressBar from '@/components/ProgressBar';
import { questions } from '@/lib/questions';

type Phase = 'intro' | 'quiz';

export default function Home() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);

  const handleAnswer = (choiceIndex: number) => {
    const stored = JSON.parse(sessionStorage.getItem('answers') ?? '[]') as number[];
    stored[current] = choiceIndex;
    sessionStorage.setItem('answers', JSON.stringify(stored));

    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      router.push('/result');
    }
  };

  if (phase === 'intro') {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <p className="text-indigo-400 text-sm tracking-widest mb-4 uppercase">Past Inference</p>
          <h1 className="text-3xl font-light text-slate-100 mb-6 leading-snug">
            あなたの感情の使い方から、<br />過去を推測します。
          </h1>
          <p className="text-slate-400 leading-relaxed mb-10 text-sm">
            40の日常的なシナリオに答えてください。<br />
            あなたの反応パターンから、どんな環境で育ったかを<br />
            そっと読み解いていきます。
          </p>
          <button
            onClick={() => {
              sessionStorage.removeItem('answers');
              setPhase('quiz');
            }}
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200 text-sm"
          >
            はじめる
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <ProgressBar current={current} total={questions.length} />
        <div className="mt-12">
          <QuizCard question={questions[current]} onAnswer={handleAnswer} />
        </div>
      </div>
    </main>
  );
}
