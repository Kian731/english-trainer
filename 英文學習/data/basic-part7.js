/* 基礎 TOEIC 350-500：Part 7 閱讀理解
   單篇 5 組 × 3 題 + 雙篇 2 組 × 5 題 + 三篇 1 組 × 5 題 = 30 題 */

const BASIC_PART7 = [
  /* ─────────── 單篇 ─────────── */
  {
    id: 'b7-1', kind: 'single',
    docs: [{ label: 'Notice', text: `RIVERSIDE PUBLIC LIBRARY
Holiday Hours

The library will be closed from December 24 to December 26.

We will reopen on December 27 at 10:00 A.M. with regular hours:
Monday to Friday: 10:00 A.M. – 8:00 P.M.
Saturday: 10:00 A.M. – 5:00 P.M.
Sunday: closed

Books due during the closure may be returned by January 3 without a late fee. The outdoor book drop box will remain open at all times.

Questions? Call 555-0142.` }],
    questions: [
      { q: 'How many days will the library be closed?', options: ['Two days', 'Three days', 'Four days', 'One week'], answer: 1, explain: '12 月 24、25、26 日共三天，27 日重新開放。' },
      { q: 'What is indicated about books due during the closure?', options: ['They cannot be renewed.', 'They must be returned by December 24.', 'No late fee will be charged until January 3.', 'They will be donated to another library.'], answer: 2, explain: '公告寫 may be returned by January 3 without a late fee。' },
      { q: 'What is available while the library is closed?', options: ['The outdoor book drop box', 'The reading room', 'The computer lab', 'The information desk'], answer: 0, explain: '最後提到 book drop box will remain open at all times。' }
    ]
  },
  {
    id: 'b7-2', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: All Staff
From: Karen Diaz, Office Manager
Date: September 5
Subject: Parking garage repairs

Dear colleagues,

The parking garage will be repaired from September 11 to September 15. During those five days, the garage will be completely closed.

Employees may park for free in the public lot on Maple Street. Please show your employee badge to the attendant when you enter.

The walk from the Maple Street lot takes about eight minutes. If you usually arrive at 9:00 A.M., we suggest leaving home a little earlier that week.

Thank you for your patience.

Karen` }],
    questions: [
      { q: 'What is the purpose of the e-mail?', options: ['To announce a temporary parking change', 'To introduce a new office manager', 'To invite staff to a company event', 'To request payment for parking fees'], answer: 0, explain: '全文在說明維修期間停車安排的暫時變動。' },
      { q: 'What should employees show at the Maple Street lot?', options: ['A parking receipt', 'An employee badge', 'A driver\'s license', 'A printed e-mail'], answer: 1, explain: '信中寫 Please show your employee badge to the attendant。' },
      { q: 'What does Ms. Diaz suggest employees do?', options: ['Take public transportation', 'Work from home that week', 'Leave home earlier than usual', 'Share rides with colleagues'], answer: 2, explain: '最後建議 we suggest leaving home a little earlier that week。' }
    ]
  },
  {
    id: 'b7-3', kind: 'single',
    docs: [{ label: 'Advertisement', text: `SUNRISE CAFÉ — Now Hiring

We are looking for a part-time server for our downtown location.

Hours: Monday, Wednesday, Friday, 7:00 A.M. – 1:00 P.M.
Pay: $14 per hour plus tips
Start date: October 2

Requirements:
• At least six months of restaurant experience
• Able to work early mornings
• Friendly and reliable

Free lunch is provided on every shift. Uniforms are supplied by the café.

To apply, bring your résumé to 22 Grove Street between 2:00 P.M. and 4:00 P.M. any weekday. Please do not apply by e-mail.` }],
    questions: [
      { q: 'How many days per week will the server work?', options: ['Two', 'Three', 'Five', 'Six'], answer: 1, explain: '星期一、三、五共三天。' },
      { q: 'What is NOT mentioned as a benefit?', options: ['Free lunch', 'Uniforms', 'Health insurance', 'Tips'], answer: 2, explain: '廣告提到免費午餐、制服與小費，未提及健康保險。' },
      { q: 'How should applicants apply?', options: ['By sending an e-mail', 'By calling the café', 'By visiting in person in the afternoon', 'By filling out an online form'], answer: 2, explain: '要求下午 2 到 4 點親自帶履歷前往，且明說不接受電子郵件。' }
    ]
  },
  {
    id: 'b7-4', kind: 'single',
    docs: [{ label: 'Text message chain', text: `Marco Silva (8:42 A.M.)
Hi Amy, I'm stuck in traffic on Route 9. I might be 20 minutes late to the client meeting.

Amy Chen (8:44 A.M.)
No problem. The client just called and asked to start at 10:00 instead of 9:30.

Marco Silva (8:45 A.M.)
That's a relief. Do you have the printed samples?

Amy Chen (8:47 A.M.)
I have them in the car. I'll set up the meeting room before you arrive.

Marco Silva (8:48 A.M.)
Perfect. See you soon.` }],
    questions: [
      { q: 'Why does Mr. Silva send the first message?', options: ['To cancel a meeting', 'To explain that he may arrive late', 'To ask for the client\'s address', 'To request printed samples'], answer: 1, explain: '他說塞車，可能會晚 20 分鐘到。' },
      { q: 'At 8:45 A.M., what does Mr. Silva mean when he writes, "That\'s a relief"?', options: ['He is glad the meeting was moved to a later time.', 'He is happy the traffic has cleared.', 'He is pleased the client canceled.', 'He is relieved that Amy will attend alone.'], answer: 0, explain: '前一則說會議改到 10 點，晚開始正好解決他遲到的問題。' },
      { q: 'What will Ms. Chen do next?', options: ['Print more samples', 'Call the client again', 'Prepare the meeting room', 'Drive to pick up Mr. Silva'], answer: 2, explain: '她說 I\'ll set up the meeting room before you arrive。' }
    ]
  },
  {
    id: 'b7-5', kind: 'single',
    docs: [{ label: 'Notice', text: `WESTPORT COMMUNITY CENTER
Spring Class Registration

Registration for spring classes opens on February 10.

Available classes:
Beginner Spanish — Tuesdays, 6:00 P.M., $60
Digital Photography — Thursdays, 7:00 P.M., $85
Watercolor Painting — Saturdays, 10:00 A.M., $70

All classes run for eight weeks starting March 5. Class size is limited to 12 students.

Residents of Westport receive a $10 discount on any class. Proof of address is required.

Register online at westportcc.org or in person at the front desk.` }],
    questions: [
      { q: 'When do the classes begin?', options: ['February 10', 'March 5', 'March 12', 'April 5'], answer: 1, explain: '公告寫 eight weeks starting March 5。' },
      { q: 'How much would a Westport resident pay for Digital Photography?', options: ['$60', '$70', '$75', '$85'], answer: 2, explain: '$85 減去居民折扣 $10 等於 $75。' },
      { q: 'What is required to receive the discount?', options: ['A membership card', 'Proof of address', 'Payment in cash', 'Online registration'], answer: 1, explain: '公告寫 Proof of address is required。' }
    ]
  },

  {
    id: 'b7-9', kind: 'single',
    docs: [{ label: 'Notice', text: `MAPLE COURT APARTMENTS
Water Shut-Off

Water will be shut off in Buildings A and B on Wednesday, July 12, from 9:00 A.M. to 2:00 P.M. so that the main valve can be replaced.

Residents are advised to fill containers with drinking water the night before.

Building C is not affected.

If the work finishes early, water will be restored without further notice. If it takes longer, a notice will be posted in each lobby by 2:00 P.M.

Questions: call the office at 555-0198.` }],
    questions: [
      { q: 'Why will the water be shut off?', options: ['To clean the water tanks', 'To replace the main valve', 'To repair a leak in Building C', 'To test the fire system'], answer: 1, explain: '公告寫 so that the main valve can be replaced。' },
      { q: 'What are residents advised to do?', options: ['Leave the building', 'Store drinking water in advance', 'Turn off their heaters', 'Move their cars'], answer: 1, explain: '建議前一晚先裝好飲用水。' },
      { q: 'What will happen if the work is delayed?', options: ['Residents will be moved to Building C.', 'The work will be canceled.', 'A notice will be posted in the lobbies.', 'Water will be delivered to each apartment.'], answer: 2, explain: '若超時，下午兩點前會在各大廳張貼公告。' }
    ]
  },
  {
    id: 'b7-10', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: All Sales Staff
From: Diego Martins, Sales Director
Date: March 2
Subject: New expense forms

Team,

Starting this month, please use the new expense form attached to this e-mail. The old paper form will no longer be accepted after March 31.

The new form calculates totals automatically, so please do not enter the total yourself.

Receipts must be photographed and attached. Photos taken with a phone are fine as long as the date and amount are readable.

Submit completed forms to me, not to Finance. I will review them and forward approved forms every Friday.

Diego` }],
    questions: [
      { q: 'What will happen after March 31?', options: ['The new form will be replaced.', 'Paper forms will no longer be accepted.', 'Expenses will be paid weekly.', 'Receipts will not be required.'], answer: 1, explain: '信中寫舊紙本表格 3 月 31 日後不再受理。' },
      { q: 'What are staff told NOT to do?', options: ['Attach photographs of receipts', 'Use a phone camera', 'Enter the total amount', 'Submit forms to Mr. Martins'], answer: 2, explain: '表格會自動計算總額，請勿自行填入。' },
      { q: 'Who should receive the completed forms?', options: ['The Finance department', 'Mr. Martins', 'The team assistant', 'The regional office'], answer: 1, explain: '信中明說交給他本人而非財務部。' }
    ]
  },
  {
    id: 'b7-11', kind: 'single',
    docs: [{ label: 'Advertisement', text: `GREENFIELD GARDEN CENTER
Spring Workshop Series

Join our free weekend workshops and learn from experienced gardeners.

March 18 — Starting Seeds Indoors
March 25 — Choosing the Right Soil
April 1 — Container Gardening for Small Spaces
April 8 — Pruning Fruit Trees

All workshops run from 10:00 A.M. to 11:30 A.M. in the greenhouse behind the main store.

Workshops are free, but space is limited to 20 people. Sign up at the register or by phone.

Participants receive a 10% discount on any purchase made that day.` }],
    questions: [
      { q: 'How long does each workshop last?', options: ['One hour', 'An hour and a half', 'Two hours', 'Half a day'], answer: 1, explain: '10:00 到 11:30，共一個半小時。' },
      { q: 'Where do the workshops take place?', options: ['In the main store', 'In the greenhouse', 'In the parking lot', 'At the community center'], answer: 1, explain: '廣告寫在主店後方的溫室。' },
      { q: 'What do participants receive?', options: ['A free plant', 'A printed guide', 'A discount on purchases that day', 'A membership card'], answer: 2, explain: '參加者當日消費可享 10% 折扣。' }
    ]
  },
  {
    id: 'b7-12', kind: 'single',
    docs: [{ label: 'Text message chain', text: `Tara Wells (4:12 P.M.)
Hi Sam, the client wants to move tomorrow's site visit from 9 A.M. to 1 P.M.

Sam Ito (4:15 P.M.)
That works for me, but the equipment truck is booked for the morning slot.

Tara Wells (4:16 P.M.)
Can we push the truck to the afternoon too?

Sam Ito (4:19 P.M.)
I'll call the depot. They usually need 24 hours' notice, so it may cost extra.

Tara Wells (4:20 P.M.)
Try anyway. If they say no, we keep 9 A.M. and I'll tell the client.

Sam Ito (4:31 P.M.)
Good news — they moved it. No extra charge this time.` }],
    questions: [
      { q: 'What does the client want to change?', options: ['The location of the visit', 'The time of the visit', 'The number of participants', 'The equipment being used'], answer: 1, explain: '客戶想把工地參訪從上午 9 點改到下午 1 點。' },
      { q: 'What was the problem with the change?', options: ['The client was unavailable.', 'The equipment truck was booked for the morning.', 'Sam had another meeting.', 'The site was closed in the afternoon.'], answer: 1, explain: 'Sam 說設備卡車已排在上午時段。' },
      { q: 'What happened in the end?', options: ['The visit stayed at 9 A.M.', 'The truck booking was moved at no extra cost.', 'The depot charged an additional fee.', 'The visit was postponed to another day.'], answer: 1, explain: '最後一則說調動成功且這次不加價。' }
    ]
  },
  {
    id: 'b7-13', kind: 'single',
    docs: [{ label: 'Article', text: `Bike Lanes Coming to Third Avenue

FAIRVIEW — Construction on protected bike lanes along Third Avenue will begin on May 8 and is expected to take ten weeks.

During construction, Third Avenue will be reduced to one lane in each direction between Oak and Pine Streets. City officials recommend that drivers use Fourth Avenue instead.

The project will add 2.4 kilometers of bike lanes separated from traffic by concrete barriers.

Local business owners have expressed mixed views. "Parking will be tighter, and that worries me," said café owner Renata Diaz. "But more people on bikes may mean more people stopping in."

The project is funded by a state transportation grant and will not affect city property taxes.` }],
    questions: [
      { q: 'How long is the construction expected to take?', options: ['Eight weeks', 'Ten weeks', 'Twelve weeks', 'Six months'], answer: 1, explain: '文中寫 expected to take ten weeks。' },
      { q: 'What are drivers advised to do?', options: ['Use Fourth Avenue', 'Avoid driving during rush hour', 'Park on Oak Street', 'Take public transportation'], answer: 0, explain: '市府建議改走第四大道。' },
      { q: 'What is Ms. Diaz\'s view?', options: ['She strongly opposes the project.', 'She sees both a drawback and a possible benefit.', 'She believes it will not affect her business.', 'She wants the project to be funded locally.'], answer: 1, explain: '她擔心停車變緊，但也認為騎車的人可能會順道消費。' }
    ]
  },
  {
    id: 'b7-14', kind: 'single',
    docs: [{ label: 'Notice', text: `EMPLOYEE PARKING — PERMIT RENEWAL

All parking permits expire on December 31. New permits for next year are now available.

To renew:
1. Complete the form on the staff portal.
2. Pay the annual fee of $120 (payroll deduction available).
3. Pick up your permit sticker at the security desk from December 15.

Permits are assigned by lot section, not by individual space. Sections are allocated by length of service.

Employees who do not renew by January 5 will lose their assigned section and must reapply from the waiting list.` }],
    questions: [
      { q: 'What is the annual permit fee?', options: ['$100', '$115', '$120', '$150'], answer: 2, explain: '公告寫 annual fee of $120。' },
      { q: 'How are parking sections assigned?', options: ['By department', 'By length of service', 'By arrival time', 'By vehicle size'], answer: 1, explain: 'Sections are allocated by length of service。' },
      { q: 'What happens to employees who renew after January 5?', options: ['They pay a late fee.', 'They keep their section.', 'They must reapply from the waiting list.', 'They receive a temporary permit.'], answer: 2, explain: '逾期者失去原分區，須從候補名單重新申請。' }
    ]
  },
  {
    id: 'b7-15', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: c.nakashima@brightpath.com
From: reservations@lakesideinn.com
Date: October 3
Subject: Booking confirmation — #22841

Dear Ms. Nakashima,

Thank you for booking with Lakeside Inn.

Confirmation number: 22841
Check-in: October 20, after 3:00 P.M.
Check-out: October 23, before 11:00 A.M.
Room: Double, garden view
Rate: $135 per night

Breakfast is included in your rate. The dining room serves from 7:00 to 10:00 A.M.

Free cancellation is available until October 17. After that date, one night's rate will be charged.

We look forward to welcoming you.

Lakeside Inn Reservations` }],
    questions: [
      { q: 'How many nights will Ms. Nakashima stay?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1, explain: '10 月 20 日入住、23 日退房，共三晚。' },
      { q: 'What is included in the rate?', options: ['Airport transfer', 'Breakfast', 'Parking', 'Dinner'], answer: 1, explain: '信中寫 Breakfast is included in your rate。' },
      { q: 'What happens if she cancels on October 18?', options: ['She receives a full refund.', 'She will be charged one night\'s rate.', 'She will be charged the full stay.', 'The booking is automatically extended.'], answer: 1, explain: '10 月 17 日後取消收取一晚房費。' }
    ]
  },
  {
    id: 'b7-16', kind: 'single',
    docs: [{ label: 'Web page', text: `HILLTOP MUSEUM — Plan Your Visit

Hours
Tuesday to Sunday: 10:00 A.M. – 5:00 P.M.
Closed Mondays and public holidays

Admission
Adults $12 | Students and seniors $8 | Children under 12 free
Free admission for everyone on the first Thursday of each month

Guided tours run at 11:00 A.M. and 2:00 P.M. and last about 50 minutes. Tours are included with admission but must be reserved at the front desk on the day of your visit.

Photography without flash is permitted in all galleries except the textile room.` }],
    questions: [
      { q: 'When is the museum closed?', options: ['Sundays', 'Mondays', 'Thursdays', 'Weekends'], answer: 1, explain: '網頁寫 Closed Mondays and public holidays。' },
      { q: 'How much would two adults and one 10-year-old pay?', options: ['$12', '$20', '$24', '$32'], answer: 2, explain: '成人 $12 × 2 = $24；12 歲以下免費。' },
      { q: 'What is stated about guided tours?', options: ['They cost an extra $5.', 'They must be booked online in advance.', 'They are included but require same-day reservation.', 'They are offered only on weekends.'], answer: 2, explain: '導覽含在門票內，但須當天在櫃檯預約。' }
    ]
  },
  {
    id: 'b7-17', kind: 'single',
    docs: [{ label: 'Memo', text: `To: Warehouse Team
From: Lucia Ferrari, Operations Manager
Date: August 21
Subject: Temporary schedule change

Because of the seasonal increase in orders, the warehouse will operate a second shift from September 1 to November 30.

Shift times:
First shift: 6:00 A.M. – 2:30 P.M.
Second shift: 2:30 P.M. – 11:00 P.M.

Second-shift workers receive an additional $2.50 per hour.

Staff who wish to work the second shift should tell their supervisor by August 25. If more than 12 people volunteer, positions will be assigned by seniority.

This arrangement ends on November 30, when all staff return to the regular schedule.` }],
    questions: [
      { q: 'Why is a second shift being added?', options: ['A machine broke down.', 'Orders increase during this season.', 'The warehouse is being expanded.', 'Staff requested longer hours.'], answer: 1, explain: '備忘錄開頭寫因季節性訂單增加。' },
      { q: 'What do second-shift workers receive?', options: ['An extra day off', 'An additional $2.50 per hour', 'Free meals', 'A one-time bonus'], answer: 1, explain: '第二班每小時多 $2.50。' },
      { q: 'What happens if too many people volunteer?', options: ['A lottery will be held.', 'Positions are assigned by seniority.', 'The shift will be canceled.', 'Hours will be reduced.'], answer: 1, explain: '超過 12 人時依年資分配。' }
    ]
  },
  {
    id: 'b7-18', kind: 'single',
    docs: [{ label: 'Letter', text: `Dear Mr. Bergman,

Thank you for your letter of May 2 regarding the damaged bookshelf delivered on April 27.

We are sorry that the item arrived in poor condition. We have arranged for a replacement to be delivered on May 14 between 8:00 A.M. and 12:00 P.M.

Our driver will collect the damaged unit at the same time. Please leave it assembled, as our team will disassemble it for transport.

We have also added a $25 credit to your account for the inconvenience.

If May 14 is not convenient, please call us at 555-0164 to arrange another date.

Sincerely,
Customer Relations
Northwind Furniture` }],
    questions: [
      { q: 'What is the purpose of the letter?', options: ['To request payment', 'To respond to a complaint about a damaged item', 'To announce a new product line', 'To confirm a new order'], answer: 1, explain: '回覆 5 月 2 日關於書架受損的來信。' },
      { q: 'What is Mr. Bergman asked to do?', options: ['Disassemble the damaged bookshelf', 'Leave the damaged unit assembled', 'Return the item to the store', 'Send photographs of the damage'], answer: 1, explain: '信中請他保持組裝狀態，由團隊拆解搬運。' },
      { q: 'What compensation is offered?', options: ['A full refund', 'A $25 account credit', 'Free delivery on the next order', 'An extended warranty'], answer: 1, explain: '公司在帳戶加了 $25 抵用額度。' }
    ]
  },
  {
    id: 'b7-19', kind: 'single',
    docs: [{ label: 'Announcement', text: `NORTHGATE MALL
Holiday Hiring Event

Northgate Mall will hold a hiring event on Saturday, November 4, from 10:00 A.M. to 4:00 P.M. in the center court.

More than 25 stores are hiring seasonal staff for November and December. Positions include sales associates, stock clerks, and gift wrappers.

Bring several copies of your résumé. Some employers will conduct short interviews on the spot.

Most positions require weekend availability. Applicants must be at least 16 years old.

No registration is needed. Simply come to the center court on the day of the event.` }],
    questions: [
      { q: 'What kind of positions are being offered?', options: ['Permanent management roles', 'Seasonal positions for two months', 'Summer internships', 'Part-time positions all year'], answer: 1, explain: '11 月與 12 月的季節性職缺。' },
      { q: 'What should applicants bring?', options: ['A photo ID', 'Several copies of a résumé', 'A completed application form', 'A letter of reference'], answer: 1, explain: '公告請應徵者帶多份履歷。' },
      { q: 'What is required to attend?', options: ['Advance registration', 'A mall membership', 'Nothing; simply attend', 'An appointment with a store manager'], answer: 2, explain: '公告寫 No registration is needed。' }
    ]
  },
  {
    id: 'b7-20', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: All Employees
From: Wellness Committee
Date: January 8
Subject: Walking challenge starts February 1

Hello everyone,

The annual walking challenge begins on February 1 and runs for six weeks.

Teams of four compete to record the most steps. You can track steps with any phone or fitness device, then enter your weekly total on the wellness portal every Monday.

The winning team receives a $200 gift card per member. The team with the most improvement from week one to week six receives a half-day off.

Sign up as a team by January 25. If you do not have a team, add your name to the individual list and we will place you.

Let's get moving!` }],
    questions: [
      { q: 'How long does the challenge last?', options: ['Four weeks', 'Six weeks', 'Two months', 'Three months'], answer: 1, explain: '從 2 月 1 日起為期六週。' },
      { q: 'How often must totals be entered?', options: ['Daily', 'Weekly on Mondays', 'Every two weeks', 'At the end of the challenge'], answer: 1, explain: '每週一在健康入口網站輸入該週總步數。' },
      { q: 'What does the most improved team receive?', options: ['A $200 gift card each', 'A half-day off', 'A team lunch', 'A fitness device'], answer: 1, explain: '進步最多的隊伍獲得半天假。' }
    ]
  },
  {
    id: 'b7-21', kind: 'single',
    docs: [{ label: 'Notice', text: `RIVERBEND TRAIN STATION
Ticket Machine Replacement

All six ticket machines in the main hall will be replaced between February 5 and February 9.

During this period, two temporary machines will be available near the north entrance, and the staffed ticket window will open one hour earlier than usual, at 5:30 A.M.

The new machines will accept contactless cards and mobile payment. Cash will still be accepted.

Passengers with monthly passes are not affected and may continue to use the gates as normal.

We apologize for the inconvenience and thank you for your patience.` }],
    questions: [
      { q: 'How many machines are being replaced?', options: ['Two', 'Four', 'Six', 'Eight'], answer: 2, explain: '公告寫 All six ticket machines。' },
      { q: 'What change is made to the ticket window?', options: ['It will close during the work.', 'It will open an hour earlier.', 'It will move to the north entrance.', 'It will accept only cash.'], answer: 1, explain: '售票窗口提早一小時、於 5:30 開始服務。' },
      { q: 'Who is NOT affected by the work?', options: ['Passengers paying by cash', 'Passengers using contactless cards', 'Monthly pass holders', 'Passengers buying tickets in advance'], answer: 2, explain: '月票持有者不受影響，可照常通行。' }
    ]
  },
  {
    id: 'b7-22', kind: 'single',
    docs: [{ label: 'Advertisement', text: `QUICKFIX PHONE REPAIR
Now open in Westland Plaza

Screen replacement from $59
Battery replacement from $39
Water damage assessment — free

Most repairs are completed while you wait, usually within 45 minutes. Repairs requiring parts we do not stock may take two business days.

All repairs include a 90-day warranty on parts and labor.

Walk-ins are welcome, but customers with appointments are served first. Book online at quickfixwestland.com.

Open Monday to Saturday, 9:00 A.M. to 7:00 P.M. Closed Sunday.` }],
    questions: [
      { q: 'What service is offered at no cost?', options: ['Screen replacement', 'Battery replacement', 'Water damage assessment', 'Same-day repair'], answer: 2, explain: '水損評估為免費。' },
      { q: 'How long do most repairs take?', options: ['About 45 minutes', 'Two business days', 'One week', 'Four hours'], answer: 0, explain: '多數維修可當場完成，通常 45 分鐘內。' },
      { q: 'What advantage do customers with appointments have?', options: ['A discounted price', 'A longer warranty', 'Priority service', 'Free parking'], answer: 2, explain: '有預約者優先服務。' }
    ]
  },
  {
    id: 'b7-23', kind: 'single',
    docs: [{ label: 'E-mail', text: `To: j.okafor@bluecrest.com
From: training@bluecrest.com
Date: April 11
Subject: Confirmation — Presentation Skills course

Dear Mr. Okafor,

Your place on the Presentation Skills course has been confirmed.

Dates: May 8 and May 9
Time: 9:00 A.M. – 4:00 P.M. both days
Location: Training Room 2, third floor

Please bring a laptop. On the second day, each participant gives a ten-minute presentation on a topic of their choice, so prepare your slides in advance.

Lunch and refreshments are provided.

If you can no longer attend, please cancel at least five working days before the course so that the place can be offered to someone on the waiting list.

Training Team` }],
    questions: [
      { q: 'What must participants do on the second day?', options: ['Take a written test', 'Give a short presentation', 'Attend a group interview', 'Submit a written report'], answer: 1, explain: '第二天每人做十分鐘簡報。' },
      { q: 'What should Mr. Okafor bring?', options: ['A printed handbook', 'A laptop', 'A projector', 'Lunch'], answer: 1, explain: '信中請他攜帶筆電；午餐由主辦提供。' },
      { q: 'Why is early cancellation requested?', options: ['To receive a refund', 'To allow someone on the waiting list to attend', 'To reschedule the course', 'To reduce the room booking cost'], answer: 1, explain: '以便把名額讓給候補名單上的人。' }
    ]
  },

  /* ─────────── 雙篇 ─────────── */
  {
    id: 'b7-6', kind: 'double',
    docs: [
      { label: 'E-mail', text: `To: orders@greenleafoffice.com
From: t.nakamura@brightwave.com
Date: June 3
Subject: Order #4471

Hello,

I placed order #4471 last Friday for 20 desk lamps. The confirmation said the order would arrive on June 2, but nothing has been delivered.

Could you please check the status? Our new office opens on June 10, and we need the lamps installed before then.

Thank you,
Taro Nakamura
Brightwave Design` },
      { label: 'Reply', text: `To: t.nakamura@brightwave.com
From: orders@greenleafoffice.com
Date: June 3
Subject: RE: Order #4471

Dear Mr. Nakamura,

I apologize for the delay. Your order was held at our warehouse because ten of the lamps were damaged during shipping from the factory.

We have two options for you:
1. Ship the 10 undamaged lamps tomorrow, with the rest arriving June 12.
2. Wait and ship all 20 lamps together on June 8.

Please let me know which you prefer. Given your opening date, I would recommend the second option.

Regards,
Lisa Fontaine
Greenleaf Office Supply` }
    ],
    questions: [
      { q: 'Why did Mr. Nakamura write the first e-mail?', options: ['To cancel an order', 'To ask about a delivery that did not arrive', 'To request a refund', 'To change a shipping address'], answer: 1, explain: '他說確認信寫 6 月 2 日到貨，但什麼都沒收到。' },
      { q: 'What caused the delay?', options: ['A payment problem', 'Bad weather', 'Damage to some of the lamps', 'An incorrect address'], answer: 2, explain: 'Ms. Fontaine 說十盞燈在運送途中受損。' },
      { q: 'How many lamps are undamaged?', options: ['Ten', 'Twelve', 'Twenty', 'Four'], answer: 0, explain: '總共 20 盞，其中 10 盞受損，故未受損為 10 盞。' },
      { q: 'Why does Ms. Fontaine recommend the second option?', options: ['It is less expensive.', 'All lamps would arrive before the office opens.', 'The warehouse is closed on June 12.', 'The first option requires extra shipping fees.'], answer: 1, explain: '辦公室 6 月 10 日開幕，選項二 6 月 8 日全部送達，選項一則要到 6 月 12 日。' },
      { q: 'What is suggested about Brightwave Design?', options: ['It is moving to a new office.', 'It manufactures desk lamps.', 'It has offices in several cities.', 'It has ordered from Greenleaf before.'], answer: 0, explain: '信中提到 Our new office opens on June 10。' }
    ]
  },
  {
    id: 'b7-7', kind: 'double',
    docs: [
      { label: 'Web page', text: `HARBOR HOTEL — Conference Rooms

Room A — up to 20 people — $150 per half day
Room B — up to 40 people — $260 per half day
Room C — up to 80 people — $400 per half day

All rooms include a projector, whiteboard, and free Wi-Fi.

Coffee service: $6 per person
Lunch service: $18 per person

Rooms must be booked at least seven days in advance. Cancellations made less than three days before the event are charged 50%.` },
      { label: 'E-mail', text: `To: events@harborhotel.com
From: r.silva@medcore.com
Date: August 14
Subject: Booking request for September 5

Hello,

I would like to book a conference room for the morning of September 5. We expect 35 participants.

Please add coffee service for everyone. We will not need lunch, as the group will leave at noon.

Also, could you confirm that the projector works with a laptop that has only USB-C ports? Our team will bring their own computers.

Thank you,
Rosa Silva
MedCore Training` }
    ],
    questions: [
      { q: 'Which room will Ms. Silva most likely book?', options: ['Room A', 'Room B', 'Room C', 'Both Room A and Room B'], answer: 1, explain: '35 人超過 A 室的 20 人上限，B 室可容納 40 人。' },
      { q: 'How much will the coffee service cost?', options: ['$150', '$210', '$260', '$630'], answer: 1, explain: '35 人 × $6 = $210。' },
      { q: 'What does Ms. Silva ask about?', options: ['Parking availability', 'Projector compatibility', 'Room decoration', 'Payment methods'], answer: 1, explain: '她詢問投影機是否支援只有 USB-C 埠的筆電。' },
      { q: 'Does the booking meet the advance requirement?', options: ['Yes, it is more than seven days ahead.', 'No, it is only three days ahead.', 'No, it is exactly five days ahead.', 'The information is not given.'], answer: 0, explain: '8 月 14 日訂 9 月 5 日的場地，超過七天的規定。' },
      { q: 'What is indicated about cancellations?', options: ['They are always free.', 'A 50% charge applies within three days of the event.', 'They must be made by phone.', 'They are not allowed.'], answer: 1, explain: '網頁寫活動前不到三天取消收取 50%。' }
    ]
  },

  /* ─────────── 三篇 ─────────── */
  {
    id: 'b7-8', kind: 'triple',
    docs: [
      { label: 'Announcement', text: `CITY OF FAIRVIEW
Farmers Market Vendor Applications

The Fairview Farmers Market runs every Saturday from May through October in Central Park.

Vendor fees:
Small stand (2 m) — $25 per week
Large stand (4 m) — $45 per week

Applications are due by April 15. Vendors selling homemade food must also submit a health permit.

New this year: vendors who book all six months receive a 15% discount on total fees.

Apply at fairviewmarket.org.` },
      { label: 'E-mail', text: `To: market@fairview.gov
From: j.olsen@sweetmeadow.com
Date: April 8
Subject: Vendor application — Sweet Meadow Bakery

Hello,

I have submitted our application online for a large stand for the full season.

We sell breads and pastries baked in our own kitchen. I have attached our health permit from the county office.

One question: our van is quite large. Is there space to unload near the park entrance on Saturday mornings?

Thank you,
Jonas Olsen
Sweet Meadow Bakery` },
      { label: 'Reply', text: `To: j.olsen@sweetmeadow.com
From: market@fairview.gov
Date: April 10
Subject: RE: Vendor application

Dear Mr. Olsen,

Your application and permit have been received and approved.

Unloading is allowed at the west gate between 6:00 A.M. and 7:30 A.M. only. After 7:30, vehicles must be moved to the lot on Oak Street.

Your invoice will be sent on April 20. Payment is due before the first market day.

Welcome to the market!

Fairview Market Office` }
    ],
    questions: [
      { q: 'How long does the farmers market season last?', options: ['Four months', 'Five months', 'Six months', 'All year'], answer: 2, explain: '五月到十月共六個月。' },
      { q: 'What will Sweet Meadow Bakery pay per week before any discount?', options: ['$25', '$45', '$70', '$15'], answer: 1, explain: '他們申請大攤位（large stand），每週 $45。' },
      { q: 'What discount is Mr. Olsen eligible for?', options: ['No discount', '10%', '15%', '25%'], answer: 2, explain: '他申請整季（六個月），符合訂滿六個月享 15% 折扣的條件。' },
      { q: 'Why was a health permit required for Sweet Meadow Bakery?', options: ['Because it is a new vendor', 'Because it sells homemade food', 'Because it requested a large stand', 'Because it books the full season'], answer: 1, explain: '公告寫販售自製食品的攤商必須繳交衛生許可。' },
      { q: 'What must Mr. Olsen do after 7:30 A.M. on market days?', options: ['Move his van to the Oak Street lot', 'Close his stand', 'Pay an additional fee', 'Report to the west gate'], answer: 0, explain: '回信寫 7:30 之後車輛須移到 Oak Street 停車場。' }
    ]
  },
  {
    id: 'b7-24', kind: 'double',
    docs: [
      { label: 'Web page', text: `CEDAR HALL — Event Room Rental

Room 1 — seats 30 — $80 per hour
Room 2 — seats 60 — $130 per hour
Room 3 — seats 120 — $210 per hour

Minimum booking: 2 hours

Add-ons:
Sound system — $40 per booking
Projector — $25 per booking
Table setup and cleanup — $60 per booking

Nonprofit organizations receive 20% off the room rate. Add-ons are not discounted.

Bookings must be paid in full one week before the event.` },
      { label: 'E-mail', text: `To: bookings@cedarhall.org
From: k.mensah@riverartsclub.org
Date: June 2
Subject: Room booking — July 15

Hello,

River Arts Club is a registered nonprofit. We would like to book a room for a members' exhibition on July 15 from 1:00 P.M. to 5:00 P.M.

We expect about 50 guests. We will need the projector for a short slideshow, but we do not need the sound system.

We will handle our own setup, so the table service is not required.

Could you confirm the total and let us know the payment deadline?

Thank you,
Kwame Mensah` }
    ],
    questions: [
      { q: 'Which room does River Arts Club need?', options: ['Room 1', 'Room 2', 'Room 3', 'Two rooms'], answer: 1, explain: '預計 50 位來賓，超過 Room 1 的 30 人上限，Room 2 可容納 60 人。' },
      { q: 'How many hours is the booking?', options: ['Two', 'Three', 'Four', 'Five'], answer: 2, explain: '下午 1 點到 5 點共四小時。' },
      { q: 'What is the room charge before the discount?', options: ['$320', '$520', '$620', '$840'], answer: 1, explain: 'Room 2 每小時 $130 × 4 小時 = $520。' },
      { q: 'What add-on will be charged?', options: ['Sound system only', 'Projector only', 'Projector and table setup', 'None'], answer: 1, explain: '只需要投影機；音響與桌椅服務都不需要。' },
      { q: 'When must payment be made?', options: ['On the day of the event', 'One week before the event', 'Within 30 days after the event', 'At the time of booking'], answer: 1, explain: '網頁寫活動前一週須全額付清。' }
    ]
  },
  {
    id: 'b7-25', kind: 'double',
    docs: [
      { label: 'Notice', text: `SUMMERFIELD COMMUNITY POOL
2024 Season Passes

Individual pass — $95
Family pass (up to 4 people) — $220
Senior pass (65+) — $60

Season runs from May 25 to September 8.

Passes purchased before May 1 receive a $15 early-bird discount. The discount applies to one pass per household.

Passes include free entry to all open-swim sessions. Swimming lessons are booked separately at $12 per lesson.

Pool hours: Monday to Friday 6:00 A.M. – 8:00 P.M.; weekends 8:00 A.M. – 6:00 P.M.` },
      { label: 'E-mail', text: `To: pool@summerfield.gov
From: a.varga@mailbox.com
Date: April 22
Subject: Pass purchase question

Hello,

I would like to buy a family pass for my household of four, and a separate senior pass for my mother, who lives with us.

Two questions:

First, can both passes receive the early-bird discount, since we are buying them together?

Second, my son wants to take swimming lessons twice a week for six weeks. Is there any package price for lessons, or is it always $12 each?

Thank you,
Anna Varga` }
    ],
    questions: [
      { q: 'How much does a family pass cost before any discount?', options: ['$95', '$160', '$220', '$280'], answer: 2, explain: '公告寫家庭票 $220（最多四人）。' },
      { q: 'How many of Ms. Varga\'s passes can receive the early-bird discount?', options: ['Neither', 'One', 'Both', 'It depends on the purchase date'], answer: 1, explain: '公告寫折扣每戶限一張，故只有一張適用。' },
      { q: 'When does the season end?', options: ['May 25', 'August 31', 'September 8', 'September 30'], answer: 2, explain: '球季為 5 月 25 日至 9 月 8 日。' },
      { q: 'How much would 12 swimming lessons cost at the listed rate?', options: ['$72', '$120', '$144', '$168'], answer: 2, explain: '每週兩堂 × 六週 = 12 堂，12 × $12 = $144。' },
      { q: 'What is suggested about Ms. Varga\'s mother?', options: ['She is under 65.', 'She does not live in Summerfield.', 'She lives in the same household.', 'She will take swimming lessons.'], answer: 2, explain: '信中寫 my mother, who lives with us。' }
    ]
  },
  {
    id: 'b7-26', kind: 'double',
    docs: [
      { label: 'E-mail', text: `To: support@brightlinesoftware.com
From: m.oduya@harborclinic.org
Date: March 14
Subject: Account upgrade

Hello,

Harbor Clinic currently uses your Basic plan with 5 user accounts. We have hired three more staff members and need to add them.

I understand the Basic plan allows a maximum of 5 users. What is the cost of moving to the next plan, and would our current data transfer automatically?

We would like the change to take effect on April 1 if possible.

Thank you,
Miriam Oduya` },
      { label: 'Reply', text: `To: m.oduya@harborclinic.org
From: support@brightlinesoftware.com
Date: March 15
Subject: RE: Account upgrade

Dear Ms. Oduya,

Thank you for writing.

Our plans are:
Basic — up to 5 users — $40 per month
Standard — up to 15 users — $95 per month
Premium — unlimited users — $180 per month

The Standard plan will meet your needs. All data, settings, and user permissions transfer automatically; no action is needed on your side.

Upgrades take effect on the first day of the following month, so a request made now would begin on April 1 as you asked.

You will be billed the difference for the remainder of March, which comes to $27.50.

Best regards,
Brightline Support` }
    ],
    questions: [
      { q: 'How many users will Harbor Clinic have after hiring?', options: ['Five', 'Six', 'Eight', 'Fifteen'], answer: 2, explain: '原有 5 位再加 3 位，共 8 位。' },
      { q: 'Which plan does Brightline recommend?', options: ['Basic', 'Standard', 'Premium', 'A custom plan'], answer: 1, explain: '8 位使用者超過 Basic 的 5 人上限，Standard 可容納 15 人。' },
      { q: 'What is the monthly cost difference between the current and recommended plans?', options: ['$40', '$55', '$95', '$140'], answer: 1, explain: '$95 − $40 = $55。' },
      { q: 'What does Ms. Oduya ask about besides price?', options: ['Whether training is included', 'Whether data will transfer automatically', 'Whether a discount is available', 'Whether the contract can be canceled'], answer: 1, explain: '她問資料是否會自動轉移。' },
      { q: 'What is Ms. Oduya told about the March charge?', options: ['March is free.', 'She will be billed $27.50 for the rest of March.', 'The upgrade will be billed in April.', 'No additional charge applies.'], answer: 1, explain: '回信說三月剩餘期間補收差額 $27.50。' }
    ]
  },
  {
    id: 'b7-27', kind: 'triple',
    docs: [
      { label: 'Advertisement', text: `LAKEVIEW DRIVING SCHOOL

Package A — 10 lessons — $450
Package B — 20 lessons — $840
Package C — 30 lessons — $1,200

Each lesson lasts 60 minutes. Lessons must be used within six months of purchase.

Students under 18 must provide written parental consent before the first lesson.

Road test preparation (2 lessons plus use of our car for the test) — $190, available only to students who have completed at least 10 lessons with us.

Cancellations with less than 24 hours' notice are charged in full.` },
      { label: 'E-mail', text: `To: info@lakeviewdriving.com
From: p.tanaka@mailhome.net
Date: February 6
Subject: Package and test question

Hello,

I would like to buy Package B for my daughter, who turns 17 next month.

She has never driven before, so we think 20 lessons is right. We would also like the road test preparation later in the year.

Two questions: Does the six-month limit start on the purchase date or the first lesson? And can the road test preparation be paid for separately when we are ready?

Thank you,
Paulo Tanaka` },
      { label: 'Reply', text: `To: p.tanaka@mailhome.net
From: info@lakeviewdriving.com
Date: February 7
Subject: RE: Package and test question

Dear Mr. Tanaka,

Thank you for your interest.

The six-month period begins on the purchase date, not the first lesson, so we suggest buying close to when your daughter plans to start.

Road test preparation is always paid separately and can be booked at any time once the requirement is met. With Package B she will easily qualify.

Please note that because your daughter is under 18, we will need a signed consent form before her first lesson. The form is attached.

Kind regards,
Lakeview Driving School` }
    ],
    questions: [
      { q: 'How much does Package B cost?', options: ['$450', '$840', '$1,200', '$190'], answer: 1, explain: '廣告寫 Package B — 20 lessons — $840。' },
      { q: 'When does the six-month period begin?', options: ['On the first lesson', 'On the purchase date', 'On the road test date', 'When the consent form is signed'], answer: 1, explain: '回信說從購買日起算，而非第一堂課。' },
      { q: 'Why will Mr. Tanaka need to submit a consent form?', options: ['Because he is paying by installments', 'Because his daughter is under 18', 'Because he chose Package B', 'Because the road test is included'], answer: 1, explain: '女兒下個月滿 17 歲，未滿 18 歲須家長書面同意。' },
      { q: 'Will Mr. Tanaka\'s daughter qualify for road test preparation?', options: ['No, Package B does not qualify.', 'Yes, because Package B exceeds 10 lessons.', 'Only if she buys Package C.', 'Only after passing a written test.'], answer: 1, explain: '需完成至少 10 堂，Package B 有 20 堂，回信也說她輕鬆符合。' },
      { q: 'What is the total cost if the road test preparation is added?', options: ['$840', '$1,030', '$1,200', '$1,390'], answer: 1, explain: '$840 + $190 = $1,030。' }
    ]
  },
  {
    id: 'b7-28', kind: 'triple',
    docs: [
      { label: 'Notice', text: `OAKRIDGE OFFICE PARK
Tenant Recycling Program

Beginning June 1, all tenants must separate waste into three streams: paper, containers, and general waste.

Bins are provided free of charge: one set per 10 employees. Additional sets are $45 each.

Collection days:
Paper — Tuesday
Containers — Thursday
General waste — Monday and Friday

Bins must be placed in the corridor by 7:00 A.M. on collection days. Bins left out on non-collection days will be returned to the suite and a $20 handling fee applied.` },
      { label: 'E-mail', text: `To: management@oakridgepark.com
From: d.iqbal@meridiandesign.com
Date: May 18
Subject: Bin request — Suite 320

Hello,

Meridian Design occupies Suite 320. We currently have 26 employees.

Please confirm how many bin sets we will receive at no charge, and whether we should order any extra.

Also, our team often works late and leaves after 8:00 P.M. Would it be acceptable to place the bins in the corridor the evening before collection rather than at 7:00 A.M.?

Thanks,
Dina Iqbal` },
      { label: 'Reply', text: `To: d.iqbal@meridiandesign.com
From: management@oakridgepark.com
Date: May 21
Subject: RE: Bin request — Suite 320

Dear Ms. Iqbal,

Based on your headcount, you will receive two sets at no charge. Any additional sets would be charged at the standard rate.

Regarding timing: placing bins out the evening before is permitted, provided it is the evening before an actual collection day. Bins left out on other evenings will still be subject to the handling fee.

Your bins will be delivered on May 29.

Oakridge Management` }
    ],
    questions: [
      { q: 'How many waste streams must tenants separate?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1, explain: '公告寫 paper、containers、general waste 三種。' },
      { q: 'How many free bin sets will Meridian Design receive?', options: ['One', 'Two', 'Three', 'Twenty-six'], answer: 1, explain: '每 10 名員工一組，26 人可獲兩組（回信也確認為兩組）。' },
      { q: 'What would a third bin set cost?', options: ['Free', '$20', '$45', '$90'], answer: 2, explain: '公告寫額外每組 $45。' },
      { q: 'On which day are containers collected?', options: ['Monday', 'Tuesday', 'Thursday', 'Friday'], answer: 2, explain: '容器類為星期四收運。' },
      { q: 'What does management say about placing bins out early?', options: ['It is never allowed.', 'It is allowed only on the evening before a collection day.', 'It requires an extra fee in all cases.', 'It is allowed for tenants with over 25 employees.'], answer: 1, explain: '回信說僅限「實際收運日的前一晚」，其他晚上仍會收處理費。' }
    ]
  }
];
