/* 英文學習 English Trainer — 主程式 */

const $ = (id) => document.getElementById(id);

const PROFILE_KEY = 'englishTrainerProfiles.v1';
const LEGACY_KEY = 'englishTrainerProgress.v1';   // 舊版單一進度，會自動搬到第一組
const PROFILE_COUNT = 3;

const state = {
  level: null,       // 目前等級 key
  wordIndex: 0,      // 目前單字卡索引
  quiz: null,        // 進行中的測驗
  roundSize: 10,     // 每回合題數（0 = 全部）
  parts: [5, 6, 7]   // 要出題的 Part
};

/* ---------------- 學習者記錄（3 組） ---------------- */
function blankProfile(i) {
  return { name: `學習者 ${i + 1}`, data: {} };
}

function loadProfiles() {
  let p = null;
  try { p = JSON.parse(localStorage.getItem(PROFILE_KEY)); } catch (e) { p = null; }

  if (!p || !Array.isArray(p.slots)) {
    p = { active: 0, slots: [] };
    for (let i = 0; i < PROFILE_COUNT; i++) p.slots.push(blankProfile(i));
    // 舊版只有一份進度，開檔時自動搬進第一組，不讓使用者的紀錄消失
    try {
      const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY));
      if (legacy) p.slots[0].data = legacy;
    } catch (e) { /* 沒有舊資料就略過 */ }
  }
  while (p.slots.length < PROFILE_COUNT) p.slots.push(blankProfile(p.slots.length));
  if (!(p.active >= 0 && p.active < PROFILE_COUNT)) p.active = 0;
  return p;
}

function saveProfiles(p) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

/* ---------------- 進度儲存（讀寫目前這一組） ---------------- */
function loadProgress() {
  const p = loadProfiles();
  return p.slots[p.active].data || {};
}
function saveProgress(data) {
  const p = loadProfiles();
  p.slots[p.active].data = data;
  saveProfiles(p);
}
function levelProgress(key) {
  const p = loadProgress();
  const lv = Object.assign(
    { learned: [], grammarRead: [], correct: [], best: null },
    p[key]
  );
  // 舊版把 best 存成單一數字，統一轉成 { score, total }
  if (typeof lv.best === 'number') lv.best = { score: lv.best, total: 10 };
  return lv;
}
function updateLevelProgress(key, patch) {
  const p = loadProgress();
  p[key] = Object.assign(levelProgress(key), patch);
  saveProgress(p);
}
// 成績以「答對率」比較，這樣 10 題與 50 題的紀錄才有可比性
function bestText(best) {
  if (!best) return '—';
  return `${best.score}/${best.total}（${Math.round((best.score / best.total) * 100)}%）`;
}

/* ---------------- 等級選擇頁 ---------------- */

// 空心圓餅圖：半徑 15.9155 時圓周恰為 100，stroke-dasharray 可直接吃百分比
function donut(label, done, total, colorVar) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return `
    <div class="donut-item">
      <svg class="donut" viewBox="0 0 36 36" role="img" aria-label="${label} ${pct}%">
        <circle class="donut-track" cx="18" cy="18" r="15.9155"></circle>
        ${pct === 0 ? '' /* 0% 時不畫，否則圓形端點會留下一個小點 */ : `
        <circle class="donut-fill" cx="18" cy="18" r="15.9155"
                stroke="var(${colorVar})" stroke-dasharray="${pct} ${100 - pct}"></circle>`}
        <text class="donut-pct" x="18" y="18.5">${pct}%</text>
      </svg>
      <div class="donut-label">${label}</div>
      <div class="donut-count">${done}/${total}</div>
    </div>`;
}

