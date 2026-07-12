import { Course } from '../types'
import { capitalMarketsModule } from './sie-module1'
import { productsRisksModule } from './sie-module2'
import { tradingAccountsModule } from './sie-module3'
import { regulatoryFrameworkModule } from './sie-module4'

export const sieCourse: Course = {
  id: 'sie',
  slug: 'sie-exam-prep',
  title: 'SIE Exam Prep',
  subtitle: 'Securities Industry Essentials — Complete Certification Course',
  description: 'The most comprehensive SIE exam prep available. Every concept FINRA tests, organized by domain, written at textbook depth. Mastery-gated quizzes ensure you actually know the material — not just recognize it. Includes a full 75-question timed practice exam.',
  category: 'certification',
  level: 'Beginner',
  estimatedHours: 30,
  color: '#d4af37',
  icon: '📈',
  topics: [
    'Capital Markets', 'Market Structure', 'Regulatory Bodies', 'Economic Factors',
    'Securities Offerings', 'Equity Securities', 'Fixed Income', 'Options',
    'Mutual Funds & ETFs', 'Alternative Investments', 'Investment Risks',
    'Order Types', 'Account Types', 'Margin', 'Retirement Accounts',
    'AML & Compliance', 'Prohibited Activities', 'FINRA Rules', 'Registration & Licensing'
  ],
  modules: [
    capitalMarketsModule,
    productsRisksModule,
    tradingAccountsModule,
    regulatoryFrameworkModule
  ]
}
