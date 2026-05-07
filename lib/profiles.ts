import { AxisKey, AxisResult, ContradictionInsight, ProfileType } from './types';

export const profileDefs: ProfileType[] = [
  {
    id: 'A',
    name: '情緒的剥奪型',
    tagline: '感情を受け取ってもらえなかった環境',
    description:
      'あなたの回答パターンから見えてくるのは、感情的な意味でのつながりを切実に求めてきた人の姿です。頑張ることは求められたかもしれない。物質的には満たされていたかもしれない。それでも、感情そのものを受け止めてもらえる場が少なかった可能性があります。あなたが感じてきた孤独は、あなたの弱さではありません。それは、本来満たされるべきものが満たされなかった環境への、正直な反応だったのです。',
    primaryAxes: ['love', 'recognition', 'belonging'],
  },
  {
    id: 'B',
    name: '管理・統制型',
    tagline: '自分の意志を持つことが難しかった環境',
    description:
      'あなたの回答パターンから、自分の内側——感情、意見、創造性——を外に出すことへの強い渇望と、それへの恐れが同時に見えてきます。「こうしなさい」「こうあるべきだ」という声が強かった環境で育った可能性があります。自分の気持ちや考えを表に出す前に、それが許されるかどうかを確認しなければならなかったのかもしれません。「自分の気持ちを持っていい」「それを言葉にしていい」——そう感じる経験が、あなたにはもっと必要だったのかもしれません。',
    primaryAxes: ['freedom', 'expression'],
  },
  {
    id: 'C',
    name: '混沌・不安定型',
    tagline: '先が見えない不安定な環境',
    description:
      '「安心して、ここにいていい」——そう感じることが、あなたにとって長い間難しかったのかもしれません。何が起きるかわからない、いつ状況が変わるかわからない、そんな予測不能な環境の中で過ごしてきた可能性があります。安心できる「ここは大丈夫」という感覚を、ずっと探し続けてきたのかもしれません。安心できる場所を探し続けてきたあなたの感覚は、決して弱さではなく、不安定な環境に適応しようとした強さの証でもあります。',
    primaryAxes: ['safety', 'order', 'trust'],
  },
  {
    id: 'D',
    name: '過剰期待型',
    tagline: '成果で愛されようとしてきた環境',
    description:
      'あなたの回答パターンには、「十分であること」への強い渇望が見えます。どんなに頑張っても「もっと」と求められるような感覚の中で育ってきたのかもしれません。「もっとできるはず」「なぜこれができないのか」——成果や能力に高い基準が置かれた環境で、がんばることで認めてもらおうとする習慣が深く身についているのかもしれません。あなたの価値は、あなたの成果とは切り離されているべきものです。それは当然のことでしたが、そう感じる機会が少なかったのかもしれません。',
    primaryAxes: ['achievement', 'recognition'],
  },
  {
    id: 'E',
    name: '孤立・不信型',
    tagline: '人を信じることが難しかった環境',
    description:
      '人とつながりたいという気持ちと、つながることへの恐れが、あなたの中で長い時間を共存してきたようです。信頼していた誰かに傷つけられた経験、または居場所を感じられなかった時間が長かった可能性があります。人とつながりたい気持ちと、つながることへの恐れが、同時に存在しているのかもしれません。あなたが人を慎重に見るのは、傷ついた経験からくる知恵でもあります。それを責める必要はありません。',
    primaryAxes: ['trust', 'belonging', 'safety'],
  },
  {
    id: 'F',
    name: '総合充足型',
    tagline: '全般的に安定した充足環境',
    description:
      'あなたの回答パターンは、多くの欲求が概ね満たされた環境で育った可能性を示しています。感情的に応答的で、安定した関係性の中で、自分らしさを育てることができた時間があったのではないでしょうか。それは決して当たり前のことではなく、誰かがそれをあなたに手渡してくれた結果です。感情的に豊かで安定した基盤を持つあなたには、その安定を周囲と分かち合う力もきっとあるでしょう。',
    primaryAxes: [],
  },
];

export function detectProfile(results: AxisResult[]): ProfileType {
  const highAxes = results.filter((r) => r.score >= 65);

  if (highAxes.length === 0) {
    return profileDefs.find((p) => p.id === 'F')!;
  }

  const highKeys = new Set(highAxes.map((r) => r.key));

  const scored = profileDefs
    .filter((p) => p.id !== 'F')
    .map((p) => {
      const matches = p.primaryAxes.filter((a) => highKeys.has(a)).length;
      // Tie-break: use the ESI score of the profile's best-matching primary axis
      const bestScore = p.primaryAxes.reduce(
        (max, a) => Math.max(max, results.find((r) => r.key === a)?.score ?? 0),
        0
      );
      return { profile: p, matches, bestScore };
    })
    .sort((a, b) => b.matches - a.matches || b.bestScore - a.bestScore);

  return scored[0].profile;
}

export function detectContradictions(results: AxisResult[]): ContradictionInsight[] {
  const s = Object.fromEntries(results.map((r) => [r.key, r.score])) as Record<AxisKey, number>;
  const insights: ContradictionInsight[] = [];

  if (s.freedom >= 65 && s.order >= 65) {
    insights.push({
      title: '自由と秩序の逆説',
      text: '自由を強く求めながら、秩序・構造も強く求めています。一見矛盾しますが、これは「本当の選択肢がなかった」ことと「環境が混沌としていた」が同時に存在していた可能性を示します。管理はされていたが、それは一貫したルールではなく予測不能な支配だった——そんな環境の痕跡かもしれません。',
    });
  }

  if (s.love >= 65 && s.trust >= 65) {
    insights.push({
      title: '愛情と不信の逆説',
      text: '深くつながりたいという渇望と、人を信じることへの強い恐れが共存しています。これは「愛着傷つき」の典型的なパターンです。愛着を持った相手から傷つけられた経験が、「愛したい・愛されたい」という欲求と「信じたら傷つく」という恐れを同時に生み出している可能性があります。',
    });
  }

  if (s.belonging >= 65 && s.freedom >= 65) {
    insights.push({
      title: '所属と自律の逆説',
      text: '仲間の中にいたいという気持ちと、自分の意志で動きたいという気持ちが両立しています。集団に属しながらも自分らしさを失いたくない——これは、集団の中で自分を抑えなければならなかった経験の反映かもしれません。',
    });
  }

  if (s.recognition >= 65 && s.expression >= 65) {
    insights.push({
      title: '承認欲求と表現抑圧の逆説',
      text: '認められたいという強い渇望がある一方で、自分を表現することへの恐れも強く見られます。「見てほしいが、見られることが怖い」という状態です。表現したときに批判や無視を受けた経験が、このパターンを生んでいるのかもしれません。',
    });
  }

  return insights;
}

export function generateOverallSummary(
  profile: ProfileType,
  results: AxisResult[]
): string {
  const topAxes = [...results]
    .filter((r) => r.score >= 65)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  const axisLine =
    topAxes.length > 0
      ? `特に「${topAxes.map((a) => a.label).join('」と「')}」への渇望が強く、そこに過去の環境が色濃く影響している可能性があります。`
      : '各次元のスコアはおおむね安定しており、全体的に充足された環境が伺えます。';

  return `${profile.description}\n\n${axisLine}`;
}
