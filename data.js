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

/* 從短文中取出「含指定空格、且已填入正解」的那一句英文。
   縮寫、小數、信箱與網域中的句點都不是句尾，需先保護再切句。 */
function blankSentence(passage, blankNo, answer) {
  const M = String.fromCharCode(1);   // 標記空格位置
  const D = String.fromCharCode(2);   // 暫時取代不該斷句的句點
  const protect = (s) => s
    .replace(/\b([AP])\.M\.(?=\s+[A-Z_])/g, '$1' + D + 'M.')
    .replace(/\b([AP])\.M\./g, '$1' + D + 'M' + D)
    .replace(/\b(Mr|Ms|Mrs|Dr|St|Jr|Inc|Ltd|vs|etc|No)\./g, '$1' + D)
    .replace(/(\d)\.(\d)/g, '$1' + D + '$2')
    .replace(/\.(com|org|net|edu|gov|io|ie|co|uk|de|jp|tw)\b/g, D + '$1');

  let t = protect(passage.text);
  t = t.replace('___' + blankNo + '___', M + protect(answer))
       .replace(/___\d___/g, '(  )');          // 其他空格不揭露答案

  const lines = t.split('\n');
  for (const line of lines) {
    if (line.indexOf(M) === -1) continue;
    const parts = line.match(/[^.!?]+[.!?]*["'”]*/g) || [line];
    for (const s of parts) {
      if (s.indexOf(M) !== -1) {
        return s.split(D).join('.').split(M).join('').trim();
      }
    }
  }
  return '';
}

/* Part 6：把每篇短文的 4 個空格攤平成 4 道獨立題目
   zhList 依「短文順序 × 每篇 4 格」攤平，長度不符時整批不附翻譯 */
function buildPart6(passages, zhList) {
  const items = [];
  const total = passages.reduce((n, p) => n + p.blanks.length, 0);
  const ok = Array.isArray(zhList) && zhList.length === total;
  if (zhList && !ok) {
    console.warn('Part 6 翻譯數量與空格數量不符，已略過翻譯：', total, 'vs', zhList.length);
  }
  let k = 0;
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
        blankNo: i + 1,
        en: blankSentence(p, i + 1, b.options[b.answer]),
        zh: ok ? zhList[k] : ''
      });
      k++;
    });
  });
  return items;
}

/* Part 7：把每組文章的理解題攤平成獨立題目
   zhList 每筆為 [題目中譯, 正解中譯]，文章本身不翻譯 */
function buildPart7(sets, zhList) {
  const items = [];
  const total = sets.reduce((n, s) => n + s.questions.length, 0);
  const ok = Array.isArray(zhList) && zhList.length === total;
  if (zhList && !ok) {
    console.warn('Part 7 翻譯數量與題目數量不符，已略過翻譯：', total, 'vs', zhList.length);
  }
  let k = 0;
  sets.forEach((s) => {
    s.questions.forEach((q) => {
      const pair = ok ? zhList[k] : null;
      items.push({
        part: 7,
        type: 'part7',
        question: q.q,
        options: q.options,
        answer: q.answer,
        explain: q.explain,
        passage: s,
        zh: pair ? pair[0] : '',
        zhAnswer: pair ? pair[1] : ''
      });
      k++;
    });
  });
  return items;
}

/* Part 5 的題目本來就是單句題，補上 part 標記與中文翻譯
   zhList 的順序必須與 list 完全一致；長度不符時寧可不附翻譯，也不要對錯行 */
function buildPart5(list, zhList) {
  const ok = Array.isArray(zhList) && zhList.length === list.length;
  if (zhList && !ok) {
    console.warn('Part 5 翻譯數量與題目數量不符，已略過翻譯：',
      list.length, 'vs', zhList.length);
  }
  return list.map((q, i) => Object.assign({ part: 5, zh: ok ? zhList[i] : '' }, q));
}

function buildQuiz(part5, part5zh, part6, part6zh, part7, part7zh) {
  // 順序固定為 5 → 6 → 7，這樣已儲存的答對紀錄索引才不會跑掉
  return buildPart5(part5, part5zh)
    .concat(buildPart6(part6, part6zh), buildPart7(part7, part7zh));
}

const DATA = {
  basic: {
    key: 'basic',
    name: '基礎',
    subtitle: 'TOEIC 350-500',
    desc: '辦公室日常字彙、基本時態與詞性判斷，打好 Part 5 的基本盤。',
    words: BASIC_WORDS,
    grammar: BASIC_GRAMMAR,
    quiz: buildQuiz(BASIC_QUIZ, BASIC_P5_ZH, BASIC_PART6, BASIC_P6_ZH, BASIC_PART7, BASIC_P7_ZH)
  },
  intermediate: {
    key: 'intermediate',
    name: '進階',
    subtitle: 'TOEIC 550-700',
    desc: '商務字彙、被動語態、連接詞與介系詞辨析，多益 Part 5 的主要得分區。',
    words: INTER_WORDS,
    grammar: INTER_GRAMMAR,
    quiz: buildQuiz(INTER_QUIZ, INTER_P5_ZH, INTER_PART6, INTER_P6_ZH, INTER_PART7, INTER_P7_ZH)
  },
  advanced: {
    key: 'advanced',
    name: '高級',
    subtitle: 'TOEIC 750-900',
    desc: '正式商務用語、倒裝、假設語氣與平行結構，衝刺 Part 5 難題與 Part 6 銜接。',
    words: ADV_WORDS,
    grammar: ADV_GRAMMAR,
    quiz: buildQuiz(ADV_QUIZ, ADV_P5_ZH, ADV_PART6, ADV_P6_ZH, ADV_PART7, ADV_P7_ZH)
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
