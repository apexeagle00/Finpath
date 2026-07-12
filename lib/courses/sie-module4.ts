import { Module } from '../types'

export const regulatoryFrameworkModule: Module = {
  id: 'regulatory-framework',
  title: 'Overview of the Regulatory Framework',
  description: '9% of the SIE exam (7 questions). Master registration requirements, FINRA\'s core rules, employee conduct standards, and everything that governs your career as a securities professional.',
  requiredScore: 80,
  lessons: [
    {
      id: 'registration-licensing',
      title: 'Registration, Licensing & Continuing Education',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Registration, Licensing & Continuing Education' },
        { type: 'paragraph', text: 'Before anyone can work in a securities capacity at a broker-dealer, they must be registered. The SIE exam is the first step in that process. Understanding the full registration framework — forms, exams, ongoing requirements — is tested on the SIE and is essential knowledge for your career.' },
        { type: 'heading', level: 3, text: 'The SIE Exam & Registration Process' },
        { type: 'list', items: [
          'SIE (Securities Industry Essentials) exam: Entry-level exam. No firm sponsorship required. Anyone 18+ can take it. Valid for 4 YEARS after passing.',
          'The SIE alone does NOT register you to sell securities. It must be combined with a "top-off" exam and firm sponsorship.',
          'Top-off exams (require firm sponsorship and SIE): Series 7 (General Securities Representative), Series 6 (Investment Company Products), Series 57 (Securities Trader), Series 79 (Investment Banking), and others.',
          'Series 7 + SIE = full General Securities Representative registration. Most common path for new brokers.',
          'After passing both SIE and top-off, AND being sponsored by a FINRA member firm: full registration as a registered representative.'
        ]},
        { type: 'heading', level: 3, text: 'Registration Forms — U4 & U5' },
        { type: 'comparison', comparisons: [
          { label: 'Form U4 (Uniform Application for Securities Industry Registration)', description: 'Filed by the firm on behalf of the individual when they JOIN the firm. Contains employment history, disciplinary history, criminal history, financial disclosures (bankruptcy, judgments). Must be kept current — material changes must be updated within 30 days. Available to public through FINRA BrokerCheck.' },
          { label: 'Form U5 (Uniform Termination Notice for Securities Industry Registration)', description: 'Filed by the firm when an individual LEAVES or is terminated. Must be filed within 30 days. Must state the reason for termination (voluntary resignation vs. terminated for cause). If terminated for cause, this goes on their permanent record. Also available through BrokerCheck.' }
        ]},
        { type: 'callout', variant: 'key', text: 'BROKERCHECK: Free public database operated by FINRA. Anyone can look up a broker or firm\'s registration history, exam results, and disciplinary history. All U4 and material U5 information is available. This transparency protects investors.' },
        { type: 'heading', level: 3, text: 'Reportable Events — What Must Be Disclosed' },
        { type: 'paragraph', text: 'The U4 and U5 are not static documents. When certain events occur in a registered person\'s life, they MUST update their U4 within specific time frames. Failure to disclose is itself a serious violation.' },
        { type: 'list', items: [
          'Criminal matters: Must disclose any felony charge or conviction, AND any misdemeanor involving theft, dishonesty, or breach of trust. Not all misdemeanors — only financial-crime-related ones.',
          'Regulatory actions: Any regulatory action, sanction, fine, or bar by FINRA, SEC, state regulators, or other financial regulators.',
          'Civil judicial actions: SEC or state court injunctions. Civil judgments involving investment-related activities.',
          'Customer complaints: Written complaints alleging sales practice violations of $5,000 or more, or arbitration/mediation cases.',
          'Financial matters: Personal bankruptcy, unsatisfied judgments or liens of $10,000 or more, compromising with creditors.',
          'Termination: Being terminated or permitted to resign after allegations of misconduct.',
          'Statutory disqualification: Events (felony convictions, certain regulatory actions) that automatically bar a person from associating with a FINRA member without special permission.'
        ]},
        { type: 'heading', level: 3, text: 'Continuing Education (CE) Requirements' },
        { type: 'paragraph', text: 'Registration doesn\'t end with passing an exam. Registered persons must complete ongoing continuing education to maintain their registration.' },
        { type: 'comparison', comparisons: [
          { label: 'Regulatory Element', description: 'Administered by FINRA. Computer-based training. Required within 1 year of initial registration, then every 3 years thereafter. Content covers regulatory and compliance topics. If not completed: registration is deemed "inactive." Cannot conduct securities business while inactive.' },
          { label: 'Firm Element', description: 'Administered by each individual broker-dealer firm. Annual requirement. Firm develops its own training plan addressing current regulatory developments, products, and skills relevant to its business. Must be approved and documented by senior management.' }
        ]},
        { type: 'list', items: [
          'Inactive registration: If regulatory element is not completed by the deadline, registration becomes inactive. Individual cannot conduct securities activities. Must complete CE to reactivate.',
          'Lapse in registration: If an individual leaves a FINRA member firm and doesn\'t join another within 2 years, must retake qualification exams to re-register.',
          'FINRA has moved toward annual regulatory element CE for most registrations.'
        ]},
        { type: 'heading', level: 3, text: 'Investment Adviser Registration' },
        { type: 'list', items: [
          'SEC registration: Required if managing $110 million+ in AUM. Or if advising registered investment companies.',
          'State registration: Required if managing less than $100 million AUM.',
          'Transition zone ($100M-$110M): Can register with either.',
          'Form ADV: The primary disclosure document for investment advisers. Part 1: Filed with SEC/state. Part 2: Client brochure — must be delivered to clients at inception and annually.',
          'Investment Adviser Representatives (IARs): Individuals who work for RIAs. Must pass Series 65 (Investment Adviser Law) or Series 66 (combined with Series 7).',
          'Fiduciary duty: Investment advisers have a FIDUCIARY duty to clients. Must act in clients\' best interests at all times, disclose all conflicts of interest, and provide full and fair disclosure.',
          'Performance fees: IAs generally cannot charge performance-based fees to retail clients who don\'t meet certain net worth thresholds (Qualified Clients — $2.2 million investable assets or $1.1 million under management with the adviser).'
        ]}
      ]
    },
    {
      id: 'finra-rules-conduct',
      title: 'FINRA Rules, Employee Conduct & Supervision',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'FINRA Rules, Employee Conduct & Supervision' },
        { type: 'heading', level: 3, text: 'The Foundation: FINRA Rule 2010' },
        { type: 'paragraph', text: 'FINRA Rule 2010 is the overarching ethics rule — the bedrock of all conduct standards. It states: "A member, in the conduct of its business, shall observe high standards of commercial honor and just and equitable principles of trade." It is intentionally broad to capture any unethical conduct not specifically covered by other rules.' },
        { type: 'callout', variant: 'key', text: 'FINRA Rule 2010 is the "catch-all" rule. If a registered representative does something unethical that isn\'t specifically listed in another rule, FINRA still has Rule 2010 to bring an action. Think of it as: "Don\'t be dishonest or unethical in any way — in business or personal life — that reflects on your fitness for the industry."' },
        { type: 'heading', level: 3, text: 'Key FINRA Rules — The Complete List for SIE' },
        { type: 'list', items: [
          'Rule 2010: Standards of Commercial Honor. The foundational ethics rule.',
          'Rule 2020: Manipulation. Prohibits the use of manipulative or deceptive devices to effect any securities transaction.',
          'Rule 2090: Know Your Customer (KYC). Requires firms to know essential facts about every customer and account.',
          'Rule 2111: Suitability. Requires reasonable basis for believing recommendations are suitable for specific customers (superseded by Reg BI for retail, but still applies to institutional).',
          'Rule 2210: Communications with the public. Governs all firm communications — must be fair, balanced, not misleading.',
          'Rule 3110: Supervision. Firms must establish and maintain supervisory systems and written supervisory procedures (WSPs).',
          'Rule 3210: Accounts at other broker-dealers. Must notify employer firm and the outside firm. Duplicate statements/confirms to employer firm.',
          'Rule 3220: Gifts and gratuities. Cannot give gifts exceeding $100/year to employees of any FINRA member firm where the gift is related to business. Does not apply to occasional meals, entertainment, or event tickets.',
          'Rule 3270: Outside business activities. Must notify firm in writing before engaging in any outside business activity. Firm may restrict or prohibit.',
          'Rule 3280: Private securities transactions (selling away). Must notify firm before any private securities transaction outside normal course of employment.',
          'Rule 4210: Margin requirements. Implements and supplements Reg T requirements.',
          'Rule 4512: Customer account information. Requirements for maintaining accurate customer records.',
          'Rule 5130: Restrictions on IPO purchases. Restricted persons (broker-dealer employees) cannot purchase shares in "hot" IPOs.'
        ]},
        { type: 'heading', level: 3, text: 'Outside Business Activities (OBAs) — Rule 3270' },
        { type: 'paragraph', text: 'Registered representatives who want to engage in any business activity outside their employment at the broker-dealer MUST notify the firm in writing BEFORE starting. The firm then decides whether to approve, disapprove, or restrict the activity.' },
        { type: 'list', items: [
          'Covers: Part-time jobs, board memberships, forming a business, investment advisory activities, real estate sales, any activity for which compensation is received.',
          'Does NOT require firm approval for: Family activities, unpaid volunteer work, passive investments.',
          'If approved: The firm may or may not supervise the activity. If it\'s securities-related, the firm must supervise.',
          'If not approved: The registered rep cannot engage in the activity. Period.'
        ]},
        { type: 'heading', level: 3, text: 'Gifts & Gratuities (Rule 3220)' },
        { type: 'list', items: [
          'Cash limit: $100 per individual per year for gifts given to employees of OTHER FINRA member firms. This prevents paying for business through gifts.',
          'Exceptions: Meals, entertainment (sporting events, concerts), promotional items of de minimis value.',
          'Personal gifts: Gifts given to someone on the occasion of a personal event (wedding, birth, retirement) where there is a personal relationship are generally not subject to the $100 limit.',
          'Customer gifts: Different rules apply to gifts to customers vs. gifts to other industry employees.',
          'Soft dollars: Agreements where investment managers direct brokerage commissions to a broker in exchange for research or other services. Regulated under Section 28(e) of the Securities Exchange Act.'
        ]},
        { type: 'heading', level: 3, text: 'Political Contributions (Pay-to-Play) — Rule 2030' },
        { type: 'list', items: [
          'A broker-dealer and its covered associates cannot make political contributions to government officials who can influence the awarding of investment adviser or broker-dealer contracts for government entities.',
          'De minimis exception: Covered associates can make up to $350 per election per candidate if they can vote for that candidate. Up to $150 if they cannot vote for the candidate.',
          'Consequence of violation: Two-year ban from government securities business.',
          'Applies to state and local government entities (pension funds, state investment boards, etc.).'
        ]},
        { type: 'heading', level: 3, text: 'Supervision Requirements (FINRA Rule 3110)' },
        { type: 'paragraph', text: 'Every FINRA member firm must establish and maintain a SUPERVISORY SYSTEM reasonably designed to ensure compliance with applicable securities laws and FINRA rules. This is a fundamental compliance obligation.' },
        { type: 'list', items: [
          'Written Supervisory Procedures (WSPs): The firm\'s compliance manual. Must describe supervisory procedures for each type of business activity. Must be updated as rules change.',
          'Designation of supervisors: Each branch office must have a designated supervisor. Supervisors must be registered and qualified.',
          'Review of correspondence: Firms must review customer correspondence (emails, letters) to detect violations.',
          'Review of transactions: All discretionary accounts must be reviewed frequently. All transactions must be reviewed.',
          'Branch office inspections: Firms must inspect branch offices on a regular schedule (at least every 3 years for non-OSJ branches, annually for OSJs).',
          'OSJ (Office of Supervisory Jurisdiction): A firm location with specific supervisory responsibilities. Typically where final approval of accounts and transactions occurs.',
          'Principal: A registered principal (supervisor) must approve new accounts, discretionary accounts, communications, and other specified activities.',
          'Annual compliance meeting: Registered persons must meet with their supervisor annually to review compliance issues.'
        ]},
        { type: 'heading', level: 3, text: 'FINRA Arbitration' },
        { type: 'list', items: [
          'Most disputes between customers and broker-dealers go to FINRA arbitration rather than court. Customers typically sign a pre-dispute arbitration agreement when opening accounts.',
          'Arbitration is generally faster and less expensive than court proceedings.',
          'Decisions are final and binding. Very limited grounds for appeal.',
          'FINRA also has a mediation program — voluntary, non-binding alternative dispute resolution.'
        ]},
        { type: 'heading', level: 3, text: 'Industry Disciplinary Actions' },
        { type: 'list', items: [
          'FINRA can: Issue letters of caution, censure, impose fines, suspend registration (temporary), revoke registration, bar from the industry (permanent).',
          'Industry bar: The most severe sanction. Permanently prohibits association with any FINRA member firm.',
          'Statutory disqualification: Certain events (felony convictions, being barred by a regulator) automatically result in statutory disqualification — cannot work in the industry without SEC approval.',
          'Acceptance, Waiver and Consent (AWC): The most common way FINRA cases are resolved. The respondent accepts findings, waives hearing rights, and consents to sanctions without admitting or denying findings.',
          'Regulation D: Rules for private placements. Not to be confused with FINRA disciplinary proceedings.'
        ]}
      ]
    }
  ],
  quiz: [
    { id: 'rf-q1', question: 'Which statement about the SIE exam is CORRECT?', options: ['Passing the SIE alone qualifies you to sell all types of securities', 'The SIE requires firm sponsorship before you can register for the exam', 'The SIE is valid for 4 years and must be combined with a top-off exam and firm sponsorship to become fully registered', 'The SIE has no expiration — once you pass it, you are permanently qualified'], correctIndex: 2, explanation: 'The SIE can be taken by anyone 18+ without firm sponsorship. However, passing the SIE alone does NOT register you to sell securities. You must also pass a "top-off" exam (like the Series 7) AND be associated with a FINRA member firm. The SIE is valid for 4 years from the date of passing.' },
    { id: 'rf-q2', question: 'Form U4 must be updated within how many days when a registered representative is charged with a felony?', options: ['10 calendar days', '30 calendar days', '60 calendar days', 'There is no deadline — update at next annual review'], correctIndex: 1, explanation: 'Material changes to a Form U4 — including criminal charges, regulatory actions, financial matters, and customer complaints — must be reported within 30 calendar days of the event. A felony charge (even without conviction) is a reportable event that must be disclosed promptly. Failure to update is itself a serious violation.' },
    { id: 'rf-q3', question: 'FINRA Rule 2010 is best described as:', options: ['The rule governing margin requirements and customer credit', 'The overarching ethics standard requiring members to observe high standards of commercial honor', 'The suitability rule requiring reasonable basis for investment recommendations', 'The supervisory rule requiring written procedures for all firm activities'], correctIndex: 1, explanation: 'FINRA Rule 2010 is the foundational ethics rule: "A member shall observe high standards of commercial honor and just and equitable principles of trade." It is intentionally broad — a catch-all that can apply to any unethical conduct not specifically covered by a more specific rule. Margin = Rule 4210. Suitability = Rule 2111. Supervision = Rule 3110.' },
    { id: 'rf-q4', question: 'A registered representative wants to sell real estate part-time in addition to her securities job. Under FINRA Rule 3270, she must:', options: ['Register as a real estate broker with FINRA before beginning the activity', 'Notify her broker-dealer in writing and receive approval before engaging in the activity', 'Simply disclose the activity on her annual compliance questionnaire — no advance notice needed', 'Resign her securities registration before selling real estate'], correctIndex: 1, explanation: 'FINRA Rule 3270 (Outside Business Activities) requires registered representatives to provide WRITTEN NOTIFICATION to their broker-dealer BEFORE engaging in any outside business activity. The firm then decides whether to approve, restrict, or prohibit the activity. Pre-approval (not just notification) is effectively required since you must wait for the firm\'s decision.' },
    { id: 'rf-q5', question: 'The Regulatory Element of continuing education must be completed by registered persons:', options: ['Every year on the anniversary of their initial registration', 'Within 1 year of initial registration, then every 3 years thereafter', 'Every 5 years regardless of when they first registered', 'Only when they fail to meet their firm\'s Firm Element requirements'], correctIndex: 1, explanation: 'The Regulatory Element (administered by FINRA) must be completed within 1 year of initial registration and then every 3 years thereafter. If not completed by the deadline, the registration becomes inactive and the individual cannot conduct securities activities. The Firm Element is separate and must be completed annually.' },
    { id: 'rf-q6', question: 'What is the maximum gift a registered representative may give to an employee of another FINRA member firm per year without violating FINRA Rule 3220?', options: ['$25', '$100', '$500', 'There is no limit for business-related gifts'], correctIndex: 1, explanation: 'FINRA Rule 3220 limits gifts given to employees of other FINRA member firms in connection with the business to $100 per person per year. Exceeding this limit could be seen as an improper inducement. Exceptions exist for occasional meals and entertainment, promotional items of de minimis value, and gifts on personal occasions with a genuine personal relationship.' },
    { id: 'rf-q7', question: 'An investment adviser managing $85 million in assets should register with:', options: ['The SEC — all investment advisers register federally', 'State securities regulators — managing less than $100 million requires state registration', 'FINRA — as a broker-dealer affiliated with the adviser', 'The Federal Reserve — which oversees all financial advisers'], correctIndex: 1, explanation: 'Investment advisers managing less than $100 million in assets under management (AUM) must register with STATE securities regulators. Those managing $110 million or more register with the SEC. The zone between $100M-$110M is a transition zone where either registration may be appropriate. FINRA regulates broker-dealers, not investment advisers directly.' }
  ]
}
