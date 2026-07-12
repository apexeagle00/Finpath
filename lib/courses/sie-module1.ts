import { Module } from '../types'

export const capitalMarketsModule: Module = {
  id: 'capital-markets',
  title: 'Knowledge of Capital Markets',
  description: 'Master the structure of financial markets, every regulatory body, economic forces, and the full securities offering process. This is 16% of the SIE exam.',
  requiredScore: 80,
  lessons: [
    {
      id: 'market-structure',
      title: 'Market Structure: Primary, Secondary, Third & Fourth Markets',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Market Structure: How Securities Move Through the Financial System' },
        { type: 'paragraph', text: 'Before you can understand anything else in finance, you need to understand where and how securities are bought and sold. The financial markets are not one single place — they are a layered system of different market types, each serving a specific purpose.' },
        { type: 'heading', level: 3, text: 'The Primary Market' },
        { type: 'paragraph', text: 'The primary market is where securities are born. When a company or government entity needs to raise capital, it issues new securities and sells them to investors for the first time. The critical defining feature: the ISSUER receives the proceeds from the sale.' },
        { type: 'list', items: [
          'Initial Public Offering (IPO): A private company sells shares to the public for the very first time. The company goes from private to publicly traded. Investment banks underwrite the deal.',
          'Seasoned Equity Offering (SEO) / Secondary Offering: An already-public company issues additional new shares to raise more capital. NOT to be confused with secondary market trading.',
          'Bond issuances: Corporations, the U.S. Treasury, and municipalities raise debt capital by selling new bonds.',
          'Private placements: Securities sold directly to accredited or institutional investors without a public offering (Regulation D). Not registered with the SEC.',
          'Key rule: The proceeds go to the ISSUER — not to another investor. That is what makes it a primary market transaction.'
        ]},
        { type: 'callout', variant: 'key', text: 'PRIMARY MARKET = New securities. Money goes to the issuer. Examples: IPOs, new bond offerings, private placements.\n\nSECONDARY MARKET = Existing securities. Money goes from one investor to another. The issuer receives nothing.' },
        { type: 'heading', level: 3, text: 'The Secondary Market' },
        { type: 'paragraph', text: 'The secondary market is where already-issued securities trade between investors. This is what most people picture when they think of "the stock market." The New York Stock Exchange (NYSE), NASDAQ, and the bond markets are all secondary markets. When you buy Apple stock on the NYSE, Apple receives none of that money — it flows from your brokerage account to the seller\'s account.' },
        { type: 'paragraph', text: 'The secondary market serves a critical function: it provides LIQUIDITY. Without a secondary market, investors would be locked into securities until maturity or until the company was sold. The ability to sell quickly and at a fair price is what makes investors comfortable investing in the first place.' },
        { type: 'list', items: [
          'Provides price discovery — supply and demand determine fair market value continuously',
          'Provides liquidity — investors can convert securities to cash quickly',
          'Divided into exchange markets and OTC (over-the-counter) markets',
          'NYSE and NASDAQ are the two largest U.S. equity exchanges',
          'Most bond trading occurs in the OTC market'
        ]},
        { type: 'heading', level: 3, text: 'Exchange Markets vs. OTC Markets' },
        { type: 'paragraph', text: 'Within the secondary market, there are two main structures: exchange markets (centralized) and over-the-counter markets (decentralized).' },
        { type: 'comparison', comparisons: [
          { label: 'Exchange Markets (NYSE, NASDAQ)', description: 'Centralized location (physical or electronic). Stocks must meet listing requirements to trade here. Auction-based pricing — specialists/market makers match buyers and sellers. Highest transparency. NASDAQ is electronic (no physical floor); NYSE has both.' },
          { label: 'OTC Market', description: 'Decentralized network of dealers who trade directly with each other. No central location. Prices negotiated between parties. Includes OTC Bulletin Board and Pink Sheets for smaller/riskier stocks. Most bonds trade OTC. Less regulated than exchanges.' }
        ]},
        { type: 'heading', level: 3, text: 'Third Market & Fourth Market' },
        { type: 'paragraph', text: 'The third and fourth markets are less well-known but appear on the SIE exam.' },
        { type: 'comparison', comparisons: [
          { label: 'Third Market', description: 'Exchange-listed securities traded OTC (over-the-counter) between broker-dealers and large institutional investors. Example: a large block of IBM shares traded directly between two institutions outside the NYSE. Created to allow institutions to trade large blocks without impacting exchange prices.' },
          { label: 'Fourth Market', description: 'Institutional investors trading DIRECTLY with each other, without broker-dealers as intermediaries. Electronic trading networks (ECNs) like Instinet facilitate fourth market trading. Eliminates broker commissions. Only large institutions participate.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TIP: The third market = listed securities traded OTC. The fourth market = institutions trading directly with each other (no broker-dealer). Both are types of secondary market trading.' },
        { type: 'heading', level: 3, text: 'Market Makers & Specialists' },
        { type: 'list', items: [
          'Market Makers: Dealers who continuously post bid (buy) and ask (sell) prices for specific securities, providing liquidity. Required to buy and sell at their posted prices.',
          'Bid price: what the dealer will pay to buy from you (always lower)',
          'Ask/Offer price: what the dealer will sell to you (always higher)',
          'Bid-ask spread: the difference — this is the dealer\'s profit',
          'FINRA operates TRACE (Trade Reporting and Compliance Engine) for transparency in bond markets',
          'FINRA also operates the OTC Bulletin Board (OTCBB) for OTC equity securities'
        ]},
        { type: 'callout', variant: 'key', text: 'KEY NUMBERS:\n• NYSE is the largest stock exchange by market capitalization\n• NASDAQ is the largest by number of listed companies and trading volume\n• The bid is ALWAYS lower than the ask. You sell at the bid, you buy at the ask.' }
      ]
    },
    {
      id: 'market-participants',
      title: 'Market Participants: Every Role You Need to Know',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Market Participants: Every Role in the Securities Industry' },
        { type: 'paragraph', text: 'The securities industry is an ecosystem of different entities, each playing a specific role. The SIE exam tests your ability to identify who does what, and — critically — the regulatory status and obligations of each participant.' },
        { type: 'heading', level: 3, text: 'Broker-Dealers: The Central Intermediary' },
        { type: 'paragraph', text: 'A broker-dealer is a firm that can act in two capacities. Understanding the difference between acting as a broker vs. acting as a dealer is one of the most tested concepts on the SIE.' },
        { type: 'comparison', comparisons: [
          { label: 'Acting as a Broker (Agent)', description: 'The firm executes trades on behalf of CUSTOMERS. It finds the other side of the trade in the market. Earns a COMMISSION. Does NOT take ownership of the securities. Acts as a middleman. Must disclose that it is acting as agent.' },
          { label: 'Acting as a Dealer (Principal)', description: 'The firm trades from its OWN INVENTORY — it buys securities for itself and sells from its own holdings. Earns a MARKUP (selling) or MARKDOWN (buying). Takes on risk by owning the securities. Must disclose its capacity and cannot charge both a markup and a commission.' }
        ]},
        { type: 'callout', variant: 'key', text: 'A firm CANNOT act as both broker AND dealer in the same transaction. It must disclose its capacity in every trade confirmation. If acting as dealer, it charges a markup/markdown — NOT a commission.' },
        { type: 'list', items: [
          'Introducing broker-dealers: Accept customer orders and introduce them to a clearing firm. Do not hold customer assets.',
          'Clearing broker-dealers: Handle the settlement and custody of securities for themselves and introducing firms.',
          'Prime brokers: Provide comprehensive services to hedge funds — lending, settlement, custody, reporting. Typically large banks.',
          'All broker-dealers must register with FINRA and the SEC. Individuals working at broker-dealers must pass qualifying exams (SIE + top-off).'
        ]},
        { type: 'heading', level: 3, text: 'Investment Advisers' },
        { type: 'paragraph', text: 'Investment advisers (IAs) provide advice about securities for compensation. They are distinct from broker-dealers in a critical way: investment advisers have a FIDUCIARY DUTY to clients, meaning they must always act in the client\'s best interest — not just make suitable recommendations.' },
        { type: 'list', items: [
          'Must register with the SEC if managing $110 million or more in assets under management (AUM)',
          'Must register with STATE regulators if managing less than $100 million AUM',
          'Between $100M-$110M: transition zone — can register with either SEC or state',
          'Individuals who work for IAs are called Investment Adviser Representatives (IARs)',
          'Fiduciary duty: must disclose conflicts of interest, must act in client\'s best interest at all times',
          'File Form ADV with the SEC — public disclosure document'
        ]},
        { type: 'heading', level: 3, text: 'Issuers & Underwriters' },
        { type: 'list', items: [
          'Issuers: Entities that sell securities to raise capital. Corporations, U.S. Treasury, municipalities, agencies.',
          'Underwriters (Investment Bankers): Firms that help issuers bring securities to market. They advise on structure, pricing, and marketing. They may guarantee the sale (firm commitment) or use best efforts.',
          'Underwriting syndicate: Group of investment banks that work together on large offerings to spread the risk.',
          'Managing underwriter: Leads the syndicate. Negotiates with issuer, allocates shares to syndicate members.',
          'Municipal advisors: Advise municipalities on debt issuances. Registered with MSRB. NOT the same as underwriters.'
        ]},
        { type: 'heading', level: 3, text: 'Types of Investors' },
        { type: 'comparison', comparisons: [
          { label: 'Retail Investors', description: 'Individual investors. Receive the HIGHEST level of regulatory protection. Subject to suitability and Reg BI standards. Most FINRA rules are designed to protect retail investors.' },
          { label: 'Institutional Investors', description: 'Banks, insurance companies, mutual funds, pension funds, hedge funds, endowments. Sophisticated entities. Receive fewer protections — presumed to be knowledgeable and capable of self-protection. Can access products not available to retail (e.g., Rule 144A offerings).' },
          { label: 'Accredited Investors', description: 'Individuals with $1M+ net worth (excluding primary residence) OR $200K+ annual income ($300K+ joint for last 2 years with expectation of same). Can invest in Regulation D private placements. Net worth test excludes primary residence.' }
        ]},
        { type: 'heading', level: 3, text: 'Other Key Participants' },
        { type: 'list', items: [
          'Transfer Agents: Maintain records of who owns a company\'s securities. Handle transfers of ownership, issue certificates, process dividend payments. Usually banks.',
          'Custodians: Hold (safekeep) customer securities. Typically banks or trust companies.',
          'DTCC (Depository Trust & Clearing Corporation): The clearinghouse for most U.S. securities transactions. Holds securities in electronic (book-entry) form. Processes settlement for the vast majority of trades.',
          'DTC (Depository Trust Company): Subsidiary of DTCC. Holds most U.S. securities in "street name" (in the broker-dealer\'s name on behalf of customers).',
          'OCC (Options Clearing Corporation): Clears and settles all listed options trades. Acts as counterparty to every options trade, guaranteeing performance.',
          'Municipal Advisors: Advise government entities on financing. Registered with MSRB.',
          'Traders & Market Makers: Buy and sell securities for their own account to maintain an orderly market.'
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TRAP: "Street name" means securities are held in the broker-dealer\'s name on behalf of the customer. The customer still owns them — they are just registered in the broker-dealer\'s name for convenience. This is standard practice.' }
      ]
    },
    {
      id: 'regulatory-bodies',
      title: 'Regulators, SROs & Key Securities Laws',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Regulators, SROs & Key Securities Laws' },
        { type: 'paragraph', text: 'The securities industry operates under an overlapping network of federal regulators, self-regulatory organizations (SROs), and state regulators. Understanding who regulates whom — and what laws govern each activity — is heavily tested on the SIE.' },
        { type: 'heading', level: 3, text: 'The SEC (Securities and Exchange Commission)' },
        { type: 'paragraph', text: 'The SEC is the primary federal regulator of the U.S. securities markets. Created by the Securities Exchange Act of 1934. Its mission: protect investors, maintain fair and orderly markets, facilitate capital formation.' },
        { type: 'list', items: [
          'Regulates: securities exchanges, broker-dealers, investment advisers, investment companies (mutual funds), and public companies',
          'Requires public company disclosure: companies must file periodic reports (10-K annual, 10-Q quarterly, 8-K material events)',
          'Enforcement: can bring civil actions, seek fines, disgorgement, injunctions; refers criminal cases to the DOJ',
          'Does NOT guarantee returns or verify accuracy of prospectus claims — only requires disclosure',
          'Five commissioners appointed by the President; no more than three from the same political party',
          'Divisions: Division of Enforcement, Division of Corporation Finance, Division of Trading and Markets'
        ]},
        { type: 'callout', variant: 'key', text: 'CRITICAL: The SEC does NOT guarantee that securities are safe investments or that prospectus information is accurate. It only requires that issuers DISCLOSE material information. "SEC-registered" does NOT mean "SEC-approved" or "safe."' },
        { type: 'heading', level: 3, text: 'FINRA (Financial Industry Regulatory Authority)' },
        { type: 'paragraph', text: 'FINRA is the largest SRO (Self-Regulatory Organization) in the U.S. securities industry. It is NOT a government agency — it is a private, not-for-profit organization authorized by Congress to regulate broker-dealers. The SEC oversees FINRA.' },
        { type: 'list', items: [
          'Regulates: broker-dealers and their associated persons (registered representatives)',
          'Administers qualification exams: SIE, Series 7, Series 6, Series 57, Series 63, Series 65, Series 66, and others',
          'Operates BrokerCheck: free public database showing registration history, employment history, and disclosures for brokers and firms',
          'Operates TRACE: Trade Reporting and Compliance Engine — provides transparency for bond market transactions',
          'Discipline: can fine, suspend, or permanently bar individuals and firms from the industry',
          'Funded by: fees from member firms and fines; not taxpayer funded',
          'All broker-dealers that do business with the public must be FINRA members'
        ]},
        { type: 'heading', level: 3, text: 'MSRB (Municipal Securities Rulemaking Board)' },
        { type: 'paragraph', text: 'The MSRB writes rules governing the municipal securities market — dealers, brokers, and municipal advisors. CRITICAL SIE EXAM POINT: The MSRB writes the rules but does NOT enforce them. Enforcement is done by FINRA (for broker-dealers) and the SEC.' },
        { type: 'callout', variant: 'exam', text: 'EXAM TRAP: "Who enforces MSRB rules?" The answer is FINRA and the SEC — NOT the MSRB itself. The MSRB has NO enforcement authority. This is one of the most common SIE trick questions.' },
        { type: 'heading', level: 3, text: 'SIPC (Securities Investor Protection Corporation)' },
        { type: 'paragraph', text: 'SIPC is a nonprofit membership organization created by the Securities Investor Protection Act of 1970. It protects customers of broker-dealers if the firm fails (becomes insolvent).' },
        { type: 'list', items: [
          'Coverage: up to $500,000 per customer per broker-dealer ($250,000 maximum for cash claims)',
          'Covers: missing securities and cash from a failed broker-dealer',
          'Does NOT cover: investment losses from bad trades, fraud, or market declines',
          'Does NOT cover: commodity futures, fixed annuities, currency, investment contracts not registered as securities',
          'All broker-dealer FINRA members are also SIPC members',
          'SIPC is NOT a government agency — it is a nonprofit funded by member broker-dealers'
        ]},
        { type: 'comparison', comparisons: [
          { label: 'FDIC (Federal Deposit Insurance Corporation)', description: 'Insures BANK DEPOSITS (checking, savings, CDs) up to $250,000 per depositor per bank. Government agency. Covers bank failures. Does NOT cover investment products even if sold at a bank.' },
          { label: 'SIPC (Securities Investor Protection Corporation)', description: 'Protects BROKERAGE ACCOUNTS up to $500,000 ($250K cash) if a BROKER-DEALER fails. Nonprofit, NOT a government agency. Does NOT protect against investment losses.' }
        ]},
        { type: 'heading', level: 3, text: 'Federal Reserve (The Fed)' },
        { type: 'list', items: [
          'Sets Regulation T: governs the extension of credit by broker-dealers; currently requires 50% initial margin for most marginable securities',
          'Controls monetary policy: sets the federal funds rate and discount rate',
          'Supervises: bank holding companies, state-chartered member banks',
          'The Federal Reserve is NOT a securities regulator — it regulates the banking system and monetary policy'
        ]},
        { type: 'heading', level: 3, text: 'State Regulators & NASAA' },
        { type: 'list', items: [
          'Each state has its own securities regulator (e.g., Secretary of State\'s office)',
          'Enforce "Blue Sky Laws" — state securities laws that predate federal regulation',
          'NASAA (North American Securities Administrators Association): organization of state securities regulators; develops the Series 63, 65, and 66 exams',
          'State registration: most securities sold in a state must be registered under that state\'s Blue Sky laws (in addition to federal registration)',
          'Coordination Act of 1996 (NSMIA): preempts state registration for federally covered securities (NYSE/NASDAQ-listed stocks, mutual funds). States can still investigate fraud.'
        ]},
        { type: 'heading', level: 3, text: 'Key Federal Securities Laws — The Complete List' },
        { type: 'comparison', comparisons: [
          { label: 'Securities Act of 1933 ("The Paper Act" / "Truth in Securities Act")', description: 'Governs the PRIMARY market. Requires registration of new public securities with the SEC. Mandates full disclosure via prospectus before sale. Civil liability for material misstatements/omissions in a prospectus. Key sections: Section 11 (civil liability), Section 12 (liability for misstatements). Exemptions: private placements (Reg D), intrastate offerings (Rule 147), Regulation A+.' },
          { label: 'Securities Exchange Act of 1934', description: 'Governs SECONDARY market trading. Created the SEC. Regulates exchanges, broker-dealers, and OTC markets. Requires ongoing disclosure by public companies (10-K, 10-Q, 8-K). Prohibits manipulation and insider trading (Section 10(b), Rule 10b-5). Governs short sales (Regulation SHO). Margin credit (Reg T). Broker-dealer registration.' },
          { label: 'Investment Company Act of 1940', description: 'Regulates mutual funds (open-end companies), closed-end funds, and unit investment trusts. Requirements: diversification, disclosure in prospectus, limits on leverage, restrictions on affiliated transactions. Prohibits conflicts of interest. Investment companies must register with the SEC.' },
          { label: 'Investment Advisers Act of 1940', description: 'Regulates investment advisers. Registration requirement (SEC or state depending on AUM). Establishes fiduciary duty — advisers must act in clients\' best interest. Prohibits fraud. Requires Form ADV disclosure. Performance fees restricted for retail clients.' },
          { label: 'Securities Investor Protection Act of 1970 (SIPA)', description: 'Created SIPC. Provides limited protection to brokerage customers if a broker-dealer fails. Coverage up to $500K ($250K cash).' },
          { label: 'Sarbanes-Oxley Act of 2002 (SOX)', description: 'Response to Enron/WorldCom scandals. Requires CEO/CFO to certify accuracy of financial reports. Created PCAOB (Public Company Accounting Oversight Board) to regulate auditors. Enhanced criminal penalties for securities fraud.' },
          { label: 'Dodd-Frank Wall Street Reform Act of 2010', description: 'Response to 2008 financial crisis. Created CFPB (Consumer Financial Protection Bureau). Enhanced regulation of derivatives and systemically important financial institutions. Created SEC Office of Credit Ratings. Whistleblower provisions.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'MEMORIZE: 1933 = Primary market / New issues. 1934 = Secondary market / Created SEC. 1940 (x2) = Investment companies + Investment advisers. These four laws are the backbone of securities regulation and appear constantly on the SIE.' }
      ]
    },
    {
      id: 'economic-factors',
      title: 'Economic Factors: The Fed, Business Cycles & Global Markets',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Economic Factors: How the Economy Drives the Markets' },
        { type: 'paragraph', text: 'Capital markets are inseparable from the broader economy. Interest rates, inflation, monetary policy, and economic cycles all directly impact securities prices. Understanding these relationships is essential for the SIE and for your entire career in finance.' },
        { type: 'heading', level: 3, text: 'Monetary Policy vs. Fiscal Policy' },
        { type: 'comparison', comparisons: [
          { label: 'Monetary Policy', description: 'Controlled by the FEDERAL RESERVE. Tools: open market operations, discount rate, reserve requirements. Goal: control inflation and promote employment (the "dual mandate"). Expansionary (loose) policy: lower rates, buy bonds → stimulates economy. Contractionary (tight) policy: raise rates, sell bonds → slows inflation.' },
          { label: 'Fiscal Policy', description: 'Controlled by CONGRESS and the PRESIDENT. Tools: government spending and taxation. Expansionary fiscal policy: increase spending or cut taxes → stimulates economy. Contractionary fiscal policy: cut spending or raise taxes → slows economy. Takes longer to implement than monetary policy.' }
        ]},
        { type: 'heading', level: 3, text: 'The Federal Reserve\'s Tools' },
        { type: 'list', items: [
          'Open Market Operations (OMO): The Fed buys or sells U.S. Treasury securities in the open market. BUYING Treasuries → injects money into the banking system → LOWER rates → stimulates. SELLING Treasuries → removes money from the system → HIGHER rates → contracts. This is the most frequently used tool.',
          'Discount Rate: The interest rate the Fed charges banks for short-term overnight loans from the Fed\'s "discount window." Raising the discount rate makes it more expensive for banks to borrow → banks raise rates to customers → less borrowing → contracts economy.',
          'Reserve Requirements: The percentage of deposits banks must hold in reserve (not loan out). Raising reserve requirements → banks can loan less → less money in circulation → contracts. Currently set at 0% for most banks (rarely used as a tool).',
          'Federal Funds Rate: The interest rate banks charge EACH OTHER for overnight lending of reserves. The Fed targets this rate through OMO. This is the benchmark rate that drives all other rates. When you hear "the Fed raised rates," this is what they raised.'
        ]},
        { type: 'comparison', comparisons: [
          { label: 'Federal Funds Rate', description: 'Rate banks charge each other for overnight loans. Set by the Fed (via OMO). The most important short-term interest rate in the economy. Affects prime rate and all other rates.' },
          { label: 'Discount Rate', description: 'Rate the Fed charges banks for loans from the Federal Reserve (the "discount window"). Always slightly higher than the federal funds rate. Banks prefer to borrow from each other (fed funds) rather than the Fed.' },
          { label: 'Prime Rate', description: 'Rate banks charge their BEST commercial customers. Traditionally 3% above the federal funds rate. Consumer rates (credit cards, HELOCs) are often tied to prime.' }
        ]},
        { type: 'callout', variant: 'key', text: 'INTEREST RATE IMPACT SUMMARY:\n• Rising rates → bond prices fall, growth stocks fall, banks profit, savings accounts earn more\n• Falling rates → bond prices rise, growth stocks rise, housing market heats up, refinancing increases\n\nFed raises rates to FIGHT INFLATION. Fed cuts rates to STIMULATE the economy.' },
        { type: 'heading', level: 3, text: 'The Business Cycle' },
        { type: 'paragraph', text: 'The economy moves through recurring cycles of expansion and contraction. Understanding where we are in the cycle helps predict which sectors and securities perform best.' },
        { type: 'list', items: [
          'Expansion: GDP growing, unemployment falling, consumer spending increasing, corporate profits rising. Bull market typically. Growth and cyclical stocks outperform.',
          'Peak: The top of the cycle. Maximum economic output. Inflation may begin rising. The Fed may start raising rates. Market often tops before the economic peak.',
          'Contraction (Recession): GDP shrinking for 2+ consecutive quarters. Unemployment rising, consumer spending declining, corporate earnings falling. Bear market typically. Defensive stocks (utilities, consumer staples, healthcare) outperform.',
          'Trough: The bottom of the cycle. Maximum unemployment and minimum economic output. Precedes recovery. Stock market often bottoms before the economic trough (markets are forward-looking).'
        ]},
        { type: 'heading', level: 3, text: 'Economic Indicators' },
        { type: 'comparison', comparisons: [
          { label: 'Leading Indicators', description: 'Change BEFORE the economy changes — predict future direction. Examples: stock market prices, building permits, consumer confidence index, new manufacturing orders, yield curve shape, initial jobless claims.' },
          { label: 'Lagging Indicators', description: 'Change AFTER the economy has already changed — confirm trends. Examples: unemployment rate, CPI (inflation), corporate profits, outstanding loans, average prime rate charged by banks.' },
          { label: 'Coincident Indicators', description: 'Change AT THE SAME TIME as the economy. Examples: GDP, personal income, industrial production, retail sales.' }
        ]},
        { type: 'heading', level: 3, text: 'Inflation' },
        { type: 'list', items: [
          'Inflation: General rise in price levels over time. Erodes purchasing power of fixed-income investments.',
          'CPI (Consumer Price Index): Measures inflation for urban consumers. Most commonly quoted inflation measure.',
          'PPI (Producer Price Index): Measures inflation at the wholesale/producer level. Often a leading indicator of CPI.',
          'Demand-pull inflation: Too much money chasing too few goods. Often occurs during economic booms.',
          'Cost-push inflation: Rising input costs (e.g., oil prices) push up the price of everything. Also called "stagflation" when combined with weak growth.',
          'Hyperinflation: Extremely rapid inflation (e.g., 50%+ per month). Devastating to fixed-income investors.',
          'Deflation: Falling prices. Can be dangerous — delays consumer spending, increases real debt burden.'
        ]},
        { type: 'heading', level: 3, text: 'GDP, GNP & International Factors' },
        { type: 'list', items: [
          'GDP (Gross Domestic Product): Total value of goods and services produced WITHIN a country\'s borders, regardless of who produces them. The primary measure of economic size and growth.',
          'GNP (Gross National Product): Total value produced by a country\'s CITIZENS and companies, regardless of where. Includes output by U.S. citizens abroad, excludes output by foreigners in the U.S.',
          'Balance of Payments: Record of all economic transactions between a country and the rest of the world. Trade deficit = imports > exports.',
          'Exchange Rates: The price of one currency in terms of another. A strong U.S. dollar makes U.S. exports more expensive (bad for exporters) and imports cheaper. Affects multinational corporations\' earnings.',
          'Currency risk: Foreign investments lose value if the foreign currency weakens against the dollar.'
        ]},
        { type: 'heading', level: 3, text: 'Stock Sector Behavior Across the Business Cycle' },
        { type: 'list', items: [
          'Cyclical stocks: Perform well during expansions, poorly during recessions. Auto companies, airlines, luxury goods, construction.',
          'Defensive (non-cyclical) stocks: Perform relatively well during recessions. Utilities, consumer staples (food, household goods), healthcare.',
          'Growth stocks: Companies expected to grow faster than average. Often tech companies. Sensitive to interest rates (higher rates reduce present value of future earnings).',
          'Value stocks: Trading below intrinsic value. Often more stable during downturns.'
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TIP: The YIELD CURVE is a leading indicator. Normal yield curve (upward sloping): economy is healthy. Inverted yield curve (short-term rates > long-term rates): historically predicts recession within 12-18 months. Flat yield curve: uncertain economic outlook.' }
      ]
    },
    {
      id: 'securities-offerings',
      title: 'Securities Offerings & the Underwriting Process',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Securities Offerings & the Underwriting Process' },
        { type: 'paragraph', text: 'When a company wants to raise money by issuing securities, it goes through a complex process involving investment banks, regulatory filings, and strict rules about what can be said to potential investors. This entire process is governed primarily by the Securities Act of 1933.' },
        { type: 'heading', level: 3, text: 'The IPO Process: Step by Step' },
        { type: 'list', items: [
          '1. SELECTION: Company selects an investment bank (managing underwriter) to lead the offering.',
          '2. DUE DILIGENCE: Investment bank thoroughly examines company financials, business model, risks.',
          '3. REGISTRATION STATEMENT (S-1): Filed with the SEC. Contains all material information about the company and offering. Begins the 20-day cooling-off (quiet) period.',
          '4. COOLING-OFF PERIOD: While SEC reviews the registration. Company and underwriters CANNOT make offers or sales. They can distribute a preliminary prospectus (red herring) to gauge interest.',
          '5. RED HERRING (Preliminary Prospectus): Contains most information EXCEPT final price and number of shares. Printed in red ink warning it is not a final prospectus. Used during the roadshow.',
          '6. ROADSHOW: Underwriters and company management present to institutional investors. Goal: gauge demand and build the order book.',
          '7. PRICING: Final price and number of shares determined based on demand from roadshow. Registration statement becomes effective.',
          '8. EFFECTIVE DATE: SEC declares registration effective. Sales can begin. Final prospectus delivered.',
          '9. STABILIZATION: Underwriter may buy shares in the aftermarket to support the price (syndicate bid/stabilizing bid).',
          '10. COOLING-OFF / LOCK-UP: Insiders typically locked up for 180 days — cannot sell their shares after the IPO.'
        ]},
        { type: 'callout', variant: 'key', text: 'DURING THE COOLING-OFF PERIOD:\n✓ CAN: Distribute preliminary prospectus (red herring), take indications of interest, conduct roadshows\n✗ CANNOT: Make sales, accept binding orders, advertise, make oral offers\n\nRemember: "Indications of interest" are NOT binding orders. The customer is not obligated to buy.' },
        { type: 'heading', level: 3, text: 'Types of Underwriting Commitments' },
        { type: 'comparison', comparisons: [
          { label: 'Firm Commitment Underwriting', description: 'The underwriter GUARANTEES the full amount of the offering. They buy ALL the shares from the issuer at a fixed price and then resell to the public. The underwriter takes full risk — if they can\'t sell all shares, they hold the unsold inventory. Most common for large, established issuers. The underwriter\'s profit is the "spread" (difference between what they pay the issuer and what they sell to the public).' },
          { label: 'Best Efforts Underwriting', description: 'The underwriter does NOT guarantee the full amount. They use their best efforts to sell as much as possible, but unsold shares are returned to the issuer. Less risk for the underwriter. Common for smaller or riskier issuers. The underwriter earns a commission on shares sold.' },
          { label: 'All-or-None (AON)', description: 'A type of best efforts where the entire offering must be sold or the deal is cancelled and all money returned to investors. Used when the issuer needs a specific minimum amount.' }
        ]},
        { type: 'heading', level: 3, text: 'Green Shoe Option (Overallotment Option)' },
        { type: 'paragraph', text: 'Named after the Green Shoe Company (the first to use it), this option gives underwriters the right to sell up to 15% MORE shares than originally planned if demand is high. This helps stabilize the post-IPO price. The underwriter can buy additional shares from the issuer at the offering price if needed to cover their short position.' },
        { type: 'heading', level: 3, text: 'Exemptions from SEC Registration' },
        { type: 'paragraph', text: 'Not all securities offerings must be registered with the SEC under the Securities Act of 1933. Several important exemptions exist:' },
        { type: 'comparison', comparisons: [
          { label: 'Regulation D (Private Placements)', description: 'Securities sold to accredited investors without public offering. No SEC registration required. Three rules: Rule 504 (up to $10M, can sell to general public with state registration), Rule 506(b) (unlimited amount, up to 35 non-accredited sophisticated investors, no general solicitation), Rule 506(c) (unlimited amount, accredited investors only, allows general solicitation/advertising). "Reg D" exemptions are most common for startups and private companies.' },
          { label: 'Rule 144A', description: 'Allows resale of restricted securities to Qualified Institutional Buyers (QIBs — institutions with $100M+ in securities). Not available to retail investors. Creates liquidity for privately placed securities. Very active market.' },
          { label: 'Regulation A+ (Mini-IPO)', description: 'Allows smaller companies to raise up to $75M from the general public with less disclosure than a full IPO. "Offering circular" instead of full prospectus. Allows general solicitation.' },
          { label: 'Rule 147 (Intrastate Offering)', description: 'Securities offered and sold exclusively within ONE state. Must use state registration only (no SEC registration). Company must be incorporated in the state and do majority of business there.' }
        ]},
        { type: 'heading', level: 3, text: 'Rule 144 — Restricted & Control Securities' },
        { type: 'paragraph', text: 'Rule 144 governs when insiders and holders of restricted securities (unregistered securities received through private placements) can sell their shares in the public market.' },
        { type: 'list', items: [
          'Restricted securities: Acquired in unregistered private transactions (Reg D). Must hold for 6 months (if issuer is reporting company) or 12 months (non-reporting company) before selling.',
          'Control securities: Securities held by "affiliates" — officers, directors, 10%+ shareholders — regardless of how acquired.',
          'Volume limitations: Insiders can only sell the greater of: 1% of outstanding shares, or the average weekly trading volume over the past 4 weeks.',
          'Manner of sale: Must sell through broker transactions or directly with a market maker.',
          'Form 144: Must be filed with SEC when selling more than 5,000 shares or $50,000 worth.',
          'Rule 144 does NOT apply if the seller is not an affiliate and has held registered securities for over 1 year (no restrictions apply).'
        ]},
        { type: 'heading', level: 3, text: 'Shelf Registration (Rule 415)' },
        { type: 'paragraph', text: 'Shelf registration allows large, established companies to register securities with the SEC and then sell them on a delayed or continuous basis over up to 3 years — "putting them on the shelf" until the market conditions are favorable. This gives issuers flexibility without going through the full registration process each time.' },
        { type: 'heading', level: 3, text: 'Prospectus Requirements' },
        { type: 'list', items: [
          'Prospectus: The primary disclosure document for a public offering. Must contain: company description, financial statements, risk factors, use of proceeds, management information, and description of securities being sold.',
          'Final prospectus must be delivered no later than the time of sale.',
          'Tombstone ads: Simple black-bordered advertisements that announce a securities offering. Can be published during the cooling-off period. Do NOT constitute an offer — just announce facts.',
          'Official statement: The disclosure document for municipal bond offerings (equivalent to a prospectus).',
          'Blue sky laws: State laws requiring registration of securities in each state where they will be sold (in addition to SEC registration). NSMIA preempts state registration for exchange-listed securities.'
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TIP: Tombstone ads ARE allowed during the cooling-off period. They only state facts (price, size, managing underwriter) and do not constitute an offer. The SEC "declares" a registration effective — it does NOT "approve" the securities.' }
      ]
    }
  ],
  quiz: [
    { id: 'cm-q1', question: 'A technology startup sells shares to 30 accredited investors without registering with the SEC under Regulation D, Rule 506(b). This is an example of:', options: ['A primary market transaction exempt from SEC registration', 'A secondary market transaction requiring state registration only', 'A violation of the Securities Act of 1933', 'A transaction that requires a full prospectus'], correctIndex: 0, explanation: 'Regulation D, Rule 506(b) allows private placements to up to 35 non-accredited sophisticated investors and unlimited accredited investors without SEC registration. This is still a primary market transaction (new securities, proceeds go to issuer) — it is simply exempt from the registration requirements of the Securities Act of 1933.' },
    { id: 'cm-q2', question: 'An investor sells 500 shares of Microsoft on the NASDAQ. Microsoft receives:', options: ['The full market value of the shares', '50% of the proceeds as required by Reg T', 'Nothing — this is a secondary market transaction between investors', 'A commission from FINRA for the trade'], correctIndex: 2, explanation: 'This is a secondary market transaction. Microsoft issued these shares previously — they already received the proceeds from that original issuance. When existing shares trade on NASDAQ, the money flows from the buyer to the seller. The issuer (Microsoft) receives nothing from secondary market trading.' },
    { id: 'cm-q3', question: 'During the cooling-off period of an IPO, which of the following is PERMITTED?', options: ['Accepting binding orders from investors', 'Making sales of the new securities', 'Distributing a preliminary prospectus (red herring) to gauge interest', 'Advertising the new offering in newspapers'], correctIndex: 2, explanation: 'During the cooling-off period, underwriters CAN distribute a preliminary prospectus (red herring) and take indications of interest. They CANNOT make sales, accept binding orders, or advertise. Indications of interest during the cooling-off period are NOT binding — the customer is not obligated to buy.' },
    { id: 'cm-q4', question: 'Which regulatory body writes rules for the municipal securities market but has NO enforcement authority?', options: ['SEC', 'FINRA', 'MSRB', 'NASAA'], correctIndex: 2, explanation: 'The MSRB (Municipal Securities Rulemaking Board) writes rules for municipal securities dealers and advisors but has NO enforcement authority. FINRA enforces MSRB rules for broker-dealers; the SEC enforces them for other entities. This distinction is one of the most frequently tested facts on the SIE exam.' },
    { id: 'cm-q5', question: 'SIPC protects customers of a failed broker-dealer up to:', options: ['$250,000 per account', '$500,000 per customer, with a $250,000 limit on cash claims', '$1,000,000 for retirement accounts', '$250,000 for securities and $250,000 for cash, separately'], correctIndex: 1, explanation: 'SIPC provides protection up to $500,000 per customer per broker-dealer, with a maximum of $250,000 for cash claims. Securities coverage can be up to the full $500,000. SIPC does NOT protect against investment losses — only against broker-dealer insolvency.' },
    { id: 'cm-q6', question: 'When the Federal Reserve conducts open market operations by BUYING Treasury securities, the effect on the economy is:', options: ['Contractionary — reduces money supply and raises interest rates', 'Expansionary — increases money supply and lowers interest rates', 'Neutral — buying securities has no impact on interest rates', 'Restrictive — reduces bank reserves and tightens credit'], correctIndex: 1, explanation: 'When the Fed BUYS Treasury securities, it injects money into the banking system (pays banks for the securities). This increases bank reserves, allowing more lending, which increases money supply and puts downward pressure on interest rates. This is expansionary/accommodative monetary policy.' },
    { id: 'cm-q7', question: 'An institutional investor with $150 million in securities assets purchases unregistered securities under Rule 144A. This investor is classified as:', options: ['An accredited investor under Regulation D', 'A Qualified Institutional Buyer (QIB)', 'A retail investor with special exemptions', 'An insider subject to Rule 144 restrictions'], correctIndex: 1, explanation: 'Rule 144A allows resale of restricted securities to Qualified Institutional Buyers (QIBs) — institutions that own and invest at least $100 million in securities. With $150M, this institution qualifies as a QIB. QIBs can purchase securities that are not available to retail investors.' },
    { id: 'cm-q8', question: 'In a FIRM COMMITMENT underwriting, if the underwriter cannot sell all the shares at the offering price:', options: ['The offering is cancelled and money returned to investors', 'The issuer must buy back the unsold shares', 'The underwriter holds the unsold shares in its own inventory at its own risk', 'SIPC steps in to guarantee the remaining shares'], correctIndex: 2, explanation: 'In a firm commitment underwriting, the investment bank GUARANTEES the entire offering by buying all shares from the issuer. If they cannot sell all shares to the public, the underwriter holds the unsold inventory at its own risk — this is the main risk the underwriter takes in exchange for the underwriting spread.' },
    { id: 'cm-q9', question: 'The securities Act of 1933 primarily regulates:', options: ['Secondary market trading of previously issued securities', 'The creation of the SEC and its enforcement powers', 'The initial issuance and registration of new securities', 'Broker-dealer conduct and registration requirements'], correctIndex: 2, explanation: 'The Securities Act of 1933 ("The Paper Act") governs the PRIMARY market — the initial sale of new securities to the public. It requires registration with the SEC and full disclosure via a prospectus. The Securities Exchange Act of 1934 governs secondary market trading and created the SEC.' },
    { id: 'cm-q10', question: 'A leading economic indicator would BEST be described as:', options: ['GDP growth, which measures current economic output', 'The unemployment rate, which lags economic changes', 'Building permits, which predict future economic activity', 'Corporate profits, which confirm past economic trends'], correctIndex: 2, explanation: 'Building permits are a leading indicator — they signal future construction activity and economic expansion before it happens. GDP is a coincident indicator. The unemployment rate and corporate profits are lagging indicators (they change AFTER the economy has already changed). Leading indicators help predict where the economy is headed.' },
    { id: 'cm-q11', question: 'Rule 144 restricts insiders from selling more than which of the following in any 3-month period?', options: ['1% of outstanding shares or average weekly trading volume of the past 4 weeks, whichever is greater', '5% of outstanding shares per calendar quarter', '10,000 shares maximum regardless of company size', '$1 million in market value per quarter'], correctIndex: 0, explanation: 'Rule 144 limits insider sales to the GREATER of: (1) 1% of the total shares outstanding, or (2) the average weekly reported trading volume during the four weeks preceding the sale. This prevents insiders from flooding the market with their shares.' },
    { id: 'cm-q12', question: 'Which type of economic policy is controlled by the President and Congress rather than the Federal Reserve?', options: ['Monetary policy', 'Open market policy', 'Fiscal policy', 'Reserve requirement policy'], correctIndex: 2, explanation: 'Fiscal policy (government spending and taxation) is controlled by the elected government — Congress and the President. Monetary policy (interest rates, money supply) is controlled by the Federal Reserve, which is independent of political control. Open market operations and reserve requirements are both tools of monetary policy.' }
  ]
}
