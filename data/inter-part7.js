/* 進階 TOEIC 550-700：Part 7 閱讀理解
   單篇 5 組 × 3 題 + 雙篇 2 組 × 5 題 + 三篇 1 組 × 5 題 = 30 題 */

const INTER_PART7 = [
  /* ─────────── 單篇 ─────────── */
  {
    id: 'i7-1', kind: 'single',
    docs: [{ label: 'Press release', text: `FOR IMMEDIATE RELEASE

Delmar Foods Acquires Northline Organics

BOSTON, April 3 — Delmar Foods announced today that it has acquired Northline Organics, a regional producer of packaged snacks, for an undisclosed amount.

Northline will continue to operate under its own brand name, and all 210 employees will retain their positions. Northline's founder, Ellen Vasquez, will join Delmar's leadership team as Director of Product Development.

"Northline built something our customers already trust," said Delmar CEO Rahul Menon. "Our role is to give that team wider distribution, not to change what works."

Delmar expects the acquisition to expand its presence in the natural foods category, where it currently holds an estimated 6% market share.

The transaction is expected to close by June 30, pending regulatory approval.` }],
    questions: [
      { q: 'What is indicated about Northline employees?', options: ['They will be relocated to Boston.', 'They will keep their jobs.', 'They will receive new job titles.', 'They will be retrained.'], answer: 1, explain: '文中寫 all 210 employees will retain their positions。' },
      { q: 'What does Mr. Menon suggest about Delmar\'s plans for Northline?', options: ['It will change the product line significantly.', 'It will merge Northline into the Delmar brand.', 'It will leave the existing approach largely intact.', 'It will reduce Northline\'s production capacity.'], answer: 2, explain: '他說 Our role is to give that team wider distribution, not to change what works。' },
      { q: 'What must happen before the deal is finalized?', options: ['Regulatory approval must be granted.', 'A new CEO must be appointed.', 'The purchase price must be announced.', 'A new facility must be built.'], answer: 0, explain: '最後寫 pending regulatory approval。' }
    ]
  },
  {
    id: 'i7-2', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: All Regional Managers
From: Priya Raghavan, VP Operations
Date: February 12
Subject: Q1 inventory review — action required

Colleagues,

Our Q1 inventory audit revealed that four of our nine regional warehouses are carrying more than 90 days of stock, well above our 45-day target.

Excess inventory ties up capital and increases the risk of obsolescence, particularly in the electronics category where product cycles are short.

Each affected region should submit a reduction plan by March 1. Plans should identify slow-moving items, propose markdown levels, and estimate the working capital that would be released.

I recognize that some overstock resulted from the port delays in November, which were outside your control. The purpose of this exercise is not to assign blame but to free up cash before the summer purchasing cycle.

Please contact my office if you need historical sales data to support your analysis.

Priya` }],
    questions: [
      { q: 'What problem does the e-mail address?', options: ['Warehouses are running out of stock.', 'Several warehouses hold too much inventory.', 'Sales have declined in four regions.', 'Shipping costs have increased.'], answer: 1, explain: '四個倉庫庫存超過 90 天，遠高於 45 天目標。' },
      { q: 'Why is the electronics category mentioned?', options: ['Because it is the most profitable', 'Because its products become outdated quickly', 'Because it was not affected by the delays', 'Because it has the lowest stock levels'], answer: 1, explain: '文中說電子類產品週期短，過時風險特別高。' },
      { q: 'What does Ms. Raghavan indicate about the November port delays?', options: ['They were the managers\' responsibility.', 'They will happen again this year.', 'They were beyond the managers\' control.', 'They reduced inventory levels.'], answer: 2, explain: '她寫 which were outside your control。' }
    ]
  },
  {
    id: 'i7-3', kind: 'single',
    docs: [{ label: 'Job posting', text: `SENIOR LOGISTICS COORDINATOR
Kestrel Distribution — Rotterdam

Kestrel Distribution is seeking a Senior Logistics Coordinator to manage freight operations across our Northern Europe network.

Responsibilities:
• Coordinating shipments among 12 distribution centers
• Negotiating rates with carriers and customs brokers
• Monitoring on-time delivery metrics and reporting monthly to the Operations Director

Requirements:
• Minimum five years in logistics, at least two in a supervisory role
• Working knowledge of customs documentation for EU and non-EU shipments
• Fluency in English; Dutch or German an advantage

We offer a competitive salary, 28 days of annual leave, and a hybrid schedule of three days on site.

Applications close on May 20. Interviews will be conducted in the first week of June. Candidates who advance past the first round will be asked to complete a short case study.` }],
    questions: [
      { q: 'What is NOT listed as a responsibility?', options: ['Negotiating carrier rates', 'Reporting delivery metrics', 'Hiring warehouse staff', 'Coordinating shipments'], answer: 2, explain: '職責列出協調出貨、議價、回報指標，未提及招募倉儲人員。' },
      { q: 'What is stated about language requirements?', options: ['Dutch is mandatory.', 'German is mandatory.', 'English is required and Dutch or German is a plus.', 'All three languages are required.'], answer: 2, explain: 'Fluency in English 為必要，Dutch or German an advantage 為加分。' },
      { q: 'What will some candidates be asked to do?', options: ['Visit a distribution center', 'Complete a case study', 'Provide three references', 'Take a language test'], answer: 1, explain: '通過第一輪的人須完成一份簡短的案例研究。' }
    ]
  },
  {
    id: 'i7-4', kind: 'single',
    docs: [{ label: 'Online chat', text: `Hannah Ridley (2:14 P.M.)
Team, the client just asked whether we can move the launch from October 10 to September 26. Thoughts?

Omar Haddad (2:16 P.M.)
Design can hit that date. The assets are basically done.

Lena Voss (2:17 P.M.)
Engineering is the constraint. We'd have to cut the second round of load testing.

Hannah Ridley (2:18 P.M.)
How risky is that?

Lena Voss (2:20 P.M.)
Last time we skipped it we found three issues in production. I'd rather not repeat that.

Omar Haddad (2:21 P.M.)
What if we launch to 10% of users on the 26th and go full on the 10th?

Lena Voss (2:23 P.M.)
That I could support. Load testing would still finish before the full rollout.

Hannah Ridley (2:24 P.M.)
I'll propose the staged approach to the client this afternoon.` }],
    questions: [
      { q: 'What is the main issue being discussed?', options: ['Whether to change a launch date', 'Whether to hire more engineers', 'Whether to raise the project budget', 'Whether to replace a client'], answer: 0, explain: '討論客戶要求把上線日從 10 月 10 日提前到 9 月 26 日。' },
      { q: 'At 2:20 P.M., what does Ms. Voss imply when she writes, "I\'d rather not repeat that"?', options: ['She does not want to redo the design work.', 'She is concerned about skipping load testing again.', 'She does not want to meet the client again.', 'She prefers not to change the budget.'], answer: 1, explain: '她指的是上次省略負載測試後在正式環境發現三個問題。' },
      { q: 'What solution do the participants agree on?', options: ['Delaying the launch to November', 'Launching to all users on September 26', 'Releasing to a small group first, then everyone', 'Canceling the second round of testing'], answer: 2, explain: '9 月 26 日先開放 10% 使用者，10 月 10 日全面上線。' }
    ]
  },
  {
    id: 'i7-5', kind: 'single',
    docs: [{ label: 'Article', text: `The Quiet Return of the Company Cafeteria

For much of the past decade, corporate cafeterias were treated as a cost to be cut. Many firms replaced them with vending machines or nearby food trucks, reasoning that employees preferred variety and that the savings were substantial.

That calculation is being revisited. As companies press for more in-office days, several have found that food is one of the few incentives employees consistently value. A 2024 survey of 1,200 office workers found that subsidized meals ranked second only to commuting support among on-site benefits.

The economics have also shifted. Cafeteria operators now commonly work on a management-fee model rather than taking on the full financial risk, which lowers the cost of reopening a facility.

Still, the trend is uneven. Firms with fewer than 300 employees at a single site rarely find the numbers work, and some have opted instead for stipends redeemable at neighborhood restaurants — an approach that spreads the benefit without the fixed overhead.` }],
    questions: [
      { q: 'Why did many companies close their cafeterias?', options: ['Employees complained about the food quality.', 'They were seen as an expense that could be reduced.', 'Health regulations became stricter.', 'Food trucks were more popular with clients.'], answer: 1, explain: '文中寫 corporate cafeterias were treated as a cost to be cut。' },
      { q: 'According to the survey, what benefit did workers rank highest?', options: ['Subsidized meals', 'Commuting support', 'Flexible hours', 'On-site fitness centers'], answer: 1, explain: '補貼餐點排第二，僅次於通勤補助，故通勤補助最高。' },
      { q: 'What is suggested about smaller offices?', options: ['They are opening cafeterias faster than large firms.', 'They often use restaurant stipends instead.', 'They have higher food costs per employee.', 'They rarely offer any food benefit.'], answer: 1, explain: '文末提到小型據點常改用可在附近餐廳使用的補助金。' }
    ]
  },

  {
    id: 'i7-9', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: All Store Managers
From: Elena Ruiz, Regional Director
Date: August 14
Subject: Revised opening procedures

Managers,

Effective September 1, opening procedures will change at all 22 locations.

Cash drawers must be counted by two staff members, not one. Both must sign the count sheet. This addresses a recurring discrepancy pattern identified during the July audit.

Second, the alarm code must be entered before the front lights are switched on, not after. Several stores have been doing this in the wrong order, which triggers a delayed alert at the monitoring company.

I recognize that adding a second person to the count means an earlier start for one team member. Please build this into the schedule rather than asking staff to arrive early unpaid.

I will visit the six highest-volume stores during the first two weeks of September to see how the changes are working.

Elena` }],
    questions: [
      { q: 'Why is the cash counting procedure changing?', options: ['To reduce opening time', 'To address discrepancies found in an audit', 'To comply with a new law', 'To train new employees'], answer: 1, explain: '信中說是為了處理七月稽核發現的重複性差異。' },
      { q: 'What problem does the alarm code sequence cause?', options: ['The lights fail to turn on.', 'A delayed alert is sent to the monitoring company.', 'The doors remain locked.', 'The cash register does not open.'], answer: 1, explain: '順序錯誤會觸發監控公司的延遲警報。' },
      { q: 'What does Ms. Ruiz instruct managers to do about scheduling?', options: ['Ask staff to arrive early without pay', 'Reduce the number of opening staff', 'Include the earlier start in the paid schedule', 'Rotate the counting duty weekly'], answer: 2, explain: '她要求排班時納入，不可要員工無薪提早到。' }
    ]
  },
  {
    id: 'i7-10', kind: 'single',
    docs: [{ label: 'Article', text: `Why Some Firms Are Bringing Translation In-House

For years, mid-sized exporters treated translation as a purely external service, sending documents to agencies as needed. A growing number are now hiring in-house linguists instead.

The shift is not driven by cost. Agency rates have been broadly stable, and a full-time translator is rarely cheaper than outsourcing at typical volumes. What has changed is the nature of the work.

Product documentation now updates continuously rather than annually. A firm releasing software patches monthly cannot wait five days for a translation cycle. In-house staff can turn around short updates in hours and, crucially, retain context across releases.

There is also a quality argument. Agencies rotate translators, which means terminology drifts. One machinery exporter found that a single component had been translated four different ways across three manuals.

The approach has limits. Firms operating in more than five or six languages generally find a hybrid model works better: in-house for core markets, agencies for the rest.` }],
    questions: [
      { q: 'What does the article identify as the main driver of the change?', options: ['Lower salary costs', 'The increasing frequency of documentation updates', 'A shortage of translation agencies', 'New regulatory requirements'], answer: 1, explain: '文中明確指出不是成本，而是文件更新變得持續且頻繁。' },
      { q: 'What problem is mentioned regarding agencies?', options: ['They charge more each year.', 'They refuse small jobs.', 'Rotating translators cause terminology to drift.', 'They cannot handle technical documents.'], answer: 2, explain: '代理商輪換譯者導致術語不一致，舉了同一零件四種譯法的例子。' },
      { q: 'What does the article suggest for firms working in many languages?', options: ['Using agencies exclusively', 'Hiring one translator per language', 'Combining in-house staff with agencies', 'Relying on machine translation'], answer: 2, explain: '文末建議語言超過五、六種者採混合模式。' }
    ]
  },
  {
    id: 'i7-11', kind: 'single',
    docs: [{ label: 'Notice', text: `HARTWELL BUSINESS PARK
Access Card System Migration

The current access card system will be replaced during the weekend of 22–23 June.

All existing cards will stop working at 6:00 P.M. on Friday 21 June. Replacement cards must be collected from the management office between 10 and 20 June.

Tenants must submit an updated list of authorized staff by 6 June. Cards will be produced only for names on the submitted list; individuals not listed will need to be added afterwards, which takes three working days.

During the migration weekend, entry will be by intercom only. A security officer will be on duty at the main gate from 7:00 A.M. to 7:00 P.M. Outside those hours, the park will be closed.

Lost cards will be charged at £25, an increase from the current £15.` }],
    questions: [
      { q: 'What must tenants do by June 6?', options: ['Collect replacement cards', 'Submit a list of authorized staff', 'Return their old cards', 'Pay a replacement fee'], answer: 1, explain: '公告要求 6 月 6 日前提交授權人員名單。' },
      { q: 'What happens to a staff member not on the submitted list?', options: ['They cannot be added later.', 'They receive a temporary card immediately.', 'Adding them takes three working days.', 'They must pay £25.'], answer: 2, explain: '未列名者事後補加需要三個工作天。' },
      { q: 'What is indicated about access during the migration weekend?', options: ['The park is open 24 hours.', 'Entry is by intercom, with security on site only during set hours.', 'Only tenants with new cards may enter.', 'The main gate remains locked all weekend.'], answer: 1, explain: '該週末僅能透過對講機進入，警衛值勤時間為 7:00–19:00，其餘時間封閉。' }
    ]
  },
  {
    id: 'i7-12', kind: 'single',
    docs: [{ label: 'Online chat', text: `Priya Menon (09:41)
Quick decision needed. The Ashford order is short by 300 units. Do we split the shipment or hold it?

Tom Bergqvist (09:43)
Their contract has a 98% fill-rate clause. A partial shipment counts against it.

Priya Menon (09:44)
And holding? That's a five-day delay minimum.

Tom Bergqvist (09:46)
Delay doesn't breach the clause as long as we're inside the delivery window. We have until the 19th.

Priya Menon (09:47)
So holding is technically safer.

Tom Bergqvist (09:49)
Technically. But Ashford's line stops on the 16th without stock. Contractually fine, commercially bad.

Priya Menon (09:52)
Let's call them and ask which they'd prefer. If they choose the split, get it in writing.

Tom Bergqvist (09:53)
Agreed. I'll draft the e-mail after the call.` }],
    questions: [
      { q: 'What is the problem?', options: ['A shipment arrived damaged.', 'An order cannot be fully filled.', 'A contract has expired.', 'A delivery was sent to the wrong address.'], answer: 1, explain: 'Ashford 的訂單少了 300 個單位。' },
      { q: 'At 09:49, what does Mr. Bergqvist mean by "Contractually fine, commercially bad"?', options: ['The delay breaches the contract but helps the relationship.', 'The delay is allowed under the contract but would harm the customer.', 'The split shipment is cheaper but slower.', 'The contract should be renegotiated.'], answer: 1, explain: '延後不違約，但客戶產線 16 日就停工，對商業關係不利。' },
      { q: 'What do they decide to do?', options: ['Split the shipment immediately', 'Hold the shipment until the 19th', 'Ask the customer to choose and document the answer', 'Cancel the order'], answer: 2, explain: 'Priya 提議打電話問客戶偏好，若選分批出貨要留書面紀錄。' }
    ]
  },
  {
    id: 'i7-13', kind: 'single',
    docs: [{ label: 'Job posting', text: `PROCUREMENT ANALYST
Vantage Foods — Hybrid (3 days on site, Dublin)

Reporting to the Head of Procurement, the Analyst supports category managers with spend analysis and supplier evaluation.

Key duties
• Preparing monthly spend reports across six categories
• Running tender processes for contracts below €150,000
• Maintaining the supplier risk register

Essential
• Two years' experience in procurement, purchasing, or supply chain analysis
• Advanced spreadsheet skills, including pivot tables and lookup functions
• Experience with an ERP system

Desirable
• Familiarity with food safety certification requirements
• A second European language

We offer 25 days' leave, a pension contribution of 6%, and an annual training budget of €1,500.

This role does not include line management responsibility. Candidates seeking a supervisory position should note this before applying.` }],
    questions: [
      { q: 'What contract value can the Analyst run tenders for?', options: ['Any value', 'Below €150,000', 'Above €150,000', 'Below €1,500'], answer: 1, explain: '職責寫負責 €150,000 以下合約的招標流程。' },
      { q: 'Which is listed as desirable rather than essential?', options: ['ERP experience', 'Advanced spreadsheet skills', 'A second European language', 'Two years of procurement experience'], answer: 2, explain: '第二歐洲語言列在 Desirable 之下。' },
      { q: 'Why is the absence of line management mentioned?', options: ['To explain the salary level', 'To alert candidates seeking a supervisory role', 'To describe the reporting structure', 'To justify the hybrid arrangement'], answer: 1, explain: '文末明說希望找主管職的人應徵前先留意這一點。' }
    ]
  },
  {
    id: 'i7-14', kind: 'single',
    docs: [{ label: 'Press release', text: `Marlow Instruments Opens Service Center in Kuala Lumpur

KUALA LUMPUR, 12 September — Marlow Instruments today opened its first Southeast Asian service center, reducing repair turnaround for regional customers from an average of 21 days to an expected 6.

Previously, instruments requiring calibration or repair were shipped to the company's facility in Manchester. Freight and customs handling accounted for roughly two-thirds of the total turnaround time.

The new center employs 14 technicians, all of whom completed a twelve-week training program at the Manchester site.

"Our customers were not complaining about repair quality," said Regional Director Faridah Ismail. "They were complaining about their instruments spending three weeks in transit."

The facility will initially service five product families, with two more to be added in the second quarter of next year. Instruments outside those families will continue to be sent to Manchester.` }],
    questions: [
      { q: 'What accounted for most of the previous turnaround time?', options: ['Repair work itself', 'Freight and customs handling', 'Technician availability', 'Parts shortages'], answer: 1, explain: '文中寫運費與清關占總周轉時間約三分之二。' },
      { q: 'What does Ms. Ismail identify as the customer complaint?', options: ['Poor repair quality', 'High repair costs', 'Long transit times', 'Limited product range'], answer: 2, explain: '她說客戶抱怨的不是品質，而是儀器在運送途中花了三週。' },
      { q: 'What is indicated about product families not yet covered?', options: ['They will never be serviced locally.', 'They will still be sent to Manchester.', 'They will be serviced by a partner firm.', 'They will be discontinued.'], answer: 1, explain: '未涵蓋的產品線仍送回曼徹斯特處理。' }
    ]
  },
  {
    id: 'i7-15', kind: 'single',
    docs: [{ label: 'Memo', text: `To: All Staff
From: Facilities and Sustainability
Subject: Results of the six-month energy trial

In March we began a trial in the North Wing: motion-sensor lighting, a two-degree adjustment to heating setpoints, and automatic shutdown of desktop monitors after 30 minutes of inactivity.

Results after six months:
Electricity use in the North Wing fell 19% against the same period last year.
The South Wing, used as a control, fell 2%, consistent with milder weather.

The monitor shutdown produced the largest single saving, which surprised us. Lighting sensors contributed less than expected because much of the wing has good daylight.

Complaints were minimal, with one exception: staff in the north-facing meeting rooms reported the rooms were noticeably cooler. We will exclude those rooms from the setpoint change when we extend the trial.

Rollout to the South and East Wings begins in November.` }],
    questions: [
      { q: 'Why was the South Wing measured?', options: ['It was part of the trial.', 'It served as a control for comparison.', 'It had the highest energy use.', 'It was scheduled for renovation.'], answer: 1, explain: '南翼作為對照組，用來比較差異。' },
      { q: 'What produced the largest saving?', options: ['Motion-sensor lighting', 'The heating setpoint change', 'Automatic monitor shutdown', 'Reduced weekend operation'], answer: 2, explain: '備忘錄寫螢幕自動關閉的單項節省最大，且結果出乎意料。' },
      { q: 'How will the trial be modified when extended?', options: ['Lighting sensors will be removed.', 'North-facing meeting rooms will be excluded from the setpoint change.', 'Monitor shutdown will be delayed to 60 minutes.', 'The South Wing will remain a control.'], answer: 1, explain: '因北向會議室明顯偏冷，擴大實施時將排除這些房間。' }
    ]
  },
  {
    id: 'i7-16', kind: 'single',
    docs: [{ label: 'Letter', text: `Dear Ms. Farrell,

Thank you for your letter of 3 October concerning invoice INV-2291.

I have reviewed the account. You are correct that the invoice was issued at the standard rate rather than the contracted rate agreed in July. The difference is £1,840, and a credit note has been raised today.

You also asked why the error occurred. Our billing system holds contracted rates against a customer code, and your account was set up under a second code when the delivery address changed in August. The second code carried default pricing.

We have merged the two codes and applied the contracted rate to both. I have asked our billing team to review all invoices issued to you since August; if any others were affected, credit notes will follow within ten working days.

I appreciate you raising this and apologize for the additional work it caused you.

Yours sincerely,
Callum Reid
Accounts Manager` }],
    questions: [
      { q: 'What caused the billing error?', options: ['A change in the contracted rate', 'The account being set up under a second customer code', 'A data entry mistake by a staff member', 'A software upgrade'], answer: 1, explain: '因八月更改送貨地址時建立了第二個客戶代碼，該代碼沿用預設價格。' },
      { q: 'What has already been done?', options: ['A refund has been paid.', 'A credit note has been raised.', 'The contract has been renegotiated.', 'The account has been closed.'], answer: 1, explain: '信中寫今天已開立折讓單。' },
      { q: 'What will happen next?', options: ['Ms. Farrell must resubmit the invoice.', 'All invoices since August will be reviewed.', 'The contracted rate will be renegotiated.', 'A meeting will be scheduled.'], answer: 1, explain: '會計團隊將檢視八月以來所有發票，如有影響會再開折讓單。' }
    ]
  },
  {
    id: 'i7-17', kind: 'single',
    docs: [{ label: 'Web page', text: `MERIDIAN CONSULTING — Frequently Asked Questions

How are your fees structured?
Most engagements are fixed-fee, agreed in advance against a defined scope. We use day rates only for open-ended advisory work.

What happens if the scope changes?
We issue a written change note before any additional work begins. No additional fees are invoiced without your prior written agreement.

Do you subcontract?
Occasionally, for specialist technical assessments. Subcontractors are named in the proposal and are bound by the same confidentiality terms as our own staff.

How quickly can you start?
Typically three to four weeks from signature. Urgent starts are sometimes possible but may attract a premium.

Who owns the deliverables?
You do, on payment of the final invoice. We retain the right to describe the engagement in general terms for marketing purposes unless you ask us not to.` }],
    questions: [
      { q: 'When are day rates used?', options: ['For all engagements', 'For fixed-scope projects', 'For open-ended advisory work', 'For urgent starts only'], answer: 2, explain: '網頁寫日費率僅用於範圍未定的顧問工作。' },
      { q: 'What is stated about subcontractors?', options: ['They are never used.', 'They are named in the proposal.', 'They are exempt from confidentiality terms.', 'They are chosen by the client.'], answer: 1, explain: '外包廠商會在提案中具名，並受相同保密條款約束。' },
      { q: 'What right does Meridian retain after payment?', options: ['Ownership of the deliverables', 'The right to resell the work', 'The right to describe the engagement generally for marketing', 'The right to publish the full report'], answer: 2, explain: '交付物歸客戶所有，但顧問保留以概括方式對外提及該案的權利。' }
    ]
  },
  {
    id: 'i7-18', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: Product Team
From: Hana Kowalski, Head of Product
Date: April 3
Subject: What the churn data actually says

Team,

I've seen the churn number quoted in three different meetings this week with three different explanations, so let me set out what we know.

Monthly churn rose from 3.1% to 4.4% between November and February. That is real and material.

What is not established: that the price increase caused it. The increase applied to all customers, but churn rose almost entirely among accounts with fewer than five seats. Larger accounts were essentially flat.

Two other things changed in that window. We retired the legacy import tool, which small accounts used disproportionately, and our smallest competitor cut its entry price by 30%.

I am not saying price is irrelevant. I am saying we have three candidate explanations and no evidence separating them. Before we discuss reversing the increase, I would like the exit-survey responses coded and segmented by account size. Ravi, can you own that for the 17th?

Hana` }],
    questions: [
      { q: 'What is Ms. Kowalski\'s main concern?', options: ['That churn has not been measured accurately', 'That a single explanation is being assumed without evidence', 'That the price increase was too small', 'That the product team is understaffed'], answer: 1, explain: '她指出有三種可能解釋，但沒有證據能區分，反對直接歸因於漲價。' },
      { q: 'What pattern does she note in the churn data?', options: ['It affected all account sizes equally.', 'It was concentrated among accounts with fewer than five seats.', 'It affected only the largest accounts.', 'It reversed after February.'], answer: 1, explain: '流失幾乎集中在五席以下的小型帳戶，大型帳戶大致持平。' },
      { q: 'What does she ask for before further discussion?', options: ['A reversal of the price increase', 'A competitor pricing analysis', 'Exit-survey responses coded and segmented by account size', 'A relaunch of the legacy import tool'], answer: 2, explain: '她要求把退出問卷編碼並依帳戶規模分群。' }
    ]
  },
  {
    id: 'i7-19', kind: 'single',
    docs: [{ label: 'Notice', text: `SUPPLIER PORTAL — SCHEDULED CHANGES

From 1 November, purchase orders will no longer be sent by e-mail. All orders will be issued through the supplier portal only.

Suppliers must ensure that at least two users per organization are registered on the portal. Accounts inactive for 90 days are automatically disabled and must be reactivated by contacting support, which takes up to two working days.

Invoices submitted by e-mail after 1 December will be returned unprocessed.

Portal training sessions will be held online on 8, 15, and 22 October. Sessions last one hour and are recorded. Suppliers unable to attend may request the recording.

Suppliers who process fewer than five orders per year may apply for an exemption from portal use. Applications close on 15 October.` }],
    questions: [
      { q: 'What happens to accounts inactive for 90 days?', options: ['They are deleted permanently.', 'They are disabled and require reactivation.', 'They are charged a fee.', 'They lose access to invoicing only.'], answer: 1, explain: '公告寫閒置 90 天自動停用，須聯絡支援重新啟用，最多兩個工作天。' },
      { q: 'What is the deadline for e-mailed invoices to still be accepted?', options: ['1 November', '1 December', '15 October', '22 October'], answer: 1, explain: '12 月 1 日之後以電子郵件送出的發票將被退回。' },
      { q: 'Who may apply for an exemption?', options: ['Suppliers with more than two portal users', 'Suppliers attending training', 'Suppliers processing fewer than five orders per year', 'Suppliers registered before October'], answer: 2, explain: '每年處理少於五筆訂單的供應商可申請免用門戶。' }
    ]
  },
  {
    id: 'i7-20', kind: 'single',
    docs: [{ label: 'Article', text: `The Case Against the Annual Performance Review

Few management practices have been criticized as consistently, or retained as stubbornly, as the annual performance review.

The objections are familiar. Feedback delivered once a year is too late to change behavior. Ratings compress varied performance into a single number. Managers, aware that ratings drive pay, inflate them to protect their teams.

Some firms have responded by abolishing ratings entirely in favor of continuous conversations. Early reports were enthusiastic. Later assessments have been more mixed: without a rating, several firms found that pay decisions became less transparent, not more, because the reasoning moved from a documented score to an undocumented judgment.

That finding points to the real problem. The review is doing two jobs at once — developing people and allocating pay — and these pull in opposite directions. A conversation intended to surface weaknesses is unlikely to be candid if the employee knows a number is attached.

The firms that appear most satisfied have separated the two, holding development conversations on one cycle and compensation decisions on another.` }],
    questions: [
      { q: 'What problem did some firms encounter after abolishing ratings?', options: ['Employees stopped receiving feedback.', 'Pay decisions became less transparent.', 'Managers refused to hold conversations.', 'Turnover increased sharply.'], answer: 1, explain: '沒有評分後，薪酬決策的依據從有紀錄的分數變成無紀錄的判斷，反而更不透明。' },
      { q: 'According to the article, what is the underlying problem with reviews?', options: ['They happen too frequently.', 'They are conducted by the wrong people.', 'They combine two conflicting purposes.', 'They rely on outdated software.'], answer: 2, explain: '文章指出考核同時承擔「發展人才」與「分配薪酬」兩個相互拉扯的目的。' },
      { q: 'What approach do the most satisfied firms take?', options: ['Returning to annual ratings', 'Separating development conversations from pay decisions', 'Using peer review instead of manager review', 'Removing pay from the process entirely'], answer: 1, explain: '文末寫最滿意的公司把兩者分開，各自採不同週期。' }
    ]
  },
  {
    id: 'i7-21', kind: 'single',
    docs: [{ label: 'Memo', text: `To: Branch Managers
From: Credit Risk
Subject: Revised documentation for small business loans

From 1 March, applications for facilities up to €75,000 will require two years of filed accounts rather than three.

This change reflects analysis of our own default data. Among applications approved between 2019 and 2023, the third year of accounts changed the credit decision in fewer than 2% of cases, while adding an average of eleven days to processing.

The reduction applies only to facilities up to €75,000 and only where the business has been trading for at least three years. Businesses trading for less than three years remain subject to the existing enhanced review.

Branch managers should not interpret this as a general relaxation of standards. Bank statements, management accounts, and the personal guarantee requirement are unchanged.

Questions should be directed to Credit Risk, not to Compliance.` }],
    questions: [
      { q: 'What justified the documentation change?', options: ['Customer complaints about paperwork', 'Analysis showing the third year rarely changed decisions', 'A regulatory requirement', 'A shortage of credit staff'], answer: 1, explain: '分析顯示第三年帳目影響決策的情況不到 2%，卻平均多花十一天。' },
      { q: 'Which businesses are excluded from the change?', options: ['Those seeking more than €75,000 or trading under three years', 'Those with existing facilities', 'Those in the retail sector', 'Those applying through branches'], answer: 0, explain: '僅適用 €75,000 以下且營業滿三年者，其餘不適用。' },
      { q: 'What does the memo emphasize about standards?', options: ['All documentation requirements have been reduced.', 'Personal guarantees are no longer required.', 'Other requirements remain unchanged.', 'Compliance will handle all questions.'], answer: 2, explain: '備忘錄強調銀行對帳單、管理帳目與個人保證要求都不變。' }
    ]
  },
  {
    id: 'i7-22', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: t.ferreira@axistextiles.br
From: quality@nordwerk.de
Date: 22 May
Subject: Lot 4417 — inspection results

Dear Mr. Ferreira,

We completed incoming inspection on Lot 4417 this morning.

Of 2,000 metres, 1,760 metres met specification. The remaining 240 metres showed colour variation outside our tolerance of Delta E 1.5, measuring between 1.9 and 2.6.

We are able to use the affected material for our lining application, where the tolerance is wider. Rather than return it, we propose to retain it at a 35% price reduction on the affected quantity only.

If this is acceptable, please issue a credit note against invoice 88-3310. If you prefer the material returned, we will arrange collection, but we would then require replacement within fourteen days to hold our production schedule.

Please confirm your preference by 26 May.

Kind regards,
Ute Brenner` }],
    questions: [
      { q: 'What proportion of the lot met specification?', options: ['12%', '35%', '88%', '100%'], answer: 2, explain: '2,000 公尺中有 1,760 公尺合格，即 88%。' },
      { q: 'What does Nordwerk propose?', options: ['Returning the entire lot', 'Keeping the affected material at a reduced price', 'Cancelling the order', 'Reworking the material themselves'], answer: 1, explain: '他們提議留用瑕疵料，但該部分數量打 65 折。' },
      { q: 'What is required if the material is returned instead?', options: ['A full refund within seven days', 'Replacement within fourteen days', 'A new purchase order', 'An independent inspection'], answer: 1, explain: '若退回，需在十四天內補貨以維持生產排程。' }
    ]
  },
  {
    id: 'i7-23', kind: 'single',
    docs: [{ label: 'Web page', text: `WESTFIELD BUSINESS SCHOOL
Executive Certificate in Operations Management

Format: Six modules over nine months, delivered one weekend per month
Location: On campus, with two modules available online
Cohort size: Maximum 28

Entry requirements: A minimum of five years' management experience. A first degree is not required; candidates without one may submit a portfolio of professional experience for assessment.

Assessment: Each module is assessed by a written assignment. There are no examinations. Participants must pass five of six modules to receive the certificate.

Fees: £8,400, payable in three instalments. Employers sponsoring two or more participants receive a 10% reduction.

Applications for the January cohort close on 30 November. Applications received after that date will be considered for the September cohort.` }],
    questions: [
      { q: 'What may candidates without a degree submit?', options: ['A reference letter', 'A portfolio of professional experience', 'An entrance examination result', 'A employer sponsorship form'], answer: 1, explain: '無學位者可提交專業經歷作品集供評估。' },
      { q: 'How many modules must be passed?', options: ['Four', 'Five', 'Six', 'All modules and a final examination'], answer: 1, explain: '六個模組中須通過五個，且無考試。' },
      { q: 'What happens to applications received on 5 December?', options: ['They are rejected.', 'They are considered for the September cohort.', 'They incur a late fee.', 'They are placed on a waiting list for January.'], answer: 1, explain: '11 月 30 日之後的申請會列入九月梯次考慮。' }
    ]
  },

  /* ─────────── 雙篇 ─────────── */
  {
    id: 'i7-6', kind: 'double',
    docs: [
      { label: 'E-mail', text: `To: procurement@lindmark.com
From: sales@precisiontooling.de
Date: May 6
Subject: Quotation Q-8823 — CNC tool holders

Dear Ms. Bergström,

Thank you for your inquiry. Please find our pricing below.

Standard holders (Model TH-40): €62 each
Precision holders (Model TH-40P): €94 each

Volume terms:
100–249 units: list price
250–499 units: 6% discount
500+ units: 11% discount

Lead time is 4 weeks from order confirmation. Orders above €25,000 include free freight to any EU address.

This quotation is valid for 30 days.

Best regards,
Klaus Reiner` },
      { label: 'E-mail', text: `To: sales@precisiontooling.de
From: procurement@lindmark.com
Date: May 22
Subject: RE: Quotation Q-8823

Dear Mr. Reiner,

We would like to proceed with 300 units of the TH-40P.

Two points before we confirm:

First, our production schedule requires delivery by June 20. Please advise whether this is achievable given your stated lead time.

Second, our finance team has asked whether the freight allowance is calculated before or after the volume discount is applied.

Kind regards,
Annika Bergström` }
    ],
    questions: [
      { q: 'What discount applies to Lindmark\'s intended order?', options: ['No discount', '6%', '11%', '15%'], answer: 1, explain: '300 單位落在 250–499 區間，折扣 6%。' },
      { q: 'What is the list value of 300 TH-40P units before discount?', options: ['€18,600', '€25,000', '€28,200', '€26,508'], answer: 2, explain: '300 × €94 = €28,200。' },
      { q: 'Why is Ms. Bergström concerned about the delivery date?', options: ['The quotation expires on May 22.', 'Four weeks from confirmation may fall after June 20.', 'Freight to Sweden is not included.', 'The precision holders are out of stock.'], answer: 1, explain: '5 月 22 日確認後四週約在 6 月 19–20 日，時間非常緊。' },
      { q: 'What does Ms. Bergström want clarified about freight?', options: ['Which carrier will be used', 'Whether the €25,000 threshold is measured before or after the discount', 'Whether delivery is to a port or a factory', 'How freight charges are invoiced'], answer: 1, explain: '她問免運門檻是以折扣前還是折扣後金額計算。' },
      { q: 'When does the quotation expire?', options: ['May 22', 'June 5', 'June 20', 'July 6'], answer: 1, explain: '5 月 6 日發出且有效期 30 天，故約於 6 月 5 日到期。' }
    ]
  },
  {
    id: 'i7-7', kind: 'double',
    docs: [
      { label: 'Notice', text: `MERIDIAN TOWER — Tenant Notice
Annual Fire System Inspection

The building's fire suppression system will be inspected on Thursday, October 19.

Schedule by floor:
Floors 2–8: 8:00 A.M. – 11:00 A.M.
Floors 9–15: 11:00 A.M. – 2:00 P.M.
Floors 16–22: 2:00 P.M. – 5:00 P.M.

Alarms will sound briefly during testing. These are tests only — do not evacuate.

Inspectors require access to all utility closets. Tenants must ensure these areas are unlocked and clear of stored items during their scheduled window.

Any tenant unable to provide access must notify building management by October 12 to arrange a separate appointment. A rescheduling fee of $180 applies.` },
      { label: 'E-mail', text: `To: management@meridiantower.com
From: g.okonkwo@ashgrovelaw.com
Date: October 10
Subject: Inspection access — Suite 1140

Hello,

We occupy Suite 1140 and understand our window is late morning.

Unfortunately, our utility closet currently houses archived client files that we are legally required to keep secured. We cannot leave it unlocked and unattended.

However, our office manager will be on site all day and can open the closet for the inspector on request and remain present during the inspection. Would that satisfy the access requirement without triggering a separate appointment?

Regards,
Grace Okonkwo
Ashgrove Law` }
    ],
    questions: [
      { q: 'During which window will Suite 1140 be inspected?', options: ['8:00 A.M. – 11:00 A.M.', '11:00 A.M. – 2:00 P.M.', '2:00 P.M. – 5:00 P.M.', 'The notice does not say.'], answer: 1, explain: 'Suite 1140 在 11 樓，屬於 9–15 樓的 11:00–2:00 時段。' },
      { q: 'What are tenants told NOT to do during the inspection?', options: ['Use the elevators', 'Leave the building when alarms sound', 'Enter utility closets', 'Park in the garage'], answer: 1, explain: '公告寫 These are tests only — do not evacuate。' },
      { q: 'What is Ms. Okonkwo\'s concern?', options: ['The inspection date conflicts with a court hearing.', 'She cannot leave the utility closet unlocked.', 'The rescheduling fee is too high.', 'Her suite has no utility closet.'], answer: 1, explain: '儲藏室存放需保密的客戶檔案，依法不能開著無人看管。' },
      { q: 'What does Ms. Okonkwo propose?', options: ['Rescheduling to a later date', 'Moving the files to another floor', 'Having a staff member unlock the closet and stay present', 'Sending the inspector a key in advance'], answer: 2, explain: '她提議由辦公室主管當場開鎖並全程在場。' },
      { q: 'What would Ashgrove Law pay if a separate appointment were required?', options: ['Nothing', '$120', '$180', 'The notice does not specify.'], answer: 2, explain: '公告寫改期費用為 $180。' }
    ]
  },

  /* ─────────── 三篇 ─────────── */
  {
    id: 'i7-8', kind: 'triple',
    docs: [
      { label: 'Web page', text: `NORDBRIDGE CONFERENCE CENTER
Exhibitor Packages — Spring Trade Fair, April 8–10

Bronze — €900
6 m² booth, one table, two chairs, listing in the printed program

Silver — €1,600
12 m² booth, furniture package, program listing, logo on venue signage

Gold — €2,900
20 m² booth, furniture package, program listing, logo on signage, one 30-minute speaking slot

All packages include two exhibitor passes. Additional passes are €75 each.

Booth assignments are made in the order that payment is received, not the order of application. Early payment is strongly recommended for exhibitors with location preferences.` },
      { label: 'E-mail', text: `To: exhibitors@nordbridge.eu
From: t.almeida@vertexsensors.pt
Date: January 18
Subject: Gold package — Vertex Sensors

Hello,

We would like to reserve the Gold package for the Spring Trade Fair.

We will be sending six team members, so we will need four additional passes.

Regarding the speaking slot: our engineering lead would like to present on industrial humidity sensing. Is there a deadline for submitting the session title and abstract?

Also, we exhibited in 2023 and were placed near the rear entrance, which had very little traffic. We would appreciate a location closer to the main hall this time.

Thank you,
Tomás Almeida` },
      { label: 'Reply', text: `To: t.almeida@vertexsensors.pt
From: exhibitors@nordbridge.eu
Date: January 22
Subject: RE: Gold package — Vertex Sensors

Dear Mr. Almeida,

Thank you for your reservation. Your invoice is attached.

Session titles and abstracts are due by March 1. Presentations are limited to 30 minutes including questions.

Regarding placement: we are able to note your preference, but as our terms state, booths are allocated according to payment date. Your invoice is due within 21 days; settling it promptly would improve your position considerably.

We look forward to welcoming Vertex Sensors back.

Nordbridge Exhibitor Services` }
    ],
    questions: [
      { q: 'How much will Vertex Sensors pay in total?', options: ['€2,900', '€3,050', '€3,200', '€3,350'], answer: 2, explain: 'Gold €2,900 + 4 張額外通行證 × €75 = €300，合計 €3,200。' },
      { q: 'Why does Vertex Sensors need additional passes?', options: ['The Gold package includes no passes.', 'It is sending more people than the package covers.', 'It is bringing external clients.', 'Passes were lost in 2023.'], answer: 1, explain: '每個方案含兩張通行證，但他們要去六人，故需再四張。' },
      { q: 'What is the deadline for the abstract?', options: ['January 22', 'February 8', 'March 1', 'April 8'], answer: 2, explain: '回信寫 Session titles and abstracts are due by March 1。' },
      { q: 'What does the reply suggest about Mr. Almeida\'s location request?', options: ['It has been approved.', 'It cannot be recorded.', 'Paying early is the most effective way to improve placement.', 'Gold exhibitors are automatically placed near the main hall.'], answer: 2, explain: '攤位依付款日期分配，回信建議儘早付款以改善位置。' },
      { q: 'What is implied about Vertex Sensors?', options: ['It has exhibited at this fair before.', 'It is based in Germany.', 'It has never used a speaking slot.', 'It chose the Silver package in 2023.'], answer: 0, explain: '他寫 we exhibited in 2023，且回信說 welcoming Vertex Sensors back。' }
    ]
  },
  {
    id: 'i7-24', kind: 'double',
    docs: [
      { label: 'Service agreement extract', text: `APPENDIX C — SERVICE LEVELS

Response times (from ticket creation):
Priority 1 (system unavailable) — 1 hour
Priority 2 (major function impaired) — 4 hours
Priority 3 (minor fault) — 1 business day
Priority 4 (query) — 3 business days

Service credits apply where the response target is missed:
Priority 1 — 5% of monthly fee per breach
Priority 2 — 2% of monthly fee per breach
Priority 3 and 4 — no credit

Credits are capped at 15% of the monthly fee in any single month and must be claimed within 30 days of the breach. Credits are applied against future invoices and are not payable in cash.

Priority is assigned by the supplier and may be reviewed on request.` },
      { label: 'E-mail', text: `To: service@lyndonsystems.com
From: it@calderfoods.co.uk
Date: 14 February
Subject: Service credit claim — January

Hello,

We are claiming service credits for January. Our monthly fee is £6,000.

Three tickets exceeded the response target:
INC-4412 — logged as Priority 2, responded in 9 hours
INC-4455 — logged as Priority 1, responded in 2 hours 20 minutes
INC-4470 — logged as Priority 3, responded in 2 business days

We also wish to query the priority assigned to INC-4412. The warehouse scanning module was completely unavailable for the whole morning, which we would regard as Priority 1 rather than Priority 2.

Please confirm the credit amount.

Regards,
Neil Okafor` }
    ],
    questions: [
      { q: 'Which ticket does NOT generate a credit?', options: ['INC-4412', 'INC-4455', 'INC-4470', 'All three generate credits'], answer: 2, explain: 'INC-4470 為 Priority 3，附錄明訂 Priority 3 與 4 不給服務抵扣。' },
      { q: 'Based on the priorities as logged, what is the total credit?', options: ['£120', '£300', '£420', '£900'], answer: 2, explain: 'P2 為 2%（£120）＋ P1 為 5%（£300）＝ £420。' },
      { q: 'What would change if INC-4412 were reclassified as Priority 1?', options: ['The credit would decrease.', 'The credit for that ticket would rise from 2% to 5%.', 'No credit would apply.', 'The cap would no longer apply.'], answer: 1, explain: 'Priority 1 的抵扣為月費 5%，高於 Priority 2 的 2%。' },
      { q: 'What is the maximum credit available in a single month?', options: ['5% of the monthly fee', '15% of the monthly fee', '£6,000', 'There is no cap.'], answer: 1, explain: '附錄寫單月抵扣上限為月費的 15%。' },
      { q: 'How are credits provided?', options: ['As a cash refund', 'As a reduction on future invoices', 'As additional service hours', 'As an extension of the contract'], answer: 1, explain: '抵扣沖抵未來發票，不以現金支付。' }
    ]
  },
  {
    id: 'i7-25', kind: 'double',
    docs: [
      { label: 'Notice', text: `RIVERGATE TECHNOLOGY PARK
Tenant Fit-Out Guidelines

All fit-out works require written approval from Park Management before commencement.

Submission requirements:
• Drawings at 1:50 scale
• Contractor insurance certificate (minimum £5m public liability)
• Method statement for any works affecting shared services

Approval takes up to 15 working days. Works affecting sprinklers, ventilation, or structural elements require an additional engineer's review, adding approximately 10 working days.

Noisy works are permitted only between 18:00 and 07:00 on weekdays, or at any time on Sundays.

A refundable deposit of £3,000 is required before works begin, returned within 30 days of satisfactory final inspection.` },
      { label: 'E-mail', text: `To: management@rivergatepark.co.uk
From: j.ellery@nordicalabs.com
Date: 4 April
Subject: Fit-out submission — Unit 14

Dear Park Management,

Nordica Labs is preparing a fit-out for Unit 14. We plan to start on 12 May.

The works include partitioning, new power outlets, and relocating two ventilation ducts to accommodate our fume cabinets.

Our contractor holds £10m public liability cover. Drawings are being finalized and we expect to submit them on 20 April.

Most of the work is quiet, but the duct relocation involves drilling for approximately two days. Our lab team works nights, so daytime drilling would actually suit us better than evening work. Is any flexibility possible?

Regards,
Joanna Ellery` }
    ],
    questions: [
      { q: 'Does Nordica Labs\'s insurance meet the requirement?', options: ['No, it is below the minimum.', 'Yes, it exceeds the minimum.', 'It exactly meets the minimum.', 'The notice does not specify a minimum.'], answer: 1, explain: '要求最低 £5m，該承包商持有 £10m，超過標準。' },
      { q: 'How long should approval be expected to take?', options: ['15 working days', 'About 25 working days', '10 working days', '30 working days'], answer: 1, explain: '涉及通風設備需追加工程師審查，15 + 約 10 個工作天。' },
      { q: 'If drawings are submitted on 20 April, what is the likely problem?', options: ['The deposit will increase.', 'Approval may not be granted before the planned 12 May start.', 'The insurance certificate will expire.', 'Noisy works will be prohibited.'], answer: 1, explain: '約 25 個工作天的審查從 4 月 20 日起算，會超過 5 月 12 日的開工日。' },
      { q: 'What does Ms. Ellery request?', options: ['A reduction in the deposit', 'Permission to carry out noisy work during the day', 'An extension of the approval period', 'A waiver of the drawing requirement'], answer: 1, explain: '她因團隊夜間工作，反而希望白天施工，詢問是否可通融。' },
      { q: 'When is the deposit returned?', options: ['On commencement of works', 'Within 30 days of satisfactory final inspection', 'After 15 working days', 'It is non-refundable.'], answer: 1, explain: '公告寫最終檢查合格後 30 天內退還。' }
    ]
  },
  {
    id: 'i7-26', kind: 'double',
    docs: [
      { label: 'Survey report extract', text: `EMPLOYEE ENGAGEMENT SURVEY — SUMMARY
Response rate: 78% (1,240 of 1,590 employees)

Highest-scoring items:
"I understand what is expected of me" — 84% favorable
"My colleagues support me" — 81% favorable

Lowest-scoring items:
"Decisions are explained to me" — 41% favorable
"I see a path to progress here" — 38% favorable

Notable differences:
Employees with under two years' service scored 12 points higher on progression than those with five or more years.
The Manufacturing division scored 22 points below the company average on "Decisions are explained to me."

Free-text comments most frequently mentioned: shift patterns (196 mentions), internal communication (174), and training access (151).` },
      { label: 'E-mail', text: `To: Senior Leadership Team
From: Amara Diallo, HR Director
Date: 9 June
Subject: Survey results — proposed response

Colleagues,

The survey gives us a clear picture and, I would argue, a clear priority.

I want to caution against the instinct to address all three comment themes at once. Shift patterns are the most mentioned but the hardest to change quickly, and a visible failure there would damage credibility.

Communication is different. The Manufacturing gap on "Decisions are explained to me" is 22 points, which is not a company-wide culture problem — it is localized and therefore fixable.

I propose we start there: a structured monthly briefing in Manufacturing, owned by the divisional director rather than HR. We can measure the effect in the pulse survey in November.

On progression, I would note that longer-serving staff score lower, which suggests the issue is not induction but what happens after year two.

Amara` }
    ],
    questions: [
      { q: 'How many employees responded to the survey?', options: ['350', '1,240', '1,590', '78'], answer: 1, explain: '回覆率 78%，即 1,590 人中的 1,240 人。' },
      { q: 'Why does Ms. Diallo recommend against tackling shift patterns first?', options: ['It was rarely mentioned.', 'It is difficult to change quickly and failure would damage credibility.', 'It is not an HR responsibility.', 'It scored highest in the survey.'], answer: 1, explain: '她說輪班最常被提及但最難快速改變，公開失敗會傷害可信度。' },
      { q: 'Why does she consider the communication issue more tractable?', options: ['It affects the whole company equally.', 'It is localized to one division.', 'It requires no manager involvement.', 'It scored above average.'], answer: 1, explain: '製造部門低於平均 22 分，屬局部問題而非全公司文化問題，因此可解決。' },
      { q: 'Who does she propose should own the monthly briefings?', options: ['HR', 'The divisional director', 'The senior leadership team', 'An external consultant'], answer: 1, explain: '她主張由部門總監負責，而非 HR。' },
      { q: 'What does she infer from the progression scores?', options: ['Induction needs improvement.', 'The problem arises after the first two years.', 'New joiners are dissatisfied.', 'Progression is not a real concern.'], answer: 1, explain: '年資較長者分數較低，顯示問題出在到職兩年之後。' }
    ]
  },
  {
    id: 'i7-27', kind: 'triple',
    docs: [
      { label: 'Web page', text: `HARBOURSIDE TRAINING CENTRE
Forklift Certification Courses

Course A — Novice (no prior experience) — 5 days — €780
Course B — Refresher (valid certificate within last 5 years) — 1 day — €190
Course C — Conversion (certified on a different truck type) — 2 days — €340

All courses include the theory test and one practical assessment. A re-test, if required, costs €95.

Group bookings of six or more receive 12% off the course fee. Re-tests are not discounted.

Certificates are valid for three years.

Courses run on fixed dates. Cancellations more than 14 days before the course are refunded in full; within 14 days, 50% is retained.` },
      { label: 'E-mail', text: `To: bookings@harboursidetraining.ie
From: p.moloney@granitelogistics.ie
Date: 3 September
Subject: Group booking — October courses

Hello,

Granite Logistics would like to book training for eight staff on the October dates.

Five have never operated a forklift. Two hold certificates issued in 2021 that are still valid. One is certified on counterbalance trucks but needs to operate reach trucks.

Please confirm the total cost. We would also like to know whether all eight count towards the group discount even though they are on different courses.

Regards,
Pádraig Moloney` },
      { label: 'Reply', text: `To: p.moloney@granitelogistics.ie
From: bookings@harboursidetraining.ie
Date: 5 September
Subject: RE: Group booking — October courses

Dear Mr. Moloney,

Yes — the group discount is based on the total number of participants booked together, regardless of which course each attends.

Please note one point on the two refresher candidates. Certificates issued in 2021 are valid, so Course B applies. However, if their certificates expire before the course date, they would need Course A instead. Please check the exact issue dates.

Places are held for seven days pending payment.

Kind regards,
Harbourside Bookings` }
    ],
    questions: [
      { q: 'Which course do the five inexperienced staff need?', options: ['Course A', 'Course B', 'Course C', 'No course is required.'], answer: 0, explain: '無操作經驗者需 Course A（Novice）。' },
      { q: 'What is the total course fee before the discount?', options: ['€4,240', '€4,620', '€5,100', '€3,900'], answer: 1, explain: '5 × €780 = €3,900；2 × €190 = €380；1 × €340。合計 €4,620。' },
      { q: 'Do all eight participants count toward the group discount?', options: ['No, only those on the same course', 'Yes, regardless of which course they attend', 'Only if six are on Course A', 'Only for courses booked on the same date'], answer: 1, explain: '回信明確表示折扣以合併報名的總人數計算，不分課程。' },
      { q: 'What does the centre warn Mr. Moloney to check?', options: ['The trucks used at his site', 'Whether the 2021 certificates expire before the course date', 'Whether re-tests are included', 'The cancellation deadline'], answer: 1, explain: '若證照在開課前到期，那兩人就必須改上 Course A。' },
      { q: 'What would a re-test cost for one participant?', options: ['Nothing', '€95', '€190', '€95 less the group discount'], answer: 1, explain: '補考 €95，且明訂補考不適用折扣。' }
    ]
  },
  {
    id: 'i7-28', kind: 'triple',
    docs: [
      { label: 'Policy', text: `KELMORE GROUP
Travel and Expense Policy (extract)

Air travel
Economy class for flights under six hours. Premium economy permitted for flights of six hours or more. Business class requires prior written approval from a Director.

Accommodation
Capped at €180 per night in Tier 1 cities (listed in Appendix A) and €120 elsewhere. Where the cap is exceeded, the traveller must attach a written justification.

Booking
All travel must be booked through the corporate travel desk at least 14 days in advance. Bookings made with less notice require a business reason to be recorded.

Reimbursement
Claims must be submitted within 45 days of the trip. Claims submitted later require Finance Director approval and will not be paid in the same month.` },
      { label: 'E-mail', text: `To: travel@kelmoregroup.com
From: s.brandt@kelmoregroup.com
Date: 11 October
Subject: Singapore trip — approvals

Hi,

I need to travel to Singapore for the client workshop on 4 November. The flight from Frankfurt is about twelve hours.

Three things:

1. Given the flight length, I assume premium economy is fine without extra approval?
2. The only hotel with availability near the client site is €215 per night. Singapore is on the Tier 1 list.
3. I'm booking today, which is 24 days ahead, so notice shouldn't be an issue.

The trip was agreed at short notice because the client moved the workshop forward by three weeks.

Thanks,
Sabine Brandt` },
      { label: 'Reply', text: `To: s.brandt@kelmoregroup.com
From: travel@kelmoregroup.com
Date: 11 October
Subject: RE: Singapore trip — approvals

Hi Sabine,

Taking your points in order:

1. Correct — premium economy is permitted on that route without further approval.
2. The rate exceeds the Tier 1 cap, so we can book it, but you'll need to attach a written justification to your claim. "Only available hotel near the client site" is sufficient if you name the alternatives you checked.
3. Notice is fine.

One additional point: please submit your claim promptly. Anything after mid-December falls outside the window and would need Finance Director sign-off.

Travel Desk` }
    ],
    questions: [
      { q: 'What class of travel is Ms. Brandt entitled to?', options: ['Economy only', 'Premium economy', 'Business class', 'Business class with Director approval'], answer: 1, explain: '航程約十二小時，滿六小時即可搭豪華經濟艙，無需額外核准。' },
      { q: 'By how much does the hotel exceed the applicable cap?', options: ['€35', '€95', '€180', 'It does not exceed the cap.'], answer: 0, explain: '新加坡屬 Tier 1，上限 €180，€215 − €180 = €35。' },
      { q: 'What must Ms. Brandt provide because of the hotel rate?', options: ['Director approval in advance', 'A written justification with her claim', 'A quotation from three hotels', 'Prepayment of the difference'], answer: 1, explain: '超過上限時須在請款時附上書面說明。' },
      { q: 'Why is the booking notice acceptable?', options: ['The client changed the date.', 'It is 24 days ahead, more than the 14-day requirement.', 'Travel desk approval was obtained.', 'Singapore is a Tier 1 city.'], answer: 1, explain: '提前 24 天訂位，超過政策要求的 14 天。' },
      { q: 'Why does the Travel Desk mention mid-December?', options: ['The travel policy changes then.', 'It is 45 days after the trip, the claim deadline.', 'Finance closes for the year.', 'The hotel invoice is due then.'], answer: 1, explain: '11 月 4 日出差起算 45 天約在 12 月中，逾期需財務總監核准。' }
    ]
  }
];
