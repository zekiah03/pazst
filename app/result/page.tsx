'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { computeResults } from '@/lib/scoring';
import { DiagnosisResult } from '@/lib/types';
import ResultChart from '@/components/ResultChart';
import ResultText from '@/components/ResultText';
import ProfileCard from '@/components/ProfileCard';
import ContradictionCard from '@/components/ContradictionCard';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('answers');
    if (!raw) {
      router.replace('/');
      return;
    }
    const answers = JSON.parse(raw) as number[];
    setResult(computeResults(answers));
  }, [router]);

  const handleDownload = () => {
    if (!result) return;
    const payload = {
      generatedAt: new Date().toISOString(),
      profileType: {
        id: result.profile.id,
        name: result.profile.name,
        tagline: result.profile.tagline,
      },
      overallSummary: result.overallSummary,
      contradictions: result.contradictions,
      axes: result.axes.map((r) => ({
        key: r.key,
        label: r.label,
        score: r.score,
        level: r.level,
        interpretation: r.text,
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'past-inference-result.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!result) return null;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* ヘッダー */}
        <div className="text-center mb-8">
          <p className="text-indigo-400 text-sm tracking-widest mb-3 uppercase">Past Inference</p>
          <h1 className="text-2xl font-light text-slate-100">あなたの過去の推測</h1>
          <p className="text-slate-500 text-sm mt-3">
            回答パターンから、あなたが育った環境を読み解きました。
          </p>
        </div>

        {/* プロファイルタイプ */}
        <ProfileCard profile={result.profile} />

        {/* レーダーチャート */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
          <p className="text-slate-400 text-xs text-center mb-4 uppercase tracking-wider">
            感情の渇望マップ
          </p>
          <ResultChart results={result.axes} />
          <p className="text-center text-xs text-slate-500 mt-4">
            スコアが高い＝強く求めている（過去になかった可能性）
          </p>
        </div>

        {/* 逆説パターン（あれば） */}
        <ContradictionCard contradictions={result.contradictions} />

        {/* 軸別詳細 */}
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-4">
            10軸の詳細分析
          </p>
          <ResultText results={result.axes} />
        </div>

        {/* アクションボタン */}
        <div className="flex justify-center gap-4 pt-6 flex-wrap">
          <button
            onClick={handleDownload}
            className="px-6 py-2.5 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/40 hover:border-indigo-400 transition-colors text-sm"
          >
            結果をJSONで保存
          </button>
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
