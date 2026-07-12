'use client'

import { use } from 'react'
import Link from 'next/link'
import { getCourseBySlug } from '@/lib/courses'
import { getProgress } from '@/lib/progress'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const course = getCourseBySlug(courseId)
  const [completedModules, setCompletedModules] = useState<string[]>([])
  const [quizScores, setQuizScores] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const progress = getProgress()
    const cp = progress[courseId]
    if (cp) {
      setCompletedModules(cp.completedModules)
      setQuizScores(cp.quizScores)
    }
  }, [courseId])

  if (!course) return notFound()

  const isGold = course.category === 'certification'
  const accentColor = isGold ? '#d4af37' : '#60a5fa'
  const totalCompleted = completedModules.length
  const progressPct = Math.round((totalCompleted / course.modules.length) * 100)

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
        <Link href="/courses" style={{ color: '#4a6a90', textDecoration: 'none' }}>Courses</Link>
        <span style={{ color: '#4a6a90' }}>›</span>
        <span style={{ color: '#7a9cc0' }}>{course.title}</span>
      </div>

      {/* Course Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(10, 29, 54, 0.8) 0%, rgba(7, 20, 40, 0.8) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        borderRadius: '16px',
        padding: '40px',
        marginBottom: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '40px',
        alignItems: 'start',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '2.5rem' }}>{course.icon}</span>
            <span className="badge" style={{
              background: isGold ? 'rgba(212, 175, 55, 0.1)' : 'rgba(59, 130, 246, 0.1)',
              color: accentColor,
              border: `1px solid ${isGold ? 'rgba(212,175,55,0.3)' : 'rgba(59,130,246,0.3)'}`,
            }}>
              {course.level} · {course.category === 'certification' ? 'Certification Prep' : 'Fundamentals'}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
            {course.title}
          </h1>
          <p style={{ color: accentColor, fontWeight: '600', fontSize: '1rem', margin: '0 0 16px' }}>{course.subtitle}</p>
          <p style={{ color: '#7a9cc0', lineHeight: '1.7', margin: '0 0 24px', maxWidth: '600px' }}>{course.description}</p>

          {/* Topics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {course.topics.map(topic => (
              <span key={topic} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '0.78rem',
                color: '#7a9cc0',
              }}>{topic}</span>
            ))}
          </div>
        </div>

        {/* Stats Panel */}
        <div style={{
          background: 'rgba(4, 13, 28, 0.5)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          minWidth: '200px',
        }}>
          {[
            { label: 'Modules', value: course.modules.length },
            { label: 'Est. Hours', value: `${course.estimatedHours}h` },
            { label: 'Pass Score', value: '80%' },
            { label: 'Completed', value: `${totalCompleted}/${course.modules.length}` },
          ].map(({ label, value }) => (
            <div key={label} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', color: '#4a6a90', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: '700' }}>{value}</div>
            </div>
          ))}

          {/* Progress */}
          {totalCompleted > 0 && (
            <div style={{ marginTop: '8px' }}>
              <div style={{ fontSize: '0.72rem', color: '#4a6a90', marginBottom: '6px' }}>PROGRESS</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <div style={{ fontSize: '0.75rem', color: accentColor, marginTop: '6px', textAlign: 'right' }}>{progressPct}%</div>
            </div>
          )}
        </div>
      </div>

      {/* Modules List */}
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px' }}>Course Modules</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {course.modules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id)
          const isUnlocked = index === 0 || completedModules.includes(course.modules[index - 1].id)
          const score = quizScores[module.id]
          const lessonsCount = module.lessons.length
          const questionsCount = module.quiz.length

          return (
            <div key={module.id} style={{
              background: 'var(--bg-card)',
              border: `1px solid ${isCompleted ? 'rgba(34, 197, 94, 0.3)' : isUnlocked ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255,255,255,0.05)'}`,
              borderRadius: '12px',
              padding: '28px',
              opacity: isUnlocked ? 1 : 0.5,
              transition: 'all 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
                  {/* Module Number / Status */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: isCompleted
                      ? 'rgba(34, 197, 94, 0.15)'
                      : isUnlocked
                        ? 'rgba(212, 175, 55, 0.1)'
                        : 'rgba(255,255,255,0.04)',
                    border: `2px solid ${isCompleted ? '#22c55e' : isUnlocked ? '#d4af37' : 'rgba(255,255,255,0.1)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: isCompleted ? '#22c55e' : isUnlocked ? '#d4af37' : '#4a6a90',
                    flexShrink: 0,
                  }}>
                    {isCompleted ? '✓' : index + 1}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0 }}>{module.title}</h3>
                      {isCompleted && (
                        <span className="badge" style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          color: '#22c55e',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                        }}>
                          {score}% · Passed
                        </span>
                      )}
                      {!isUnlocked && (
                        <span className="badge" style={{
                          background: 'rgba(74, 106, 144, 0.1)',
                          color: '#4a6a90',
                        }}>🔒 Locked</span>
                      )}
                    </div>
                    <p style={{ color: '#7a9cc0', fontSize: '0.88rem', margin: '0 0 12px', lineHeight: '1.6' }}>
                      {module.description}
                    </p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#4a6a90' }}>
                      <span>📖 {lessonsCount} {lessonsCount === 1 ? 'lesson' : 'lessons'}</span>
                      <span>✏️ {questionsCount} quiz questions</span>
                      <span>🎯 {module.requiredScore}% to pass</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {isUnlocked && (
                  <Link href={`/courses/${course.slug}/${module.id}`} style={{ textDecoration: 'none', flexShrink: 0 }}>
                    <button className={isCompleted ? 'btn-secondary' : 'btn-primary'} style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                      {isCompleted ? 'Review' : 'Start →'}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Start CTA */}
      {totalCompleted === 0 && (
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href={`/courses/${course.slug}/${course.modules[0].id}`}>
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Begin Module 1 →
            </button>
          </Link>
        </div>
      )}

      {/* Completion */}
      {totalCompleted === course.modules.length && (
        <div style={{
          marginTop: '40px',
          background: 'rgba(34, 197, 94, 0.06)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏆</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 10px', color: '#22c55e' }}>Course Complete!</h3>
          <p style={{ color: '#7a9cc0', margin: '0 0 24px' }}>
            You&apos;ve mastered all {course.modules.length} modules in {course.title}. That&apos;s not luck — that&apos;s proof.
          </p>
          <Link href="/courses">
            <button className="btn-primary">Explore More Courses →</button>
          </Link>
        </div>
      )}
    </div>
  )
}
