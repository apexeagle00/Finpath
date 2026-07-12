import { UserProgress } from './types'

const STORAGE_KEY = 'finpath_progress'

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveModuleCompletion(courseSlug: string, moduleId: string, score: number): void {
  if (typeof window === 'undefined') return
  const progress = getProgress()
  if (!progress[courseSlug]) {
    progress[courseSlug] = { completedModules: [], quizScores: {} }
  }
  if (!progress[courseSlug].completedModules.includes(moduleId)) {
    progress[courseSlug].completedModules.push(moduleId)
  }
  progress[courseSlug].quizScores[moduleId] = score
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function isModuleUnlocked(courseSlug: string, moduleIndex: number, moduleId: string): boolean {
  if (moduleIndex === 0) return true
  const progress = getProgress()
  const courseProgress = progress[courseSlug]
  if (!courseProgress) return false
  return courseProgress.completedModules.includes(moduleId)
}

export function getCourseProgress(courseSlug: string, totalModules: number): number {
  const progress = getProgress()
  const courseProgress = progress[courseSlug]
  if (!courseProgress) return 0
  return Math.round((courseProgress.completedModules.length / totalModules) * 100)
}
