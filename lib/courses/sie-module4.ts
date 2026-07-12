import { Module } from '../types'

export const regulatoryFrameworkModule: Module = {
  id: 'regulatory-framework',
  title: 'Overview of the Regulatory Framework',
  description: '9% of the SIE exam (7 questions). Master registration requirements, FINRA\'s core rules, MSRB rules, employee conduct standards, enforcement procedures, and everything that governs your career as a securities professional.',
  requiredScore: 80,
  lessons: [
    {
      id: 'registration-licensing',
      title: 'Registration, Licensing & Continuing Education',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Registration, Licensing & Continuing Education' },
        { type: 'paragraph', text: 'Before anyone can work in a securities capacity at a broker-dealer, they must be registered. The SIE exam is the first step in that process. Understanding the full registration framework — forms, exams, ongoing requirements — is tested on the SIE and is essential for your career.' },
        { type: 'heading', level: 3, text: 'The SIE Exam & Registration Process' },
        { type: 'list', items: [
          'SIE (Securities Industry Essentials) exam: Entry-level exam. No firm sponsorship required. Anyone 18+ can take it. Valid for 4 YEARS after passing.',
          'The SIE alone does NOT register you to sell securities. It must be combined with a "top-off" exam and firm sponsorship.',
          'Top-off exams (require firm sponsorship): Series 7 (General Securities Representative — broadest license), Series 6 (Investment Company Products/Variable Contracts), Series 57 (Securities Trader), Series 79 (Investment Banking), Series 82 (Private Securities Offerings), and others.',
          'Series 7 + SIE = full General Securities Representative registration. Most common path for new brokers.',
          'Series 6 + SIE = more limited registration: mutual funds, variable annuities, variable life insurance.',
          'After passing both SIE and top-off, AND being sponsored by a FINRA member firm: full registration as a registered representative (RR).',
          'Principals: Supervisors must hold principal licenses (Series 24, Series 9/10, etc.) in addition to representative licenses.'
        ]},
        { type: 'heading', level: 3, text: 'Registration Forms — U4, U5, and U6' },
        { type: 'comparison', comparisons: [
          { label: 'Form U4 (Uniform Application for Securities Industry Registration)', description: 'Filed by the FIRM on behalf of the individual when they JOIN or transfer. Contains: Employment history (10 years), residential history (5 years), disciplinary history, criminal history (ALL felonies and certain misdemeanors), financial disclosures (bankruptcy, unsatisfied judgments, liens). Must be kept current — material changes must be updated within 30 CALENDAR DAYS. Available to public through FINRA BrokerCheck. All registered persons must have a current, accurate U4.' },
          { label: 'Form U5 (Uniform Termination Notice for Securities Industry Registration)', description: 'Filed by the FIRM when an individual LEAVES or is terminated. Must be filed within 30 CALENDAR DAYS. Must state the reason for termination: voluntary resignation, permitted to resign, discharged (for cause), or other. If terminated for cause related to misconduct, this follows the individual permanently and appears on BrokerCheck.' },
          { label: 'Form U6 (Uniform Disciplinary Action Reporting Form)', description: 'Filed by REGULATORS (FINRA, SEC, state regulators) to report disciplinary actions, regulatory sanctions, and findings against registered persons or firms. Not filed by the individual or their employer.' }
        ]},
        { type: 'callout', variant: 'key', text: 'BROKERCHECK: Free public database operated by FINRA at BrokerCheck.finra.org. Any investor can look up:\n• A broker\'s registration history and all licenses held\n• Exam history\n• Employment history (10 years)\n• Disciplinary history and regulatory actions\n• Customer complaints\n• Criminal disclosures\n\nBrokerCheck is one of FINRA\'s most powerful investor protection tools.' },
        { type: 'heading', level: 3, text: 'Reportable Events on Form U4 — What Must Be Disclosed' },
        { type: 'list', items: [
          'Criminal matters: Must disclose ALL felony charges or convictions — regardless of subject matter. Also disclose misdemeanors involving theft, dishonesty, fraud, or breach of trust.',
          'Regulatory actions: Any regulatory sanction, fine, suspension, bar, or expulsion by FINRA, SEC, CFTC, NFA, state regulators, or other financial regulatory bodies.',
          'Civil judicial actions: SEC or state court injunctions related to investment activity. Civil judgments or findings in investment-related activity.',
          'Customer complaints: Written complaints alleging sales practice violations of $5,000 or more. Also: all arbitration cases and mediation matters.',
          'Financial disclosures: Personal bankruptcy (Chapters 7, 11, 13). Unsatisfied judgments or liens of $10,000 or more.',
          'Termination: Being terminated or permitted to resign after allegations of violating securities laws or firm policies.',
          'Statutory disqualification events: Being subject to a statutory disqualification bars you from associating with a FINRA member without SEC approval.'
        ]},
        { type: 'heading', level: 3, text: 'Statutory Disqualification' },
        { type: 'list', items: [
          'Statutory disqualification (SD) prohibits a person from associating with a FINRA member firm without SEC approval.',
          'Causes: (1) Conviction within 10 years of a felony, OR any securities-related misdemeanor. (2) Being expelled from an SRO. (3) Being enjoined by a court from engaging in securities activities. (4) Being found by SEC, CFTC, or state regulator to have violated securities laws.',
          'A FINRA member cannot employ a statutorily disqualified person without FINRA approval through the statutory disqualification review process.',
          'The 10-year lookback applies to felonies. Securities-related misdemeanors have no time limit for disqualification.'
        ]},
        { type: 'heading', level: 3, text: 'Continuing Education (CE) Requirements' },
        { type: 'comparison', comparisons: [
          { label: 'Regulatory Element (RE)', description: 'Administered by FINRA online. Required within 1 YEAR of initial registration, then ANNUALLY thereafter (FINRA moved to annual RE in 2023). Content covers regulatory and compliance topics. If not completed by the annual deadline: registration becomes "inactive." Individual CANNOT conduct any securities business while inactive.' },
          { label: 'Firm Element (FE)', description: 'Administered by each individual broker-dealer firm. Annual requirement. Firm develops its own training plan based on a needs analysis addressing: current regulatory developments, new products, risks relevant to the firm\'s business, and supervisory concerns. Must document training completion for each covered person.' }
        ]},
        { type: 'list', items: [
          'Inactive registration: Failure to complete Regulatory Element by the deadline = inactive status. Must complete CE to reactivate.',
          'Registration lapse: If an individual leaves a FINRA member firm and does NOT become registered with another FINRA member within 2 YEARS, they lose their registration. Must retake qualification exams to re-register.'
        ]},
        { type: 'heading', level: 3, text: 'Investment Adviser Registration Requirements' },
        { type: 'list', items: [
          'SEC registration: Required if managing $110 million or more in AUM. OR if advising registered investment companies (mutual funds).',
          'State registration: Required if managing less than $100 million AUM.',
          'Transition zone ($100M-$110M): Can choose to register with either SEC or state.',
          'Form ADV: The primary investment adviser disclosure document. Part 1 (filed with SEC or state) and Part 2 (the "brochure" delivered to clients). Must be updated annually.',
          'Investment Adviser Representatives (IARs): Must pass Series 65 or Series 66 (combined with Series 7).',
          'Fiduciary duty of IAs: Investment advisers have a FIDUCIARY duty — the highest legal standard. Must act in clients\' best interests at all times. Must disclose and manage ALL conflicts of interest.',
          'Performance fees: Investment advisers generally cannot charge performance-based fees to retail clients who are not "Qualified Clients." Threshold: $2.2 million in net assets or $1.1 million under management with the adviser.'
        ]}
      ]
    },
    {
      id: 'finra-rules-conduct',
      title: 'FINRA Rules, Employee Conduct & Supervision',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'FINRA Rules, Employee Conduct & Supervision' },
        { type: 'heading', level: 3, text: 'The Foundation: FINRA Rule 2010 — Standards of Commercial Honor' },
        { type: 'paragraph', text: 'FINRA Rule 2010 is the overarching ethics rule and the bedrock of all conduct standards. It states: "A member, in the conduct of its business, shall observe high standards of commercial honor and just and equitable principles of trade." It is intentionally broad to capture any unethical conduct not specifically covered by other rules.' },
        { type: 'callout', variant: 'key', text: 'Rule 2010 is the "catch-all" ethics rule. Even if a specific rule doesn\'t prohibit something, Rule 2010 can still reach it if the conduct is dishonest or unethical. It applies to conduct in business AND to personal conduct that reflects on fitness for the industry.' },
        { type: 'heading', level: 3, text: 'All Key FINRA Rules — Complete SIE Reference' },
        { type: 'list', items: [
          'Rule 2010: Standards of Commercial Honor — the foundational ethics catch-all.',
          'Rule 2020: Use of Manipulative, Deceptive, or Other Fraudulent Devices — prohibits deception in any securities transaction.',
          'Rule 2090: Know Your Customer (KYC) — must know essential facts about every customer.',
          'Rule 2111: Suitability — reasonable basis for recommendations being suitable for a specific customer.',
          'Rule 2165: Financial exploitation of seniors — permits temporary hold on disbursements if exploitation suspected.',
          'Rule 2210: Communications with the public — fair, balanced, not misleading. Three categories: retail, correspondence, institutional.',
          'Rule 2310: Direct Participation Programs — suitability for DPP recommendations.',
          'Rule 2330: Members\' Responsibilities Regarding Deferred Variable Annuities — specific suitability and supervisory requirements.',
          'Rule 2342: Breakpoint Sales — prohibits recommending purchases below a breakpoint to avoid hitting the next breakpoint.',
          'Rule 2360: Options — governs customer options accounts, suitability, approval, and supervision.',
          'Rule 3110: Supervision — requires written supervisory procedures and supervisory system.',
          'Rule 3210: Accounts at Other Broker-Dealers — must notify employing firm; duplicate statements/confirms required.',
          'Rule 3220: Gifts and Gratuities — $100 per person per year limit for gifts to employees of other FINRA members.',
          'Rule 3240: Borrowing From or Lending to Customers — generally prohibited with narrow exceptions.',
          'Rule 3270: Outside Business Activities — written notification to firm BEFORE engaging.',
          'Rule 3280: Private Securities Transactions — written notification required; firm must decide whether to supervise.',
          'Rule 4210: Margin Requirements — implements Reg T and sets maintenance margin levels.',
          'Rule 4512: Customer Account Information — maintaining accurate customer data.',
          'Rule 5130: Restrictions on the Purchase of IPOs in Hot Issue Market — restricted persons cannot buy hot IPOs.'
        ]},
        { type: 'heading', level: 3, text: 'Outside Business Activities (OBAs) — Rule 3270' },
        { type: 'list', items: [
          'Before engaging in ANY outside business activity for compensation, a registered representative MUST provide WRITTEN NOTIFICATION to their FINRA member employer.',
          'Covers: Part-time employment, consulting, board memberships, real estate sales, any income-generating activity outside the firm.',
          'Firm\'s options: Approve the OBA (with or without supervision), restrict the OBA, prohibit the OBA.',
          'If the OBA involves securities or investment advisory services: The firm MUST decide whether to supervise it as part of firm business.',
          'Failure to notify: A serious violation. Even if the activity itself is harmless, failure to disclose violates Rule 3270.',
          'Does NOT cover: Passive investments (owning stock), unpaid civic/charitable work, purely personal activities.'
        ]},
        { type: 'heading', level: 3, text: 'Private Securities Transactions (Selling Away) — Rule 3280' },
        { type: 'list', items: [
          '"Selling away" occurs when a registered rep sells securities NOT offered through their firm, outside the normal course of employment.',
          'BEFORE engaging in any private securities transaction, the rep must give WRITTEN NOTIFICATION to the firm describing the proposed transaction and their role.',
          'If the rep will receive compensation: The firm MUST approve or disapprove the transaction and, if approved, must supervise it as firm business.',
          'If no compensation: Firm is notified but does not need to approve — the firm may still restrict or prohibit it.',
          'Selling away is one of the most serious violations: It deprives the firm of the ability to supervise the transaction, leaving customers without protections.'
        ]},
        { type: 'heading', level: 3, text: 'Gifts & Gratuities (Rule 3220)' },
        { type: 'list', items: [
          'FINRA member firms and their associated persons cannot give gifts valued at more than $100 per individual per year to any person employed by a FINRA member, where the gift is related to the business.',
          'Purpose: Prevent improper inducement of business through gifts.',
          'Exceptions: Occasional meals, entertainment (sporting events, concerts, shows), promotional items of nominal value, payment of expenses for legitimate educational events.',
          'Personal gifts on purely personal occasions (wedding, birth, graduation) with a genuine personal relationship — not subject to the $100 limit if not related to business.',
          'Recordkeeping: Firms must keep records of gifts given and received.'
        ]},
        { type: 'heading', level: 3, text: 'Political Contributions — FINRA Rule 2030 (Pay-to-Play)' },
        { type: 'list', items: [
          'Pay-to-play: Contributing money to government officials who can influence the awarding of securities business from government entities in exchange for that business.',
          'Rule 2030 prohibits broker-dealers and their covered associates from making political contributions to such government officials.',
          'De minimis exception: Covered associates may contribute up to $350 per election per candidate IF they can vote for that candidate. Up to $150 if they cannot vote for the candidate.',
          'Consequence of exceeding the limit: The firm is barred from engaging in government securities business with that entity for 2 YEARS.',
          'Applies to: State and local government officials who can influence public pension plan investments or state investment adviser/broker-dealer contract decisions.'
        ]},
        { type: 'heading', level: 3, text: 'Supervision Requirements (FINRA Rule 3110)' },
        { type: 'list', items: [
          'Every FINRA member firm MUST establish and maintain a supervisory system reasonably designed to ensure compliance with applicable securities laws, SEC rules, and FINRA rules.',
          'Written Supervisory Procedures (WSPs): The firm\'s compliance manual. Required for every type of business activity. Must identify supervisors for each function.',
          'Designated supervisors: Each office must have a designated supervisor responsible for that office\'s activities. Supervisors must be registered as principals.',
          'Review of transactions: All transactions must be reviewed. Pattern monitoring for churning, unsuitable trades, unauthorized trading.',
          'Branch office inspections: OSJ must be inspected annually. Non-OSJ branch offices at least every 3 years.',
          'OSJ (Office of Supervisory Jurisdiction): The designated supervisory office for a group of branches. Final approval of new accounts typically occurs at the OSJ.',
          'Annual compliance meeting: Firms must conduct an annual compliance meeting with each registered person.',
          'Annual compliance report: Firm\'s CCO must prepare an annual written report on the adequacy of the compliance program.'
        ]},
        { type: 'heading', level: 3, text: 'Borrowing From or Lending to Customers — Rule 3240' },
        { type: 'list', items: [
          'GENERALLY PROHIBITED: Registered reps cannot borrow money from or lend money to customers.',
          'Limited exceptions where firm policy permits AND the customer is: (1) A financial institution engaged in lending as a regular part of its business. (2) An immediate family member. (3) A person based on a personal relationship outside the business. (4) A person where both are registered at the same firm.',
          'Why the rule exists: Lending relationships create serious conflicts of interest and opportunities for exploitation.'
        ]}
      ]
    },
    {
      id: 'msrb-rules',
      title: 'MSRB Rules & Municipal Securities Regulation',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'MSRB Rules & Municipal Securities Regulation' },
        { type: 'paragraph', text: 'The Municipal Securities Rulemaking Board (MSRB) writes rules for broker-dealers and municipal advisors that deal in municipal securities. MSRB rules are enforced by FINRA (for broker-dealers) and the SEC. You must know the key MSRB rules for the SIE.' },
        { type: 'heading', level: 3, text: 'About the MSRB' },
        { type: 'list', items: [
          'Created by Congress in 1975 through the Securities Acts Amendments.',
          'Writes rules but does NOT enforce them directly — enforcement is handled by FINRA (for broker-dealers and bank dealers) and the SEC.',
          'MSRB\'s EMMA system (Electronic Municipal Market Access): Free public database for official statements, trade data, and continuing disclosures for municipal securities.',
          'MSRB rules begin with "G-" (for general) followed by a number.'
        ]},
        { type: 'heading', level: 3, text: 'Key MSRB Rules — Every Rule on the SIE' },
        { type: 'comparison', comparisons: [
          { label: 'G-17: Conduct of Municipal Securities and Advisory Activities', description: 'The foundational fair dealing rule. Dealers and municipal advisors must deal fairly with ALL persons. Prohibits deceptive, dishonest, or unfair practices. The MSRB equivalent of FINRA Rule 2010.' },
          { label: 'G-30: Prices and Commissions', description: 'Dealers must buy and sell municipal securities at fair and reasonable prices. For principal transactions: prices must be fair and reasonable considering all relevant factors. For agency transactions: commissions must be fair and reasonable.' },
          { label: 'G-11: Primary Offering Practices', description: 'Governs the conduct of dealers during primary (new issue) municipal securities offerings. Order priority in competitive offerings: pre-sale orders → group net orders → designated orders → member orders.' },
          { label: 'G-32: Disclosures in Connection with Primary Offerings', description: 'Dealers must deliver to customers the official statement (OS). The OS must be provided to customers no later than settlement of the transaction. Electronic delivery is acceptable.' },
          { label: 'G-34: CUSIP Numbers and New Issue Requirements', description: 'Dealers must ensure municipal securities have CUSIP numbers assigned before trading. CUSIP is the 9-character unique identifier for every securities issue.' },
          { label: 'G-37: Political Contributions and Prohibitions on Municipal Securities Business', description: 'The MSRB\'s pay-to-play rule. Dealers cannot make political contributions to issuers\' officials who can influence the selection of dealers for municipal securities business. De minimis: $250 per election per candidate if covered associate can vote for them. Violation = 2-year ban.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'MSRB RULE SUMMARY — Most Tested:\nG-17: Fair dealing (the catch-all ethics rule for munis)\nG-30: Fair and reasonable prices on muni transactions\nG-32: Official statement delivery to customers at settlement\nG-37: No pay-to-play political contributions\n\nRemember: MSRB writes rules. FINRA enforces them for broker-dealers. SEC enforces for bank dealers.' },
        { type: 'heading', level: 3, text: 'Municipal Securities: New Issue Process' },
        { type: 'list', items: [
          'Official Statement (OS): The disclosure document for a new municipal issue. Equivalent to a prospectus for corporate securities.',
          'Preliminary Official Statement (POS): The preliminary version — like a red herring for munis. Distributed during the pre-sale period.',
          'Legal opinion: All municipal bonds carry an opinion from a bond counsel that (1) the bonds are validly issued, and (2) interest is tax-exempt (if applicable).',
          'Competitive vs. Negotiated sale: Competitive — issuer accepts bids from multiple underwriting syndicates; lowest yield wins. Negotiated — issuer selects a specific underwriter.',
          'MSRB G-11 order priority for syndicate new issues (highest to lowest): (1) Pre-sale orders. (2) Group net orders. (3) Designated orders. (4) Member orders.'
        ]},
        { type: 'heading', level: 3, text: 'EMMA System — Electronic Municipal Market Access' },
        { type: 'list', items: [
          'Free public website operated by the MSRB: emma.msrb.org',
          'What you can find on EMMA: Official statements, continuing disclosure filings, real-time trade prices, credit rating changes.',
          'Continuing disclosure: Issuers must file annual financial information with EMMA under SEC Rule 15c2-12.',
          'EMMA is the primary transparency mechanism for the $4+ trillion municipal bond market.'
        ]}
      ]
    },
    {
      id: 'enforcement-disciplinary',
      title: 'Enforcement, Disciplinary Actions & Investor Protections',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Enforcement, Disciplinary Actions & Investor Protections' },
        { type: 'heading', level: 3, text: 'FINRA Enforcement Process' },
        { type: 'list', items: [
          'FINRA surveillance: FINRA operates sophisticated market surveillance systems to detect unusual trading activity, potential manipulation, and other violations.',
          'Examination program: FINRA conducts routine cycle examinations of member firms, typically every 1-4 years depending on firm size and risk profile.',
          'Investigation: If a potential violation is found, FINRA opens a formal investigation. May issue requests for information and on-the-record interviews.',
          'Regulatory notice: FINRA may inform the respondent that enforcement staff has made a preliminary determination to recommend disciplinary action.'
        ]},
        { type: 'heading', level: 3, text: 'FINRA Disciplinary Sanctions' },
        { type: 'comparison', comparisons: [
          { label: 'Letter of Caution/Warning', description: 'The mildest sanction. Not publicly disclosed. Used for minor, technical violations where no significant harm occurred.' },
          { label: 'Censure', description: 'A formal reprimand. Publicly disclosed through the FINRA disciplinary database and BrokerCheck. Typically accompanied by a fine.' },
          { label: 'Fine', description: 'Monetary penalty. Can range from small amounts to millions of dollars. Often accompanied by disgorgement. Publicly disclosed.' },
          { label: 'Suspension', description: 'Temporary prohibition from associating with any FINRA member firm. Duration varies from days to years. Individual cannot conduct securities business during the suspension period.' },
          { label: 'Bar (Industry Bar)', description: 'The most severe sanction. A PERMANENT prohibition from associating with any FINRA member firm in any capacity. Effectively ends the person\'s securities career. Appears on BrokerCheck permanently.' }
        ]},
        { type: 'heading', level: 3, text: 'Resolution Methods' },
        { type: 'comparison', comparisons: [
          { label: 'Acceptance, Waiver and Consent (AWC)', description: 'The most common resolution method. The respondent accepts FINRA\'s findings, waives their right to a formal hearing, and consents to the specified sanctions — without admitting or denying the findings. AWC is public and appears on BrokerCheck.' },
          { label: 'Offer of Settlement (OS)', description: 'Initiated by the respondent. The respondent makes an offer specifying what sanctions they are willing to accept. FINRA can accept, reject, or counter.' },
          { label: 'Formal Hearing (Disciplinary Proceeding)', description: 'If no settlement is reached, the matter goes to a formal hearing before a FINRA Hearing Panel. Panel issues written decision. Can be appealed to FINRA\'s National Adjudicatory Council (NAC), then to the SEC, then to federal court.' }
        ]},
        { type: 'heading', level: 3, text: 'Customer Dispute Resolution: Arbitration & Mediation' },
        { type: 'list', items: [
          'FINRA Dispute Resolution Services: Manages the largest securities dispute resolution forum in the U.S.',
          'Arbitration: The primary method for resolving customer vs. broker-dealer disputes. Most brokerage account agreements contain pre-dispute arbitration agreements.',
          'Binding: FINRA arbitration decisions are FINAL and BINDING. Very limited grounds for appeal.',
          'Simplified arbitration: For claims under $50,000 — decided by a single arbitrator based on written submissions.',
          'Regular arbitration: Claims over $50,000 — typically a panel of 3 arbitrators. Hearing with witnesses and evidence.',
          'Mediation: Voluntary, non-binding alternative to arbitration. A neutral mediator facilitates negotiation. If no agreement, parties can still proceed to arbitration.',
          'Expungement: A registered rep found not responsible for a customer complaint can apply to have the complaint expunged from their BrokerCheck record.'
        ]},
        { type: 'heading', level: 3, text: 'SIPC Protection — What It Covers and What It Does Not' },
        { type: 'callout', variant: 'key', text: 'SIPC (Securities Investor Protection Corporation) covers UP TO:\n• $500,000 total per account\n• Including up to $250,000 in CASH\n\nSIPC covers: Missing or stolen securities when a broker-dealer FAILS (goes bankrupt).\n\nSIPC does NOT cover:\n• Investment losses (market losses)\n• Fraud by the broker (unless assets are missing from the account)\n• Commodity futures, currency, fixed annuities\n• Investment adviser fraud (unless also a broker-dealer)\n• Bank accounts (those are covered by FDIC up to $250,000)\n\nSIPC is NOT a government agency — it is a nonprofit, membership corporation funded by its member broker-dealers.' },
        { type: 'heading', level: 3, text: 'Customer Protection Rule — Rule 15c3-3' },
        { type: 'list', items: [
          'Purpose: Protect customer assets in the event of a broker-dealer failure.',
          'Fully paid securities: Broker-dealers MUST maintain physical possession or control of fully paid customer securities. Cannot pledge without customer permission.',
          'Cash segregation: Customer cash must be kept in a special reserve bank account separate from firm funds.',
          'Net capital rule (Rule 15c3-1): Broker-dealers must maintain a minimum level of liquid net capital to ensure they can meet obligations to customers.'
        ]},
        { type: 'heading', level: 3, text: 'Blue Sky Laws — State Securities Regulation' },
        { type: 'list', items: [
          'Blue sky laws: State securities laws that require registration of securities in each state where they are offered for sale.',
          'State securities regulators: Each state has a securities division. Coordinated by the NASAA (North American Securities Administrators Association).',
          'NSMIA (National Securities Markets Improvement Act of 1996): Preempts state registration requirements for "covered securities" — including exchange-listed stocks, investment company securities, and Rule 506 Regulation D offerings. States can still investigate and prosecute fraud.',
          'Broker-dealer registration: Broker-dealers must register in EACH state where they conduct business through FINRA\'s Web CRD system.'
        ]}
      ]
    }
  ],
  quiz: [
    { id: 'rf-q1', question: 'Which statement about the SIE exam is CORRECT?', options: ['Passing the SIE alone qualifies you to sell all types of securities', 'The SIE requires firm sponsorship before you can register for the exam', 'The SIE is valid for 4 years and must be combined with a top-off exam and firm sponsorship to become fully registered', 'The SIE has no expiration — once you pass it, you are permanently qualified'], correctIndex: 2, explanation: 'The SIE can be taken by anyone 18+ without firm sponsorship. However, passing the SIE alone does NOT register you to sell securities. You must also pass a "top-off" exam (like the Series 7) AND be associated with a FINRA member firm. The SIE is valid for 4 years from the date of passing.' },
    { id: 'rf-q2', question: 'Form U4 must be updated within how many days when a registered representative is charged with a felony?', options: ['10 calendar days', '30 calendar days', '60 calendar days', 'There is no deadline — update at next annual review'], correctIndex: 1, explanation: 'Material changes to a Form U4 — including criminal charges, regulatory actions, financial matters, and customer complaints — must be updated within 30 CALENDAR DAYS of the event. A felony charge (even without conviction) is a reportable event. Failure to update promptly is itself a serious violation.' },
    { id: 'rf-q3', question: 'FINRA Rule 2010 is best described as:', options: ['The rule governing margin requirements and customer credit', 'The overarching ethics standard requiring members to observe high standards of commercial honor', 'The suitability rule requiring reasonable basis for investment recommendations', 'The supervisory rule requiring written procedures for all firm activities'], correctIndex: 1, explanation: 'FINRA Rule 2010 is the foundational ethics rule: "A member shall observe high standards of commercial honor and just and equitable principles of trade." It is intentionally broad — a catch-all that can apply to any unethical conduct not specifically covered by a more specific rule.' },
    { id: 'rf-q4', question: 'A registered representative wants to take a part-time job as a financial planning consultant. Under FINRA Rule 3270, she must:', options: ['Register as a financial planner with FINRA before beginning the activity', 'Notify her broker-dealer in writing BEFORE engaging in the outside business activity', 'Simply disclose the activity on her annual compliance questionnaire — no advance notice needed', 'Resign her securities registration before taking the part-time job'], correctIndex: 1, explanation: 'FINRA Rule 3270 (Outside Business Activities) requires registered representatives to provide WRITTEN NOTIFICATION to their broker-dealer BEFORE engaging in any outside business activity. The firm then decides whether to approve, restrict, or prohibit the activity.' },
    { id: 'rf-q5', question: 'The Regulatory Element of continuing education is now required:', options: ['Every 5 years on the anniversary of initial registration', 'Within 1 year of initial registration, then annually thereafter', 'Only when FINRA determines retraining is necessary', 'Every 3 years after the second anniversary of registration'], correctIndex: 1, explanation: 'FINRA moved to ANNUAL Regulatory Element CE requirements (2023 changes). The initial deadline is within 1 year of initial registration. If not completed by the annual deadline, registration becomes inactive and the individual cannot conduct any securities activities until CE is completed.' },
    { id: 'rf-q6', question: 'What is the maximum gift a registered representative may give to an employee of another FINRA member firm per year without violating FINRA Rule 3220?', options: ['$25', '$100', '$500', 'There is no limit for business-related gifts'], correctIndex: 1, explanation: 'FINRA Rule 3220 limits gifts to employees of other FINRA member firms to $100 per person per year when the gift is related to the business. Exceptions exist for occasional meals, entertainment, and promotional items of de minimis value.' },
    { id: 'rf-q7', question: 'Under MSRB Rule G-37, what is the consequence of a broker-dealer\'s covered associate making a prohibited political contribution to a municipal issuer official?', options: ['The covered associate is fined $10,000', 'The broker-dealer is barred from municipal securities business with that issuer for 2 years', 'The contribution must be returned but no other penalty applies', 'The covered associate loses their FINRA registration for 1 year'], correctIndex: 1, explanation: 'MSRB Rule G-37 (pay-to-play) prohibits political contributions to municipal issuer officials who can influence selection of the dealer. If a covered associate exceeds the de minimis limit, the broker-dealer is barred from engaging in municipal securities business with that issuer for TWO YEARS.' },
    { id: 'rf-q8', question: 'FINRA arbitration decisions are:', options: ['Advisory only — parties can still go to court if they disagree', 'Final and binding with very limited grounds for appeal', 'Subject to de novo review by federal courts', 'Binding only if both parties agree to abide by the decision'], correctIndex: 1, explanation: 'FINRA arbitration decisions are FINAL AND BINDING. The grounds for appeal are extremely limited: corruption/fraud by the arbitrators, evident partiality, arbitrators exceeding their authority, or failure to disclose conflicts. Routine dissatisfaction with the outcome is not grounds for appeal.' },
    { id: 'rf-q9', question: 'SIPC protects brokerage customers against which of the following?', options: ['Investment losses when the stock market declines', 'Fraud committed by a broker who misappropriated customer funds', 'Missing or inaccessible securities when a broker-dealer fails (goes bankrupt)', 'All financial losses at a broker-dealer up to $500,000'], correctIndex: 2, explanation: 'SIPC covers missing or inaccessible securities when a BROKER-DEALER FAILS (becomes insolvent). Coverage: up to $500,000 total ($250,000 max in cash). SIPC does NOT cover investment losses, commodity futures, currency, or investment adviser fraud. SIPC is a nonprofit corporation, NOT a government agency.' },
    { id: 'rf-q10', question: 'MSRB Rule G-32 requires that dealers provide customers with the official statement:', options: ['At least 5 business days before settlement', 'At or before the settlement of the transaction', '30 days after the purchase of the municipal security', 'Only upon customer request'], correctIndex: 1, explanation: 'MSRB Rule G-32 requires dealers to deliver the official statement to customers no later than SETTLEMENT of the transaction. Electronic delivery is acceptable. The goal is ensuring customers have full disclosure about what they are buying before or at the time of purchase.' },
    { id: 'rf-q11', question: 'An investment adviser managing $85 million in assets should register with:', options: ['The SEC — all investment advisers register federally', 'State securities regulators — managing less than $100 million requires state registration', 'FINRA — as a broker-dealer affiliated with the adviser', 'The Federal Reserve — which oversees all financial advisers'], correctIndex: 1, explanation: 'Investment advisers managing less than $100 million in AUM must register with STATE securities regulators. Those managing $110 million or more register with the SEC. FINRA regulates broker-dealers, not investment advisers directly.' },
    { id: 'rf-q12', question: 'The most common method of resolving FINRA disciplinary proceedings is through:', options: ['Formal hearings before a FINRA Hearing Panel', 'Acceptance, Waiver and Consent (AWC) agreements', 'Binding arbitration before three industry arbitrators', 'Criminal referrals to the Department of Justice'], correctIndex: 1, explanation: 'The majority of FINRA disciplinary cases are resolved through Acceptance, Waiver and Consent (AWC) agreements. The respondent accepts FINRA\'s findings, waives their right to a formal hearing, and consents to specified sanctions without admitting or denying the findings. AWCs are publicly available and appear on BrokerCheck.' }
  ]
}
