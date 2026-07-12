import { sieCourse } from './sie'
import { finance101Course } from './finance101'
import { Course } from '../types'

export const allCourses: Course[] = [sieCourse, finance101Course]

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find(c => c.slug === slug)
}

export function getModuleById(courseSlug: string, moduleId: string) {
  const course = getCourseBySlug(courseSlug)
  if (!course) return undefined
  return course.modules.find(m => m.id === moduleId)
}

export { sieCourse, finance101Course }
