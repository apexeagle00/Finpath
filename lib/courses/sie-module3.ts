import { Module } from '../types'

export const tradingAccountsModule: Module = {
  id: 'trading-accounts',
  title: 'Trading, Customer Accounts & Prohibited Activities',
  description: '31% of the SIE exam (23 questions). Master order types, investment returns, account types, AML, compliance rules, and every prohibited activity FINRA tests.',
  requiredScore: 80,
  lessons: [
    {
      id: 'orders-execution',
      title: 'Order Types, Trade Execution & Short Selling',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Order Types & Trade Execution' },
        { type: 'paragraph', text: 'Every trade in the securities market starts with an order. Understanding the mechanics of different order types — and when each is used — is fundamental to the SIE and to working in the industry.' },
        { type: 'heading', level: 3, text: 'Market Orders' },
        { type: 'paragraph', text: 'A market order instructs the broker to execute immediately at the best available price in the market. Speed is guaranteed; price is not.' },
        { type: 'list', items: [
          'Guaranteed execution (for liquid securities) — NOT guaranteed price',
          'In fast-moving markets, the actual execution price may differ significantly from the quoted price at the time of order ("slippage")',
          'Best for: Highly liquid securities (large-cap stocks, ETFs) where bid-ask spread is narrow',
          'Worst for: Illiquid securities, volatile markets, thinly traded stocks (can move market significantly)',
          'Market orders during pre-market or after-hours: Much wider spreads, less liquidity — use limit orders instead'
        ]},
        { type: 'heading', level: 3, text: 'Limit Orders' },
        { type: 'paragraph', text: 'A limit order sets the maximum price you\'ll pay (buy limit) or minimum price you\'ll accept (sell limit). Price is specified; execution is not guaranteed.' },
        { type: 'list', items: [
          'Buy limit order: Set BELOW current market price. Will only execute at the limit price or LOWER. "I\'ll buy XYZ, but only if it drops to $45 or below."',
          'Sell limit order: Set ABOVE current market price. Will only execute at the limit price or HIGHER. "I\'ll sell XYZ, but only if it rises to $55 or above."',
          'If price doesn\'t reach the limit: Order does NOT execute. Can expire (day order) or remain (GTC - Good Till Cancelled).',
          'Day orders: Expire at the end of the trading day if not executed.',
          'Good Till Cancelled (GTC): Remain active until executed or explicitly cancelled. Most brokerages limit GTC orders to 60-90 days.',
          'Fill-or-Kill (FOK): Must be executed immediately and in full, or cancelled entirely.',
          'Immediate-or-Cancel (IOC): Must be executed immediately. Any unfilled portion is cancelled.',
          'All-or-None (AON): Must be filled in full but does not have to be immediate.'
        ]},
        { type: 'heading', level: 3, text: 'Stop Orders (Stop-Loss Orders)' },
        { type: 'paragraph', text: 'A stop order becomes a MARKET order when the stock reaches a specified stop price. Unlike limit orders, once triggered, stop orders have no price guarantee — they execute at whatever market price is available.' },
        { type: 'comparison', comparisons: [
          { label: 'Sell Stop (Stop-Loss)', description: 'Placed BELOW current market price. When stock FALLS to or through the stop price → becomes a market SELL order. Purpose: Limit downside loss on a long position. Example: Own stock at $60, place sell stop at $55. If stock drops to $55, automatically sell. Protects against further losses below $55.' },
          { label: 'Buy Stop', description: 'Placed ABOVE current market price. When stock RISES to or through the stop price → becomes a market BUY order. Purpose: (1) Protect against losses on a short position. (2) Capture breakout movements — buy when stock confirms a price breakout above resistance.' }
        ]},
        { type: 'heading', level: 3, text: 'Stop-Limit Orders' },
        { type: 'paragraph', text: 'A stop-limit order combines stop and limit orders. When the stop price is reached, it becomes a LIMIT order (not a market order). This provides price protection but risks non-execution if the stock gaps past the limit.' },
        { type: 'callout', variant: 'exam', text: 'STOP ORDER MECHANICS — Common Exam Trap:\nA sell stop order does NOT guarantee you sell at exactly the stop price. When the stop price is hit, the order converts to a MARKET order and executes at the best available price — which could be significantly below the stop price in a fast market.\n\nA stop-LIMIT order would ensure you sell at no less than the limit price — but may not execute at all if the market gaps down.' },
        { type: 'heading', level: 3, text: 'Order Terminology' },
        { type: 'list', items: [
          'Long position: Owning securities (bought and held). Profit when price rises.',
          'Short position: Selling borrowed securities (short selling). Profit when price falls.',
          'Bid: The highest price a buyer will pay for a security.',
          'Ask (Offer): The lowest price a seller will accept.',
          'Bid-ask spread: The difference between bid and ask. The dealer\'s profit and a transaction cost for investors.',
          'Solicited order: The registered rep recommended the trade to the client.',
          'Unsolicited order: The client initiated the trade without a recommendation from the rep.',
          'Discretionary order: The broker has authority to make decisions (price, timing, amount) on behalf of the client without calling them first. Requires written authorization.',
          'Non-discretionary order: Client specifies all terms — what to buy/sell, how much, at what price.',
          'Bullish: Expecting prices to rise.',
          'Bearish: Expecting prices to fall.'
        ]},
        { type: 'heading', level: 3, text: 'Short Selling' },
        { type: 'paragraph', text: 'Short selling is selling securities you don\'t own by borrowing them. The goal: sell high, buy back lower, profit from the decline. It is a bearish strategy.' },
        { type: 'list', items: [
          'Process: (1) Borrow shares from broker\'s inventory. (2) Sell immediately at current market price. (3) Hope price falls. (4) Buy shares back ("cover") at lower price. (5) Return borrowed shares to broker. (6) Profit = sale price - repurchase price - borrowing costs.',
          'Requires a margin account: Cannot short sell in a cash account.',
          'Maximum gain: Stock falls to zero — profit equals full sale price minus costs.',
          'Maximum loss: UNLIMITED. Stock can rise forever. You must eventually buy it back at whatever the price is.',
          'Dividends: Short sellers must pay dividends to the lender of the shares.',
          'Regulation SHO (short sale regulation): Requires broker to locate shares to borrow before executing short sale ("locate" requirement). Addresses "naked" short selling (shorting without locating shares).',
          'Short interest: The total number of shares sold short across all accounts. High short interest can lead to a "short squeeze" if price rises — shorts must cover, pushing price even higher.'
        ]},
        { type: 'callout', variant: 'key', text: 'LONG vs SHORT comparison:\nLong: Buy first, sell later. Profit = sell price - buy price. Maximum loss = amount invested. Unlimited gain potential.\nShort: Sell first (borrowed shares), buy back later. Profit = sell price - repurchase price. Maximum gain = sell price (stock goes to zero). UNLIMITED LOSS potential (stock can rise forever).' }
      ]
    },
    {
      id: 'returns-dividends-settlement',
      title: 'Investment Returns, Dividends & Trade Settlement',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Investment Returns, Dividends & Trade Settlement' },
        { type: 'heading', level: 3, text: 'Components of Investment Return' },
        { type: 'list', items: [
          'Interest income: Cash received from debt securities (bond coupons, T-bill discount, savings accounts). Ordinary income tax treatment.',
          'Dividend income: Cash paid to stockholders. Qualified dividends taxed at favorable capital gains rates. Non-qualified dividends taxed as ordinary income.',
          'Capital gains: Profit from selling a security for MORE than your purchase price (cost basis). Short-term (held ≤1 year): taxed as ordinary income. Long-term (held >1 year): preferential tax rates (0%, 15%, or 20% depending on income).',
          'Capital losses: Loss from selling for LESS than cost basis. Can offset capital gains. Up to $3,000 of net capital losses can offset ordinary income annually. Excess losses carry forward.',
          'Return of capital: A portion of a distribution that is NOT income or gain — it is return of your original investment. Reduces your cost basis. Not immediately taxable. Common with some REITs, MLPs, and closed-end funds.',
          'Total return: The COMPLETE return from all sources — income (interest + dividends) + capital appreciation (or loss). The most comprehensive return measure.'
        ]},
        { type: 'heading', level: 3, text: 'Dividend Dates — ALL FOUR Must Be Memorized' },
        { type: 'paragraph', text: 'Understanding the dividend timeline is critical — especially the ex-dividend date, which determines who receives the dividend.' },
        { type: 'comparison', comparisons: [
          { label: '1. Declaration Date', description: 'The date the Board of Directors officially DECLARES the dividend — specifying the amount, record date, and payment date. The company is legally obligated to pay after declaration. Creates a liability on the balance sheet.' },
          { label: '2. Ex-Dividend Date (Ex-Date)', description: 'The critical date. You must own the stock BEFORE the ex-dividend date to receive the dividend. If you buy ON or AFTER the ex-date, you do NOT receive the dividend (the seller keeps it). Set by FINRA as ONE business day BEFORE the record date. Stock price typically drops by approximately the dividend amount on the ex-date.' },
          { label: '3. Record Date', description: 'The date the company reviews its records to determine which shareholders receive the dividend. Shareholders "of record" as of this date receive the dividend. The ex-date is designed to ensure settlements are complete by the record date.' },
          { label: '4. Payment Date (Payable Date)', description: 'The date the dividend is actually paid to shareholders of record. Usually 2-4 weeks after the record date. The cash hits investor accounts.' }
        ]},
        { type: 'callout', variant: 'key', text: 'EX-DATE MEMORY TRICK:\nIf you buy the stock on Monday and Tuesday is the ex-date:\n• Monday purchase: You receive the dividend ✓\n• Tuesday or later: You do NOT receive the dividend ✗\n\nThe ex-date is 1 business day BEFORE the record date (because of T+1 settlement — you need to own the stock one day before the record date so settlement completes by the record date).' },
        { type: 'heading', level: 3, text: 'Bond Yield Measures — All Four' },
        { type: 'list', items: [
          'Coupon rate (nominal yield): The stated annual interest rate on the bond. Fixed at issuance. Does not change with price. A 6% coupon on $1,000 par = $60/year.',
          'Current yield: Annual coupon income ÷ current market price. Changes as bond price changes. Example: $60 coupon ÷ $900 market price = 6.67% current yield.',
          'Yield to Maturity (YTM): The TOTAL annualized return if held to maturity. Accounts for: coupon payments + price discount (or premium) amortized over the remaining life. The most comprehensive yield measure. Requires calculator to compute precisely.',
          'Yield to Call (YTC): The total return if the bond is CALLED at the first call date. More relevant than YTM for premium bonds — the issuer is more likely to call when rates have fallen.',
          'Yield to Worst (YTW): The LOWEST of YTM and all possible YTCs. Tells investors the worst-case yield scenario. Best practice to use for callable bonds.',
          'Basis points: 1 basis point = 0.01% = 1/100th of a percent. 100 basis points = 1%. Used to express small yield differences. "Fed raised rates by 25 basis points" = 0.25%.'
        ]},
        { type: 'heading', level: 3, text: 'Trade Settlement' },
        { type: 'paragraph', text: 'Settlement is when the actual exchange of securities for cash occurs. In May 2024, the U.S. moved to T+1 settlement for most securities (from T+2).' },
        { type: 'comparison', comparisons: [
          { label: 'Equities (Stocks & ETFs)', description: 'T+1: Settlement occurs 1 business day after the trade date. If you buy on Monday, you own and must pay by Tuesday.' },
          { label: 'Corporate & Municipal Bonds', description: 'T+1: Also moved to T+1 as part of the May 2024 change.' },
          { label: 'U.S. Government Securities (Treasuries)', description: 'T+1: Government securities settle the next business day.' },
          { label: 'Options', description: 'T+1: Listed options settle the next business day.' },
          { label: 'Mutual Funds', description: 'T+1 (forward pricing): Orders receive that day\'s closing NAV (if placed before 4 PM). Settlement typically T+1.' },
          { label: 'Cash Settlement', description: 'Same day settlement. Arranged between parties. Common for certain Treasury trades and in urgent situations.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'SETTLEMENT CHANGES: The U.S. moved from T+2 to T+1 settlement for equities in May 2024. This is new and will appear on recent SIE exams. Government securities have settled T+1 for many years.' },
        { type: 'heading', level: 3, text: 'Corporate Actions in Detail' },
        { type: 'list', items: [
          'Stock split: Forward (2-for-1, 3-for-1) or reverse (1-for-10). Price adjusts proportionally. Total value unchanged. Options on split stocks are adjusted accordingly.',
          'Cash dividend: Board declares; stock goes ex-dividend; record date; payment date. Taxable income.',
          'Stock dividend: Additional shares distributed instead of cash. Similar effect to a stock split. Reduces per-share price but increases shares.',
          'Rights offering: Existing shareholders offered right to buy new shares below market price. Must be exercised or sold before expiration.',
          'Spin-off: Company divides a subsidiary into a separate public company. Shareholders of parent receive shares of new company. Tax-free if meets IRS requirements.',
          'Merger: Two companies combine. Target shareholders typically receive acquirer\'s stock or cash. Must be approved by target shareholders.',
          'Tender offer: Acquirer offers to buy shares directly from shareholders at a premium. Often a hostile takeover attempt. Shareholders can "tender" shares into the offer.',
          'Share repurchase/buyback: Company buys back its own shares. Reduces shares outstanding, increases EPS. Not a taxable event for shareholders who don\'t sell.'
        ]},
        { type: 'heading', level: 3, text: 'Benchmarks & Indices' },
        { type: 'list', items: [
          'Dow Jones Industrial Average (DJIA): 30 large-cap U.S. stocks. Price-weighted (higher-priced stocks have more influence). The oldest major index. Not representative of the broad market.',
          'S&P 500: 500 large-cap U.S. stocks. Market-cap weighted. Broadest measure of large-cap U.S. performance. The most widely used benchmark.',
          'NASDAQ Composite: All stocks listed on the NASDAQ exchange. Heavily weighted toward technology.',
          'Russell 2000: 2,000 small-cap U.S. stocks. The primary benchmark for small-cap performance.',
          'Bloomberg U.S. Aggregate Bond Index: The primary benchmark for the U.S. investment-grade bond market.',
          'International: MSCI EAFE (Europe, Australasia, Far East) for developed international; MSCI Emerging Markets for developing economies.'
        ]}
      ]
    },
    {
      id: 'account-types',
      title: 'Customer Account Types & Registrations',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Customer Account Types & Registrations' },
        { type: 'paragraph', text: 'Understanding the different types of brokerage accounts — and the rules governing each — is essential for the SIE. Account type affects what the customer can do, who can make decisions, who owns the assets, and what happens upon death.' },
        { type: 'heading', level: 3, text: 'Cash Accounts vs. Margin Accounts' },
        { type: 'comparison', comparisons: [
          { label: 'Cash Account', description: 'The simplest account type. Customer must pay the FULL purchase price of securities within the settlement period. Cannot borrow from the broker. Cannot sell short. Regulation T applies (customer must pay the full amount). No interest charges. Suitable for most investors.' },
          { label: 'Margin Account', description: 'Customer can borrow from the broker-dealer (using securities as collateral) to purchase additional securities. Amplifies both gains AND losses. Requires signing a margin agreement, credit agreement, and hypothecation agreement. Subject to Regulation T (initial margin) and FINRA maintenance margin rules.' }
        ]},
        { type: 'heading', level: 3, text: 'Margin Rules — Every Number You Need' },
        { type: 'list', items: [
          'Regulation T (set by Federal Reserve): Initial margin requirement is 50% for most marginable equity securities. Customer must deposit at least 50% of the purchase price.',
          'FINRA maintenance margin: The MINIMUM equity that must be maintained in a margin account at all times. Long positions: 25% of market value. Short positions: 30% of market value.',
          'Margin call: If account equity falls below the maintenance minimum, the broker issues a margin call. Customer must deposit additional cash or securities.',
          'House requirement: Individual broker-dealers can set higher requirements than FINRA minimums (but not lower).',
          'Marginable securities: Most exchange-listed stocks and many OTC stocks. T-bills, most bonds. NOT marginable: options (within first 30 days), mutual funds within first 30 days of purchase, IPO shares in the first 30 days.',
          'Pattern Day Trader (PDT): Customer who executes 4+ day trades in a 5-business-day period. Must maintain minimum $25,000 in margin account. Higher buying power during day.',
          'Hypothecation agreement: Customer pledges their securities as collateral for the margin loan.',
          'Rehypothecation: Broker-dealer pledging the customer\'s margined securities as collateral for the broker\'s own loan from a bank. Permitted up to 140% of customer debit balance.'
        ]},
        { type: 'callout', variant: 'key', text: 'MARGIN MATH EXAMPLE:\nBuy $20,000 of stock on margin (50% Reg T):\n• Customer deposits: $10,000\n• Broker lends: $10,000 (the debit balance)\n• If stock falls to $13,000: equity = $13,000 - $10,000 = $3,000 = 23.1%\n• Maintenance requirement: 25% × $13,000 = $3,250\n• Since 23.1% < 25%, margin call issued for $250\n\nMargin amplifies losses: Stock fell 35% but customer\'s equity fell 70%.' },
        { type: 'heading', level: 3, text: 'Account Registration Types' },
        { type: 'list', items: [
          'Individual account: Owned by ONE person. Simple ownership. Upon death, assets transfer through estate (probate).',
          'Joint account: Owned by two or more people. Transactions typically require all parties\' authorization.'
        ]},
        { type: 'comparison', comparisons: [
          { label: 'Joint Tenants with Rights of Survivorship (JTWROS)', description: 'Each tenant owns an EQUAL share. Death: deceased owner\'s share AUTOMATICALLY passes to the surviving tenant(s) — bypasses probate entirely. Most common joint account type for spouses. All tenants must sign for transactions.' },
          { label: 'Tenants in Common (TIC)', description: 'Owners can have UNEQUAL shares (e.g., 60/40). Death: deceased owner\'s share goes to their ESTATE (not automatically to co-owners) and goes through probate. Each owner can independently transfer their share. Either owner can initiate transactions.' },
          { label: 'Community Property', description: 'Recognized in some states (California, Texas, etc.). Property acquired during marriage is jointly owned 50/50 regardless of who earned it.' }
        ]},
        { type: 'heading', level: 3, text: 'Special Account Types' },
        { type: 'list', items: [
          'Discretionary account: Customer grants the broker written authority to make investment decisions (security, quantity, price) WITHOUT contacting customer first. Requires written discretionary authorization. All discretionary trades must be approved by a supervisor promptly. No blanket discretion — each order must be reasonable.',
          'Non-discretionary account: The standard. Broker executes only what customer specifically instructs.',
          'Custodial account (UGMA/UTMA): Account opened by an adult (custodian) for a minor (beneficiary). Uniform Gift to Minors Act (UGMA) or Uniform Transfer to Minors Act (UTMA). Custodian manages until minor reaches age of majority (18 or 21 depending on state). Once assets are in the account, the gift is IRREVOCABLE. Minor pays taxes (at their rate). "Kiddie tax" applies to unearned income above threshold for children under 19 (or 24 if full-time student).',
          'Trust account: Assets managed by a trustee for the benefit of a beneficiary. Established by a trust document. Revocable trust: grantor can modify or dissolve. Irrevocable trust: cannot be changed after creation.',
          'Corporate account: Account opened by a corporation. Requires corporate resolution specifying who can transact.',
          'Partnership account: Account for a partnership entity.',
          'Estate account: Account managed by an executor for a deceased person\'s estate.',
          'Fee-based account: Customer pays a flat fee (percentage of assets) rather than per-trade commissions. Aligns broker incentive with account growth. Must be appropriate for the customer\'s trading activity.'
        ]},
        { type: 'heading', level: 3, text: 'Retirement Accounts — All Types' },
        { type: 'comparison', comparisons: [
          { label: 'Traditional IRA', description: 'Contributions may be tax-DEDUCTIBLE (depends on income and employer plan participation). Growth is tax-DEFERRED. Withdrawals taxed as ordinary income. Annual contribution limit: $7,000 (2024), $8,000 if 50+. Required Minimum Distributions (RMDs) begin at age 73. 10% early withdrawal penalty before age 59½ (with exceptions).' },
          { label: 'Roth IRA', description: 'Contributions are NOT deductible (after-tax money). Growth is TAX-FREE. Qualified withdrawals are TAX-FREE. Contributions can be withdrawn at any time without penalty. No RMDs during owner\'s lifetime. Income limits to contribute. Same contribution limits as Traditional IRA.' },
          { label: '401(k) / 403(b)', description: 'Employer-sponsored plans. Pre-tax contributions reduce current taxable income. Tax-deferred growth. Much higher contribution limits: $23,000 (2024), $30,500 if 50+. Many employers match contributions (free money). RMDs at 73. 403(b) is for non-profits/public schools.' },
          { label: 'SEP-IRA', description: 'For self-employed individuals and small business owners. Simplified Employee Pension. Very high contribution limits: up to 25% of compensation or $69,000 (2024), whichever is less. Employer (or self-employed person) makes all contributions.' },
          { label: 'SIMPLE IRA', description: 'For small businesses with ≤100 employees. Employees can contribute (salary deferral). Employers must match or make nonelective contributions. Lower contribution limits than 401(k).' }
        ]},
        { type: 'callout', variant: 'exam', text: 'KEY RETIREMENT ACCOUNT FACTS:\n• RMDs begin at age 73 for all pre-tax retirement accounts (except Roth IRA)\n• Early withdrawal penalty: 10% before age 59½ (exceptions: death, disability, substantially equal payments, first-time home purchase for IRAs, etc.)\n• Roth IRA: No RMDs. Contributions (not earnings) can always be withdrawn tax-free.\n• IRA contribution limit: $7,000 (2024). 401(k) limit: $23,000 (2024). These are completely separate limits.' }
      ]
    },
    {
      id: 'aml-privacy-compliance',
      title: 'AML, Privacy Rules & Regulatory Compliance',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Anti-Money Laundering, Privacy & Compliance' },
        { type: 'heading', level: 3, text: 'Money Laundering: What It Is & The Three Stages' },
        { type: 'paragraph', text: 'Money laundering is the process of making illegally obtained money appear legitimate — "cleaning" dirty money so it can be used without raising suspicion. Broker-dealers are on the front line of AML enforcement and face strict obligations.' },
        { type: 'comparison', comparisons: [
          { label: 'Stage 1: Placement', description: 'Getting the dirty cash into the financial system. Most vulnerable and risky stage for money launderers. Methods: breaking cash into smaller deposits (structuring/smurfing), mixing cash with cash-intensive businesses (restaurants, casinos), using currency exchanges. This is where broker-dealers and banks are the gatekeepers.' },
          { label: 'Stage 2: Layering', description: 'Moving money around to obscure the trail and create distance from the source. Methods: wire transfers between multiple accounts (often international), buying and selling securities rapidly, converting between currencies, creating complex corporate structures. Extremely difficult to trace.' },
          { label: 'Stage 3: Integration', description: 'Bringing the clean money back into the legitimate economy. At this stage, the money appears legitimate. Methods: investing in real estate, buying luxury goods, paying for legitimate services. Very difficult to prosecute — money looks legal.' }
        ]},
        { type: 'heading', level: 3, text: 'AML Requirements for Broker-Dealers' },
        { type: 'list', items: [
          'Written AML compliance program: Every FINRA member firm must have a written AML program approved by senior management. Must be reviewed annually.',
          'AML compliance officer: Designated individual responsible for implementing the AML program.',
          'Training: All employees must receive AML training.',
          'Customer Identification Program (CIP): Must verify identity of customers at account opening. For individuals: name, date of birth, address, Social Security number or other ID number. Must verify within reasonable time.',
          'FinCEN (Financial Crimes Enforcement Network): The U.S. Treasury bureau that collects financial intelligence to combat money laundering. Broker-dealers file reports with FinCEN.'
        ]},
        { type: 'heading', level: 3, text: 'Suspicious Activity Reports (SARs) & Currency Transaction Reports (CTRs)' },
        { type: 'comparison', comparisons: [
          { label: 'Currency Transaction Reports (CTRs)', description: 'MANDATORY for ANY cash transaction exceeding $10,000 in a single business day. Filed with FinCEN within 15 days. Cannot be waived by the customer. Covers: deposits, withdrawals, exchanges, transfers. MULTIPLE transactions by the same customer totaling over $10,000 in one day are also reportable (aggregation rule).' },
          { label: 'Suspicious Activity Reports (SARs)', description: 'Filed for ANY transaction that appears suspicious, regardless of amount. Must be filed within 30 days of detecting suspicious activity (60 days if no suspect identified). NEVER disclose to the customer or suspect that a SAR has been filed — this is a federal crime ("tipping off"). Must keep SAR confidential.' }
        ]},
        { type: 'callout', variant: 'key', text: 'SAR vs CTR:\nCTR: MANDATORY when cash > $10,000. Amount triggers it automatically.\nSAR: Filed when activity is SUSPICIOUS. Any amount. Never tell the customer.\n\nStructuring (breaking transactions into smaller amounts to stay under $10,000) is ILLEGAL — even if the underlying funds are legitimate. The act of structuring is itself a crime.' },
        { type: 'list', items: [
          'OFAC (Office of Foreign Assets Control): Administers and enforces economic sanctions. Publishes the Specially Designated Nationals (SDN) list. Firms MUST screen customers against the SDN list before opening accounts or processing transactions. Cannot do business with SDN-listed individuals or entities.',
          'Red flags for money laundering: Large cash transactions, reluctance to provide ID, unusual patterns inconsistent with business type, excessive concern about reporting requirements, third-party funding of accounts, structuring patterns.',
          'BSA (Bank Secrecy Act): The primary federal AML law. Requires financial institutions to maintain records and file reports to help identify and prevent money laundering.'
        ]},
        { type: 'heading', level: 3, text: 'Regulation S-P: Privacy of Customer Information' },
        { type: 'paragraph', text: 'Regulation S-P (promulgated by the SEC) protects the privacy of customers\' nonpublic personal information (NPI). It governs how broker-dealers and investment advisers collect, use, and disclose personal financial information.' },
        { type: 'list', items: [
          'Nonpublic Personal Information (NPI): Any personally identifiable financial information a customer provides to obtain financial services. Examples: account numbers, balances, transaction history, Social Security numbers, income information.',
          'Privacy notice: Firms must provide a privacy notice to customers at the time of account opening, explaining what information they collect and how it is shared.',
          'Annual privacy notice: Must be provided annually to customers as long as the relationship continues.',
          'Opt-out right: Customers have the right to opt OUT of having their NPI shared with NON-affiliated third parties. Firm must provide clear opt-out mechanism.',
          'Affiliated parties: Can share NPI with affiliated companies without opt-out.',
          'Safeguards rule: Firms must have written information security programs to protect customer data.',
          'Regulation S-ID (Red Flags Rule): Requires financial institutions to develop and implement identity theft prevention programs.'
        ]},
        { type: 'heading', level: 3, text: 'Books & Records Requirements' },
        { type: 'list', items: [
          '6-year retention: General books and records (blotter, ledgers, trade confirmations, account statements) must be kept 6 years (3 years easily accessible).',
          '3-year retention: Some records (compliance records, associated person records) kept 3 years.',
          'Trade confirmation: Must be sent to customer after each transaction. Shows: trade date, settlement date, security description, quantity, price, commission or markup, capacity (agent or principal).',
          'Account statements: Must be sent at least QUARTERLY. Monthly if there was activity. Shows all positions and transactions.',
          'Business Continuity Plan (BCP): Every FINRA member must have a written BCP that addresses how business will continue if a significant business disruption occurs (e.g., natural disaster, power outage). Must be disclosed to customers.',
          'Customer protection rule (Rule 15c3-3): Broker-dealers must segregate customer cash and fully paid securities from firm assets. Cannot use customer assets for the firm\'s own purposes.'
        ]},
        { type: 'heading', level: 3, text: 'Communications with the Public' },
        { type: 'list', items: [
          'Three categories of firm communications (FINRA Rule 2210): (1) Retail communications: distributed to 25+ retail investors within 30 days. (2) Correspondence: distributed to 25 or fewer retail investors. (3) Institutional communications: distributed exclusively to institutional investors.',
          'Retail communications must be APPROVED by a principal BEFORE use.',
          'All communications must be fair, balanced, not misleading.',
          'Cannot omit material information.',
          'Social media: Treated as either interactive content (correspondence) or static content (retail communication) depending on format.',
          'Telemarketing: Must comply with the Do-Not-Call Registry. Cannot call numbers on the national registry. Must maintain firm-specific do-not-call list.'
        ]},
        { type: 'heading', level: 3, text: 'Regulation Best Interest (Reg BI) & Suitability' },
        { type: 'list', items: [
          'Regulation Best Interest (effective June 2020): Requires broker-dealers to act in the BEST INTEREST of retail customers when making recommendations. Higher standard than simple suitability.',
          'Four component obligations under Reg BI: (1) Disclosure Obligation: disclose material facts about relationship and recommendations. (2) Care Obligation: exercise reasonable diligence and skill; consider costs and alternatives. (3) Conflict of Interest Obligation: identify, disclose, and mitigate conflicts. (4) Compliance Obligation: establish policies to comply with Reg BI.',
          'Know Your Customer (KYC): Must obtain customer information before making recommendations. Required info: financial status, tax status, investment objectives, risk tolerance, time horizon, liquidity needs.',
          'Form CRS (Client Relationship Summary): Must be given to retail customers. Brief document comparing broker-dealer vs. investment adviser services and explaining the nature of the relationship.',
          'Suitability (FINRA Rule 2111): Still applies for non-Reg BI situations (institutional customers, etc.). Three suitability obligations: (1) Reasonable basis — suitable for SOME investors. (2) Customer-specific — suitable for THIS customer. (3) Quantitative — frequency of trading must be suitable (guards against churning).'
        ]},
        { type: 'heading', level: 3, text: 'Financial Exploitation of Seniors (FINRA Rule 2165)' },
        { type: 'list', items: [
          'FINRA Rule 2165: Permits (does not require) firms to place a temporary hold on disbursements when they reasonably believe financial exploitation of a senior or vulnerable adult is occurring.',
          'Temporary hold: Maximum 15 business days initially. Can be extended to 25 business days if state agency or law enforcement investigation is opened.',
          'Trusted contact person: Firms may ask customers to designate a trusted contact person — someone they can contact if exploitation is suspected or if firm has difficulty reaching the customer.',
          'Must notify the customer and trusted contact person when a hold is placed.'
        ]}
      ]
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities: Every Violation FINRA Tests',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Prohibited Activities: What You Can Never Do' },
        { type: 'paragraph', text: 'The SIE exam heavily tests prohibited activities — both through direct definition questions and scenario-based questions where you must identify the violation. Master every one of these. In real life, violating these rules ends careers and can result in criminal charges.' },
        { type: 'heading', level: 3, text: 'Market Manipulation' },
        { type: 'list', items: [
          'Market manipulation: Any scheme to create an artificial price for a security or the appearance of active trading. Violates Section 9 and 10(b) of the Securities Exchange Act of 1934.',
          'Pump and dump: Artificially inflating a stock\'s price through false/misleading statements, then selling before it crashes. Common with penny stocks.',
          'Wash trading (painting the tape): Simultaneously buying and selling the same security to create the illusion of volume and activity without changing actual ownership. Fake volume.',
          'Marking the close: Executing trades near the close of the market specifically to influence the closing price (which may be used as reference for derivatives, indexes, or performance calculations).',
          'Marking the open: Same manipulation but at the open of the market.',
          'Backing away: A market maker who posts a bid or offer and then refuses to honor it when a trade is requested. Prohibited.',
          'Spoofing: Placing large orders with no intention of executing them, to create false impression of supply/demand, then cancelling before execution.',
          'Layering: Entering and cancelling multiple orders to create the appearance of depth.'
        ]},
        { type: 'heading', level: 3, text: 'Insider Trading' },
        { type: 'paragraph', text: 'Insider trading — trading on material, nonpublic information (MNPI) — is a federal crime. It can be committed by anyone who receives MNPI, not just corporate insiders.' },
        { type: 'list', items: [
          'Material information: Information that a reasonable investor would consider important in making an investment decision. Examples: unreleased earnings, pending merger, major product development, SEC investigation.',
          'Nonpublic information: Not yet available to the general public through official channels (press release, SEC filing). Being first to read a press release is NOT MNPI.',
          'Insider: Includes officers, directors, 10%+ shareholders, AND anyone who receives MNPI (tippers and tippees).',
          'Tipper-tippee liability: If an insider "tips" (shares) MNPI with someone (the tippee), BOTH are liable if the tippee trades. Even if you received the tip innocently — if you knew or should have known it was MNPI, you\'re liable.',
          'Misappropriation theory: Even people outside the company (lawyers, printers, family members) can be guilty of insider trading if they misappropriate MNPI.',
          'Civil penalties: Up to THREE TIMES the profit made or loss avoided. Disgorgement of all profits.',
          'Criminal penalties: Up to $5 million in fines and 20 years in prison for individuals. Up to $25 million for entities.',
          'Wall Street Journal rule: If you\'d be embarrassed to see it on the front page, don\'t do it.'
        ]},
        { type: 'callout', variant: 'warning', text: 'INSIDER TRADING PENALTIES:\nCivil: Up to 3x profits gained or losses avoided PLUS disgorgement\nCriminal: Up to $5,000,000 fine AND up to 20 years in prison for individuals\nFirms: Up to $25,000,000 fine\n\nThe SEC\'s insider trading enforcement is aggressive. Surveillance systems monitor unusual trading before corporate announcements automatically.' },
        { type: 'heading', level: 3, text: 'Broker-Dealer Prohibited Activities' },
        { type: 'list', items: [
          'Churning: Excessive trading in a customer account primarily to generate commissions for the broker, without regard to the customer\'s investment objectives. Violates suitability rules and the duty to act in the customer\'s best interest. Look for: high commission-to-equity ratio, turnover rate inconsistent with investment objectives.',
          'Front-running: A broker executes trades for the FIRM\'S account (or their own account) based on ADVANCE KNOWLEDGE of pending customer orders that will move the market. Example: knowing a large buy order is coming, buying first to profit from the price increase. Distinct from insider trading (front-running uses order flow information, not corporate MNPI).',
          'Unauthorized trading: Executing trades in a customer account without the customer\'s authorization and without discretionary authority. Even if the trade was profitable — unauthorized is unauthorized.',
          'Guaranteeing against loss: Promising customers they will not lose money or will receive a guaranteed return. NEVER permitted. Even implying guaranteed performance is prohibited.',
          'Misrepresentation and omission: Making false statements OR omitting material facts when recommending securities. Violates FINRA Rule 2010 and securities fraud laws.',
          'Selling away: Selling securities that are NOT offered through the broker-dealer — conducting securities transactions outside the firm. Violates FINRA Rule 3280. Must notify firm of any private securities transactions.',
          'Commingling (customer vs. firm funds): Mixing customer assets with the firm\'s own money. Strictly prohibited. Violates customer protection rules.',
          'Freeriding: Purchasing securities in a cash account and then selling them before paying for them. Prohibited under Regulation T. Broker must freeze the account for 90 days.',
          'Excessive markups/markdowns: Charging customers unreasonable markups or markdowns above competitive market prices. FINRA generally considers 5% a reasonable guideline, but all factors must be considered.',
          'Restrictions on purchasing IPOs (Rule 5130): Certain industry professionals (broker-dealers, their associated persons, portfolio managers) are restricted from purchasing shares in a "hot IPO" (one that trades at a premium to the offering price in the secondary market). Prevents insiders from profiting from offerings they help bring to market.'
        ]},
        { type: 'heading', level: 3, text: 'Personal Conduct Prohibited Activities' },
        { type: 'list', items: [
          'Borrowing from customers: Generally prohibited without specific written authorization and meeting specific conditions. FINRA Rule 3240. Very limited exceptions.',
          'Lending to customers: Similarly restricted.',
          'Sharing in customer accounts: Prohibited unless (1) written authorization from both customer and firm, (2) broker shares in proportion to their capital contribution. Exceptions for immediate family members.',
          'Opening accounts at other firms: Must notify both employer firm and the other firm. Other firm must send duplicate confirmations and statements to employer firm upon request (FINRA Rule 3210).',
          'Outside business activities: Must notify firm in writing before engaging in any outside business. Firm may prohibit or restrict. FINRA Rule 3270.',
          'Falsifying records: Creating, altering, or destroying books and records, or signing another person\'s name without authorization ("signatures of convenience"). Criminal violation.',
          'Withholding or ignoring regulatory correspondence: Failure to respond to FINRA inquiries or requests for information. Grounds for disciplinary action.',
          'Financial exploitation of seniors: Taking advantage of elderly or vulnerable investors. Both a regulatory violation and potentially criminal.'
        ]},
        { type: 'callout', variant: 'exam', text: 'DISTINGUISHING FRONT-RUNNING vs. INSIDER TRADING:\nFront-running: Using CUSTOMER ORDER FLOW information to trade for your own account ahead of the customer. The information is about pending orders, not corporate secrets.\nInsider trading: Using MATERIAL NONPUBLIC INFORMATION about the issuer (company) to trade. Could be from anyone with access to such information.\n\nBoth are illegal. Both involve trading on non-public information. But the SOURCE of the information is different.' }
      ]
    }
  ],
  quiz: [
    { id: 'ta-q1', question: 'An investor places a sell limit order on XYZ stock at $75. The current market price is $70. This order will execute:', options: ['Immediately at $70 (current market price)', 'Only if the stock rises to $75 or higher', 'Only if the stock falls to $75 or lower', 'At $75 regardless of current market conditions'], correctIndex: 1, explanation: 'A sell limit order sets the MINIMUM price the investor will accept. Placed at $75 when the stock is at $70, it will only execute if the stock RISES to $75 or higher. It will not execute at $70 because that is below the limit price. The investor is waiting for a more favorable price.' },
    { id: 'ta-q2', question: 'Which of the following correctly describes the ex-dividend date?', options: ['The date the board of directors declares the dividend', 'The date you must own stock to receive the upcoming dividend; 1 business day before the record date', 'The date the dividend is actually paid to shareholders', 'The date the company records which shareholders will receive the dividend'], correctIndex: 1, explanation: 'The ex-dividend date is 1 business day BEFORE the record date. To receive the dividend, you must own the stock BEFORE the ex-date. If you buy on the ex-date or later, the seller (not the buyer) receives the dividend. Declaration date = board declares; Record date = who gets it; Payment date = when paid.' },
    { id: 'ta-q3', question: 'A customer opens a margin account and buys $50,000 of stock. Under Regulation T (50% initial margin requirement), the customer must deposit:', options: ['$10,000 (20% of purchase)', '$25,000 (50% of purchase)', '$50,000 (full purchase price)', '$12,500 (25% of purchase)'], correctIndex: 1, explanation: 'Regulation T requires an initial margin deposit of 50% of the purchase price for most equity securities. $50,000 × 50% = $25,000. The broker lends the remaining $25,000 (the debit balance). The customer pledges the securities as collateral for the loan and pays interest on the borrowed amount.' },
    { id: 'ta-q4', question: 'In a JTWROS (Joint Tenants with Rights of Survivorship) account, if one owner dies:', options: ['The account freezes until the estate is settled in probate', 'The deceased\'s share automatically transfers to the surviving joint tenant(s), bypassing probate', 'The deceased\'s share passes to their heirs as specified in their will', 'The account is liquidated and split equally among all heirs'], correctIndex: 1, explanation: 'JTWROS accounts feature the right of survivorship — when one owner dies, their interest AUTOMATICALLY passes to the surviving joint tenant(s). This bypasses probate entirely, providing quick and smooth asset transfer. This is the key distinguishing feature from Tenants in Common (TIC), where the deceased\'s share goes to their estate.' },
    { id: 'ta-q5', question: 'A registered representative notices a customer is making rapid purchases and sales of a security, generating substantial commissions but no apparent benefit to the customer. This is most likely an example of:', options: ['Front-running', 'Churning', 'Marking the close', 'Pump and dump'], correctIndex: 1, explanation: 'Churning is excessive trading in a customer\'s account primarily to generate commissions for the broker, without regard to the customer\'s investment objectives. The key indicators: high trading frequency, significant commission generation, and no apparent investment purpose. This violates suitability rules and the broker\'s duty of care.' },
    { id: 'ta-q6', question: 'Which statement about Suspicious Activity Reports (SARs) is CORRECT?', options: ['SARs must be filed only for cash transactions exceeding $10,000', 'The customer must be notified when a SAR is filed about them', 'SARs are filed confidentially and the customer must NEVER be told a SAR was filed', 'SARs must be approved by FINRA before being submitted to FinCEN'], correctIndex: 2, explanation: 'SARs are filed CONFIDENTIALLY with FinCEN. It is a federal crime to "tip off" a customer or suspect that a SAR has been filed about them. CTRs (not SARs) are triggered by cash transactions over $10,000. SARs are filed for ANY suspicious activity regardless of amount and go directly to FinCEN without FINRA approval.' },
    { id: 'ta-q7', question: 'A broker executes personal trades in XYZ stock ahead of a large customer order she knows will push XYZ\'s price higher. This is an example of:', options: ['Insider trading based on material nonpublic information', 'Front-running — trading on advance knowledge of customer orders', 'Authorized proprietary trading allowed for broker-dealers', 'An acceptable hedging strategy for registered representatives'], correctIndex: 1, explanation: 'Front-running uses knowledge of CUSTOMER ORDER FLOW (not corporate MNPI) to trade for personal benefit ahead of the customer. The broker knows a large buy order will push prices up, so she buys first to profit. This is different from insider trading (which involves corporate secrets), but both are illegal violations of fiduciary duty.' },
    { id: 'ta-q8', question: 'An investor in the 37% tax bracket is comparing a 4% municipal bond to a corporate bond. What corporate bond yield would produce an equivalent after-tax return?', options: ['4.00%', '5.33%', '6.35%', '2.52%'], correctIndex: 2, explanation: 'Taxable Equivalent Yield = Muni Yield ÷ (1 - Tax Rate) = 4% ÷ (1 - 0.37) = 4% ÷ 0.63 = 6.35%. The investor would need a corporate bond yielding 6.35% to match the after-tax return of the 4% municipal bond. Any taxable bond yielding less than 6.35% is less attractive for this investor after taxes.' },
    { id: 'ta-q9', question: 'Under Regulation S-P, broker-dealers must provide customers with a privacy notice:', options: ['Only at account opening; no requirement after that', 'At account opening AND annually as long as the relationship continues', 'Only when they plan to share information with non-affiliated third parties', 'Whenever a customer requests their personal information'], correctIndex: 1, explanation: 'Regulation S-P requires firms to provide a privacy notice at the time of account opening AND on an annual basis as long as the customer relationship continues. The notice must describe what information is collected and how it may be shared, and must explain the customer\'s right to opt out of sharing with non-affiliated third parties.' },
    { id: 'ta-q10', question: 'A registered representative sells shares in a private company to a customer, but the investment is not offered or approved through the rep\'s broker-dealer. This is known as:', options: ['Private placement — permitted under Regulation D', 'Selling away — a serious FINRA violation requiring firm notification', 'Outside business activity — must be disclosed on Form U4', 'Insider trading if the rep had advance knowledge of the company'], correctIndex: 1, explanation: '"Selling away" (FINRA Rule 3280) occurs when a registered representative sells securities not offered through their firm, without the firm\'s knowledge or approval. This is a serious violation because the firm cannot supervise transactions it doesn\'t know about. The rep must notify the firm of private securities transactions, and the firm can then decide whether to approve and supervise them.' },
    { id: 'ta-q11', question: 'Which of the following is a requirement of broker-dealer AML programs under the Bank Secrecy Act?', options: ['Filing a CTR for all wire transfers over $5,000', 'Obtaining prior FINRA approval before filing SARs', 'Verifying customer identity through a Customer Identification Program (CIP)', 'Prohibiting all cash transactions over $3,000'], correctIndex: 2, explanation: 'The Bank Secrecy Act requires broker-dealers to have AML programs that include a Customer Identification Program (CIP). Under CIP, firms must verify the identity of customers at account opening using information such as name, date of birth, address, and Social Security/tax ID number. CTRs are required for cash over $10,000 (not $5,000). SARs do not require FINRA approval.' },
    { id: 'ta-q12', question: 'Under the pattern day trader rules, a customer who makes 4 or more day trades in 5 business days must maintain a minimum equity of:', options: ['$2,000 in a margin account', '$10,000 in any account type', '$25,000 in a margin account', '$50,000 in a margin account'], correctIndex: 2, explanation: 'FINRA defines a "pattern day trader" as someone who executes 4 or more day trades within 5 business days (if those trades represent more than 6% of total trades). Pattern day traders must maintain a MINIMUM of $25,000 in equity in their margin account. This rule protects against undercapitalized day trading.' }
  ]
}
