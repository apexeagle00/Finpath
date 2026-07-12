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
        },
        {
          id: 'economic-factors',
          title: 'Economic Factors & the Federal Reserve',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Economic Factors & the Federal Reserve'
            },
            {
              type: 'paragraph',
              text: 'Capital markets do not exist in a vacuum — they respond to economic forces constantly. The SIE exam tests your understanding of how monetary policy, fiscal policy, and economic cycles affect securities prices.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Monetary Policy vs. Fiscal Policy'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Monetary Policy', description: 'Controlled by the Federal Reserve. Uses interest rate changes, open market operations, and reserve requirements to manage money supply and inflation. Works through the banking system.' },
                { label: 'Fiscal Policy', description: 'Controlled by Congress and the President. Uses government spending and taxation to influence economic activity. A stimulus package is fiscal policy; a Fed rate cut is monetary policy.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: "The Federal Reserve's Three Tools"
            },
            {
              type: 'list',
              items: [
                'Open Market Operations (OMO): The Fed buys or sells U.S. Treasury securities in the open market. Buying bonds injects money into the system (expansionary); selling bonds withdraws money (contractionary). This is the most-used tool.',
                'Discount Rate: The interest rate the Fed charges banks for short-term loans. Lowering the discount rate encourages bank borrowing and lending (expansionary); raising it discourages it (contractionary).',
                'Reserve Requirements: The minimum percentage of deposits banks must hold in reserve. Lowering requirements increases money banks can lend (expansionary); raising them reduces it. Rarely used.'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY: Federal Funds Rate = the rate banks charge EACH OTHER for overnight lending. Discount Rate = the rate the Fed charges banks. Prime Rate = what banks charge their best corporate customers (typically Fed Funds + 3%). The Fed directly sets the discount rate; the federal funds rate is a target.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'How Interest Rate Changes Affect Markets'
            },
            {
              type: 'list',
              items: [
                'Rates rise → Bond prices fall (inverse relationship). New bonds offer higher yields, making existing lower-coupon bonds worth less.',
                'Rates rise → Stock prices often fall. Higher borrowing costs hurt corporate profits; higher yields make bonds more attractive relative to stocks.',
                'Rates fall → Bond prices rise. Existing bonds with higher coupons become more valuable.',
                'Rates fall → Stock prices often rise. Lower borrowing costs boost corporate profits; lower yields make stocks relatively more attractive.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'The Business Cycle'
            },
            {
              type: 'list',
              items: [
                'Expansion (Recovery): GDP rising, employment growing, consumer confidence up, corporate earnings improving',
                'Peak: Maximum economic activity; inflation often becomes a concern',
                'Contraction (Recession): GDP declining for 2+ consecutive quarters, unemployment rising, spending falling',
                'Trough: The bottom of the cycle; economic activity at its lowest before recovery begins'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Economic Indicators'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Leading Indicators', description: 'Change BEFORE the economy. Predict future direction. Examples: stock market performance, building permits, consumer confidence index, new orders for manufacturing goods.' },
                { label: 'Lagging Indicators', description: 'Change AFTER the economy. Confirm trends. Examples: unemployment rate, outstanding loans, average prime rate charged by banks.' },
                { label: 'Coincident Indicators', description: 'Change AT THE SAME TIME as the economy. Examples: GDP, personal income, industrial production.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Inflation'
            },
            {
              type: 'list',
              items: [
                'Demand-pull inflation: Too much money chasing too few goods. Economy "overheating." "Too much demand."',
                'Cost-push inflation: Rising production costs (labor, materials) passed on to consumers. Supply-side pressure.',
                'CPI (Consumer Price Index): Measures price changes for a basket of consumer goods and services — the primary inflation gauge.',
                'PPI (Producer Price Index): Measures price changes at the wholesale/producer level. Often a leading indicator of CPI changes.'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: GDP (Gross Domestic Product) measures output produced within a country regardless of who produces it. GNP (Gross National Product) measures output produced by a country\'s residents regardless of where. For the SIE, know that GDP is the primary measure of U.S. economic activity.'
            }
          ]
        },
        {
          id: 'underwriting-process',
          title: 'Securities Offerings & the Underwriting Process',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Securities Offerings & the Underwriting Process'
            },
            {
              type: 'paragraph',
              text: 'When companies want to raise capital by issuing securities, they rely on investment banks to bring those securities to market. This process — underwriting — is central to how the primary market functions.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Investment Bankers & the Underwriting Syndicate'
            },
            {
              type: 'paragraph',
              text: 'For large offerings, a lead underwriter (managing underwriter) assembles a syndicate — a group of investment banks that share the risk and distribution of the new securities. The syndicate collectively buys the securities from the issuer and resells them to the public.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Firm Commitment Underwriting', description: 'The underwriter BUYS all securities from the issuer and takes on the risk of reselling them. The issuer receives guaranteed proceeds. Most common for large, established companies.' },
                { label: 'Best Efforts Underwriting', description: 'The underwriter acts as AGENT — it tries its best to sell the securities but does NOT guarantee the issuer a specific amount. Used for smaller, riskier offerings.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'The IPO Process'
            },
            {
              type: 'list',
              items: [
                'File registration statement (S-1) with the SEC: full disclosure of company finances, risks, and use of proceeds',
                'Waiting period (cooling-off period): The SEC reviews the registration; the company cannot sell securities yet',
                'Red herring prospectus (preliminary prospectus): Distributed to potential investors during the waiting period — lacks final price and number of shares',
                'Effective date: SEC clears the registration; securities can now be sold',
                'Final prospectus: Contains the final offering price, number of shares, and all required disclosures'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY: During the waiting period, underwriters CAN distribute the red herring prospectus and take indications of interest, but CANNOT accept payment or make sales. The tombstone ad (announcing the offering) can run during the waiting period.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Special Offering Terms'
            },
            {
              type: 'list',
              items: [
                'Green Shoe Option (Overallotment): Allows underwriters to sell up to 15% more shares than originally planned if demand is strong. Provides price stabilization.',
                'Secondary offerings / Follow-on offerings: Additional stock issuances by a company already public (proceeds may go to company or selling shareholders)',
                'Shelf registration (Rule 415): Allows a company to register securities with the SEC and sell them over time (up to 3 years) without a new registration each time'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Private Placements & Exemptions'
            },
            {
              type: 'list',
              items: [
                'Regulation D / Rule 506: Exempt from SEC registration; sold to accredited investors only; no public advertising. Most common private placement exemption.',
                'Rule 144: Governs the sale of restricted securities (from private placements) and control securities (from insiders). Requires a holding period (6 months for reporting companies, 12 months for non-reporting) before public resale.',
                'Rule 144A: Allows qualified institutional buyers (QIBs) to trade restricted securities among themselves without the Rule 144 holding period. Creates a liquid secondary market for large institutions.',
                'Regulation A+: "Mini-IPO" — allows smaller companies to raise up to $75 million publicly with simplified registration. Less burdensome than a full IPO.',
                'Blue Sky Laws: State-level securities laws. Companies must comply with BOTH federal (SEC) and state registration requirements.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Market Infrastructure'
            },
            {
              type: 'list',
              items: [
                'DTCC (Depository Trust & Clearing Corporation): Provides clearing and settlement of securities trades',
                'DTC (Depository Trust Company): Subsidiary of DTCC; holds securities in electronic (book-entry) form for safekeeping',
                'Transfer agents: Maintain records of security ownership; process name changes, lost certificate replacements',
                'Third market: Exchange-listed securities traded in the OTC market (institutional block trading of listed securities)',
                'Fourth market: Institutions trading directly with each other through Electronic Communication Networks (ECNs), bypassing broker-dealers'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: Know the difference between Reg D (private placement to accredited investors, no registration), Rule 144 (holding period for resale of restricted shares), and Rule 144A (institutions trading restricted securities without holding period). These appear frequently on the SIE.'
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
        },
        {
          id: 'rights-warrants',
          title: 'Rights, Warrants & Advanced Equity Concepts',
          duration: '18 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Rights, Warrants & Advanced Equity Concepts'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Preemptive Rights & Rights Offerings'
            },
            {
              type: 'paragraph',
              text: 'When a company wants to issue new shares, existing shareholders may have preemptive rights — the right to maintain their proportional ownership by purchasing new shares before they are offered to the public.'
            },
            {
              type: 'list',
              items: [
                'Rights are issued directly to existing shareholders, typically one right per share owned',
                'Subscription price: The price at which shareholders can purchase new shares — set BELOW the current market price to incentivize exercise',
                'Rights on: Stock trading with the rights attached (before the ex-rights date)',
                'Ex-rights: Stock trading without the rights; buyers after this date do not receive rights',
                'Rights are short-term — typically 30-45 days to exercise or sell',
                'Standby underwriting: Investment bank agrees to purchase any unsubscribed shares from a rights offering'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Warrants'
            },
            {
              type: 'paragraph',
              text: 'Warrants are long-term options issued by a company that give the holder the right to purchase shares at a fixed price (the exercise price). They are often attached to bond or preferred stock issuances as a "sweetener" to attract investors.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Rights', description: 'Short-term (30-45 days). Issued to EXISTING shareholders. Below-market subscription price. Used when company issues new shares.' },
                { label: 'Warrants', description: 'Long-term (months to years). Often attached to new bond/preferred stock issues. Exercise price may be at or above current market. Act like long-term call options.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'American Depositary Receipts (ADRs)'
            },
            {
              type: 'list',
              items: [
                'ADRs allow U.S. investors to buy shares of foreign companies on U.S. exchanges in U.S. dollars',
                'Sponsored ADRs: Created with cooperation of the foreign company; must comply with SEC reporting requirements. Come in three levels (Level I, II, III) with increasing disclosure requirements',
                'Unsponsored ADRs: Created by a depository bank without the foreign company\'s direct involvement',
                'ADRs carry CURRENCY RISK — the value fluctuates with both the stock price AND the exchange rate between the foreign currency and the USD'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Corporate Actions & Their Effects'
            },
            {
              type: 'list',
              items: [
                'Forward stock split (e.g., 2:1): Share count doubles, price halves. Total market cap unchanged. Cost basis per share is halved.',
                'Reverse stock split (e.g., 1:10): Share count decreases, price increases proportionally. Used to maintain minimum listing price.',
                'Stock dividend: Additional shares issued instead of cash. Dilutes existing shares; price adjusts downward.',
                'Share buyback (repurchase): Company buys back its own shares. Reduces shares outstanding; EPS and stock price may increase.'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: In a 3:1 forward split — if you owned 100 shares at $90, after the split you own 300 shares at $30. Your total value ($9,000) is unchanged. The cost basis per share drops from $90 to $30.'
            }
          ]
        },
        {
          id: 'money-markets-fixed-income',
          title: 'Money Markets, Agency Securities & Advanced Fixed Income',
          duration: '22 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Money Markets, Agency Securities & Advanced Fixed Income'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Money Market Instruments'
            },
            {
              type: 'paragraph',
              text: 'Money market instruments are short-term (< 1 year), highly liquid, low-risk debt instruments. They are used by governments, corporations, and financial institutions to manage short-term cash needs.'
            },
            {
              type: 'list',
              items: [
                'Treasury Bills (T-Bills): Short-term U.S. government debt, 4 to 52 weeks. Sold at discount, redeemed at par. Safest money market instrument.',
                'Commercial Paper: Short-term (up to 270 days) unsecured corporate IOUs. Issued by highly-rated corporations. Not registered with SEC (exempt). Yields slightly higher than T-Bills.',
                "Bankers' Acceptances: Short-term draft used in international trade. Accepted (guaranteed) by a bank. Trades at discount.",
                'Negotiable CDs (Certificates of Deposit): Bank-issued time deposits with fixed maturity and interest rate. Minimum $100,000. Can be traded in secondary market.',
                'Federal Funds: Overnight lending between banks at the federal funds rate. Regulated by the Fed.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Agency Securities & Mortgage-Backed Securities'
            },
            {
              type: 'list',
              items: [
                'Fannie Mae (FNMA) and Freddie Mac (FHLMC): Government-sponsored enterprises that buy mortgages from banks, pool them, and issue mortgage-backed securities (MBS). Government-sponsored but NOT directly backed by U.S. government.',
                'Ginnie Mae (GNMA): Government National Mortgage Association. Issues MBS backed by FHA/VA loans. ARE directly guaranteed by U.S. government — highest quality agency securities.',
                'Mortgage-Backed Securities (MBS): Pools of mortgages packaged into securities. Investors receive monthly principal + interest payments from the underlying mortgages.',
                'Prepayment Risk: When homeowners refinance or pay off mortgages early, investors receive principal sooner than expected and must reinvest at prevailing (lower) rates. This is a KEY risk for MBS holders.',
                'Collateralized Mortgage Obligations (CMOs): MBS split into tranches with different maturities and risk levels. Different tranches receive principal payments in different orders.'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'FDIC vs. SIPC: FDIC (Federal Deposit Insurance Corp) insures BANK DEPOSITS up to $250,000 per depositor per bank. SIPC (Securities Investor Protection Corp) protects BROKERAGE ACCOUNTS up to $500,000 ($250,000 cash) if a broker-dealer fails. NEITHER protects against investment losses.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Municipal Bonds in Depth'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'General Obligation (GO) Bonds', description: 'Backed by the FULL TAXING POWER of the issuer. The municipality pledges to raise taxes if needed to repay bondholders. Generally safer than revenue bonds.' },
                { label: 'Revenue Bonds', description: 'Backed ONLY by revenues from a specific project (toll road, stadium, airport). No taxing power. Higher risk than GO bonds, so higher yields.' }
              ]
            },
            {
              type: 'list',
              items: [
                'Municipal bond interest is FEDERAL TAX EXEMPT and often STATE TAX EXEMPT if issued in your home state',
                'Short-term munis: TANs (Tax Anticipation Notes), RANs (Revenue Anticipation Notes), BANs (Bond Anticipation Notes)',
                'Investment grade bonds: Moody\'s Aaa to Baa / S&P AAA to BBB. Below investment grade ("junk"): Moody\'s Ba and below / S&P BB and below.',
                'Zero-coupon bonds: No periodic coupons; sold at deep discount. STRIPS: zero-coupon Treasuries created by separating principal and interest payments.',
                'Callable bonds: Issuer can redeem before maturity, typically when rates fall. Investors receive call premium but face reinvestment risk at lower rates.'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: Equivalent taxable yield formula concept — to compare a tax-exempt muni yield to a taxable yield: Taxable Equivalent Yield = Muni Yield / (1 - Tax Rate). If a muni yields 4% and investor is in 25% bracket: TEY = 4% / 0.75 = 5.33%. Any taxable bond yielding less than 5.33% is less attractive.'
            }
          ]
        },
        {
          id: 'dpps-reits-529s',
          title: 'Advanced Products: DPPs, REITs, 529s & Hedge Funds',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Advanced Products: DPPs, REITs, 529s & Hedge Funds'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Direct Participation Programs (DPPs)'
            },
            {
              type: 'paragraph',
              text: 'DPPs are investment programs that allow investors to participate directly in the income, gains, and losses of an underlying business — typically structured as limited partnerships.'
            },
            {
              type: 'list',
              items: [
                'Structure: General partner manages operations; limited partners invest capital but have NO management role and LIMITED LIABILITY',
                'Pass-through taxation: Income, gains, losses, and deductions flow directly to individual investors — no corporate-level tax',
                'Generally ILLIQUID — no active secondary market; investors may be locked in for years',
                'Common types: Oil and gas programs, real estate limited partnerships, equipment leasing, agriculture programs',
                'Risks: Illiquidity, management risk, tax law changes, economic performance of underlying assets'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Real Estate Investment Trusts (REITs)'
            },
            {
              type: 'list',
              items: [
                'REITs must distribute at least 90% of taxable income as dividends to shareholders annually',
                'Not subject to double taxation at the entity level (pass-through treatment) if they meet the 90% distribution requirement',
                'Equity REITs: Own and operate income-producing real estate properties',
                'Mortgage REITs: Own mortgage loans and mortgage-backed securities (interest rate sensitive)',
                'Hybrid REITs: Combination of equity and mortgage REITs',
                'Listed REITs trade on exchanges (liquid). Non-listed REITs are harder to value and sell. Private REITs are most illiquid.',
                'Highly sensitive to interest rates — rising rates increase borrowing costs and make fixed REIT dividends less attractive'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: '529 Plans & Education Savings'
            },
            {
              type: 'list',
              items: [
                'Two types: 529 Savings Plans (invest in mutual funds; returns not guaranteed) and 529 Prepaid Tuition Plans (lock in today\'s tuition rates)',
                'Tax advantages: Growth and withdrawals are TAX-FREE for qualified education expenses',
                'No federal income tax deduction, but many states offer state income tax deductions for contributions',
                'Account owner controls the account; beneficiary is the student',
                'Can change beneficiary to any family member of the original beneficiary without penalty',
                '$10,000/year per beneficiary for K-12 expenses; unlimited for qualified higher education expenses',
                'ABLE Accounts: Similar to 529s but for individuals with qualifying disabilities. Tax-advantaged savings for disability-related expenses.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Hedge Funds'
            },
            {
              type: 'list',
              items: [
                'Private investment partnerships available only to accredited investors and qualified purchasers',
                'High minimum investment — typically $1 million or more',
                'Less regulated than mutual funds — do not register with SEC as investment companies',
                'Can use leverage, short selling, derivatives, and complex strategies not available to mutual funds',
                'Often have lock-up periods (6 months to 2 years) during which investors cannot redeem',
                'Fee structure: Typically "2 and 20" — 2% annual management fee + 20% of profits'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: The key distinctions are: DPPs = pass-through tax treatment, illiquid, limited partnership. REITs = must distribute 90%, traded (usually), interest rate sensitive. 529s = tax-free growth for education. Hedge funds = accredited investors only, uses leverage/short selling.'
            }
          ]
        },
        {
          id: 'investment-risks',
          title: 'Investment Risks — Complete Guide',
          duration: '18 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Investment Risks — Complete Guide'
            },
            {
              type: 'paragraph',
              text: 'FINRA tests all major risk types on the SIE. You need to know each risk by name, definition, what investments are most affected, and how it can be mitigated.'
            },
            {
              type: 'list',
              items: [
                '1. Capital Risk: The risk of losing all (or a significant portion) of invested money. Highest for speculative investments, options, and equity in small companies.',
                '2. Credit / Default Risk: The risk that a bond issuer fails to make interest or principal payments. Measured by credit ratings (Moody\'s, S&P). Higher for junk bonds, lower for U.S. Treasuries.',
                '3. Currency Risk (Exchange Rate Risk): The risk that changes in exchange rates will reduce the value of a foreign investment when converted to USD. Relevant for ADRs and international mutual funds.',
                '4. Inflationary / Purchasing Power Risk: The risk that inflation erodes the real return on an investment. Fixed-income securities are most vulnerable — the coupon payments lose purchasing power over time.',
                '5. Interest Rate Risk: The risk that rising interest rates will reduce bond prices. Longer maturity bonds have MORE interest rate risk. INVERSE relationship between rates and bond prices.',
                '6. Reinvestment Risk: The risk that coupon payments or returned principal must be reinvested at LOWER rates than the original investment. Occurs when rates fall. The OPPOSITE scenario from interest rate risk.',
                '7. Liquidity Risk: The risk of not being able to sell an investment quickly at a fair price. Most severe for: limited partnerships, thinly traded stocks, real estate, non-listed REITs.',
                '8. Market / Systematic Risk: The risk of broad market declines due to macroeconomic factors (recession, geopolitical events). CANNOT be eliminated through diversification. All equities are affected.',
                '9. Non-Systematic / Unsystematic Risk: Company-specific or industry-specific risk (bad management, product recall). CAN be reduced through diversification across industries and companies.',
                '10. Political / Regulatory / Legislative Risk: The risk that government actions, law changes, or regulatory changes negatively affect investments (e.g., new taxes on dividends, sanctions on a country).',
                '11. Prepayment Risk: Specific to mortgage-backed securities. When homeowners refinance early, investors receive principal back sooner and must reinvest at lower prevailing rates.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Risk Mitigation Strategies'
            },
            {
              type: 'list',
              items: [
                'Diversification: Reduces NON-SYSTEMATIC risk. Cannot eliminate systematic (market) risk.',
                'Hedging with derivatives: Options and futures can offset specific risks (e.g., buying puts to protect a long stock position)',
                'Portfolio rebalancing: Periodically restoring target asset allocation as different assets grow at different rates',
                'Beta: Measures a stock\'s systematic risk relative to the overall market. Beta = 1 means moves with market. Beta > 1 = more volatile than market. Beta < 1 = less volatile than market. Beta = 0 = uncorrelated (e.g., T-bills).'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY DISTINCTION: Systematic risk (market risk) affects ALL investments and CANNOT be diversified away. Non-systematic risk (business/company risk) affects specific companies/industries and CAN be reduced through diversification. This distinction is heavily tested.'
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
        },
        {
          id: 'returns-dividends-settlement',
          title: 'Investment Returns, Dividends & Settlement',
          duration: '18 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Investment Returns, Dividends & Settlement'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Components of Return'
            },
            {
              type: 'list',
              items: [
                'Interest income: Payments from bonds and money market instruments',
                'Dividends: Payments from stocks (cash dividends or stock dividends)',
                'Capital gains: Profit from selling a security at a higher price than purchased. Realized = actually sold. Unrealized = paper gain, not yet sold.',
                'Total return = income + capital gains (or losses)'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'The Dividend Process'
            },
            {
              type: 'list',
              items: [
                'Declaration date: The board of directors officially declares the dividend amount',
                'Record date: The company identifies all shareholders of record who will receive the dividend',
                'Ex-dividend date: 1 business day BEFORE the record date. If you buy ON or AFTER the ex-date, you do NOT receive the dividend. If you buy BEFORE the ex-date, you DO receive it.',
                'Payable date: The date the dividend is actually paid to shareholders of record'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: The ex-dividend date is the most tested. To receive the dividend, you must BUY the stock at least 1 business day BEFORE the record date (i.e., before the ex-dividend date). On the ex-dividend date and after, the stock price typically drops by approximately the dividend amount.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Yield Calculations'
            },
            {
              type: 'list',
              items: [
                'Current Yield = Annual Income / Current Market Price. Example: $60 coupon on a bond trading at $1,100 = 60/1100 = 5.45%',
                'Yield to Maturity (YTM): Total return if bond is held to maturity. Factors in coupon income + the price difference between current price and par value.',
                'Yield to Call (YTC): Total return if bond is called at the first call date. Calculated like YTM but uses call price and call date instead of par and maturity date.',
                'Yield to Worst (YTW): The lowest possible yield — calculated as the worse of YTM or YTC.',
                'Basis points: 1 basis point = 0.01%. 100 basis points = 1%. If a yield moves from 5.00% to 5.25%, it increased by 25 basis points.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Settlement Dates'
            },
            {
              type: 'list',
              items: [
                'Equities (stocks): T+1 — trade settles 1 business day after the trade date (effective May 2024)',
                'Corporate bonds: T+1',
                'Municipal bonds: T+1',
                'U.S. Government securities (Treasuries): T+1',
                'Options: T+1',
                'Mutual funds: Next business day at NAV (forward pricing rule — you get the NEXT calculated NAV after your order)'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Market Benchmarks'
            },
            {
              type: 'list',
              items: [
                'S&P 500: 500 large-cap U.S. stocks; market-cap weighted; considered the best broad measure of U.S. equities',
                'Dow Jones Industrial Average (DJIA): 30 large-cap U.S. blue-chip stocks; price-weighted; oldest major index',
                'NASDAQ Composite: ~3,000+ companies; heavily weighted toward technology stocks',
                'Russell 2000: 2,000 small-cap U.S. stocks; the primary benchmark for small-cap equities'
              ]
            }
          ]
        },
        {
          id: 'aml-privacy-compliance',
          title: 'AML, Privacy & Compliance Rules',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'AML, Privacy & Compliance Rules'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Money Laundering Stages'
            },
            {
              type: 'list',
              items: [
                'Stage 1 — Placement: Getting illegal cash into the financial system (e.g., depositing it into a bank)',
                'Stage 2 — Layering: Moving money around through complex transactions to obscure its origin (wire transfers, shell companies, real estate transactions)',
                'Stage 3 — Integration: Money re-enters the legitimate economy appearing as normal business proceeds'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'AML Red Flags & Reporting Requirements'
            },
            {
              type: 'list',
              items: [
                'AML Red Flags: Large unexplained cash transactions, unusual transaction patterns inconsistent with stated occupation, reluctance to provide ID, third-party funding, transactions with no apparent business purpose',
                'Customer Identification Program (CIP): Firms must verify identity at account opening. Required under the USA PATRIOT Act.',
                'Currency Transaction Reports (CTRs): MANDATORY for cash transactions exceeding $10,000. Filed with FinCEN. No discretion — must file.',
                'Structuring / Smurfing: Deliberately breaking up transactions to stay below $10,000 to avoid CTR. ILLEGAL — even if funds are legitimate.',
                'Suspicious Activity Reports (SARs): Filed within 30 days of detecting suspicious activity. NO MINIMUM dollar amount. NEVER tell the customer a SAR was filed.',
                'OFAC (Office of Foreign Assets Control): Maintains list of sanctioned individuals and countries (SDN list). Firms MUST check this list before opening accounts or executing transactions.'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY: CTR = $10,000+ cash, automatic and mandatory. SAR = suspicious activity of any amount, discretionary determination, never tell the customer. FinCEN collects both reports. OFAC handles sanctions — different from AML but related compliance requirement.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Regulation S-P (Privacy)'
            },
            {
              type: 'list',
              items: [
                'Governs how firms handle customers\' Nonpublic Personal Information (NPI)',
                'Firms must provide a privacy notice at account opening and annually',
                'Customers have opt-out rights for sharing NPI with non-affiliated third parties',
                'Safeguards Rule: Firms must maintain written information security policies to protect NPI'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Books, Records & Compliance'
            },
            {
              type: 'list',
              items: [
                'Customer account records retained for 6 years (some for 3 years)',
                'Trade confirmations: Must be sent to customers after each transaction (typically same day or next day)',
                'Account statements: At least quarterly (monthly if there is activity)',
                'Business Continuity Plans (BCPs): Firms must have written emergency plans to continue operations after a significant disruption',
                'Financial Exploitation of Seniors: FINRA Rule 2165 allows firms to place a temporary hold on disbursements when there is reasonable belief of financial exploitation of a senior or vulnerable adult',
                'Regulation S-ID (Red Flags Rule): Firms must have written identity theft prevention programs to detect and respond to warning signs of identity theft'
              ]
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
        },
        {
          id: 'registration-licensing-ce',
          title: 'Registration, Licensing & Continuing Education',
          duration: '18 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Registration, Licensing & Continuing Education'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Forms U4 and U5'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Form U4 (Uniform Application)', description: 'Filed when a registered representative joins a FINRA member firm. Contains personal history, employment history, and required disclosures. Available to the public via BrokerCheck.' },
                { label: 'Form U5 (Uniform Termination Notice)', description: 'Filed by the firm when a registered representative leaves. Must disclose the reason for termination. Also available on BrokerCheck.' }
              ]
            },
            {
              type: 'list',
              items: [
                'BrokerCheck: FINRA\'s public database where anyone can research a broker or firm\'s registration, qualifications, and disclosure history',
                'Statutory Disqualification (SD): Certain events permanently or temporarily bar a person from the industry. Examples: felony conviction within 10 years, SEC injunction, being found to have violated securities laws, certain regulatory sanctions.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Continuing Education (CE)'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Regulatory Element', description: 'FINRA-administered computer-based exam. Required within 1 year of initial registration, then every 3 years. Content covers compliance, regulatory, ethical, and sales practice standards.' },
                { label: 'Firm Element', description: 'Firm-administered annual training program. Each firm tailors it to their business and products. Covers products, services, regulatory developments, and sales practice issues.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Registration Categories'
            },
            {
              type: 'list',
              items: [
                'SIE Exam: Entry-level, no firm sponsorship required, valid for 4 years. Passing alone does NOT license you to sell securities.',
                'Top-off exams: Must be associated with a FINRA member firm. Examples: Series 7 (General Securities Representative), Series 6 (Investment Company Products), Series 57 (Securities Trader)',
                'Investment Adviser Representatives: Register with SEC (managing $110M+ AUM) or with their home state',
                'Form CRS (Client Relationship Summary): Required disclosure comparing broker-dealer vs. investment adviser services. Must be provided to retail customers.'
              ]
            },
            {
              type: 'callout',
              variant: 'exam',
              text: 'EXAM TIP: The SIE is valid for 4 years. After that, you must retake it. The SIE + a top-off exam + firm sponsorship = full registration. Without all three, you cannot legally sell securities. BrokerCheck is public — anyone can look you up.'
            }
          ]
        },
        {
          id: 'finra-conduct-rules',
          title: 'FINRA Rules & Employee Conduct',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'FINRA Rules & Employee Conduct'
            },
            {
              type: 'paragraph',
              text: 'FINRA\'s rulebook covers everything from broad ethical standards to specific rules about gifts, outside activities, and political contributions. These rules protect investors and maintain the integrity of the industry.'
            },
            {
              type: 'list',
              items: [
                'FINRA Rule 2010 (Standards of Commercial Honor): The overarching ethics rule. Requires members to "observe high standards of commercial honor and just and equitable principles of trade." Violations of ANY law or rule can trigger a Rule 2010 violation.',
                'FINRA Rule 2020 (Manipulation): Prohibits manipulation of security prices. Includes wash trades, painting the tape, and other deceptive practices.',
                'FINRA Rule 4512 (Customer Account Information): Firms must maintain complete and accurate customer records.',
                'FINRA Rule 3110 (Supervision): Requires firms to establish and maintain a written supervisory system (WSPs — Written Supervisory Procedures) and designate supervisors.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Outside Activities & Private Transactions'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Outside Business Activities (OBA) — Rule 3270', description: 'Registered persons must notify their firm IN WRITING before engaging in any outside business activity (e.g., starting a side business, working part-time). Firm can approve, prohibit, or restrict.' },
                { label: 'Private Securities Transactions (Selling Away) — Rule 3280', description: 'Registered persons must notify firm in writing before participating in any private securities transaction outside the firm. Firm can approve (and supervise) or disapprove.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Gifts, Gratuities & Political Contributions'
            },
            {
              type: 'list',
              items: [
                'Gifts Rule (FINRA Rule 3220): Cannot give gifts exceeding $100 per year per person to any person where business relationship exists. Excludes reasonable meals, entertainment, and promotional items of nominal value.',
                'Political Contributions / Pay-to-Play (FINRA Rule 2030): Restrictions on contributions to government officials who can influence investment advisory business. Designed to prevent "pay-to-play" corruption.',
                'Borrowing from customers (FINRA Rule 3240): Generally prohibited. Narrow exceptions for family members, financial institutions, and when the customer is in the lending business.',
                'Sharing in customer accounts: Prohibited without written firm approval AND agreement to share proportionally in both gains and losses.'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Required Disclosures'
            },
            {
              type: 'paragraph',
              text: 'Registered representatives must promptly disclose on Form U4 any changes to reportable events, including:'
            },
            {
              type: 'list',
              items: [
                'Criminal charges or convictions (felonies — any; misdemeanors involving financial crimes)',
                'Regulatory actions (suspensions, bars, fines from regulatory bodies)',
                'Civil court judgments or arbitration decisions',
                'Financial matters (personal bankruptcies, liens, judgments)',
                'Customer complaints (written complaints alleging sales practice violations over $5,000, or any arbitration/litigation)'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY: The $100 gift limit is per person per year. It does not mean you can give $100 to unlimited people — it means each individual recipient cannot receive more than $100 from you in a year. Meals and entertainment (if reasonable and related to business) do NOT count against this limit.'
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
    },
    {
      id: 'practice-exam',
      title: 'Full SIE Practice Exam',
      description: 'Simulate the real SIE exam. 75 questions, 105 minutes, covering all four domains in proportion to the actual exam. This is your final mastery check before the real thing.',
      requiredScore: 70,
      lessons: [],
      quiz: [
        {
          id: 'pe-cm-01',
          domain: 'Capital Markets',
          question: 'A company\'s stock is currently trading at $48. A new issue of shares is offered to existing shareholders at $44. This is an example of:',
          options: ['A secondary offering at market price', 'A rights offering with a below-market subscription price', 'A tender offer from an outside acquirer', 'A reverse stock split'],
          correctIndex: 1,
          explanation: 'A rights offering gives existing shareholders the ability to purchase new shares at a subscription price set below the current market price. This incentivizes exercise of the rights and is a preemptive right protecting shareholders\' proportional ownership.'
        },
        {
          id: 'pe-cm-02',
          domain: 'Capital Markets',
          question: 'Which Federal Reserve tool is used MOST frequently to implement monetary policy?',
          options: ['Adjusting reserve requirements', 'Changing the discount rate', 'Open market operations (buying/selling Treasury securities)', 'Issuing Federal Reserve Notes'],
          correctIndex: 2,
          explanation: 'Open market operations — the Fed buying or selling U.S. Treasury securities — is the Fed\'s primary and most frequently used monetary policy tool. Buying bonds injects money into the economy (expansionary); selling withdraws it (contractionary).'
        },
        {
          id: 'pe-cm-03',
          domain: 'Capital Markets',
          question: 'During an IPO\'s waiting period (cooling-off period), an underwriter may:',
          options: ['Sell securities to retail customers', 'Accept payment for securities ordered', 'Distribute the red herring prospectus and take indications of interest', 'Set the final offering price with the SEC'],
          correctIndex: 2,
          explanation: 'During the waiting period, underwriters CANNOT make sales or accept payment. They CAN distribute the preliminary (red herring) prospectus and take non-binding indications of interest. The tombstone advertisement may also run during this period.'
        },
        {
          id: 'pe-cm-04',
          domain: 'Capital Markets',
          question: 'Rule 144A primarily benefits:',
          options: ['Retail investors in primary market offerings', 'Qualified Institutional Buyers (QIBs) trading restricted securities', 'Issuers seeking Regulation D exemptions', 'Foreign issuers filing with the SEC'],
          correctIndex: 1,
          explanation: 'Rule 144A allows Qualified Institutional Buyers (QIBs) — large institutions with $100M+ in securities — to trade restricted securities among themselves without the holding period normally required under Rule 144. It creates a liquid secondary market for institutional investors.'
        },
        {
          id: 'pe-cm-05',
          domain: 'Capital Markets',
          question: 'GDP falls for two consecutive quarters. This is the definition of:',
          options: ['A depression', 'A recession', 'Stagflation', 'A trough'],
          correctIndex: 1,
          explanation: 'A recession is commonly defined as two consecutive quarters of declining GDP (Gross Domestic Product). A depression is a severe, prolonged recession. A trough is the lowest point of a recession. Stagflation is high inflation combined with slow growth.'
        },
        {
          id: 'pe-cm-06',
          domain: 'Capital Markets',
          question: 'The Federal funds rate is BEST described as:',
          options: ['The rate the Federal Reserve charges banks for loans', 'The rate banks charge their best corporate customers', 'The rate banks charge each other for overnight lending', 'The yield on 90-day Treasury bills'],
          correctIndex: 2,
          explanation: 'The federal funds rate is the interest rate at which banks lend reserve balances to other banks overnight. It is a key benchmark for short-term interest rates. The rate the Fed charges banks directly is the discount rate. The rate banks charge top corporate customers is the prime rate.'
        },
        {
          id: 'pe-cm-07',
          domain: 'Capital Markets',
          question: 'A firm commitment underwriting means:',
          options: ['The underwriter agrees to use its best efforts to sell the securities', 'The underwriter purchases all securities from the issuer at a set price and resells them', 'The issuer commits to selling only through one firm', 'The underwriter guarantees a specific stock price for 30 days'],
          correctIndex: 1,
          explanation: 'In a firm commitment underwriting, the investment bank buys ALL securities from the issuer and takes on the risk of reselling them to the public. The issuer receives guaranteed proceeds. If the underwriter cannot sell all shares, it bears the loss.'
        },
        {
          id: 'pe-cm-08',
          domain: 'Capital Markets',
          question: 'Which of the following is a LEADING economic indicator?',
          options: ['Unemployment rate', 'Average prime rate charged by banks', 'New building permits issued', 'Consumer price index (CPI)'],
          correctIndex: 2,
          explanation: 'Building permits are a leading indicator — they signal future construction and economic activity before it happens. The unemployment rate is a lagging indicator (confirms trends after they occur). CPI is roughly coincident. The average prime rate is a lagging indicator.'
        },
        {
          id: 'pe-cm-09',
          domain: 'Capital Markets',
          question: 'Ginnie Mae (GNMA) differs from Fannie Mae and Freddie Mac in that GNMA:',
          options: ['Is a private corporation', 'Issues only corporate bonds', 'Is directly backed by the U.S. government\'s full faith and credit', 'Has no involvement with mortgage-backed securities'],
          correctIndex: 2,
          explanation: 'GNMA (Ginnie Mae) is a U.S. government agency whose MBS are backed by the full faith and credit of the U.S. government. Fannie Mae and Freddie Mac are government-sponsored enterprises (GSEs) — private corporations with an implied government backing, but not direct government guarantees.'
        },
        {
          id: 'pe-cm-10',
          domain: 'Capital Markets',
          question: 'A private placement under Regulation D Rule 506 may be sold to:',
          options: ['Any member of the public through general advertising', 'Accredited investors only, with no general solicitation (Rule 506(b))', 'Institutional investors only, regardless of accreditation', 'Retail investors after filing a full S-1 registration'],
          correctIndex: 1,
          explanation: 'Regulation D Rule 506(b) allows companies to sell securities to accredited investors without SEC registration and without general solicitation or advertising. This is the most common private placement exemption. Rule 506(c) allows general solicitation but ONLY to verified accredited investors.'
        },
        {
          id: 'pe-cm-11',
          domain: 'Capital Markets',
          question: 'Which statement about the Securities Act of 1933 is CORRECT?',
          options: ['It created the SEC and governs secondary market trading', 'It requires registration and disclosure for new securities offerings', 'It regulates investment advisers and their fiduciary duty', 'It established margin requirements for securities purchases'],
          correctIndex: 1,
          explanation: 'The Securities Act of 1933 governs the PRIMARY market — new securities offerings. It requires issuers to register securities with the SEC and provide investors with material information through a prospectus. The 1934 Act created the SEC and governs secondary trading.'
        },
        {
          id: 'pe-cm-12',
          domain: 'Capital Markets',
          question: 'The Green Shoe option in an IPO allows underwriters to:',
          options: ['Sell securities before the effective date', 'Purchase additional shares from the issuer to meet excess demand (up to 15%)', 'Set the offering price below book value', 'Withdraw from the offering if market conditions deteriorate'],
          correctIndex: 1,
          explanation: 'The Green Shoe (overallotment option) allows underwriters to sell up to 15% more shares than originally planned if investor demand is strong. It also allows underwriters to buy back shares in the aftermarket to stabilize the price if it falls below the offering price.'
        },
        {
          id: 'pe-pr-01',
          domain: 'Products & Risks',
          question: 'An investor holds a bond with a 4% coupon when market interest rates rise to 6%. The bond\'s market value will:',
          options: ['Rise, because higher rates make the coupon more valuable', 'Fall, because new bonds offering 6% make the 4% bond less attractive', 'Remain unchanged at par value', 'Rise to reflect the higher market rates'],
          correctIndex: 1,
          explanation: 'Bond prices and interest rates move inversely. When rates rise from 4% to 6%, newly issued bonds pay 6%, making existing 4% bonds less competitive. Their price must fall to a discount so that the effective yield equals the market rate of 6%.'
        },
        {
          id: 'pe-pr-02',
          domain: 'Products & Risks',
          question: 'A REIT is required to distribute at least what percentage of its taxable income as dividends?',
          options: ['50%', '75%', '90%', '100%'],
          correctIndex: 2,
          explanation: 'To qualify as a REIT and avoid corporate-level taxation, the trust must distribute at least 90% of its taxable income as dividends to shareholders annually. This is why REITs typically offer high dividend yields.'
        },
        {
          id: 'pe-pr-03',
          domain: 'Products & Risks',
          question: 'Which risk CANNOT be eliminated through diversification?',
          options: ['Business (unsystematic) risk', 'Company-specific risk', 'Systematic (market) risk', 'Industry risk'],
          correctIndex: 2,
          explanation: 'Systematic risk (also called market risk) affects ALL securities and cannot be diversified away. It includes macroeconomic risks like recessions and geopolitical events. Unsystematic risk (business/company-specific/industry risk) can be reduced through diversification.'
        },
        {
          id: 'pe-pr-04',
          domain: 'Products & Risks',
          question: 'An investor purchases a Direct Participation Program (DPP). Which statement is most accurate?',
          options: ['DPPs are highly liquid and trade actively on exchanges', 'Income and losses from the DPP flow directly to the investor for tax purposes', 'DPPs provide guaranteed returns regardless of performance', 'The general partner has unlimited liability while limited partners manage operations'],
          correctIndex: 1,
          explanation: 'DPPs offer pass-through taxation — income, gains, losses, and deductions flow directly to investors\' tax returns. This avoids double taxation. DPPs are generally ILLIQUID, do NOT trade on exchanges, offer no guaranteed returns, and limited partners have limited liability with NO management role.'
        },
        {
          id: 'pe-pr-05',
          domain: 'Products & Risks',
          question: 'What is prepayment risk, and which investment is MOST affected by it?',
          options: ['The risk of an issuer calling a bond early; most affects T-bonds', 'The risk that mortgage borrowers refinance early, forcing MBS investors to reinvest at lower rates; most affects mortgage-backed securities', 'The risk of losing principal; most affects zero-coupon bonds', 'The risk of inflation eroding returns; most affects money market funds'],
          correctIndex: 1,
          explanation: 'Prepayment risk is specific to mortgage-backed securities (MBS). When homeowners refinance their mortgages early (usually when rates fall), investors receive their principal back sooner than expected. They then must reinvest those proceeds at the now-lower prevailing interest rates.'
        },
        {
          id: 'pe-pr-06',
          domain: 'Products & Risks',
          question: 'Common stockholders\'rights include all of the following EXCEPT:',
          options: ['Right to vote on major corporate decisions', 'Right to receive declared dividends', 'Right to guaranteed dividends ahead of preferred shareholders', 'Preemptive right to maintain percentage ownership'],
          correctIndex: 2,
          explanation: 'Common stockholders have voting rights, preemptive rights, and can receive dividends — but dividends are NEVER guaranteed for common stock. Preferred shareholders receive dividends before common shareholders, and common dividends are paid only at the board\'s discretion.'
        },
        {
          id: 'pe-pr-07',
          domain: 'Products & Risks',
          question: 'An investor is in the 32% tax bracket. A municipal bond yields 4.2%. What is the taxable equivalent yield?',
          options: ['2.86%', '4.2%', '5.54%', '6.18%'],
          correctIndex: 3,
          explanation: 'Taxable Equivalent Yield = Muni Yield / (1 - Tax Rate) = 4.2% / (1 - 0.32) = 4.2% / 0.68 = 6.18%. Any taxable bond yielding less than 6.18% is less attractive than this muni for this investor.'
        },
        {
          id: 'pe-pr-08',
          domain: 'Products & Risks',
          question: 'A 2-for-1 forward stock split results in:',
          options: ['The share price doubling and share count halving', 'The share count doubling and price halving; total market cap unchanged', 'The share count halving and price doubling; total market cap unchanged', 'An increase in total market capitalization equal to the number of new shares'],
          correctIndex: 1,
          explanation: 'In a 2:1 forward split, each share becomes 2 shares and the price is halved. If you owned 100 shares at $80 ($8,000 total), after the split you own 200 shares at $40 ($8,000 total). Market cap is unchanged; only the number of shares and per-share price change.'
        },
        {
          id: 'pe-pr-09',
          domain: 'Products & Risks',
          question: 'Commercial paper is issued by corporations to:',
          options: ['Raise long-term debt capital with maturities of 5-30 years', 'Provide short-term financing (up to 270 days) without SEC registration', 'Create mortgage-backed securities for institutional investors', 'Offer retail investors federally insured short-term investments'],
          correctIndex: 1,
          explanation: 'Commercial paper is short-term, unsecured corporate debt with maturities up to 270 days (9 months). Because maturities are under 270 days, it is exempt from SEC registration requirements. It is issued only by highly creditworthy corporations and purchased primarily by institutional investors.'
        },
        {
          id: 'pe-pr-10',
          domain: 'Products & Risks',
          question: 'A call option gives the holder the right to buy 100 shares at the strike price. The option buyer profits when:',
          options: ['The stock price falls below the strike price', 'The stock price rises above the strike price plus the premium paid', 'The stock price remains stable at the strike price', 'The stock pays a dividend before the expiration date'],
          correctIndex: 1,
          explanation: 'A call buyer profits when the stock rises above the strike price + premium paid (the breakeven point). For example, if the strike is $50 and the premium paid is $3, the breakeven is $53. Above $53 is profit; below $53 is a loss (capped at the premium paid).'
        },
        {
          id: 'pe-pr-11',
          domain: 'Products & Risks',
          question: 'Which type of municipal bond is backed by the taxing power of the issuing government?',
          options: ['Revenue bond', 'General obligation (GO) bond', 'Zero-coupon municipal bond', 'Tax anticipation note (TAN)'],
          correctIndex: 1,
          explanation: 'General obligation (GO) bonds are backed by the full taxing power of the issuing government — it can raise taxes if needed to repay bondholders. Revenue bonds are backed only by revenue from a specific project (toll road, airport). GO bonds are generally considered safer.'
        },
        {
          id: 'pe-pr-12',
          domain: 'Products & Risks',
          question: 'Cumulative preferred stockholders are entitled to:',
          options: ['Unlimited voting rights proportional to dividends received', 'All past unpaid dividends (in arrears) before common stockholders receive anything', 'Dividends paid in stock rather than cash', 'First priority in liquidation before all creditors'],
          correctIndex: 1,
          explanation: 'Cumulative preferred stock means missed dividends accumulate as "dividends in arrears." All arrears must be paid in full before any common dividend can be declared. For example, if 3 years of $5 preferred dividends were skipped, those $15 must be paid before common shareholders receive anything.'
        },
        {
          id: 'pe-pr-13',
          domain: 'Products & Risks',
          question: 'Hedge funds differ from mutual funds in all of the following ways EXCEPT:',
          options: ['Hedge funds can use leverage and short selling', 'Hedge funds are available only to accredited investors', 'Both can hold a diversified portfolio of securities', 'Hedge funds typically have lock-up periods limiting redemptions'],
          correctIndex: 2,
          explanation: 'Both hedge funds and mutual funds can hold diversified portfolios of securities — this is a similarity, not a difference. The key differences are: hedge funds are for accredited investors only, can use leverage/shorts/complex strategies, have lock-up periods, and charge performance fees (typically 20% of profits).'
        },
        {
          id: 'pe-pr-14',
          domain: 'Products & Risks',
          question: 'An investor holds long-term bonds when interest rates unexpectedly rise sharply. This investor is most exposed to:',
          options: ['Credit risk', 'Reinvestment risk', 'Interest rate risk', 'Currency risk'],
          correctIndex: 2,
          explanation: 'Interest rate risk is the risk that rising rates cause bond prices to fall. Long-term bonds have MORE interest rate risk than short-term bonds because their cash flows are discounted over a longer period. This investor\'s bond portfolio value would fall significantly.'
        },
        {
          id: 'pe-pr-15',
          domain: 'Products & Risks',
          question: 'A 529 savings plan allows tax-free growth and withdrawals for:',
          options: ['Retirement income only', 'Medical expenses only', 'Qualified education expenses', 'Any investment purpose after age 59½'],
          correctIndex: 2,
          explanation: '529 plans allow tax-free growth and tax-free withdrawals when funds are used for qualified education expenses (tuition, fees, books, room and board for college; up to $10K/year for K-12). Non-qualified withdrawals are subject to income tax plus a 10% penalty on earnings.'
        },
        {
          id: 'pe-pr-16',
          domain: 'Products & Risks',
          question: 'Which of the following is a characteristic of variable annuities?',
          options: ['The return is tied to fixed interest rates set by the insurance company', 'They require both an insurance license and a securities license to sell', 'They are suitable for all investor types regardless of risk tolerance', 'Surrender charges never apply to early withdrawals'],
          correctIndex: 1,
          explanation: 'Variable annuities are insurance products with returns tied to underlying securities (subaccounts). Because they are securities, selling them requires BOTH an insurance license AND a securities license (Series 6 or 7). They also have surrender charges for early withdrawal.'
        },
        {
          id: 'pe-pr-17',
          domain: 'Products & Risks',
          question: 'An investor who buys a put option profits when:',
          options: ['The underlying stock price rises above the strike price', 'The underlying stock price falls below the strike price minus the premium paid', 'The underlying stock pays a special dividend', 'Volatility decreases significantly before expiration'],
          correctIndex: 1,
          explanation: 'A put buyer has the right to SELL shares at the strike price. They profit when the stock falls below the strike price minus the premium. Puts are used as portfolio insurance — they increase in value as the underlying stock price falls.'
        },
        {
          id: 'pe-pr-18',
          domain: 'Products & Risks',
          question: 'Reinvestment risk is most likely to affect an investor when:',
          options: ['Interest rates rise sharply', 'Interest rates fall, forcing coupon reinvestment at lower rates', 'The bond issuer defaults on payments', 'Inflation rises faster than the bond\'s coupon rate'],
          correctIndex: 1,
          explanation: 'Reinvestment risk occurs when interest rates FALL. Investors receive coupon payments that must be reinvested at the new, lower prevailing rates. Zero-coupon bonds eliminate reinvestment risk (no coupons to reinvest until maturity). Note: Reinvestment risk is the OPPOSITE scenario from interest rate risk.'
        },
        {
          id: 'pe-pr-19',
          domain: 'Products & Risks',
          question: 'U.S. Treasury securities are:',
          options: ['Subject to federal income tax but exempt from state and local taxes', 'Exempt from all federal, state, and local taxes', 'Subject to state tax but exempt from federal tax', 'Taxed the same as corporate bonds at all levels'],
          correctIndex: 0,
          explanation: 'Treasury securities are backed by the U.S. government and subject to FEDERAL income tax, but EXEMPT from state and local income taxes. This is the opposite of municipal bonds, which are federal-tax-exempt. Corporate bonds are taxed at all levels.'
        },
        {
          id: 'pe-pr-20',
          domain: 'Products & Risks',
          question: 'A zero-coupon bond\'s primary tax disadvantage for holders in taxable accounts is:',
          options: ['The principal received at maturity is taxed as ordinary income', 'Annual accreted interest is taxable even though no cash is received', 'Zero-coupon bonds cannot be held in tax-deferred accounts', 'Capital gains taxes apply to the discount at purchase'],
          correctIndex: 1,
          explanation: 'Zero-coupon bonds generate "phantom income" — the IRS requires investors to pay income taxes on the annually accreted interest even though no cash interest is received until maturity. This makes zero-coupon bonds more tax-efficient when held in tax-deferred accounts (IRAs, 401(k)s).'
        },
        {
          id: 'pe-pr-21',
          domain: 'Products & Risks',
          question: 'In a corporation\'s liquidation, which claimant is paid LAST?',
          options: ['Secured bondholders', 'Unsecured creditors', 'Preferred stockholders', 'Common stockholders'],
          correctIndex: 3,
          explanation: 'The priority in liquidation is: (1) Secured creditors, (2) Unsecured creditors/bondholders, (3) Preferred stockholders, (4) Common stockholders. Common stockholders have the highest risk (last paid) but also the highest potential reward (unlimited upside when the company thrives).'
        },
        {
          id: 'pe-pr-22',
          domain: 'Products & Risks',
          question: 'An ADR (American Depositary Receipt) carries which unique risk compared to a domestic stock?',
          options: ['Liquidity risk only', 'Currency (exchange rate) risk', 'Call risk', 'Reinvestment risk'],
          correctIndex: 1,
          explanation: 'ADRs allow U.S. investors to buy foreign stocks in USD, but they carry currency risk — the value changes with both the foreign stock price AND the exchange rate between the foreign currency and the dollar. A stock can rise in its home market but the ADR value could fall if the foreign currency weakens against the dollar.'
        },
        {
          id: 'pe-pr-23',
          domain: 'Products & Risks',
          question: 'A mutual fund\'s NAV is calculated:',
          options: ['Continuously throughout the trading day based on supply and demand', 'Once per day after market close based on the value of underlying holdings', 'Weekly by an independent auditor', 'Monthly by the fund\'s board of directors'],
          correctIndex: 1,
          explanation: 'Mutual fund NAV is calculated once per day after the market closes, based on the total market value of the fund\'s holdings minus liabilities, divided by shares outstanding. Orders placed during the day receive the NEXT calculated NAV (forward pricing rule).'
        },
        {
          id: 'pe-pr-24',
          domain: 'Products & Risks',
          question: 'Beta measures a security\'s:',
          options: ['Credit quality relative to other bonds in its sector', 'Systematic risk relative to the overall market', 'Dividend yield relative to its price', 'Liquidity compared to the S&P 500'],
          correctIndex: 1,
          explanation: 'Beta measures systematic (market) risk relative to the overall market (typically the S&P 500). Beta = 1 means the security moves with the market. Beta > 1 means more volatile than market. Beta < 1 means less volatile. Beta = 0 means uncorrelated with the market (e.g., T-bills).'
        },
        {
          id: 'pe-pr-25',
          domain: 'Products & Risks',
          question: 'Which of the following is an example of purchasing power (inflation) risk?',
          options: ['A company defaults on its bond payments', 'A bond\'s fixed coupon buys fewer goods over time due to rising prices', 'An investor cannot sell an illiquid security', 'A foreign investment loses value as the dollar strengthens'],
          correctIndex: 1,
          explanation: 'Purchasing power risk (inflation risk) is the risk that inflation erodes the real value of fixed income payments. A bond paying $50/year in coupons buys fewer goods in year 10 than in year 1 if inflation has occurred. Fixed-income securities are particularly vulnerable.'
        },
        {
          id: 'pe-pr-26',
          domain: 'Products & Risks',
          question: 'Which statement about ETFs compared to mutual funds is TRUE?',
          options: ['ETFs are always actively managed', 'ETFs trade intraday on exchanges; mutual funds price once daily at NAV', 'ETFs cannot be sold short', 'Mutual funds have lower expense ratios than ETFs'],
          correctIndex: 1,
          explanation: 'ETFs trade on exchanges throughout the day at market prices, like stocks. Mutual funds are priced once per day at NAV after market close. Most ETFs are passively managed (lower fees), can be sold short, and can be purchased on margin — unlike traditional mutual funds.'
        },
        {
          id: 'pe-pr-27',
          domain: 'Products & Risks',
          question: 'A callable bond is MOST likely to be called when:',
          options: ['Interest rates have risen well above the coupon rate', 'Interest rates have fallen below the coupon rate', 'The company\'s credit rating has been downgraded', 'The bond approaches maturity within one year'],
          correctIndex: 1,
          explanation: 'An issuer calls a bond to refinance at a lower cost. When rates FALL below the bond\'s coupon rate, the issuer can call the bond and reissue new bonds at the lower market rate, saving on interest expense. This exposes investors to reinvestment risk — they must reinvest at the lower rates.'
        },
        {
          id: 'pe-pr-28',
          domain: 'Products & Risks',
          question: 'Which of the following describes a warrant?',
          options: ['A short-term right giving existing shareholders the ability to buy new shares below market price', 'A long-term right to purchase shares at a fixed exercise price, often attached to bonds as a sweetener', 'A derivative used to hedge against currency risk in foreign investments', 'A guaranteed return issued by a broker-dealer to a client'],
          correctIndex: 1,
          explanation: 'Warrants are long-term options (months to years) that give the holder the right to buy company shares at a fixed exercise price. They are often attached to bond or preferred stock issuances to make the offering more attractive to investors.'
        },
        {
          id: 'pe-pr-29',
          domain: 'Products & Risks',
          question: 'Which type of REIT primarily owns mortgage loans and mortgage-backed securities?',
          options: ['Equity REIT', 'Mortgage REIT', 'Hybrid REIT', 'Listed REIT'],
          correctIndex: 1,
          explanation: 'Mortgage REITs invest in mortgage loans and MBS rather than physical properties. They earn income from the interest on those loans. They are highly sensitive to interest rate changes — rising rates compress the spread between their borrowing costs and lending income.'
        },
        {
          id: 'pe-pr-30',
          domain: 'Products & Risks',
          question: 'The Investment Company Act of 1940 primarily regulates:',
          options: ['Investment advisers and their fiduciary duties', 'New securities offerings in the primary market', 'Mutual funds, closed-end funds, and other investment companies', 'Broker-dealers and their sales practices'],
          correctIndex: 2,
          explanation: 'The Investment Company Act of 1940 regulates investment companies — including mutual funds (open-end), closed-end funds, and ETFs. It sets diversification requirements, disclosure rules, and governance standards. The Investment Advisers Act of 1940 governs investment advisers.'
        },
        {
          id: 'pe-pr-31',
          domain: 'Products & Risks',
          question: 'Which of the following is a SHORT-TERM money market instrument?',
          options: ['20-year Treasury bond', 'Corporate debenture with 7-year maturity', "Banker's acceptance", 'Convertible preferred stock'],
          correctIndex: 2,
          explanation: "Banker's acceptances are short-term (typically 30-180 days) money market instruments used primarily in international trade financing. They are backed by a bank's guarantee to pay. Treasury bonds (20 years), corporate debentures (7 years), and preferred stock are NOT money market instruments."
        },
        {
          id: 'pe-pr-32',
          domain: 'Products & Risks',
          question: 'An investor wants maximum protection in case their broker-dealer fails. Their brokerage account is protected by:',
          options: ['FDIC up to $250,000', 'SIPC up to $500,000 ($250,000 in cash)', 'The SEC\'s investor protection fund', 'FINRA\'s member reserve requirement'],
          correctIndex: 1,
          explanation: 'SIPC (Securities Investor Protection Corporation) protects customers of failed broker-dealers up to $500,000 total, with a $250,000 sublimit for cash. FDIC protects bank deposits (not brokerage accounts). SIPC does NOT protect against investment losses — only broker-dealer insolvency.'
        },
        {
          id: 'pe-pr-33',
          domain: 'Products & Risks',
          question: 'Under FINRA\'s suitability rule, a registered representative must ensure that:',
          options: ['Recommendations produce the highest possible return for the customer', 'Recommendations are suitable based on the customer\'s financial profile, risk tolerance, and investment objectives', 'All trades are approved by a supervisor before execution', 'Customers are shown at least three investment alternatives before recommending one'],
          correctIndex: 1,
          explanation: 'FINRA Rule 2111 (Suitability) requires registered representatives to have a reasonable basis to believe a recommendation is suitable for a specific customer based on their KYC information: financial situation, investment objectives, risk tolerance, time horizon, and other relevant factors.'
        },
        {
          id: 'pe-ta-01',
          domain: 'Trading & Accounts',
          question: 'Equities (stocks) currently settle on a:',
          options: ['Same-day (T+0) basis', 'T+1 basis (one business day after trade date)', 'T+2 basis (two business days after trade date)', 'T+3 basis (three business days after trade date)'],
          correctIndex: 1,
          explanation: 'As of May 2024, equities settle on a T+1 basis — one business day after the trade date. Previously T+2. This change reduced counterparty risk and capital requirements for broker-dealers. Options and government securities also settle T+1.'
        },
        {
          id: 'pe-ta-02',
          domain: 'Trading & Accounts',
          question: 'The ex-dividend date for a stock is Monday, July 10th. To be entitled to the dividend, an investor must:',
          options: ['Buy the stock on or after July 10th', 'Buy the stock before July 10th (on or before July 7th)', 'Be a shareholder of record on July 10th', 'Hold the stock for at least 30 days before July 10th'],
          correctIndex: 1,
          explanation: 'To receive the dividend, you must purchase the stock BEFORE the ex-dividend date. Since ex-date is Monday July 10th, you must buy on Friday July 7th (or earlier) — so your trade settles (T+1) by July 8th, putting you on record before the record date (which is July 11th, one day after ex-date).'
        },
        {
          id: 'pe-ta-03',
          domain: 'Trading & Accounts',
          question: 'A buy limit order at $45 for a stock trading at $48 will:',
          options: ['Execute immediately at $48', 'Execute only if the stock drops to $45 or below', 'Execute at $45 regardless of market conditions', 'Not be accepted by the exchange'],
          correctIndex: 1,
          explanation: 'A buy limit order specifies the MAXIMUM price the investor will pay. An order at $45 will only execute if the stock falls to $45 or lower. Since the stock is currently at $48, the order will sit in the order book unfilled until/unless the price drops.'
        },
        {
          id: 'pe-ta-04',
          domain: 'Trading & Accounts',
          question: 'A sell stop order placed below the current market price becomes:',
          options: ['A limit sell order at the stop price when triggered', 'A market sell order when the stock falls to or below the stop price', 'Cancelled automatically if the stock rises', 'A limit order placed at the current bid price'],
          correctIndex: 1,
          explanation: 'A sell stop order (stop-loss) is triggered when the stock falls TO or below the stop price. At that point, it converts to a MARKET sell order and executes at the best available price. Important: it does NOT guarantee execution at the stop price — in fast markets, price may be lower.'
        },
        {
          id: 'pe-ta-05',
          domain: 'Trading & Accounts',
          question: 'In a margin account, Regulation T requires an initial margin deposit of:',
          options: ['25% of the purchase price', '50% of the purchase price', '75% of the purchase price', '100% of the purchase price'],
          correctIndex: 1,
          explanation: 'Regulation T, set by the Federal Reserve Board, requires investors to deposit at least 50% of the purchase price when buying securities on margin. This is the initial margin requirement. FINRA\'s maintenance margin requirement (25%) is the minimum equity that must be maintained afterward.'
        },
        {
          id: 'pe-ta-06',
          domain: 'Trading & Accounts',
          question: 'Churning is best defined as:',
          options: ['Trading on material non-public information to generate profits', 'Excessive trading in a customer account primarily to generate commissions for the broker', 'Mixing customer and firm funds in the same account', 'Guaranteeing customers against investment losses'],
          correctIndex: 1,
          explanation: 'Churning occurs when a broker excessively trades a customer\'s account primarily to generate commissions, without regard for the customer\'s interests. It violates suitability rules and FINRA Rule 2010. The key element is that the trading frequency benefits the broker, not the customer.'
        },
        {
          id: 'pe-ta-07',
          domain: 'Trading & Accounts',
          question: 'Which account type allows investors to borrow up to 50% of the purchase price of marginable securities?',
          options: ['Cash account', 'Margin account', 'Custodial account', 'Discretionary account'],
          correctIndex: 1,
          explanation: 'Margin accounts allow investors to borrow from their broker to purchase securities, with Reg T setting the initial margin at 50% (investor pays half, borrows half). Cash accounts require full payment. Margin amplifies both gains AND losses.'
        },
        {
          id: 'pe-ta-08',
          domain: 'Trading & Accounts',
          question: 'Front-running is BEST described as:',
          options: ['Trading in an account before receiving written customer authorization', 'A broker trading in their own account based on knowledge of a pending large customer order', 'A firm executing retail orders before institutional orders', 'Purchasing securities in the primary market before they reach the secondary market'],
          correctIndex: 1,
          explanation: 'Front-running occurs when a broker uses advance knowledge of a pending customer order (that will move the market) to trade in their own account first. This is distinguished from insider trading (corporate MNPI) — front-running involves using order flow information.'
        },
        {
          id: 'pe-ta-09',
          domain: 'Trading & Accounts',
          question: 'A JTWROS (Joint Tenants with Rights of Survivorship) account\'s defining characteristic is:',
          options: ['Each owner can have unequal shares that pass through their estate', 'The surviving owner automatically inherits the deceased owner\'s share without probate', 'Both owners must sign all transaction orders', 'The account requires a corporate resolution to open'],
          correctIndex: 1,
          explanation: 'In a JTWROS account, when one owner dies, their share automatically transfers to the surviving joint tenant(s) — bypassing probate entirely. This contrasts with Tenants in Common (TIC), where the deceased owner\'s share passes to their estate and must go through probate.'
        },
        {
          id: 'pe-ta-10',
          domain: 'Trading & Accounts',
          question: 'An investor receives $1,200 per year from a bond. The bond is currently priced at $1,000. What is the current yield?',
          options: ['8.3%', '10%', '12%', '12.5%'],
          correctIndex: 2,
          explanation: 'Current Yield = Annual Income / Current Market Price = $1,200 / $1,000 = 12.0%. Note: the stated coupon rate might be different from the current yield if the bond trades at a premium or discount to par.'
        },
        {
          id: 'pe-ta-11',
          domain: 'Trading & Accounts',
          question: 'A Roth IRA differs from a Traditional IRA in that a Roth:',
          options: ['Uses pre-tax contributions and tax-deferred growth', 'Requires minimum distributions starting at age 73', 'Uses after-tax contributions and provides tax-free qualified withdrawals', 'Allows higher annual contribution limits than the Traditional IRA'],
          correctIndex: 2,
          explanation: 'Roth IRA contributions are made with AFTER-TAX dollars, so qualified withdrawals in retirement are completely tax-free. Traditional IRAs may use pre-tax contributions (tax deduction at contribution) with taxable withdrawals. Both have the same annual contribution limits.'
        },
        {
          id: 'pe-ta-12',
          domain: 'Trading & Accounts',
          question: 'What is insider trading?',
          options: ['Trading in securities by professional traders on a stock exchange floor', 'Trading on material, non-public information (MNPI) for personal profit', 'Any trade conducted within 30 days of a company announcement', 'Trading by a company\'s CEO in any securities, even unrelated ones'],
          correctIndex: 1,
          explanation: 'Insider trading is the purchase or sale of securities based on material, non-public information (MNPI). Material = would affect an investor\'s decision to buy or sell. Non-public = not yet available to the general market. It applies to anyone who receives the information, not just corporate insiders.'
        },
        {
          id: 'pe-ta-13',
          domain: 'Trading & Accounts',
          question: 'Wash trading (painting the tape) is prohibited because it:',
          options: ['Creates an artificially inflated or deflated stock price through real trades', 'Creates the FALSE appearance of active trading volume without genuine economic transactions', 'Gives institutional investors an unfair advantage over retail investors', 'Involves trading after market hours at unfair prices'],
          correctIndex: 1,
          explanation: 'Wash trading (painting the tape) involves buying and selling the same security to oneself to create the illusion of market activity and volume. There is no genuine change in ownership. It manipulates perceived trading activity and can mislead other investors about interest in the security.'
        },
        {
          id: 'pe-ta-14',
          domain: 'Trading & Accounts',
          question: 'Marking the close refers to:',
          options: ['Recording the closing price of all securities in a portfolio', 'Placing trades at or near the end of the trading day to artificially influence the closing price', 'Transferring customer accounts to a new firm at close of business', 'A broker noting the exact time of trade execution at day\'s end'],
          correctIndex: 1,
          explanation: 'Marking the close is a prohibited manipulation tactic where trades are placed at or just before market close specifically to influence the reported closing price. The closing price affects index calculations, options settlements, and mutual fund NAVs, making this manipulation particularly harmful.'
        },
        {
          id: 'pe-ta-15',
          domain: 'Trading & Accounts',
          question: 'Current yield on a bond is BEST described as:',
          options: ['The total return if the bond is held to maturity', 'The annual coupon payment divided by the current market price', 'The yield at which the bond would be called by the issuer', 'The yield adjusted for reinvestment of coupon payments'],
          correctIndex: 1,
          explanation: 'Current yield = Annual coupon / Current market price. It measures the annual income return relative to the current price, but does NOT account for price appreciation/depreciation to par at maturity (unlike YTM), nor for call features (unlike YTC).'
        },
        {
          id: 'pe-ta-16',
          domain: 'Trading & Accounts',
          question: 'An investor places a stop-limit order with a stop of $40 and a limit of $38. If the stock gaps from $42 to $36 on bad news, the order:',
          options: ['Executes immediately at $36', 'Triggers at $40 and executes at $38', 'Triggers at $40 but does NOT execute because $36 is below the $38 limit', 'Is cancelled automatically when the gap occurs'],
          correctIndex: 2,
          explanation: 'A stop-limit order triggers (activates) when the stop price is hit, then becomes a LIMIT order at the specified limit price. If the stock gaps from $42 directly to $36, the stop ($40) is triggered but the resulting limit order at $38 CANNOT execute at $36. The order will not fill, leaving the investor still holding the position.'
        },
        {
          id: 'pe-ta-17',
          domain: 'Trading & Accounts',
          question: 'Commingling of client funds means:',
          options: ['Combining multiple client accounts for greater purchasing power', 'Mixing customer funds with the firm\'s own funds in the same account', 'Placing trades for different clients in the same block order', 'Investing customer funds in the same securities as the firm\'s proprietary account'],
          correctIndex: 1,
          explanation: 'Commingling is strictly prohibited. It involves mixing customer assets with the firm\'s own money, making it impossible to properly track and protect customer funds. Firms must maintain customer assets in separate accounts segregated from the firm\'s assets.'
        },
        {
          id: 'pe-ta-18',
          domain: 'Trading & Accounts',
          question: 'A Traditional IRA requires minimum distributions to begin at age:',
          options: ['59½', '65', '70½', '73'],
          correctIndex: 3,
          explanation: 'The SECURE 2.0 Act (2022) raised the Required Minimum Distribution (RMD) age to 73 for most retirement accounts including Traditional IRAs and 401(k)s (for those born after 1950). Roth IRAs do NOT have RMDs during the owner\'s lifetime.'
        },
        {
          id: 'pe-ta-19',
          domain: 'Trading & Accounts',
          question: 'Which of the following benchmarks is PRICE-WEIGHTED (meaning higher-priced stocks have more influence)?',
          options: ['S&P 500', 'NASDAQ Composite', 'Dow Jones Industrial Average', 'Russell 2000'],
          correctIndex: 2,
          explanation: 'The Dow Jones Industrial Average (DJIA) is price-weighted — stocks with higher share prices have more influence on the index regardless of the company\'s market cap. The S&P 500 and NASDAQ Composite are market-cap weighted. The Russell 2000 tracks small-cap stocks.'
        },
        {
          id: 'pe-ta-20',
          domain: 'Trading & Accounts',
          question: 'An investor holds 500 shares of a stock when it announces a 3:2 stock split. After the split, the investor holds:',
          options: ['333 shares at 1.5x the original price', '750 shares at 2/3 of the original price', '1,000 shares at 1/3 of the original price', '250 shares at 2x the original price'],
          correctIndex: 1,
          explanation: 'In a 3:2 split, for every 2 shares held you receive 3 shares. 500 shares × (3/2) = 750 shares. The price is adjusted to 2/3 of the original price so total value remains unchanged. If shares were at $60, after split they\'re at $40, and 750 × $40 = $30,000 = original 500 × $60.'
        },
        {
          id: 'pe-ta-21',
          domain: 'Trading & Accounts',
          question: 'Selling away violates FINRA rules because:',
          options: ['The registered rep fails to disclose their firm\'s commission to the customer', 'The rep sells securities outside of the firm\'s approved products without the firm\'s knowledge', 'The rep sells short without proper disclosure', 'The securities were sold at prices below the current market rate'],
          correctIndex: 1,
          explanation: 'Selling away (private securities transactions) occurs when a registered representative sells securities that are NOT approved by or offered through their broker-dealer, without the firm\'s knowledge or supervision. This denies the firm\'s compliance oversight and is a serious violation under FINRA Rule 3280.'
        },
        {
          id: 'pe-ta-22',
          domain: 'Trading & Accounts',
          question: 'Money laundering\'s SECOND stage (layering) typically involves:',
          options: ['Placing illegal cash into the banking system', 'Moving funds through complex transactions to obscure their illegal origin', 'Returning funds to the economy as legitimate-appearing income', 'Structuring deposits to avoid Currency Transaction Reports'],
          correctIndex: 1,
          explanation: 'The three stages of money laundering are: (1) Placement — getting dirty money into the financial system; (2) Layering — moving money through complex transactions (wire transfers, shell companies, multiple accounts) to obscure the trail; (3) Integration — money re-enters the economy appearing legitimate.'
        },
        {
          id: 'pe-ta-23',
          domain: 'Trading & Accounts',
          question: 'A Currency Transaction Report (CTR) must be filed with FinCEN when:',
          options: ['Any suspicious activity is detected, regardless of amount', 'A cash transaction exceeds $10,000', 'A wire transfer exceeds $5,000 to a foreign account', 'Securities transactions exceed $50,000 in a single day'],
          correctIndex: 1,
          explanation: 'CTRs are MANDATORY for cash transactions exceeding $10,000. There is no discretion — the firm must file regardless of whether the transaction appears suspicious. SARs (Suspicious Activity Reports) are filed for suspicious activity of any amount and are filed within 30 days.'
        },
        {
          id: 'pe-rf-01',
          domain: 'Regulatory Framework',
          question: 'FINRA Rule 2010 (Standards of Commercial Honor) is best described as:',
          options: ['A specific rule about commissions and markups', 'The broad ethical standard requiring members to observe just and equitable principles of trade', 'A rule specifically addressing margin account requirements', 'A regulation governing the content of research reports'],
          correctIndex: 1,
          explanation: 'FINRA Rule 2010 is the overarching ethics rule requiring members to "observe high standards of commercial honor and just and equitable principles of trade." It is broad in scope — any violation of any law or rule can also constitute a Rule 2010 violation.'
        },
        {
          id: 'pe-rf-02',
          domain: 'Regulatory Framework',
          question: 'A registered representative wants to start a side business selling real estate part-time. They must:',
          options: ['Resign from their broker-dealer first', 'Notify their firm in writing before beginning the outside business activity', 'Get approval from FINRA directly', 'There are no requirements for non-securities activities'],
          correctIndex: 1,
          explanation: 'FINRA Rule 3270 (Outside Business Activities) requires registered persons to provide prior written notice to their firm before engaging in any outside business activity. The firm may approve, prohibit, or place conditions on the activity.'
        },
        {
          id: 'pe-rf-03',
          domain: 'Regulatory Framework',
          question: 'The maximum annual gift a registered rep can give to a person with whom they have a business relationship is:',
          options: ['$50', '$100', '$250', '$500'],
          correctIndex: 1,
          explanation: 'FINRA Rule 3220 limits non-cash gifts to $100 per year per person in a business relationship. Reasonable business meals and entertainment (with the rep present) are generally not subject to this cap. Cash gifts are never permitted.'
        },
        {
          id: 'pe-rf-04',
          domain: 'Regulatory Framework',
          question: 'The Regulatory Element of Continuing Education is administered by:',
          options: ['The individual firm, on a schedule it determines', 'FINRA, required within 1 year of registration and every 3 years thereafter', 'The SEC, annually for all registered persons', 'State regulators, in accordance with Blue Sky Laws'],
          correctIndex: 1,
          explanation: 'The Regulatory Element is a FINRA-administered computer-based program required within 1 year of initial registration and then every 3 years. It focuses on compliance, ethics, and regulatory requirements. The Firm Element is separate — a firm-administered annual training program.'
        },
        {
          id: 'pe-rf-05',
          domain: 'Regulatory Framework',
          question: 'Form U5 is filed when:',
          options: ['A new registered representative joins a firm', 'A registered representative leaves or is terminated from a firm', 'A firm applies for a new FINRA membership', 'An investor opens a new brokerage account'],
          correctIndex: 1,
          explanation: 'Form U5 (Uniform Termination Notice) is filed by a broker-dealer when a registered representative leaves the firm for any reason. The U5 must disclose the reason for termination. Form U4 is the application filed when joining a firm.'
        },
        {
          id: 'pe-rf-06',
          domain: 'Regulatory Framework',
          question: 'Statutory disqualification means a person:',
          options: ['Has failed the SIE exam twice in the same year', 'Is barred or suspended from industry participation due to disqualifying events such as felony convictions', 'Has missed continuing education requirements for more than 6 months', 'Is disqualified from taking the Series 7 without completing the SIE first'],
          correctIndex: 1,
          explanation: 'Statutory disqualification (SD) bars a person from association with a FINRA member firm due to disqualifying events including: felony convictions (any) within 10 years, certain misdemeanor convictions, regulatory bars or suspensions, SEC injunctions, and other serious legal or regulatory events.'
        },
        {
          id: 'pe-rf-07',
          domain: 'Regulatory Framework',
          question: 'Regulation Best Interest (Reg BI) requires broker-dealers to:',
          options: ['Always recommend the lowest-cost investment available', 'Act in the best interest of retail customers when making recommendations, placing customer interest above the firm\'s', 'Provide the same advice standard as a registered investment adviser', 'Disclose all commissions to institutional but not retail customers'],
          correctIndex: 1,
          explanation: 'Reg BI (effective June 2020) requires broker-dealers to act in the BEST INTEREST of retail customers — not just meet the traditional suitability standard. The firm must put the customer\'s interest ahead of its own when making recommendations. This is a higher standard than suitability but slightly less rigorous than the full fiduciary standard for investment advisers.'
        }
      ]
    }
  ]
}
