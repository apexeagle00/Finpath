import { Module } from '../types'

export const productsRisksModule: Module = {
  id: 'products-risks',
  title: 'Understanding Products & Their Risks',
  description: 'The largest section of the SIE at 44% of the exam (33 questions). Master every investment product — equities, bonds, options, packaged products, alternatives — and all 10 risk types FINRA tests.',
  requiredScore: 80,
  lessons: [
    {
      id: 'common-preferred-stock',
      title: 'Equity Securities: Common Stock, Preferred Stock & Corporate Structure',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Equity Securities: Ownership in Companies' },
        { type: 'paragraph', text: 'Equity securities represent an ownership stake in a corporation. When you buy stock, you become a part-owner (shareholder) of that company. Equity is the most widely held asset class in the world, and understanding every characteristic of common and preferred stock is essential for the SIE.' },
        { type: 'heading', level: 3, text: 'The Corporate Structure & Shareholder Rights' },
        { type: 'paragraph', text: 'Corporations are owned by shareholders but managed by professional officers. Shareholders elect the board of directors, who in turn hire the CEO and other officers. Understanding this structure matters because it determines shareholder rights.' },
        { type: 'list', items: [
          'Limited liability: Shareholders cannot lose more than their investment. If a corporation goes bankrupt, shareholders lose their shares but are NOT personally liable for corporate debts. This is a fundamental protection of the corporate structure.',
          'Perpetual existence: Corporations continue to exist even if all original founders sell their shares or die.',
          'Board of Directors: Elected by shareholders, responsible for major strategic decisions including declaring dividends.',
          'Proxy: A shareholder who cannot attend an annual meeting can vote by proxy (absentee ballot). Companies must solicit proxies.',
          'Annual meetings: Shareholders vote on board elections, auditors, and major corporate actions.'
        ]},
        { type: 'heading', level: 3, text: 'Common Stock — The Most Widely Held Security' },
        { type: 'paragraph', text: 'Common stock is the most basic form of corporate ownership. Common shareholders are "residual claimants" — they get what\'s left after everyone else is paid. This gives them the most risk and the most potential reward.' },
        { type: 'list', items: [
          'Voting rights: Common shareholders vote on major corporate matters. Typically one vote per share. Key votes: board of directors elections, mergers/acquisitions, stock splits, changes to charter.',
          'Cumulative voting: All votes can be cast for one director (helps minority shareholders elect representation). Example: If electing 4 directors and you own 100 shares, you can cast all 400 votes for one candidate.',
          'Statutory voting: One vote per share per position being voted on. Favors majority shareholders.',
          'Dividends: NOT guaranteed. Declared at the discretion of the board. Can be cash or stock. Companies are not required to pay dividends.',
          'Preemptive rights: The right to maintain percentage ownership when new shares are issued. Company must offer existing shareholders the right to buy new shares before the public.',
          'Capital appreciation: Unlimited upside — no cap on how high stock can go.',
          'Last in liquidation: In bankruptcy, common shareholders are paid LAST — after ALL creditors (secured, unsecured) and preferred shareholders. Often receive nothing.'
        ]},
        { type: 'heading', level: 3, text: 'Preferred Stock — The Hybrid Security' },
        { type: 'paragraph', text: 'Preferred stock is a hybrid between common stock and bonds. It has ownership characteristics but behaves more like a fixed-income security. The key feature: preferred shareholders receive their dividends BEFORE common shareholders.' },
        { type: 'list', items: [
          'Fixed dividends: Stated at issuance (e.g., "5% preferred" on $100 par = $5/year). Paid before any common dividend.',
          'No voting rights (generally): Preferred shareholders typically do NOT vote at annual meetings.',
          'Priority in liquidation: Paid before common shareholders, but AFTER all creditors (secured and unsecured bondholders).',
          'Par value: Preferred stock typically has a stated par value (often $25, $50, or $100 per share).',
          'Limited upside: Unlike common stock, preferred stock price typically doesn\'t rise much above its par value (unless convertible). Trades based on dividend yield, like a bond.'
        ]},
        { type: 'heading', level: 3, text: 'Types of Preferred Stock' },
        { type: 'comparison', comparisons: [
          { label: 'Cumulative Preferred', description: 'If the company misses dividend payments, those missed dividends ACCUMULATE in "arrears." All accumulated preferred dividends (past and current) must be paid in full BEFORE any common dividend can be paid. Most protective type for investors. Most common type of preferred.' },
          { label: 'Non-Cumulative Preferred', description: 'If the company misses a dividend payment, it is GONE — it does not accumulate. The company can resume paying preferred dividends without making up past missed payments. Less protective for investors.' },
          { label: 'Participating Preferred', description: 'In addition to the fixed preferred dividend, holders participate in additional dividends alongside common shareholders if the company has exceptional profits. Best of both worlds — rare.' },
          { label: 'Convertible Preferred', description: 'Can be converted into common stock at a predetermined conversion ratio at the holder\'s option. Allows investors to benefit if common stock rises significantly. Higher value (has equity upside) so lower dividend yield than non-convertible.' },
          { label: 'Callable Preferred', description: 'The ISSUER (company) has the right to redeem (call back) the preferred shares at a set call price, usually at a small premium to par. Called when interest rates drop — the company can reissue at lower dividend rates. Creates call/reinvestment risk for investors.' },
          { label: 'Adjustable Rate Preferred', description: 'Dividend rate floats with a benchmark rate (e.g., Treasury bill rate). Provides some protection against rising rates. More stable price than fixed-rate preferred in changing rate environments.' }
        ]},
        { type: 'callout', variant: 'key', text: 'LIQUIDATION PRIORITY ORDER (most important to least):\n1. Secured creditors (collateralized bonds)\n2. Unsecured creditors (debentures, trade creditors)\n3. Preferred stockholders\n4. Common stockholders\n\nCommon stockholders have the MOST RISK and the MOST potential reward. Preferred stockholders have LESS risk and LESS potential reward than common.' },
        { type: 'callout', variant: 'exam', text: 'EXAM TRAP: "In liquidation, preferred shareholders are paid before creditors." FALSE. Preferred shareholders are paid AFTER all creditors. They are paid before COMMON shareholders only. Always remember: debt holders (creditors) have priority over ALL equity holders (preferred AND common).' }
      ]
    },
    {
      id: 'rights-warrants-adrs',
      title: 'Rights, Warrants, ADRs & Corporate Actions',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Rights, Warrants, ADRs & Corporate Actions' },
        { type: 'heading', level: 3, text: 'Rights (Subscription Rights)' },
        { type: 'paragraph', text: 'Rights are short-term options issued by a corporation to existing shareholders, giving them the right to purchase additional shares at a price BELOW the current market price. Rights protect existing shareholders from dilution when new shares are issued.' },
        { type: 'list', items: [
          'Issued to: EXISTING shareholders on a pro-rata basis (one right per share owned)',
          'Purpose: Allows existing shareholders to maintain their percentage ownership when the company raises new capital by issuing more shares',
          'Exercise price (subscription price): Set BELOW current market price — making the right immediately valuable',
          'Duration: Short-term — typically 2-10 weeks before they expire',
          'Tradeable: Rights can be sold in the market if the shareholder doesn\'t want to exercise them',
          '"Rights on" vs "Ex-rights": Shares trading "rights on" include the right. After ex-rights date, shares trade without the right attached.',
          'Standby underwriting: When a company does a rights offering, investment banks often provide standby underwriting — agreeing to buy any shares not taken up by shareholders'
        ]},
        { type: 'heading', level: 3, text: 'Warrants' },
        { type: 'paragraph', text: 'Warrants are long-term options that give holders the right to buy shares at a fixed exercise price. They are typically attached to bond or preferred stock offerings as a "sweetener" to make the offering more attractive to investors.' },
        { type: 'comparison', comparisons: [
          { label: 'Rights', description: 'Short-term (weeks). Issued to existing shareholders. Exercise price BELOW market. Pro-rata distribution. Issued as part of a new equity offering to avoid dilution.' },
          { label: 'Warrants', description: 'Long-term (years — sometimes perpetual). Attached to bonds or preferred stock. Exercise price often set ABOVE market at issuance. Not limited to existing shareholders. Issued as a "sweetener" to make a bond offering more attractive.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'KEY DISTINCTION: Rights = short-term, below market, for existing shareholders. Warrants = long-term, often above market at issuance, attached to other securities.' },
        { type: 'heading', level: 3, text: 'American Depositary Receipts (ADRs)' },
        { type: 'paragraph', text: 'ADRs allow U.S. investors to own shares of FOREIGN companies, trading on U.S. exchanges in U.S. dollars, with dividends paid in U.S. dollars. A U.S. depositary bank (like Citibank or J.P. Morgan) purchases shares of the foreign company, holds them in custody, and issues ADR certificates representing those shares.' },
        { type: 'list', items: [
          'Trade on U.S. exchanges (NYSE, NASDAQ) and OTC in U.S. dollars',
          'Dividends paid in U.S. dollars (foreign currency dividends converted before payment)',
          'One ADR may represent more or less than one underlying foreign share (depends on ratio set at issuance)',
          'Sponsored ADRs: Created with the cooperation of the foreign company. Provides better disclosure.',
          'Unsponsored ADRs: Created by a depositary bank without the foreign company\'s involvement. Less disclosure. May have multiple ADR programs for the same stock.',
          'Risks: All normal equity risks PLUS currency risk (exchange rate changes affect value) and political risk'
        ]},
        { type: 'heading', level: 3, text: 'Corporate Actions — How Companies Change Capital Structure' },
        { type: 'paragraph', text: 'Corporate actions are events initiated by a corporation that materially affect its securities. They are heavily tested on the SIE because of their impact on share price, shares outstanding, and cost basis.' },
        { type: 'list', items: [
          'Forward Stock Split: Company increases shares and proportionally reduces price. Example: 2-for-1 split → each shareholder gets 2 shares for every 1, but price is cut in half. Total value unchanged. Used when stock price is "too high" to be attractive to small investors. Cost basis per share adjusts proportionally.',
          'Reverse Stock Split: Company reduces shares and proportionally increases price. Example: 1-for-10 reverse split → 10 shares become 1 share, price multiplies by 10. Used when stock price is "too low" (risks being delisted). Total value unchanged.',
          'Stock Dividend: Company pays dividend in additional shares rather than cash. Similar effect to a stock split. Example: 10% stock dividend → for every 10 shares owned, receive 1 additional share.',
          'Cash Dividend: Most common form. Board declares dividend, specifying record date and payment date.',
          'Tender Offer: Company (or third party) offers to buy shares from shareholders at a PREMIUM to market price. Used in acquisitions. Shareholders can "tender" (sell) their shares into the offer.',
          'Share Buyback (Repurchase): Company buys back its own shares in the open market. Reduces shares outstanding → increases EPS. Signals management confidence. Shareholders who don\'t sell benefit from higher EPS.',
          'Spin-off: Company separates a division into an independent publicly traded company. Existing shareholders receive shares in the new company.'
        ]},
        { type: 'callout', variant: 'key', text: 'STOCK SPLIT MATH:\n2-for-1 split: If you own 100 shares at $60 → after split: 200 shares at $30. Total value: $6,000 (unchanged).\n\nCost basis per share is also adjusted: $6,000 cost ÷ 200 shares = $30 cost basis per share.\n\nReverse split math works the same in reverse: 1-for-5 → 100 shares at $2 becomes 20 shares at $10.' }
      ]
    },
    {
      id: 'debt-fundamentals',
      title: 'Bonds: Fundamentals Every SIE Candidate Must Master',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Bonds: The Foundation of Fixed Income' },
        { type: 'paragraph', text: 'When you buy a bond, you are lending money to the issuer. In return, the issuer promises to pay you interest (the coupon) at regular intervals and return your principal at maturity. Bonds are called "fixed income" because the interest payments are typically fixed and predictable — unlike stock dividends.' },
        { type: 'heading', level: 3, text: 'The Language of Bonds — Every Term You Must Know' },
        { type: 'list', items: [
          'Par value (Face value / Principal): The amount the issuer promises to repay at maturity. For corporate bonds: $1,000. For T-bills and T-notes: $1,000. For municipal bonds: usually $5,000.',
          'Coupon rate: The annual interest rate stated on the bond, expressed as a percentage of par. A 6% coupon on a $1,000 bond = $60/year, typically paid as $30 every 6 months.',
          'Maturity date: When the principal is repaid. Bills (<1 year), Notes (1-10 years), Bonds (10+ years).',
          'Current yield: Annual coupon income ÷ current market price. If a bond\'s price changes, current yield changes even if coupon doesn\'t.',
          'Yield to maturity (YTM): The TOTAL return if you hold the bond until maturity, accounting for price paid, coupons received, and principal at maturity. The most complete yield measure.',
          'Yield to call (YTC): The total return if the bond is called at the first call date. Relevant for callable bonds — if rates fall and the bond is called, the investor only earns YTC.',
          'Yield to worst (YTW): The LOWEST possible yield — either YTM or YTC, whichever is lower. Used to assess worst-case scenario for callable bonds.',
          'Discount: When a bond trades BELOW par (price < $1,000). Current yield and YTM are HIGHER than the coupon rate.',
          'Premium: When a bond trades ABOVE par (price > $1,000). Current yield and YTM are LOWER than the coupon rate.',
          'Accrued interest: Interest that has accumulated since the last coupon payment. Bond buyer must pay the seller the accrued interest, in addition to the purchase price.'
        ]},
        { type: 'heading', level: 3, text: 'THE Most Important Bond Relationship: Price vs. Interest Rates' },
        { type: 'paragraph', text: 'Bond prices and interest rates move in OPPOSITE directions. This is the single most important and most tested concept in all of fixed income. Understanding WHY this happens is critical.' },
        { type: 'callout', variant: 'key', text: 'WHY BOND PRICES AND RATES MOVE INVERSELY:\n\nImagine you own a bond paying 4% when interest rates rise to 6%. New bonds now pay 6%. Nobody will pay full price for your 4% bond when they can buy a 6% bond. Your bond\'s price must DROP until its effective yield matches the new market rate of 6%.\n\nConversely: If rates FALL to 2%, your 4% bond looks attractive. Its price RISES until the effective yield equals 2%.\n\nRising rates → bond prices fall.\nFalling rates → bond prices rise.' },
        { type: 'list', items: [
          'Duration: Measures a bond\'s SENSITIVITY to interest rate changes. Longer duration = more price sensitivity = more interest rate risk.',
          'Long-term bonds have GREATER interest rate risk than short-term bonds (more time for rates to change).',
          'Zero-coupon bonds have the HIGHEST duration (all cash flow at maturity) — most sensitive to rate changes.',
          'When evaluating two bonds with the same maturity, the one with the LOWER coupon has greater price sensitivity (more duration).'
        ]},
        { type: 'heading', level: 3, text: 'Bond Yield Relationships — The Complete Picture' },
        { type: 'comparison', comparisons: [
          { label: 'Bond at Par (price = $1,000)', description: 'Coupon rate = Current yield = YTM. All three yields are equal.' },
          { label: 'Bond at Discount (price < $1,000)', description: 'Coupon rate < Current yield < YTM. The bond is cheap — yields are higher than the stated coupon.' },
          { label: 'Bond at Premium (price > $1,000)', description: 'Coupon rate > Current yield > YTM. The bond is expensive — yields are lower than the stated coupon.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TIP — The yield hierarchy for discount bonds: Coupon < Current Yield < YTM\nFor premium bonds: Coupon > Current Yield > YTM\n\nMemory trick: Think of a seesaw. Price and yield always go in opposite directions. When price drops below par (discount), yields go up above the coupon rate.' },
        { type: 'heading', level: 3, text: 'Callable Bonds & Puttable Bonds' },
        { type: 'comparison', comparisons: [
          { label: 'Callable Bonds', description: 'The ISSUER has the right to redeem (call) the bond before maturity, usually at a small premium (call premium). Issuers call bonds when interest rates DROP — they can refinance at lower rates. BAD for investors (who must reinvest at lower rates). To compensate, callable bonds offer HIGHER yields than non-callable bonds.' },
          { label: 'Puttable Bonds', description: 'The INVESTOR has the right to sell the bond BACK to the issuer at par before maturity. Investor exercises the put when rates RISE (bond price has fallen). Protects investors against rising rates. Because this benefits the investor, puttable bonds offer LOWER yields than non-puttable bonds.' },
          { label: 'Convertible Bonds', description: 'Can be converted into a fixed number of common shares at the investor\'s option. Investors accept LOWER yield in exchange for potential equity upside. Behave like bonds when stock is down; like stocks when stock is up.' }
        ]},
        { type: 'heading', level: 3, text: 'Bond Ratings' },
        { type: 'paragraph', text: 'Credit rating agencies assess the creditworthiness (default risk) of bond issuers. Higher rating = lower default risk = lower yield required by investors.' },
        { type: 'comparison', comparisons: [
          { label: 'Investment Grade', description: 'Moody\'s: Aaa, Aa, A, Baa | S&P/Fitch: AAA, AA, A, BBB. Low to moderate default risk. Required by many institutional investors (pension funds, insurance companies) by law or policy.' },
          { label: 'Speculative Grade (High Yield / "Junk")', description: 'Moody\'s: Ba and below | S&P/Fitch: BB and below. Higher default risk. Higher yields required to compensate. Also called "high yield bonds." Can offer attractive returns for risk-tolerant investors.' }
        ]},
        { type: 'callout', variant: 'key', text: 'RATING AGENCY SCALE:\nMoody\'s: Aaa → Aa → A → Baa (investment grade) → Ba → B → Caa → C\nS&P/Fitch: AAA → AA → A → BBB (investment grade) → BB → B → CCC → D\n\nLowest investment grade: Moody\'s Baa / S&P BBB\nAnything below = speculative/junk' }
      ]
    },
    {
      id: 'government-agency-securities',
      title: 'U.S. Government, Agency & Money Market Securities',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'U.S. Government, Agency & Money Market Securities' },
        { type: 'heading', level: 3, text: 'U.S. Treasury Securities — The Gold Standard of Safety' },
        { type: 'paragraph', text: 'U.S. Treasury securities are debt obligations of the U.S. federal government, backed by the "full faith and credit" of the United States. They are considered the safest investments in the world — the U.S. government has never defaulted on its debt obligations. All Treasury securities are exempt from state and local income taxes (but NOT federal tax).' },
        { type: 'comparison', comparisons: [
          { label: 'Treasury Bills (T-Bills)', description: 'Maturity: 4, 8, 13, 17, 26, or 52 weeks. Sold at a DISCOUNT to par value — no coupon payments. The return comes from buying below par and receiving par at maturity. Example: Buy a 26-week T-bill at $970, receive $1,000 at maturity → $30 return. The most liquid money market instrument.' },
          { label: 'Treasury Notes (T-Notes)', description: 'Maturity: 2, 3, 5, 7, or 10 years. Pay SEMIANNUAL coupon payments. Most common benchmark for intermediate rates. The 10-year T-Note yield is the most widely watched interest rate in the world.' },
          { label: 'Treasury Bonds (T-Bonds)', description: 'Maturity: 20 or 30 years. Pay semiannual coupons. Highest interest rate risk among Treasuries (longest duration). The 30-year bond is often called the "long bond."' },
          { label: 'TIPS (Treasury Inflation-Protected Securities)', description: 'Principal adjusts with CPI inflation. Coupon rate is fixed, but because it\'s applied to an inflation-adjusted principal, actual coupon payments change. Protects against inflation risk. Lower yield than regular Treasuries (you pay for the inflation protection).' },
          { label: 'Treasury STRIPS', description: 'Separate Trading of Registered Interest and Principal Securities. Created by "stripping" coupons from T-notes or T-bonds, creating zero-coupon instruments. Each coupon and the principal becomes a separate STRIP. Sold at deep discount, redeemed at face value. Very high interest rate sensitivity (high duration).' }
        ]},
        { type: 'callout', variant: 'key', text: 'TREASURY TAX TREATMENT:\n✓ Subject to federal income tax\n✗ Exempt from state AND local income taxes\n\nThis makes Treasuries especially attractive for investors in high state-tax states (e.g., California, New York).' },
        { type: 'heading', level: 3, text: 'Agency Securities' },
        { type: 'paragraph', text: 'Agency securities are issued by government-sponsored enterprises (GSEs) or government agencies. They offer slightly higher yields than Treasuries because they carry slightly more credit risk — though in practice the government has historically stepped in to support them.' },
        { type: 'comparison', comparisons: [
          { label: 'Ginnie Mae (GNMA — Government National Mortgage Association)', description: 'Part of HUD (government agency). Issues mortgage-backed securities backed by FHA and VA loans. ARE directly guaranteed by the U.S. government (full faith and credit). Highest quality agency securities. Lowest yield premium over Treasuries.' },
          { label: 'Fannie Mae (FNMA) & Freddie Mac (FHLMC)', description: 'Government-sponsored enterprises (GSEs) — privately owned but with implied government backing. Buy conventional mortgages from banks, pool them, and issue mortgage-backed securities (MBS). NOT directly guaranteed by U.S. government (though government placed them in conservatorship in 2008). Slightly higher yield than Ginnie Mae.' },
          { label: 'FHLB (Federal Home Loan Banks)', description: 'Provides liquidity to member banks for home mortgage lending. Issues bonds used by member savings institutions. Government-sponsored, not directly guaranteed.' }
        ]},
        { type: 'heading', level: 3, text: 'Mortgage-Backed Securities (MBS) & Prepayment Risk' },
        { type: 'paragraph', text: 'Mortgage-backed securities are created by pooling hundreds or thousands of individual mortgages together and issuing securities backed by the cash flows from those mortgages. Investors receive monthly payments of both principal AND interest (unlike regular bonds which pay only interest until maturity).' },
        { type: 'list', items: [
          'Pass-through securities: The most basic MBS. Mortgage payments "pass through" to investors monthly. Investors receive a pro-rata share of all principal and interest payments.',
          'Prepayment risk: THE key risk of MBS. When homeowners refinance or pay off mortgages early (especially when rates fall), investors receive principal earlier than expected and must reinvest it at the now-lower rates. This is the opposite of call risk but has the same economic effect.',
          'Extension risk: When rates RISE, homeowners don\'t refinance, so prepayments slow. Investors are stuck receiving payments longer than expected at below-market rates.',
          'Collateralized Mortgage Obligations (CMOs): MBS divided into TRANCHES (slices) with different risk profiles, payment priorities, and maturities. Some tranches have more predictable cash flows; others absorb more prepayment risk.',
          'Average life: Since MBS receive principal monthly, "maturity" is expressed as "average life" — the weighted average time to receive all principal. Actual average life depends on prepayment speed.'
        ]},
        { type: 'heading', level: 3, text: 'Money Market Instruments — Short-Term, High Liquidity' },
        { type: 'paragraph', text: 'Money market instruments are short-term debt instruments with maturities of one year or less. They are characterized by high liquidity, low credit risk, and relatively low yields. They form the bedrock of cash management for corporations, governments, and financial institutions.' },
        { type: 'comparison', comparisons: [
          { label: 'Treasury Bills', description: 'Safest. Backed by U.S. government. Maturities 4 weeks to 52 weeks. Sold at discount. Exempt from state/local taxes. Most liquid.' },
          { label: 'Commercial Paper', description: 'Short-term unsecured IOUs issued by corporations with strong credit. Maturity up to 270 days (270-day limit avoids SEC registration requirement). NOT registered with SEC. Higher yield than T-bills (more credit risk). Examples: issued by GE Capital, Ford Motor Credit.' },
          { label: "Bankers' Acceptances (BAs)", description: "Time drafts used primarily to finance international trade. A bank \"accepts\" (guarantees) a time draft drawn by an importer/exporter. Trades at discount. Maturities 30-270 days. Because the bank guarantees payment, BAs have low credit risk." },
          { label: 'Negotiable Certificates of Deposit (CDs)', description: 'Time deposits issued by banks with a fixed maturity and interest rate. Minimum $100,000. CAN be traded in the secondary market (unlike retail CDs which have early withdrawal penalties). Slightly higher yield than T-bills (bank credit risk).' },
          { label: 'Federal Funds', description: 'Overnight lending between commercial banks of their excess reserves held at the Fed. The federal funds rate is set by the Fed. Institutions with excess reserves lend to those that need reserves. Very short-term — overnight.' },
          { label: 'Repurchase Agreements (Repos)', description: 'Short-term agreements where one party sells securities and agrees to buy them back at a higher price. The difference is the interest. Used by the Fed for open market operations and by dealers for short-term financing.' }
        ]},
        { type: 'callout', variant: 'exam', text: 'KEY: Commercial paper avoids SEC registration because its maturity is ≤ 270 days. The Securities Act of 1933 exempts short-term instruments (notes that mature in 9 months or less from issuance) from registration.' }
      ]
    },
    {
      id: 'municipal-securities',
      title: 'Municipal Securities: Tax-Exempt Bonds',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Municipal Securities: Tax-Exempt Bonds' },
        { type: 'paragraph', text: 'Municipal bonds ("munis") are debt obligations issued by states, cities, counties, school districts, and other government entities to fund public projects (roads, schools, hospitals, water systems). Their defining feature: interest is generally exempt from FEDERAL income tax — and often from state and local taxes if you live in the issuing state.' },
        { type: 'heading', level: 3, text: 'Why Tax Exemption Matters — The Math' },
        { type: 'paragraph', text: 'Because of their tax-exempt status, munis can offer LOWER yields than comparable taxable bonds and still be attractive to investors in high tax brackets. The higher your tax bracket, the more valuable the tax exemption.' },
        { type: 'callout', variant: 'key', text: 'TAXABLE EQUIVALENT YIELD (TEY) formula:\nTEY = Muni Yield ÷ (1 - Tax Rate)\n\nExample: A muni yields 3%. Investor is in the 37% tax bracket.\nTEY = 3% ÷ (1 - 0.37) = 3% ÷ 0.63 = 4.76%\n\nMeaning: This investor would need a TAXABLE bond yielding 4.76% to match the after-tax return of the 3% muni. Any taxable bond yielding less than 4.76% is less attractive after taxes.' },
        { type: 'heading', level: 3, text: 'Types of Municipal Bonds' },
        { type: 'comparison', comparisons: [
          { label: 'General Obligation (GO) Bonds', description: 'Backed by the FULL TAXING POWER of the issuing municipality. The government entity pledges to raise taxes (on income, property, or sales) if needed to repay bondholders. Requires voter approval in most states. Considered safer than revenue bonds because backed by taxation. Used for general government needs (schools, courthouses).' },
          { label: 'Revenue Bonds', description: 'Backed ONLY by the revenues generated by a SPECIFIC project or facility. No general taxing power. Examples: toll road bonds (backed by toll revenues), airport bonds (airport fees), water/sewer bonds (utility fees), stadium bonds. Higher risk than GO bonds (revenue may be insufficient). Higher yield than GO bonds. Revenue bonds do NOT require voter approval.' },
          { label: 'Special Tax Bonds', description: 'Backed by a specific tax (e.g., gasoline tax, cigarette tax, hotel occupancy tax) dedicated to the bond.' },
          { label: 'Industrial Development Bonds (IDBs)', description: 'Issued by municipalities on behalf of private businesses. Usually used to attract employers to an area. Tax treatment varies — may not be fully tax-exempt (subject to AMT).' }
        ]},
        { type: 'heading', level: 3, text: 'Short-Term Municipal Obligations' },
        { type: 'list', items: [
          'TANs (Tax Anticipation Notes): Issued in anticipation of future tax revenues (property taxes, sales taxes). Repaid when taxes are collected.',
          'RANs (Revenue Anticipation Notes): Issued in anticipation of grant money or other revenues expected from the state or federal government.',
          'BANs (Bond Anticipation Notes): Short-term notes issued until a long-term bond issue can be completed.',
          'Variable Rate Demand Obligations (VRDOs): Long-term bonds with interest rates that reset periodically (daily, weekly). Have a put feature allowing investors to "put" (sell back) the bond on short notice. Combine long-term financing with short-term liquidity.'
        ]},
        { type: 'heading', level: 3, text: 'Municipal Bond Tax Treatment — Details' },
        { type: 'list', items: [
          'Federal tax: Interest is EXEMPT from federal income tax for most munis.',
          'State/local tax: Interest is exempt from state and local taxes ONLY in the state where the bond is issued. Example: A New York resident buying a New York muni gets triple-tax-exempt income.',
          'Out-of-state munis: Generally subject to state and local taxes of your home state.',
          'Alternative Minimum Tax (AMT): Some "private activity bonds" (used for private purposes) are subject to the AMT. Important for high-income investors subject to AMT.',
          'Capital gains: Any capital gain on selling a muni below purchase price is taxable. Capital losses are deductible.',
          'Market discount bonds: Munis purchased below par in the secondary market may have taxable ordinary income on the discount. Complex tax treatment.'
        ]},
        { type: 'heading', level: 3, text: 'Municipal Market Structure' },
        { type: 'list', items: [
          'Negotiated vs. Competitive Offerings: GO bonds often use COMPETITIVE bidding (underwriter submitting lowest interest cost wins). Revenue bonds often use NEGOTIATED underwriting (municipality selects underwriter).',
          'Official Statement: The disclosure document for municipal bond offerings. Equivalent to a prospectus for corporate bonds.',
          'CUSIP number: Each bond issue has a unique CUSIP identifier.',
          'MSRB EMMA (Electronic Municipal Market Access): The official source for municipal bond disclosures and trade data. Free public access.',
          'Most munis trade in the OTC market. Lower liquidity than Treasury or large corporate bonds.'
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM TRAP: "Are municipal bond capital gains tax-exempt?" NO. Only the INTEREST is tax-exempt. Capital gains on munis are fully taxable at applicable rates. Do not confuse tax-exempt interest with tax-exempt gains.' }
      ]
    },
    {
      id: 'options-complete',
      title: 'Options: Every Concept FINRA Tests',
      duration: '35 min',
      content: [
        { type: 'heading', level: 2, text: 'Options: Contracts Giving Rights Without Obligations' },
        { type: 'paragraph', text: 'Options are derivative contracts — their value is DERIVED from the value of an underlying asset (usually a stock). Understanding options requires mastering a completely new vocabulary. Take your time with this lesson — options are consistently among the most tested (and most confusing) topics on the SIE.' },
        { type: 'heading', level: 3, text: 'The Core Building Blocks' },
        { type: 'list', items: [
          'Call option: Gives the BUYER the right (not obligation) to BUY 100 shares of the underlying stock at the strike price before expiration. Buyers of calls are BULLISH (expect stock to rise).',
          'Put option: Gives the BUYER the right (not obligation) to SELL 100 shares at the strike price before expiration. Buyers of puts are BEARISH (expect stock to fall).',
          'Strike price (exercise price): The fixed price at which the option can be exercised.',
          'Expiration date: The last day the option can be exercised. Standard equity options expire on the third Friday of the expiration month.',
          'Premium: The price paid by the buyer to the seller (writer) for the option. This is the maximum loss for the buyer.',
          'Underlying: The stock (or index) on which the option is based. Each contract represents 100 shares.',
          'Writer (seller): The party who sells (writes) the option and receives the premium. Obligated to perform if the buyer exercises.'
        ]},
        { type: 'heading', level: 3, text: 'Calls vs. Puts — All Four Basic Positions' },
        { type: 'comparison', comparisons: [
          { label: 'Buy a Call (Long Call)', description: 'Pay premium. Bullish. Profit if stock rises above strike + premium. Maximum loss = premium paid. Maximum gain = unlimited (stock can rise forever). Exercise: buy 100 shares at strike price when market is higher.' },
          { label: 'Sell a Call (Short / Write a Call)', description: 'Receive premium. Bearish or neutral. Profit if stock stays below strike price (option expires worthless, keep premium). Maximum gain = premium received. Maximum loss = unlimited (if uncovered/naked). If covered (own the stock), max loss is limited.' },
          { label: 'Buy a Put (Long Put)', description: 'Pay premium. Bearish. Profit if stock falls below strike - premium. Maximum loss = premium paid. Maximum gain = substantial (stock falls to zero). Exercise: sell 100 shares at strike price when market is lower.' },
          { label: 'Sell a Put (Short / Write a Put)', description: 'Receive premium. Bullish or neutral. Profit if stock stays above strike price. Maximum gain = premium received. Maximum loss = substantial (if stock falls to zero, must buy at strike price).' }
        ]},
        { type: 'callout', variant: 'key', text: 'QUICK REFERENCE:\nBuy Call → Bullish → Unlimited gain, limited loss (premium)\nSell Call → Bearish → Limited gain (premium), unlimited loss\nBuy Put → Bearish → Large gain potential, limited loss (premium)\nSell Put → Bullish → Limited gain (premium), large loss potential\n\nBuyers: Limited loss (premium), Unlimited or large gain potential\nSellers (Writers): Limited gain (premium), Unlimited or large loss potential' },
        { type: 'heading', level: 3, text: 'In-the-Money, At-the-Money, Out-of-the-Money' },
        { type: 'comparison', comparisons: [
          { label: 'In-the-Money (ITM)', description: 'For CALLS: stock price > strike price (it would be profitable to exercise). For PUTS: stock price < strike price. ITM options have intrinsic value. They are more expensive (higher premium).' },
          { label: 'At-the-Money (ATM)', description: 'Stock price = strike price. No intrinsic value — only time value. Maximum time value typically at ATM.' },
          { label: 'Out-of-the-Money (OTM)', description: 'For CALLS: stock price < strike price (would be unprofitable to exercise). For PUTS: stock price > strike price. OTM options have NO intrinsic value — only time value. Less expensive than ITM.' }
        ]},
        { type: 'heading', level: 3, text: 'Option Premium Components' },
        { type: 'list', items: [
          'Intrinsic value: The amount by which an option is in-the-money. Cannot be negative (minimum = 0). Call intrinsic value = stock price - strike price (if positive). Put intrinsic value = strike price - stock price (if positive).',
          'Time value (extrinsic value): The remaining portion of the premium beyond intrinsic value. Represents the probability of becoming more valuable before expiration. Time value DECAYS (decreases) as expiration approaches — this is called "time decay" or "theta".',
          'Premium = Intrinsic Value + Time Value',
          'Options are a wasting asset — if stock doesn\'t move, time value erodes to zero at expiration.',
          'Factors increasing option premium: Higher stock price (calls), lower stock price (puts), higher volatility, more time to expiration, lower interest rates (puts).'
        ]},
        { type: 'heading', level: 3, text: 'Covered vs. Uncovered (Naked) Options' },
        { type: 'comparison', comparisons: [
          { label: 'Covered Call', description: 'Selling a call while OWNING the underlying stock. If the call is exercised, you deliver the stock you own. Risk is limited — worst case: stock is called away at the strike price. Income strategy: receive premium, give up upside above strike. Very common.' },
          { label: 'Naked (Uncovered) Call', description: 'Selling a call WITHOUT owning the underlying stock. If the call is exercised, you must buy stock at market price to deliver. UNLIMITED risk potential — stock can rise to any level. Only appropriate for sophisticated investors. Requires margin approval.' },
          { label: 'Covered Put', description: 'Selling a put while being short the underlying stock. Hedged position.' },
          { label: 'Cash-Secured Put', description: 'Selling a put while holding enough cash to buy the stock if exercised. Conservative income strategy.' }
        ]},
        { type: 'heading', level: 3, text: 'American vs. European Style Options' },
        { type: 'comparison', comparisons: [
          { label: 'American Style', description: 'Can be exercised at ANY TIME before expiration. All individual equity options traded on U.S. exchanges are American-style. More flexibility for the buyer → slightly more valuable.' },
          { label: 'European Style', description: 'Can ONLY be exercised on the expiration date — not before. Most index options (like SPX options on the S&P 500) are European-style. Cash-settled only.' }
        ]},
        { type: 'heading', level: 3, text: 'The Options Clearing Corporation (OCC)' },
        { type: 'paragraph', text: 'The OCC is the world\'s largest equity derivatives clearing organization. It acts as the counterparty to EVERY listed options trade — guaranteeing performance. When you buy an option, you are technically buying from the OCC, not from the specific seller. This eliminates counterparty risk.' },
        { type: 'list', items: [
          'Options Disclosure Document (ODD): "Characteristics and Risks of Standardized Options." Must be delivered to all options customers before or at account opening. FINRA requirement.',
          'Options agreement: Customer must sign within 15 days of account approval.',
          'Index options: Based on stock indexes (S&P 500, NASDAQ 100). Cash settled — no actual shares delivered upon exercise.',
          'Equity options: Based on individual stocks. Can be cash or physically settled (shares actually delivered).'
        ]},
        { type: 'heading', level: 3, text: 'Common Options Strategies' },
        { type: 'list', items: [
          'Protective put (married put): Own stock + buy put. Limits downside loss. Like buying insurance on your stock. Most bearish hedge.',
          'Covered call: Own stock + sell call. Generates income (premium). Limits upside. Most common options strategy.',
          'Long straddle: Buy call + buy put with same strike/expiration. Profit if stock moves significantly in EITHER direction. Strategy for high volatility.',
          'Long strangle: Buy OTM call + buy OTM put. Cheaper than straddle. Need larger move to profit.'
        ]},
        { type: 'callout', variant: 'exam', text: 'EXAM SHORTCUT for breakeven:\nLong Call breakeven: Strike price + premium paid\nLong Put breakeven: Strike price - premium paid\n\nExample: Buy $50 call for $3 premium. Breakeven = $50 + $3 = $53. Stock must rise above $53 for profit.\nBuy $50 put for $3 premium. Breakeven = $50 - $3 = $47. Stock must fall below $47 for profit.' }
      ]
    },
    {
      id: 'packaged-products',
      title: 'Mutual Funds, ETFs, UITs & Variable Products',
      duration: '30 min',
      content: [
        { type: 'heading', level: 2, text: 'Packaged Products: Pooled Investment Vehicles' },
        { type: 'paragraph', text: 'Packaged products pool money from many investors into a single portfolio. They offer built-in diversification, professional management, and simplified investing. But they come with fees, restrictions, and regulatory requirements that the SIE tests extensively.' },
        { type: 'heading', level: 3, text: 'Open-End Mutual Funds' },
        { type: 'paragraph', text: 'Open-end funds continuously issue and redeem shares at NAV (Net Asset Value). They are regulated under the Investment Company Act of 1940. This is what most people refer to as "mutual funds."' },
        { type: 'list', items: [
          'NAV calculation: (Total Assets - Total Liabilities) ÷ Total Shares Outstanding. Calculated ONCE per day, after market close (4:00 PM ET).',
          'Forward pricing: All buy and sell orders received AFTER the 4 PM cutoff get the NEXT day\'s NAV. Orders before 4 PM get that day\'s closing NAV.',
          'No secondary market: You can only buy from and sell to the fund company itself — not through an exchange.',
          'Redemption in kind: Funds can fulfill large redemption requests with securities instead of cash.',
          'Unlimited shares: The fund can issue as many shares as needed to meet investor demand.'
        ]},
        { type: 'heading', level: 3, text: 'Mutual Fund Sales Charges (Loads)' },
        { type: 'comparison', comparisons: [
          { label: 'Class A Shares (Front-End Load)', description: 'Pay the sales charge UPFRONT when purchasing. Reduces the amount invested. Maximum front-end load is 8.5% under FINRA rules. LOWER annual expenses (12b-1 fees). Best for long-term investors who invest large amounts (get breakpoint discounts). Example: Invest $10,000 with 5% load → $9,500 actually invested.' },
          { label: 'Class B Shares (Back-End Load / CDSC)', description: 'No front-end charge. Pay a Contingent Deferred Sales Charge (CDSC) if you REDEEM within a certain period (typically 6 years). CDSC declines each year. Higher annual 12b-1 fees than Class A. Often convert to Class A after 8 years. Less common today.' },
          { label: 'Class C Shares (Level Load)', description: 'No front-end load. Small or no CDSC (usually 1% for first year only). HIGHEST ongoing 12b-1 fees (typically 1%/year). Never convert to Class A. Best for short-to-medium term investors. Most expensive over long term due to ongoing fees.' },
          { label: 'No-Load Funds', description: 'No sales charges. Purchased directly from the fund company or through certain platforms. May still have 12b-1 fees up to 0.25%. Do not confuse "no sales charge" with "no expenses" — all funds have operating expenses.' }
        ]},
        { type: 'list', items: [
          'Breakpoints: Quantity discounts on Class A front-end loads for large purchases. Example: 5% load on purchases <$25K, 4% on $25K-$50K, etc.',
          'Rights of Accumulation (ROA): Existing account value counts toward breakpoint thresholds. If you already have $20K in the fund, a new $10K investment may qualify for the $25K+ breakpoint.',
          'Letter of Intent (LOI): Investor signs letter promising to reach a breakpoint level within 13 months, immediately receiving the discounted load. If investor doesn\'t fulfill the LOI, they pay the full load.',
          '12b-1 fee: Annual fee charged by mutual funds to cover distribution and marketing expenses. Deducted from fund assets. If 12b-1 fee > 0.25%/year, fund cannot call itself "no-load."'
        ]},
        { type: 'heading', level: 3, text: 'Closed-End Funds' },
        { type: 'paragraph', text: 'Closed-end funds issue a FIXED number of shares in an IPO and then STOP issuing new shares. After the IPO, shares trade on a stock exchange like regular stocks — through the secondary market, at whatever price the market will bear.' },
        { type: 'list', items: [
          'Fixed number of shares: Cannot be redeemed from the fund.',
          'Traded on exchanges: Price determined by supply and demand, NOT by NAV.',
          'Can trade at PREMIUM or DISCOUNT to NAV: If shares trade above NAV, they are at a premium. If below NAV, at a discount. Many closed-end funds trade at a discount to NAV — an opportunity for value-oriented investors.',
          'No forward pricing: Trade at real-time market prices, not end-of-day NAV.',
          'Can use leverage: Closed-end funds can borrow money or issue preferred shares to leverage the portfolio — increases both potential return AND risk.'
        ]},
        { type: 'heading', level: 3, text: 'Exchange-Traded Funds (ETFs) & Exchange-Traded Notes (ETNs)' },
        { type: 'list', items: [
          'ETFs: Trade on exchanges throughout the day at market prices — like stocks. Created and redeemed through an in-kind process by Authorized Participants (large institutions). Price generally stays close to NAV.',
          'Can be bought on margin and sold short (unlike mutual funds).',
          'Generally passive/index-tracking: Lower expense ratios than actively managed funds.',
          'Active ETFs also exist and have grown significantly.',
          'ETNs (Exchange-Traded Notes): Debt instruments (bonds) issued by a bank, designed to track an index or market. NOT backed by a portfolio of securities — just a promise from the bank. Have credit risk (if the bank fails, ETN may be worthless). Different from ETFs despite similar name.'
        ]},
        { type: 'heading', level: 3, text: 'Unit Investment Trusts (UITs)' },
        { type: 'list', items: [
          'Fixed, unmanaged portfolio of securities (stocks or bonds). No active management.',
          'Fixed number of units sold to investors. Units can be redeemed from the trust at NAV.',
          'Fixed termination date: The trust liquidates on a set date and distributes proceeds.',
          'Regulated under the Investment Company Act of 1940.',
          'No management fee (no active manager). Lower costs than managed funds.',
          'Examples: S&P 500 SPDR (SPY) was originally a UIT structure.'
        ]},
        { type: 'heading', level: 3, text: 'Variable Annuities & Variable Life Insurance' },
        { type: 'paragraph', text: 'Variable annuities are insurance contracts where the return is tied to the performance of underlying investment subaccounts (similar to mutual funds). Because the value varies with securities performance, they are considered SECURITIES and require a securities license to sell.' },
        { type: 'list', items: [
          'Require BOTH an insurance license AND a securities license (Series 6 or 7) to sell.',
          'Subaccounts: The investment options inside a variable annuity — similar to mutual funds. Performance varies with market.',
          'Guaranteed minimum death benefit: If you die, beneficiaries receive at least what you put in (or account value, whichever is greater).',
          'Tax deferral: Earnings grow tax-deferred until withdrawal. No annual contribution limits (unlike IRAs).',
          'Surrender charges: If you withdraw money early (within the surrender period, typically 5-8 years), pay a charge that declines over time.',
          'Annuitization: Converting the account value into a stream of guaranteed income payments.',
          'Most suitable for investors who have ALREADY maxed out tax-advantaged accounts (IRA, 401k). High fees make them less attractive if tax deferral is available elsewhere.',
          'Variable life insurance: Combines life insurance death benefit with variable investment subaccounts. Also requires securities license.'
        ]},
        { type: 'callout', variant: 'exam', text: 'OPEN END vs CLOSED END vs ETF:\nOpen-end: Always buy/sell at NAV from fund. No exchange trading. Unlimited shares.\nClosed-end: Fixed shares. Exchange-traded. Can trade at premium/discount to NAV.\nETF: Exchange-traded all day. Price ≈ NAV (via arbitrage). Usually passive/index. Can be shorted/margined.' }
      ]
    },
    {
      id: 'alternative-investments',
      title: 'Alternative Investments: DPPs, REITs, 529s & Hedge Funds',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Alternative Investments: Beyond Stocks and Bonds' },
        { type: 'heading', level: 3, text: 'Direct Participation Programs (DPPs)' },
        { type: 'paragraph', text: 'DPPs allow investors to participate directly in the cash flows, income, and tax benefits of an underlying business — most commonly structured as limited partnerships. They\'re called "direct" because there is no intermediate corporate entity — income and losses flow directly to investors.' },
        { type: 'list', items: [
          'Structure: Usually a limited partnership. General partner (GP) manages the program. Limited partners (LPs) invest but do not participate in management.',
          'Limited liability: LPs cannot lose more than their investment. GPs have unlimited liability.',
          'Pass-through taxation: Income, losses, deductions, and tax credits pass through directly to investors\' personal tax returns — no double taxation. This is the key tax advantage.',
          'Generally illiquid: Not listed on exchanges. No ready secondary market. Investors must be prepared to hold long-term.',
          'Types: Real estate partnerships, oil and gas programs, equipment leasing, agricultural programs.',
          'Risks: Illiquidity, management risk (GP makes all decisions), tax law change risk, economic risk specific to the program.',
          'Usually sold to accredited investors. May require long holding periods (7-10+ years).',
          'High minimum investments, high sales commissions (historically).'
        ]},
        { type: 'heading', level: 3, text: 'Real Estate Investment Trusts (REITs)' },
        { type: 'paragraph', text: 'REITs own or finance income-producing real estate and allow investors to access real estate returns without directly owning properties. By law, REITs must distribute at least 90% of taxable income as dividends — making them high-income vehicles.' },
        { type: 'list', items: [
          'Must distribute 90%+ of taxable income: Creates a high-dividend yield. Most REITs pay out 90-100% of income.',
          'No double taxation: REITs are not taxed at the corporate level on distributed income (the 90% they pay out). Investors pay ordinary income tax on dividends received.',
          'Qualify as pass-through entities under the Tax Cuts and Jobs Act (2017): 20% deduction on REIT dividends for individual investors.',
          'Listed REITs: Trade on stock exchanges like regular stocks. Highly liquid. Price moves with both real estate fundamentals AND stock market sentiment.',
          'Non-traded REITs: Registered with SEC but NOT listed on an exchange. Illiquid. Often have high sales commissions (up to 10-15%). Value often not transparent.',
          'Private REITs: Not registered with SEC. Only for institutional and accredited investors. Least transparency.',
          'Equity REITs: Own and operate income-producing properties (office, retail, residential, industrial). Earn rental income. Largest category.',
          'Mortgage REITs (mREITs): Lend money to real estate owners or purchase mortgage-backed securities. Earn interest income. More sensitive to interest rate changes.',
          'Hybrid REITs: Combine equity and mortgage REIT strategies.',
          'Interest rate sensitivity: Rising rates are typically BAD for REITs (higher financing costs, competing with bonds for income investors).'
        ]},
        { type: 'heading', level: 3, text: '529 Plans — Education Savings' },
        { type: 'paragraph', text: '529 plans are tax-advantaged savings accounts for education expenses. They are considered "municipal fund securities" because they are sponsored by states. Selling 529 plans requires securities registration (Series 6 or 7).' },
        { type: 'list', items: [
          'Two types: Savings plans (contributions invested in mutual fund-like options) and prepaid tuition plans (lock in today\'s tuition rates at participating schools).',
          'Owner vs. beneficiary: The account owner (usually a parent) controls the account. The beneficiary is the student who will use the funds. The owner can change the beneficiary to another family member.',
          'Tax treatment: Contributions made with AFTER-TAX dollars (no federal deduction). Growth and qualified withdrawals are completely tax-FREE at the federal level.',
          'State tax deduction: Many states offer a state income tax deduction for contributions to that state\'s 529 plan.',
          'Qualified education expenses: Tuition, fees, books, room and board at eligible institutions. Up to $10,000/year for K-12 private school tuition.',
          'Non-qualified withdrawals: Subject to income tax AND a 10% penalty on earnings.',
          'No income limits: Anyone can contribute regardless of income.',
          'High contribution limits: No annual limit (unlike IRAs), but subject to gift tax rules above $18,000/year per donor (2024).',
          'Impact on financial aid: Counted as parental asset (less impact) rather than student asset (more impact).'
        ]},
        { type: 'heading', level: 3, text: 'ABLE Accounts' },
        { type: 'list', items: [
          'Tax-advantaged savings accounts for people with disabilities (onset before age 26).',
          'Similar tax treatment to 529s: After-tax contributions, tax-free growth and qualified withdrawals.',
          'Qualified disability expenses: Education, housing, transportation, employment, health, assistive technology.',
          'Annual contribution limit: $18,000/year (2024). Can contribute additional amounts from employment income.',
          'First $100,000 in ABLE accounts exempt from SSI asset counting.'
        ]},
        { type: 'heading', level: 3, text: 'Hedge Funds' },
        { type: 'list', items: [
          'Private investment partnerships for sophisticated/wealthy investors. Lightly regulated (exempt from Investment Company Act).',
          'Only accredited investors (and often only institutional investors or very high net worth individuals).',
          'High minimum investments: Often $1 million+, sometimes $25 million+ for institutional funds.',
          'Lock-up periods: Investors often cannot redeem for 1-2 years after investing.',
          'Performance fees: "2 and 20" is the traditional structure — 2% annual management fee + 20% of profits.',
          'Strategies: Long/short equity, global macro, event-driven (merger arbitrage), quantitative/systematic, distressed debt.',
          'Use of leverage, short selling, derivatives — can amplify both gains and losses.',
          'High-water mark: Performance fees only charged on NEW profits above previous peak. Prevents charging fees for recovering losses.',
          'Much less regulated than mutual funds: Less disclosure, fewer restrictions on strategies.'
        ]},
        { type: 'callout', variant: 'exam', text: 'DPP vs REIT comparison:\nDPP: Pass-through tax, illiquid, no exchange listing, limited partnership structure, direct asset ownership.\nREIT: Exchange-traded (usually), liquid, 90% distribution requirement, no pass-through of losses, corporate structure with special tax treatment.' }
      ]
    },
    {
      id: 'investment-risks',
      title: 'Investment Risks: All 10 Types & How to Mitigate Them',
      duration: '25 min',
      content: [
        { type: 'heading', level: 2, text: 'Investment Risks: The Complete Guide' },
        { type: 'paragraph', text: 'Every investment carries risk. The SIE exam tests whether you can identify the specific type of risk affecting an investor in a given scenario. There are 10 distinct risk types you must know — and you must understand which products are most affected by each.' },
        { type: 'heading', level: 3, text: 'The 10 Investment Risk Types' },
        { type: 'comparison', comparisons: [
          { label: '1. Capital Risk', description: 'The risk of losing your ENTIRE investment. Worst-case scenario. Highest for: common stocks (especially small-cap/penny stocks), speculative bonds, options (buyers can lose 100% of premium), DPPs, hedge funds. Lowest for: FDIC-insured deposits, U.S. Treasury securities.' },
          { label: '2. Credit/Default Risk', description: 'The risk that the ISSUER will fail to make interest or principal payments. Measured by credit ratings (Moody\'s, S&P, Fitch). Highest for: junk/high-yield bonds, unsecured corporate debt, emerging market bonds. Zero for: U.S. Treasury securities (U.S. has never defaulted). Mitigation: diversify across issuers, buy higher-rated bonds.' },
          { label: '3. Interest Rate Risk', description: 'The risk that rising interest rates will REDUCE the value of existing fixed-rate securities. Most severe for long-term, fixed-rate bonds. Zero coupon bonds have the HIGHEST interest rate risk. Floating-rate bonds have very LOW interest rate risk. Mitigation: shorter maturities, floating rate bonds, bond laddering, interest rate hedges.' },
          { label: '4. Reinvestment Risk', description: 'The risk that future coupon payments (or returned principal) will have to be reinvested at LOWER rates than the original investment. The flip side of interest rate risk. When rates FALL, callable bonds get called and coupons must be reinvested at lower rates. Zero-coupon bonds have ZERO reinvestment risk (no coupons to reinvest). Highest for: callable bonds, CMOs/MBS.' },
          { label: '5. Inflation/Purchasing Power Risk', description: 'The risk that inflation will erode the REAL (inflation-adjusted) value of returns. Most severe for: fixed-income securities, cash. Example: A 3% bond is LOSING real value if inflation runs at 4%. TIPS are specifically designed to address this risk. Equities historically outperform inflation over long periods.' },
          { label: '6. Liquidity Risk', description: 'The risk of being unable to sell an investment quickly at a FAIR price without a significant price concession. Highest for: real estate, DPPs, private equity, thinly traded small-cap stocks, non-traded REITs, high-yield bonds. Lowest for: large-cap stocks, U.S. Treasury securities. Bid-ask spread widens for illiquid securities.' },
          { label: '7. Market Risk (Systematic Risk)', description: 'The risk of broad market declines affecting ALL securities. Cannot be diversified away. Examples: 2008 financial crisis, COVID-19 crash — all stocks fell regardless of individual company quality. Measured by BETA (>1 = more volatile than market; <1 = less volatile). Mitigation: asset allocation across different asset classes, hedging with derivatives (puts, short positions).' },
          { label: '8. Non-Systematic Risk (Unsystematic / Business Risk)', description: 'Risk specific to a single company or industry. CAN be eliminated through diversification. Examples: a CEO scandal, a product recall, a lawsuit, an industry downturn. This is why diversification works — bad news at one company doesn\'t affect the whole portfolio. Academics say most non-systematic risk is eliminated with 20-30 well-chosen stocks.' },
          { label: '9. Currency/Exchange Rate Risk', description: 'The risk that changes in currency exchange rates will affect the value of FOREIGN investments. If you own foreign stocks and the foreign currency WEAKENS against the dollar, your investment loses value even if the stock price didn\'t change. Example: Own a Japanese stock. Yen falls 10% vs. dollar. Dollar value of investment falls 10% even if stock is unchanged. Highest for: international equity funds, foreign bonds, ADRs, multinational companies.' },
          { label: '10. Political/Regulatory Risk', description: 'The risk that government actions — changes in laws, regulations, tax treatment, or political instability — will negatively affect investments. Examples: new regulations increasing costs for an industry, tax law changes affecting municipal bond tax exemption, government nationalization of industries, sanctions. Highest for: emerging market investments, specific regulated industries (utilities, healthcare, energy).' }
        ]},
        { type: 'heading', level: 3, text: 'Prepayment Risk (Key for Mortgage Securities)' },
        { type: 'paragraph', text: 'Prepayment risk is specific to mortgage-backed securities and other amortizing debt. When homeowners pay off their mortgages early (refinancing when rates fall), the MBS investors receive their principal sooner than expected. They then must reinvest at the now-lower rates. This is essentially a combination of reinvestment risk and call risk, and it\'s the primary risk for MBS investors.' },
        { type: 'heading', level: 3, text: 'Beta: Measuring Market Risk' },
        { type: 'list', items: [
          'Beta measures a security\'s volatility RELATIVE to the overall market.',
          'Beta = 1.0: Moves exactly with the market.',
          'Beta > 1.0: More volatile than the market. Example: Beta of 1.5 means if market rises 10%, stock expected to rise 15%. More risk, more potential reward.',
          'Beta < 1.0: Less volatile than market. Example: Beta of 0.5 means if market falls 10%, stock expected to fall 5%. Less risk, less reward.',
          'Beta = 0: No correlation with market. Cash has beta of 0.',
          'Negative beta: Moves inversely to market. Gold often has low or negative beta. Useful for hedging.'
        ]},
        { type: 'heading', level: 3, text: 'Risk Mitigation Strategies' },
        { type: 'list', items: [
          'Diversification: Holding many different securities reduces non-systematic (company-specific) risk. Does NOT eliminate market risk.',
          'Asset allocation: Spreading investments across different asset classes (stocks, bonds, real estate, cash) reduces overall portfolio risk.',
          'Hedging: Using options, futures, or other derivatives to offset potential losses. Example: buying put options on stocks you own.',
          'Portfolio rebalancing: Periodically buying/selling to maintain target asset allocation as market moves change proportions.',
          'Dollar-cost averaging: Investing fixed amounts at regular intervals reduces timing risk.',
          'Bond laddering: Buying bonds with staggered maturities reduces reinvestment risk and interest rate risk.'
        ]},
        { type: 'callout', variant: 'exam', text: 'WHICH RISK FOR WHICH PRODUCT (exam favorite):\n• Bonds: Interest rate risk, reinvestment risk, credit risk, inflation risk\n• MBS/CMOs: Prepayment risk, extension risk, reinvestment risk\n• Foreign investments: Currency risk, political risk\n• Small-cap stocks: Business/non-systematic risk, liquidity risk, capital risk\n• All equities: Market risk (systematic), capital risk\n• Fixed income: Inflation/purchasing power risk' }
      ]
    }
  ],
  quiz: [
    { id: 'pr-q1', question: 'In corporate liquidation, who is paid in what order?', options: ['Common stockholders first, then preferred stockholders, then creditors', 'Secured creditors first, then unsecured creditors, then preferred stockholders, then common stockholders', 'Preferred stockholders first because they have priority, then common, then creditors', 'All creditors and stockholders share equally in remaining assets'], correctIndex: 1, explanation: 'The absolute priority rule in liquidation: (1) Secured creditors (collateralized claims), (2) Unsecured creditors/bondholders, (3) Preferred stockholders, (4) Common stockholders. Common shareholders are last and often receive nothing in bankruptcy.' },
    { id: 'pr-q2', question: 'Cumulative preferred stock means that:', options: ['The dividend rate increases cumulatively each year', 'Missed dividends must accumulate and be paid in full before any common dividend can be paid', 'Preferred shareholders accumulate voting rights over time', 'Dividends are paid cumulatively to both preferred and common shareholders simultaneously'], correctIndex: 1, explanation: 'Cumulative preferred means that any missed preferred dividend payments accumulate ("in arrears"). ALL accumulated preferred dividends — past and present — must be paid in full before the company can pay any common stock dividend. This is the most protective type of preferred stock for investors.' },
    { id: 'pr-q3', question: 'A corporation announces a 3-for-1 stock split. An investor holds 300 shares purchased at $150 per share. After the split, the investor holds:', options: ['100 shares at $450 per share', '300 shares at $150 per share (no change)', '900 shares at $50 per share', '300 shares at $50 per share with a special dividend'], correctIndex: 2, explanation: '3-for-1 split means each share becomes 3 shares. 300 shares × 3 = 900 shares. Price is divided by 3: $150 ÷ 3 = $50. Total value unchanged: 900 × $50 = $45,000 = original 300 × $150. Cost basis per share also adjusts to $50.' },
    { id: 'pr-q4', question: 'When interest rates rise, which bond experiences the GREATEST decrease in price?', options: ['A 3-month Treasury bill', 'A 2-year Treasury note with a 5% coupon', 'A 30-year zero-coupon Treasury bond', 'A 10-year corporate bond with a 6% coupon'], correctIndex: 2, explanation: 'Zero-coupon bonds have the HIGHEST duration (all cash flow is received at maturity — no interim coupon payments to reduce the average time of cash flows). Longer duration = greater price sensitivity to interest rate changes. The 30-year zero-coupon bond has the longest duration of these choices, making it most affected by rate increases.' },
    { id: 'pr-q5', question: 'Municipal bond interest is exempt from:', options: ['All federal and state taxes in all circumstances', 'Federal income tax, and may be exempt from state/local tax if issued in your home state', 'Capital gains taxes when the bond is sold at a profit', 'Both regular income tax and alternative minimum tax (AMT) for all municipal bonds'], correctIndex: 1, explanation: 'Municipal bond interest is EXEMPT from federal income tax. It is also exempt from state and local taxes IF you live in the state that issued the bond. If you buy an out-of-state muni, you typically pay your home state\'s taxes on the interest. Capital gains are always taxable. Some private activity bonds are subject to AMT.' },
    { id: 'pr-q6', question: 'An investor buys a call option with a $60 strike price and pays a $4 premium. What is the breakeven point for this investor?', options: ['$56', '$60', '$64', '$4'], correctIndex: 2, explanation: 'Long call breakeven = Strike price + Premium paid = $60 + $4 = $64. The investor must have the stock rise above $64 before expiration to profit. If the stock is exactly at $64, the $4 gain from exercising the call exactly offsets the $4 premium paid. Below $64, the investor loses money (up to the maximum loss of $4 per share, or $400 per contract).' },
    { id: 'pr-q7', question: 'Which of the following correctly describes a covered call strategy?', options: ['Buying a call option while simultaneously buying put options for protection', 'Selling a call option while owning the underlying stock', 'Buying both a call and put option on the same stock with the same expiration', 'Selling a call option without owning the underlying stock'], correctIndex: 1, explanation: 'A covered call means SELLING a call option while OWNING the underlying shares (the short call is "covered" by the long stock position). If the call is exercised, the investor simply delivers the shares they own. The strategy generates income (from the premium) but limits upside above the strike price. The opposite — selling a call without owning the stock — is a naked/uncovered call.' },
    { id: 'pr-q8', question: 'An open-end mutual fund receives a buy order at 3:30 PM. The fund\'s NAV is $25.00 at 4:00 PM and $25.50 the following day. What price does the investor pay?', options: ['$25.00 (that day\'s closing NAV)', '$25.50 (the next day\'s NAV)', 'A negotiated price between $25.00 and $25.50', 'The opening market price of $25.00 plus a $0.50 adjustment'], correctIndex: 0, explanation: 'Open-end mutual funds use "forward pricing" — all orders received BEFORE the 4 PM cutoff receive that day\'s closing NAV. The order was received at 3:30 PM (before 4 PM), so the investor pays $25.00. If the order had come in AFTER 4 PM, it would have received the next day\'s NAV of $25.50.' },
    { id: 'pr-q9', question: 'A Direct Participation Program (DPP) structured as a limited partnership offers which PRIMARY tax advantage?', options: ['Tax-free growth and withdrawals like a Roth IRA', 'Income and losses pass directly to investors\' personal tax returns, avoiding double taxation', 'The corporation pays taxes and investors pay no additional tax on dividends', 'All capital gains within the DPP are tax-exempt for the life of the program'], correctIndex: 1, explanation: 'The key tax advantage of DPPs (limited partnerships) is pass-through taxation. Income, losses, deductions, and credits flow directly to investors\' personal tax returns. There is no corporate-level taxation — only one level of tax. This is especially valuable when the DPP generates paper losses (depreciation, depletion) that investors can deduct.' },
    { id: 'pr-q10', question: 'Which risk CANNOT be eliminated through diversification?', options: ['Business (unsystematic) risk', 'Industry-specific risk', 'Market (systematic) risk', 'Company-specific risk'], correctIndex: 2, explanation: 'Market risk (also called systematic or non-diversifiable risk) affects the entire market and cannot be eliminated through diversification. It includes risks like recessions, wars, interest rate changes, and market crashes that affect all securities. Non-systematic risks (company-specific, industry-specific, business risk) CAN be largely eliminated through diversification.' },
    { id: 'pr-q11', question: 'Ginnie Mae (GNMA) mortgage-backed securities differ from Fannie Mae (FNMA) securities primarily because:', options: ['Ginnie Mae securities are subject to state and local taxes while Fannie Mae securities are not', 'Ginnie Mae securities are directly guaranteed by the U.S. government; Fannie Mae securities are not', 'Fannie Mae securities pay higher yields due to lower credit risk', 'Ginnie Mae only issues zero-coupon securities while Fannie Mae issues coupon-bearing MBS'], correctIndex: 1, explanation: 'Ginnie Mae (GNMA) is a government agency (part of HUD) and its MBS are backed by the FULL FAITH AND CREDIT of the U.S. government — the highest credit quality. Fannie Mae and Freddie Mac are government-sponsored enterprises (GSEs), meaning they are privately owned with implied (but not explicit) government backing. This makes Ginnie Mae the safest agency security.' },
    { id: 'pr-q12', question: 'An investor sells a put option with a $45 strike price and receives a $3 premium. The investor\'s maximum GAIN from this position is:', options: ['Unlimited', '$45 (the stock price)', '$42 (strike price minus premium)', '$3 (the premium received)'], correctIndex: 3, explanation: 'When you SELL (write) a put option, you receive the premium upfront. The maximum gain is the premium received ($3 per share, or $300 per contract) — this occurs if the put expires worthless (stock stays above $45). You cannot earn more than the premium on a short option position. Maximum loss occurs if the stock falls to zero: $45 strike - $3 premium = $42 loss per share.' }
  ]
}
