/* 進階 TOEIC 550-700：Part 6 段落填空
   8 篇短文 × 4 格 = 32 題 */

const INTER_PART6 = [
  {
    id: 'i6-1',
    label: 'Memo',
    title: 'Expense reimbursement policy',
    text: `To: All Department Heads
From: Finance Office
Subject: Updated reimbursement procedure

Effective July 1, all travel expenses ___1___ through the new online portal rather than by paper form.

Receipts must be uploaded within 14 days of the trip. ___2___ Claims submitted after that period may be rejected.

The portal ___3___ automatically calculates mileage based on the addresses you enter.

We appreciate your ___4___ during the transition.`,
    blanks: [
      { options: ['must be submitted', 'must submit', 'are submitting', 'submitted'], answer: 0, explain: '費用是「被」提交，用被動 must be + p.p.。' },
      { options: ['This deadline is strictly enforced by the auditors.', 'The cafeteria will extend its hours next month.', 'New laptops have been ordered for the design team.', 'Please remember to lock the storage room.'], answer: 0, explain: '前後都在談 14 天期限與逾期後果，此句承接最連貫。' },
      { options: ['also', 'although', 'however', 'despite'], answer: 0, explain: '此處補充另一項功能，用副詞 also；其餘選項語意為轉折或讓步。' },
      { options: ['patience', 'patient', 'patiently', 'patients'], answer: 0, explain: '所有格 your 之後接名詞 patience。' }
    ]
  },
  {
    id: 'i6-2',
    label: 'E-mail',
    title: 'Contract renewal',
    text: `Dear Ms. Hoffman,

Our service agreement with Vantage Logistics ___1___ on March 31.

Over the past two years, on-time delivery has improved from 88% to 96%. ___2___ For this reason, we would like to extend the contract for another three years.

The revised terms are ___3___ to this e-mail for your review.

Please let us know ___4___ you would like to schedule a call to discuss them.

Regards,
Peter Lindqvist`,
    blanks: [
      { options: ['expires', 'expire', 'is expired', 'expiring'], answer: 0, explain: '主詞是單數 agreement，現在簡單式表既定時間用 expires。' },
      { options: ['Costs have also remained within the agreed budget.', 'The office will be repainted in April.', 'We are recruiting three new drivers.', 'Please return the equipment by Friday.'], answer: 0, explain: '前一句列舉正面績效，此句延續同一論點，導出「因此想續約」。' },
      { options: ['attached', 'attaching', 'attach', 'attachment'], answer: 0, explain: '條款是「被」附加，用過去分詞 attached（be attached to）。' },
      { options: ['whether', 'that', 'what', 'which'], answer: 0, explain: '表示「是否」的名詞子句用 whether。' }
    ]
  },
  {
    id: 'i6-3',
    label: 'Article',
    title: 'Local business expansion',
    text: `RIVERTON — Ashfield Manufacturing announced Tuesday that it ___1___ a second production facility on the east side of the city.

The plant is expected to create 140 jobs by the end of next year. ___2___

Company president Dana Wu said the decision was made ___3___ rising demand from overseas buyers.

Construction will begin in September, ___4___ the company receives final approval from the city council.`,
    blanks: [
      { options: ['will open', 'opens', 'has opened', 'opened'], answer: 0, explain: '宣布未來計畫，用 will + 原形動詞。' },
      { options: ['Most of the positions will be in assembly and quality control.', 'The company was founded in 1962 by two engineers.', 'Riverton has three public parks.', 'The city council meets every Monday.'], answer: 0, explain: '前一句提到將創造 140 個職缺，接著說明職缺類型最連貫。' },
      { options: ['because of', 'because', 'although', 'so that'], answer: 0, explain: '空格後是名詞片語 rising demand，用介系詞片語 because of。' },
      { options: ['provided that', 'in spite of', 'due to', 'because of'], answer: 0, explain: '空格後是完整子句且語意為條件，用 provided that（假如）。' }
    ]
  },
  {
    id: 'i6-4',
    label: 'Notice',
    title: 'System upgrade',
    text: `IT DEPARTMENT NOTICE

The customer database ___1___ upgraded this Saturday from 10:00 P.M. to 4:00 A.M.

During this window, staff will not be able to access customer records. ___2___

We recommend that all users ___3___ any unsaved work before leaving on Friday.

After the upgrade, the search function will run approximately three times ___4___ than it does now.`,
    blanks: [
      { options: ['will be', 'will', 'is being', 'has been'], answer: 0, explain: '資料庫「被」升級且時間在未來，用 will be + p.p.。' },
      { options: ['Phone orders should be recorded on paper and entered on Monday.', 'The parking garage will close for repairs.', 'A new coffee machine has been installed.', 'Annual reviews begin in December.'], answer: 0, explain: '前一句說無法存取系統，接著給出替代作法最合理。' },
      { options: ['save', 'saves', 'saved', 'saving'], answer: 0, explain: 'recommend 之後的 that 子句用原形動詞（should 省略）。' },
      { options: ['faster', 'fast', 'fastest', 'more fast'], answer: 0, explain: '有 than 用比較級；fast 的比較級是 faster。' }
    ]
  },
  {
    id: 'i6-5',
    label: 'Letter',
    title: 'Supplier price adjustment',
    text: `Dear Valued Partner,

We are writing to inform you of a price adjustment ___1___ effect on October 1.

Raw material costs have risen sharply over the past nine months. ___2___ As a result, we must increase prices by an average of 4%.

Orders placed before September 30 ___3___ be honored at current prices.

We value your business and ___4___ to keep future increases to a minimum.

Sincerely,
Maren Sørensen`,
    blanks: [
      { options: ['taking', 'takes', 'took', 'to taking'], answer: 0, explain: '＝a price adjustment that takes effect…，簡化為現在分詞 taking。' },
      { options: ['We have absorbed most of these costs until now.', 'Our new catalog will be printed in November.', 'The factory tour is scheduled for Thursday.', 'Please update your contact details.'], answer: 0, explain: '此句解釋為何拖到現在才漲價，銜接前因與後果。' },
      { options: ['will still', 'still will not', 'have still', 'are still'], answer: 0, explain: '未來仍按舊價處理，用 will still + 原形動詞 be。' },
      { options: ['are committed', 'commit', 'committing', 'commitment'], answer: 0, explain: 'be committed to + V-ing / N；此處與 value 並列，需要動詞片語。' }
    ]
  },
  {
    id: 'i6-6',
    label: 'E-mail',
    title: 'Training workshop invitation',
    text: `Dear Team,

I am pleased to announce a two-day workshop on data analysis ___1___ will be held on November 14 and 15.

The sessions are designed for staff who work with reports ___2___ have no formal statistics background. ___3___

Space is limited to 25 participants, so please register ___4___.

Registration closes on November 1.

Best,
Ines Duarte`,
    blanks: [
      { options: ['that', 'what', 'who', 'where'], answer: 0, explain: '先行詞是事物 workshop 且關代當主詞，用 that（或 which）。' },
      { options: ['but', 'and', 'so', 'or'], answer: 0, explain: '「有做報告但沒有統計背景」為語意轉折，用 but。' },
      { options: ['No prior experience with the software is required.', 'The cafeteria menu changes weekly.', 'Please submit your travel receipts.', 'The building will be closed on Monday.'], answer: 0, explain: '前一句強調不需統計背景，此句延續「無需經驗」的訊息。' },
      { options: ['promptly', 'prompt', 'promptness', 'prompted'], answer: 0, explain: '修飾動詞 register 要用副詞 promptly。' }
    ]
  },
  {
    id: 'i6-7',
    label: 'Notice',
    title: 'Warehouse safety reminder',
    text: `SAFETY REMINDER — Warehouse Staff

All personnel entering the loading area ___1___ wear high-visibility vests and steel-toed boots.

Last month there were two near-miss incidents involving forklifts. ___2___ Both occurred when workers walked outside the marked pedestrian lanes.

Supervisors ___3___ conduct spot checks each morning.

Anyone found without proper equipment will be asked to leave the floor ___4___ they return with it.`,
    blanks: [
      { options: ['are required to', 'are requiring to', 'require to', 'requires'], answer: 0, explain: '人員「被」要求，用 be required to + 原形動詞。' },
      { options: ['Neither resulted in injury, but both were preventable.', 'The break room now has a microwave.', 'Sales rose by 9% last quarter.', 'New uniforms will be ordered in June.'], answer: 0, explain: '此句補充事故結果，並自然帶出下一句的原因說明。' },
      { options: ['will', 'are', 'have', 'do'], answer: 0, explain: '表示今後將執行的作法，用 will + 原形動詞 conduct。' },
      { options: ['until', 'by', 'since', 'while'], answer: 0, explain: '「直到他們拿著裝備回來為止」用 until。' }
    ]
  },
  {
    id: 'i6-8',
    label: 'Web page',
    title: 'Return policy update',
    text: `RETURNS AND EXCHANGES

We want you to be completely satisfied ___1___ your purchase.

Items may be returned within 45 days of delivery, ___2___ they are unused and in the original packaging.

___3___ Refunds are issued to the original payment method within 7 business days.

Please note that customized products ___4___ from this policy.`,
    blanks: [
      { options: ['with', 'to', 'for', 'about'], answer: 0, explain: 'be satisfied with＝對…滿意，介系詞固定用 with。' },
      { options: ['provided that', 'in spite of', 'because of', 'due to'], answer: 0, explain: '空格後是完整子句且表條件，用 provided that。' },
      { options: ['Shipping costs for returns are covered by the customer.', 'Our stores open at 9 A.M. daily.', 'We are hiring seasonal staff this month.', 'Gift cards can be purchased online.'], answer: 0, explain: '前後都在談退貨與退款細節，此句補充退貨運費歸屬最連貫。' },
      { options: ['are excluded', 'exclude', 'excluding', 'are excluding'], answer: 0, explain: '客製化商品「被」排除，用被動 are excluded from。' }
    ]
  },
  {
    id: 'i6-9', label: 'E-mail', title: 'Vendor performance review',
    text: `Dear Mr. Castellano,

We have completed our annual review of Ridgeway Logistics ___1___ a supplier.

Your on-time delivery rate of 94% exceeded the 90% target set out in our agreement. ___2___

However, invoice accuracy fell to 87%, ___3___ is below the 95% threshold.

We would like to schedule a call in early March ___4___ a corrective action plan.

Regards,
Supply Chain Management`,
    blanks: [
      { options: ['as', 'for', 'like', 'to'], answer: 0, explain: 'review someone as a supplier＝以供應商身分評估。' },
      { options: ['We appreciate the improvement over last year.', 'Our warehouse will close for stocktaking.', 'A new logo was introduced in January.', 'Please update your bank details.'], answer: 0, explain: '前一句是正面績效，此句延續肯定語氣，再用 However 轉折。' },
      { options: ['which', 'that', 'what', 'it'], answer: 0, explain: '逗號後的非限定關係子句用 which 指代前面整件事。' },
      { options: ['to discuss', 'discussing', 'discuss', 'discussed'], answer: 0, explain: '表示目的用不定詞 to discuss。' }
    ]
  },
  {
    id: 'i6-10', label: 'Notice', title: 'Quality certification audit',
    text: `NOTICE — Production Staff

Our ISO certification audit ___1___ place from 6 to 8 June.

Auditors will observe normal operations, so please continue working ___2___.

___3___ Any document requested must be produced within fifteen minutes.

Supervisors should ensure that all calibration records ___4___ up to date before 5 June.`,
    blanks: [
      { options: ['will take', 'takes to', 'is taken', 'has taken'], answer: 0, explain: 'take place＝舉行；未來事件用 will + 原形。' },
      { options: ['as usual', 'as usually', 'like usual', 'as used'], answer: 0, explain: 'as usual＝照常，是固定副詞片語。' },
      { options: ['Records should be kept within reach of each workstation.', 'The cafeteria will introduce a new menu.', 'Overtime pay increases on 1 July.', 'The company was founded in 1988.'], answer: 0, explain: '後一句說文件須十五分鐘內提出，前面先講文件放在手邊最連貫。' },
      { options: ['are', 'is', 'be', 'being'], answer: 0, explain: '主詞 records 是複數，且 ensure that 子句用直述語氣，用 are。' }
    ]
  },
  {
    id: 'i6-11', label: 'Article', title: 'Retail chain reports quarterly results',
    text: `Bellamy Retail reported yesterday that quarterly revenue ___1___ 8% compared with the same period last year.

Growth was driven mainly by online sales, ___2___ now account for 31% of the total.

___3___ Store traffic, by contrast, declined slightly.

Chief Executive Nadia Rahimi said the company ___4___ to open six smaller-format stores next year.`,
    blanks: [
      { options: ['rose', 'raised', 'rising', 'is risen'], answer: 0, explain: 'rise 是不及物動詞，過去式 rose；raise 需接受詞。' },
      { options: ['which', 'who', 'what', 'whose'], answer: 0, explain: '先行詞是 online sales，非限定關係子句用 which。' },
      { options: ['The company attributes the shift to its improved mobile app.', 'The head office relocated to Leeds in 2019.', 'Employees receive a uniform allowance.', 'The board meets twice a year.'], answer: 0, explain: '前一句講線上銷售占比，此句解釋原因，再用 by contrast 轉折。' },
      { options: ['plans', 'plan', 'planning', 'is planned'], answer: 0, explain: '主詞 the company 是單數，用 plans to V。' }
    ]
  },
  {
    id: 'i6-12', label: 'Memo', title: 'Flexible working arrangements',
    text: `To: All Staff
From: Human Resources
Subject: Hybrid working from September

From 1 September, staff may work remotely up to two days per week, ___1___ approval from their line manager.

Requests should be submitted through the HR portal ___2___ 15 August.

___3___ Teams that require on-site coverage may set fixed office days.

We ask managers to apply the policy ___4___ across departments.`,
    blanks: [
      { options: ['subject to', 'according', 'regarding', 'due to'], answer: 0, explain: 'subject to approval＝須經核准，是常見正式片語。' },
      { options: ['by', 'until', 'since', 'during'], answer: 0, explain: '期限前完成申請用 by。' },
      { options: ['Approval will depend on operational needs rather than seniority.', 'The office will be repainted in October.', 'Free parking ends this month.', 'A new coffee supplier has been selected.'], answer: 0, explain: '此句說明核准依據，與後一句「需現場支援的團隊可設定進辦日」相承。' },
      { options: ['consistently', 'consistent', 'consistency', 'consist'], answer: 0, explain: '修飾動詞 apply 要用副詞 consistently。' }
    ]
  },
  {
    id: 'i6-13', label: 'E-mail', title: 'Trade show follow-up',
    text: `Dear Ms. Andersson,

Thank you for visiting our stand at the Nordic Packaging Expo last week.

You asked about our recyclable film, ___1___ we launched in March.

I ___2___ the technical data sheet to this e-mail.

___3___ We would be glad to arrange one at your facility.

Please let me know ___4___ a sample run would be of interest.

Best regards,
Henrik Vaso`,
    blanks: [
      { options: ['which', 'who', 'what', 'where'], answer: 0, explain: '先行詞是 film 且關代當受詞，用 which。' },
      { options: ['have attached', 'have attaching', 'am attached', 'attach to'], answer: 0, explain: '現在完成式 have + p.p.，動作剛完成。' },
      { options: ['Several customers have requested on-site trials.', 'Our office will close for the summer break.', 'The expo will be held in Oslo next year.', 'Invoices are issued on the last working day.'], answer: 0, explain: '後一句提議在對方廠內安排，前面必須先提到試作需求。' },
      { options: ['whether', 'that', 'what', 'which'], answer: 0, explain: '表示「是否」的名詞子句用 whether。' }
    ]
  },
  {
    id: 'i6-14', label: 'Notice', title: 'Data protection training',
    text: `MANDATORY TRAINING — Data Protection

All employees who handle customer records ___1___ complete the data protection module by 30 April.

The module takes approximately 45 minutes and ___2___ be paused and resumed.

___3___ Completion is recorded automatically on your training profile.

Employees who have not completed the module by the deadline ___4___ have their database access suspended.`,
    blanks: [
      { options: ['must', 'may', 'might', 'would'], answer: 0, explain: '強制訓練用 must + 原形動詞。' },
      { options: ['can', 'must', 'should', 'ought'], answer: 0, explain: '說明可行的操作用 can be + p.p.。' },
      { options: ['There is no need to print or submit a certificate.', 'The training room is on the second floor.', 'Annual leave requests are due in March.', 'A new printer has been installed.'], answer: 0, explain: '後一句說完成紀錄會自動登錄，前面先說不必列印證書最連貫。' },
      { options: ['will', 'are', 'have', 'do'], answer: 0, explain: '逾期後的後果屬未來，用 will + 原形動詞 have。' }
    ]
  },
  {
    id: 'i6-15', label: 'Letter', title: 'Insurance policy renewal',
    text: `Dear Ms. Okonjo,

Your commercial property policy ___1___ for renewal on 1 October.

Following a review of your claims history, we are pleased to offer renewal ___2___ the same premium as last year.

___3___ Please review the enclosed schedule carefully, as coverage limits have been adjusted for inflation.

To renew, sign and return the acceptance form ___4___ 20 September.

Yours sincerely,
Marchmont Insurance`,
    blanks: [
      { options: ['is due', 'dues', 'due to', 'is dued'], answer: 0, explain: 'be due for renewal＝到了續約時間。' },
      { options: ['at', 'in', 'on', 'by'], answer: 0, explain: 'at the same premium＝以相同保費，價格前用 at。' },
      { options: ['No increase applies despite rising repair costs across the sector.', 'Our office has moved to Canary Wharf.', 'Claims should be reported within 48 hours.', 'We now offer travel insurance as well.'], answer: 0, explain: '此句延續前一句「保費不變」的好消息，再轉入承保額調整的提醒。' },
      { options: ['no later than', 'no sooner than', 'as late as', 'not until'], answer: 0, explain: 'no later than＝不遲於，用於截止日。' }
    ]
  },
  {
    id: 'i6-16', label: 'Web page', title: 'Loyalty program terms',
    text: `EARN AND REDEEM

Members earn one point for every euro spent, ___1___ purchases made during promotional periods, which earn double points.

Points are credited within 48 hours and ___2___ 24 months after the date they are earned.

___3___ Points cannot be exchanged for cash.

Members ___4___ close their account may redeem remaining points within 30 days of closure.`,
    blanks: [
      { options: ['except for', 'in spite of', 'because of', 'instead of'], answer: 0, explain: 'except for＝除…之外，帶出例外情況（促銷期間點數加倍）。' },
      { options: ['expire', 'expires', 'expiring', 'are expired'], answer: 0, explain: '主詞 Points 是複數且 expire 為不及物動詞，用原形複數 expire。' },
      { options: ['Redemption is available in-store and online.', 'Our stores open at 10 A.M.', 'Gift wrapping costs €3.', 'Deliveries take five working days.'], answer: 0, explain: '前後都在談點數兌換規則，此句補充兌換通路最連貫。' },
      { options: ['who', 'which', 'whose', 'whom'], answer: 0, explain: '先行詞 Members 指人且關代當主詞，用 who。' }
    ]
  },
  {
    id: 'i6-17', label: 'Memo', title: 'Budget submission timetable',
    text: `To: Department Heads
From: Finance Planning
Subject: FY26 budget cycle

Draft budgets ___1___ to Finance by 12 September.

Each submission should include headcount assumptions and a variance explanation for any line ___2___ more than 10% from the prior year.

___3___ Late submissions cannot be included in the first consolidation run.

We will circulate consolidated figures on 3 October, ___4___ department heads will have one week to respond.`,
    blanks: [
      { options: ['must be submitted', 'must submit', 'are submitting', 'submitted'], answer: 0, explain: '預算「被」提交，用被動 must be + p.p.。' },
      { options: ['differing', 'differs', 'differ', 'different'], answer: 0, explain: '＝any line that differs…，簡化為現在分詞 differing。' },
      { options: ['The deadline cannot be extended this year.', 'The finance team has hired two analysts.', 'Office supplies are ordered monthly.', 'Travel policy is under review.'], answer: 0, explain: '後一句說逾期無法納入第一輪合併，前面先強調不得延期最連貫。' },
      { options: ['after which', 'after that', 'which after', 'and which'], answer: 0, explain: 'after which 引導非限定關係子句，表示「在那之後」。' }
    ]
  },
  {
    id: 'i6-18', label: 'E-mail', title: 'Client onboarding schedule',
    text: `Dear Mr. Petrov,

Welcome to Northbrook Advisory. I ___1___ be your account manager.

Our onboarding process usually takes three weeks, ___2___ we can accelerate it if your reporting deadline requires.

___3___ Once these are received, we will schedule the kickoff meeting.

Please let me know if any of the requested documents ___4___ difficult to obtain.

Kind regards,
Yuki Sasaki`,
    blanks: [
      { options: ['will', 'am', 'have', 'do'], answer: 0, explain: '表示今後將擔任，用 will + 原形動詞 be。' },
      { options: ['although', 'because', 'so', 'unless'], answer: 0, explain: '前後語意轉折（通常三週，但可加快），用 although。' },
      { options: ['I have attached a checklist of the documents we require.', 'Our office is located near the station.', 'The firm was established in 2004.', 'Invoices are payable within 14 days.'], answer: 0, explain: '後一句說「收到這些之後」安排會議，前面必須先提到所需文件清單。' },
      { options: ['are', 'is', 'be', 'being'], answer: 0, explain: '主詞 documents 是複數，用 are。' }
    ]
  },
  {
    id: 'i6-19', label: 'Notice', title: 'Equipment loan policy',
    text: `IT EQUIPMENT LOANS

Laptops and projectors may be borrowed for up to ten working days.

Items ___1___ online at least two working days in advance.

___2___ Walk-in requests are accepted only if stock is available.

Borrowers are responsible ___3___ any damage that occurs while the item is in their care.

Equipment not returned by the due date ___4___ a daily charge of €15.`,
    blanks: [
      { options: ['must be reserved', 'must reserve', 'are reserving', 'reserve'], answer: 0, explain: '設備「被」預約，用被動 must be + p.p.。' },
      { options: ['Reservations may be made through the service desk portal.', 'The IT office moved to the fifth floor.', 'Printer toner is ordered quarterly.', 'Staff parking permits expire in June.'], answer: 0, explain: '前一句講需事先預約，此句補充預約管道，再接「臨櫃借用」的例外。' },
      { options: ['for', 'of', 'to', 'with'], answer: 0, explain: 'be responsible for＝為…負責。' },
      { options: ['will incur', 'will be incurred', 'incurs to', 'is incurring'], answer: 0, explain: 'incur a charge＝產生費用；主詞 Equipment 為主動產生費用，用 will incur。' }
    ]
  },
  {
    id: 'i6-20', label: 'Article', title: 'Port expansion approved',
    text: `The regional authority has approved a €340 million expansion of Halden Port, ___1___ will double container capacity by 2029.

Construction is scheduled to begin next spring, ___2___ final environmental clearance.

___3___ Local haulage firms have welcomed the decision, citing frequent delays at the current terminal.

Opponents argue that road infrastructure ___4___ upgraded at the same time, or congestion will simply move inland.`,
    blanks: [
      { options: ['which', 'that', 'what', 'it'], answer: 0, explain: '逗號後的非限定關係子句用 which。' },
      { options: ['pending', 'during', 'despite', 'among'], answer: 0, explain: 'pending＝在…完成之前、有待…，是正式介系詞。' },
      { options: ['The project is expected to create around 400 permanent jobs.', 'The port was first built in 1897.', 'Ferry services run twice daily.', 'The authority meets every quarter.'], answer: 0, explain: '此句補充擴建效益，自然引出下一句業者表態支持。' },
      { options: ['must be', 'must', 'must have', 'must being'], answer: 0, explain: '道路建設是「被」升級，用 must be + p.p.。' }
    ]
  },
  {
    id: 'i6-21', label: 'E-mail', title: 'Conference registration reminder',
    text: `Dear Registered Delegate,

The Nordic Materials Conference opens in three weeks. ___1___

Early-bird rates ended last month, but delegates ___2___ registered before 1 May retain the discounted rate.

Please note that the workshop sessions ___3___ separately and have limited capacity.

If you require an invitation letter for a visa application, contact us ___4___ possible.

Conference Secretariat`,
    blanks: [
      { options: ['We are writing with some final details.', 'The venue was renovated last year.', 'Our office closes at 5 P.M.', 'Membership renewals are due in December.'], answer: 0, explain: '開頭需要一句承接語，帶出後面的各項細節說明。' },
      { options: ['who', 'which', 'whose', 'whom'], answer: 0, explain: '先行詞 delegates 指人且關代當主詞，用 who。' },
      { options: ['must be booked', 'must book', 'are booking', 'book'], answer: 0, explain: '工作坊「被」預訂，用被動 must be + p.p.。' },
      { options: ['as soon as', 'as long as', 'so far as', 'as far as'], answer: 0, explain: 'as soon as possible＝盡快，是固定片語。' }
    ]
  },
  {
    id: 'i6-22', label: 'Notice', title: 'Cleaning contract transition',
    text: `TENANT NOTICE — Change of Cleaning Contractor

From 1 August, cleaning services will be provided by Crestwood Facilities, ___1___ replaces Aldwyn Services.

Cleaning hours will shift from evenings to early mornings, between 5:30 and 8:00 A.M. ___2___

Tenants ___3___ prefer evening cleaning may request it, although an additional charge applies.

Please report any issues to building management rather than ___4___ the cleaning staff directly.`,
    blanks: [
      { options: ['which', 'who', 'what', 'where'], answer: 0, explain: '先行詞是公司（視為事物）且關代當主詞，用 which。' },
      { options: ['The change was requested by tenants who work late.', 'The lobby will be repainted in September.', 'Parking rates increase annually.', 'Fire drills are held twice a year.'], answer: 0, explain: '此句解釋為何把清潔時段改到清晨，緊扣前一句。' },
      { options: ['who', 'which', 'whose', 'whom'], answer: 0, explain: '先行詞 Tenants 指人且關代當主詞，用 who。' },
      { options: ['to', 'with', 'for', 'at'], answer: 0, explain: 'report to A rather than to B，介系詞需與前面的 to 平行。' }
    ]
  },
  {
    id: 'i6-23', label: 'Memo', title: 'Customer complaint handling',
    text: `To: Customer Service Team
From: Service Quality
Subject: Revised escalation guidelines

Effective immediately, complaints that cannot be resolved on first contact ___1___ to a team leader within four working hours.

___2___ Previously the window was 24 hours, which several clients found excessive.

Agents should record the reason for escalation, ___3___ helps us identify recurring product issues.

Cases involving safety must be escalated ___4___, regardless of the time of day.`,
    blanks: [
      { options: ['must be escalated', 'must escalate', 'are escalating', 'escalate'], answer: 0, explain: '案件「被」向上呈報，用被動 must be + p.p.。' },
      { options: ['This is a significant reduction in response time.', 'The office will be closed on Monday.', 'New headsets have been ordered.', 'Our opening hours remain unchanged.'], answer: 0, explain: '後一句比較舊制 24 小時，前面先點出「大幅縮短」最連貫。' },
      { options: ['which', 'that', 'what', 'it'], answer: 0, explain: '逗號後的 which 指代前面整件事。' },
      { options: ['immediately', 'immediate', 'immediacy', 'more immediate'], answer: 0, explain: '修飾動詞片語 be escalated 要用副詞 immediately。' }
    ]
  },
  {
    id: 'i6-24', label: 'Web page', title: 'Freight quotation terms',
    text: `HOW OUR QUOTATIONS WORK

All quotations are based on the dimensions and weight ___1___ at the time of booking.

If actual measurements differ, the invoice ___2___ to reflect the correct figures.

___3___ Surcharges for fuel and currency are shown separately on every quotation.

Quotations remain valid for 14 days ___4___ otherwise stated.`,
    blanks: [
      { options: ['declared', 'declaring', 'declare', 'declaration'], answer: 0, explain: '＝the dimensions that are declared…，簡化為過去分詞 declared。' },
      { options: ['will be adjusted', 'will adjust', 'is adjusting', 'adjusts'], answer: 0, explain: '發票「被」調整，用未來被動 will be + p.p.。' },
      { options: ['We do not add hidden fees after booking.', 'Our head office is in Rotterdam.', 'Tracking numbers are issued on request.', 'We operate 40 vehicles.'], answer: 0, explain: '此句與後一句「附加費另列」共同說明收費透明度。' },
      { options: ['unless', 'if', 'because', 'while'], answer: 0, explain: 'unless otherwise stated＝除另有說明外，是固定用法。' }
    ]
  },
  {
    id: 'i6-25', label: 'Letter', title: 'Notification of audit findings',
    text: `Dear Ms. Lindqvist,

Following our visit on 14 March, we are writing to summarize our findings.

Overall, your quality system ___1___ the requirements of the standard.

Two minor non-conformities were identified, ___2___ of which relate to record keeping.

___3___ A corrective action plan should be submitted within 30 days.

We will verify the actions ___4___ our next scheduled visit in September.

Yours sincerely,
Certification Services`,
    blanks: [
      { options: ['meets', 'meet', 'meeting', 'is met'], answer: 0, explain: '主詞 your quality system 是單數，用 meets。' },
      { options: ['both', 'either', 'neither', 'each'], answer: 0, explain: '兩項不符合事項皆與紀錄有關，用 both of which。' },
      { options: ['Neither finding affects your certification status.', 'Our auditors travel by train.', 'Certification fees increase in April.', 'The standard was revised in 2015.'], answer: 0, explain: '此句安撫對方，再自然帶出後續改善計畫的要求。' },
      { options: ['during', 'while', 'since', 'until'], answer: 0, explain: 'during + 名詞片語（下次訪查期間）。' }
    ]
  }
];
