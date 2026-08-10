/* 高級 TOEIC 750-900：Part 7 閱讀理解
   單篇 5 組 × 3 題 + 雙篇 2 組 × 5 題 + 三篇 1 組 × 5 題 = 30 題 */

const ADV_PART7 = [
  /* ─────────── 單篇 ─────────── */
  {
    id: 'a7-1', kind: 'single',
    docs: [{ label: 'Article', text: `Why Warranty Data Is Finally Being Taken Seriously

For decades, warranty claims sat in a corner of the finance function, treated as an unavoidable cost of doing business. Manufacturers reserved against them, disputed the larger ones, and moved on.

That posture is changing, and not primarily for reasons of cost. Warranty records are among the few datasets that describe how a product behaves in the hands of an actual customer over time. Test-bench data, by contrast, describes how a product behaves under conditions engineers chose in advance.

Several firms have begun routing claims data directly to design teams rather than aggregating it quarterly for the controller. One European appliance maker reports that a recurring seal failure — visible in claims within four months of launch — took eleven months to surface through its previous reporting chain.

The obstacle is rarely technical. Claims are typically written in free text by service technicians under time pressure, and the vocabulary varies by region. Firms that have made progress generally invested first in classification, not analytics.

There is a further complication. Making warranty data visible to engineering can expose design decisions that were made under schedule pressure, which is uncomfortable in organizations where launch dates are treated as commitments rather than forecasts.` }],
    questions: [
      { q: 'What is the main argument of the article?', options: ['Warranty costs should be reduced through stricter claim review.', 'Warranty data is valuable as engineering feedback, not just as a cost item.', 'Test-bench data is more reliable than warranty data.', 'Manufacturers should extend warranty periods.'], answer: 1, explain: '全文主張保固資料的價值在於反映真實使用情形，可回饋設計。' },
      { q: 'Why is the European appliance maker mentioned?', options: ['To show that claims data can reveal problems faster than standard reporting', 'To illustrate the cost of warranty reserves', 'To criticize its engineering standards', 'To demonstrate a successful product launch'], answer: 0, explain: '該例顯示密封件問題四個月就出現在理賠資料中，舊流程卻花十一個月才浮現。' },
      { q: 'What does the article identify as the main obstacle?', options: ['The cost of analytics software', 'Legal restrictions on sharing data', 'Inconsistent and unstructured claim text', 'A shortage of qualified engineers'], answer: 2, explain: '理賠由技師以自由文字倉促填寫，用語又因地區而異，故需先做分類。' }
    ]
  },
  {
    id: 'a7-2', kind: 'single',
    docs: [{ label: 'Internal memorandum', text: `MEMORANDUM — PRIVILEGED AND CONFIDENTIAL

To: Executive Committee
From: General Counsel
Re: Proposed indemnity language, Kestrel master services agreement

The counterparty has proposed replacing our standard mutual indemnity with a one-way provision under which we would indemnify Kestrel for any third-party claim "arising from or relating to" the services, without carve-outs for Kestrel's own negligence.

I would not recommend accepting this as drafted. The phrase "relating to" has been construed broadly in this jurisdiction, and the absence of a negligence carve-out means we could bear liability for failures we did not cause and could not have prevented.

Two positions are defensible. The first is to insist on mutuality. The second, if commercial urgency makes that impractical, is to accept a one-way indemnity but narrow the trigger to claims "arising directly from" our performance, add an express carve-out for the counterparty's negligence or willful misconduct, and cap aggregate liability at fees paid in the preceding twelve months.

I note that the commercial team regards this agreement as strategically important. That consideration is legitimate, but it should inform how hard we push, not whether we obtain the carve-out. A cap without a negligence carve-out offers considerably less protection than it appears to.` }],
    questions: [
      { q: 'What is the General Counsel\'s primary objection?', options: ['The agreement lacks a confidentiality clause.', 'The company could be liable for the counterparty\'s own negligence.', 'The fees are set too low.', 'The governing jurisdiction is unfavorable.'], answer: 1, explain: '因為沒有排除對方過失的除外條款，公司可能為非自身造成的過失負責。' },
      { q: 'What does the memo indicate about the phrase "relating to"?', options: ['It is standard and uncontroversial.', 'It has been interpreted expansively by courts in that jurisdiction.', 'It is undefined in the agreement.', 'It applies only to intellectual property claims.'], answer: 1, explain: '備忘錄寫該用語在此法域「has been construed broadly」。' },
      { q: 'What is the General Counsel\'s view of the commercial team\'s position?', options: ['It should determine whether to seek a carve-out.', 'It is irrelevant to the legal analysis.', 'It is valid but should affect negotiating intensity rather than the outcome sought.', 'It overstates the strategic value of the agreement.'], answer: 2, explain: '文中說該考量正當，但應影響「how hard we push」而非「whether we obtain the carve-out」。' }
    ]
  },
  {
    id: 'a7-3', kind: 'single',
    docs: [{ label: 'Conference program', text: `INTERNATIONAL SYMPOSIUM ON SUPPLY CHAIN RESILIENCE
Day Two — 16 November

09:00 Keynote: Concentration Risk in Semiconductor Supply
Dr. Amara Oyelaran, Institute for Trade Studies
Grand Hall

10:30 Parallel Sessions
A. Multi-sourcing: Evidence from Automotive (Room 2A)
B. Inventory Buffers and the Cost of Capital (Room 2B)
C. Contractual Remedies for Force Majeure (Room 2C)

13:00 Panel: Nearshoring — Rhetoric and Reality
Moderated by K. Lindgren

15:00 Workshop: Scenario Modeling (limited to 30; advance sign-up required)

Delegates registered for the full symposium may attend any session without further booking, with the exception of the 15:00 workshop. Day passes admit holders to the Grand Hall and Room 2A only.

Session recordings will be made available to full-symposium delegates approximately two weeks after the event. Day-pass holders may purchase recordings separately.` }],
    questions: [
      { q: 'What is required to attend the 15:00 workshop?', options: ['A day pass', 'Advance sign-up', 'An additional fee', 'Membership in the Institute'], answer: 1, explain: '節目表註明 limited to 30; advance sign-up required。' },
      { q: 'Which session may a day-pass holder attend?', options: ['Session B in Room 2B', 'Session C in Room 2C', 'Session A in Room 2A', 'All parallel sessions'], answer: 2, explain: '單日票僅可進入 Grand Hall 與 Room 2A。' },
      { q: 'What is indicated about session recordings?', options: ['They are free for all attendees.', 'They are available immediately after each session.', 'Day-pass holders must pay for them.', 'They are not available for parallel sessions.'], answer: 2, explain: '全程與會者兩週後可取得，單日票持有者須另行購買。' }
    ]
  },
  {
    id: 'a7-4', kind: 'single',
    docs: [{ label: 'Online discussion', text: `Ingrid Sandoval (11:02)
The board wants a recommendation on the Braemar facility by Friday. Close it, or invest €4M in automation?

Felix Chen (11:05)
Closing looks cleaner on paper. But we'd lose the only site certified for medical-grade output.

Ingrid Sandoval (11:06)
How long to certify another site?

Felix Chen (11:08)
Eighteen months minimum, and that assumes the regulator doesn't queue us.

Marta Reyes (11:09)
There's a third option nobody's costed. Keep Braemar running as-is for two years, invest nothing, and use that window to certify Porto.

Felix Chen (11:11)
Braemar's margin is thin but it isn't negative. That could work.

Ingrid Sandoval (11:13)
It defers the decision rather than making it. But given the certification timeline, deferring may be the correct call. Marta, can you model it by Thursday?

Marta Reyes (11:14)
I'll need last year's maintenance capex to do it properly. Felix, can you send that?

Felix Chen (11:15)
Sending now.` }],
    questions: [
      { q: 'What decision must be made by Friday?', options: ['Whether to certify the Porto facility', 'Whether to close or automate the Braemar facility', 'Whether to replace the board', 'Whether to increase medical-grade output'], answer: 1, explain: '董事會要求在關廠與投入 400 萬歐元自動化之間做出建議。' },
      { q: 'Why is closing Braemar problematic?', options: ['It is the most profitable site.', 'It is the only site certified for medical-grade production.', 'Its workforce cannot be relocated.', 'It was recently automated.'], answer: 1, explain: 'Felix 指出關掉就失去唯一具醫療級認證的廠。' },
      { q: 'At 11:13, what does Ms. Sandoval mean when she writes, "It defers the decision rather than making it"?', options: ['She rejects Ms. Reyes\'s proposal outright.', 'She recognizes the option postpones the choice, though she may still accept it.', 'She believes the board has already decided.', 'She thinks the certification timeline is inaccurate.'], answer: 1, explain: '她指出這是延後決定，但緊接著說在認證時程下延後可能才是對的。' }
    ]
  },
  {
    id: 'a7-5', kind: 'single',
    docs: [{ label: 'Letter', text: `Ravensworth Asset Management
Quarterly Letter to Investors — Q3

Dear Partners,

The fund returned 2.1% net for the quarter, against 4.7% for the benchmark. I want to explain the shortfall rather than let the number speak for itself.

Roughly two-thirds of the gap is attributable to our underweight position in large-cap technology. That position was deliberate and remains so. We did not own those companies at these valuations, and we would not have owned them had we anticipated the quarter's returns, because our estimate of intrinsic value did not change.

The remaining third is less comfortable. Two positions in industrial distribution performed poorly for reasons we should have foreseen: both companies depend heavily on a customer base we had characterized as diversified, and it was not. That was an error of analysis, not of luck, and we have revised our concentration screening accordingly.

I would rather report a disappointing quarter honestly than construct a narrative in which every loss was unforeseeable. Partners who have been with us since inception will recall that our worst calendar year preceded our best.

Yours,
Helena Marsh` }],
    questions: [
      { q: 'How does the letter characterize the technology underweight?', options: ['As a mistake the firm regrets', 'As a deliberate position it would repeat', 'As a temporary tactical trade', 'As the result of a modeling error'], answer: 1, explain: '她寫該部位是刻意為之且立場不變，即使早知報酬也不會持有。' },
      { q: 'What does Ms. Marsh admit was an error?', options: ['Overpaying for technology shares', 'Misjudging the diversification of two companies\' customer bases', 'Failing to hedge currency exposure', 'Selling positions too early'], answer: 1, explain: '她承認把兩家工業配銷商的客戶結構誤判為分散，屬分析錯誤。' },
      { q: 'What is the purpose of the final paragraph?', options: ['To announce a change in strategy', 'To request additional capital', 'To set expectations about candor and long-term results', 'To compare the fund with competitors'], answer: 2, explain: '她強調寧可誠實報告，並提醒長期投資人最差年度曾在最佳年度之前。' }
    ]
  },

  {
    id: 'a7-9', kind: 'single',
    docs: [{ label: 'Article', text: `The Limits of Benchmarking

Benchmarking has an obvious appeal. If a competitor converts inventory eleven times a year and you convert it seven, the gap looks like an opportunity. Consultants have built durable practices on precisely this observation.

The difficulty is that ratios are outputs of business models, not independent levers. A firm turning inventory eleven times may be doing so because it serves a narrow product range to a concentrated customer base — a position that also caps its growth. Copying the ratio without adopting the model produces stockouts, not efficiency.

There is a subtler problem. Published benchmarks are drawn from firms willing to participate, which skews samples toward the organized and the successful. Median performance in a benchmark study is rarely median performance in the industry.

None of this makes benchmarking useless. It is a diagnostic that generates questions worth asking. The error lies in treating it as an answer, and specifically in setting targets equal to another firm's ratio without establishing whether that ratio is achievable within your own constraints.` }],
    questions: [
      { q: 'What is the article\'s central criticism of benchmarking?', options: ['The data is usually inaccurate.', 'Ratios reflect underlying business models that cannot simply be copied.', 'It is too expensive for smaller firms.', 'It focuses only on financial measures.'], answer: 1, explain: '文章主張比率是商業模式的產物，不是可獨立調整的槓桿。' },
      { q: 'What sampling problem does the article identify?', options: ['Samples are too small.', 'Participants tend to be more organized and successful than the industry as a whole.', 'Data is collected too infrequently.', 'Competitors submit false figures.'], answer: 1, explain: '參與者多為體質較佳的公司，導致樣本偏誤。' },
      { q: 'What does the author consider the actual error?', options: ['Using benchmarking at all', 'Comparing across industries', 'Treating benchmark results as answers rather than questions', 'Publishing benchmark data'], answer: 2, explain: '文末寫錯誤在於把它當成答案，而非值得追問的診斷工具。' }
    ]
  },
  {
    id: 'a7-10', kind: 'single',
    docs: [{ label: 'Board paper', text: `PAPER 7 — PROPOSED DISPOSAL OF THE LEGACY PENSION LIABILITY
For decision

1. Recommendation
The Board is asked to approve a buy-in transaction covering the closed defined-benefit scheme, at an estimated premium of £41m above scheme assets.

2. Rationale
The scheme is closed to accrual and represents 6% of group market capitalisation in liabilities. Its funding position has fluctuated by more than £30m in each of the last three years, introducing volatility into the balance sheet that is unrelated to trading performance.

3. Alternatives considered
Retaining the scheme and running it off would avoid the premium but leaves the volatility in place for an estimated 24 years. A partial buy-in was modelled but would not remove the requirement for triennial valuations.

4. Risks
The premium is sensitive to gilt yields between now and execution. A 25 basis point move would change the premium by approximately £6m. We propose delegating authority to the Chief Financial Officer to execute within a defined price band rather than returning to the Board.` }],
    questions: [
      { q: 'What is the principal argument for the transaction?', options: ['It reduces the premium payable.', 'It removes balance-sheet volatility unrelated to trading.', 'It increases the scheme\'s funding level.', 'It avoids triennial valuations for 24 years.'], answer: 1, explain: '第 2 段說明資金水位波動與營運表現無關，卻造成資產負債表波動。' },
      { q: 'Why was a partial buy-in rejected?', options: ['It was more expensive.', 'It would not eliminate the triennial valuation requirement.', 'The trustees opposed it.', 'It was not available in the market.'], answer: 1, explain: '第 3 段寫部分買斷仍無法免除三年一次的精算評估。' },
      { q: 'Why is authority proposed to be delegated to the CFO?', options: ['To reduce the premium', 'Because the Board lacks the relevant expertise', 'To allow execution within a price band as yields move', 'Because the trustees require a single point of contact'], answer: 2, explain: '因保費對公債殖利率敏感，需在價格區間內即時執行，不宜再回董事會。' }
    ]
  },
  {
    id: 'a7-11', kind: 'single',
    docs: [{ label: 'Letter', text: `Dear Ms. Whitfield,

We act for Brightmoor Developments in relation to the dispute concerning the Alderney Wharf contract.

Your client's letter of 14 August asserts that our client's delay claim is time-barred under Clause 20.1. We do not accept that analysis.

Clause 20.1 requires notice within 28 days of the date on which the contractor became aware, or should have become aware, of the event. Your client treats the relevant date as 3 March, being the date the ground conditions were first encountered. In our submission the relevant date is 19 March, when the geotechnical report established that the conditions differed materially from those described in the tender documents. Awareness of an event is not the same as awareness that it constitutes a compensable event.

Our client's notice was served on 9 April, within 28 days of 19 March.

We remain willing to explore mediation, and our client's position on the merits is not contingent on this point. However, we will not accept a settlement premised on the claim being time-barred.

Yours faithfully,
Harlan & Reese` }],
    questions: [
      { q: 'What is the disagreement about?', options: ['The amount of the delay claim', 'Which date starts the 28-day notice period', 'Whether mediation should occur', 'The quality of the geotechnical report'], answer: 1, explain: '雙方爭執 28 天通知期應從 3 月 3 日還是 3 月 19 日起算。' },
      { q: 'What distinction does the writer draw?', options: ['Between delay and disruption', 'Between the tender documents and the contract', 'Between awareness of an event and awareness that it is compensable', 'Between the contractor and the subcontractor'], answer: 2, explain: '信中明確寫 Awareness of an event is not the same as awareness that it constitutes a compensable event。' },
      { q: 'What is the firm\'s position on mediation?', options: ['It refuses mediation.', 'It is willing to mediate but not on a time-barred premise.', 'It will mediate only after a court ruling.', 'It requires mediation before any further correspondence.'], answer: 1, explain: '願意調解，但不接受以「逾期失權」為前提的和解。' }
    ]
  },
  {
    id: 'a7-12', kind: 'single',
    docs: [{ label: 'Online discussion', text: `Yusuf Karim (14:02)
The auditors want us to restate the Q2 revenue for the Halden contract. Recognition over time versus point in time.

Petra Lindholm (14:05)
On what basis? We've applied the same treatment for four years.

Yusuf Karim (14:07)
Their point is the contract was amended in March. The amendment gave the customer the right to cancel for convenience with 30 days' notice.

Petra Lindholm (14:09)
Which arguably breaks the enforceable-right-to-payment test.

Yusuf Karim (14:11)
That's their argument, yes.

Marcus Oyelowo (14:13)
Practical question: how material? If it's a timing difference that reverses by Q4, restating a quarter is a lot of noise for very little signal.

Petra Lindholm (14:15)
€2.4m shifted between quarters. Full-year unaffected.

Marcus Oyelowo (14:16)
Then I'd push back and ask whether a prospective change from Q3 is defensible.

Yusuf Karim (14:19)
I'll raise it, but I doubt they'll move if they think the amendment was effective in March.` }],
    questions: [
      { q: 'What triggered the auditors\' position?', options: ['A change in accounting standards', 'A contract amendment giving the customer a cancellation right', 'An error in the revenue calculation', 'A change in the customer\'s credit rating'], answer: 1, explain: '三月的合約修訂給了客戶 30 天通知即可任意解約的權利。' },
      { q: 'At 14:13, what is Mr. Oyelowo\'s concern?', options: ['That the restatement is legally risky', 'That the effort may outweigh the informational value', 'That the auditors lack authority', 'That the full-year figures will change'], answer: 1, explain: '他問重大性如何——若只是季度間時間差且全年不受影響，重編一季代價高但資訊價值低。' },
      { q: 'What does Mr. Oyelowo suggest?', options: ['Accepting the restatement immediately', 'Arguing for a prospective change from Q3 instead', 'Terminating the Halden contract', 'Engaging different auditors'], answer: 1, explain: '他建議反駁，並詢問自第三季起前瞻性調整是否站得住腳。' }
    ]
  },
  {
    id: 'a7-13', kind: 'single',
    docs: [{ label: 'Report excerpt', text: `SECTION 6 — WORKFORCE PLANNING

The division faces a demographic constraint that is not reflected in current headcount planning.

Of 412 skilled maintenance technicians, 148 are aged 55 or over and eligible to retire within seven years. The apprenticeship programme currently produces 12 qualified technicians annually, against an attrition rate that will rise to approximately 24 per year from 2027.

The gap cannot be closed by recruitment alone. External hiring has yielded 9 technicians in the last three years against 31 vacancies advertised, and offer-acceptance rates have fallen as regional competitors have raised pay.

Three responses merit consideration. Expanding the apprenticeship intake is the most durable but takes four years to produce output. Retention incentives targeted at the 55–60 cohort would defer rather than solve the problem, though the deferral has value. Reducing the technician requirement through condition-based monitoring is technically feasible but would require capital investment of approximately £7m and a two-year implementation.

We note that these options are not mutually exclusive, and that the apprenticeship expansion should begin regardless of which others are selected.` }],
    questions: [
      { q: 'What is the core problem identified?', options: ['Technicians are leaving for competitors.', 'Retirements will exceed the supply of newly qualified technicians.', 'Apprentices are failing their assessments.', 'The division is overstaffed.'], answer: 1, explain: '148 人將屆退休，學徒每年僅產出 12 人，而流失將升至每年約 24 人。' },
      { q: 'What does the report say about external hiring?', options: ['It has met most vacancies.', 'It has filled fewer than a third of advertised vacancies.', 'It is the recommended primary solution.', 'It has not yet been attempted.'], answer: 1, explain: '三年來 31 個職缺只招到 9 人，不到三分之一。' },
      { q: 'What does the report recommend regardless of other choices?', options: ['Retention incentives for the 55–60 cohort', 'The £7m monitoring investment', 'Beginning the apprenticeship expansion', 'Raising pay to match competitors'], answer: 2, explain: '文末寫學徒擴招應無論選擇哪些其他方案都要立即開始。' }
    ]
  },
  {
    id: 'a7-14', kind: 'single',
    docs: [{ label: 'Press release', text: `Thornbury Pharma Reports Phase II Results

BASEL, 14 March — Thornbury Pharma today reported topline results from the Phase II trial of TP-118 in moderate rheumatoid arthritis.

The trial met its primary endpoint, with 47% of patients in the treatment arm achieving ACR20 response at week 12 compared with 29% on placebo (p=0.008).

Secondary endpoints produced a more mixed picture. The difference in ACR50 response did not reach statistical significance, and the effect in patients who had previously failed a biologic therapy was smaller than in biologic-naïve patients.

Discontinuation due to adverse events occurred in 6% of the treatment arm and 4% of placebo. No new safety signals were identified.

"These data support progression to Phase III, but they also tell us who the drug is for," said Chief Medical Officer Dr. Ingrid Sandvik. "We will design the pivotal programme accordingly rather than pursuing the broadest possible label."

The company expects to meet with regulators in the third quarter.` }],
    questions: [
      { q: 'What was the outcome on the primary endpoint?', options: ['It was not met.', 'It was met with a statistically significant difference.', 'It was met only in biologic-naïve patients.', 'Results were inconclusive.'], answer: 1, explain: '達成主要終點，治療組 47% 對安慰劑 29%，p=0.008。' },
      { q: 'What does Dr. Sandvik indicate about the Phase III design?', options: ['It will target the broadest possible patient population.', 'It will be shaped by which patients responded best.', 'It will be delayed pending further Phase II data.', 'It will focus on safety rather than efficacy.'], answer: 1, explain: '她說資料顯示藥物適合哪些人，將據此設計關鍵試驗而非追求最廣適應症。' },
      { q: 'What is stated about the secondary endpoints?', options: ['All were met.', 'The ACR50 difference was not statistically significant.', 'They showed a stronger effect than the primary endpoint.', 'They were not measured.'], answer: 1, explain: 'ACR50 的差異未達統計顯著。' }
    ]
  },
  {
    id: 'a7-15', kind: 'single',
    docs: [{ label: 'Memo', text: `To: Executive Committee
From: Chief Information Security Officer
Subject: Third-party risk — proposed change of approach

Our current approach assesses vendors at onboarding and every three years thereafter. I recommend replacing this with continuous monitoring for the tier of vendors with access to production systems.

The case is straightforward. Of the four security incidents affecting us in the last two years, three originated with vendors that had passed assessment within the preceding eighteen months. Point-in-time assessment tells us that controls existed on the day of review; it tells us nothing about the day of compromise.

Continuous monitoring is not a panacea. External scanning detects exposed infrastructure but not internal control failures, which is where two of our three incidents originated. I am not proposing that we treat a green dashboard as assurance.

What it does provide is a trigger for intervention between assessments, and evidence of deterioration that we currently cannot see at all.

Cost is approximately £180,000 annually for the 40 vendors in scope. I would fund it by reducing the frequency of assessment for the remaining 260 vendors from three years to five, which is defensible given their limited access.` }],
    questions: [
      { q: 'What weakness in the current approach does the CISO identify?', options: ['Assessments are too expensive.', 'Passing an assessment does not indicate security at the time of compromise.', 'Vendors refuse to participate.', 'Too few vendors are assessed.'], answer: 1, explain: '四起事件中有三起來自十八個月內通過評估的廠商；定點評估無法反映遭駭當日的狀態。' },
      { q: 'What limitation does the CISO acknowledge?', options: ['Continuous monitoring cannot detect internal control failures.', 'Continuous monitoring is untested in the industry.', 'The vendor list changes too frequently.', 'The tool cannot cover 40 vendors.'], answer: 0, explain: '他坦言外部掃描查不到內部控制失效，而三起事件中有兩起正是如此。' },
      { q: 'How does the CISO propose to fund the change?', options: ['By requesting additional budget', 'By reducing the vendor list', 'By lengthening the assessment cycle for lower-risk vendors', 'By renegotiating vendor contracts'], answer: 2, explain: '把其餘 260 家廠商的評估週期由三年延長為五年。' }
    ]
  },
  {
    id: 'a7-16', kind: 'single',
    docs: [{ label: 'Article', text: `When Cost Savings Do Not Appear

Finance functions routinely approve business cases promising savings that never materialise in the accounts. The usual explanation — that the savings were overstated — is often wrong.

Consider a project that reduces the labour hours required for a process by 20%. The saving is real in the sense that the hours are genuinely no longer needed. But unless headcount is actually reduced, or the freed capacity absorbs work that would otherwise have required hiring, the cost line does not move. The saving exists as capacity, not as cash.

This distinction is frequently lost between the business case and the budget. Business cases are written in the language of efficiency; budgets are written in the language of expenditure. A project can be entirely successful on its own terms and invisible in the accounts.

The remedy is procedural rather than analytical. Where a case claims a headcount saving, the corresponding budget line should be reduced at approval, not at delivery. This forces the conversation about whether the reduction is genuinely intended while the project can still be reconsidered — and prevents the familiar outcome in which a saving is claimed twice, once in the business case and once when the post is eventually cut for unrelated reasons.` }],
    questions: [
      { q: 'According to the article, why do approved savings often fail to appear?', options: ['The original estimates were inflated.', 'Freed capacity is not converted into reduced expenditure.', 'Projects are delivered late.', 'Accounting standards prevent recognition.'], answer: 1, explain: '文章指出節省是以「產能」形式存在，若未實際減少人力或吸收新工作，成本線不會下降。' },
      { q: 'What remedy does the article propose?', options: ['More rigorous financial modelling', 'Reducing the budget line at approval rather than at delivery', 'Delaying approval until benefits are proven', 'Assigning a finance business partner to each project'], answer: 1, explain: '文末主張核准時就調降對應預算，而非等交付後。' },
      { q: 'What problem does the proposed remedy also prevent?', options: ['Projects being approved without a business case', 'The same saving being counted twice', 'Overspending on capital projects', 'Delays in project delivery'], answer: 1, explain: '可避免同一筆節省被重複計算兩次。' }
    ]
  },
  {
    id: 'a7-17', kind: 'single',
    docs: [{ label: 'Notice', text: `NOTICE TO HOLDERS OF 4.25% SENIOR NOTES DUE 2029
Consent Solicitation

Marchwood Group plc is soliciting consents from holders of its 4.25% Senior Notes due 2029 to amend certain covenants in the indenture dated 12 June 2019.

The proposed amendments would (i) increase the permitted indebtedness basket from £150m to £275m, and (ii) amend the restricted payments covenant to permit dividends where the consolidated leverage ratio does not exceed 3.0x, from the current 2.5x.

A consent fee of £2.50 per £1,000 principal amount will be paid to holders who validly deliver consents by the Early Consent Deadline of 17:00 on 22 October. Holders consenting after that time but before the Expiration Date will receive no fee.

Adoption requires consents from holders of a majority in aggregate principal amount outstanding.

Holders should note that if the amendments are adopted, they will bind all holders, including those who did not consent.` }],
    questions: [
      { q: 'What is the purpose of the notice?', options: ['To announce early redemption of the notes', 'To seek approval to amend covenants', 'To report a payment default', 'To offer to repurchase the notes'], answer: 1, explain: '這是徵求債券持有人同意修訂契約條款的公告。' },
      { q: 'What happens to holders who consent after the Early Consent Deadline?', options: ['They receive a reduced fee.', 'They receive no fee.', 'Their consent is not counted.', 'They must pay a fee.'], answer: 1, explain: '公告寫在早鳥期限後、到期日前同意者不獲支付費用。' },
      { q: 'What is the position of holders who do not consent?', options: ['They are exempt from the amendments.', 'They may redeem their notes at par.', 'They are bound if the amendments are adopted.', 'They must sell their holdings.'], answer: 2, explain: '公告最後說修訂一經通過即對全體持有人生效，包括未同意者。' }
    ]
  },
  {
    id: 'a7-18', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: Regional Directors
From: Anneke Vermeulen, Chief Operating Officer
Date: 8 October
Subject: Why we are not rolling this out everywhere

Colleagues,

Several of you have asked why the Rotterdam scheduling pilot is not being extended group-wide given its results. The short answer is that I am not yet convinced the results are attributable to the scheme.

Rotterdam improved on-time despatch from 91% to 97% during the pilot. Over the same period it also received two additional loading bays and lost its least experienced shift supervisor to a promotion elsewhere. Any of the three could explain a six-point move.

I have asked the site to run a further eight weeks with the additional bays in place but the scheduling tool switched off. If performance falls back materially, we have our answer. If it does not, we have avoided a group-wide rollout of a tool that does nothing.

I recognise this is frustrating for those of you who want to move now. My view is that we have committed to enough initiatives on the strength of a single favourable site, and the cost of eight weeks is small against the cost of another one.

Anneke` }],
    questions: [
      { q: 'Why is Ms. Vermeulen holding back the rollout?', options: ['The pilot results were poor.', 'Three simultaneous changes make attribution uncertain.', 'The tool is too expensive.', 'Regional directors opposed it.'], answer: 1, explain: '同期還新增裝卸區、且經驗最少的主管調離，三者都可能解釋改善。' },
      { q: 'What does the proposed eight-week test involve?', options: ['Extending the tool to two more sites', 'Keeping the extra bays but turning the scheduling tool off', 'Removing the additional loading bays', 'Reinstating the former shift supervisor'], answer: 1, explain: '保留新增裝卸區，但關閉排程工具，藉此分離變因。' },
      { q: 'How does she justify the delay?', options: ['The tool licence has expired.', 'Eight weeks costs less than another initiative adopted on weak evidence.', 'The board has requested a pause.', 'The Rotterdam site requested more time.'], answer: 1, explain: '她說八週的代價遠低於再推一個證據薄弱的專案。' }
    ]
  },
  {
    id: 'a7-19', kind: 'single',
    docs: [{ label: 'Policy document', text: `GROUP DELEGATION OF AUTHORITY — EXTRACT

5. Contracts

5.1 Authority to bind the Group is limited to those persons named in the Authorised Signatory Register.

5.2 Contract value is assessed on total consideration over the full term, including any option periods that are exercisable at the counterparty's discretion.

5.3 Where a contract is terminable by the Group on 90 days' notice or less without penalty, value may be assessed on 12 months' consideration for the purpose of determining approval authority.

5.4 Framework agreements are assessed on estimated aggregate spend over the term, not on the value of individual call-offs.

5.5 No person may approve a contract from which they, or a connected person, derive a personal benefit, irrespective of value. Such contracts must be referred to the Audit Committee.` }],
    questions: [
      { q: 'How is contract value normally assessed?', options: ['On the first year only', 'On total consideration over the full term including counterparty options', 'On the value of individual call-offs', 'On the annual average'], answer: 1, explain: '第 5.2 條寫以整個期間的總對價計算，並包含對方可行使的選擇權期間。' },
      { q: 'When may a 12-month basis be used?', options: ['For all framework agreements', 'Where the Group can terminate on 90 days\' notice or less without penalty', 'Where the counterparty is a related party', 'Where the contract exceeds three years'], answer: 1, explain: '第 5.3 條的條件是集團可在 90 天內無罰則終止。' },
      { q: 'What must happen with a contract involving a personal benefit?', options: ['It requires two signatories.', 'It must be referred to the Audit Committee regardless of value.', 'It is prohibited entirely.', 'It may be approved at one level higher than normal.'], answer: 1, explain: '第 5.5 條明訂不論金額大小都須提交稽核委員會。' }
    ]
  },
  {
    id: 'a7-20', kind: 'single',
    docs: [{ label: 'Article', text: `The Quiet Cost of Approval Layers

Organisations add approval steps for understandable reasons. A loss occurs, an inquiry follows, and a control is introduced. Each addition is individually defensible.

What is rarely measured is the aggregate. One manufacturer found that a routine capital request passed through eleven approval points, of which four had been added following incidents that the added control would not, on examination, have prevented. The median elapsed time was 47 days, of which 39 were spent waiting rather than being reviewed.

The waiting is the significant figure. Approval layers impose two costs: the reviewer's time, which is visible and usually small, and the delay, which is invisible and often large. A capital project delayed 39 days does not merely start later; in seasonal industries it may miss an installation window entirely and slip a full year.

Removing layers is harder than adding them, because the person proposing removal must argue against a control introduced in response to a real loss. The manufacturer's approach was instructive: rather than debating each layer, it required every approval point to demonstrate, from the last two years of records, at least one instance in which it had changed an outcome. Four could not.` }],
    questions: [
      { q: 'What does the article identify as the larger cost of approval layers?', options: ['Reviewer time', 'Delay', 'Documentation', 'Training'], answer: 1, explain: '文章說審查者時間看得見且通常不大，延遲則看不見卻往往很大。' },
      { q: 'Why is removing approval layers difficult?', options: ['The layers are required by regulation.', 'Arguing for removal means arguing against a control introduced after a real loss.', 'Nobody knows which layers exist.', 'Approval software cannot be reconfigured.'], answer: 1, explain: '提議刪除者必須反對一個因真實損失而設立的控制。' },
      { q: 'What method did the manufacturer use?', options: ['Debating each layer in committee', 'Requiring each approval point to show it had changed an outcome', 'Benchmarking against competitors', 'Delegating all approvals to one executive'], answer: 1, explain: '要求每個核准關卡從近兩年紀錄中舉出至少一次改變結果的實例，有四個舉不出來。' }
    ]
  },
  {
    id: 'a7-21', kind: 'single',
    docs: [{ label: 'Letter', text: `Dear Shareholder,

Ahead of the Annual General Meeting, I want to address the resolution on executive remuneration directly.

The Remuneration Committee is recommending a change to the long-term incentive plan, replacing the current three-year total shareholder return metric with a combination of return on capital employed and a carbon intensity measure.

I anticipate two objections. The first is that carbon intensity is not a financial measure and does not belong in a pay plan. The Committee's view is that our licence to operate in three of our largest markets is increasingly contingent on demonstrable progress, and that a measure the Board considers material to long-term value should be capable of being incentivised.

The second objection is that return on capital employed is more easily managed than total shareholder return. This is true, and it is why we have set the threshold against an external cost-of-capital benchmark rather than an internally determined budget, and why the Committee retains discretion to reduce awards where outcomes do not reflect underlying performance.

I would rather set out these arguments now than encounter them for the first time in the meeting.

Yours faithfully,
Chair, Remuneration Committee` }],
    questions: [
      { q: 'What change is being proposed?', options: ['An increase in base salary', 'Replacing the TSR metric with return on capital employed and carbon intensity', 'Extending the plan from three to five years', 'Removing all performance conditions'], answer: 1, explain: '把三年期股東總報酬指標改為資本運用報酬率加碳密度指標。' },
      { q: 'How does the Chair respond to the concern that ROCE can be managed?', options: ['By denying that it can be managed', 'By conceding the point and describing two safeguards', 'By removing ROCE from the plan', 'By deferring the change for a year'], answer: 1, explain: '他承認屬實，並說明採外部資金成本基準與委員會保留裁量權兩項防護。' },
      { q: 'Why is the Chair writing before the meeting?', options: ['To request proxy votes', 'To announce the results early', 'To set out the arguments in advance rather than face them unprepared', 'To correct an error in the annual report'], answer: 2, explain: '最後一句寫寧可事先說明，也不願在會議上第一次遭遇這些質疑。' }
    ]
  },
  {
    id: 'a7-22', kind: 'single',
    docs: [{ label: 'Report excerpt', text: `SECTION 3 — ASSESSMENT OF THE PROPOSED SITE

The Harlow site satisfies the primary technical criteria. Grid capacity is adequate, road access is suitable for abnormal loads, and the ground conditions require no unusual foundation work.

Two matters qualify this conclusion.

First, the site lies within a groundwater source protection zone. This does not preclude development, but it will require a hydrogeological risk assessment and is likely to impose restrictions on the storage of process chemicals. Comparable sites have experienced consenting delays of six to nine months on this basis.

Second, the vendor's title includes a restrictive covenant, granted in 1974, limiting use to "light industrial purposes." Counsel's preliminary view is that the proposed use is arguably within that definition, but the covenant benefits an adjoining landowner whose consent has not been sought. Indemnity insurance is available but would not cover the risk of injunctive relief.

On balance we consider the site viable, but we would not recommend exchanging contracts before the covenant position is resolved. The consenting risk is manageable; the covenant risk is not, in the sense that its crystallisation would prevent the development entirely.` }],
    questions: [
      { q: 'What is the report\'s overall conclusion on the site?', options: ['It is unsuitable.', 'It is viable but with a condition before exchange.', 'It should be acquired immediately.', 'It requires further technical survey.'], answer: 1, explain: '整體認為可行，但建議在地役限制問題解決前不要交換契約。' },
      { q: 'Why does the report treat the covenant risk differently from the consenting risk?', options: ['It is more expensive to resolve.', 'Its crystallisation could stop the development entirely.', 'It cannot be insured at all.', 'It affects the purchase price.'], answer: 1, explain: '文末說核准風險可管理，但地役限制一旦成真會完全阻止開發。' },
      { q: 'What is stated about indemnity insurance?', options: ['It is unavailable.', 'It would cover all covenant risks.', 'It would not cover injunctive relief.', 'It is required by the lender.'], answer: 2, explain: '保險可取得，但不涵蓋禁制令救濟的風險。' }
    ]
  },
  {
    id: 'a7-23', kind: 'single',
    docs: [{ label: 'Online discussion', text: `Ana Ferreira (10:04)
The regulator's draft guidance would require us to disclose model inputs for the pricing engine. Comments close in six weeks.

Wei Zhang (10:07)
Disclosure of inputs or of weightings? Those are very different asks.

Ana Ferreira (10:08)
Inputs only, as drafted. But paragraph 4.3 is ambiguous enough that a supervisor could read it either way.

Wei Zhang (10:11)
Then our response should focus on 4.3 rather than opposing the principle. Opposing disclosure outright will read as defensive and we'd probably lose.

Daniel Roth (10:14)
Agreed. Though if we ask them to clarify 4.3, there's a risk they clarify it against us.

Wei Zhang (10:16)
There is. But an ambiguous rule we're relying on a favourable reading of isn't a position, it's a hope.

Ana Ferreira (10:18)
Let's draft on that basis. Daniel, can you check whether the trade association is coordinating a response? I'd rather not be the only name on this.

Daniel Roth (10:19)
Will do.` }],
    questions: [
      { q: 'What is the disagreement about paragraph 4.3?', options: ['Whether it applies to the firm at all', 'Whether it requires disclosure of weightings as well as inputs', 'When it takes effect', 'Which regulator issued it'], answer: 1, explain: 'Ana 說 4.3 措辭模糊，主管機關可能解讀為也要揭露權重。' },
      { q: 'Why does Mr. Zhang advise against opposing disclosure outright?', options: ['The firm already discloses inputs.', 'It would appear defensive and likely fail.', 'The trade association opposes it.', 'The deadline is too short.'], answer: 1, explain: '他說全面反對會顯得防衛，而且大概會輸。' },
      { q: 'At 10:16, what does Mr. Zhang mean?', options: ['Relying on a favourable reading of an ambiguous rule is not a real position.', 'The rule should be challenged in court.', 'The regulator is likely to clarify favourably.', 'Ambiguity benefits the firm.'], answer: 0, explain: '他指出寄望於模糊條文的有利解讀只是「希望」，不是立場。' }
    ]
  },

  /* ─────────── 雙篇 ─────────── */
  {
    id: 'a7-6', kind: 'double',
    docs: [
      { label: 'Policy document', text: `HOLBROOK GROUP
Capital Expenditure Approval Policy (extract)

3.1 Approval authority is determined by the total project value, inclusive of contingency.

Up to $250,000 — Divisional Director
$250,001 to $1,000,000 — Chief Operating Officer
Above $1,000,000 — Board Capital Committee

3.2 Projects may not be divided into components in order to fall below a threshold. Related expenditures pursued within a twelve-month period shall be aggregated for the purpose of determining authority.

3.3 Requests exceeding $1,000,000 must be accompanied by a post-implementation review commitment, to be delivered within eighteen months of completion.

3.4 The Board Capital Committee meets in February, May, August, and November. Submissions must be lodged with the Company Secretary no later than fifteen business days before the meeting.` },
      { label: 'E-mail', text: `To: company.secretary@holbrookgroup.com
From: d.achterberg@holbrookgroup.com
Date: 6 April
Subject: Capital submission — Tilbury line refit

Dear Ms. Farrow,

I am preparing a submission for the Tilbury production line refit.

The equipment package is $780,000. We also intend to replace the adjacent conveyor system at a cost of $310,000. My divisional finance lead has advised that these can be submitted as two separate requests, as they are technically independent systems and would be commissioned three months apart.

Could you confirm that this is acceptable? If both must be treated as one project, I assume we are looking at the May meeting rather than COO approval.

Regards,
Dirk Achterberg
Divisional Director, Northern Operations` }
    ],
    questions: [
      { q: 'What is the combined value of the two proposed expenditures?', options: ['$780,000', '$1,000,000', '$1,090,000', '$310,000'], answer: 2, explain: '$780,000 + $310,000 = $1,090,000。' },
      { q: 'What does the policy say about Mr. Achterberg\'s proposed approach?', options: ['It is permitted because the systems are independent.', 'It is not permitted, since related expenditures within twelve months must be aggregated.', 'It requires written approval from the COO.', 'It is permitted only if the projects are commissioned in different years.'], answer: 1, explain: '第 3.2 條明訂不得為規避門檻而拆分，十二個月內的相關支出須合計。' },
      { q: 'Which body must therefore approve the project?', options: ['The Divisional Director', 'The Chief Operating Officer', 'The Board Capital Committee', 'The Company Secretary'], answer: 2, explain: '合計 $1,090,000 超過 $1,000,000，須由董事會資本委員會核准。' },
      { q: 'What additional requirement will apply?', options: ['A post-implementation review within eighteen months', 'An independent external audit', 'Quarterly progress reports to the COO', 'A second contingency allowance'], answer: 0, explain: '第 3.3 條規定超過百萬美元須承諾在完工後十八個月內完成後評估。' },
      { q: 'If the submission is to be heard in May, what does the policy require?', options: ['That it be lodged at least fifteen business days beforehand', 'That the COO endorse it first', 'That it be resubmitted in August', 'That the Divisional Director attend the meeting'], answer: 0, explain: '第 3.4 條規定須於會議前至少十五個工作天送交公司秘書。' }
    ]
  },
  {
    id: 'a7-7', kind: 'double',
    docs: [
      { label: 'Report excerpt', text: `INDEPENDENT REVIEW — DISTRIBUTION CENTER AUTOMATION
Section 5: Findings

The automation program has delivered throughput gains of 22% against a business case assumption of 30%. The shortfall is not attributable to the technology, which performs within specification.

Three factors account for the gap. First, order profiles have shifted toward smaller, more frequent shipments, which reduces the efficiency advantage of batch picking. Second, two of the six induction stations have been operated below capacity because of a persistent shortage of trained operators. Third, the legacy warehouse management system was retained, and its scheduling logic was not designed for the new equipment.

We note that the third factor was identified as a risk during planning and accepted on the basis that a system replacement would extend the program by nine months.

Our view is that the throughput target remains achievable, but not without addressing the scheduling constraint. Staffing and order-profile effects together account for an estimated 3 percentage points; the remaining 5 points are systemic.` },
      { label: 'E-mail', text: `To: Operations Steering Group
From: R. Bhattacharya, Program Director
Date: 12 September
Subject: Response to the independent review

Colleagues,

I accept the findings and want to address the point I expect will attract most discussion.

The decision to retain the legacy system was mine. Given the commercial commitments in place at the time, a nine-month extension was not available to us, and I would make the same decision again on the same information.

That said, the review is right that the constraint is now the binding one. I propose we bring forward the system replacement to next fiscal year rather than the year after. On the reviewers' own numbers, closing the systemic gap recovers more than the staffing and order-profile issues combined.

I would ask the group to note that the operator shortage is a labor-market issue that we have not solved by raising pay, and I do not recommend further increases as the primary lever.

Ravi` }
    ],
    questions: [
      { q: 'What was the business case assumption for throughput gains?', options: ['22%', '30%', '5%', '3%'], answer: 1, explain: '報告寫實際 22%，商業計畫假設為 30%。' },
      { q: 'According to the report, what accounts for the largest share of the shortfall?', options: ['The staffing shortage', 'The shift in order profiles', 'The retained legacy system', 'Equipment underperformance'], answer: 2, explain: '人力與訂單結構合計約 3 個百分點，其餘 5 個百分點屬系統性問題。' },
      { q: 'What does Mr. Bhattacharya say about the decision to keep the legacy system?', options: ['It was made by the steering group.', 'He now regards it as a clear error.', 'He would make the same decision given the same information.', 'It was recommended by the reviewers.'], answer: 2, explain: '他寫 I would make the same decision again on the same information。' },
      { q: 'What does Mr. Bhattacharya propose?', options: ['Replacing the induction stations', 'Accelerating the system replacement by one year', 'Raising operator pay further', 'Revising the throughput target downward'], answer: 1, explain: '他提議把系統汰換提前到下一個會計年度，而非再下一年。' },
      { q: 'What is his view on the operator shortage?', options: ['Higher pay has already solved it.', 'It is the largest single cause of the shortfall.', 'Further pay increases should not be the main response.', 'It should be resolved before the system replacement.'], answer: 2, explain: '他說加薪未能解決，且不建議再以加薪為主要手段。' }
    ]
  },

  /* ─────────── 三篇 ─────────── */
  {
    id: 'a7-8', kind: 'triple',
    docs: [
      { label: 'Request for proposal', text: `CITY OF LANGFORD
Request for Proposal — Municipal Fleet Electrification Study
RFP 2025-114

The City invites proposals for a study assessing the feasibility of converting its 340-vehicle municipal fleet to electric power.

Scope: total cost of ownership modeling, charging infrastructure siting, grid capacity assessment, and a phased transition plan covering ten years.

Mandatory requirements:
• Demonstrated experience with at least two municipal fleet studies of comparable scale
• A named project lead with professional engineering registration in this province
• Ability to present findings to Council in a public session

Evaluation: Technical merit 60%, price 30%, local economic benefit 10%.

Proposals are due 5 March at 15:00. Late submissions will not be opened. Questions must be submitted in writing by 20 February; responses will be issued to all registered proponents.` },
      { label: 'E-mail', text: `To: procurement@langford.ca
From: bids@northaxisconsulting.com
Date: 18 February
Subject: RFP 2025-114 — clarification questions

Good afternoon,

Two questions regarding RFP 2025-114.

1. The mandatory requirements specify two municipal fleet studies of comparable scale. Our firm has completed one municipal study of 400 vehicles and one provincial agency study of 520 vehicles. Would the provincial engagement satisfy the requirement?

2. Our proposed project lead is registered in the neighboring province and has applied for registration here; the application is expected to be approved in April. Would a conditional registration be acceptable at the time of submission?

Regards,
Sandra Whitcombe
North Axis Consulting` },
      { label: 'Addendum', text: `CITY OF LANGFORD
RFP 2025-114 — Addendum 2
Issued 24 February to all registered proponents

Question 1: Would a provincial agency fleet study satisfy the municipal experience requirement?
Response: No. The requirement is specific to municipal fleets, where governance, procurement, and depot constraints differ materially. Provincial engagements may be listed as additional experience but do not count toward the mandatory two.

Question 2: Is conditional or pending professional registration acceptable?
Response: No. The named project lead must hold registration in this province at the time of proposal submission. A substitute lead who meets the requirement may be named.

Note: The submission deadline is extended to 12 March at 15:00 to allow proponents to adjust their teams. All other terms are unchanged.` }
    ],
    questions: [
      { q: 'How many vehicles are in the City\'s fleet?', options: ['340', '400', '520', '740'], answer: 0, explain: 'RFP 開頭寫 its 340-vehicle municipal fleet。' },
      { q: 'What does the addendum indicate about North Axis\'s experience?', options: ['It fully satisfies the mandatory requirement.', 'Only one of its two studies counts toward the requirement.', 'Neither study counts.', 'The requirement has been waived.'], answer: 1, explain: '省級機關案不計入，僅 400 輛的市級案符合，故只有一件。' },
      { q: 'What must North Axis do to remain eligible?', options: ['Complete another municipal study before 12 March', 'Name a different project lead who is already registered in the province', 'Submit a conditional registration certificate', 'Reduce its proposed price'], answer: 1, explain: '附錄明確表示可改派符合資格的專案負責人。' },
      { q: 'Why was the deadline extended?', options: ['Because questions were submitted late', 'To allow proponents to adjust their teams', 'Because of a scheduling conflict with Council', 'To attract more proponents'], answer: 1, explain: '附錄寫 to allow proponents to adjust their teams。' },
      { q: 'What carries the least weight in the evaluation?', options: ['Technical merit', 'Price', 'Local economic benefit', 'Presentation to Council'], answer: 2, explain: '技術 60%、價格 30%、地方經濟效益 10%，後者比重最低。' }
    ]
  },
  {
    id: 'a7-24', kind: 'double',
    docs: [
      { label: 'Contract extract', text: `SCHEDULE 6 — LIQUIDATED DAMAGES

6.1 If the Contractor fails to achieve Practical Completion by the Completion Date, the Contractor shall pay liquidated damages at £4,500 per calendar day.

6.2 Liquidated damages are capped at 8% of the Contract Sum.

6.3 The Completion Date shall be extended where delay is caused by (a) a Relevant Event as defined in Clause 14, (b) an act of prevention by the Employer, or (c) a variation instructed after the Works commenced.

6.4 The Contractor shall give notice of any claim for extension within 21 days of becoming aware of the delaying event. Failure to give notice within this period does not bar the claim but shall be taken into account in assessing the extension granted.

6.5 Liquidated damages are the Employer's exclusive remedy for delay.` },
      { label: 'E-mail', text: `To: legal@brackenestates.co.uk
From: c.mowbray@brackenestates.co.uk
Date: 11 September
Subject: Wrenfield — delay position

Hello,

The Wrenfield contractor is now 46 days beyond the Completion Date. Contract Sum is £6.4m.

They have submitted one extension claim, for 15 days, arising from a variation we instructed in June. Notice was served in August, which is well outside 21 days.

Two questions:

Can we reject the claim outright on the notice point? And separately, we have incurred about £340,000 in additional consultant fees because of the delay — is that recoverable on top of the liquidated damages?

Thanks,
Claire Mowbray` }
    ],
    questions: [
      { q: 'What is the maximum liquidated damages recoverable?', options: ['£207,000', '£512,000', '£340,000', '£4,500'], answer: 1, explain: '上限為合約總價的 8%：£6.4m × 8% = £512,000。' },
      { q: 'What would 46 days of delay produce before the cap?', options: ['£207,000', '£340,000', '£512,000', '£139,500'], answer: 0, explain: '46 天 × £4,500 = £207,000，低於上限。' },
      { q: 'Can the extension claim be rejected on the notice point?', options: ['Yes, late notice bars the claim.', 'No, late notice does not bar the claim but affects the assessment.', 'Yes, but only if the Employer objects in writing.', 'The contract does not address notice.'], answer: 1, explain: '第 6.4 條明訂逾期通知不使請求失效，但會在評估展延時納入考量。' },
      { q: 'Are the additional consultant fees recoverable?', options: ['Yes, in addition to liquidated damages', 'No, liquidated damages are the exclusive remedy for delay', 'Yes, up to the 8% cap', 'Only if a variation was instructed'], answer: 1, explain: '第 6.5 條規定違約金為雇主就延誤的唯一救濟。' },
      { q: 'Which of the events described would qualify for an extension?', options: ['None of them', 'The June variation', 'The consultant fees', 'The late notice'], answer: 1, explain: '第 6.3(c) 條把開工後指示的變更列為可展延事由。' }
    ]
  },
  {
    id: 'a7-25', kind: 'double',
    docs: [
      { label: 'Fund factsheet', text: `MERIDIAN GLOBAL EQUITY FUND — Institutional Share Class

Objective: To exceed the MSCI World Index over rolling five-year periods, net of fees.

Fee structure
Management fee: 0.65% per annum
Performance fee: 15% of returns above the index, subject to a high-water mark
No performance fee is charged in any period in which the fund underperforms the index, and underperformance must be recovered before a fee is charged again.

Liquidity: Daily dealing, with a 2% swing pricing adjustment applied where net flows exceed 3% of fund assets on any dealing day.

Minimum investment: £5m

Capacity: The fund will close to new subscriptions at £3.5bn. Existing investors may continue to subscribe after closure.` },
      { label: 'E-mail', text: `To: institutional@meridianam.com
From: trustees@ashcombepension.org.uk
Date: 4 July
Subject: Due diligence questions

Dear Sir or Madam,

The Ashcombe Pension Scheme is considering an allocation of £12m.

Three questions arising from our review:

1. The factsheet states the high-water mark applies, but does not say whether it resets. Some managers reset after a defined period, which materially weakens the protection. Please confirm your treatment.

2. Current fund assets are stated as £3.2bn. Given the £3.5bn capacity, we would want comfort that our allocation is not made shortly before closure, with the associated risk of a very different fund thereafter.

3. Please confirm whether the swing pricing adjustment applies to subscriptions as well as redemptions.

Regards,
Trustees, Ashcombe Pension Scheme` }
    ],
    questions: [
      { q: 'When is no performance fee charged?', options: ['When the fund exceeds the index', 'In any period of underperformance, until it is recovered', 'When assets exceed £3.5bn', 'When net flows exceed 3%'], answer: 1, explain: 'factsheet 明訂表現落後期間不收績效費，且須先彌補落後才能再收。' },
      { q: 'Why do the trustees ask about the high-water mark reset?', options: ['Because a reset would increase the management fee', 'Because a reset materially weakens investor protection', 'Because it affects the minimum investment', 'Because it determines dealing frequency'], answer: 1, explain: '他們指出部分經理人會定期重設，會實質削弱這項保護。' },
      { q: 'What concern do the trustees raise about capacity?', options: ['That the fund is already closed', 'That allocating shortly before closure risks a very different fund afterwards', 'That the minimum investment is too high', 'That existing investors will be forced to redeem'], answer: 1, explain: '目前 £3.2bn 接近 £3.5bn 上限，他們擔心投入後基金性質改變。' },
      { q: 'What is the position of existing investors after closure?', options: ['They must redeem.', 'They may continue to subscribe.', 'They pay a higher management fee.', 'They are subject to monthly dealing only.'], answer: 1, explain: 'factsheet 寫封閉後既有投資人仍可繼續申購。' },
      { q: 'What is the minimum investment relative to Ashcombe\'s proposed allocation?', options: ['The allocation is below the minimum.', 'The allocation is more than twice the minimum.', 'The allocation equals the minimum.', 'No minimum is stated.'], answer: 1, explain: '最低投資 £5m，擬投入 £12m，超過兩倍。' }
    ]
  },
  {
    id: 'a7-26', kind: 'double',
    docs: [
      { label: 'Internal review', text: `REVIEW OF THE CUSTOMER REMEDIATION PROGRAMME — FINDINGS

The programme has contacted 84,000 of the 91,000 affected customers and paid redress totalling £47m.

Three findings warrant attention.

Finding 1: The 7,000 uncontacted customers are not randomly distributed. They are disproportionately customers whose accounts closed before 2018, for whom the firm holds only historic address data. Standard tracing has been attempted once.

Finding 2: Redress calculations applied an 8% simple interest uplift. The methodology paper specifies 8% compound. Testing of 200 files found the error in 187, understating redress by an average of £310 per file.

Finding 3: Complaint handling within the programme has a 41% overturn rate at the Ombudsman, against a firm-wide average of 19%. The programme's own quality assurance passed 96% of the sampled cases that were subsequently overturned.

We regard Finding 2 as the most urgent, as it affects customers already treated as resolved.` },
      { label: 'E-mail', text: `To: Board Risk Committee
From: Director of Conduct
Date: 3 March
Subject: Remediation review — my assessment

Members,

I agree with the review's findings but not with its prioritisation.

Finding 2 is serious but bounded and mechanical. We know the population, we know the error, and correction is a calculation exercise. I have instructed that all files be recalculated and additional payments made within eight weeks.

Finding 3 concerns me more. A 41% overturn rate against a 19% baseline suggests our decisions are wrong at more than twice the normal rate, and our quality assurance did not detect it. That is not a calculation error; it is a judgement failure that our own controls are blind to. Until we understand why QA passed those cases, we cannot rely on any assurance the programme has given us — including its assurance about Finding 1.

I propose an independent review of the QA function before we accept any further programme reporting.

Director of Conduct` }
    ],
    questions: [
      { q: 'What is distinctive about the 7,000 uncontacted customers?', options: ['They refused contact.', 'They are concentrated among pre-2018 closed accounts with only historic addresses.', 'They received partial redress.', 'They were excluded from the methodology.'], answer: 1, explain: '這些人並非隨機分布，多為 2018 年前結清、僅有舊地址資料的客戶。' },
      { q: 'What was the error in Finding 2?', options: ['Interest was omitted entirely.', 'Simple interest was applied instead of compound.', 'The wrong customer population was used.', 'Payments were duplicated.'], answer: 1, explain: '應用 8% 單利，但方法論文件規定為 8% 複利。' },
      { q: 'Why does the Director disagree with the review\'s prioritisation?', options: ['Finding 2 is not actually an error.', 'Finding 3 reveals a judgement failure that controls failed to detect.', 'Finding 1 affects more customers.', 'The overturn rate is within tolerance.'], answer: 1, explain: '他認為第 3 項顯示判斷失誤且品保未能察覺，比機械性計算錯誤更嚴重。' },
      { q: 'What does the Director conclude about the programme\'s other assurances?', options: ['They can be relied upon.', 'They cannot be relied upon until the QA failure is understood.', 'They should be verified by the Ombudsman.', 'They apply only to Finding 2.'], answer: 1, explain: '他說在釐清品保為何放行之前，無法信賴該計畫的任何保證，包括第 1 項。' },
      { q: 'What action has already been instructed?', options: ['An independent QA review', 'Recalculation of all files within eight weeks', 'Suspension of the programme', 'A second tracing attempt for the 7,000 customers'], answer: 1, explain: '他已下令在八週內重算所有案件並補付差額。' }
    ]
  },
  {
    id: 'a7-27', kind: 'triple',
    docs: [
      { label: 'Grant guidelines', text: `NORTHERN INNOVATION FUND
Round 9 — Guidance for Applicants

Eligibility: Registered businesses with 10–250 employees, trading for at least 24 months, with registered premises in the eligible region.

Grant levels
Tier 1 — up to £50,000 — requires 40% applicant contribution
Tier 2 — £50,001 to £150,000 — requires 50% applicant contribution
Tier 3 — £150,001 to £400,000 — requires 60% applicant contribution and an independent technical assessment

Costs eligible: capital equipment, prototyping, and directly attributable staff time. Not eligible: general overheads, marketing, or costs incurred before the grant offer date.

Applications close 30 April. Assessment takes approximately 10 weeks. Successful applicants must draw down at least 25% of the grant within six months of offer or the award may be withdrawn.` },
      { label: 'E-mail', text: `To: grants@northerninnovation.org.uk
From: r.achebe@dalefieldsystems.co.uk
Date: 12 April
Subject: Round 9 — eligibility and cost questions

Hello,

Dalefield Systems employs 38 staff and has traded since 2019 from premises in the eligible region.

We are seeking £180,000 towards an automated test rig. Total project cost is £460,000.

Three questions:

1. We commissioned a feasibility study in February at a cost of £22,000. Can this be included?
2. Our contribution would be £280,000, which I calculate as above the required percentage — please confirm.
3. Equipment lead time is nine months. Given the drawdown requirement, is a deposit payment sufficient to meet it?

Regards,
Rita Achebe` },
      { label: 'Reply', text: `To: r.achebe@dalefieldsystems.co.uk
From: grants@northerninnovation.org.uk
Date: 16 April
Subject: RE: Round 9 — eligibility and cost questions

Dear Ms. Achebe,

Taking your questions in turn.

1. No. Costs incurred before the offer date are not eligible, and February precedes any possible offer in this round. The study may be referenced as supporting evidence but cannot form part of the project cost.

2. Your calculation is correct on the figures given, though note that the £22,000 must be excluded from the project cost when the ratio is assessed.

3. Yes. A deposit constitutes drawdown provided it is evidenced by a supplier invoice and paid within the six-month window.

You will also need to commission the independent technical assessment at your own cost before submission.

Northern Innovation Fund` }
    ],
    questions: [
      { q: 'Which tier does Dalefield Systems fall into?', options: ['Tier 1', 'Tier 2', 'Tier 3', 'It is not eligible.'], answer: 2, explain: '申請 £180,000 落在 £150,001–£400,000 區間，屬 Tier 3。' },
      { q: 'What additional requirement applies to their application?', options: ['A second referee', 'An independent technical assessment at their own cost', 'A three-year trading history', 'A minimum of 50 employees'], answer: 1, explain: 'Tier 3 需獨立技術評估，回信也說須自費在送件前完成。' },
      { q: 'Why is the £22,000 feasibility study ineligible?', options: ['Feasibility studies are never eligible.', 'It was incurred before any possible offer date.', 'It exceeds the cost threshold.', 'It was not independently assessed.'], answer: 1, explain: '指引寫補助核准日前發生的費用不符資格，二月早於本輪任何可能的核准日。' },
      { q: 'After excluding the study, what is the project cost?', options: ['£460,000', '£438,000', '£280,000', '£180,000'], answer: 1, explain: '£460,000 − £22,000 = £438,000。' },
      { q: 'What must Dalefield do within six months of an offer?', options: ['Complete the project', 'Draw down at least 25% of the grant', 'Submit an audited account', 'Take delivery of the equipment'], answer: 1, explain: '指引要求六個月內至少動支 25%，回信確認訂金可計入。' }
    ]
  },
  {
    id: 'a7-28', kind: 'triple',
    docs: [
      { label: 'Tender document', text: `HELMSDALE HEALTH TRUST
Invitation to Tender — Managed Print Service
Reference MPS/2025/03

Contract term: 4 years, with a Trust option to extend by 2 years

Evaluation: Quality 55%, Price 35%, Social Value 10%

Quality sub-criteria: Service model 20%, Transition plan 20%, Sustainability 15%

Mandatory: Bidders must hold ISO 27001 certification at the point of submission. Certification pending assessment does not satisfy this requirement.

Pricing must be submitted on the Trust's template. Any bid submitting pricing in an alternative format will be deemed non-compliant and will not be evaluated.

Clarification questions close 14 days before the submission deadline of 20 June. Responses are published to all bidders.` },
      { label: 'Clarification log', text: `MPS/2025/03 — CLARIFICATION LOG (Published 10 June)

Q4: Can the 2-year extension be exercised in two separate 1-year increments?
A4: No. The option is a single 2-year extension, exercisable once.

Q7: Our ISO 27001 certificate expires on 15 June. Recertification is scheduled for 25 June. Would a bid submitted on 20 June be compliant?
A7: No. Certification must be held at the point of submission. A certificate expiring before the deadline does not satisfy the requirement.

Q11: May we propose an alternative pricing structure alongside the completed template?
A11: A completed template is mandatory. An alternative may be submitted as additional information but will not be evaluated and cannot form the basis of the contract.

Q12: Is Social Value assessed on commitments or on past performance?
A12: On commitments specific to this contract. Generic corporate policies will score zero.` },
      { label: 'E-mail', text: `To: procurement@helmsdalehealth.nhs.uk
From: bids@calderprint.co.uk
Date: 17 June
Subject: MPS/2025/03 — intention to bid

Dear Procurement Team,

Following the clarification log, I am writing to confirm Calder Print's position.

Our ISO 27001 certificate is valid until March 2027, so Q7 does not affect us.

We intend to submit on the Trust's template. We had prepared a consumption-based alternative and, in light of A11, will include it clearly marked as additional information only.

On Social Value, we note A12 and are revising our submission to replace our corporate sustainability statement with commitments specific to the Trust's sites.

One point: our transition plan assumes a 12-week mobilisation. The Trust's service model documentation refers to 8 weeks in one place and 12 in another. Given clarifications have closed, may we state our assumption explicitly in the submission?

Regards,
Tom Beattie` }
    ],
    questions: [
      { q: 'What is the total weighting for quality sub-criteria?', options: ['35%', '45%', '55%', '65%'], answer: 2, explain: '服務模式 20% + 轉換計畫 20% + 永續 15% = 55%，與品質總權重相符。' },
      { q: 'Why would the bidder in Q7 be non-compliant?', options: ['Their certificate is the wrong standard.', 'Their certificate expires before the submission deadline.', 'They submitted after the deadline.', 'They used an alternative pricing format.'], answer: 1, explain: '證書 6 月 15 日到期，早於 6 月 20 日送件日，不符「送件時須持有」的規定。' },
      { q: 'What does Calder Print say about its alternative pricing structure?', options: ['It will replace the template.', 'It will be withdrawn entirely.', 'It will be included but marked as additional information only.', 'It will be submitted after the deadline.'], answer: 2, explain: '依 A11 的答覆，他們會附上但明確標示為僅供參考的補充資料。' },
      { q: 'Why is Calder Print revising its Social Value response?', options: ['The weighting was increased.', 'Generic corporate policies score zero.', 'The deadline was extended.', 'Social Value is now mandatory.'], answer: 1, explain: 'A12 說只採計本案專屬承諾，通用企業政策得零分。' },
      { q: 'What difficulty does Mr. Beattie raise?', options: ['The evaluation weightings are unclear.', 'The tender documents give inconsistent mobilisation periods and clarifications have closed.', 'The contract term is too short.', 'The template cannot be opened.'], answer: 1, explain: '服務模式文件一處寫 8 週、一處寫 12 週，而澄清期已截止。' }
    ]
  }
];
