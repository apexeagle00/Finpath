'use client'

import { useState } from 'react'
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
}

type QuizState = 'intro' | 'question' | 'explanation' | 'results'

export default function QuizEngine({
  questions,
  requiredScore,
  courseSlug,
  moduleId,
  nextModuleId,
  courseTitle,
  moduleTitle,
}: QuizEngineProps) {
  const [state, setState] = useState<QuizState>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [showRetry, setShowRetry] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isCorrect = selectedAnswer === currentQuestion?.correctIndex

  const correctCount = answers.filter((a, i) => a === questions[i].correctIndex).length
  const scorePercent = Math.round((correctCount / questions.length) * 100)
  const passed = scorePercent >= requiredScore

  function handleSelectAnswer(idx: number) {
    if (selectedAnswer !== null) return
    setSelectedAnswer(idx)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = idx
    setAnswers(newAnswers)
    setState('explanation')
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setState('question')
    } else {
      // Quiz complete
      const finalCorrect = answers.filter((a, i) => a === questions[i].correctIndex).length + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0)
      // recalculate with final answer already set
      const finalAnswers = [...answers]
      finalAnswers[currentIndex] = selectedAnswer
      const finalScore = Math.round((finalAnswers.filter((a, i) => a === questions[i].correctIndex).length / questions.length) * 100)
      if (finalScore >= requiredScore) {
        saveModuleCompletion(courseSlug, moduleId, finalScore)
      }
      setState('results')
    }
  }

  function handleRetry() {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setAnswers(new Array(questions.length).fill(null))
    setState('question')
    setShowRetry(false)
  }

  // Intro screen
  if (state === 'intro') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✏️</div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', margin: '0 0 12px' }}>Module Quiz</h2>
        <p style={{ color: '#7a9cc0', margin: '0 0 8px', fontSize: '1rem' }}>{moduleTitle}</p>
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
            { label: 'Attempts', value: 'Unlimited' },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#d4af37' }}>{value}</div>
              <div style={{ fontSize: '0.78rem', color: '#4a6a90' }}>{label}</div>
            </div>
          ))}
        </div>
        <p style={{ color: '#7a9cc0', maxWidth: '400px', margin: '0 auto 32px', fontSize: '0.9rem', lineHeight: '1.6' }}>
          Read each question carefully. After answering, you&apos;ll see an explanation before moving on. You need {requiredScore}% to pass and unlock the next module.
        </p>
        <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }} onClick={() => setState('question')}>
          Start Quiz →
        </button>
      </div>
    )
  }

  // Results screen
  if (state === 'results') {
    const finalAnswers = [...answers]
    const finalCorrect = finalAnswers.filter((a, i) => a === questions[i].correctIndex).length
    const finalScore = Math.round((finalCorrect / questions.length) * 100)
    const finalPassed = finalScore >= requiredScore

    if (finalPassed) {
      saveModuleCompletion(courseSlug, moduleId, finalScore)
    }

    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{finalPassed ? '🏆' : '📖'}</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px', color: finalPassed ? '#22c55e' : '#e8f0fe' }}>
          {finalPassed ? 'Module Passed!' : 'Not Quite Yet'}
        </h2>
        <p style={{ color: '#7a9cc0', margin: '0 0 32px' }}>
          {finalPassed
            ? `You scored ${finalScore}%. The next module is now unlocked.`
            : `You scored ${finalScore}%. You need ${requiredScore}% to pass. Review the material and try again.`
          }
        </p>

        {/* Score circle */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: finalPassed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          border: `3px solid ${finalPassed ? '#22c55e' : '#ef4444'}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
        }}>
          <span style={{ fontSize: '2rem', fontWeight: '800', color: finalPassed ? '#22c55e' : '#ef4444' }}>{finalScore}%</span>
          <span style={{ fontSize: '0.7rem', color: '#7a9cc0' }}>{finalCorrect}/{questions.length} correct</span>
        </div>

        {/* Question Review */}
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px' }}>Review</h3>
          {questions.map((q, i) => {
            const userAnswer = finalAnswers[i]
            const correct = userAnswer === q.correctIndex
            return (
              <div key={q.id} style={{
                padding: '16px',
                marginBottom: '10px',
                borderRadius: '10px',
                background: correct ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)',
                border: `1px solid ${correct ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', marginTop: '2px' }}>{correct ? '✅' : '❌'}</span>
                  <div>
                    <p style={{ margin: '0 0 6px', fontWeight: '600', fontSize: '0.9rem' }}>Q{i + 1}: {q.question}</p>
                    {!correct && userAnswer !== null && (
                      <p style={{ margin: '0 0 4px', fontSize: '0.82rem', color: '#ef4444' }}>
                        Your answer: {q.options[userAnswer]}
                      </p>
                    )}
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#22c55e' }}>
                      Correct: {q.options[q.correctIndex]}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {!finalPassed && (
            <>
              <Link href={`/courses/${courseSlug}/${moduleId}`}>
                <button className="btn-secondary">Review Lessons</button>
              </Link>
              <button className="btn-primary" onClick={handleRetry}>
                Try Again →
              </button>
            </>
          )}
          {finalPassed && (
            <>
              <Link href={`/courses/${courseSlug}`}>
                <button className="btn-secondary">Back to Course</button>
              </Link>
              {nextModuleId && (
                <Link href={`/courses/${courseSlug}/${nextModuleId}`}>
                  <button className="btn-primary">Next Module →</button>
                </Link>
              )}
              {!nextModuleId && (
                <Link href="/courses">
                  <button className="btn-primary">Explore More Courses →</button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    )
  }

  // Question / Explanation screens
  return (
    <div>
      {/* Progress */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: '#7a9cc0' }}>Question {currentIndex + 1} of {questions.length}</span>
          <span style={{ fontSize: '0.85rem', color: '#7a9cc0' }}>{moduleTitle}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div style={{
        background: 'rgba(7, 20, 40, 0.5)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        borderRadius: '12px',
        padding: '28px',
        marginBottom: '24px',
      }}>
        <p style={{ fontSize: '1.05rem', fontWeight: '600', margin: 0, lineHeight: '1.6', color: '#e8f0fe' }}>
          {currentQuestion.question}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {currentQuestion.options.map((option, idx) => {
          let bg = 'rgba(10, 29, 54, 0.5)'
          let border = 'rgba(255,255,255,0.08)'
          let textColor = '#e8f0fe'
          let cursor = 'pointer'

          if (selectedAnswer !== null) {
            cursor = 'default'
            if (idx === currentQuestion.correctIndex) {
              bg = 'rgba(34, 197, 94, 0.1)'
              border = '#22c55e'
              textColor = '#22c55e'
            } else if (idx === selectedAnswer && idx !== currentQuestion.correctIndex) {
              bg = 'rgba(239, 68, 68, 0.1)'
              border = '#ef4444'
              textColor = '#ef4444'
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectAnswer(idx)}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: '10px',
                padding: '16px 20px',
                textAlign: 'left',
                cursor,
                color: textColor,
                fontSize: '0.95rem',
                transition: 'all 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: `2px solid ${border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
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

      {/* Explanation */}
      {state === 'explanation' && (
        <div style={{
          background: isCorrect ? 'rgba(34, 197, 94, 0.06)' : 'rgba(239, 68, 68, 0.06)',
          border: `1px solid ${isCorrect ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.2rem' }}>{isCorrect ? '✅' : '❌'}</span>
            <span style={{ fontWeight: '700', color: isCorrect ? '#22c55e' : '#ef4444', fontSize: '0.9rem' }}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p style={{ margin: 0, color: '#b8cce0', lineHeight: '1.65', fontSize: '0.92rem' }}>
            <strong style={{ color: '#e8f0fe' }}>Explanation: </strong>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Next Button */}
      {state === 'explanation' && (
        <div style={{ textAlign: 'right' }}>
          <button className="btn-primary" onClick={handleNext} style={{ fontSize: '0.95rem' }}>
            {currentIndex < questions.length - 1 ? 'Next Question →' : 'See Results →'}
          </button>
        </div>
      )}
    </div>
  )
}