/* ---------------- 學習者記錄卡 ---------------- */
function profileStats(data) {
  let done = 0, total = 0;
  LEVEL_ORDER.forEach((k) => {
    const lv = DATA[k];
    const d = Object.assign({ learned: [], grammarRead: [], correct: [] }, data[k]);
    done += d.learned.length + d.grammarRead.length + d.correct.length;
    total += lv.words.length + lv.grammar.length + lv.quiz.length;
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function renderProfiles() {
  const p = loadProfiles();
  $('activeName').textContent = p.slots[p.active].name;

  const wrap = $('profileCards');
  wrap.innerHTML = '';
  p.slots.forEach((slot, i) => {
    const s = profileStats(slot.data || {});
    const active = i === p.active;
    const card = document.createElement('div');
    card.className = 'profile-card' + (active ? ' active' : '');
    card.innerHTML = `
      <div class="profile-top">
        <input class="profile-name" type="text" maxlength="12" value="${esc(slot.name)}" aria-label="學習者名稱">
        ${active ? '<span class="using-tag">使用中</span>' : ''}
      </div>
      <div class="profile-bar"><div class="profile-bar-fill" style="width:${s.pct}%"></div></div>
      <div class="profile-stat">整體進度 <b>${s.pct}%</b>　<span class="profile-sub">${s.done} / ${s.total} 項</span></div>
      <div class="profile-actions">
        <button class="mini-btn load-btn" ${active ? 'disabled' : ''}>${active ? '目前使用中' : '讀取進度'}</button>
        <button class="mini-btn danger clear-btn">清除記錄</button>
      </div>`;

    const nameInput = card.querySelector('.profile-name');
    const commitName = () => {
      const all = loadProfiles();
      const v = nameInput.value.trim();
      all.slots[i].name = v || `學習者 ${i + 1}`;
      saveProfiles(all);
      renderProfiles();
    };
    nameInput.onchange = commitName;
    nameInput.onkeydown = (e) => { if (e.key === 'Enter') nameInput.blur(); };

    card.querySelector('.load-btn').onclick = () => {
      const all = loadProfiles();
      all.active = i;
      saveProfiles(all);
      renderProfiles();
      renderHome();
    };

    card.querySelector('.clear-btn').onclick = () => {
      const all = loadProfiles();
      const name = all.slots[i].name;
      if (!confirm(`確定要清除「${name}」的所有進度嗎？\n單字、語法與測驗紀錄都會歸零，此動作無法復原。`)) return;
      all.slots[i].data = {};
      saveProfiles(all);
      renderProfiles();
      renderHome();
    };

    wrap.appendChild(card);
  });
}

function renderHome() {
  const wrap = $('levelCards');
  wrap.innerHTML = '';
  LEVEL_ORDER.forEach((key) => {
    const lv = DATA[key];
    const prog = levelProgress(key);
    const card = document.createElement('button');
    card.className = `level-card lv-${key}`;
    card.innerHTML = `
      <span class="lv-badge">${lv.subtitle}</span>
      <h3>${lv.name}</h3>
      <p>${lv.desc}</p>
      <div class="donuts">
        ${donut('單字', prog.learned.length, lv.words.length, '--accent')}
        ${donut('語法', prog.grammarRead.length, lv.grammar.length, '--accent-2')}
        ${donut('題目', prog.correct.length, lv.quiz.length, '--ok')}
      </div>
      <div class="lv-stats">
        <span>最佳成績 <b>${bestText(prog.best)}</b></span>
      </div>`;
    card.onclick = () => openLevel(key);
    wrap.appendChild(card);
  });
}

function openLevel(key) {
  state.level = key;
  state.wordIndex = 0;
  const lv = DATA[key];
  $('levelTitle').textContent = `${lv.name}　${lv.subtitle}`;
  $('levelDesc').textContent = lv.desc;
  $('viewHome').classList.add('hidden');
  $('viewLevel').classList.remove('hidden');
  $('btnHome').style.visibility = 'visible';
  switchTab('words');
  renderWord();
  renderWordList();
  renderGrammar();
  resetQuizView();
}

function goHome() {
  state.level = null;
  $('viewLevel').classList.add('hidden');
  $('viewHome').classList.remove('hidden');
  $('btnHome').style.visibility = 'hidden';
  renderProfiles();
  renderHome();
}

/* ---------------- 分頁切換 ---------------- */
function switchTab(name) {
  document.querySelectorAll('.tab').forEach((t) =>
    t.classList.toggle('active', t.dataset.tab === name)
  );
  ['words', 'grammar', 'quiz'].forEach((n) => {
    $('tab' + n[0].toUpperCase() + n.slice(1)).classList.toggle('hidden', n !== name);
  });
}

/* ---------------- 單字卡 ---------------- */
function currentWords() {
  return DATA[state.level].words;
}

function renderWord() {
  const words = currentWords();
  const w = words[state.wordIndex];
  const prog = levelProgress(state.level);

  $('flashcard').classList.remove('flipped');
  $('fcWord').textContent = w.en;
  $('fcPhonetic').textContent = w.phonetic;
  $('fcPos').textContent = w.pos;
  $('fcZh').textContent = w.zh;
  $('fcExample').textContent = w.example;
  $('fcExampleZh').textContent = w.exampleZh;

  $('wordCounter').textContent = `${state.wordIndex + 1} / ${words.length}`;
  $('learnedCounter').textContent = `已學會 ${prog.learned.length} / ${words.length}`;

  const isLearned = prog.learned.includes(w.en);
  $('markLearned').textContent = isLearned ? '✓ 已學會（點擊取消）' : '標記為已學會';

  document.querySelectorAll('#wordList li').forEach((li, i) => {
    li.classList.toggle('current', i === state.wordIndex);
    li.classList.toggle('learned', prog.learned.includes(words[i].en));
  });
}

function renderWordList() {
  const list = $('wordList');
  list.innerHTML = '';
  currentWords().forEach((w, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${w.en}</span>`;
    li.onclick = () => { state.wordIndex = i; renderWord(); };
    list.appendChild(li);
  });
}

function moveWord(step) {
  const n = currentWords().length;
  state.wordIndex = (state.wordIndex + step + n) % n;
  renderWord();
}

function toggleLearned() {
  const w = currentWords()[state.wordIndex];
  const prog = levelProgress(state.level);
  const i = prog.learned.indexOf(w.en);
  if (i === -1) prog.learned.push(w.en);
  else prog.learned.splice(i, 1);
  updateLevelProgress(state.level, { learned: prog.learned });
  renderWord();
}

/* ---------------- 語法 ---------------- */
function renderGrammar() {
  const lv = DATA[state.level];
  const prog = levelProgress(state.level);
  $('grammarCounter').textContent = `已讀 ${prog.grammarRead.length} / ${lv.grammar.length}`;

  const wrap = $('grammarList');
  wrap.innerHTML = '';
  lv.grammar.forEach((g, i) => {
    const isRead = prog.grammarRead.includes(g.title);
    const item = document.createElement('div');
    item.className = 'grammar-item' + (i === 0 ? ' open' : '') + (isRead ? ' read' : '');
    const exHtml = g.examples
      .map((e) => `<div class="g-ex"><div class="en">${e.en}</div><div class="zh">${e.zh}</div></div>`)
      .join('');
    item.innerHTML = `
      <button class="grammar-head"><span class="g-title">${i + 1}. ${g.title}</span><span class="arrow">▸</span></button>
      <div class="grammar-body" ${i === 0 ? '' : 'style="display:none"'}>
        <p class="point">${g.point}</p>${exHtml}
        <button class="read-btn">${isRead ? '✓ 已讀（點擊取消）' : '標記為已讀'}</button>
      </div>`;
    const body = item.querySelector('.grammar-body');
    item.querySelector('.grammar-head').onclick = () => {
      const open = item.classList.toggle('open');
      body.style.display = open ? '' : 'none';
    };
    item.querySelector('.read-btn').onclick = () => toggleGrammarRead(g.title);
    wrap.appendChild(item);
  });
}

function toggleGrammarRead(title) {
  const prog = levelProgress(state.level);
  const i = prog.grammarRead.indexOf(title);
  if (i === -1) prog.grammarRead.push(title);
  else prog.grammarRead.splice(i, 1);
  updateLevelProgress(state.level, { grammarRead: prog.grammarRead });
  renderGrammar();
}

/* ---------------- 測驗 ---------------- */
const TYPE_LABEL = {
  vocab: '詞彙題', form: '詞性題', grammar: '文法題',
  part6: '段落填空', part7: '閱讀理解'
};
const KIND_LABEL = { single: '單篇', double: '雙篇', triple: '三篇' };

function typeLabel(item) {
  const t = TYPE_LABEL[item.type] || '題目';
  return `Part ${item.part}・${t}`;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 打亂單一題目的選項，並把 answer 索引指回原本那個正確選項
function shuffleOptions(item) {
  const correctText = item.options[item.answer];
  const options = shuffle(item.options);
  return Object.assign({}, item, { options, answer: options.indexOf(correctText) });
}

function partPool() {
  return DATA[state.level].quiz.filter((q) => state.parts.includes(q.part));
}

function renderPartPicker() {
  const lv = DATA[state.level];
  const wrap = $('partPicker');
  wrap.innerHTML = '';
  PART_ORDER.forEach((n) => {
    const info = PART_INFO[n];
    const total = lv.quiz.filter((q) => q.part === n).length;
    const on = state.parts.includes(n);
    const b = document.createElement('button');
    b.className = 'part-btn' + (on ? ' active' : '');
    b.innerHTML = `
      <span class="part-name">${info.name}</span>
      <span class="part-zh">${info.zh}</span>
      <span class="part-desc">${info.desc}</span>
      <span class="part-total">${total} 題</span>`;
    b.onclick = () => {
      const i = state.parts.indexOf(n);
      if (i === -1) state.parts.push(n);
      else if (state.parts.length > 1) state.parts.splice(i, 1); // 至少要留一個
      renderPartPicker();
      updateQuizCount();
    };
    wrap.appendChild(b);
  });
}

function updateQuizCount() {
  $('quizCount').textContent = partPool().length;
}

function resetQuizView() {
  const prog = levelProgress(state.level);
  renderPartPicker();
  updateQuizCount();
  $('quizBest').textContent = prog.best ? `目前最佳成績：${bestText(prog.best)}` : '';
  $('quizIntro').classList.remove('hidden');
  $('quizPlay').classList.add('hidden');
  $('quizResult').classList.add('hidden');
}

function startQuiz() {
  const lv = DATA[state.level];
  const prog = levelProgress(state.level);

  // 保留題目在題庫中的原始索引 _i，才能記錄「哪幾題答對過」
  const pool = lv.quiz
    .map((q, i) => Object.assign({ _i: i }, q))
    .filter((q) => state.parts.includes(q.part));

  // Part 6/7 的同一篇文章要黏在一起出，否則會反覆重讀同一篇短文
  const groups = [];
  const byPassage = {};
  pool.forEach((q) => {
    if (!q.passage) { groups.push([q]); return; }
    if (!byPassage[q.passage.id]) { byPassage[q.passage.id] = []; groups.push(byPassage[q.passage.id]); }
    byPassage[q.passage.id].push(q);
  });

  let ordered = $('shuffleToggle').checked ? shuffle(groups) : groups;
  if ($('freshToggle').checked) {
    const hasFresh = (g) => g.some((q) => !prog.correct.includes(q._i));
    ordered = ordered.filter(hasFresh).concat(ordered.filter((g) => !hasFresh(g)));
  }

  // 依題數上限收題，但不切斷同一篇文章的題組
  let items = [];
  if (state.roundSize > 0) {
    for (const g of ordered) {
      if (items.length && items.length + g.length > state.roundSize) continue;
      items = items.concat(g);
      if (items.length >= state.roundSize) break;
    }
  } else {
    items = ordered.flat();
  }

  // 每回合重新排列四個選項，避免正確答案長期集中在同一個位置
  items = items.map(shuffleOptions);

  state.quiz = { items, index: 0, score: 0, wrong: [], answered: false };
  $('quizIntro').classList.add('hidden');
  $('quizResult').classList.add('hidden');
  $('quizPlay').classList.remove('hidden');
  renderQuestion();
}

// 把純文字安全地放進 HTML
function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

function renderPassage(item) {
  const box = $('passageBox');
  if (!item.passage) { box.classList.add('hidden'); box.innerHTML = ''; return; }
  box.classList.remove('hidden');

  if (item.part === 6) {
    // 短文中的 ___1___ 換成可視的空格，目前作答的那一格會高亮
    const body = esc(item.passage.text).replace(/___(\d)___/g, (m, n) =>
      `<span class="pblank${+n === item.blankNo ? ' current' : ''}">(${n})</span>`);
    box.innerHTML = `
      <div class="passage-head"><span class="doc-label">${esc(item.passage.label)}</span>${esc(item.passage.title)}</div>
      <div class="passage-body">${body}</div>`;
    return;
  }

  const kind = KIND_LABEL[item.passage.kind] || '';
  box.innerHTML =
    `<div class="passage-head"><span class="doc-label">${kind}</span>${item.passage.docs.length} 份文件</div>` +
    item.passage.docs.map((d) => `
      <div class="passage-doc">
        <div class="doc-title">${esc(d.label)}</div>
        <div class="passage-body">${esc(d.text)}</div>
      </div>`).join('');
}

function renderQuestion() {
  const q = state.quiz;
  const item = q.items[q.index];
  q.answered = false;

  $('quizBarFill').style.width = `${(q.index / q.items.length) * 100}%`;
  $('quizProgress').textContent = `第 ${q.index + 1} / ${q.items.length} 題`;
  $('quizScore').textContent = `答對 ${q.score} 題`;
  $('quizType').textContent = typeLabel(item);
  renderPassage(item);
  $('quizQuestion').textContent = item.question;
  $('quizFeedback').classList.add('hidden');
  $('nextQuestion').classList.add('hidden');
  $('nextQuestion').textContent =
    q.index === q.items.length - 1 ? '看結果 →' : '下一題 →';

  const box = $('quizOptions');
  box.innerHTML = '';
  item.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `<span class="key">${'ABCD'[i]}</span><span>${opt}</span>`;
    btn.onclick = () => answer(i);
    box.appendChild(btn);
  });
}

function answer(picked) {
  const q = state.quiz;
  if (q.answered) return;
  q.answered = true;

  const item = q.items[q.index];
  const correct = picked === item.answer;
  const btns = [...document.querySelectorAll('#quizOptions .opt')];

  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === item.answer) b.classList.add('correct');
    if (i === picked && !correct) b.classList.add('wrong');
  });

  if (correct) {
    q.score++;
    const prog = levelProgress(state.level);
    if (!prog.correct.includes(item._i)) {
      prog.correct.push(item._i);
      updateLevelProgress(state.level, { correct: prog.correct });
    }
  } else {
    q.wrong.push({
      question: item.question,
      correct: item.options[item.answer],
      picked: item.options[picked],
      explain: item.explain
    });
  }

  const fb = $('quizFeedback');
  fb.className = 'quiz-feedback ' + (correct ? 'ok' : 'bad');
  fb.innerHTML = correct
    ? `<span class="tag">✓ 答對了！</span>${item.explain}`
    : `<span class="tag">✗ 答錯了</span>正確答案：<strong>${item.options[item.answer]}</strong><br>${item.explain}`;

  $('quizScore').textContent = `答對 ${q.score} 題`;
  $('nextQuestion').classList.remove('hidden');
}

function nextQuestion() {
  const q = state.quiz;
  if (!q.answered) return;
  if (q.index < q.items.length - 1) {
    q.index++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const q = state.quiz;
  const total = q.items.length;
  const pct = Math.round((q.score / total) * 100);

  const prog = levelProgress(state.level);
  if (!prog.best || q.score / total > prog.best.score / prog.best.total) {
    updateLevelProgress(state.level, { best: { score: q.score, total: total } });
  }

  $('quizPlay').classList.add('hidden');
  $('quizResult').classList.remove('hidden');
  $('scoreText').textContent = `${q.score} / ${total}`;
  document.querySelector('.score-ring').style.setProperty('--pct', pct + '%');

  $('scoreComment').textContent =
    pct === 100 ? '完美！可以挑戰下一個等級了 🎉'
    : pct >= 80 ? '很不錯！再複習一下錯的題目就更穩了。'
    : pct >= 60 ? '及格了，建議回去把單字卡再翻一輪。'
    : '別灰心，先看單字與語法說明，再回來挑戰一次！';

  const rev = $('wrongReview');
  if (q.wrong.length === 0) {
    rev.innerHTML = '<p class="score-comment">這次沒有答錯的題目 👏</p>';
  } else {
    rev.innerHTML =
      '<h4 style="margin-bottom:10px">錯題回顧</h4>' +
      q.wrong.map((w) => `
        <div class="wrong-item">
          <div class="q">${w.question}</div>
          <div>你的答案：${w.picked}　|　<span class="a">正解：${w.correct}</span></div>
          <div class="e">${w.explain}</div>
        </div>`).join('');
  }
}

/* ---------------- 事件綁定 ---------------- */
$('btnHome').onclick = goHome;
document.querySelectorAll('.tab').forEach((t) => {
  t.onclick = () => switchTab(t.dataset.tab);
});
$('flashcard').onclick = () => $('flashcard').classList.toggle('flipped');
$('prevWord').onclick = () => moveWord(-1);
$('nextWord').onclick = () => moveWord(1);
$('markLearned').onclick = toggleLearned;
document.querySelectorAll('.size-btn').forEach((b) => {
  b.onclick = () => {
    state.roundSize = +b.dataset.size;
    document.querySelectorAll('.size-btn').forEach((x) => x.classList.toggle('active', x === b));
  };
});
$('startQuiz').onclick = startQuiz;
$('nextQuestion').onclick = nextQuestion;
$('retryQuiz').onclick = startQuiz;
$('backToStudy').onclick = () => { switchTab('words'); resetQuizView(); };

// 鍵盤操作：← → 換單字，空白鍵翻卡，1~4 選答案，Enter 下一題
document.addEventListener('keydown', (e) => {
  if (!state.level) return;
  const quizVisible = !$('tabQuiz').classList.contains('hidden');
  const playing = quizVisible && !$('quizPlay').classList.contains('hidden');

  if (playing) {
    if (['1', '2', '3', '4'].includes(e.key)) {
      const btns = document.querySelectorAll('#quizOptions .opt');
      const b = btns[+e.key - 1];
      if (b && !b.disabled) b.click();
    } else if (e.key === 'Enter') {
      nextQuestion();
    }
    return;
  }

  if (!$('tabWords').classList.contains('hidden')) {
    if (e.key === 'ArrowRight') moveWord(1);
    else if (e.key === 'ArrowLeft') moveWord(-1);
    else if (e.key === ' ') { e.preventDefault(); $('flashcard').click(); }
  }
});

/* ---------------- 啟動 ---------------- */
$('btnHome').style.visibility = 'hidden';
renderProfiles();
renderHome();
