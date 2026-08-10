/* 基礎 TOEIC 350-500：45 個文法重點 */

const BASIC_GRAMMAR = [
  { title: 'be 動詞：am / is / are', point: '主詞 I 用 am；he / she / it 或單數名詞用 is；you / we / they 或複數名詞用 are。', examples: [
    { en: 'The office is closed on national holidays.', zh: '辦公室在國定假日不營業。' },
    { en: 'The customers are waiting in the lobby.', zh: '客戶正在大廳等候。' } ] },

  { title: 'be 動詞的否定與疑問', point: '否定在 be 動詞後加 not（isn\'t、aren\'t）；疑問把 be 動詞移到主詞前面。', examples: [
    { en: 'The manager is not available right now.', zh: '經理現在沒有空。' },
    { en: 'Are the documents ready?', zh: '文件準備好了嗎？' } ] },

  { title: '現在簡單式：第三人稱單數加 -s', point: '主詞是 he / she / it 或單數名詞時，一般動詞加 -s / -es。表示例行公事、營業時間、公司政策。', examples: [
    { en: 'Ms. Lin works in the marketing department.', zh: '林女士在行銷部門工作。' },
    { en: 'The store opens at 9 A.M. every day.', zh: '這家店每天早上九點開門。' } ] },

  { title: '現在簡單式的否定與疑問：do / does', point: '第三人稱單數用 does，其餘用 do；助動詞之後動詞一律回復原形。', examples: [
    { en: 'He does not work on weekends.', zh: '他週末不上班。' },
    { en: 'Do you need a receipt?', zh: '您需要收據嗎？' } ] },

  { title: '現在進行式：be + V-ing', point: '表示此刻正在進行的動作，常搭配 now、at the moment、Look!。', examples: [
    { en: 'The copier is not working at the moment.', zh: '影印機目前無法運作。' },
    { en: 'Mr. Wu is meeting with a client right now.', zh: '吳先生現在正在與客戶開會。' } ] },

  { title: '現在簡單式 vs 現在進行式', point: '簡單式講「習慣、事實」；進行式講「此刻正在做」。know、have、want、need 等狀態動詞通常不用進行式。', examples: [
    { en: 'She usually takes the subway. (習慣)', zh: '她通常搭地鐵。' },
    { en: 'She is taking a taxi today. (此刻)', zh: '她今天搭計程車。' } ] },

  { title: '過去簡單式：was / were', point: 'I / he / she / it 用 was；you / we / they 用 were。常搭配 yesterday、last week、in 2020。', examples: [
    { en: 'The meeting was very productive.', zh: '這場會議很有成效。' },
    { en: 'The files were on your desk yesterday.', zh: '檔案昨天在你桌上。' } ] },

  { title: '過去簡單式：一般動詞', point: '規則變化加 -ed；不規則需另外記（go-went、send-sent、buy-bought、take-took）。', examples: [
    { en: 'We signed the contract last Monday.', zh: '我們上週一簽了合約。' },
    { en: 'She sent the invoice yesterday.', zh: '她昨天寄出請款單。' } ] },

  { title: '過去式的否定與疑問：did', point: '否定用 did not（didn\'t）+ 原形動詞；疑問用 Did + 主詞 + 原形動詞。', examples: [
    { en: "He didn't attend the meeting.", zh: '他沒有出席會議。' },
    { en: 'Did you receive my email?', zh: '你收到我的信了嗎？' } ] },

  { title: '未來式：will', point: 'will + 原形動詞，用於當下決定、承諾或預測。多益公告大量使用。', examples: [
    { en: 'The shipment will arrive tomorrow morning.', zh: '貨物明天早上會送達。' },
    { en: 'I will call you as soon as I get home.', zh: '我一到家就打給你。' } ] },

  { title: '未來式：be going to', point: '用於已排定的計畫或有跡象的預測，後接原形動詞。', examples: [
    { en: 'The company is going to hire new staff next month.', zh: '公司下個月要聘請新員工。' },
    { en: 'Look at those clouds. It is going to rain.', zh: '看那些雲，快下雨了。' } ] },

  { title: '助動詞 can / could', point: 'can 表能力或許可；could 是過去式，也可用於更客氣的請求。', examples: [
    { en: 'You can pay by credit card.', zh: '您可以用信用卡付款。' },
    { en: 'Could you send me the file, please?', zh: '可以請你把檔案寄給我嗎？' } ] },

  { title: '助動詞 must / have to', point: 'must 表強制規定（多益公司規章常用）；have to 表客觀上必須，第三人稱單數用 has to。', examples: [
    { en: 'Employees must wear safety helmets in the factory.', zh: '員工在廠區內必須配戴安全帽。' },
    { en: 'She has to submit the form by Friday.', zh: '她必須在星期五前繳交表格。' } ] },

  { title: '助動詞 should / had better', point: 'should 表建議「應該」；had better 語氣更強，帶有警告意味。兩者後面都接原形動詞。', examples: [
    { en: 'You should check the figures again.', zh: '你應該再核對一次數字。' },
    { en: 'We had better leave now to avoid traffic.', zh: '我們最好現在出發以避開車潮。' } ] },

  { title: '助動詞 may / might', point: 'may 表允許或可能；might 語氣較不確定。多益公告常用 may 表「可以」。', examples: [
    { en: 'Visitors may use the parking lot free of charge.', zh: '訪客可免費使用停車場。' },
    { en: 'The delivery might be delayed by the storm.', zh: '出貨可能因為風暴而延誤。' } ] },

  { title: '冠詞 a / an', point: '看「發音」不是看字母：子音發音開頭用 a（a university、a one-day trip），母音發音開頭用 an（an hour、an honest employee）。', examples: [
    { en: 'She is an honest employee.', zh: '她是個誠實的員工。' },
    { en: 'He is a university graduate.', zh: '他是大學畢業生。' } ] },

  { title: '定冠詞 the 與零冠詞', point: '雙方都知道、獨一無二、或用片語限定的名詞用 the；泛指複數或不可數名詞不加冠詞。', examples: [
    { en: 'Mr. Chen is the manager of the Taipei office.', zh: '陳先生是台北辦公室的經理。' },
    { en: 'Employees receive free parking. (泛指)', zh: '員工享有免費停車。' } ] },

  { title: '名詞複數規則變化', point: '一般加 -s；字尾 s / x / ch / sh 加 -es；子音 + y 去 y 加 ies；字尾 f / fe 改 ves。', examples: [
    { en: 'two boxes, three cities, five shelves', zh: '兩個箱子、三座城市、五個架子' },
    { en: 'We have three boxes in the storage room.', zh: '倉庫裡有三個箱子。' } ] },

  { title: '不規則複數', point: 'child-children、person-people、man-men、woman-women、foot-feet；另有單複數同形：equipment、furniture 不可數，不加 -s。', examples: [
    { en: 'All the equipment has been checked. (不可數)', zh: '所有設備都已檢查過。' },
    { en: 'Three people attended the workshop.', zh: '三個人參加了工作坊。' } ] },

  { title: '可數與不可數名詞', point: '多益常考的不可數名詞：information、equipment、furniture、advice、luggage、paper（紙）、staff。它們不加 -s，動詞用單數。', examples: [
    { en: 'The information is available on our website.', zh: '這些資訊可在我們網站上取得。' },
    { en: 'You may bring one piece of luggage.', zh: '您可以攜帶一件行李。' } ] },

  { title: 'some / any', point: 'some 多用於肯定句與客氣的請求；any 用於否定句與疑問句。', examples: [
    { en: 'Would you like some coffee?', zh: '您要來點咖啡嗎？' },
    { en: 'We do not have any openings right now.', zh: '我們目前沒有任何職缺。' } ] },

  { title: 'many / much / a lot of', point: 'many + 可數複數；much + 不可數（多用於否定與疑問）；a lot of 兩者皆可。', examples: [
    { en: "There isn't much paper left in the printer.", zh: '印表機裡沒剩多少紙了。' },
    { en: 'Many applicants have submitted resumes.', zh: '許多應徵者已繳交履歷。' } ] },

  { title: 'a few / a little / few / little', point: 'a few + 可數（有一些）；a little + 不可數（有一點）；少了 a 就變成否定語氣「幾乎沒有」。', examples: [
    { en: 'We have a few samples left.', zh: '我們還剩幾個樣品。' },
    { en: 'There is little time before the deadline.', zh: '距離期限幾乎沒有時間了。' } ] },

  { title: '人稱代名詞：主格與受格', point: '主格當主詞（I, he, she, they）；受格放在動詞或介系詞之後（me, him, her, them）。', examples: [
    { en: 'She trained him last week.', zh: '她上週訓練了他。' },
    { en: 'Please send the report to me.', zh: '請把報告寄給我。' } ] },

  { title: '所有格與所有格代名詞', point: '所有格後面一定接名詞（my, your, his, their）；所有格代名詞單獨使用，後面不接名詞（mine, yours, his, theirs）。', examples: [
    { en: 'Please submit your report by Friday.', zh: '請在星期五前繳交你的報告。' },
    { en: 'This desk is mine; that one is hers.', zh: '這張桌子是我的，那張是她的。' } ] },

  { title: '反身代名詞', point: '主詞與受詞是同一人時使用（myself, yourself, himself, themselves），也可用來強調「親自」。', examples: [
    { en: 'The director introduced himself to the team.', zh: '總監向團隊自我介紹。' },
    { en: 'She wrote the report herself.', zh: '她親自寫了這份報告。' } ] },

  { title: '指示代名詞 this / that / these / those', point: 'this / these 指近的；that / those 指遠的。單數用 this / that，複數用 these / those。', examples: [
    { en: 'These are the files you requested.', zh: '這些是你要的檔案。' },
    { en: 'That model is no longer available.', zh: '那個型號已經沒有了。' } ] },

  { title: 'There is / There are', point: '表示某處「有」某物。單數或不可數用 There is，複數用 There are。', examples: [
    { en: 'There are several openings in our IT department.', zh: '我們資訊部門有幾個職缺。' },
    { en: 'There is a copy machine on each floor.', zh: '每層樓都有一台影印機。' } ] },

  { title: '疑問詞 what / where / when / who / why', point: '疑問詞放句首，後接助動詞或 be 動詞再接主詞。', examples: [
    { en: 'Where do you live?', zh: '你住在哪裡？' },
    { en: 'Why was the meeting canceled?', zh: '會議為什麼取消了？' } ] },

  { title: 'How much / How many / How long', point: 'How much + 不可數或問價格；How many + 可數複數；How long 問時間長度。', examples: [
    { en: 'How many copies do you need?', zh: '你需要幾份影本？' },
    { en: 'How long does the delivery take?', zh: '送貨要多久？' } ] },

  { title: '時間介系詞 in / on / at', point: 'at + 時刻（at 3 P.M.）；on + 星期或日期（on Monday）；in + 月份、年份、季節（in March）。', examples: [
    { en: 'The store opens at 9 A.M. every day.', zh: '這家店每天早上九點開門。' },
    { en: 'The conference will be held in March.', zh: '研討會將在三月舉行。' } ] },

  { title: '地點介系詞 in / on / at', point: 'in + 空間內部（in the office）；on + 平面或樓層（on the desk、on the third floor）；at + 定點（at the front desk）。', examples: [
    { en: 'The meeting room is on the third floor.', zh: '會議室在三樓。' },
    { en: 'Please wait at the front desk.', zh: '請在櫃檯等候。' } ] },

  { title: '其他常用介系詞 to / from / by / with', point: 'to 表方向或對象；from 表來源；by 表方式或期限；with 表工具或伴隨。', examples: [
    { en: 'Please send the file to the client by Friday.', zh: '請在星期五前把檔案寄給客戶。' },
    { en: 'You can pay by credit card.', zh: '您可以用信用卡付款。' } ] },

  { title: '頻率副詞', point: 'always → usually → often → sometimes → seldom → never。位置在 be 動詞「之後」、一般動詞「之前」。多益直接考位置。', examples: [
    { en: 'Mr. Kim is always on time for meetings.', zh: '金先生開會總是準時。' },
    { en: 'We usually place orders on Mondays.', zh: '我們通常在星期一下單。' } ] },

  { title: '形容詞的位置', point: '形容詞放在名詞「之前」，或放在 be、become、seem、look 等連綴動詞「之後」。', examples: [
    { en: 'This is an important announcement.', zh: '這是一則重要公告。' },
    { en: 'The customers seem satisfied.', zh: '顧客們似乎很滿意。' } ] },

  { title: '副詞的形成與位置', point: '多數形容詞加 -ly 變副詞；用來修飾動詞、形容詞或整句。注意例外：hard（努力地）、fast、late 本身就是副詞。', examples: [
    { en: 'Please read the instructions carefully.', zh: '請仔細閱讀說明。' },
    { en: 'The team responded quickly to the request.', zh: '團隊迅速回應了這項請求。' } ] },

  { title: '比較級', point: '短音節加 -er，多音節用 more；比較對象前加 than。不規則：good-better、bad-worse、many-more。', examples: [
    { en: 'This model is cheaper than that one.', zh: '這個型號比那個便宜。' },
    { en: "This year's results are better than last year's.", zh: '今年的業績比去年好。' } ] },

  { title: '最高級', point: '短音節加 -est，多音節用 most，前面通常加 the，後面常接 in / of 表範圍。', examples: [
    { en: 'This is our most popular item.', zh: '這是我們最熱門的商品。' },
    { en: 'He is the youngest member of the team.', zh: '他是團隊裡最年輕的成員。' } ] },

  { title: '同級比較 as ... as', point: 'as + 形容詞／副詞原級 + as，表示「和…一樣…」；否定用 not as / so ... as。', examples: [
    { en: 'This printer is as fast as the old one.', zh: '這台印表機和舊的一樣快。' },
    { en: 'The new plan is not as expensive as we thought.', zh: '新方案沒有我們想的那麼貴。' } ] },

  { title: '祈使句', point: '用原形動詞開頭，主詞 you 省略；否定用 Do not / Don\'t 開頭。多益的說明、公告、郵件指示幾乎都是祈使句。', examples: [
    { en: 'Please complete the form and send it back to us.', zh: '請填妥表格後寄回給我們。' },
    { en: "Don't send the documents to the wrong address.", zh: '別把文件寄錯地址。' } ] },

  { title: '對等連接詞 and / but / or / so', point: 'and 並列、but 轉折、or 選擇、so 表結果。連接的前後成分結構要對等。', examples: [
    { en: 'The flight was delayed, so we missed the meeting.', zh: '班機延誤，所以我們錯過了會議。' },
    { en: 'You may pay by cash or credit card.', zh: '您可以付現或刷卡。' } ] },

  { title: '從屬連接詞 because / when / if', point: 'because 表原因、when 表時間、if 表條件。注意中文的「因為…所以…」在英文只能擇一。', examples: [
    { en: 'She stayed late because she had to finish the report.', zh: '她因為得完成報告而留到很晚。' },
    { en: 'Call me when you arrive at the airport.', zh: '你到機場時打給我。' } ] },

  { title: '動詞後接不定詞 to V', point: 'want、plan、decide、hope、need、agree、would like 之後接 to + 原形動詞。', examples: [
    { en: 'We plan to open a new branch next year.', zh: '我們計畫明年開新分店。' },
    { en: 'She decided to accept the offer.', zh: '她決定接受這份工作。' } ] },

  { title: '動詞後接動名詞 V-ing', point: 'enjoy、finish、avoid、mind、consider、suggest 之後接動名詞；介系詞（in、on、for、to 當介系詞時）之後也接 V-ing。', examples: [
    { en: 'We finished reviewing the contract yesterday.', zh: '我們昨天審完了合約。' },
    { en: 'Thank you for helping us with the event.', zh: '感謝你協助我們辦這場活動。' } ] },

  { title: '詞性與空格位置（詞性題基礎）', point: '看「位置」判斷詞性：冠詞或所有格之後放名詞；名詞之前放形容詞；be 動詞之後放形容詞；動詞或形容詞旁邊放副詞；介系詞之後放名詞或動名詞。', examples: [
    { en: 'Thank you for your cooperation. (所有格 + 名詞)', zh: '感謝您的配合。' },
    { en: 'Please respond immediately. (動詞 + 副詞)', zh: '請立即回覆。' } ] },

  { title: '常見動詞搭配（多益必背）', point: 'attend a meeting（出席會議）、place an order（下訂單）、make a reservation（訂位）、submit a report（繳交報告）、take a message（留言）、reach an agreement（達成協議）。', examples: [
    { en: 'Ms. Chen will attend the sales meeting on Friday.', zh: '陳女士週五會出席業務會議。' },
    { en: 'I would like to make a reservation for two.', zh: '我想訂兩位的位子。' } ] }
];
