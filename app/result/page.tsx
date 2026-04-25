'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { computeResults } from '@/lib/scoring';
import { AxisResult } from '@/lib/types';
import ResultChart from '@/components/ResultChart';
import ResultText from '@/components/ResultText';

export default function ResultPage() {
  const router = useRouter();
  const [results, setResults] = useState<AxisResult[] | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('answers');
    if (!raw) {
      router.replace('/');
      return;
    }
    const answers = JSON.parse(raw) as number[];
    setResults(computeResults(answers));
  }, [router]);

  if (!results) return null;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm tracking-widest mb-3 uppercase">Past Inference</p>
          <h1 className="text-2xl font-light text-slate-100">
            あなたの過去の推測
          </h1>
          <p className="text-slate-500 text-sm mt-3">
            回答パターンから、あなたが育った環境を読み解きました。
          </p>
        </div>

        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 mb-8">
          <p className="text-slate-400 text-xs text-center mb-4 uppercase tracking-wider">感情の渇望マップ</p>
          <ResultChart results={results} />
          <div className="flex justify-center gap-6 mt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-indigo-400 inline-block rounded" />
              スコアが高い＝強く求めている（過去になかった）
            </span>
          </div>
        </div>

        <ResultText results={results} />

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors text-sm"
          >
            もう一度やってみる
          </button>
        </div>
      </div>
    </main>
  );
}
