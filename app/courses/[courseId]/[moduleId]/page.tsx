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

  const isGold = course.category === 'certification'
  const accentColor = isGold ? '#d4af37' : '#60a5fa'
  const nextModule = course.modules[moduleIndex + 1]
  const isPracticeExam = module.lessons.length === 0

  // Practice exam module — show a single-page jump to quiz
  if (isPracticeExam) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#4a6a90', flexWrap: 'wrap' }}>
          <Link href="/courses" style={{ color: '#4a6a90', textDecoration: 'none' }}>Courses</Link>
          <span>›</span>
          <Link href={`/courses/${courseId}`} style={{ color: '#4a6a90', textDecoration: 'none' }}>{course.title}</Link>
          <span>›</span>
          <span style={{ color: '#7a9cc0' }}>{module.title}</span>
        </div>

        <div className="card" style={{ padding: '48px', textAlign: 'center' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '18px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '2rem',
          }}>
            📋
          </div>
          <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '800', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            {module.title}
          </h1>
          <p style={{ color: '#7a9cc0', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 8px', lineHeight: '1.65' }}>
            {module.description}
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', margin: '32px 0' }}>
            {[
              { label: 'Questions', value: module.quiz.length },
              { label: 'Time Limit', value: '105 min' },
              { label: 'Pass Score', value: `${module.requiredScore}%` },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#d4af37' }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: '#4a6a90', marginTop: '4px', fontWeight: '500' }}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#4a6a90', fontSize: '0.82rem', lineHeight: '1.6', maxWidth: '440px', margin: '0 auto 28px' }}>
            This exam simulates the real SIE. 75 questions across all four domains, proportioned to match the actual exam. You can navigate between questions before submitting.
          </p>
          <Link href={`/courses/${courseId}/${moduleId}/quiz`} style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '13px 32px' }}>
              Begin Exam →
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const lesson = module.lessons[activeLesson]

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

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '28px', alignItems: 'start' }}>
        {/* Sidebar */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          borderRadius: '12px',
          padding: '20px',
          position: 'sticky',
          top: '84px',
        }}>
          <div style={{ marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize: '0.68rem', color: '#4a6a90', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 5px', fontWeight: '600' }}>Module {moduleIndex + 1}</p>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', margin: 0, lineHeight: '1.4', color: '#e8f0fe' }}>{module.title}</h3>
          </div>

          {/* Lessons */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '0.68rem', color: '#4a6a90', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px', fontWeight: '600' }}>Lessons</p>
            {module.lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActiveLesson(i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: activeLesson === i ? 'rgba(212, 175, 55, 0.07)' : 'transparent',
                  border: `1px solid ${activeLesson === i ? 'rgba(212, 175, 55, 0.22)' : 'transparent'}`,
                  borderRadius: '8px',
                  padding: '9px 11px',
                  cursor: 'pointer',
                  marginBottom: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: 'inherit',
                  transition: 'all 0.12s',
                }}
              >
                <span style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '6px',
                  background: activeLesson === i ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeLesson === i ? accentColor : 'rgba(255,255,255,0.08)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  fontWeight: '800',
                  color: activeLesson === i ? accentColor : '#4a6a90',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: activeLesson === i ? '600' : '400', color: activeLesson === i ? '#e8f0fe' : '#7a9cc0', lineHeight: '1.3', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {l.title}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#4a6a90', marginTop: '2px' }}>{l.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Quiz CTA */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '8px',
            padding: '14px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.75rem', color: '#7a9cc0', margin: '0 0 10px' }}>
              Ready to prove it?
            </p>
            <Link href={`/courses/${courseId}/${moduleId}/quiz`} style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '9px', fontSize: '0.82rem' }}>
                Take Quiz →
              </button>
            </Link>
            <p style={{ fontSize: '0.67rem', color: '#4a6a90', margin: '7px 0 0' }}>
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
            padding: '24px 28px',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '0.72rem', color: accentColor, fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 7px' }}>
                  Lesson {activeLesson + 1} of {module.lessons.length}
                </p>
                <h1 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.65rem)', fontWeight: '800', margin: '0 0 6px', letterSpacing: '-0.015em', color: '#e8f0fe' }}>
                  {lesson.title}
                </h1>
                <p style={{ color: '#4a6a90', fontSize: '0.78rem', margin: 0 }}>⏱ {lesson.duration} read</p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {activeLesson > 0 && (
                  <button
                    className="btn-secondary"
                    style={{ padding: '7px 14px', fontSize: '0.8rem' }}
                    onClick={() => setActiveLesson(activeLesson - 1)}
                  >
                    ← Prev
                  </button>
                )}
                {activeLesson < module.lessons.length - 1 && (
                  <button
                    className="btn-primary"
                    style={{ padding: '7px 14px', fontSize: '0.8rem' }}
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
            border: '1px solid rgba(212, 175, 55, 0.07)',
            borderRadius: '12px',
            padding: '32px 36px',
            marginBottom: '20px',
          }}>
            <LessonContent blocks={lesson.content} />
          </div>

          {/* Bottom Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <Link href={`/courses/${courseId}`} style={{ textDecoration: 'none' }}>
              <button className="btn-secondary" style={{ fontSize: '0.85rem' }}>← Back to Course</button>
            </Link>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {activeLesson < module.lessons.length - 1 ? (
                <button className="btn-primary" style={{ fontSize: '0.85rem' }} onClick={() => setActiveLesson(activeLesson + 1)}>
                  Next Lesson →
                </button>
              ) : (
                <Link href={`/courses/${courseId}/${moduleId}/quiz`} style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ fontSize: '0.85rem' }}>
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
