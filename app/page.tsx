import Link from 'next/link'
import { allCourses } from '@/lib/courses'

export default function Home() {
  const features = [
    {
      icon: '◎',
      title: 'Mastery-Gated Learning',
      description: 'You cannot advance until you score 80%+ on the quiz. No skipping. No shortcuts. Real mastery only.',
    },
    {
      icon: '▤',
      title: 'Exam-Quality Content',
      description: 'Every lesson matches the depth and rigor of real finance exams. Written to produce results — not just familiarity.',
    },
    {
      icon: '◈',
      title: 'AI Tutor',
      description: 'Stuck on a concept? Your AI tutor explains anything in plain language inside every course.',
      comingSoon: true,
    },
    {
      icon: '◧',
      title: 'Mock Interviews',
      description: 'Simulate real finance interviews. AI-powered behavioral and technical questions with scored feedback.',
      comingSoon: true,
    },
  ]

  const stats = [
    { value: `${allCourses.length}`, label: 'Courses' },
    { value: `${allCourses.reduce((acc, c) => acc + c.modules.length, 0)}+`, label: 'Modules' },
    { value: '80%', label: 'Mastery Required' },
    { value: '100%', label: 'Free Access' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid background */}
        <div
          className="hero-pattern"
          style={{
            position: 'absolute',
            inset: 0,
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative',
          padding: '104px 24px 88px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          {/* Eyebrow */}
          <div style={{ marginBottom: '28px' }}>
            <span className="eyebrow">Finance Education. Reimagined.</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
            fontWeight: '900',
            lineHeight: '1.04',
            margin: '0 0 22px',
            letterSpacing: '-0.03em',
            color: '#e8f0fe',
          }}>
            Master Finance.<br />
            <span className="text-gold-gradient">Prove It.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: '#7a9cc0',
            maxWidth: '580px',
            margin: '0 auto 44px',
            lineHeight: '1.65',
            fontWeight: '400',
          }}>
            Mastery-gated courses built for serious students. You don&apos;t move forward until you actually know it. SIE prep, finance fundamentals, and more — all free.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '13px 30px' }}>
                Browse Courses →
              </button>
            </Link>
            <Link href="#how-it-works" style={{ textDecoration: 'none' }}>
              <button className="btn-secondary" style={{ fontSize: '0.95rem', padding: '13px 30px' }}>
                How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        borderTop: '1px solid rgba(212, 175, 55, 0.08)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
        padding: '36px 24px',
        background: 'rgba(7, 20, 40, 0.3)',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          textAlign: 'center',
        }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{ padding: '8px 0' }}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <h2>How FinPath Works</h2>
            <p>No shortcuts. No guessing your way through. This is how real mastery is built.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {[
              { step: '01', title: 'Choose a Course', description: 'Pick from SIE prep, finance fundamentals, or other available tracks.' },
              { step: '02', title: 'Study the Lesson', description: 'Read through structured, exam-quality content covering every concept you need.' },
              { step: '03', title: 'Take the Quiz', description: 'Prove mastery. Score 80%+ to advance. No exceptions.' },
              { step: '04', title: 'Unlock & Advance', description: 'Complete every module to finish the course. Track progress along the way.' },
            ].map(({ step, title, description }) => (
              <div key={step} className="card" style={{ padding: '28px 26px' }}>
                <div className="step-number">Step {step}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 10px', color: '#e8f0fe' }}>{title}</h3>
                <p style={{ color: '#7a9cc0', fontSize: '0.875rem', margin: 0, lineHeight: '1.65' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(7, 20, 40, 0.4)',
        borderTop: '1px solid rgba(212, 175, 55, 0.07)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.07)',
      }}>
        <div className="container">
          <div className="section-header">
            <h2>Built Different</h2>
            <p>Not another video course you&apos;ll forget. Not another flashcard app. FinPath is built for proven mastery.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {features.map(({ icon, title, description, comingSoon }) => (
              <div key={title} className="card-gradient-border" style={{ padding: '1px', borderRadius: '12px' }}>
                <div className="card-inner" style={{
                  background: 'var(--bg-card)',
                  borderRadius: '11px',
                  padding: '28px',
                  height: '100%',
                  position: 'relative',
                }}>
                  {comingSoon && (
                    <span className="badge badge-gold" style={{ position: 'absolute', top: '20px', right: '20px' }}>
                      Soon
                    </span>
                  )}
                  <div className="feature-icon" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#d4af37' }}>
                    {icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 10px', color: '#e8f0fe' }}>{title}</h3>
                  <p style={{ color: '#7a9cc0', fontSize: '0.875rem', margin: 0, lineHeight: '1.7' }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Start Learning Today</h2>
            <p>Every course is free. No account required to browse. Start where you are.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}>
            {allCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card-gradient-border" style={{ padding: '1px', borderRadius: '12px', height: '100%', cursor: 'pointer' }}>
                  <div className="card-inner" style={{
                    background: 'var(--bg-card)',
                    borderRadius: '11px',
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {/* Icon & Category */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                      <span style={{ fontSize: '2rem' }}>{course.icon}</span>
                      <span className={`badge ${course.category === 'certification' ? 'badge-gold' : 'badge-blue'}`}>
                        {course.category === 'certification' ? 'Certification' : 'Fundamentals'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 5px', color: '#e8f0fe' }}>{course.title}</h3>
                    <p style={{ color: '#d4af37', fontSize: '0.8rem', margin: '0 0 12px', fontWeight: '600', letterSpacing: '0.01em' }}>{course.subtitle}</p>
                    <p style={{ color: '#7a9cc0', fontSize: '0.85rem', lineHeight: '1.65', margin: '0 0 auto', flexGrow: 1 }}>
                      {course.description.substring(0, 115)}...
                    </p>

                    {/* Metadata */}
                    <div style={{
                      display: 'flex',
                      gap: '24px',
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      paddingTop: '18px',
                      marginTop: '20px',
                    }}>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.modules.length}</div>
                        <div style={{ fontSize: '0.72rem', color: '#4a6a90', marginTop: '2px', fontWeight: '500' }}>Modules</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.estimatedHours}h</div>
                        <div style={{ fontSize: '0.72rem', color: '#4a6a90', marginTop: '2px', fontWeight: '500' }}>Est. Time</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.level}</div>
                        <div style={{ fontSize: '0.72rem', color: '#4a6a90', marginTop: '2px', fontWeight: '500' }}>Level</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/courses" style={{ textDecoration: 'none' }}>
              <button className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                View All Courses →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '64px 24px 88px' }}>
        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(10, 29, 54, 0.6) 50%, rgba(212, 175, 55, 0.03) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.16)',
          borderRadius: '20px',
          padding: '60px 40px',
          overflow: 'hidden',
        }}>
          {/* Background dot grid */}
          <div
            className="hero-pattern-subtle"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.3rem)',
              fontWeight: '800',
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
              color: '#e8f0fe',
            }}>
              Ready to level up?
            </h2>
            <p style={{ color: '#7a9cc0', fontSize: '1rem', margin: '0 0 28px', lineHeight: '1.65' }}>
              The gap between where you are and where you want to be is just knowledge. Start closing it today.
            </p>
            <Link href="/courses" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '13px 32px' }}>
                Start for Free →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
