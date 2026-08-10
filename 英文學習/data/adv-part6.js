/* 高級 TOEIC 750-900：Part 6 段落填空
   8 篇短文 × 4 格 = 32 題 */

const ADV_PART6 = [
  {
    id: 'a6-1',
    label: 'Memo',
    title: 'Procurement policy revision',
    text: `To: All Budget Holders
From: Office of the CFO
Subject: Revised procurement thresholds, effective Q3

Beginning July 1, any single purchase exceeding $15,000 ___1___ competitive bids from at least three vendors.

The previous threshold of $50,000 allowed a substantial share of spending to bypass review. ___2___

Sole-source purchases remain permissible where a supplier holds proprietary rights, ___3___ such cases must be documented in writing and approved by the CFO's office.

We recognize that the added step lengthens the cycle. ___4___, the controls are necessary given last year's audit findings.`,
    blanks: [
      { options: ['will require', 'will be required', 'requires to', 'is requiring'], answer: 0, explain: '主詞 purchase 主動「要求」有競標，用 will require。' },
      { options: ['Roughly 40% of departmental spending fell outside any formal comparison.', 'The cafeteria will introduce a new supplier in August.', 'Employees may now expense parking on weekends.', 'The finance team has moved to the fourth floor.'], answer: 0, explain: '此句以具體數據支撐前一句「大量支出未經審查」的說法。' },
      { options: ['but', 'so', 'because', 'unless'], answer: 0, explain: '前半說仍可單一來源採購，後半加上限制條件，屬轉折，用 but。' },
      { options: ['Nevertheless', 'Therefore', 'Likewise', 'Accordingly'], answer: 0, explain: '前句承認流程變長，後句仍主張有必要，語意轉折用 Nevertheless。' }
    ]
  },
  {
    id: 'a6-2',
    label: 'Letter',
    title: 'Notice of contract non-renewal',
    text: `Dear Mr. Halvorsen,

Pursuant to Section 9.2 of our agreement, this letter serves as formal notice that Arden Systems ___1___ the service contract beyond its expiration on 31 December.

This decision reflects a shift in our internal infrastructure strategy and ___2___ no dissatisfaction with the quality of your team's work.

___3___ We would welcome the opportunity to work together on future projects.

Please confirm receipt of this notice ___4___ ten business days, as required under Section 9.4.

Yours sincerely,
Beatrix Nyland`,
    blanks: [
      { options: ['will not renew', 'has not renewed', 'is not renewed', 'will not be renewed'], answer: 0, explain: '主詞 Arden Systems 是「不續約」的主動方，用 will not renew。' },
      { options: ['implies', 'imply', 'implying', 'is implied'], answer: 0, explain: '與前面的 reflects 並列，主詞單數用 implies。' },
      { options: ['Your engineers consistently met the response times set out in the agreement.', 'Our office will be closed for the winter holidays.', 'Invoices should be submitted through the online portal.', 'We are recruiting for two junior positions.'], answer: 0, explain: '前一句強調並非不滿意，此句具體肯定對方表現，語意連貫。' },
      { options: ['within', 'during', 'among', 'throughout'], answer: 0, explain: 'within + 一段時間＝在…之內完成。' }
    ]
  },
  {
    id: 'a6-3',
    label: 'Article',
    title: 'Regulatory change in the logistics sector',
    text: `New emissions rules taking effect in January will require freight operators ___1___ low-emission vehicles for all urban deliveries within designated zones.

Industry groups have warned that smaller carriers, ___2___ margins are already thin, may struggle to finance the transition.

___3___ Analysts note, however, that the subsidy covers only about a third of the typical purchase premium.

Larger operators ___4___ began converting their fleets two years ago are expected to absorb the change with little disruption.`,
    blanks: [
      { options: ['to use', 'using', 'use', 'used'], answer: 0, explain: 'require + 受詞 + to V。' },
      { options: ['whose', 'which', 'who', 'that'], answer: 0, explain: '空格後接名詞 margins，表所有關係，用 whose。' },
      { options: ['A government grant program will offset part of the cost.', 'Fuel prices fell sharply last quarter.', 'The rules were first proposed in 2019.', 'Urban populations continue to grow.'], answer: 0, explain: '後一句提到「補助只涵蓋約三分之一」，前面必須先出現補助方案。' },
      { options: ['that', 'what', 'whose', 'where'], answer: 0, explain: '先行詞是 operators 且關代在子句中當主詞，用 that（或 who）。' }
    ]
  },
  {
    id: 'a6-4',
    label: 'E-mail',
    title: 'Audit findings and remediation',
    text: `To: Regional Controllers
From: Internal Audit
Subject: FY24 findings — remediation timeline

The FY24 audit identified three material weaknesses, two of which ___1___ to inadequate segregation of duties in accounts payable.

In four locations, the same individual was able to create a vendor record and approve payment to it. ___2___

Each region is required to submit a remediation plan by 15 March. Plans ___3___ specify a named owner and a completion date for every control gap.

Had these controls been in place last year, the reconciliation errors reported in Q2 ___4___ detected far earlier.`,
    blanks: [
      { options: ['relate', 'relates', 'relating', 'related'], answer: 0, explain: '主詞是 two（複數），用複數動詞 relate。' },
      { options: ['No losses have been identified, but the exposure is significant.', 'The audit team will relocate to Singapore.', 'Vendor payment terms remain unchanged.', 'Training materials are available on request.'], answer: 0, explain: '此句評估該弱點的實際影響，承接前一句的具體描述。' },
      { options: ['must', 'may', 'might', 'could'], answer: 0, explain: '稽核要求屬強制規定，用 must + 原形動詞。' },
      { options: ['would have been', 'would be', 'will have been', 'had been'], answer: 0, explain: '與過去事實相反的假設，主句用 would have + p.p.。' }
    ]
  },
  {
    id: 'a6-5',
    label: 'Notice',
    title: 'Shareholder meeting procedures',
    text: `NOTICE OF ANNUAL GENERAL MEETING

The Annual General Meeting of Caldwell Industries plc ___1___ on 14 May at 10:00 at the Registered Office.

Shareholders of record as of 30 April are entitled to vote. ___2___

Any shareholder unable to attend may appoint a proxy, ___3___ need not be a shareholder of the company.

Proxy forms must be lodged with the Registrar not less than 48 hours before the meeting; forms received thereafter ___4___.

By order of the Board`,
    blanks: [
      { options: ['will be held', 'will hold', 'is holding', 'holds'], answer: 0, explain: '會議「被」舉行，用未來被動 will be held。' },
      { options: ['Shares acquired after that date do not carry voting rights at this meeting.', 'The company was incorporated in 1974.', 'Refreshments will be served in the lobby.', 'The Registered Office has ample parking.'], answer: 0, explain: '此句延伸說明基準日的效力，與前句直接相關。' },
      { options: ['who', 'which', 'whom', 'whose'], answer: 0, explain: '先行詞 a proxy 指人且在子句中當主詞，用 who。' },
      { options: ['will not be accepted', 'will not accept', 'are not accepting', 'have not accepted'], answer: 0, explain: '表格是「被」受理，用未來被動的否定。' }
    ]
  },
  {
    id: 'a6-6',
    label: 'E-mail',
    title: 'Escalation of a supplier dispute',
    text: `To: Legal Department
From: Category Management
Subject: Dispute — Meridian Components, PO 55-1180

We are escalating a matter that our team ___1___ unable to resolve through the standard commercial channel.

Meridian delivered 4,000 units, of ___2___ approximately 900 failed incoming inspection. Their position is that our tolerance specification was ambiguous.

___3___ We believe the specification was explicit and that Section 4 of the master agreement places the obligation squarely on the supplier.

Please advise whether we should invoke the arbitration clause or ___4___ a further round of negotiation first.`,
    blanks: [
      { options: ['has been', 'have been', 'is being', 'was been'], answer: 0, explain: '主詞 our team 視為單數，用 has been。' },
      { options: ['which', 'them', 'that', 'what'], answer: 0, explain: '「數量詞 + of + which」的正式關係子句結構。' },
      { options: ['We do not accept that characterization.', 'Their invoice has already been paid in full.', 'The units were shipped by air freight.', 'Meridian has supplied us since 2011.'], answer: 0, explain: '前句陳述對方立場，後句提出我方依據，此句正好承上啟下表明否定態度。' },
      { options: ['pursue', 'pursuing', 'to pursue', 'pursued'], answer: 0, explain: '與前面 invoke 並列，共用 should，用原形動詞 pursue。' }
    ]
  },
  {
    id: 'a6-7',
    label: 'Report excerpt',
    title: 'Market entry assessment',
    text: `Our assessment concludes that entry into the Vietnamese market is commercially viable, ___1___ certain conditions are met.

Distribution remains the principal constraint. ___2___ Establishing a wholly owned network would require capital we are unlikely to recover within the five-year horizon.

We therefore recommend that the company ___3___ a joint venture with an established local distributor.

___4___ this approach reduces margin, it materially lowers execution risk and shortens time to market.`,
    blanks: [
      { options: ['provided that', 'in spite of', 'because of', 'regardless of'], answer: 0, explain: '空格後是完整子句且表條件，用 provided that。' },
      { options: ['No national distributor currently covers both the north and the south.', 'The currency has been stable for three years.', 'Our brand is well known in the region.', 'Labor costs are comparable to those in Thailand.'], answer: 0, explain: '此句具體說明配銷為何是主要限制，與前後文緊密相連。' },
      { options: ['pursue', 'pursues', 'pursuing', 'will pursue'], answer: 0, explain: 'recommend 後的 that 子句用原形動詞（should 省略）。' },
      { options: ['While', 'Despite', 'Owing to', 'Because of'], answer: 0, explain: '空格後是完整子句且語意為讓步，用連接詞 While。' }
    ]
  },
  {
    id: 'a6-8',
    label: 'Press release',
    title: 'Leadership transition',
    text: `Halverson Group announced today that Chief Operating Officer Yuki Tanabe ___1___ the role of Chief Executive Officer on 1 October.

Ms. Tanabe succeeds Robert Alden, who ___2___ the company for eleven years and will remain on the Board as a non-executive director.

___3___ Under her leadership, operating margin rose from 7% to 12% over four years.

The Board conducted a search of both internal and external candidates ___4___ reaching its decision.`,
    blanks: [
      { options: ['will assume', 'will be assumed', 'assumes to', 'is assuming to'], answer: 0, explain: 'assume a role＝接任某職務；未來事件用 will + 原形動詞。' },
      { options: ['has led', 'leads', 'is leading', 'had led'], answer: 0, explain: '從過去持續到現在的任期，用現在完成式 has led。' },
      { options: ['Ms. Tanabe joined Halverson in 2016 and has served as COO since 2020.', 'The company will relocate its headquarters next spring.', 'Quarterly results will be published in November.', 'The Board meets four times per year.'], answer: 0, explain: '後一句以 Under her leadership 承接，前面必須先交代她的資歷。' },
      { options: ['before', 'despite', 'during', 'until'], answer: 0, explain: 'before + V-ing＝在做…之前，符合「做出決定前先進行遴選」的時序。' }
    ]
  },
  {
    id: 'a6-9', label: 'Memo', title: 'Data retention schedule',
    text: `To: All Business Units
From: Information Governance
Subject: Revised retention periods, effective 1 April

Customer transaction records ___1___ for seven years, reduced from the current ten.

The previous period exceeded both statutory and regulatory minimums. ___2___

Business units holding records under a separate legal hold ___3___ continue to preserve those records irrespective of this schedule.

Deletion will be executed centrally. ___4___ any unit wish to retain records beyond the standard period, a documented business case must be lodged with this office.`,
    blanks: [
      { options: ['will be retained', 'will retain', 'are retaining', 'retain'], answer: 0, explain: '紀錄是「被」保存，用未來被動 will be + p.p.。' },
      { options: ['Retaining data unnecessarily increases both storage cost and breach exposure.', 'The office will be closed for refurbishment in May.', 'A new payroll provider was appointed last year.', 'Staff may request a copy of the staff handbook.'], answer: 0, explain: '此句解釋為何縮短保存期，緊扣前一句「原期限超過法定最低要求」。' },
      { options: ['must', 'may', 'might', 'could'], answer: 0, explain: '法律凍結下的保存義務屬強制，用 must。' },
      { options: ['Should', 'If', 'Unless', 'Whether'], answer: 0, explain: 'Should + 主詞 + 原形＝萬一…，是 if 省略後的正式倒裝。' }
    ]
  },
  {
    id: 'a6-10', label: 'Letter', title: 'Response to a tender clarification',
    text: `Dear Ms. Adeyemi,

We refer to your letter of 8 May seeking clarification of our pricing schedule.

The rates quoted are fixed for the first twenty-four months, ___1___ which they will be indexed to the published construction cost index.

___2___ We confirm that no other escalation mechanism applies.

Your letter also queried mobilization costs. These ___3___ in the lump sum and are not charged separately.

Should any ambiguity remain, we ___4___ be glad to address it before the tender closes.

Yours faithfully,
Cormac Duffy`,
    blanks: [
      { options: ['after', 'before', 'until', 'since'], answer: 0, explain: 'after which＝在那之後，指二十四個月期滿後開始連動指數。' },
      { options: ['Indexation would be applied annually and capped at 4%.', 'Our head office relocated to Cork in 2021.', 'Site visits may be arranged on request.', 'We employ 320 staff across three regions.'], answer: 0, explain: '前一句提到連動機制，此句補充執行細節，再接「無其他調價機制」。' },
      { options: ['are included', 'include', 'including', 'are including'], answer: 0, explain: '費用是「被」包含在總價中，用被動 are included in。' },
      { options: ['would', 'will to', 'are', 'have'], answer: 0, explain: '與 Should 開頭的假設語氣呼應，主句用 would + 原形動詞 be。' }
    ]
  },
  {
    id: 'a6-11', label: 'Article', title: 'Central bank holds rates',
    text: `The central bank held its policy rate at 3.75% yesterday, ___1___ analysts had widely anticipated.

The accompanying statement noted that core inflation ___2___ more slowly than headline inflation, which remains the committee's principal concern.

___3___ Two members dissented, favouring a 25 basis point reduction.

Markets showed little reaction, ___4___ the decision had been fully priced in.`,
    blanks: [
      { options: ['as', 'which', 'that', 'what'], answer: 0, explain: 'as 引導的關係子句＝正如…，指代整個主句內容。' },
      { options: ['has fallen', 'falls', 'is fallen', 'had fallen'], answer: 0, explain: '從過去持續至今的變化，用現在完成式 has fallen。' },
      { options: ['The vote was not unanimous.', 'The bank was founded in 1934.', 'Its headquarters occupies a listed building.', 'Currency reserves rose last quarter.'], answer: 0, explain: '後一句說兩位委員持不同意見，前面先點出表決未達一致最連貫。' },
      { options: ['as', 'despite', 'in spite of', 'owing to'], answer: 0, explain: '空格後是完整子句且表原因，用連接詞 as。' }
    ]
  },
  {
    id: 'a6-12', label: 'E-mail', title: 'Post-acquisition integration update',
    text: `To: Integration Steering Committee
From: Programme Office
Subject: Week 12 status

Twelve weeks into integration, four of the seven workstreams ___1___ their milestone targets.

Payroll consolidation is the principal exception. ___2___ The delay stems from an undocumented customization in the acquired company's system.

Had this been identified during due diligence, we ___3___ additional contingency into the plan.

We now recommend that the go-live date ___4___ by six weeks rather than compressing testing.`,
    blanks: [
      { options: ['have met', 'has met', 'are meeting', 'met to'], answer: 0, explain: '主詞 four（複數）且動作持續至今，用 have met。' },
      { options: ['It is now four weeks behind schedule.', 'The finance team has moved to open-plan offices.', 'A new brand identity will launch in June.', 'Staff surveys are conducted annually.'], answer: 0, explain: '此句量化延誤程度，再由下一句說明成因，邏輯連貫。' },
      { options: ['would have built', 'would build', 'will have built', 'had built'], answer: 0, explain: '與過去事實相反的假設，主句用 would have + p.p.。' },
      { options: ['be deferred', 'is deferred', 'defers', 'will be deferred'], answer: 0, explain: 'recommend 後的 that 子句用原形動詞，被動則為 be + p.p.。' }
    ]
  },
  {
    id: 'a6-13', label: 'Report excerpt', title: 'Supplier concentration risk',
    text: `Section 4 — Concentration

Sixty-two per cent of direct material spend is placed with three suppliers, ___1___ of which operate manufacturing sites in the same industrial region.

This concentration has delivered favourable pricing. ___2___

Our modelling indicates that a six-week disruption at any one of the three ___3___ result in a production stoppage within eleven days.

We therefore recommend qualifying a secondary source for the two highest-volume components, ___4___ the qualification cost is material.`,
    blanks: [
      { options: ['all', 'both', 'each of', 'either'], answer: 0, explain: '三家供應商用 all of which；both 僅用於兩者。' },
      { options: ['It has also created a single point of failure that is not reflected in our risk register.', 'The procurement team relocated to Lyon in 2022.', 'Payment terms are 45 days across all suppliers.', 'Our logistics partner operates 60 vehicles.'], answer: 0, explain: '前一句是集中採購的優點，此句以 also 帶出隱藏風險，並引出下段模擬結果。' },
      { options: ['would', 'will', 'has', 'is'], answer: 0, explain: '模擬情境屬假設，用 would + 原形動詞 result。' },
      { options: ['even though', 'because', 'so that', 'in case'], answer: 0, explain: '前後語意讓步（雖然認證成本高昂仍建議做），用 even though。' }
    ]
  },
  {
    id: 'a6-14', label: 'Notice', title: 'Whistleblowing procedure',
    text: `SPEAK-UP PROCEDURE

Employees who become aware of suspected misconduct ___1___ report it through any of the channels listed below.

Reports may be made anonymously. ___2___ The company does not attempt to identify anonymous reporters.

No employee ___3___ suffer detriment as a result of raising a concern in good faith, even where the concern proves unfounded.

Retaliation is itself a disciplinary matter and ___4___ investigated as such.`,
    blanks: [
      { options: ['are encouraged to', 'are encouraging to', 'encourage to', 'encouraged'], answer: 0, explain: '員工「被」鼓勵，用被動 be encouraged to + 原形動詞。' },
      { options: ['Anonymity may, however, limit our ability to investigate fully.', 'The staff canteen accepts contactless payment.', 'Annual leave carries over to the following year.', 'Parking spaces are allocated by department.'], answer: 0, explain: '此句誠實說明匿名的限制，再接「公司不追查匿名者」，語意相承。' },
      { options: ['will', 'would', 'might', 'could'], answer: 0, explain: '公司政策的明確保證，用 will（此處為 No employee will suffer…）。' },
      { options: ['will be', 'will', 'is being', 'has been'], answer: 0, explain: '報復行為「被」調查，用未來被動 will be + p.p.。' }
    ]
  },
  {
    id: 'a6-15', label: 'E-mail', title: 'Response to a regulatory inquiry',
    text: `To: Financial Conduct Division
From: Compliance, Ardenne Capital
Subject: Reference FCD/2024/0871

We acknowledge receipt of your letter dated 3 June ___1___ our client onboarding controls.

We are compiling the records requested. ___2___ We anticipate providing a complete response by 28 June, within the period specified.

Certain records held by our former administrator ___3___ retrieval from archive, which accounts for the additional time.

Should you require an interim submission, we ___4___ prepared to provide the completed elements sooner.

Yours faithfully,
Compliance Department`,
    blanks: [
      { options: ['concerning', 'concerned', 'concern', 'to concern'], answer: 0, explain: 'concerning＝關於，是介系詞用法。' },
      { options: ['Two of the eleven items require input from a third party.', 'Our registered office is in Luxembourg.', 'The firm employs 46 people.', 'Client meetings are held quarterly.'], answer: 0, explain: '此句說明為何需要時間，與後一句「預計 6 月 28 日前完成」相呼應。' },
      { options: ['require', 'requires', 'requiring', 'are required'], answer: 0, explain: '主詞 records 是複數且主動需要調閱，用 require。' },
      { options: ['are', 'would', 'will', 'have'], answer: 0, explain: 'be prepared to＝有意願、準備好做某事。' }
    ]
  },
  {
    id: 'a6-16', label: 'Web page', title: 'Terms of engagement',
    text: `SCOPE AND LIMITATIONS

Our advice is provided solely for the purposes set out in the engagement letter and ___1___ be relied upon by any third party.

We accept no duty of care to persons ___2___ than the addressee.

___3___ Where our work relies on information supplied by you, we do not independently verify that information unless expressly agreed.

Our aggregate liability is limited to the fees paid, ___4___ in cases of fraud or where liability cannot lawfully be excluded.`,
    blanks: [
      { options: ['may not', 'may', 'must', 'should'], answer: 0, explain: '禁止第三方援用，用 may not + 原形動詞。' },
      { options: ['other', 'rather', 'more', 'else'], answer: 0, explain: 'persons other than＝除…以外之人，是固定用法。' },
      { options: ['This limitation applies regardless of how the advice is subsequently circulated.', 'Our offices are open from 09:00 to 17:30.', 'Invoices are issued monthly in arrears.', 'We are registered in England and Wales.'], answer: 0, explain: '此句延伸前面的責任限制範圍，屬同一主題；其他選項與條款內容無關。' },
      { options: ['except', 'besides', 'including', 'apart'], answer: 0, explain: 'except in cases of＝除…情形外，帶出責任限制的例外。' }
    ]
  },
  {
    id: 'a6-17', label: 'Press release', title: 'Divestment of non-core division',
    text: `Ellerslie Holdings announced today that it ___1___ its packaging division to Carrick Industrial for £220 million.

The division, ___2___ contributed 9% of group revenue, has been classified as non-core since the 2023 strategic review.

___3___ Proceeds will be applied primarily to debt reduction.

The transaction is expected to complete in the fourth quarter, ___4___ customary regulatory clearances.`,
    blanks: [
      { options: ['has agreed to sell', 'has agreed selling', 'agrees selling', 'is agreed to sell'], answer: 0, explain: 'agree to + 原形動詞；已宣布的決定用現在完成式。' },
      { options: ['which', 'that', 'what', 'it'], answer: 0, explain: '逗號後的非限定關係子句用 which。' },
      { options: ['All 640 employees will transfer to the purchaser under existing terms.', 'The group was listed on the exchange in 1998.', 'Its head office occupies four floors.', 'The board comprises nine directors.'], answer: 0, explain: '併購公告慣例會交代員工移轉安排，且與後句「資金用途」同屬交易細節。' },
      { options: ['subject to', 'regardless of', 'in spite of', 'instead of'], answer: 0, explain: 'subject to＝以…為條件，指須取得監理核准。' }
    ]
  },
  {
    id: 'a6-18', label: 'Memo', title: 'Model validation findings',
    text: `To: Risk Committee
From: Model Validation
Subject: Annual validation of the credit scoring model

The model remains fit for purpose, ___1___ two findings require remediation.

First, the population has drifted materially since calibration. ___2___ The proportion of applicants aged under 30 has risen from 18% to 31%.

Second, documentation of the variable selection process ___3___ incomplete, which limits reproducibility.

We recommend that recalibration ___4___ before the next annual cycle rather than deferred.`,
    blanks: [
      { options: ['although', 'because', 'so', 'unless'], answer: 0, explain: '「整體仍適用，但有兩項待改善」屬讓步，用 although。' },
      { options: ['Drift of this magnitude typically degrades discriminatory power within two cycles.', 'The committee meets on the first Tuesday of each month.', 'A new chair was appointed in January.', 'The department has recruited two analysts.'], answer: 0, explain: '此句說明族群漂移的後果，再以具體數據佐證，論述連貫。' },
      { options: ['is', 'are', 'be', 'being'], answer: 0, explain: '主詞 documentation 是不可數單數，用 is。' },
      { options: ['be undertaken', 'is undertaken', 'undertakes', 'will be undertaken'], answer: 0, explain: 'recommend 後的 that 子句用原形，被動為 be + p.p.。' }
    ]
  },
  {
    id: 'a6-19', label: 'Letter', title: 'Notice of price variation under contract',
    text: `Dear Mr. Halloran,

We write pursuant to Clause 12.3 of the supply agreement, ___1___ permits variation where a designated raw material index moves by more than 8%.

The index has risen 11.4% since the last adjustment date. ___2___ We are therefore applying a variation of 6.2%, calculated in accordance with the formula at Schedule 4.

The revised rates take effect on 1 July, ___3___ thirty days from the date of this notice.

We remain willing to discuss volume commitments ___4___ would mitigate the increase.

Yours sincerely,
Ilse Vogel`,
    blanks: [
      { options: ['which', 'that', 'what', 'it'], answer: 0, explain: '逗號後的非限定關係子句用 which，先行詞為該條款。' },
      { options: ['The threshold in Clause 12.3 has therefore been exceeded.', 'Our warehouse has been extended by 2,000 square metres.', 'Payment terms remain at 30 days.', 'We supply eleven customers in this sector.'], answer: 0, explain: '此句把數據連回契約條款門檻，是論證的關鍵一環。' },
      { options: ['being', 'been', 'to be', 'which be'], answer: 0, explain: '＝which is thirty days…，簡化為分詞 being。' },
      { options: ['that', 'what', 'those', 'which they'], answer: 0, explain: '先行詞 volume commitments，關代在子句中當主詞，用 that。' }
    ]
  },
  {
    id: 'a6-20', label: 'Article', title: 'Litigation funding under scrutiny',
    text: `Third-party litigation funding, once a niche practice, ___1___ into a substantial asset class over the past decade.

Funders finance claims in exchange for a share of any award. ___2___

Critics argue that the arrangement can distort settlement incentives, ___3___ a funder's return threshold may exceed what a claimant would rationally accept.

Regulators in several jurisdictions are now consulting on disclosure requirements, ___4___ would oblige parties to reveal the existence of funding arrangements.`,
    blanks: [
      { options: ['has grown', 'grows', 'is growing', 'had grown'], answer: 0, explain: 'over the past decade 搭配現在完成式 has grown。' },
      { options: ['Proponents say the model widens access to justice for claimants who could not otherwise litigate.', 'Court buildings are typically open from 09:00.', 'Legal fees are usually billed hourly.', 'Most cases are heard by a single judge.'], answer: 0, explain: '此句先呈現支持方觀點，才自然接上下一句的 Critics argue，形成對照。' },
      { options: ['since', 'despite', 'unless', 'whether'], answer: 0, explain: '空格後是完整子句且說明理由，用連接詞 since。' },
      { options: ['which', 'that', 'what', 'they'], answer: 0, explain: '逗號後的非限定關係子句用 which，指代 disclosure requirements。' }
    ]
  },
  {
    id: 'a6-21', label: 'E-mail', title: 'Escalating a covenant breach',
    text: `To: Treasury Committee
From: Group Finance
Subject: Covenant headroom — Q3

Our leverage ratio at 30 September was 3.42x against a covenant limit of 3.50x, ___1___ headroom of 0.08x.

On current forecasts, the ratio ___2___ the limit in Q1 unless mitigating action is taken.

___3___ We have modelled three options: deferring capital expenditure, accelerating a receivables facility, and requesting a covenant waiver.

Of these, deferral ___4___ the least costly, though it carries operational consequences we should weigh carefully.`,
    blanks: [
      { options: ['leaving', 'left', 'leaves', 'to leave'], answer: 0, explain: '分詞構句表結果，用 leaving＝從而留下…。' },
      { options: ['would breach', 'breaches', 'has breached', 'will have breached'], answer: 0, explain: '依預測推估的假設性結果，用 would + 原形動詞。' },
      { options: ['The position is manageable but requires a decision this quarter.', 'The treasury team has moved to the eighth floor.', 'Our auditors were reappointed in June.', 'Interest is payable semi-annually.'], answer: 0, explain: '此句承接風險評估並帶出下一句的方案比較，語氣與內容都連貫。' },
      { options: ['appears', 'appear', 'appearing', 'is appeared'], answer: 0, explain: '主詞 deferral 是單數，用 appears；appear 為連綴動詞後接形容詞。' }
    ]
  },
  {
    id: 'a6-22', label: 'Notice', title: 'Conflicts of interest declaration',
    text: `ANNUAL DECLARATION — Senior Staff

All employees at Grade 7 and above ___1___ complete the conflicts declaration by 31 January.

Declarations must cover directorships, shareholdings above 5%, and any relationship ___2___ could reasonably be perceived as affecting objectivity.

___3___ A nil return is still required from those with nothing to declare.

Failure to submit a declaration ___4___ treated as a compliance breach.`,
    blanks: [
      { options: ['are required to', 'require to', 'are requiring', 'requires'], answer: 0, explain: '員工「被」要求，用 be required to + 原形動詞。' },
      { options: ['that', 'what', 'whose', 'it'], answer: 0, explain: '先行詞 relationship 且關代當主詞，用 that。' },
      { options: ['The threshold applies to holdings held directly or through a nominee.', 'The office closes at 17:00 on Fridays.', 'New starters attend induction in their first week.', 'Expense claims are processed weekly.'], answer: 0, explain: '此句延伸前一句的持股門檻定義，屬同一主題；其他選項離題。' },
      { options: ['will be', 'will', 'is being', 'has been'], answer: 0, explain: '未申報「被」視為違規，用未來被動 will be + p.p.。' }
    ]
  },
  {
    id: 'a6-23', label: 'Report excerpt', title: 'Post-implementation review',
    text: `Section 2 — Benefits Realisation

The business case projected annual savings of £4.1 million. Realised savings in year one ___1___ £2.6 million.

The shortfall is largely timing rather than value. ___2___ Two of the four sites went live five months later than planned.

Had the original schedule been met, we estimate savings ___3___ approximately £3.6 million.

We conclude that the benefits remain achievable, ___4___ the run-rate should be reassessed at the eighteen-month point.`,
    blanks: [
      { options: ['were', 'was', 'have been', 'are'], answer: 0, explain: '主詞 savings 是複數且指過去一年，用 were。' },
      { options: ['Benefits accrue only from the point of site go-live.', 'The programme director joined from a competitor.', 'The steering group met eleven times.', 'Training materials were produced in four languages.'], answer: 0, explain: '此句解釋為何延後上線會直接壓縮效益，銜接前後兩句。' },
      { options: ['would have reached', 'would reach', 'will have reached', 'had reached'], answer: 0, explain: '與過去事實相反的推估，用 would have + p.p.。' },
      { options: ['although', 'because', 'so that', 'unless'], answer: 0, explain: '「效益仍可達成，但應重新評估」屬讓步轉折，用 although。' }
    ]
  },
  {
    id: 'a6-24', label: 'E-mail', title: 'Response to an activist shareholder',
    text: `Dear Mr. Vandenberg,

Thank you for your letter setting out Kestrel Partners' views on capital allocation.

The Board has considered your proposals ___1___ and welcomes the engagement.

We agree that the return on the Iberian business ___2___ below the group cost of capital for three consecutive years.

___3___ We do not, however, accept that immediate disposal maximises value, given the restructuring already under way.

The Board ___4___ report on progress at the interim results in September.

Yours sincerely,
Company Secretary`,
    blanks: [
      { options: ['carefully', 'careful', 'care', 'carefulness'], answer: 0, explain: '修飾動詞片語 has considered 要用副詞 carefully。' },
      { options: ['has remained', 'remains to', 'is remained', 'had remained'], answer: 0, explain: 'for three consecutive years 搭配現在完成式 has remained。' },
      { options: ['That assessment is consistent with our own internal analysis.', 'Our registered office moved in 2020.', 'The annual report is published in April.', 'Board meetings are held six times a year.'], answer: 0, explain: '此句承認對方論點成立，才使下一句的 We do not, however 形成有力對比。' },
      { options: ['will', 'would', 'is', 'has'], answer: 0, explain: '承諾未來將報告進度，用 will + 原形動詞 report。' }
    ]
  },
  {
    id: 'a6-25', label: 'Notice', title: 'Business continuity exercise',
    text: `BUSINESS CONTINUITY — LIVE EXERCISE

A live continuity exercise ___1___ on 14 November, simulating loss of the primary data centre.

Systems will fail over to the secondary site at 06:00. ___2___ Staff should work normally and report any degradation through the usual service desk route.

Under no circumstances ___3___ the exercise be treated as a genuine incident in external communications.

Observers will record recovery times, ___4___ will be compared against the recovery time objectives set out in the plan.`,
    blanks: [
      { options: ['will be conducted', 'will conduct', 'is conducting', 'conducts'], answer: 0, explain: '演練是「被」執行，用未來被動 will be + p.p.。' },
      { options: ['No advance notice of the switchover time will be given to individual teams.', 'The canteen will serve a special menu that day.', 'Car park barriers will be replaced in December.', 'The IT director joined the company in 2018.'], answer: 0, explain: '此句說明演練的真實性設計，並自然帶出「照常工作、循正常管道回報」。' },
      { options: ['should', 'it should', 'should it', 'the exercise should'], answer: 0, explain: 'Under no circumstances 置句首須倒裝：助動詞 + 主詞 + 原形動詞。' },
      { options: ['which', 'that', 'what', 'they'], answer: 0, explain: '逗號後的非限定關係子句用 which，指代 recovery times。' }
    ]
  }
];
