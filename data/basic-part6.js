/* 基礎 TOEIC 350-500：Part 6 段落填空
   8 篇短文 × 4 格 = 32 題
   text 內以 ___1___ ~ ___4___ 標示空格位置 */

const BASIC_PART6 = [
  {
    id: 'b6-1',
    label: 'E-mail',
    title: 'Order confirmation',
    text: `Dear Ms. Watson,

Thank you for your recent ___1___. We have received your payment and your items will be shipped tomorrow.

Your package ___2___ arrive within three business days. ___3___ You can track it at any time on our website.

If you have any questions, please ___4___ our customer service team at 555-0177.

Best regards,
Daniel Ortiz
Sales Department`,
    blanks: [
      { options: ['order', 'orders', 'ordering', 'ordered'], answer: 0, explain: '所有格 your 之後接單數名詞 order（訂單）。' },
      { options: ['should', 'shall be', 'is', 'has'], answer: 0, explain: 'should + 原形動詞，表示「應該會…」的預期。' },
      { options: ['A tracking number will be sent to you by e-mail.', 'The store will close early on Friday.', 'We are currently hiring new drivers.', 'Please return the item within 30 days.'], answer: 0, explain: '後一句提到「可以隨時追蹤」，前面應先說明會寄出追蹤號碼。' },
      { options: ['contact', 'contacts', 'contacting', 'to contact'], answer: 0, explain: 'please 之後的祈使句用原形動詞 contact。' }
    ]
  },
  {
    id: 'b6-2',
    label: 'Notice',
    title: 'Elevator maintenance',
    text: `NOTICE TO ALL EMPLOYEES

The elevators in Building B will be closed for ___1___ on Saturday, March 8.

Work will begin at 8 A.M. and ___2___ by 5 P.M. During this time, please use the stairs at the north entrance.

___3___ We apologize for any inconvenience.

Thank you for your ___4___.

Facilities Management`,
    blanks: [
      { options: ['maintenance', 'maintain', 'maintaining', 'maintained'], answer: 0, explain: '介系詞 for 之後接名詞 maintenance（維護）。' },
      { options: ['finish', 'finishes', 'finished', 'finishing'], answer: 0, explain: '與前面的 will begin 並列，共用 will → will finish，用原形動詞。' },
      { options: ['The south entrance will remain open as usual.', 'The company picnic has been canceled.', 'New office chairs have arrived.', 'Parking fees will increase next month.'], answer: 0, explain: '前一句要員工改走北側樓梯，此處補充其他出入口資訊最連貫。' },
      { options: ['cooperation', 'cooperate', 'cooperative', 'cooperatively'], answer: 0, explain: '所有格 your 之後接名詞 cooperation。' }
    ]
  },
  {
    id: 'b6-3',
    label: 'Advertisement',
    title: 'Grand opening sale',
    text: `GRAND OPENING — Harborview Furniture

Our new store on Pine Street ___1___ on May 12.

To celebrate, every item in the store will be sold at a 25% ___2___ during opening week. ___3___

Store hours are 10 A.M. to 8 P.M. daily. Free ___4___ is available for all purchases over $300.

Visit us at 84 Pine Street.`,
    blanks: [
      { options: ['opens', 'open', 'opening', 'to open'], answer: 0, explain: '主詞 Our new store 是單數，用現在簡單式表示既定行程 opens。' },
      { options: ['discount', 'deposit', 'decision', 'direction'], answer: 0, explain: 'at a 25% discount＝以七五折。' },
      { options: ['Members receive an additional 5% off.', 'The factory will be closed for repairs.', 'We are no longer accepting applications.', 'Please submit your report by Friday.'], answer: 0, explain: '前後都在談優惠，補充會員加碼折扣最合理。' },
      { options: ['delivery', 'deliver', 'delivered', 'delivering'], answer: 0, explain: '形容詞 Free 之後接名詞 delivery（送貨）。' }
    ]
  },
  {
    id: 'b6-4',
    label: 'Memo',
    title: 'New office supplies procedure',
    text: `To: All Staff
From: Nina Park, Office Manager
Subject: Ordering office supplies

Starting next Monday, all requests for office supplies ___1___ through the online form.

Please do not send requests by e-mail. ___2___ Requests received by Wednesday will be delivered on Friday.

The form is ___3___ on the company intranet under "Office Services."

Thank you for helping us ___4___ this process.`,
    blanks: [
      { options: ['must be submitted', 'must submit', 'submitting', 'are submitting'], answer: 0, explain: '請求是「被」提交，用被動 must be + p.p.。' },
      { options: ['E-mail requests will no longer be processed.', 'The parking lot will be repaved this month.', 'We have hired two new designers.', 'Coffee is available in the break room.'], answer: 0, explain: '前一句說別用電子郵件，此處說明原因與後果最連貫。' },
      { options: ['available', 'possible', 'capable', 'reliable'], answer: 0, explain: 'be available＝可取得的；表單放在內部網站上供人使用。' },
      { options: ['improve', 'improves', 'improved', 'improvement'], answer: 0, explain: 'help + 受詞 + 原形動詞 → help us improve。' }
    ]
  },
  {
    id: 'b6-5',
    label: 'Letter',
    title: 'Membership renewal',
    text: `Dear Mr. Fujita,

Your membership at Central Fitness ___1___ on June 30.

To continue using the gym, please renew ___2___ July 1. Members who renew early will receive one free month. ___3___

You can renew online or at the front desk. ___4___, please bring a photo ID with you.

Sincerely,
Central Fitness Club`,
    blanks: [
      { options: ['expires', 'expire', 'expiring', 'expired'], answer: 0, explain: '主詞 Your membership 是單數，現在簡單式表既定時間用 expires。' },
      { options: ['before', 'until', 'since', 'during'], answer: 0, explain: '在期限「之前」完成續約用 before；until 表狀態持續。' },
      { options: ['This offer ends on June 25.', 'The pool is being cleaned today.', 'We are looking for new instructors.', 'Lockers are located on the second floor.'], answer: 0, explain: '前一句提到提前續約的優惠，接著說明優惠截止日最合理。' },
      { options: ['If you renew in person', 'Because you renew in person', 'Renew in person', 'In person renewing'], answer: 0, explain: '空格後是完整主句，前面需要 If 引導的條件子句。' }
    ]
  },
  {
    id: 'b6-6',
    label: 'E-mail',
    title: 'Interview invitation',
    text: `Dear Ms. Alvarez,

Thank you for ___1___ for the position of Marketing Assistant.

We were impressed with your résumé and would like to ___2___ you for an interview on Tuesday, April 4, at 10 A.M.

___3___ Please reply to this e-mail to confirm.

The interview will ___4___ about 45 minutes.

Best regards,
Human Resources`,
    blanks: [
      { options: ['applying', 'apply', 'applied', 'application'], answer: 0, explain: '介系詞 for 之後接動名詞 applying。' },
      { options: ['invite', 'invites', 'inviting', 'invited'], answer: 0, explain: 'would like to 之後接原形動詞 invite。' },
      { options: ['The interview will take place at our main office.', 'Your order has been shipped.', 'The store will open at nine.', 'Please pay the invoice by Friday.'], answer: 0, explain: '前面剛提到面試時間，補充面試地點最連貫。' },
      { options: ['last', 'lasts', 'lasting', 'lasted'], answer: 0, explain: '助動詞 will 之後接原形動詞 last（持續）。' }
    ]
  },
  {
    id: 'b6-7',
    label: 'Notice',
    title: 'Cafeteria hours',
    text: `ATTENTION: Cafeteria Schedule Change

Beginning April 1, the employee cafeteria ___1___ open at 7:30 A.M. instead of 8:00 A.M.

This change was made ___2___ many employees start work early. ___3___

The cafeteria will still close at 3:00 P.M. Please note that hot meals are ___4___ served after 2:30 P.M.

Building Services`,
    blanks: [
      { options: ['will', 'is', 'has', 'does'], answer: 0, explain: 'Beginning April 1 表示未來，用 will + 原形動詞 open。' },
      { options: ['because', 'because of', 'although', 'so'], answer: 0, explain: '空格後是完整子句，用連接詞 because。' },
      { options: ['Breakfast items will be available at the earlier time.', 'The gym is closed for renovation.', 'All employees must wear ID badges.', 'The company will hire ten new workers.'], answer: 0, explain: '前面說提早開門，接著說明提早時段供應什麼最連貫。' },
      { options: ['no longer', 'not yet', 'any longer', 'no more'], answer: 0, explain: 'no longer＝不再；置於 be 動詞之後、過去分詞之前。' }
    ]
  },
  {
    id: 'b6-8',
    label: 'E-mail',
    title: 'Delivery delay',
    text: `Dear Customer,

We are writing to inform you that your order ___1___ by two days.

Heavy snow has affected deliveries in your area. ___2___ Your package is now expected to arrive on Thursday, January 18.

We are very ___3___ for the delay.

As an apology, we have added a $10 credit ___4___ your account.

Customer Service Team`,
    blanks: [
      { options: ['has been delayed', 'has delayed', 'is delaying', 'delays'], answer: 0, explain: '訂單是「被」延誤，用現在完成被動 has been + p.p.。' },
      { options: ['Our drivers are working to catch up as quickly as possible.', 'We are opening a new store next month.', 'Please complete the attached survey.', 'The item is currently out of stock.'], answer: 0, explain: '前一句說明延誤原因，接著說明處理方式最連貫。' },
      { options: ['sorry', 'sorrow', 'sorrier', 'sorrily'], answer: 0, explain: 'be very sorry for＝對…感到很抱歉；be 動詞後接形容詞。' },
      { options: ['to', 'for', 'at', 'with'], answer: 0, explain: 'add something to your account＝加到您的帳戶中。' }
    ]
  },
  {
    id: 'b6-9', label: 'Notice', title: 'Fitness class schedule',
    text: `NOTICE — Riverside Fitness Center

Beginning May 1, the Tuesday evening yoga class ___1___ from 6:00 P.M. to 7:00 P.M.

The change was requested by many members who finish work at 5:30. ___2___

Members who cannot attend at the new time may switch to the Thursday class at no ___3___ cost.

Please speak to the front desk if you ___4___ to change your registration.`,
    blanks: [
      { options: ['will move', 'moves', 'moved', 'is moved'], answer: 0, explain: 'Beginning May 1 指未來，用 will + 原形動詞。' },
      { options: ['The earlier time should make it easier to attend after work.', 'The pool will be closed for cleaning.', 'New towels have been ordered.', 'Parking is free on weekends.'], answer: 0, explain: '前一句說明改時間的原因，此句延續同一理由最連貫。' },
      { options: ['additional', 'addition', 'additionally', 'add'], answer: 0, explain: '修飾名詞 cost 要用形容詞 additional。' },
      { options: ['wish', 'wishes', 'wishing', 'wished'], answer: 0, explain: '主詞 you 在現在簡單式用原形動詞 wish。' }
    ]
  },
  {
    id: 'b6-10', label: 'E-mail', title: 'Job offer follow-up',
    text: `Dear Ms. Reyes,

We are pleased to ___1___ you the position of Office Assistant at Bellwood Insurance.

Your starting date would be June 5, and your salary ___2___ be $42,000 per year.

___3___ Please review it carefully before signing.

We would appreciate your ___4___ by May 25.

Sincerely,
Human Resources`,
    blanks: [
      { options: ['offer', 'offers', 'offering', 'offered'], answer: 0, explain: 'be pleased to 之後接原形動詞 offer。' },
      { options: ['would', 'will to', 'is', 'has'], answer: 0, explain: '與前面的 would be 語氣一致，用 would + 原形動詞 be。' },
      { options: ['A full contract is attached to this e-mail.', 'The office will close for the holidays.', 'We have three branches in the region.', 'Parking permits cost $20 per month.'], answer: 0, explain: '後一句說「請仔細閱讀後簽名」，前面必須先提到附上的合約。' },
      { options: ['reply', 'replies', 'replied', 'replying'], answer: 0, explain: '所有格 your 之後接名詞 reply。' }
    ]
  },
  {
    id: 'b6-11', label: 'Advertisement', title: 'New restaurant opening',
    text: `NOW OPEN — Casa Verde

Casa Verde, a new family restaurant, is now ___1___ on Adams Street.

We serve fresh Mexican food made with ___2___ ingredients from local farms.

___3___ Groups of six or more should call ahead.

Show this advertisement to receive a free dessert ___4___ your first visit.

Open daily, 11 A.M. to 10 P.M.`,
    blanks: [
      { options: ['open', 'opens', 'opened', 'opening'], answer: 0, explain: 'is now open＝現已開幕；be 動詞後接形容詞 open。' },
      { options: ['fresh', 'freshly', 'freshness', 'fresher'], answer: 0, explain: '修飾名詞 ingredients 要用形容詞 fresh。' },
      { options: ['Reservations are not required for small parties.', 'The kitchen equipment was installed last week.', 'Our chef trained in Rome for five years.', 'Delivery is not currently available.'], answer: 0, explain: '後一句說六人以上要先來電，前面先講小桌不必訂位最連貫。' },
      { options: ['on', 'in', 'at', 'for'], answer: 0, explain: 'on your first visit＝在您首次光臨時。' }
    ]
  },
  {
    id: 'b6-12', label: 'Notice', title: 'Package pickup',
    text: `TO ALL RESIDENTS

Packages that ___1___ be delivered to your door are now held in the mailroom.

The mailroom is open from 7 A.M. to 9 P.M. ___2___

Please bring a photo ID when you ___3___ your package.

Items not collected ___4___ 14 days will be returned to the sender.

Building Management`,
    blanks: [
      { options: ['cannot', 'can', 'must', 'should'], answer: 0, explain: '無法送到門口的包裹才會放在收發室，用 cannot。' },
      { options: ['A staff member is present during those hours.', 'The elevator will be repaired in June.', 'Rent is due on the first of each month.', 'Pets are not allowed in the lobby.'], answer: 0, explain: '前一句講開放時間，補充該時段有人員值班最連貫。' },
      { options: ['collect', 'collects', 'collecting', 'collected'], answer: 0, explain: '主詞 you 用原形動詞 collect。' },
      { options: ['within', 'during', 'since', 'between'], answer: 0, explain: 'within 14 days＝在 14 天之內。' }
    ]
  },
  {
    id: 'b6-13', label: 'E-mail', title: 'Software update',
    text: `Dear User,

A new version of TaskPoint ___1___ available on March 12.

The update includes a faster search tool and a ___2___ design for mobile phones.

___3___ Your files and settings will not be affected.

If you have any problems after ___4___, please contact support@taskpoint.com.

The TaskPoint Team`,
    blanks: [
      { options: ['will be', 'will', 'is being', 'has'], answer: 0, explain: '未來時間 March 12，用 will be + 形容詞 available。' },
      { options: ['new', 'newly', 'newness', 'news'], answer: 0, explain: '修飾名詞 design 要用形容詞 new。' },
      { options: ['The update will install automatically overnight.', 'Our office moved to a new building.', 'The company was founded in 2015.', 'Printing is not supported on tablets.'], answer: 0, explain: '後一句說檔案與設定不受影響，前面先講會自動安裝最連貫。' },
      { options: ['updating', 'update', 'updated', 'to update'], answer: 0, explain: '介系詞 after 之後接動名詞 updating。' }
    ]
  },
  {
    id: 'b6-14', label: 'E-mail', title: 'Team lunch invitation',
    text: `Hi everyone,

To celebrate the end of the Hartley project, we ___1___ a team lunch on Friday at noon.

The restaurant is Milano Grill, ___2___ is just two blocks from the office.

___3___ Please let me know by Wednesday so I can book the right number of seats.

The company ___4___ pay for the meal.

Thanks,
Sofia`,
    blanks: [
      { options: ['are having', 'have', 'had', 'has'], answer: 0, explain: '已排定的近期計畫可用現在進行式表未來 are having。' },
      { options: ['which', 'who', 'what', 'where'], answer: 0, explain: '先行詞是事物 Milano Grill 且關代當主詞，用 which。' },
      { options: ['Let me know if you have any food allergies.', 'The project deadline has been extended.', 'New computers arrived this morning.', 'The parking garage is now full.'], answer: 0, explain: '後一句要大家在週三前回覆以便訂位，此句同屬「請回覆」的資訊。' },
      { options: ['will', 'is', 'does', 'has'], answer: 0, explain: '表示未來將支付，用 will + 原形動詞 pay。' }
    ]
  },
  {
    id: 'b6-15', label: 'Advertisement', title: 'Store closing sale',
    text: `CLOSING SALE — Corner Books

After 22 years on Main Street, Corner Books ___1___ its doors on June 30.

Everything in the store is now ___2___ at 40% off.

___3___ We thank our customers for their support over the years.

All sales are final, and gift cards must be used ___4___ the closing date.`,
    blanks: [
      { options: ['will close', 'closes to', 'is closed', 'has closed'], answer: 0, explain: '未來的結束日 June 30，用 will + 原形動詞 close。' },
      { options: ['priced', 'price', 'pricing', 'prices'], answer: 0, explain: '商品「被」定價，用 be priced at＝以…價格出售。' },
      { options: ['Shelves and display cases are also for sale.', 'A new branch will open downtown.', 'The store opens at 10 A.M. on Sundays.', 'Online orders take three days.'], answer: 0, explain: '結束營業時連貨架也出售，與清倉主題一致；其他選項與收攤矛盾。' },
      { options: ['before', 'until', 'since', 'during'], answer: 0, explain: '禮券須在結束日「之前」使用完畢，用 before。' }
    ]
  },
  {
    id: 'b6-16', label: 'E-mail', title: 'Password reset',
    text: `Dear Member,

We received a request to reset the password ___1___ your account.

Click the link below to create a new password. The link ___2___ in 30 minutes.

___3___ Your current password will remain active.

For your ___4___, never share your password with anyone.

Account Services`,
    blanks: [
      { options: ['for', 'to', 'with', 'about'], answer: 0, explain: 'the password for your account＝您帳戶的密碼。' },
      { options: ['expires', 'expire', 'expiring', 'is expired'], answer: 0, explain: '主詞 The link 是單數，現在簡單式用 expires。' },
      { options: ['If you did not make this request, please ignore this e-mail.', 'Our new app is available for download.', 'Membership fees increase in January.', 'The office is closed on public holidays.'], answer: 0, explain: '後一句說目前密碼仍有效，前面必須先講「若非本人申請」的情況。' },
      { options: ['security', 'secure', 'securely', 'secured'], answer: 0, explain: '所有格 your 之後接名詞 security。' }
    ]
  },
  {
    id: 'b6-17', label: 'Notice', title: 'Bus route change',
    text: `PASSENGER NOTICE — Route 14

Starting Monday, September 4, Route 14 ___1___ serve the Oak Park stop.

Construction on Oak Avenue has made the street too narrow for buses. ___2___

Passengers should use the Pine Street stop ___3___, which is a five-minute walk away.

We expect normal service ___4___ in early November.

City Transit`,
    blanks: [
      { options: ['will not', 'does not', 'has not', 'is not'], answer: 0, explain: '未來的變動用 will not + 原形動詞 serve。' },
      { options: ['The stop will remain closed until the work is finished.', 'Fares will increase by 25 cents.', 'All buses now accept credit cards.', 'The depot is located on Third Street.'], answer: 0, explain: '前一句說明停靠站取消的原因，此句補充恢復條件最連貫。' },
      { options: ['instead', 'however', 'besides', 'therefore'], answer: 0, explain: 'instead＝改用（替代方案），符合改到 Pine Street 搭車的語意。' },
      { options: ['to resume', 'resume', 'resuming', 'resumed'], answer: 0, explain: 'expect + 受詞 + to V。' }
    ]
  },
  {
    id: 'b6-18', label: 'E-mail', title: 'Customer survey request',
    text: `Dear Ms. Park,

Thank you for shopping at Willow Home Goods last week.

We would like to know ___1___ you were satisfied with your visit.

The survey below takes about three minutes ___2___.

___3___ Your name will not be attached to your answers.

As a thank-you, we will send you a $5 coupon ___4___ you complete the survey.`,
    blanks: [
      { options: ['whether', 'that', 'what', 'which'], answer: 0, explain: '表示「是否」的名詞子句用 whether。' },
      { options: ['to complete', 'completing', 'complete', 'completed'], answer: 0, explain: 'It takes + 時間 + to V 的結構，此處用不定詞 to complete。' },
      { options: ['All responses are completely anonymous.', 'The store will close for renovation.', 'We opened our first shop in 2008.', 'Delivery takes five business days.'], answer: 0, explain: '後一句說姓名不會附在答案上，前面先說明匿名性最連貫。' },
      { options: ['after', 'before', 'unless', 'although'], answer: 0, explain: '完成問卷「之後」才寄出優惠券，用 after。' }
    ]
  },
  {
    id: 'b6-19', label: 'Memo', title: 'New printer instructions',
    text: `To: All Staff
From: IT Support
Subject: New printers on floors 3 and 4

The old printers ___1___ with new models this week.

To print, you must now ___2___ your employee badge on the reader before the job starts.

___3___ This change is designed to reduce the number of pages left uncollected.

If your badge does not work, please ___4___ IT at extension 220.`,
    blanks: [
      { options: ['have been replaced', 'have replaced', 'are replacing', 'replace'], answer: 0, explain: '舊印表機是「被」更換，用現在完成被動 have been + p.p.。' },
      { options: ['scan', 'scans', 'scanning', 'scanned'], answer: 0, explain: '助動詞 must 之後接原形動詞 scan。' },
      { options: ['Documents are held in the queue until you arrive at the printer.', 'The cafeteria now opens at 7:30 A.M.', 'Annual reviews will begin in November.', 'Visitors must sign in at reception.'], answer: 0, explain: '後一句說目的是減少無人領取的列印，前面先說明機制最連貫。' },
      { options: ['contact', 'contacts', 'contacting', 'contacted'], answer: 0, explain: 'please 開頭的祈使句用原形動詞 contact。' }
    ]
  },
  {
    id: 'b6-20', label: 'Letter', title: 'Library card renewal',
    text: `Dear Mr. Osei,

Our records show that your library card ___1___ on August 31.

To renew it, please visit any branch with a photo ID and a document ___2___ your current address.

___3___ Renewal is free for all city residents.

If your card is not renewed ___4___ September 30, your account will be closed.

Riverside Public Library`,
    blanks: [
      { options: ['expires', 'expire', 'expired', 'is expiring'], answer: 0, explain: '主詞 your library card 是單數，現在簡單式表既定日期用 expires。' },
      { options: ['showing', 'shows', 'show', 'showed'], answer: 0, explain: '＝a document that shows…，簡化為現在分詞 showing。' },
      { options: ['You may also renew online if your address has not changed.', 'The library will host a book fair in June.', 'Late fees are 25 cents per day.', 'Our meeting rooms can be reserved.'], answer: 0, explain: '前一句講臨櫃續辦，此句補充另一種續辦方式最連貫。' },
      { options: ['by', 'until', 'since', 'during'], answer: 0, explain: '期限前完成用 by；until 表狀態持續。' }
    ]
  },
  {
    id: 'b6-21', label: 'Announcement', title: 'Weather closure',
    text: `URGENT — Office Closure

Due to the snowstorm, the Fairview office ___1___ closed on Thursday, January 18.

All employees should work from home if ___2___.

___3___ Managers will contact their teams by 8:00 A.M. with instructions.

We will announce Friday's status ___4___ Thursday evening.

Please stay safe.`,
    blanks: [
      { options: ['will be', 'will', 'has', 'is being'], answer: 0, explain: '週四是未來，且辦公室是「被」關閉，用 will be + p.p./adj。' },
      { options: ['possible', 'possibly', 'possibility', 'possibilities'], answer: 0, explain: 'if possible＝如果可以的話，是固定省略句型。' },
      { options: ['Staff who cannot work remotely will still be paid for the day.', 'The parking garage was repaved last summer.', 'New uniforms will arrive in March.', 'The cafeteria menu changes weekly.'], answer: 0, explain: '前一句講在家上班，此句照顧無法遠距的員工，語意相承。' },
      { options: ['on', 'in', 'at', 'by'], answer: 0, explain: '特定某天的晚上用 on Thursday evening。' }
    ]
  },
  {
    id: 'b6-22', label: 'Web page', title: 'Hotel check-in information',
    text: `BEFORE YOU ARRIVE

Check-in begins at 3:00 P.M. If you arrive earlier, we ___1___ store your luggage at no charge.

Guests must present the credit card ___2___ to make the booking.

___3___ Please inform us in advance if you expect to arrive after 11:00 P.M.

Breakfast is served ___4___ 6:30 and 10:00 A.M. in the ground-floor dining room.`,
    blanks: [
      { options: ['can', 'must', 'should', 'would'], answer: 0, explain: '提供可行的服務用 can（我們可以幫您寄放行李）。' },
      { options: ['used', 'using', 'use', 'uses'], answer: 0, explain: '＝the credit card that was used…，簡化為過去分詞 used。' },
      { options: ['The front desk is staffed 24 hours a day.', 'The pool closes at 8:00 P.M.', 'Room service is available until midnight.', 'Parking costs $15 per night.'], answer: 0, explain: '後一句提到深夜抵達要事先告知，前面先講櫃檯 24 小時有人最連貫。' },
      { options: ['between', 'from', 'during', 'within'], answer: 0, explain: 'between A and B＝在 A 與 B 之間。' }
    ]
  },
  {
    id: 'b6-23', label: 'Notice', title: 'Volunteer recruitment',
    text: `VOLUNTEERS NEEDED — Harbor Cleanup Day

The Harbor Cleanup takes place on Saturday, April 20, and we ___1___ 60 volunteers.

No experience is ___2___. Gloves, bags, and tools will be provided.

___3___ Volunteers should wear closed shoes and bring a water bottle.

To sign up, ___4___ the form at harborcleanup.org by April 15.`,
    blanks: [
      { options: ['need', 'needs', 'needing', 'to need'], answer: 0, explain: '主詞 we 用原形動詞 need。' },
      { options: ['necessary', 'necessarily', 'necessity', 'necessitate'], answer: 0, explain: 'be 動詞之後接形容詞 necessary。' },
      { options: ['The work involves walking on uneven ground.', 'The harbor was built in 1912.', 'Parking downtown is limited on weekdays.', 'Lunch will be served at the town hall.'], answer: 0, explain: '後一句要志工穿包鞋，前面先說明地面不平的工作環境最連貫。' },
      { options: ['complete', 'completes', 'completing', 'completed'], answer: 0, explain: '祈使句用原形動詞 complete。' }
    ]
  },
  {
    id: 'b6-24', label: 'Letter', title: 'Product recall',
    text: `Dear Customer,

We are contacting you about the Model K7 electric kettle, ___1___ you purchased in the past six months.

Some units have a faulty switch that may cause the kettle ___2___ overheat.

___3___ Please stop using the product immediately.

Bring the kettle to any store for a full refund, ___4___ a receipt is not required.

Northline Appliances`,
    blanks: [
      { options: ['which', 'who', 'what', 'whose'], answer: 0, explain: '先行詞是事物且關代在子句中當受詞，用 which。' },
      { options: ['to', 'for', 'of', 'that'], answer: 0, explain: 'cause + 受詞 + to V＝導致某物做某事。' },
      { options: ['No injuries have been reported so far.', 'Our stores open at 9 A.M. daily.', 'The Model K8 will launch in July.', 'Shipping is free on orders over $50.'], answer: 0, explain: '召回通知先說明尚無傷害案例，再要求停止使用，語氣與內容都連貫。' },
      { options: ['and', 'but', 'so', 'or'], answer: 0, explain: '兩個並列的正面訊息（可全額退款、且不需收據），用 and。' }
    ]
  },
  {
    id: 'b6-25', label: 'Memo', title: 'Office relocation',
    text: `To: All Staff
From: Operations
Subject: Move to the Kingsway building

Our office ___1___ to 400 Kingsway on the weekend of October 14.

Each employee will receive two boxes ___2___ packing personal items.

___3___ Anything left on desks after Friday will not be moved.

The new office is ___4___ walking distance of the train station.`,
    blanks: [
      { options: ['will move', 'moves to', 'is moved', 'has moved'], answer: 0, explain: '未來的搬遷，用 will + 原形動詞 move。' },
      { options: ['for', 'to', 'of', 'with'], answer: 0, explain: 'boxes for packing＝用來打包的箱子，介系詞 for 表用途。' },
      { options: ['Please label each box with your name and new desk number.', 'The cafeteria will add a salad bar.', 'Our company was founded in 1998.', 'Visitors must wear a badge at all times.'], answer: 0, explain: '前後都在談打包與搬運，此句補充標示規則最連貫。' },
      { options: ['within', 'inside', 'among', 'between'], answer: 0, explain: 'within walking distance of＝步行可達，是固定片語。' }
    ]
  }
];
