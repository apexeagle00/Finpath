import { Course } from '../types'

export const sieCourse: Course = {
  id: 'sie',
  slug: 'sie-exam-prep',
  title: 'SIE Exam Prep',
  subtitle: 'Securities Industry Essentials',
  description: 'Master the Securities Industry Essentials exam with comprehensive coverage of all four domains. Designed to take you from zero to passing with real exam-quality content and mastery-gated quizzes.',
  category: 'certification',
  level: 'Beginner',
  estimatedHours: 20,
  color: '#d4af37',
  icon: '📈',
  topics: ['Capital Markets', 'Securities Products', 'Trading & Accounts', 'Regulatory Framework', 'FINRA Rules', 'SEC Regulations'],
  modules: [
    {
      id: 'capital-markets',
      title: 'Knowledge of Capital Markets',
      description: 'Understand how capital markets function, the role of market participants, and the regulatory environment that governs the securities industry.',
      requiredScore: 80,
      lessons: [
        {
          id: 'primary-secondary-markets',
          title: 'Primary vs. Secondary Markets',
          duration: '15 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Primary vs. Secondary Markets'
            },
            {
              type: 'paragraph',
              text: 'Capital markets are divided into two distinct segments: the primary market and the secondary market. Understanding the difference is foundational to the entire securities industry.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'The Primary Market'
            },
            {
              type: 'paragraph',
              text: 'The primary market is where new securities are created and sold for the first time. When a company wants to raise capital by issuing stock or bonds, it does so through the primary market. The proceeds go directly to the issuing company.'
            },
            {
              type: 'list',
              items: [
                'Initial Public Offerings (IPOs) — a private company selling shares to the public for the first time',
                'Seasoned Equity Offerings (SEOs) — additional share issuances by already-public companies',
                'Bond issuances — corporations or governments raising debt capital',
                'Investment banks underwrite new issues in the primary market'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY POINT: In the primary market, the ISSUER receives the proceeds. The investor is buying directly from the company or government entity.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'The Secondary Market'
            },
            {
              type: 'paragraph',
              text: 'The secondary market is where previously issued securities are traded between investors. This is what most people picture when they think of "the stock market." The NYSE, NASDAQ, and bond markets are all secondary markets.'
            },
            {
              type: 'list',
              items: [
                'No new capital raised — money flows between investors, not to the issuer',
                'Provides liquidity — investors can sell holdings without waiting for maturity',
                'Price discovery — supply and demand determine the market price',
                'Examples: NYSE, NASDAQ, OTC markets, bond markets'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: A question may describe a transaction and ask whether it occurred in the primary or secondary market. Ask yourself: Did the proceeds go to the issuer? If yes → primary. If between investors → secondary.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Market Structure: Exchanges vs. OTC'
            },
            {
              type: 'paragraph',
              text: 'Secondary markets are further divided into exchange markets and over-the-counter (OTC) markets.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Exchange Market (NYSE, NASDAQ)', description: 'Centralized, listed securities, regulated trading floor or electronic system, auction-based pricing' },
                { label: 'OTC Market', description: 'Decentralized, dealer network, negotiated prices, includes OTC Bulletin Board and Pink Sheets' }
              ]
            },
            {
              type: 'callout',
              variant: 'info',
              text: 'FINRA operates TRACE (Trade Reporting and Compliance Engine) to provide transparency in the bond market, and OTC Bulletin Board for OTC equities.'
            }
          ]
        },
        {
          id: 'market-participants',
          title: 'Market Participants',
          duration: '15 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Market Participants'
            },
            {
              type: 'paragraph',
              text: 'The securities industry involves many different types of participants, each with a distinct role and regulatory status. Understanding who does what is critical for the SIE exam.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Broker-Dealers'
            },
            {
              type: 'paragraph',
              text: 'A broker-dealer is a firm that can act in two capacities: as a broker (agent) or as a dealer (principal). Most large financial firms are registered broker-dealers.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Acting as Broker (Agent)', description: 'Executes trades on behalf of customers. Earns a commission. Does NOT take ownership of the security. Acts as intermediary.' },
                { label: 'Acting as Dealer (Principal)', description: 'Buys and sells securities from its own inventory. Earns a markup/markdown. Takes on risk by owning the security.' }
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: A firm cannot act as both broker AND dealer in the same transaction without disclosing its capacity. This is a common exam question.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Investment Advisers'
            },
            {
              type: 'paragraph',
              text: 'Investment advisers (IAs) provide advice about securities for compensation. They are registered with the SEC (if managing $110M+ in assets) or state regulators. They have a fiduciary duty to clients — they must act in the client\'s best interest at all times.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Issuers'
            },
            {
              type: 'paragraph',
              text: 'Issuers are companies, governments, or other entities that issue securities to raise capital. Corporations issue stocks and bonds. The U.S. Treasury issues T-bills, T-notes, and T-bonds. Municipalities issue municipal bonds.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Institutional vs. Retail Investors'
            },
            {
              type: 'list',
              items: [
                'Institutional investors: Banks, mutual funds, pension funds, insurance companies, hedge funds — large sophisticated entities',
                'Retail investors: Individual investors — receive greater regulatory protections',
                'Accredited investors: High net worth individuals who can access certain private offerings'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY: Accredited investors under SEC Regulation D must have $1M+ net worth (excluding primary residence) OR $200K+ annual income ($300K+ joint). This allows them to invest in private placements.'
            }
          ]
        },
        {
          id: 'regulatory-bodies',
          title: 'Regulatory Bodies & Key Legislation',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Regulatory Bodies & Key Legislation'
            },
            {
              type: 'paragraph',
              text: 'The securities industry is one of the most heavily regulated industries in the world. Multiple overlapping regulators protect investors and maintain market integrity.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'The SEC (Securities and Exchange Commission)'
            },
            {
              type: 'paragraph',
              text: 'The SEC is the primary federal regulator of the securities industry. It was created by the Securities Exchange Act of 1934 and oversees all aspects of the securities markets.'
            },
            {
              type: 'list',
              items: [
                'Enforces federal securities laws',
                'Oversees securities exchanges, broker-dealers, investment advisers, and mutual funds',
                'Requires public companies to disclose financial information',
                'Has enforcement authority — can bring civil actions and refer criminal cases to the DOJ'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'FINRA (Financial Industry Regulatory Authority)'
            },
            {
              type: 'paragraph',
              text: 'FINRA is a self-regulatory organization (SRO) that oversees broker-dealers and their registered representatives. It is NOT a government agency — it is a private organization authorized by Congress to regulate the industry.'
            },
            {
              type: 'list',
              items: [
                'Writes and enforces rules for broker-dealers',
                'Administers licensing exams (SIE, Series 7, Series 63, etc.)',
                'Operates BrokerCheck — public database of broker/firm history',
                'Can fine, suspend, or bar individuals from the industry'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Key Legislation You Must Know'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Securities Act of 1933 ("The Paper Act")', description: 'Governs PRIMARY market. Requires registration of new securities with the SEC. Mandates disclosure via prospectus. Prevents fraud in new offerings.' },
                { label: 'Securities Exchange Act of 1934', description: 'Governs SECONDARY market. Created the SEC. Regulates broker-dealers, exchanges, and insider trading. Requires ongoing reporting by public companies.' },
                { label: 'Investment Company Act of 1940', description: 'Regulates mutual funds and other investment companies. Sets diversification requirements and disclosure rules.' },
                { label: 'Investment Advisers Act of 1940', description: 'Regulates investment advisers. Requires registration with SEC or state. Establishes fiduciary duty.' }
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: "1933 = New issues (primary market)." "1934 = Trading (secondary market) + created the SEC." Memorize these cold — they appear on nearly every SIE exam.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Other Key Regulators'
            },
            {
              type: 'list',
              items: [
                'MSRB (Municipal Securities Rulemaking Board) — writes rules for municipal securities dealers, but does NOT enforce them (FINRA and SEC enforce)',
                'SIPC (Securities Investor Protection Corporation) — protects customers if a broker-dealer fails (NOT investment losses). Covers up to $500K ($250K cash)',
                'Federal Reserve — regulates bank holding companies and margin requirements (Regulation T)',
                'OCC (Office of the Comptroller of the Currency) — regulates national banks',
                'State regulators — enforce "Blue Sky Laws" governing securities at the state level'
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'cm-q1',
          question: 'A company conducts an Initial Public Offering (IPO). In which market does this transaction take place?',
          options: ['Secondary market', 'Primary market', 'OTC market', 'Money market'],
          correctIndex: 1,
          explanation: 'An IPO is the first-time sale of a company\'s shares to the public. Since this is a new issuance, it occurs in the primary market. The proceeds go directly to the issuing company.'
        },
        {
          id: 'cm-q2',
          question: 'An investor sells 100 shares of Apple stock on the NYSE. This transaction occurs in the:',
          options: ['Primary market', 'Secondary market', 'New issue market', 'Underwriting market'],
          correctIndex: 1,
          explanation: 'Trading of already-issued securities between investors on exchanges like the NYSE is a secondary market transaction. Apple receives none of the proceeds — it flows between investors.'
        },
        {
          id: 'cm-q3',
          question: 'Which of the following BEST describes a broker acting as an agent?',
          options: [
            'The broker buys securities for its own inventory and sells them to the customer at a markup',
            'The broker executes a trade on behalf of a customer and earns a commission',
            'The broker guarantees the customer a minimum return on the investment',
            'The broker acts as both buyer and seller in the same transaction'
          ],
          correctIndex: 1,
          explanation: 'When acting as an agent (broker), the firm executes trades on behalf of clients and earns a commission. The firm does NOT take ownership of the security. Acting as a principal (dealer) involves buying for the firm\'s own account.'
        },
        {
          id: 'cm-q4',
          question: 'FINRA is best described as:',
          options: [
            'A federal government agency that enforces securities laws',
            'A self-regulatory organization (SRO) that oversees broker-dealers',
            'A state regulator that enforces Blue Sky Laws',
            'The primary regulator of investment advisers'
          ],
          correctIndex: 1,
          explanation: 'FINRA is a self-regulatory organization (SRO) — a private entity authorized by Congress to regulate the broker-dealer industry. It is NOT a government agency. The SEC is the federal agency; state regulators handle Blue Sky Laws; the SEC and states regulate investment advisers.'
        },
        {
          id: 'cm-q5',
          question: 'The Securities Act of 1933 primarily governs:',
          options: [
            'Secondary market trading of existing securities',
            'The creation and oversight of the SEC',
            'New securities offerings in the primary market',
            'Insider trading prohibitions'
          ],
          correctIndex: 2,
          explanation: 'The Securities Act of 1933 ("The Paper Act") governs the primary market — the initial sale of new securities. It requires registration and disclosure (via prospectus) for new issues. The Securities Exchange Act of 1934 governs the secondary market and created the SEC.'
        },
        {
          id: 'cm-q6',
          question: 'SIPC (Securities Investor Protection Corporation) protects customers against:',
          options: [
            'Losses due to poor investment decisions',
            'Market downturns causing portfolio losses',
            'Broker-dealer insolvency and missing customer assets',
            'Fraudulent securities recommendations'
          ],
          correctIndex: 2,
          explanation: 'SIPC protects customers if a broker-dealer goes bankrupt and customer assets are missing or at risk. It covers up to $500,000 ($250,000 in cash). SIPC does NOT protect against investment losses — it is not insurance against bad investments.'
        },
        {
          id: 'cm-q7',
          question: 'An individual has a net worth of $1.2 million (excluding primary residence) and earns $180,000 annually. This person qualifies as:',
          options: [
            'An institutional investor only',
            'A retail investor only',
            'An accredited investor',
            'Neither accredited nor institutional'
          ],
          correctIndex: 2,
          explanation: 'An accredited investor must meet ONE of two criteria: (1) $1M+ net worth excluding primary residence, OR (2) $200K+ annual income ($300K+ joint). This person has $1.2M net worth, so they qualify as an accredited investor regardless of income.'
        },
        {
          id: 'cm-q8',
          question: 'Which regulatory body writes rules for municipal securities but does NOT enforce them?',
          options: ['SEC', 'FINRA', 'MSRB', 'SIPC'],
          correctIndex: 2,
          explanation: 'The MSRB (Municipal Securities Rulemaking Board) writes rules for municipal securities dealers, BUT it has no enforcement authority. FINRA and the SEC actually enforce MSRB rules. This is a classic SIE exam distinction.'
        },
        {
          id: 'cm-q9',
          question: 'A firm buys bonds from its own inventory and sells them to a customer at a price higher than it paid. The firm is acting as:',
          options: ['Agent', 'Broker', 'Principal', 'Fiduciary'],
          correctIndex: 2,
          explanation: 'When a firm sells securities from its own inventory and profits from the markup (or markdown on purchases), it is acting as a principal (dealer). Agents earn commissions by executing trades on behalf of clients without owning the securities.'
        },
        {
          id: 'cm-q10',
          question: 'Which of the following is a characteristic of the over-the-counter (OTC) market?',
          options: [
            'All transactions occur on a centralized exchange floor',
            'Prices are set by an auction process',
            'Trading occurs through a decentralized dealer network',
            'Only government securities are traded here'
          ],
          correctIndex: 2,
          explanation: 'The OTC market is decentralized — there is no central exchange. Trading occurs through a network of dealers who negotiate prices directly. This contrasts with exchange markets like the NYSE, which use centralized, auction-based pricing.'
        }
      ]
    },
    {
      id: 'products-risks',
      title: 'Understanding Products & Their Risks',
      description: 'Deep dive into the full range of securities products — equities, fixed income, packaged products, options, and more — along with the specific risks each carries.',
      requiredScore: 80,
      lessons: [
        {
          id: 'equity-securities',
          title: 'Equity Securities',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Equity Securities'
            },
            {
              type: 'paragraph',
              text: 'Equity securities represent ownership in a company. When you buy stock, you become a partial owner (shareholder) of that company. Equity is the largest and most widely traded category of securities.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Common Stock'
            },
            {
              type: 'paragraph',
              text: 'Common stock is the most basic form of equity ownership. Common shareholders are the residual owners — they have claim to assets and earnings after all creditors and preferred shareholders are paid.'
            },
            {
              type: 'list',
              items: [
                'Voting rights — one vote per share on major corporate decisions (board elections, mergers)',
                'Dividends — NOT guaranteed; declared at the discretion of the board',
                'Preemptive rights — right to maintain percentage ownership when new shares are issued',
                'Last in line — in liquidation, common shareholders are paid after ALL creditors and preferred shareholders',
                'Unlimited upside — no cap on potential gains'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Preferred Stock'
            },
            {
              type: 'paragraph',
              text: 'Preferred stock is a hybrid between common stock and bonds. It has equity characteristics (ownership) but behaves more like a fixed-income security.'
            },
            {
              type: 'list',
              items: [
                'Fixed dividends — stated dividend rate, paid before common stockholders',
                'No voting rights (generally)',
                'Priority in liquidation — paid before common stock, but after debt holders',
                'Cumulative preferred: missed dividends accumulate (arrears) and must be paid before common dividends',
                'Convertible preferred: can be converted into common stock at a set price'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: In liquidation, the priority order is: 1) Secured creditors → 2) Unsecured creditors → 3) Preferred stockholders → 4) Common stockholders. Common shareholders have the MOST risk and MOST potential reward.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'American Depositary Receipts (ADRs)'
            },
            {
              type: 'paragraph',
              text: 'ADRs allow U.S. investors to buy shares of foreign companies on U.S. exchanges in U.S. dollars. The foreign shares are held by a U.S. depositary bank, which issues the ADR certificates. ADRs carry currency risk in addition to the typical equity risks.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Key Equity Risks'
            },
            {
              type: 'list',
              items: [
                'Market risk (systematic risk) — overall market declines affecting all equities',
                'Business risk (unsystematic risk) — company-specific risk; can be reduced through diversification',
                'Liquidity risk — difficulty selling the security at a fair price',
                'Dividend risk — dividends are not guaranteed and can be cut',
                'Capital risk — possibility of losing all invested capital'
              ]
            }
          ]
        },
        {
          id: 'debt-securities',
          title: 'Debt Securities (Bonds)',
          duration: '25 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Debt Securities (Bonds)'
            },
            {
              type: 'paragraph',
              text: 'Debt securities are IOUs — when you buy a bond, you are lending money to the issuer in exchange for regular interest payments and return of principal at maturity. Bonds are also called fixed-income securities.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Bond Basics'
            },
            {
              type: 'list',
              items: [
                'Par value (face value): the amount repaid at maturity — typically $1,000 for corporate bonds',
                'Coupon rate: the annual interest rate stated on the bond (e.g., 5% = $50/year on a $1,000 bond)',
                'Maturity date: when the principal is repaid',
                'Yield: the actual return based on current price — moves INVERSE to price'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'CRITICAL: Bond prices and interest rates (yields) move in OPPOSITE directions. When rates rise, bond prices fall. When rates fall, bond prices rise. This is the most tested concept in fixed income.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Types of Bonds'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'U.S. Treasury Securities', description: 'Backed by the full faith and credit of the U.S. government. Safest investment. T-Bills (<1 year), T-Notes (2-10 years), T-Bonds (20-30 years). Interest is exempt from state and local taxes.' },
                { label: 'Municipal Bonds (Munis)', description: 'Issued by states, cities, and local governments. Interest is exempt from federal income tax (and often state/local if issued in your state). Two types: General Obligation (GO) and Revenue bonds.' },
                { label: 'Corporate Bonds', description: 'Issued by corporations. Higher yield than Treasuries or munis (higher risk). Interest is fully taxable. Rated by credit agencies (Moody\'s, S&P, Fitch).' },
                { label: 'Zero-Coupon Bonds', description: 'No periodic interest payments. Sold at deep discount, redeemed at par. Interest accrues over time. Phantom income is taxable annually even though not received.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Key Bond Risks'
            },
            {
              type: 'list',
              items: [
                'Interest rate risk — bond price falls when rates rise (longer maturities = more risk)',
                'Credit/default risk — issuer fails to make interest or principal payments',
                'Inflation risk (purchasing power risk) — fixed payments lose real value in inflationary environments',
                'Call risk — issuer may redeem bond early (when rates drop), forcing reinvestment at lower rates',
                'Liquidity risk — some bonds are thinly traded and hard to sell at fair prices'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: Municipal bonds pay lower stated interest than corporate bonds, but their tax-exempt status makes them attractive for investors in high tax brackets. The higher your tax bracket, the more valuable the tax exemption.'
            }
          ]
        },
        {
          id: 'packaged-products',
          title: 'Packaged Products & Other Securities',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Packaged Products & Other Securities'
            },
            {
              type: 'paragraph',
              text: 'Packaged products pool money from many investors and invest in a diversified portfolio. They offer built-in diversification and professional management, but come with fees and their own unique risks.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Mutual Funds'
            },
            {
              type: 'list',
              items: [
                'Pool money from many investors into a professionally managed portfolio',
                'Priced once per day at NAV (Net Asset Value) after market close',
                'Open-end funds: constantly issue and redeem shares at NAV',
                'Closed-end funds: fixed number of shares that trade on exchanges like stocks',
                'Load funds charge sales commissions; no-load funds do not',
                'Regulated under the Investment Company Act of 1940'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'NAV = (Total Assets - Total Liabilities) / Number of Shares Outstanding. Mutual fund shares are bought and redeemed at NAV (plus any load), not at market price.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Exchange-Traded Funds (ETFs)'
            },
            {
              type: 'list',
              items: [
                'Like mutual funds but trade on exchanges throughout the day like stocks',
                'Generally passively managed (track an index) — lower fees than active mutual funds',
                'Can be bought on margin and sold short (unlike mutual funds)',
                'Priced continuously during market hours, not just at end of day'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Variable Annuities & Variable Life Insurance'
            },
            {
              type: 'paragraph',
              text: 'Variable annuities and variable life insurance are insurance products with investment components. Because the return is tied to the performance of underlying securities (subaccounts), they are considered securities and require a securities license to sell.'
            },
            {
              type: 'list',
              items: [
                'Variable annuities: Tax-deferred growth, guaranteed death benefit, but high fees',
                'Surrender charges apply if you withdraw funds early',
                'Require BOTH an insurance license AND a securities license (Series 6 or 7) to sell',
                'Suitable primarily for investors who have maxed out other tax-advantaged accounts'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Options Basics'
            },
            {
              type: 'paragraph',
              text: 'Options are derivative contracts that give the buyer the right (but not obligation) to buy or sell a security at a specified price (strike price) before a specified date (expiration).'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Call Option', description: 'Right to BUY 100 shares at the strike price. Buyer profits when the stock price rises above strike + premium paid. Seller (writer) profits when stock stays flat or falls.' },
                { label: 'Put Option', description: 'Right to SELL 100 shares at the strike price. Buyer profits when stock falls below strike - premium paid. Used as portfolio insurance.' }
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: Options are complex and carry significant risk. Buyers of options can lose their entire premium. Sellers (writers) of naked calls have unlimited risk. Options expire and become worthless if not exercised.'
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'pr-q1',
          question: 'In the event of corporate liquidation, which of the following is paid LAST?',
          options: ['Secured creditors', 'Preferred stockholders', 'Common stockholders', 'Unsecured bondholders'],
          correctIndex: 2,
          explanation: 'The priority in liquidation is: Secured creditors → Unsecured creditors/bondholders → Preferred stockholders → Common stockholders. Common stockholders are last in line, which reflects their greatest risk but also their potential for the highest reward.'
        },
        {
          id: 'pr-q2',
          question: 'When interest rates rise, what happens to existing bond prices?',
          options: ['Bond prices rise', 'Bond prices fall', 'Bond prices are unaffected', 'Bond prices rise for short-term and fall for long-term bonds'],
          correctIndex: 1,
          explanation: 'Bond prices and interest rates move inversely. When rates rise, new bonds offer higher yields, making existing bonds with lower coupon rates less attractive. To compensate, existing bond prices fall. This is the most fundamental concept in fixed income.'
        },
        {
          id: 'pr-q3',
          question: 'Which of the following statements about preferred stock is CORRECT?',
          options: [
            'Preferred stockholders have voting rights at annual meetings',
            'Preferred dividends must be paid before common dividends',
            'Preferred stockholders are paid before creditors in liquidation',
            'Preferred stock offers unlimited upside potential like common stock'
          ],
          correctIndex: 1,
          explanation: 'Preferred stockholders receive dividends before common stockholders. However, preferred shareholders generally do NOT have voting rights, are paid AFTER creditors (not before) in liquidation, and have limited upside compared to common stock.'
        },
        {
          id: 'pr-q4',
          question: 'A mutual fund\'s Net Asset Value (NAV) is calculated as:',
          options: [
            'Total assets divided by number of outstanding shares',
            '(Total assets minus total liabilities) divided by outstanding shares',
            'Total liabilities divided by total assets',
            'The market price of the fund\'s shares on the exchange'
          ],
          correctIndex: 1,
          explanation: 'NAV = (Total Assets - Total Liabilities) / Shares Outstanding. NAV represents the per-share value of the fund\'s underlying holdings after subtracting liabilities. Mutual fund shares are purchased and redeemed at NAV (plus any applicable load).'
        },
        {
          id: 'pr-q5',
          question: 'Which of the following securities is exempt from federal income tax on its interest payments?',
          options: ['Corporate bonds', 'U.S. Treasury bonds', 'Municipal bonds', 'Zero-coupon bonds'],
          correctIndex: 2,
          explanation: 'Municipal bond interest is exempt from federal income tax, making them particularly attractive for investors in high tax brackets. Treasury bonds are exempt from STATE and local taxes but are subject to federal tax. Corporate bond interest is fully taxable.'
        },
        {
          id: 'pr-q6',
          question: 'What is the primary difference between an ETF and a mutual fund?',
          options: [
            'ETFs are actively managed; mutual funds are passively managed',
            'ETFs trade on exchanges throughout the day; mutual funds price once daily at NAV',
            'ETFs are not regulated; mutual funds are regulated by the SEC',
            'ETFs can only hold stocks; mutual funds can hold any security'
          ],
          correctIndex: 1,
          explanation: 'The key difference is trading mechanics. ETFs trade on exchanges like stocks throughout the day at market prices. Mutual funds price once per day at NAV after market close. Most ETFs are also passively managed (index-tracking), though this isn\'t the defining characteristic.'
        },
        {
          id: 'pr-q7',
          question: 'A call option gives the buyer the right to:',
          options: [
            'Sell 100 shares at the strike price before expiration',
            'Buy 100 shares at the strike price before expiration',
            'Receive dividend payments from the underlying stock',
            'Vote on corporate matters related to the underlying stock'
          ],
          correctIndex: 1,
          explanation: 'A call option gives the buyer the right (not obligation) to BUY 100 shares of the underlying stock at the strike price before expiration. Call buyers profit when the stock rises above the strike price plus the premium paid. Put options give the right to SELL.'
        },
        {
          id: 'pr-q8',
          question: 'Selling a variable annuity requires which of the following licenses?',
          options: [
            'An insurance license only',
            'A securities license (Series 6 or 7) only',
            'Both an insurance license AND a securities license',
            'A Series 65 investment adviser license only'
          ],
          correctIndex: 2,
          explanation: 'Variable annuities are insurance products with returns tied to underlying securities (subaccounts). Because they are considered securities, selling them requires BOTH an insurance license AND a securities license (Series 6 or 7). This dual-license requirement is a common exam point.'
        },
        {
          id: 'pr-q9',
          question: 'Cumulative preferred stock means:',
          options: [
            'Dividends accumulate and grow at a guaranteed rate each year',
            'Missed dividends must be paid in arrears before common dividends can be paid',
            'The stock accumulates voting rights over time',
            'The stock can be converted to common stock at the holder\'s discretion'
          ],
          correctIndex: 1,
          explanation: 'Cumulative preferred stock means that if the company misses preferred dividend payments, those missed dividends accumulate (go into "arrears"). All accumulated preferred dividends must be paid before any common stock dividend can be declared or paid.'
        },
        {
          id: 'pr-q10',
          question: 'An investor buys a zero-coupon bond at a deep discount. Which statement is TRUE?',
          options: [
            'The investor receives no taxable income until the bond matures',
            'The investor must pay taxes on the accreted interest each year, even without receiving cash',
            'Zero-coupon bonds have no interest rate risk',
            'Zero-coupon bonds pay interest semi-annually like regular bonds'
          ],
          correctIndex: 1,
          explanation: 'Zero-coupon bonds generate "phantom income" — the IRS requires investors to pay taxes on the annual accretion (implied interest) even though no cash is received until maturity. This is a critical tax disadvantage of zero-coupon bonds held in taxable accounts.'
        }
      ]
    },
    {
      id: 'trading-accounts',
      title: 'Trading, Customer Accounts & Prohibited Activities',
      description: 'Learn how trades are executed, how different account types work, and what activities are strictly prohibited in the securities industry.',
      requiredScore: 80,
      lessons: [
        {
          id: 'order-types',
          title: 'Order Types & Trade Execution',
          duration: '15 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Order Types & Trade Execution'
            },
            {
              type: 'paragraph',
              text: 'Understanding how orders are placed and executed is fundamental to understanding how markets work. Different order types give investors different levels of price control and certainty of execution.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Market Orders'
            },
            {
              type: 'paragraph',
              text: 'A market order instructs the broker to buy or sell immediately at the best available current price. It prioritizes speed of execution over price.'
            },
            {
              type: 'list',
              items: [
                'Executed immediately at current market price',
                'Guaranteed execution (for liquid securities) — NOT guaranteed price',
                'Best for liquid, actively traded securities',
                'Risk: in volatile markets, the execution price may be significantly worse than expected (slippage)'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Limit Orders'
            },
            {
              type: 'paragraph',
              text: 'A limit order sets a maximum price you\'ll pay (buy limit) or minimum price you\'ll accept (sell limit). It prioritizes price control over certainty of execution.'
            },
            {
              type: 'list',
              items: [
                'Buy limit: executed only at the limit price or LOWER',
                'Sell limit: executed only at the limit price or HIGHER',
                'Execution is NOT guaranteed — if price doesn\'t reach limit, order may not fill',
                'Protects against unfavorable prices'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Stop Orders (Stop-Loss Orders)'
            },
            {
              type: 'paragraph',
              text: 'A stop order becomes a market order once the stock reaches a specified "stop price." Used to limit losses or protect profits.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Sell Stop (Stop-Loss)', description: 'Placed BELOW current market price. If stock falls to stop price, becomes a market sell order. Used to limit downside loss on a long position.' },
                { label: 'Buy Stop', description: 'Placed ABOVE current market price. If stock rises to stop price, becomes a market buy order. Used to protect a short position or capture breakouts.' }
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: Stop-limit orders combine stop and limit — when the stop is triggered, it becomes a LIMIT order (not a market order). This provides price protection but risks non-execution if the stock gaps past the limit.'
            }
          ]
        },
        {
          id: 'account-types',
          title: 'Customer Account Types',
          duration: '15 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Customer Account Types'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Cash Accounts vs. Margin Accounts'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Cash Account', description: 'Customer must pay the full purchase price of securities within the settlement period. No borrowing allowed. Standard account for most investors. Settlement: T+1 for equities.' },
                { label: 'Margin Account', description: 'Customer can borrow up to 50% of the purchase price from the broker (Regulation T). Amplifies both gains and losses. Requires a margin agreement. Minimum equity required at all times.' }
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'Regulation T (set by the Federal Reserve) requires customers to pay at least 50% of the purchase price of marginable securities. FINRA requires a minimum maintenance margin of 25% equity at all times.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Retirement Accounts'
            },
            {
              type: 'list',
              items: [
                'Traditional IRA: contributions may be tax-deductible, growth is tax-deferred, withdrawals taxed as ordinary income',
                'Roth IRA: contributions are after-tax, growth and qualified withdrawals are tax-FREE',
                '401(k): employer-sponsored, pre-tax contributions, tax-deferred growth',
                'Required Minimum Distributions (RMDs) begin at age 73 for Traditional IRAs and 401(k)s'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Joint Accounts'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Joint Tenants with Rights of Survivorship (JTWROS)', description: 'Each tenant owns an equal share. When one owner dies, their share passes AUTOMATICALLY to the surviving tenant(s). Avoids probate.' },
                { label: 'Tenants in Common (TIC)', description: 'Each owner can have unequal shares. When one owner dies, their share passes to their ESTATE (not automatically to co-owners). Goes through probate.' }
              ]
            }
          ]
        },
        {
          id: 'prohibited-activities',
          title: 'Prohibited Activities',
          duration: '15 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Prohibited Activities'
            },
            {
              type: 'paragraph',
              text: 'The securities industry has strict rules against conduct that harms investors or undermines market integrity. These prohibited activities are heavily tested on the SIE exam.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Insider Trading'
            },
            {
              type: 'paragraph',
              text: 'Trading on material, non-public information (MNPI) is illegal. Material information is information that would likely affect an investor\'s decision to buy or sell. Non-public means not yet released to the general public.'
            },
            {
              type: 'callout',
              variant: 'warning',
              text: 'Insider trading is a CRIMINAL offense. Penalties include fines up to $5 million and up to 20 years in prison for individuals. Firms can face fines up to $25 million.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Other Prohibited Activities'
            },
            {
              type: 'list',
              items: [
                'Churning: excessive trading in a customer\'s account to generate commissions — violates suitability rules',
                'Front-running: a broker trades in their own account BEFORE executing a large customer order they know will move the market',
                'Painting the tape (wash trading): creating the illusion of active trading by buying and selling the same security to oneself',
                'Marking the close: placing trades at the end of the day to influence the closing price',
                'Selling away: registered rep selling securities that are not approved by their broker-dealer',
                'Commingling: mixing customer funds with the firm\'s own funds — strictly prohibited',
                'Unauthorized trading: executing trades in a customer\'s account without their authorization',
                'Guaranteeing against loss: promising customers they won\'t lose money on an investment'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: These prohibited activities commonly appear as scenario questions on the SIE. Read carefully to identify which violation is occurring — the answer often hinges on subtle distinctions (e.g., front-running vs. insider trading).'
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'ta-q1',
          question: 'A customer places a buy limit order at $50 for a stock currently trading at $55. This order will execute:',
          options: [
            'Immediately at $55 (current market price)',
            'Only if the stock drops to $50 or below',
            'Only if the stock rises to $55 or above',
            'At $50 regardless of current market price'
          ],
          correctIndex: 1,
          explanation: 'A buy limit order sets the MAXIMUM price the customer is willing to pay. The order at $50 will only execute if the stock falls to $50 or lower. Since the stock is currently at $55, the order will not execute until/unless the price drops.'
        },
        {
          id: 'ta-q2',
          question: 'Regulation T, set by the Federal Reserve, requires customers purchasing securities on margin to pay at least:',
          options: ['25% of the purchase price', '50% of the purchase price', '75% of the purchase price', '100% of the purchase price'],
          correctIndex: 1,
          explanation: 'Regulation T (set by the Federal Reserve Board) requires customers to deposit at least 50% of the purchase price for marginable securities. This is the initial margin requirement. FINRA separately requires a 25% maintenance margin at all times.'
        },
        {
          id: 'ta-q3',
          question: 'A broker executes trades in their personal account immediately before filling a large customer order they know will move the stock price. This is an example of:',
          options: ['Churning', 'Front-running', 'Insider trading', 'Painting the tape'],
          correctIndex: 1,
          explanation: 'Front-running occurs when a broker trades for their own account based on advance knowledge of pending customer orders that will move the price. This is different from insider trading (which involves material non-public corporate information) — front-running involves using order flow information.'
        },
        {
          id: 'ta-q4',
          question: 'In a Joint Tenants with Rights of Survivorship (JTWROS) account, when one owner dies:',
          options: [
            'Their share passes to their estate and goes through probate',
            'Their share automatically passes to the surviving account holder(s)',
            'The account is immediately frozen pending court approval',
            'Each owner\'s share is distributed equally among all heirs'
          ],
          correctIndex: 1,
          explanation: 'In JTWROS accounts, the deceased owner\'s share automatically transfers to the surviving joint tenant(s) — bypassing probate. This is the key feature of JTWROS and distinguishes it from Tenants in Common (TIC), where the deceased\'s share goes to their estate.'
        },
        {
          id: 'ta-q5',
          question: 'Which of the following BEST describes churning?',
          options: [
            'A broker trading on material non-public information',
            'Excessive trading in a customer account primarily to generate commissions for the broker',
            'A broker promising a customer a guaranteed return on their investment',
            'Mixing customer funds with the firm\'s own funds'
          ],
          correctIndex: 1,
          explanation: 'Churning is excessive trading in a customer\'s account with the primary motivation of generating commissions for the broker. It violates suitability rules and is a serious breach of fiduciary responsibility. Commingling = mixing funds; guaranteeing returns is a separate violation.'
        },
        {
          id: 'ta-q6',
          question: 'A sell stop order is placed below the current market price. Which statement is TRUE?',
          options: [
            'It executes immediately as a limit order at the stop price',
            'It becomes a market sell order when the stock falls to the stop price',
            'It guarantees the investor will receive exactly the stop price',
            'It only activates if the stock rises to the stop price'
          ],
          correctIndex: 1,
          explanation: 'A sell stop order is triggered when the stock falls TO or below the stop price, at which point it becomes a MARKET sell order and executes at the best available price. It does NOT guarantee the stop price — in fast markets, execution may occur below the stop price.'
        },
        {
          id: 'ta-q7',
          question: 'Trading on material, non-public information is:',
          options: [
            'Permitted if the trader discloses the trade within 48 hours',
            'Illegal and considered insider trading',
            'Only illegal for corporate insiders, not general public investors',
            'Permitted for institutional investors but not retail investors'
          ],
          correctIndex: 1,
          explanation: 'Trading on material, non-public information (MNPI) is illegal insider trading — for ANYONE who receives the information, not just corporate insiders. This includes tippers and tippees. Penalties include criminal fines up to $5M and up to 20 years in prison.'
        },
        {
          id: 'ta-q8',
          question: 'A registered representative sells securities from a private company to a client, but the investment is not approved or offered through their broker-dealer. This is known as:',
          options: ['Front-running', 'Churning', 'Selling away', 'Unauthorized trading'],
          correctIndex: 2,
          explanation: 'Selling away occurs when a registered representative sells securities outside the firm\'s approved product list without the broker-dealer\'s knowledge or approval. This is a serious FINRA violation that can result in termination and industry bar.'
        }
      ]
    },
    {
      id: 'regulatory-framework',
      title: 'Overview of the Regulatory Framework',
      description: 'Understand how FINRA rules, registration requirements, and the overall regulatory structure work together to protect investors and maintain market integrity.',
      requiredScore: 80,
      lessons: [
        {
          id: 'finra-rules',
          title: 'FINRA Rules & Registration',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'FINRA Rules & Registration Requirements'
            },
            {
              type: 'paragraph',
              text: 'FINRA\'s rulebook governs the conduct of broker-dealers and their associated persons. Key rules establish standards for how firms and individuals must operate.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Registration Requirements'
            },
            {
              type: 'paragraph',
              text: 'Anyone who sells securities or provides investment advice must be properly registered. The SIE is the entry-level exam — passing it alone does NOT make you licensed. You must also pass a "top-off" exam (like Series 7, 6, or 57) and be associated with a FINRA member firm.'
            },
            {
              type: 'list',
              items: [
                'SIE exam: entry-level, no sponsorship required, valid for 4 years',
                'Series 7 (General Securities Representative): broad license, requires firm sponsorship',
                'Series 6 (Investment Company Products): limited to mutual funds, variable products',
                'Series 63/65/66: state-level licenses for investment advisers and agents',
                'Registration must be maintained through continuing education (CE)'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Suitability & Know Your Customer (KYC)'
            },
            {
              type: 'paragraph',
              text: 'FINRA Rule 2111 (Suitability) requires that firms and brokers have a reasonable basis to believe that a recommendation is suitable for a particular customer based on their profile.'
            },
            {
              type: 'list',
              items: [
                'KYC (Know Your Customer): collect and maintain information about customer financial situation, risk tolerance, investment objectives, and time horizon',
                'Reasonable basis suitability: the investment must be suitable for SOME investors',
                'Customer-specific suitability: the investment must be suitable for THIS specific customer',
                'Quantitative suitability: the frequency/amount of trading must be suitable (guards against churning)'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'Reg BI (Regulation Best Interest), effective 2020, requires broker-dealers to act in the BEST INTEREST of retail customers, not just meet a suitability standard. This is a higher standard than traditional suitability.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Anti-Money Laundering (AML)'
            },
            {
              type: 'paragraph',
              text: 'Broker-dealers must have written AML programs to detect and report suspicious activity. The Bank Secrecy Act requires filing Suspicious Activity Reports (SARs) with FinCEN (Financial Crimes Enforcement Network).'
            },
            {
              type: 'list',
              items: [
                'Currency Transaction Reports (CTRs): required for cash transactions over $10,000',
                'Suspicious Activity Reports (SARs): filed for transactions that appear suspicious, regardless of amount',
                'Firms must train all employees on AML procedures',
                'Structuring (breaking large cash transactions into smaller ones to avoid reporting) is illegal'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: The $10,000 threshold triggers a CTR — this is automatic and not optional. A SAR can be filed for ANY suspicious transaction, even amounts well below $10,000. Never tip off a customer that a SAR has been filed.'
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'rf-q1',
          question: 'Which statement about the SIE exam is CORRECT?',
          options: [
            'Passing the SIE exam alone qualifies you to sell securities',
            'The SIE requires sponsorship from a FINRA member firm to take',
            'The SIE is a co-requisite that must be combined with a "top-off" exam for full licensing',
            'The SIE exam has no expiration date once passed'
          ],
          correctIndex: 2,
          explanation: 'The SIE is an entry-level exam with no sponsorship requirement. However, passing the SIE alone does NOT give you a license to sell securities. You must also pass a "top-off" exam (like Series 7) AND be associated with a FINRA member firm. The SIE is valid for 4 years.'
        },
        {
          id: 'rf-q2',
          question: 'A Currency Transaction Report (CTR) must be filed for:',
          options: [
            'Any suspicious transaction regardless of amount',
            'Cash transactions exceeding $10,000',
            'Wire transfers over $5,000 to foreign accounts',
            'All securities transactions over $50,000'
          ],
          correctIndex: 1,
          explanation: 'CTRs are required for cash transactions exceeding $10,000 — this is mandatory under the Bank Secrecy Act. SARs (Suspicious Activity Reports) are filed for suspicious activity of any amount. These are separate reports with separate triggers.'
        },
        {
          id: 'rf-q3',
          question: 'FINRA Rule 2111 (Suitability) requires that investment recommendations be:',
          options: [
            'The highest-returning option available to the customer',
            'Suitable based on the customer\'s financial profile, objectives, and risk tolerance',
            'Approved by the SEC before being made to retail customers',
            'Only made in writing to avoid disputes'
          ],
          correctIndex: 1,
          explanation: 'Suitability requires brokers to have a reasonable basis for believing a recommendation is appropriate for a specific customer based on their financial situation, investment objectives, risk tolerance, time horizon, and other relevant factors gathered through KYC.'
        },
        {
          id: 'rf-q4',
          question: 'A customer makes multiple cash deposits of $9,500 to avoid triggering a Currency Transaction Report. This is known as:',
          options: ['Front-running', 'Structuring', 'Churning', 'Money laundering'],
          correctIndex: 1,
          explanation: 'Structuring (also called "smurfing") is the practice of breaking up large cash transactions into smaller amounts to evade CTR filing requirements. Structuring is illegal under the Bank Secrecy Act, even if the underlying funds are legitimate.'
        },
        {
          id: 'rf-q5',
          question: 'Regulation Best Interest (Reg BI) applies to:',
          options: [
            'All investment advisers managing over $110 million in assets',
            'Broker-dealers making recommendations to retail customers',
            'All FINRA member firms regardless of customer type',
            'Only institutional investors and sophisticated traders'
          ],
          correctIndex: 1,
          explanation: 'Reg BI (effective June 2020) requires broker-dealers to act in the BEST INTEREST of retail customers when making recommendations. It sets a higher standard than the traditional suitability rule. Investment advisers are governed by a fiduciary standard under the Investment Advisers Act.'
        }
      ]
    }
  ]
}
