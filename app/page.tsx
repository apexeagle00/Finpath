import Link from 'next/link'
import { allCourses } from '@/lib/courses'

export default function Home() {
  const features = [
    {
      icon: '🎯',
      title: 'Mastery-Gated Learning',
      description: 'You cannot advance to the next module until you score 80% or higher on the quiz. No skipping, no shortcuts. Real mastery only.',
    },
    {
      icon: '📚',
      title: 'Exam-Quality Content',
      description: 'Every lesson is written to match the depth and rigor of real finance exams. SIE prep, fundamentals, and beyond — all built to produce results.',
    },
    {
      icon: '🤖',
      title: 'AI Tutor',
      description: 'Stuck on a concept? Your AI tutor is available inside every course to explain anything in plain language. Coming soon.',
      comingSoon: true,
    },
    {
      icon: '💼',
      title: 'Mock Interviews',
      description: 'Simulate real finance interviews with AI-powered behavioral and technical questions. Get scored feedback on every answer. Coming soon.',
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
      <section style={{
        padding: '100px 24px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '999px',
          padding: '6px 16px',
          marginBottom: '32px',
        }}>
          <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Finance Education. Reimagined.
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: '800',
          lineHeight: '1.05',
          margin: '0 0 24px',
          letterSpacing: '-0.02em',
        }}>
          Master Finance.{' '}
          <span className="text-gold-gradient">Prove It.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: '#7a9cc0',
          maxWidth: '620px',
          margin: '0 auto 48px',
          lineHeight: '1.6',
        }}>
          Mastery-gated courses built for serious students. You don&apos;t move forward until you actually know it. SIE prep, finance fundamentals, and more.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/courses">
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Browse Courses →
            </button>
          </Link>
          <Link href="#how-it-works">
            <button className="btn-secondary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              How It Works
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        padding: '32px 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '24px',
          textAlign: 'center',
        }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #d4af37, #f0d060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{value}</div>
              <div style={{ color: '#7a9cc0', fontSize: '0.85rem', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
            How FinPath Works
          </h2>
          <p style={{ color: '#7a9cc0', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            No shortcuts. No guessing your way through. This is how real mastery is built.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {[
            { step: '01', title: 'Choose a Course', description: 'Pick from SIE prep, finance fundamentals, or other available tracks.' },
            { step: '02', title: 'Study the Lesson', description: 'Read through structured, exam-quality content covering every concept you need.' },
            { step: '03', title: 'Take the Quiz', description: 'Prove you\'ve mastered the material. Must score 80%+ to advance to the next module.' },
            { step: '04', title: 'Unlock & Advance', description: 'Complete every module to finish the course. Track your progress along the way.' },
          ].map(({ step, title, description }) => (
            <div key={step} className="card" style={{ padding: '28px' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: '#d4af37',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}>STEP {step}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 10px' }}>{title}</h3>
              <p style={{ color: '#7a9cc0', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(7, 20, 40, 0.5)',
        borderTop: '1px solid rgba(212, 175, 55, 0.08)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              Built Different
            </h2>
            <p style={{ color: '#7a9cc0', maxWidth: '480px', margin: '0 auto' }}>
              Not another video course you&apos;ll forget. Not another flashcard app. FinPath is built for proven mastery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {features.map(({ icon, title, description, comingSoon }) => (
              <div key={title} className="card" style={{ padding: '32px', position: 'relative' }}>
                {comingSoon && (
                  <span className="badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    color: '#d4af37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                  }}>Soon</span>
                )}
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 10px' }}>{title}</h3>
                <p style={{ color: '#7a9cc0', fontSize: '0.9rem', margin: 0, lineHeight: '1.7' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
            Start Learning Today
          </h2>
          <p style={{ color: '#7a9cc0', maxWidth: '480px', margin: '0 auto' }}>
            Every course is free. No account required to browse. Start where you are.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {allCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '32px', height: '100%', cursor: 'pointer' }}>
                {/* Icon & Category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontSize: '2.5rem' }}>{course.icon}</span>
                  <span className="badge" style={{
                    background: course.category === 'certification'
                      ? 'rgba(212, 175, 55, 0.1)'
                      : 'rgba(59, 130, 246, 0.1)',
                    color: course.category === 'certification' ? '#d4af37' : '#60a5fa',
                    border: `1px solid ${course.category === 'certification' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                  }}>
                    {course.category === 'certification' ? 'Certification' : 'Fundamentals'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 6px' }}>{course.title}</h3>
                <p style={{ color: '#d4af37', fontSize: '0.85rem', margin: '0 0 12px', fontWeight: '500' }}>{course.subtitle}</p>
                <p style={{ color: '#7a9cc0', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 24px' }}>
                  {course.description.substring(0, 120)}...
                </p>

                {/* Metadata */}
                <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.modules.length}</div>
                    <div style={{ fontSize: '0.75rem', color: '#4a6a90' }}>Modules</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.estimatedHours}h</div>
                    <div style={{ fontSize: '0.75rem', color: '#4a6a90' }}>Est. Time</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e8f0fe' }}>{course.level}</div>
                    <div style={{ fontSize: '0.75rem', color: '#4a6a90' }}>Level</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/courses">
            <button className="btn-secondary" style={{ fontSize: '0.95rem' }}>
              View All Courses →
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.06) 0%, rgba(212, 175, 55, 0.02) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '20px',
          padding: '64px 40px',
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
            Ready to level up?
          </h2>
          <p style={{ color: '#7a9cc0', fontSize: '1rem', margin: '0 0 32px', lineHeight: '1.6' }}>
            The gap between where you are and where you want to be is just knowledge. Start closing it today.
          </p>
          <Link href="/courses">
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Start for Free →
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
