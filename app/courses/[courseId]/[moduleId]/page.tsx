'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { getCourseBySlug } from '@/lib/courses'
import { notFound } from 'next/navigation'
import LessonContent from '@/components/LessonContent'

export default function ModulePage({ params }: { params: Promise<{ courseId: string; moduleId: string }> }) {
  const { courseId, moduleId } = use(params)
  const course = getCourseBySlug(courseId)
  if (!course) return notFound()

  const moduleIndex = course.modules.findIndex(m => m.id === moduleId)
  if (moduleIndex === -1) return notFound()

  const module = course.modules[moduleIndex]
  const [activeLesson, setActiveLesson] = useState(0)

  const lesson = module.lessons[activeLesson]
  const isGold = course.category === 'certification'
  const accentColor = isGold ? '#d4af37' : '#60a5fa'
  const nextModule = course.modules[moduleIndex + 1]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#4a6a90', flexWrap: 'wrap' }}>
        <Link href="/courses" style={{ color: '#4a6a90', textDecoration: 'none' }}>Courses</Link>
        <span>›</span>
        <Link href={`/courses/${courseId}`} style={{ color: '#4a6a90', textDecoration: 'none' }}>{course.title}</Link>
        <span>›</span>
        <span style={{ color: '#7a9cc0' }}>{module.title}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }}>
        {/* Sidebar */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          borderRadius: '12px',
          padding: '20px',
          position: 'sticky',
          top: '84px',
        }}>
          <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '0.72rem', color: '#4a6a90', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 6px' }}>Module {moduleIndex + 1}</p>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, lineHeight: '1.4' }}>{module.title}</h3>
          </div>

          {/* Lessons */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '0.72rem', color: '#4a6a90', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>Lessons</p>
            {module.lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActiveLesson(i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: activeLesson === i ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
                  border: `1px solid ${activeLesson === i ? 'rgba(212, 175, 55, 0.25)' : 'transparent'}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: activeLesson === i ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeLesson === i ? accentColor : 'rgba(255,255,255,0.08)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: activeLesson === i ? accentColor : '#4a6a90',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: activeLesson === i ? '600' : '400', color: activeLesson === i ? '#e8f0fe' : '#7a9cc0', lineHeight: '1.3' }}>
                    {l.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#4a6a90', marginTop: '2px' }}>{l.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Quiz CTA */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.06)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '8px',
            padding: '14px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.78rem', color: '#7a9cc0', margin: '0 0 10px' }}>
              Ready to prove it?
            </p>
            <Link href={`/courses/${courseId}/${moduleId}/quiz`} style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>
                Take Quiz →
              </button>
            </Link>
            <p style={{ fontSize: '0.7rem', color: '#4a6a90', margin: '8px 0 0' }}>
              {module.quiz.length} questions · {module.requiredScore}% to pass
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* Lesson Header */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            borderRadius: '12px',
            padding: '28px 32px',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: accentColor, fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                  Lesson {activeLesson + 1} of {module.lessons.length}
                </p>
                <h1 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                  {lesson.title}
                </h1>
                <p style={{ color: '#4a6a90', fontSize: '0.82rem', margin: 0 }}>⏱ {lesson.duration} read</p>
              </div>

              {/* Lesson Navigation */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {activeLesson > 0 && (
                  <button
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                    onClick={() => setActiveLesson(activeLesson - 1)}
                  >
                    ← Prev
                  </button>
                )}
                {activeLesson < module.lessons.length - 1 && (
                  <button
                    className="btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                    onClick={() => setActiveLesson(activeLesson + 1)}
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(212, 175, 55, 0.08)',
            borderRadius: '12px',
            padding: '36px 40px',
            marginBottom: '24px',
          }}>
            <LessonContent blocks={lesson.content} />
          </div>

          {/* Bottom Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <Link href={`/courses/${courseId}`}>
              <button className="btn-secondary" style={{ fontSize: '0.88rem' }}>← Back to Course</button>
            </Link>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {activeLesson < module.lessons.length - 1 ? (
                <button className="btn-primary" style={{ fontSize: '0.88rem' }} onClick={() => setActiveLesson(activeLesson + 1)}>
                  Next Lesson →
                </button>
              ) : (
                <Link href={`/courses/${courseId}/${moduleId}/quiz`}>
                  <button className="btn-primary" style={{ fontSize: '0.88rem' }}>
                    Take the Quiz →
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
