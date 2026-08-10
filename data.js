/* ============================================================
   等級設定與資料組裝（多益 TOEIC 導向）
   ------------------------------------------------------------
   實際內容分散在 data/ 資料夾，方便個別維護：
     單字   *-words.js      語法   *-grammar.js
     Part 5 *-quiz.js       Part 6 *-part6.js      Part 7 *-part7.js
   ------------------------------------------------------------
   words   : { en, pos, zh, phonetic, example, exampleZh }
   grammar : { title, point, examples: [{ en, zh }] }
   quiz    : { part, type, question, options, answer(索引), explain, passage? }
             part 5 → type = 'vocab'(詞彙) | 'form'(詞性) | 'grammar'(文法)
             part 6 → 段落填空，passage 為短文物件
             part 7 → 閱讀理解，passage 為文章組物件
   ============================================================ */

/* Part 6：把每篇短文的 4 個空格攤平成 4 道獨立題目 */
function buildPart6(passages) {
  const items = [];
  passages.forEach((p) => {
    p.blanks.forEach((b, i) => {
      items.push({
        part: 6,
        type: 'part6',
        question: `空格 (${i + 1}) 應填入下列何者？`,
        options: b.options,
        answer: b.answer,
        explain: b.explain,
        passage: p,
        blankNo: i + 1
      });
    });
  });
  return items;
}

/* Part 7：把每組文章的理解題攤平成獨立題目 */
function buildPart7(sets) {
  const items = [];
  sets.forEach((s) => {
    s.questions.forEach((q) => {
      items.push({
        part: 7,
        type: 'part7',
        question: q.q,
        options: q.options,
        answer: q.answer,
        explain: q.explain,
        passage: s
      });
    });
  });
  return items;
}

/* Part 5 的題目本來就是單句題，只補上 part 標記 */
function buildPart5(list) {
  return list.map((q) => Object.assign({ part: 5 }, q));
}

function buildQuiz(part5, part6, part7) {
  // 順序固定為 5 → 6 → 7，這樣已儲存的答對紀錄索引才不會跑掉
  return buildPart5(part5).concat(buildPart6(part6), buildPart7(part7));
}

const DATA = {
  basic: {
    key: 'basic',
    name: '基礎',
    subtitle: 'TOEIC 350-500',
    desc: '辦公室日常字彙、基本時態與詞性判斷，打好 Part 5 的基本盤。',
    words: BASIC_WORDS,
    grammar: BASIC_GRAMMAR,
    quiz: buildQuiz(BASIC_QUIZ, BASIC_PART6, BASIC_PART7)
  },
  intermediate: {
    key: 'intermediate',
    name: '進階',
    subtitle: 'TOEIC 550-700',
    desc: '商務字彙、被動語態、連接詞與介系詞辨析，多益 Part 5 的主要得分區。',
    words: INTER_WORDS,
    grammar: INTER_GRAMMAR,
    quiz: buildQuiz(INTER_QUIZ, INTER_PART6, INTER_PART7)
  },
  advanced: {
    key: 'advanced',
    name: '高級',
    subtitle: 'TOEIC 750-900',
    desc: '正式商務用語、倒裝、假設語氣與平行結構，衝刺 Part 5 難題與 Part 6 銜接。',
    words: ADV_WORDS,
    grammar: ADV_GRAMMAR,
    quiz: buildQuiz(ADV_QUIZ, ADV_PART6, ADV_PART7)
  }
};

const LEVEL_ORDER = ['basic', 'intermediate', 'advanced'];

/* 測驗可選的 Part 分類 */
const PART_INFO = {
  5: { name: 'Part 5', zh: '單句填空', desc: '一句挖一個空，考詞彙、詞性與文法' },
  6: { name: 'Part 6', zh: '段落填空', desc: '商務短文挖四個空，含整句插入題' },
  7: { name: 'Part 7', zh: '閱讀理解', desc: '文章理解，含雙篇與三篇對照題' }
};
const PART_ORDER = [5, 6, 7];
