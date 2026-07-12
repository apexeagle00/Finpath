export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'table' | 'divider' | 'comparison'
  level?: 2 | 3 | 4
  text?: string
  items?: string[]
  variant?: 'info' | 'warning' | 'tip' | 'exam' | 'key'
  headers?: string[]
  rows?: string[][]
  comparisons?: { label: string; description: string }[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  domain?: string
}

export interface Lesson {
  id: string
  title: string
  duration: string
  content: ContentBlock[]
}

export interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  quiz: QuizQuestion[]
  requiredScore: number
}

export interface Course {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  category: 'certification' | 'fundamentals' | 'advanced'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  modules: Module[]
  estimatedHours: number
  topics: string[]
  color: string
  icon: string
}

export interface UserProgress {
  [courseSlug: string]: {
    completedModules: string[]
    quizScores: { [moduleId: string]: number }
  }
}
