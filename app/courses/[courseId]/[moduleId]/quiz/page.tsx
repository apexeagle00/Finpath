'use client'

import { use } from 'react'
import Link from 'next/link'
import { getCourseBySlug } from '@/lib/courses'
import { notFound } from 'next/navigation'
import QuizEngine from '@/components/QuizEngine'

export default function QuizPage({ params }: { params: Promise<{ courseId: string; moduleId: string }> }) {
  const { courseId, moduleId } = use(params)
  const course = getCourseBySlug(courseId)
  if (!course) return notFound()

  const moduleIndex = course.modules.findIndex(m => m.id === moduleId)
  if (moduleIndex === -1) return notFound()

  const module = course.modules[moduleIndex]
  const nextModule = course.modules[moduleIndex + 1]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', flexWrap: 'wrap' }}>
        <Link href="/courses" style={{ color: '#4a6a90', textDecoration: 'none' }}>Courses</Link>
        <span style={{ color: '#4a6a90' }}>›</span>
        <Link href={`/courses/${courseId}`} style={{ color: '#4a6a90', textDecoration: 'none' }}>{course.title}</Link>
        <span style={{ color: '#4a6a90' }}>›</span>
        <Link href={`/courses/${courseId}/${moduleId}`} style={{ color: '#4a6a90', textDecoration: 'none' }}>{module.title}</Link>
        <span style={{ color: '#4a6a90' }}>›</span>
        <span style={{ color: '#7a9cc0' }}>Quiz</span>
      </div>

      {/* Quiz Card */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        borderRadius: '16px',
        padding: '40px',
      }}>
        <QuizEngine
          questions={module.quiz}
          requiredScore={module.requiredScore}
          courseSlug={courseId}
          moduleId={moduleId}
          nextModuleId={nextModule?.id}
          courseTitle={course.title}
          moduleTitle={module.title}
        />
      </div>
    </div>
  )
}
