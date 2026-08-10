/* 英文學習 English Trainer — 主程式 */

const $ = (id) => document.getElementById(id);

const PROFILE_KEY = 'englishTrainerProfiles.v2';
const LEGACY_V1_KEY = 'englishTrainerProfiles.v1';  // 舊版：固定三組、以索引記錄
const LEGACY_V0_KEY = 'englishTrainerProgress.v1';  // 更舊版：只有單一份進度

const state = {
  level: null,       // 目前等級 key
  wordIndex: 0,      // 目前單字卡索引
  quiz: null,        // 進行中的測驗
  roundSize: 10,     // 每回合題數（0 = 全部）
  parts: [5, 6, 7],  // 要出題的 Part
  pickerOpen: false, // 切換學習者的面板是否展開
  renaming: false    // 是否處於改名模式
};

/* ---------------- 學習者記錄（數量不限） ---------------- */
let idSeq = 0;
function newProfileId() {
  idSeq += 1;
  return 'p' + Date.now().toString(36) + '-' + idSeq;
}

function hasAnyProgress(data) {
  return LEVEL_ORDER.some((k) => {
    const d = data && data[k];
    if (!d) return false;
    return (d.learned || []).length || (d.grammarRead || []).length ||
           (d.correct || []).length || d.best;
  });
}

function loadProfiles() {
  let p = null;
  try { p = JSON.parse(localStorage.getItem(PROFILE_KEY)); } catch (e) { p = null; }

  if (p && Array.isArray(p.slots)) {
    // 指向已刪除的學習者時視為未選擇
    if (!p.slots.some((s) => s.id === p.activeId)) p.activeId = null;
    return p;
  }

  // 從舊版搬移。只留下真的有進度或有自訂名稱的，避免帶進三個空殼
  p = { activeId: null, slots: [] };
  try {
    const v1 = JSON.parse(localStorage.getItem(LEGACY_V1_KEY));
    if (v1 && Array.isArray(v1.slots)) {
      v1.slots.forEach((s, i) => {
        const named = s.name && !/^學習者 \d+$/.test(s.name);
        if (hasAnyProgress(s.data) || named) {
          p.slots.push({ id: newProfileId(), name: s.name || `學習者 ${i + 1}`, data: s.data || {} });
        }
      });
    }
  } catch (e) { /* 沒有 v1 資料 */ }

  if (!p.slots.length) {
    try {
      const v0 = JSON.parse(localStorage.getItem(LEGACY_V0_KEY));
      if (hasAnyProgress(v0)) p.slots.push({ id: newProfileId(), name: '學習者 1', data: v0 });
    } catch (e) { /* 沒有 v0 資料 */ }
  }
  return p;
}

function saveProfiles(p) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

function activeSlot() {
  const p = loadProfiles();
  return p.slots.find((s) => s.id === p.activeId) || null;
}

