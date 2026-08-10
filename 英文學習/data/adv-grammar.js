/* 高級 TOEIC 750-900：45 個文法重點 */

const ADV_GRAMMAR = [
  { title: '否定副詞倒裝', point: 'Never / Rarely / Seldom / Hardly / Little / Not only 置於句首時，主要子句倒裝：助動詞 + 主詞 + 原形動詞。', examples: [
    { en: 'Rarely have we seen such a rapid recovery.', zh: '我們很少見到如此快速的復甦。' },
    { en: 'Not only did they meet the deadline, but they also exceeded the target.', zh: '他們不僅趕上期限，還超越了目標。' } ] },

  { title: 'Not until / Only 開頭的倒裝', point: 'Not until…、Only after / when / by 置於句首時，「主要子句」倒裝；附屬子句本身不倒裝。', examples: [
    { en: 'Not until the audit ended did we learn the truth.', zh: '直到稽核結束我們才得知真相。' },
    { en: 'Only when all data has been verified will the report be released.', zh: '唯有資料全部查核完畢，報告才會發布。' } ] },

  { title: '地方副詞與 so / such 倒裝', point: '地方副詞片語置句首時主詞與動詞倒裝（Attached is…、Enclosed are…）；so / such 置句首亦倒裝。', examples: [
    { en: 'Attached is the revised contract for your review.', zh: '附件為修訂後的合約，供您審閱。' },
    { en: 'So rapid was the growth that we had to hire immediately.', zh: '成長之快，讓我們不得不立刻徵人。' } ] },

  { title: '假設語氣（與過去事實相反）', point: 'If + had + p.p., 主詞 + would / could / might + have + p.p.。省略 if 時倒裝為 Had + 主詞 + p.p.。', examples: [
    { en: 'Had the report been submitted earlier, the issue would have been resolved.', zh: '若報告早點送出，問題就已解決了。' },
    { en: 'If the supplier had notified us, we would have avoided the delay.', zh: '如果供應商通知我們，就能避免延誤。' } ] },

  { title: '假設語氣（與現在／未來事實相反）', point: '與現在相反：If + 過去式, would + 原形。與未來相反或可能性極低：If + should / were to + V, would + 原形。', examples: [
    { en: 'Should any problem arise, please contact us immediately.', zh: '萬一發生任何問題，請立即與我們聯絡。' },
    { en: 'If the merger were to fail, we would need a new strategy.', zh: '萬一併購失敗，我們就需要新策略。' } ] },

  { title: '混合條件句', point: '條件與結果的時間點不同：If + had + p.p.（過去條件）, 主詞 + would + 原形（現在結果）。', examples: [
    { en: 'If he had accepted the offer, he would be in London now.', zh: '如果他當初接受了那份工作，現在人就在倫敦。' },
    { en: 'If we had invested earlier, we would own the patent today.', zh: '如果我們早點投資，今天就擁有那項專利了。' } ] },

  { title: '假設性 that 子句（should 省略）', point: 'recommend / require / demand / insist / suggest / propose / request 之後的 that 子句，動詞一律用原形，不隨主詞與時態變化。', examples: [
    { en: 'The auditor recommended that the procedure be revised.', zh: '稽核人員建議修訂該程序。' },
    { en: 'The regulations require that every employee wear a badge.', zh: '規定要求每位員工都配戴識別證。' } ] },

  { title: 'It is + 形容詞 + that 子句的假設語氣', point: 'It is essential / necessary / vital / imperative that + 主詞 + 原形動詞。', examples: [
    { en: 'It is essential that the deadline be met.', zh: '務必要趕上這個期限。' },
    { en: 'It is imperative that all staff attend the briefing.', zh: '全體員工務必出席簡報。' } ] },

  { title: 'wish / if only 的願望語氣', point: 'wish + 過去式＝與現在相反；wish + had p.p.＝與過去相反（後悔）；wish + would＝希望對方改變。', examples: [
    { en: 'I wish I had known about the risk earlier.', zh: '真希望我早點知道有這個風險。' },
    { en: 'The client wishes the delivery were faster.', zh: '客戶希望出貨能再快些。' } ] },

  { title: '分詞構句（主動與被動）', point: '兩句主詞相同時可簡化：主動用 V-ing、被動用 p.p.（Being 省略）、動作有先後用 Having + p.p.。', examples: [
    { en: 'Opened in 2010, the facility has been upgraded twice.', zh: '該設施 2010 年啟用，之後升級過兩次。' },
    { en: 'Having completed the audit, the team submitted its findings.', zh: '完成稽核後，團隊提交了調查結果。' } ] },

  { title: '獨立分詞構句（絕對主格）', point: '分詞的主詞與主句主詞不同時，必須保留自己的主詞。多見於正式書面語。', examples: [
    { en: 'Weather permitting, the ceremony will be held outdoors.', zh: '若天氣允許，典禮將在戶外舉行。' },
    { en: 'All things considered, the outcome was acceptable.', zh: '整體考量下來，這個結果可以接受。' } ] },

  { title: '分詞構句的懸垂錯誤', point: '分詞的邏輯主詞必須與主句主詞一致，否則就是錯句。多益會用這個陷阱測試。', examples: [
    { en: 'Having reviewed the data, the team revised its conclusion. (正確)', zh: '檢視完資料後，團隊修正了結論。' },
    { en: 'Having reviewed the data, the conclusion was revised. (懸垂，錯誤)', zh: '（結論不會自己檢視資料，屬錯誤用法）' } ] },

  { title: 'what 與 that 引導的名詞子句', point: 'that 之後接完整句子；what＝the thing(s) which，之後的句子必定缺主詞或受詞。', examples: [
    { en: 'What the committee found most concerning was the lack of documentation.', zh: '委員會最擔心的是文件不足。' },
    { en: 'The director confirmed that the project would proceed.', zh: '總監確認專案會繼續進行。' } ] },

  { title: 'whether 與 if 的名詞子句', point: 'whether 可放在介系詞後、主詞位置與 or not 之前；if 只能當動詞的受詞子句，不可放句首或介系詞後。', examples: [
    { en: 'Whether the plan succeeds depends on funding.', zh: '計畫能否成功取決於資金。' },
    { en: 'We are unsure whether or not to proceed.', zh: '我們不確定是否要繼續。' } ] },

  { title: '非限定關係子句與 which 指代整句', point: '逗號之後的 which 可指代前面整個句子；非限定用法不可用 that。', examples: [
    { en: 'He missed the deadline, which surprised everyone.', zh: '他錯過了期限，這讓大家很意外。' },
    { en: 'All contractors, whose credentials have been verified, may enter.', zh: '所有已完成資格查驗的承包商皆可進入。' } ] },

  { title: '介系詞 + 關係代名詞', point: '正式寫法把介系詞提到關代前：in which（＝where）、for whom、of which、during which。此時關代不可省略，也不可用 that。', examples: [
    { en: 'The room in which the meeting was held has been renovated.', zh: '舉行會議的那個房間已經整修過。' },
    { en: 'The client for whom we prepared the report was satisfied.', zh: '我們為其準備報告的那位客戶很滿意。' } ] },

  { title: '數量詞 + of which / of whom', point: 'some of which、most of whom、all of which 等結構用來連接前一句的名詞，形成正式的關係子句。', examples: [
    { en: 'We received 50 applications, most of which were incomplete.', zh: '我們收到 50 份申請，其中多數並不完整。' },
    { en: 'The firm employs 200 people, 30 of whom work remotely.', zh: '該公司雇用 200 人，其中 30 人遠距工作。' } ] },

  { title: '複合關係代名詞 whoever / whatever / whichever', point: 'whoever＝anyone who；whatever＝anything that。本身兼具連接詞與代名詞功能，引導名詞子句。', examples: [
    { en: 'Whoever submits the proposal must sign it.', zh: '提交提案的人都必須簽名。' },
    { en: 'We will accept whichever option is more cost-effective.', zh: '我們會採用成本效益較高的那個選項。' } ] },

  { title: '讓步子句 however / whatever / no matter', point: 'However + 形容詞／副詞 + 主詞 + 動詞＝no matter how…；Whatever＝no matter what。', examples: [
    { en: 'However difficult the task is, we must finish it on time.', zh: '無論任務多困難，都必須準時完成。' },
    { en: 'Whatever the board decides, the staff will be informed.', zh: '無論董事會如何決定，都會通知員工。' } ] },

  { title: '強調句型 It is ... that', point: 'It is / was + 強調部分 + that / who + 其餘部分，可強調主詞、受詞或時間地點片語。', examples: [
    { en: 'It was the deadline that forced us to compromise.', zh: '正是那個期限迫使我們妥協。' },
    { en: 'It was in 2020 that the policy took effect.', zh: '這項政策是在 2020 年生效的。' } ] },

  { title: '主詞與動詞一致（進階）', point: 'neither / either / each + of + 複數名詞視為單數；a number of + 複數名詞接複數動詞，the number of + 複數名詞接單數動詞。', examples: [
    { en: 'Neither of the vendors has met the requirements.', zh: '兩家廠商都未達到要求。' },
    { en: 'The number of complaints has declined sharply.', zh: '客訴數量大幅下降。' } ] },

  { title: '就近一致原則', point: 'either A or B、neither A nor B、not only A but also B 當主詞時，動詞與「最接近的主詞」一致。', examples: [
    { en: 'Neither the manager nor the assistants were informed.', zh: '經理與助理都沒有被通知。' },
    { en: 'Not only the staff but also the director was surprised.', zh: '不只員工，連總監都感到意外。' } ] },

  { title: '平行結構', point: 'and / or / not only...but also 連接的成分，詞性與結構必須一致。多益常在列舉句尾留空格。', examples: [
    { en: 'The position requires managing budgets, supervising staff, and preparing reports.', zh: '這個職位需要管理預算、監督員工並製作報告。' },
    { en: 'She is known not only for her research but also for her teaching.', zh: '她不只以研究著稱，也以教學聞名。' } ] },

  { title: '比較結構的平行', point: '比較的兩個對象必須是「同類」：those of、that of 用來避免拿產品比公司之類的錯誤比較。', examples: [
    { en: "Our margins are higher than those of our competitors.", zh: '我們的利潤率高於競爭對手的利潤率。' },
    { en: "The city's population is larger than that of the capital.", zh: '這座城市的人口比首都的多。' } ] },

  { title: '連接副詞 therefore / nevertheless / otherwise / whereas', point: 'therefore＝因此；nevertheless＝儘管如此；otherwise＝否則；whereas＝然而（對比）。前面通常用分號或句號。', examples: [
    { en: 'The proposal was well researched; nevertheless, it was rejected.', zh: '提案研究充分，儘管如此仍被否決。' },
    { en: 'Submit the form by Friday; otherwise, it will not be processed.', zh: '請於週五前繳交，否則將不予受理。' } ] },

  { title: '正式讓步用語 albeit / notwithstanding', point: 'albeit＝雖然（後接形容詞或片語，不接完整子句）；notwithstanding＝儘管（介系詞，接名詞）。', examples: [
    { en: 'Progress was steady, albeit slower than planned.', zh: '進度穩定，雖然比計畫慢。' },
    { en: 'Notwithstanding the delay, the project stayed on budget.', zh: '儘管延誤，專案仍未超支。' } ] },

  { title: 'be to + 原形動詞', point: '表示規定、正式安排或命令，語氣比 must 更正式，常見於公告與合約。', examples: [
    { en: 'All visitors are to register at the front desk.', zh: '所有訪客都必須在櫃檯登記。' },
    { en: 'Payment is to be made within 30 days.', zh: '款項須於 30 天內支付。' } ] },

  { title: 'would rather / had better / may as well', point: '三者後面都接原形動詞。would rather A than B＝寧願；had better＝最好（帶警告）；may as well＝不妨。', examples: [
    { en: 'We would rather delay the launch than release a flawed product.', zh: '我們寧願延後上市也不願推出有瑕疵的產品。' },
    { en: 'You had better double-check the figures.', zh: '你最好再核對一次數字。' } ] },

  { title: '未來完成式與未來進行式', point: 'will have + p.p.＝到未來某時「將已完成」；will be + V-ing＝未來某時「將正在進行」。', examples: [
    { en: 'By December, we will have completed the migration.', zh: '到十二月我們就完成移轉了。' },
    { en: 'This time next week, the team will be presenting in Tokyo.', zh: '下週此時團隊將正在東京簡報。' } ] },

  { title: '完成式不定詞與完成式動名詞', point: 'to have + p.p. 表示比主要動詞更早發生；having + p.p. 同理用於動名詞。', examples: [
    { en: 'She is believed to have left the company in April.', zh: '據信她在四月已離職。' },
    { en: 'He denied having seen the document.', zh: '他否認看過那份文件。' } ] },

  { title: '被動不定詞與被動動名詞', point: 'to be + p.p.（被動不定詞）、being + p.p.（被動動名詞），用於動作接受者當主詞時。', examples: [
    { en: 'The contract needs to be signed by both parties.', zh: '合約需要雙方簽署。' },
    { en: 'She appreciated being informed in advance.', zh: '她很感謝事先被告知。' } ] },

  { title: '使役與感官動詞的被動還原', point: 'make 的被動要還原成 be made to V；see / hear 的被動同樣還原為 be seen / heard to V。', examples: [
    { en: 'Employees were made to attend the seminar.', zh: '員工被要求出席該研討會。' },
    { en: 'He was seen to leave the building at six.', zh: '有人看見他六點離開大樓。' } ] },

  { title: '雙受詞動詞的被動', point: 'give / send / offer / award 等有兩個受詞，被動時可用任一受詞當主詞。', examples: [
    { en: 'She was offered a senior position.', zh: '她獲得了一個資深職位。' },
    { en: 'A certificate was awarded to every participant.', zh: '每位參加者都獲頒證書。' } ] },

  { title: '情態動詞 + have + p.p.', point: 'must have p.p.（當初一定）、should have p.p.（早該而未做）、could have p.p.（原本可以）、need not have p.p.（其實不必）。', examples: [
    { en: 'You should have informed us earlier.', zh: '你早該提前通知我們。' },
    { en: 'We need not have rushed; the deadline was extended.', zh: '我們其實不必趕，期限延長了。' } ] },

  { title: '倒裝的條件句省略', point: 'If 省略後倒裝的三種型態：Were + 主詞、Had + 主詞 + p.p.、Should + 主詞 + 原形。', examples: [
    { en: 'Were the terms more favorable, we would sign today.', zh: '若條件更有利，我們今天就簽。' },
    { en: 'Should you require assistance, please let us know.', zh: '若您需要協助，請告訴我們。' } ] },

  { title: 'so that / such that 表目的與結果', point: 'so that + 子句＝以便（目的）；so + adj + that＝如此…以致於（結果）。多益常考兩者的區別。', examples: [
    { en: 'We revised the schedule so that everyone could attend.', zh: '我們調整了行程，以便大家都能出席。' },
    { en: 'The response was so positive that we extended the offer.', zh: '反應熱烈到我們延長了這項優惠。' } ] },

  { title: '同位語結構', point: '用逗號補充說明前面的名詞，常見於正式報告與新聞句型。', examples: [
    { en: 'Ms. Tanaka, the head of procurement, will lead the negotiation.', zh: '採購主管田中女士將主導這場談判。' },
    { en: 'Our flagship product, a modular sensor, sells worldwide.', zh: '我們的旗艦產品——一款模組化感測器——行銷全球。' } ] },

  { title: '名詞化與正式文體', point: '學術與商務寫作常把動詞轉為名詞以提高正式度與資訊密度：implement → implementation、analyze → analysis。', examples: [
    { en: 'The implementation of the policy was delayed.', zh: '政策的實施被延後了。' },
    { en: 'Our analysis of the data revealed a clear trend.', zh: '我們對資料的分析揭露了明確趨勢。' } ] },

  { title: '限定詞與量詞的搭配', point: 'a great deal of / a large amount of + 不可數；a large number of / numerous + 可數複數；plenty of 兩者皆可。', examples: [
    { en: 'A large amount of data was collected.', zh: '收集了大量資料。' },
    { en: 'A number of complaints have been filed.', zh: '已有若干客訴被提出。' } ] },

  { title: '否定的多樣表達', point: 'by no means（絕非）、under no circumstances（絕不）、no longer（不再）、far from（遠非）。置句首時多需倒裝。', examples: [
    { en: 'Under no circumstances should the data be shared.', zh: '在任何情況下都不得分享這些資料。' },
    { en: 'The results are by no means conclusive.', zh: '這些結果絕非定論。' } ] },

  { title: 'the + 比較級, the + 比較級', point: '「愈…就愈…」的固定句型，兩個子句都用 the + 比較級開頭。', examples: [
    { en: 'The sooner we act, the lower the cost will be.', zh: '我們愈早行動，成本就愈低。' },
    { en: 'The more detailed the report, the easier the review.', zh: '報告愈詳細，審查就愈容易。' } ] },

  { title: '插入語與主詞動詞的距離', point: '主詞與動詞之間插入的關係子句或片語不影響動詞的單複數判斷，多益常用此設陷阱。', examples: [
    { en: 'The report, along with the supporting documents, was submitted.', zh: '報告連同佐證文件一併提交了。' },
    { en: 'The manager, as well as her assistants, is attending.', zh: '經理與她的助理們都會出席。' } ] },

  { title: 'used to / be used to / get used to', point: 'used to + 原形＝過去習慣；be used to + V-ing＝習慣於；get used to + V-ing＝逐漸習慣。', examples: [
    { en: 'The firm used to outsource its accounting.', zh: '這家公司以前把會計外包。' },
    { en: 'Staff are used to working with tight deadlines.', zh: '員工習慣在緊迫期限下工作。' } ] },

  { title: '省略與替代 so / do so / one', point: '避免重複時用 do so 代替前面的動詞片語、so 代替 that 子句、one(s) 代替可數名詞。', examples: [
    { en: 'If you wish to cancel, please do so in writing.', zh: '若您想取消，請以書面提出。' },
    { en: 'This model is more efficient than the older ones.', zh: '這款比舊款更有效率。' } ] },

  { title: '正式書信與公告常見句型', point: 'Should you have any questions…、Please be advised that…、We regret to inform you that…、Enclosed please find…。多益 Part 6 高頻。', examples: [
    { en: 'Please be advised that the office will close early on Friday.', zh: '謹此通知，辦公室週五將提早關閉。' },
    { en: 'Should you have any questions, please contact us.', zh: '如有任何問題，請與我們聯絡。' } ] }
];
