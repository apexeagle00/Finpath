'use client'

import { useState, useEffect, useCallback } from 'react'
import { QuizQuestion } from '@/lib/types'
import { saveModuleCompletion } from '@/lib/progress'
import Link from 'next/link'

interface QuizEngineProps {
  questions: QuizQuestion[]
  requiredScore: number
  courseSlug: string
  moduleId: string
  nextModuleId?: string
  courseTitle: string
  moduleTitle: string
  timerSeconds?: number // if provided, show countdown timer
  allowNavigation?: boolean // if true, allow jumping between questions
}

type QuizState = 'intro' | 'question' | 'explanation' | 'results'

// Domain colors for practice exam results
const DOMAIN_COLORS: Record<string, string> = {
  'Capital Markets': '#3b82f6',
  'Products & Risks': '#d4af37',
  'Trading & Accounts': '#22c55e',
  'Regulatory Framework': '#a855f7',
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function QuizEngine({
  questions,
  requiredScore,
  courseSlug,
  moduleId,
  nextModuleId,
  courseTitle,
  moduleTitle,
  timerSeconds,
  allowNavigation = false,
}: QuizEngineProps) {
  const [state, setState] = useState<QuizState>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [timeLeft, setTimeLeft] = useState(timerSeconds ?? 0)
  const [timerActive, setTimerActive] = useState(false)

  const currentQuestion = questions[currentIndex]

  // Timer logic
  const submitFinal = useCallback(() => {
    setState('results')
    setTimerActive(false)
  }, [])

  useEffect(() => {
    if (!timerSeconds || !timerActive) return
    if (timeLeft <= 0) {
      submitFinal()
      return
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timeLeft, timerActive, timerSeconds, submitFinal])

  function startQuiz() {
    setTimerActive(true)
    setState('question')
  }

  function handleSelectAnswer(idx: number) {
    if (selectedAnswer !== null && !allowNavigation) return
    if (answers[currentIndex] !== null && !allowNavigation) return
    setSelectedAnswer(idx)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = idx
    setAnswers(newAnswers)
    if (!allowNavigation) {
      setState('explanation')
    } else {
      // In navigation mode, just record answer without showing explanation immediately
      const newAns = [...answers]
      newAns[currentIndex] = idx
      setAnswers(newAns)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(answers[currentIndex + 1])
      setState('question')
    } else {
      const finalAnswers = [...answers]
      finalAnswers[currentIndex] = selectedAnswer
      const finalScore = Math.round(
        (finalAnswers.filter((a, i) => a === questions[i].correctIndex).length / questions.length) * 100
      )
      if (finalScore >= requiredScore) {
        saveModuleCompletion(courseSlug, moduleId, finalScore)
      }
      setTimerActive(false)
      setState('results')
    }
  }

  function handleNavigateTo(idx: number) {
    setCurrentIndex(idx)
    setSelectedAnswer(answers[idx])
    setState('question')
  }

  function handleSubmitAll() {
    const finalScore = Math.round(
      (answers.filter((a, i) => a === questions[i].correctIndex).length / questions.length) * 100
    )
    if (finalScore >= requiredScore) {
      saveModuleCompletion(courseSlug, moduleId, finalScore)
    }
    setTimerActive(false)
    setState('results')
  }

  function handleRetry() {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setAnswers(new Array(questions.length).fill(null))
    setTimeLeft(timerSeconds ?? 0)
    setState('question')
    setTimerActive(true)
  }

  // ── Intro screen ──────────────────────────────────────────────────────────
  if (state === 'intro') {
    const isPractice = !!timerSeconds
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '1.5rem',
        }}>
          {isPractice ? '📋' : '✏️'}
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
          {isPractice ? 'Full Practice Exam' : 'Module Quiz'}
        </h2>
        <p style={{ color: '#7a9cc0', margin: '0 0 4px', fontSize: '0.9rem' }}>{moduleTitle}</p>

        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          margin: '28px 0',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Questions', value: questions.length },
            { label: 'Pass Score', value: `${requiredScore}%` },
            ...(timerSeconds ? [{ label: 'Time Limit', value: formatTime(timerSeconds) }] : [{ label: 'Attempts', value: 'Unlimited' }]),
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#d4af37' }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: '#4a6a90', marginTop: '4px', fontWeight: '500' }}>{label}</div>
            </div>
          ))}
        </div>

        {isPractice && (
          <div style={{
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '10px',
            padding: '16px 20px',
            maxWidth: '480px',
            margin: '0 auto 28px',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '0.82rem', color: '#d4af37', margin: '0 0 8px', fontWeight: '600' }}>
              Exam Distribution
            </p>
            {[
              { domain: 'Knowledge of Capital Markets', pct: '16%', q: 12 },
              { domain: 'Products & Their Risks', pct: '44%', q: 33 },
              { domain: 'Trading, Accounts & Prohibited', pct: '31%', q: 23 },
              { domain: 'Regulatory Framework', pct: '9%', q: 7 },
            ].map(({ domain, pct, q }) => (
              <div key={domain} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', color: '#7a9cc0' }}>{domain}</span>
                <span style={{ fontSize: '0.8rem', color: '#e8f0fe', fontWeight: '600' }}>{q} questions ({pct})</span>
              </div>
            ))}
          </div>
        )}

        <p style={{ color: '#7a9cc0', maxWidth: '400px', margin: '0 auto 28px', fontSize: '0.875rem', lineHeight: '1.65' }}>
          {isPractice
            ? 'This is a full simulation of the SIE exam. You can navigate between questions. The timer starts when you click Begin.'
            : `Read each question carefully. After answering, you'll see an explanation before moving on. You need ${requiredScore}% to pass and unlock the next module.`
          }
        </p>
        <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '13px 32px' }} onClick={startQuiz}>
          {isPractice ? 'Begin Exam →' : 'Start Quiz →'}
        </button>
      </div>
    )
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (state === 'results') {
    const finalAnswers = answers.map((a, i) =>
      i === currentIndex && selectedAnswer !== null ? selectedAnswer : a
    )
    const finalCorrect = finalAnswers.filter((a, i) => a === questions[i].correctIndex).length
    const finalScore = Math.round((finalCorrect / questions.length) * 100)
    const finalPassed = finalScore >= requiredScore
    const isPractice = !!timerSeconds

    if (finalPassed) {
      saveModuleCompletion(courseSlug, moduleId, finalScore)
    }

    // Domain breakdown for practice exam
    const domainStats: Record<string, { correct: number; total: number }> = {}
    if (isPractice) {
      questions.forEach((q, i) => {
        const domain = (q as any).domain ?? 'Other'
        if (!domainStats[domain]) domainStats[domain] = { correct: 0, total: 0 }
        domainStats[domain].total++
        if (finalAnswers[i] === q.correctIndex) domainStats[domain].correct++
      })
    }

    return (
      <div style={{ padding: '32px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: finalPassed ? 'rgba(34, 197, 94, 0.08)' : 'rgba(239, 68, 68, 0.08)',
            border: `2px solid ${finalPassed ? '#22c55e' : '#ef4444'}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: finalPassed ? '#22c55e' : '#ef4444' }}>{finalScore}%</span>
            <span style={{ fontSize: '0.65rem', color: '#7a9cc0', marginTop: '1px' }}>{finalCorrect}/{questions.length}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.01em', color: finalPassed ? '#22c55e' : '#e8f0fe' }}>
            {finalPassed ? (isPractice ? 'Exam Passed!' : 'Module Passed!') : 'Not Quite Yet'}
          </h2>
          <p style={{ color: '#7a9cc0', margin: 0, fontSize: '0.9rem' }}>
            {finalPassed
              ? isPractice
                ? `You scored ${finalScore}% — above the 70% passing threshold. You're ready.`
                : `You scored ${finalScore}%. The next module is now unlocked.`
              : `You scored ${finalScore}%. You need ${requiredScore}% to pass. Review and try again.`
            }
          </p>
        </div>

        {/* Domain breakdown for practice exam */}
        {isPractice && Object.keys(domainStats).length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7a9cc0', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>
              Score by Domain
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.entries(domainStats).map(([domain, { correct, total }]) => {
                const pct = Math.round((correct / total) * 100)
                const color = DOMAIN_COLORS[domain] ?? '#7a9cc0'
                return (
                  <div key={domain}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.82rem', color: '#b8cce0' }}>{domain}</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: '700', color }}>{pct}% ({correct}/{total})</span>
                    </div>
                    <div className="progress-bar">
                      <div style={{
                        height: '100%',
                        width: `${pct}%`,
                        background: color,
                        borderRadius: '999px',
                        transition: 'width 0.6s ease',
                        opacity: 0.85,
                      }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Question Review */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7a9cc0', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>
            Review
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {questions.map((q, i) => {
              const userAnswer = finalAnswers[i]
              const correct = userAnswer === q.correctIndex
              return (
                <div key={q.id} style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: correct ? 'rgba(34, 197, 94, 0.04)' : 'rgba(239, 68, 68, 0.04)',
                  border: `1px solid ${correct ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)'}`,
                }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: correct ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: correct ? '#22c55e' : '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: '800',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      {correct ? '✓' : '✗'}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 4px', fontWeight: '600', fontSize: '0.85rem', color: '#e8f0fe', lineHeight: '1.4' }}>
                        Q{i + 1}: {q.question}
                      </p>
                      {!correct && userAnswer !== null && (
                        <p style={{ margin: '0 0 3px', fontSize: '0.78rem', color: '#ef4444' }}>
                          Your answer: {q.options[userAnswer]}
                        </p>
                      )}
                      <p style={{ margin: 0, fontSize: '0.78rem', color: '#22c55e' }}>
                        Correct: {q.options[q.correctIndex]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {!finalPassed && (
            <>
              <Link href={`/courses/${courseSlug}/${moduleId}`} style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">Review Lessons</button>
              </Link>
              <button className="btn-primary" onClick={handleRetry}>
                Try Again →
              </button>
            </>
          )}
          {finalPassed && (
            <>
              <Link href={`/courses/${courseSlug}`} style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">Back to Course</button>
              </Link>
              {nextModuleId && (
                <Link href={`/courses/${courseSlug}/${nextModuleId}`} style={{ textDecoration: 'none' }}>
                  <button className="btn-primary">Next Module →</button>
                </Link>
              )}
              {!nextModuleId && (
                <Link href="/courses" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary">Explore More Courses →</button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    )
  }

  // ── Question / Explanation screens ────────────────────────────────────────
  const answeredCount = answers.filter(a => a !== null).length
  const isAnswered = answers[currentIndex] !== null
  const isCorrect = answers[currentIndex] === currentQuestion?.correctIndex
  const timerWarning = timerSeconds ? timeLeft < 300 : false // < 5 min warning

  return (
    <div>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', color: '#7a9cc0' }}>
            {currentIndex + 1} / {questions.length}
          </span>
          {allowNavigation && (
            <span style={{ fontSize: '0.78rem', color: '#4a6a90' }}>
              {answeredCount} answered
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {timerSeconds && timerActive && (
            <span className={`quiz-timer${timerWarning ? ' warning' : ''}`}>
              ⏱ {formatTime(timeLeft)}
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ marginBottom: '24px' }}>
        <div className="progress-fill" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
      </div>

      {/* Question navigator (practice exam only) */}
      {allowNavigation && (
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => handleNavigateTo(i)}
                className={`q-nav-pill${answers[i] !== null ? ' answered' : ''}${i === currentIndex ? ' current' : ''}`}
                title={`Question ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Domain label (practice exam) */}
      {(currentQuestion as any).domain && (
        <div style={{ marginBottom: '12px' }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: '600',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: DOMAIN_COLORS[(currentQuestion as any).domain] ?? '#7a9cc0',
          }}>
            {(currentQuestion as any).domain}
          </span>
        </div>
      )}

      {/* Question */}
      <div style={{
        background: 'rgba(7, 20, 40, 0.5)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        borderRadius: '12px',
        padding: '24px 26px',
        marginBottom: '20px',
      }}>
        <p style={{ fontSize: '1rem', fontWeight: '600', margin: 0, lineHeight: '1.65', color: '#e8f0fe' }}>
          {currentQuestion.question}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {currentQuestion.options.map((option, idx) => {
          const isSelected = answers[currentIndex] === idx || selectedAnswer === idx
          const showResult = isAnswered && !allowNavigation

          let bg = 'rgba(10, 29, 54, 0.4)'
          let border = 'rgba(255,255,255,0.07)'
          let textColor = '#e8f0fe'
          let cursor = allowNavigation ? 'pointer' : (isAnswered ? 'default' : 'pointer')

          if (showResult) {
            if (idx === currentQuestion.correctIndex) {
              bg = 'rgba(34, 197, 94, 0.08)'
              border = 'rgba(34, 197, 94, 0.5)'
              textColor = '#22c55e'
            } else if (isSelected && idx !== currentQuestion.correctIndex) {
              bg = 'rgba(239, 68, 68, 0.08)'
              border = 'rgba(239, 68, 68, 0.5)'
              textColor = '#ef4444'
            }
          } else if (allowNavigation && isSelected) {
            bg = 'rgba(212, 175, 55, 0.08)'
            border = 'rgba(212, 175, 55, 0.4)'
            textColor = '#d4af37'
          }

          return (
            <button
              key={idx}
              onClick={() => {
                if (allowNavigation || !isAnswered) {
                  handleSelectAnswer(idx)
                }
              }}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: '10px',
                padding: '14px 18px',
                textAlign: 'left',
                cursor,
                color: textColor,
                fontSize: '0.9rem',
                transition: 'all 0.12s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'inherit',
                width: '100%',
              }}
            >
              <span style={{
                width: '26px',
                height: '26px',
                borderRadius: '7px',
                border: `1.5px solid ${border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.72rem',
                fontWeight: '700',
                flexShrink: 0,
                color: textColor,
              }}>
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {/* Explanation (non-navigation mode) */}
      {state === 'explanation' && !allowNavigation && (
        <div style={{
          background: isCorrect ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)',
          border: `1px solid ${isCorrect ? 'rgba(34, 197, 94, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
          borderRadius: '12px',
          padding: '20px 22px',
          marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: '800',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: isCorrect ? '#22c55e' : '#ef4444',
            }}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </div>
          <p style={{ margin: 0, color: '#b8cce0', lineHeight: '1.65', fontSize: '0.875rem' }}>
            <strong style={{ color: '#e8f0fe' }}>Explanation: </strong>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        {allowNavigation ? (
          <>
            <button
              className="btn-secondary"
              style={{ fontSize: '0.875rem', padding: '10px 20px' }}
              onClick={() => currentIndex > 0 && handleNavigateTo(currentIndex - 1)}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            <div style={{ display: 'flex', gap: '10px' }}>
              {currentIndex < questions.length - 1 ? (
                <button
                  className="btn-primary"
                  style={{ fontSize: '0.875rem', padding: '10px 20px' }}
                  onClick={() => handleNavigateTo(currentIndex + 1)}
                >
                  Next →
                </button>
              ) : (
                <button
                  className="btn-primary"
                  style={{ fontSize: '0.875rem', padding: '10px 20px' }}
                  onClick={handleSubmitAll}
                >
                  Submit Exam →
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div />
            {state === 'explanation' && (
              <button className="btn-primary" onClick={handleNext} style={{ fontSize: '0.875rem', padding: '10px 22px' }}>
                {currentIndex < questions.length - 1 ? 'Next Question →' : 'See Results →'}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
