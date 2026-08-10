/* 進階 TOEIC 550-700：45 個文法重點 */

const INTER_GRAMMAR = [
  { title: '被動語態：be + p.p.', point: '強調動作的接受者。多益 Part 5 最高頻考點：先判斷主詞是「做動作」還是「被動作」。', examples: [
    { en: 'The report was reviewed by the finance team.', zh: '報告由財務團隊審閱。' },
    { en: 'All packages are inspected before shipping.', zh: '所有包裹出貨前都會檢查。' } ] },

  { title: '各時態的被動語態', point: '時態變化落在 be 動詞上：現在 is done、過去 was done、未來 will be done、現在完成 has been done、進行式 is being done。', examples: [
    { en: 'The email will be sent tomorrow morning.', zh: '信件明天早上會寄出。' },
    { en: 'The system is being upgraded right now.', zh: '系統正在升級中。' } ] },

  { title: '現在完成式：have / has + p.p.', point: '表示到現在為止的持續、經驗或剛完成，常搭配 since、for、already、yet、recently、ever、never。', examples: [
    { en: 'Ms. Lopez has worked here since 2015.', zh: '羅培茲女士自 2015 年起就在這裡工作。' },
    { en: 'The vendor has already submitted the invoice.', zh: '廠商已經送出請款單了。' } ] },

  { title: '現在完成式 vs 過去簡單式', point: '有明確過去時間（yesterday、last week、in 2020、ago）一律用過去式；沒有明確時間、強調對現在的影響則用現在完成式。', examples: [
    { en: 'We signed the contract last Monday. (過去式)', zh: '我們上週一簽了合約。' },
    { en: 'We have signed the contract. (現在完成)', zh: '我們已經簽了合約。' } ] },

  { title: '過去完成式：had + p.p.', point: '「過去的過去」。兩個過去動作中先發生的用過去完成式，常與 when、by the time、before 連用。', examples: [
    { en: 'The shipment had already left when we called.', zh: '我們打電話時貨物已經出貨了。' },
    { en: 'By the time he arrived, the meeting had ended.', zh: '他到的時候會議已經結束了。' } ] },

  { title: '現在完成進行式：have been + V-ing', point: '強調動作從過去持續到現在且可能繼續，常與 for / since 連用；現在完成式較強調結果。', examples: [
    { en: 'She has been working here for three years.', zh: '她在這裡工作三年了。' },
    { en: 'It has been raining since this morning.', zh: '從今天早上就一直下雨。' } ] },

  { title: '過去進行式', point: 'was / were + V-ing，表示過去某時正在進行；常搭配過去簡單式表示「正在…時，突然…」。', examples: [
    { en: 'The technician was repairing the machine when the power went out.', zh: '技師正在修機器時停電了。' },
    { en: 'While she was presenting, the projector stopped working.', zh: '她簡報時投影機故障了。' } ] },

  { title: '未來完成式：will have + p.p.', point: '表示到未來某個時間點為止「將已完成」，常與 by + 未來時間連用。', examples: [
    { en: 'By next Friday, we will have finished the audit.', zh: '到下週五為止，我們就完成稽核了。' },
    { en: 'She will have worked here for ten years by June.', zh: '到六月她就在這裡工作滿十年了。' } ] },

  { title: '關係代名詞 who / which / that', point: '先行詞是人用 who、事物用 which、that 兩者皆可。關代在子句中當主詞或受詞。', examples: [
    { en: 'The candidate who called yesterday has excellent experience.', zh: '昨天來電的那位人選經驗很好。' },
    { en: 'The proposal that received the most votes will be adopted.', zh: '得票最多的提案將被採用。' } ] },

  { title: '關係代名詞 whose', point: 'whose 表示所有關係，後面「直接接名詞」，不論先行詞是人或物都可用。', examples: [
    { en: 'The employee whose badge was lost should contact security.', zh: '識別證遺失的員工應聯絡保全。' },
    { en: 'We chose a supplier whose prices are stable.', zh: '我們選了價格穩定的供應商。' } ] },

  { title: '關係代名詞的省略', point: '關代在子句中當「受詞」時可以省略；當主詞時不可省略。「關代 + be 動詞」也常一起省略。', examples: [
    { en: 'The report (which) you sent is very clear.', zh: '你寄來的報告很清楚。' },
    { en: 'The items (that are) listed below are on sale.', zh: '下列商品正在特價。' } ] },

  { title: '關係副詞 where / when / why', point: '先行詞是地點用 where、時間用 when、原因用 why。與關代不同：關係副詞之後接「結構完整」的子句。', examples: [
    { en: 'This is the room where the meeting will be held.', zh: '這就是會議將舉行的房間。' },
    { en: 'June is the month when sales peak.', zh: '六月是銷售高峰的月份。' } ] },

  { title: '比較級', point: '短音節加 -er，多音節用 more，比較對象前加 than。不規則：good-better、bad-worse、little-less。', examples: [
    { en: "This year's results are better than last year's.", zh: '今年的業績比去年好。' },
    { en: 'This method is more effective than the old one.', zh: '這個方法比舊的有效。' } ] },

  { title: '最高級', point: '短音節加 -est，多音節用 most，前面通常加 the，常搭配 in / of 表示範圍。', examples: [
    { en: 'Of all the proposals, hers was the most detailed.', zh: '在所有提案中，她的最詳盡。' },
    { en: 'He is the most experienced engineer on the team.', zh: '他是團隊裡經驗最豐富的工程師。' } ] },

  { title: '比較級的修飾語', point: 'much / far / a lot / considerably / slightly + 比較級。注意不可用 very 修飾比較級。', examples: [
    { en: 'The new model is much faster than the old one.', zh: '新型號比舊的快很多。' },
    { en: 'Costs were slightly higher than expected.', zh: '成本比預期略高。' } ] },

  { title: '條件句第一類（可能發生）', point: 'If + 現在簡單式, 主詞 + will + 原形動詞。if 子句內不可用 will。', examples: [
    { en: 'If the shipment arrives late, we will notify the client.', zh: '如果貨物延遲送達，我們會通知客戶。' },
    { en: 'If you order today, you will get free shipping.', zh: '今天下單就能享免運。' } ] },

  { title: '條件句第二類（與現在事實相反）', point: 'If + 過去式, 主詞 + would / could / might + 原形動詞；be 動詞一律用 were。', examples: [
    { en: 'If we had more time, we would conduct further research.', zh: '如果有更多時間，我們會做進一步研究。' },
    { en: 'If I were you, I would accept the offer.', zh: '如果我是你，我會接受這個提議。' } ] },

  { title: 'unless / as long as / in case', point: 'unless＝if...not（除非）；as long as＝只要；in case＝以防萬一。之後接完整子句，且用現在式代替未來式。', examples: [
    { en: 'You will not receive a refund unless you keep the receipt.', zh: '除非保留收據，否則無法退款。' },
    { en: 'Bring a copy in case they ask for one.', zh: '帶份影本以防他們要。' } ] },

  { title: '動名詞 vs 不定詞', point: 'enjoy、finish、avoid、consider、recommend、suggest、mind 後接 V-ing；decide、plan、agree、promise、fail、offer、hope 後接 to V。', examples: [
    { en: 'The committee recommended postponing the launch.', zh: '委員會建議延後上市。' },
    { en: 'The company decided to expand overseas.', zh: '公司決定向海外擴張。' } ] },

  { title: '介系詞 to + V-ing 的陷阱', point: 'look forward to、be committed to、be used to、object to、contribute to 中的 to 是「介系詞」，後面要接 V-ing 而不是原形動詞。', examples: [
    { en: 'We look forward to hearing from you.', zh: '期待收到您的回覆。' },
    { en: 'She is committed to improving service quality.', zh: '她致力於提升服務品質。' } ] },

  { title: '使役動詞 make / let / have / get', point: 'make、let、have + 受詞 + 原形動詞；只有 get + 受詞 + to V。被動時 make 要還原成 be made to V。', examples: [
    { en: 'The manager had the assistant file the documents.', zh: '經理請助理把文件歸檔。' },
    { en: 'We got the supplier to lower the price.', zh: '我們讓供應商降價了。' } ] },

  { title: '感官動詞 see / hear / watch / notice', point: '受詞 + 原形動詞＝看到動作全程；受詞 + V-ing＝看到動作正在進行。', examples: [
    { en: 'I saw him cross the street.', zh: '我看到他走過馬路（全程）。' },
    { en: 'I saw him crossing the street.', zh: '我看到他正在過馬路。' } ] },

  { title: '情態動詞表推測', point: 'must be＝一定是；can\'t be＝不可能是；may / might / could be＝可能是。', examples: [
    { en: 'She must be stuck in traffic; she is never late.', zh: '她一定是塞車了，她從不遲到。' },
    { en: 'The figures can\'t be correct.', zh: '這些數字不可能正確。' } ] },

  { title: '情態動詞 + have + p.p.', point: '對過去的推測或評論：must have p.p.（當初一定）、should have p.p.（早該而未做）、could have p.p.（原本可以）。', examples: [
    { en: 'You should have informed us earlier.', zh: '你早該提前通知我們。' },
    { en: 'He must have forgotten the meeting.', zh: '他一定是忘了開會。' } ] },

  { title: '動詞 + 介系詞固定搭配', point: 'comply with、apply for、depend on、participate in、result in、consist of、refer to、respond to、object to。多益詞彙題大量出現。', examples: [
    { en: 'All suppliers must comply with the new rules.', zh: '所有供應商都必須遵守新規定。' },
    { en: 'The delay resulted in higher costs.', zh: '延誤導致成本提高。' } ] },

  { title: '形容詞 + 介系詞固定搭配', point: 'be responsible for、be familiar with、be eligible for、be capable of、be similar to、be aware of、be subject to。', examples: [
    { en: 'All employees are responsible for their own equipment.', zh: '所有員工都要為自己的設備負責。' },
    { en: 'Prices are subject to change without notice.', zh: '價格可能隨時變動，恕不另行通知。' } ] },

  { title: '連接詞 vs 介系詞（超高頻）', point: '後面接「完整子句」用連接詞：although / though / while；接「名詞片語」用介系詞：despite / in spite of。這是多益最愛考的陷阱。', examples: [
    { en: 'Despite the heavy rain, the event was held.', zh: '儘管下大雨，活動仍舉行。' },
    { en: 'Although it was raining heavily, the event was held.', zh: '雖然雨很大，活動仍舉行。' } ] },

  { title: 'because 與 because of', point: 'because + 完整子句；because of + 名詞片語。同理 due to、owing to 之後也接名詞。', examples: [
    { en: 'The office was closed because of the national holiday.', zh: '辦公室因國定假日休息。' },
    { en: 'The office was closed because it was a national holiday.', zh: '辦公室休息，因為那天是國定假日。' } ] },

  { title: 'during 與 while', point: 'during + 名詞（在…期間）；while + 子句（當…的時候）。', examples: [
    { en: 'Sales increased during the first quarter.', zh: '第一季期間銷售成長。' },
    { en: 'While the system was down, we used paper forms.', zh: '系統停機期間我們改用紙本表格。' } ] },

  { title: 'for 與 since', point: 'for + 一段時間長度（for three years）；since + 起始時間點（since 2019）。兩者常搭配完成式。', examples: [
    { en: 'He has managed the team since 2019.', zh: '他從 2019 年起帶領這個團隊。' },
    { en: 'She has worked here for five years.', zh: '她在這裡工作五年了。' } ] },

  { title: 'by 與 until', point: 'by＝在…之前（動作在期限前「完成」一次）；until＝直到…為止（狀態「持續」到某時）。', examples: [
    { en: 'Please submit the form by Friday.', zh: '請在星期五前繳交表格。' },
    { en: 'The office is closed until Monday.', zh: '辦公室休息到星期一。' } ] },

  { title: 'too...to 與 enough to', point: 'too + 形容詞 + (for 人) + to V＝太…以致於不能…；形容詞 + enough + to V（enough 放形容詞之後）。', examples: [
    { en: 'The product is too expensive for most customers.', zh: '這產品對多數顧客來說太貴。' },
    { en: 'The room is large enough to hold 50 people.', zh: '這房間大到可容納 50 人。' } ] },

  { title: 'so...that 與 such...that', point: 'so + 形容詞／副詞 + that；such + (a) + 形容詞 + 名詞 + that。', examples: [
    { en: 'The demand was so high that we ran out of stock.', zh: '需求高到我們庫存售罄。' },
    { en: 'It was such a busy day that we skipped lunch.', zh: '那天忙到我們連午餐都沒吃。' } ] },

  { title: '主詞與動詞一致（插入片語）', point: '主詞與動詞之間插入的介系詞片語不影響動詞：The list of items **is**…；The price of these products **has** risen。', examples: [
    { en: 'The list of approved vendors is available online.', zh: '核可廠商名單可於線上取得。' },
    { en: 'The cost of raw materials has increased.', zh: '原料成本上漲了。' } ] },

  { title: 'each / every / one of 的動詞', point: 'each、every + 單數名詞 + 單數動詞；one of + 複數名詞 + 單數動詞。', examples: [
    { en: 'Each of the applicants has been contacted.', zh: '每位應徵者都已被聯繫。' },
    { en: 'One of the printers is out of order.', zh: '其中一台印表機故障了。' } ] },

  { title: '表目的的不定詞', point: '「為了…」用 to V、in order to V 或 so as to V；否定用 in order not to V。', examples: [
    { en: 'We left early in order to avoid the traffic.', zh: '我們提早出發以避開車潮。' },
    { en: 'Please arrive by 8:50 so as to start on time.', zh: '請於 8:50 前抵達，以便準時開始。' } ] },

  { title: '分詞當形容詞：-ing 與 -ed', point: '-ing 描述「事物令人…」；-ed 描述「人感到…」。interesting / interested、confusing / confused、satisfying / satisfied。', examples: [
    { en: 'The results were disappointing.', zh: '結果令人失望。' },
    { en: 'The customers were disappointed with the delay.', zh: '顧客對延誤感到失望。' } ] },

  { title: '複合名詞', point: '兩個名詞連用時，前面的名詞當修飾語且通常用單數：customer service、sales report、safety regulations、production capacity。', examples: [
    { en: 'The sales report is due on Friday.', zh: '業務報告星期五到期。' },
    { en: 'Customer satisfaction is our top priority.', zh: '顧客滿意度是我們的第一優先。' } ] },

  { title: '反身代名詞與 each other', point: '主詞與受詞同一人用反身代名詞（himself、themselves）；兩者互相則用 each other / one another。', examples: [
    { en: 'The two teams helped each other during the launch.', zh: '上市期間兩個團隊互相幫忙。' },
    { en: 'She completed the analysis herself.', zh: '她親自完成了分析。' } ] },

  { title: '附加問句', point: '前肯定後否定、前否定後肯定；助動詞與時態跟主句一致，主詞改用代名詞。', examples: [
    { en: "You are coming to the meeting, aren't you?", zh: '你會來開會，對吧？' },
    { en: "She didn't call the client, did she?", zh: '她沒打給客戶，對吧？' } ] },

  { title: '間接問句', point: '問句放進句子裡當名詞子句時，語序回復為「主詞 + 動詞」，不再倒裝，也不用 do / does / did。', examples: [
    { en: 'Could you tell me where the meeting room is?', zh: '可以告訴我會議室在哪裡嗎？' },
    { en: 'I wonder when the shipment will arrive.', zh: '不知道貨物什麼時候會到。' } ] },

  { title: 'that 引導的名詞子句', point: 'say、think、believe、announce、confirm、explain 之後的 that 子句當受詞，that 常可省略。', examples: [
    { en: 'The director confirmed (that) the project would proceed.', zh: '總監確認專案會繼續進行。' },
    { en: 'We believe (that) demand will rise next quarter.', zh: '我們相信下一季需求會上升。' } ] },

  { title: 'So do I / Neither do I', point: '表示「我也是」：肯定用 So + 助動詞 + 主詞；否定用 Neither / Nor + 助動詞 + 主詞，兩者都要倒裝。', examples: [
    { en: 'She works in the Taipei office. — So do I.', zh: '她在台北辦公室工作。—— 我也是。' },
    { en: "I haven't seen the report. — Neither have I.", zh: '我還沒看到報告。—— 我也沒有。' } ] },

  { title: 'both / either / neither', point: 'both + 複數動詞；either / neither + 單數動詞。搭配用法：both A and B、either A or B、neither A nor B。', examples: [
    { en: 'Neither of the vendors has met the deadline.', zh: '兩家廠商都沒趕上期限。' },
    { en: 'Both offices are closed on Monday.', zh: '兩間辦公室星期一都休息。' } ] },

  { title: '時間副詞子句用現在式代未來', point: 'when、before、after、as soon as、until、once 引導的子句中，用現在式表示未來，不可用 will。', examples: [
    { en: 'I will call you as soon as the shipment arrives.', zh: '貨一到我就打給你。' },
    { en: 'Please wait here until the manager comes back.', zh: '請在這裡等到經理回來。' } ] }
];
