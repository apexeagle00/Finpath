import { Course } from '../types'

export const finance101Course: Course = {
  id: 'finance101',
  slug: 'finance-fundamentals',
  title: 'Finance Fundamentals',
  subtitle: 'Core concepts every finance professional must know',
  description: 'Build an unshakeable foundation in finance. From time value of money to reading financial statements to valuation — the concepts that separate serious finance students from the rest.',
  category: 'fundamentals',
  level: 'Beginner',
  estimatedHours: 15,
  color: '#3b82f6',
  icon: '💼',
  topics: ['Time Value of Money', 'Financial Statements', 'Valuation', 'Risk & Return', 'Capital Structure', 'DCF Analysis'],
  modules: [
    {
      id: 'time-value-money',
      title: 'Time Value of Money',
      description: 'The most fundamental concept in all of finance. Master present value, future value, and why a dollar today is worth more than a dollar tomorrow.',
      requiredScore: 80,
      lessons: [
        {
          id: 'tvm-basics',
          title: 'Present Value & Future Value',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'Time Value of Money'
            },
            {
              type: 'paragraph',
              text: 'The time value of money (TVM) is the most foundational concept in finance. The core idea: a dollar today is worth MORE than a dollar in the future. Why? Because money today can be invested to earn returns.'
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'THREE reasons a dollar today is worth more than a future dollar: (1) Inflation erodes purchasing power, (2) Present dollars can be invested to earn returns, (3) Future cash flows carry uncertainty and risk.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Future Value (FV)'
            },
            {
              type: 'paragraph',
              text: 'Future value tells you what a sum of money today will be worth at some point in the future, assuming a given rate of return (interest rate).'
            },
            {
              type: 'callout',
              variant: 'info',
              text: 'Formula: FV = PV × (1 + r)^n\nWhere: PV = present value, r = interest rate per period, n = number of periods\n\nExample: $1,000 invested at 8% for 5 years → FV = $1,000 × (1.08)^5 = $1,469.33'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Present Value (PV)'
            },
            {
              type: 'paragraph',
              text: 'Present value is the reverse — it asks: what is a future sum of money worth TODAY? We "discount" the future value back to the present using a discount rate.'
            },
            {
              type: 'callout',
              variant: 'info',
              text: 'Formula: PV = FV / (1 + r)^n\n\nExample: You will receive $10,000 in 3 years. Discount rate is 6%.\nPV = $10,000 / (1.06)^3 = $8,396.19\nThat future $10,000 is worth only $8,396 in today\'s dollars.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Compounding & Discounting'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Compounding (Growing Forward)', description: 'Applying a growth rate to a present value to find future value. The longer the time period and higher the rate, the more dramatic the compounding effect ("compound interest is the 8th wonder of the world").' },
                { label: 'Discounting (Working Backward)', description: 'Applying a discount rate to a future value to find present value. Used in valuation to determine what future cash flows are worth today.' }
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'The Rule of 72'
            },
            {
              type: 'paragraph',
              text: 'The Rule of 72 is a quick mental math shortcut: divide 72 by the annual interest rate to estimate how many years it takes to double your money.'
            },
            {
              type: 'callout',
              variant: 'tip',
              text: 'Rule of 72: Years to double = 72 / Interest Rate\n\nExamples:\n• At 6%: 72/6 = 12 years to double\n• At 8%: 72/8 = 9 years to double\n• At 12%: 72/12 = 6 years to double'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Annuities'
            },
            {
              type: 'paragraph',
              text: 'An annuity is a series of equal cash flows occurring at regular intervals. They are everywhere in finance — mortgage payments, bond coupon payments, retirement income, lease payments.'
            },
            {
              type: 'comparison',
              comparisons: [
                { label: 'Ordinary Annuity', description: 'Payments occur at the END of each period. This is the most common type. Example: mortgage payments due at end of month.' },
                { label: 'Annuity Due', description: 'Payments occur at the BEGINNING of each period. Example: lease payments due at start of month. Worth slightly more than ordinary annuity (payment received sooner).' },
                { label: 'Perpetuity', description: 'An annuity that goes on forever. PV = Payment / Discount Rate. Example: preferred stock paying a fixed dividend forever.' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'tvm-q1',
          question: 'You invest $5,000 today at an annual rate of 10% for 3 years. What is the approximate future value?',
          options: ['$5,500', '$6,050', '$6,655', '$7,000'],
          correctIndex: 2,
          explanation: 'FV = PV × (1 + r)^n = $5,000 × (1.10)^3 = $5,000 × 1.331 = $6,655. Notice how compounding adds $1,655 above simple interest ($1,500), illustrating the power of compound returns.'
        },
        {
          id: 'tvm-q2',
          question: 'Using the Rule of 72, how long does it take to double an investment earning 9% annually?',
          options: ['6 years', '8 years', '9 years', '12 years'],
          correctIndex: 1,
          explanation: 'Rule of 72: Years to double = 72 / interest rate = 72 / 9 = 8 years. This is a quick approximation used frequently in finance to mentally calculate doubling times.'
        },
        {
          id: 'tvm-q3',
          question: 'You will receive $50,000 in 10 years. Using a discount rate of 7%, what is the present value?',
          options: ['$43,000', '$35,000', '$25,417', '$21,000'],
          correctIndex: 2,
          explanation: 'PV = FV / (1 + r)^n = $50,000 / (1.07)^10 = $50,000 / 1.9672 ≈ $25,417. That future $50,000 is worth only about $25,417 in today\'s dollars — demonstrating the significant impact of discounting over long periods.'
        },
        {
          id: 'tvm-q4',
          question: 'Which of the following is the BEST explanation for why a dollar today is worth more than a dollar received one year from now?',
          options: [
            'Inflation always decreases the value of money over time',
            'Government regulations require a premium for deferred payments',
            'A dollar today can be invested to earn returns, making it worth more in the future',
            'Future dollars are less certain than present dollars due to credit risk'
          ],
          correctIndex: 2,
          explanation: 'The core TVM concept: present dollars have the opportunity to be invested and earn returns. Both inflation and uncertainty also play roles, but the investment opportunity (opportunity cost) is the fundamental reason. A dollar today invested at any positive rate becomes more than a dollar in the future.'
        },
        {
          id: 'tvm-q5',
          question: 'A preferred stock pays a fixed dividend of $4 per year forever. If the required rate of return is 8%, what is the stock\'s present value?',
          options: ['$32', '$40', '$50', '$80'],
          correctIndex: 2,
          explanation: 'A fixed payment forever is a perpetuity. PV of perpetuity = Payment / Discount Rate = $4 / 0.08 = $50. This formula is used to value preferred stocks and other instruments paying fixed amounts in perpetuity.'
        }
      ]
    },
    {
      id: 'financial-statements',
      title: 'Reading Financial Statements',
      description: 'Learn to read and analyze the three core financial statements: Income Statement, Balance Sheet, and Cash Flow Statement.',
      requiredScore: 80,
      lessons: [
        {
          id: 'income-statement',
          title: 'The Income Statement',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'The Income Statement'
            },
            {
              type: 'paragraph',
              text: 'The income statement (also called Profit & Loss or P&L) shows a company\'s revenues, expenses, and profit over a specific time period (quarter or year). It answers: "How much did the company earn?"'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Income Statement Structure (Top to Bottom)'
            },
            {
              type: 'list',
              items: [
                'Revenue (Sales): total money earned from selling products/services',
                'Cost of Goods Sold (COGS): direct costs of producing what was sold',
                'Gross Profit = Revenue - COGS',
                'Operating Expenses (SG&A, R&D): overhead costs not directly tied to production',
                'EBIT (Operating Income) = Gross Profit - Operating Expenses',
                'Interest Expense: cost of debt financing',
                'EBT (Earnings Before Tax) = EBIT - Interest Expense',
                'Income Tax Expense',
                'Net Income = EBT - Taxes (the "bottom line")'
              ]
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization. Widely used in valuation because it approximates operating cash flow and allows comparison across companies with different capital structures.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Key Metrics from the Income Statement'
            },
            {
              type: 'list',
              items: [
                'Gross Margin = Gross Profit / Revenue — shows production efficiency',
                'Operating Margin = EBIT / Revenue — shows operational efficiency',
                'Net Margin = Net Income / Revenue — overall profitability',
                'EPS (Earnings Per Share) = Net Income / Shares Outstanding — investor metric'
              ]
            }
          ]
        },
        {
          id: 'balance-sheet',
          title: 'The Balance Sheet',
          duration: '20 min',
          content: [
            {
              type: 'heading',
              level: 2,
              text: 'The Balance Sheet'
            },
            {
              type: 'paragraph',
              text: 'The balance sheet is a snapshot of what a company OWNS (assets) and OWES (liabilities + equity) at a single point in time. The fundamental accounting equation always holds: Assets = Liabilities + Shareholders\' Equity.'
            },
            {
              type: 'heading',
              level: 3,
              text: 'Assets'
            },
            {
              type: 'list',
              items: [
                'Current Assets (converted to cash within 1 year): Cash, Accounts Receivable, Inventory, Prepaid Expenses',
                'Long-Term Assets: Property, Plant & Equipment (PP&E), Intangible Assets (patents, goodwill), Long-term investments'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Liabilities'
            },
            {
              type: 'list',
              items: [
                'Current Liabilities (due within 1 year): Accounts Payable, Short-term debt, Accrued expenses',
                'Long-Term Liabilities: Long-term debt (bonds, bank loans), Deferred tax liabilities'
              ]
            },
            {
              type: 'heading',
              level: 3,
              text: 'Shareholders\' Equity'
            },
            {
              type: 'paragraph',
              text: 'Equity is the residual — what\'s left after subtracting liabilities from assets. It includes common stock (par value), additional paid-in capital (money raised above par), and retained earnings (accumulated profits not paid as dividends).'
            },
            {
              type: 'callout',
              variant: 'key',
              text: 'KEY RATIOS from the Balance Sheet:\n• Current Ratio = Current Assets / Current Liabilities (>1 = can pay short-term debts)\n• Debt-to-Equity = Total Debt / Equity (measures leverage)\n• Book Value Per Share = Equity / Shares Outstanding'
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'fs-q1',
          question: 'A company has Revenue of $500M, COGS of $300M, and Operating Expenses of $100M. What is the Operating Income (EBIT)?',
          options: ['$200M', '$100M', '$400M', '$150M'],
          correctIndex: 1,
          explanation: 'Gross Profit = Revenue - COGS = $500M - $300M = $200M. Operating Income (EBIT) = Gross Profit - Operating Expenses = $200M - $100M = $100M. Operating income reflects profitability from core operations before interest and taxes.'
        },
        {
          id: 'fs-q2',
          question: 'The accounting equation (Assets = Liabilities + Equity) means that:',
          options: [
            'A company\'s assets must always be greater than its liabilities',
            'Every asset is financed either by debt (liabilities) or owner investment (equity)',
            'Equity is always larger than liabilities',
            'A company with no debt has no liabilities'
          ],
          correctIndex: 1,
          explanation: 'The accounting equation means every asset must be funded by either borrowing (liabilities) or owner investment (equity). It always balances by definition. A company can have liabilities even with no debt (e.g., accounts payable, accrued expenses).'
        },
        {
          id: 'fs-q3',
          question: 'Which of the following would appear on the Balance Sheet (not the Income Statement)?',
          options: ['Revenue', 'Net Income', 'Accounts Receivable', 'COGS'],
          correctIndex: 2,
          explanation: 'Accounts Receivable is a current asset that appears on the Balance Sheet — it represents money owed to the company for goods/services already delivered. Revenue, Net Income, and COGS are all Income Statement items showing results over a time period.'
        },
        {
          id: 'fs-q4',
          question: 'EBITDA is preferred over Net Income for comparing companies because:',
          options: [
            'EBITDA is always larger than net income',
            'It removes the effects of financing, tax, and accounting decisions, enabling cleaner operational comparison',
            'EBITDA is required by GAAP and more reliable',
            'It includes all cash flows including capital expenditures'
          ],
          correctIndex: 1,
          explanation: 'EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) strips out the effects of a company\'s capital structure (interest), tax jurisdiction, and accounting policies (D&A). This allows analysts to compare the operational performance of companies with different debt levels, tax rates, and asset bases.'
        },
        {
          id: 'fs-q5',
          question: 'A company\'s current ratio is 0.8. This means:',
          options: [
            'The company is highly profitable',
            'The company\'s current liabilities exceed its current assets — a potential liquidity concern',
            'The company has 80 cents of debt for every dollar of equity',
            'The company\'s stock is trading at 80% of book value'
          ],
          correctIndex: 1,
          explanation: 'Current Ratio = Current Assets / Current Liabilities. A ratio below 1.0 means current liabilities exceed current assets, suggesting the company may struggle to meet short-term obligations. This is a liquidity concern, though context matters — some industries operate fine with ratios below 1.'
        }
      ]
    }
  ]
}