/* ---------------- 進度儲存（讀寫目前選定的學習者） ---------------- */
function loadProgress() {
  const s = activeSlot();
  return s ? (s.data || {}) : {};
}
function saveProgress(data) {
  const p = loadProfiles();
  const s = p.slots.find((x) => x.id === p.activeId);
  if (!s) return;   // 未選擇學習者時不寫入任何進度
  s.data = data;
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

/* --- 學習者的各項操作 --- */
function selectProfile(id) {
  const p = loadProfiles();
  p.activeId = id;
  saveProfiles(p);
  state.pickerOpen = false;
  state.renaming = false;
  refreshHome();
}

function addProfile(rawName) {
  const p = loadProfiles();
  const name = (rawName || '').trim() || `學習者 ${p.slots.length + 1}`;
  const slot = { id: newProfileId(), name: name, data: {} };
  p.slots.push(slot);
  p.activeId = slot.id;          // 新增後直接切換過去
  saveProfiles(p);
  state.pickerOpen = false;
  refreshHome();
}

function renameActiveProfile(rawName) {
  const name = (rawName || '').trim();
  // 空白視同取消：保留原名並離開編輯狀態，不要卡在輸入框讓人以為當掉
  if (!name) { state.renaming = false; refreshHome(); return; }
  const p = loadProfiles();
  const s = p.slots.find((x) => x.id === p.activeId);
  if (!s) return;
  s.name = name;
  saveProfiles(p);
  state.renaming = false;
  refreshHome();
}

function clearActiveProgress() {
  const p = loadProfiles();
  const s = p.slots.find((x) => x.id === p.activeId);
  if (!s) return;
  if (!confirm(`確定要清除「${s.name}」的所有進度嗎？\n單字、語法與測驗紀錄都會歸零，此動作無法復原。`)) return;
  s.data = {};
  saveProfiles(p);
  refreshHome();
}

function deleteProfile(id) {
  const p = loadProfiles();
  const s = p.slots.find((x) => x.id === id);
  if (!s) return;
  if (!confirm(`確定要刪除學習者「${s.name}」嗎？\n這會連同他的所有進度一起移除，無法復原。`)) return;
  p.slots = p.slots.filter((x) => x.id !== id);
  if (p.activeId === id) p.activeId = null;   // 刪掉的是自己，就回到未選擇狀態
  saveProfiles(p);
  refreshHome();
}

function refreshHome() {
  renderProfiles();
  renderHome();
}

/* --- 畫面 --- */
function el(html) {
  const d = document.createElement('div');
  d.innerHTML = html.trim();
  return d.firstElementChild;
}

function activeProfileCard(slot) {
  const s = profileStats(slot.data || {});
  const card = el(`
    <div class="profile-card active">
      <div class="profile-top">
        <div class="profile-id">
          <span class="who-label">目前學習者</span>
          <div class="profile-name-view">${esc(slot.name)}</div>
        </div>
        <button class="switch-btn">切換學習者</button>
      </div>
      <div class="profile-bar"><div class="profile-bar-fill" style="width:${s.pct}%"></div></div>
      <div class="profile-stat">整體進度 <b>${s.pct}%</b>　<span class="profile-sub">${s.done} / ${s.total} 項</span></div>
      <div class="profile-actions">
        <button class="mini-btn rename-btn">修改名稱</button>
        <button class="mini-btn danger clear-btn">清除此學習者的進度</button>
      </div>
    </div>`);

  card.querySelector('.switch-btn').onclick = () => {
    state.pickerOpen = !state.pickerOpen;
    state.renaming = false;
    renderProfiles();
  };
  card.querySelector('.rename-btn').onclick = () => {
    state.renaming = true;
    state.pickerOpen = false;
    renderProfiles();
  };
  card.querySelector('.clear-btn').onclick = clearActiveProgress;

  // 改名模式：名稱平常是純文字，按下「修改名稱」才變成輸入框，
  // 避免手滑打字就改掉別人的名字
  if (state.renaming) {
    const view = card.querySelector('.profile-name-view');
    const box = el(`
      <div class="rename-box">
        <input class="rename-input" type="text" maxlength="16" value="${esc(slot.name)}" aria-label="學習者名稱">
        <button class="mini-btn save-btn">儲存</button>
        <button class="mini-btn cancel-btn">取消</button>
      </div>`);
    view.replaceWith(box);
    const input = box.querySelector('.rename-input');
    box.querySelector('.save-btn').onclick = () => renameActiveProfile(input.value);
    box.querySelector('.cancel-btn').onclick = () => { state.renaming = false; renderProfiles(); };
    input.onkeydown = (e) => {
      if (e.key === 'Enter') renameActiveProfile(input.value);
      if (e.key === 'Escape') { state.renaming = false; renderProfiles(); }
    };
    setTimeout(() => { input.focus(); input.select(); }, 0);
  }
  return card;
}

function choosePromptCard(p) {
  const empty = p.slots.length === 0;
  const card = el(`
    <div class="choose-card">
      <div class="choose-title">請選擇您的進度</div>
      <p class="choose-text">
        ${empty
          ? '目前還沒有任何學習者，請先新增一位再開始學習。'
          : '為避免使用到別人的紀錄，請先選擇您自己的學習者。'}
      </p>
      <button class="primary-btn big choose-btn">${empty ? '＋ 新增學習者' : '選擇學習者'}</button>
    </div>`);
  card.querySelector('.choose-btn').onclick = () => {
    state.pickerOpen = true;
    renderProfiles();
  };
  return card;
}

function pickerPanel(p) {
  const rows = p.slots.map((slot) => {
    const s = profileStats(slot.data || {});
    const isActive = slot.id === p.activeId;
    return `
      <div class="picker-row${isActive ? ' current' : ''}" data-id="${slot.id}">
        <button class="picker-pick">
          <span class="picker-name">${esc(slot.name)}${isActive ? ' <span class="using-tag">目前</span>' : ''}</span>
          <span class="picker-pct">${s.pct}%　<span class="profile-sub">${s.done} / ${s.total} 項</span></span>
        </button>
        <button class="picker-del" title="刪除這位學習者" aria-label="刪除 ${esc(slot.name)}">✕</button>
      </div>`;
  }).join('');

  const panel = el(`
    <div class="picker">
      <div class="picker-title">選擇學習者</div>
      <div class="picker-list">${rows || '<div class="picker-none">尚未建立任何學習者</div>'}</div>
      <div class="picker-add">
        <input class="add-input" type="text" maxlength="16" placeholder="輸入新學習者的名稱">
        <button class="mini-btn add-btn">＋ 新增</button>
      </div>
      <button class="picker-close">關閉</button>
    </div>`);

  panel.querySelectorAll('.picker-row').forEach((row) => {
    const id = row.dataset.id;
    row.querySelector('.picker-pick').onclick = () => selectProfile(id);
    row.querySelector('.picker-del').onclick = (e) => { e.stopPropagation(); deleteProfile(id); };
  });
  const addInput = panel.querySelector('.add-input');
  panel.querySelector('.add-btn').onclick = () => addProfile(addInput.value);
  addInput.onkeydown = (e) => { if (e.key === 'Enter') addProfile(addInput.value); };
  panel.querySelector('.picker-close').onclick = () => { state.pickerOpen = false; renderProfiles(); };
  return panel;
}

function renderProfiles() {
  const p = loadProfiles();
  const active = p.slots.find((s) => s.id === p.activeId) || null;

  $('activeName').textContent = active ? active.name : '尚未選擇';

  const area = $('profileArea');
  area.innerHTML = '';
  area.appendChild(active ? activeProfileCard(active) : choosePromptCard(p));
  if (state.pickerOpen) area.appendChild(pickerPanel(p));

  // 沒選學習者就不顯示等級卡，否則「先選進度」的防呆等於沒有作用
  $('levelSection').classList.toggle('hidden', !active);
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
