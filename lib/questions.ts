import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: '友人から急に予定をキャンセルされた。あなたはどう感じますか？',
    choices: [
      { text: '深く傷ついて、何かしたかなとずっと考えてしまう', scores: { love: 2, safety: 1 } },
      { text: '相手が大丈夫か心配で、すぐに連絡を入れる', scores: { love: 1, belonging: 1 } },
      { text: '少し残念だが、すぐ別の予定を考え始める', scores: {} },
      { text: '全く気にならない', scores: {} },
    ],
  },
  {
    id: 2,
    text: '頑張って仕上げた仕事を提出したが、上司から特に反応がなかった。どう感じますか？',
    choices: [
      { text: '認めてもらえなくて、やる気を失う', scores: { recognition: 2, achievement: 1 } },
      { text: '何か足りなかったかと気になって聞きに行く', scores: { recognition: 1 } },
      { text: '自分の中で達成感があれば十分', scores: {} },
      { text: '次の仕事に集中する', scores: {} },
    ],
  },
  {
    id: 3,
    text: '新しい環境（職場や引越し先）に移った初日、どう感じますか？',
    choices: [
      { text: '不安で眠れない。何か失敗するかもと心配', scores: { safety: 2, order: 1 } },
      { text: '早くルールや環境を把握して安心したい', scores: { order: 2, safety: 1 } },
      { text: '誰と仲良くなれるか考えてワクワクする', scores: { belonging: 1 } },
      { text: '特に何も感じない。流れに任せる', scores: {} },
    ],
  },
  {
    id: 4,
    text: 'グループ作業で自分のアイデアが誰にも取り上げられなかった。どうしますか？',
    choices: [
      { text: '傷ついて、その後は発言するのをやめてしまう', scores: { recognition: 2, expression: 2 } },
      { text: 'もっとうまく伝えられなかったかと反省する', scores: { recognition: 1, expression: 1 } },
      { text: '別の機会にまた伝えてみようと思う', scores: {} },
      { text: '誰かが採用してくれればいいかとあまり気にしない', scores: {} },
    ],
  },
  {
    id: 5,
    text: '大切な約束を友人に破られた。どう反応しますか？',
    choices: [
      { text: '深く傷ついて、その友人をしばらく避ける', scores: { trust: 2, love: 1 } },
      { text: '直接「傷ついた」と正直に伝える', scores: { trust: 1 } },
      { text: '相手にも事情があったと自分を納得させる', scores: {} },
      { text: '特に気にならず、また別の機会を作る', scores: {} },
    ],
  },
  {
    id: 6,
    text: 'SNSに投稿したら、いいねや反応がまったくなかった。どう感じますか？',
    choices: [
      { text: 'かなり落ち込む。消したくなる', scores: { recognition: 2 } },
      { text: '少し気になるが、特に行動は起こさない', scores: { recognition: 1 } },
      { text: '投稿した内容が悪かったかと分析する', scores: { recognition: 1 } },
      { text: '反応は関係ない。自分が伝えたかっただけ', scores: {} },
    ],
  },
  {
    id: 7,
    text: '仕事でミスをして上司に指摘された。どう感じますか？',
    choices: [
      { text: '激しく落ち込み、自分はダメだと思い込む', scores: { recognition: 2, achievement: 2 } },
      { text: '怒られることへの恐怖で頭が真っ白になる', scores: { safety: 2 } },
      { text: '反省して次に活かそうと思う', scores: {} },
      { text: '事実を受け止め、淡々と修正に取り掛かる', scores: {} },
    ],
  },
  {
    id: 8,
    text: '週末に予定がなく、ひとりで過ごすことになった。どう感じますか？',
    choices: [
      { text: '孤独でつらく、誰かと話したくなる', scores: { belonging: 2, love: 2 } },
      { text: '久しぶりの自由な時間で何をしようか考えてワクワクする', scores: {} },
      { text: '何か予定を作ろうと誰かに連絡する', scores: { belonging: 1 } },
      { text: '読書や趣味など、ひとりの時間を楽しむ', scores: {} },
    ],
  },
  {
    id: 9,
    text: '誰かが不公平な扱いを受けているのを目撃した。どうしますか？',
    choices: [
      { text: '強い怒りを感じて、声を上げたくなる', scores: { fairness: 2 } },
      { text: '見ていられなくて、こっそりその人を助ける', scores: { fairness: 1 } },
      { text: '気になるが、自分には関係ないと静観する', scores: {} },
      { text: '見なかったことにする', scores: {} },
    ],
  },
  {
    id: 10,
    text: '細かいルールや手順が多い環境で働くことになった。どう感じますか？',
    choices: [
      { text: '窮屈で息が詰まる', scores: { freedom: 2 } },
      { text: 'ルールの意味がわからないと不満に思う', scores: { freedom: 1, fairness: 1 } },
      { text: 'ルールがある方がかえって動きやすい', scores: {} },
      { text: '特に何も感じない', scores: {} },
    ],
  },
  {
    id: 11,
    text: '友人グループで意見が割れた。あなたはどうしますか？',
    choices: [
      { text: '自分の意見が通るまで強く主張し続ける', scores: { expression: 2, freedom: 1 } },
      { text: '意見が無視されると傷つくが、飲み込んでしまう', scores: { expression: 1, recognition: 1 } },
      { text: 'みんなが納得できるまで話し合いたい', scores: { fairness: 1 } },
      { text: '正直どちらでもよく、流れに任せる', scores: {} },
    ],
  },
  {
    id: 12,
    text: '何かに挑戦して失敗した。どう向き合いますか？',
    choices: [
      { text: '自分の能力のなさを責め続ける', scores: { achievement: 2 } },
      { text: '恥ずかしくて誰にも話せない', scores: { recognition: 1, achievement: 1 } },
      { text: '何がよくなかったか分析して次に備える', scores: {} },
      { text: '失敗も経験と思い、すぐ気持ちを切り替える', scores: {} },
    ],
  },
  {
    id: 13,
    text: '家に帰ると、なぜか急に不安な気持ちになる。どうしますか？',
    choices: [
      { text: '安心できる人に話を聞いてもらいたい', scores: { safety: 2, love: 1 } },
      { text: '何が不安なのかを紙に書き出して整理する', scores: { order: 1, safety: 1 } },
      { text: '好きなことをして気を紛らわせる', scores: {} },
      { text: '特に気にせず、そのままにする', scores: {} },
    ],
  },
  {
    id: 14,
    text: '新しいグループや組織に加わった。どう感じますか？',
    choices: [
      { text: '受け入れてもらえるか不安でなかなか馴染めない', scores: { belonging: 2, safety: 1 } },
      { text: '早く全員と仲良くなりたいと積極的に話しかける', scores: { belonging: 2 } },
      { text: 'まず観察して、少しずつ関係を作っていく', scores: {} },
      { text: '特に焦らず、自然に任せる', scores: {} },
    ],
  },
  {
    id: 15,
    text: 'パートナーや家族が疲れていて、あまり話を聞いてくれない夜。どうしますか？',
    choices: [
      { text: '寂しくて傷つく。自分は後回しにされたと感じる', scores: { love: 2, recognition: 1 } },
      { text: '相手を気遣いながらも、つながりを感じたくて一緒にいる', scores: { love: 1 } },
      { text: '相手の疲れを察して、そっとしておく', scores: {} },
      { text: '自分のことをして過ごし、特に気にならない', scores: {} },
    ],
  },
  {
    id: 16,
    text: '誰かに「こうしなさい」と強く指示された。どう感じますか？',
    choices: [
      { text: '強い反発を感じる。自分で決めたい', scores: { freedom: 2 } },
      { text: '従うが、内心モヤモヤする', scores: { freedom: 1 } },
      { text: '理由を聞いてから判断する', scores: {} },
      { text: '特に何も感じず、従う', scores: {} },
    ],
  },
  {
    id: 17,
    text: '計画していたことが急に変更になった。どう反応しますか？',
    choices: [
      { text: '動揺してしまい、なかなか立て直せない', scores: { order: 2, safety: 1 } },
      { text: '少し不満だが、新しい計画を立て直す', scores: { order: 1 } },
      { text: '柔軟に対応できる', scores: {} },
      { text: 'むしろ変化を楽しめる', scores: {} },
    ],
  },
  {
    id: 18,
    text: '自分が作ったものや表現したものを誰かに批判された。どう感じますか？',
    choices: [
      { text: '深く傷ついて、もう作るのをやめたくなる', scores: { expression: 2, recognition: 2 } },
      { text: 'ショックだが、客観的な意見として受け取ろうとする', scores: { expression: 1 } },
      { text: 'どこが問題だったか聞いて改善する', scores: {} },
      { text: '批判はよくあることと、あまり気にしない', scores: {} },
    ],
  },
  {
    id: 19,
    text: 'チームで決まったルールが自分には不公平だと感じた。どうしますか？',
    choices: [
      { text: '強く抗議する', scores: { fairness: 2 } },
      { text: '不満だが波風を立てたくないので黙って従う', scores: { fairness: 1 } },
      { text: '別の方法で解決できないか提案する', scores: {} },
      { text: '気にせず従う', scores: {} },
    ],
  },
  {
    id: 20,
    text: '夜、急に「このままでいいのだろうか」という不安が押し寄せてきた。どうしますか？',
    choices: [
      { text: '眠れなくなるほど考え込む', scores: { safety: 2, achievement: 1 } },
      { text: '信頼できる人に話を聞いてもらいたくなる', scores: { trust: 1, safety: 1 } },
      { text: '明日考えようと割り切って眠る', scores: {} },
      { text: '特にそういう不安を感じたことはない', scores: {} },
    ],
  },
  {
    id: 21,
    text: '誰かと話しているとき、急に話題が変わって自分の話を遮られた。どう感じますか？',
    choices: [
      { text: '傷つく。もっと自分の話を聞いてほしかった', scores: { recognition: 2, expression: 1 } },
      { text: '少し残念だが、話の流れに乗る', scores: { expression: 1 } },
      { text: '特に気にならない', scores: {} },
      { text: 'むしろ話が広がってよかったと思う', scores: {} },
    ],
  },
  {
    id: 22,
    text: '誰かに「あなたはこういう人だ」とレッテルを貼られた。どう感じますか？',
    choices: [
      { text: '強い怒りを感じる。自分は自分で決める', scores: { freedom: 2 } },
      { text: '傷つくが、否定する言葉が出てこない', scores: { freedom: 1, expression: 1 } },
      { text: '少し気になるが、自分なりに消化する', scores: {} },
      { text: 'あまり気にしない', scores: {} },
    ],
  },
  {
    id: 23,
    text: '何かを計画するとき、どんなふうに進めますか？',
    choices: [
      { text: '細かくリストを作らないと不安', scores: { order: 2 } },
      { text: '大まかな計画は立てるが、柔軟に変える', scores: {} },
      { text: '大体の方向性だけ決めて、後は流れで', scores: {} },
      { text: '計画より直感で動く方が好き', scores: { freedom: 1 } },
    ],
  },
  {
    id: 24,
    text: '長い間努力してきたが、思ったほどの結果が出なかった。どう感じますか？',
    choices: [
      { text: '自分の能力を疑い、深く落ち込む', scores: { achievement: 2 } },
      { text: 'もっと努力しなければと焦る', scores: { achievement: 1, recognition: 1 } },
      { text: '方法を見直そうと冷静に考える', scores: {} },
      { text: '結果より過程が大事と切り替えられる', scores: {} },
    ],
  },
  {
    id: 25,
    text: '自分の好きなことや考えを他の人に話したら、つまらなそうな反応をされた。どう感じますか？',
    choices: [
      { text: '深く傷つく。もう人に話したくないと思う', scores: { expression: 2, recognition: 2 } },
      { text: '少し悲しいが、好きなことは変わらない', scores: { expression: 1 } },
      { text: '気にせず話し続ける', scores: {} },
      { text: '趣味は自分だけのものでいいと思っている', scores: {} },
    ],
  },
  {
    id: 26,
    text: '大人数のパーティーや集まりに参加した。どう過ごしますか？',
    choices: [
      { text: '誰かと話せないと不安で、必死に話しかける', scores: { belonging: 2 } },
      { text: '楽しいが、疲れて途中で抜けたくなる', scores: {} },
      { text: '気が合う人と少人数で話す', scores: {} },
      { text: 'ひとりでいることも多く、あまり楽しめない', scores: { belonging: 1 } },
    ],
  },
  {
    id: 27,
    text: '仲の良い友人が自分より先に大きな成功を収めた。どう感じますか？',
    choices: [
      { text: '素直に喜べず、自分が劣っているように感じる', scores: { achievement: 2, recognition: 1 } },
      { text: '少し焦るが、自分も頑張ろうと思う', scores: { achievement: 1 } },
      { text: '純粋に嬉しく、一緒に喜べる', scores: {} },
      { text: '特に何も感じない', scores: {} },
    ],
  },
  {
    id: 28,
    text: '自分は正しいと思うことを、周囲が全員反対している。どうしますか？',
    choices: [
      { text: '正しさを証明したくて、強く主張する', scores: { fairness: 2 } },
      { text: 'それでも自分の意見を貫きたい', scores: { fairness: 1, freedom: 1 } },
      { text: 'みんなの意見も聞いて、考えを柔軟に変える', scores: {} },
      { text: '多数派に合わせる', scores: {} },
    ],
  },
  {
    id: 29,
    text: '信頼していた人に秘密を漏らされた。どう対処しますか？',
    choices: [
      { text: '深く傷ついて、もう誰も信じられないと思う', scores: { trust: 2 } },
      { text: 'その人への信頼はなくなるが、他の人は大丈夫と思う', scores: { trust: 1 } },
      { text: '直接その人に話し、関係を修復しようとする', scores: {} },
      { text: '気にせず流せる', scores: {} },
    ],
  },
  {
    id: 30,
    text: '誰かに頼み事をするとき、どう感じますか？',
    choices: [
      { text: '断られるのが怖くて、なかなか頼めない', scores: { trust: 1, safety: 1 } },
      { text: '迷惑をかけるのが申し訳なくて言いにくい', scores: { belonging: 1, love: 1 } },
      { text: '必要なら素直に頼める', scores: {} },
      { text: 'できるだけ自分でやろうとする', scores: { freedom: 1 } },
    ],
  },
  {
    id: 31,
    text: '自分の感情や気持ちを他の人に話すことについて、どう思いますか？',
    choices: [
      { text: '怖くて話せない。わかってもらえないと思う', scores: { expression: 2, trust: 1 } },
      { text: '信頼できる人にだけ話す', scores: { trust: 1, expression: 1 } },
      { text: '必要に応じて話せる', scores: {} },
      { text: '特に話したいとは思わない', scores: {} },
    ],
  },
  {
    id: 32,
    text: '学校や昔の職場など、過去の集団生活でどんな気持ちだったか、一番近いものは？',
    choices: [
      { text: '常に何かを気にして、緊張していた', scores: { safety: 2, order: 1 } },
      { text: '自分の意見を言いにくい雰囲気があった', scores: { expression: 2, freedom: 1 } },
      { text: '普通に過ごしていた', scores: {} },
      { text: '楽しく自由にのびのびしていた', scores: {} },
    ],
  },
  {
    id: 33,
    text: '大切な人と意見が食い違ったとき、どうしますか？',
    choices: [
      { text: '言いたいことはあるが、うまく言葉にできない', scores: { expression: 2 } },
      { text: '相手に合わせてしまう。揉めたくない', scores: { freedom: 1, expression: 1 } },
      { text: '落ち着いて自分の気持ちを伝える', scores: {} },
      { text: '意見の違いを面白いと感じる', scores: {} },
    ],
  },
  {
    id: 34,
    text: '誰かに親切にしてもらったとき、どう感じますか？',
    choices: [
      { text: '素直に受け取れず、何か裏があるかもと疑う', scores: { trust: 2 } },
      { text: '嬉しいが、お返しをしなければと焦る', scores: { love: 1, belonging: 1 } },
      { text: '素直に「ありがとう」と受け取れる', scores: {} },
      { text: '特に深く考えない', scores: {} },
    ],
  },
  {
    id: 35,
    text: 'ひとりで長時間作業に集中するとき、どう感じますか？',
    choices: [
      { text: '孤独で不安になることがある', scores: { belonging: 1, safety: 1 } },
      { text: '途中で誰かと話したくなる', scores: { belonging: 2 } },
      { text: '集中できて好き', scores: {} },
      { text: '一番いい状態', scores: {} },
    ],
  },
  {
    id: 36,
    text: '「あなたのことが好きだ」と言われたとき、どう感じますか？',
    choices: [
      { text: '信じられず、何か目的があるのではと思う', scores: { trust: 2, love: 1 } },
      { text: '嬉しいが、なぜか不安にもなる', scores: { love: 1, safety: 1 } },
      { text: '素直に嬉しい', scores: {} },
      { text: '少し照れるが、受け取れる', scores: {} },
    ],
  },
  {
    id: 37,
    text: '職場で自分だけ仲間外れにされていると感じた。どうしますか？',
    choices: [
      { text: '強い孤独感と怒りを感じる', scores: { belonging: 2, fairness: 1 } },
      { text: '落ち込むが、自分から関係を作ろうとする', scores: { belonging: 1 } },
      { text: '気にせず自分の仕事に集中する', scores: {} },
      { text: 'それほど気にならない', scores: {} },
    ],
  },
  {
    id: 38,
    text: '何か大きな決断をしなければならないとき、どうしますか？',
    choices: [
      { text: '失敗するのが怖くて、なかなか踏み切れない', scores: { safety: 2, achievement: 1 } },
      { text: '誰かに相談し続けて、なかなか自分では決められない', scores: { safety: 1, trust: 1 } },
      { text: '情報を集めて、自分で決める', scores: {} },
      { text: '直感で決める', scores: {} },
    ],
  },
  {
    id: 39,
    text: '誰かがあなたの行動を批判した。どう感じますか？',
    choices: [
      { text: '激しく傷ついて、しばらく立ち直れない', scores: { recognition: 2 } },
      { text: '反論したくなる', scores: { freedom: 1, fairness: 1 } },
      { text: '参考にできる部分を探す', scores: {} },
      { text: 'あまり気にしない', scores: {} },
    ],
  },
  {
    id: 40,
    text: '「あなたはもっとこうあるべきだ」と言われた。どう感じますか？',
    choices: [
      { text: 'プレッシャーで苦しくなる', scores: { freedom: 2, achievement: 1 } },
      { text: '傷つくが、変わらなければと焦る', scores: { recognition: 1, achievement: 1 } },
      { text: '一つの意見として聞き流す', scores: {} },
      { text: '特に何も感じない', scores: {} },
    ],
  },
];
