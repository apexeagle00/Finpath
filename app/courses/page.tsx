import Link from 'next/link'
import { allCourses } from '@/lib/courses'

export default function CoursesPage() {
  const certificationCourses = allCourses.filter(c => c.category === 'certification')
  const fundamentalsCourses = allCourses.filter(c => c.category === 'fundamentals')

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '999px',
          padding: '5px 14px',
          marginBottom: '20px',
        }}>
          <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            All Courses
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
          Choose Your Path
        </h1>
        <p style={{ color: '#7a9cc0', fontSize: '1.05rem', maxWidth: '560px', lineHeight: '1.6', margin: 0 }}>
          Every course is mastery-gated. You prove you know the material before you move on. No shortcuts, no guessing your way through.
        </p>
      </div>

      {/* Mastery Notice */}
      <div style={{
        background: 'rgba(212, 175, 55, 0.06)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <span style={{ fontSize: '1.5rem' }}>🎯</span>
        <div>
          <p style={{ fontWeight: '600', margin: '0 0 4px', color: '#e8f0fe' }}>Mastery-Gated Progression</p>
          <p style={{ color: '#7a9cc0', margin: 0, fontSize: '0.9rem' }}>
            Score 80% or higher on each module quiz to unlock the next. Your progress is saved automatically.
          </p>
        </div>
      </div>

      {/* Certification Courses */}
      {certificationCourses.length > 0 && (
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px', color: '#d4af37' }}>
            📜 Certification Prep
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {certificationCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Fundamentals Courses */}
      {fundamentalsCourses.length > 0 && (
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px', color: '#60a5fa' }}>
            📘 Finance Fundamentals
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {fundamentalsCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Coming Soon */}
      <section>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px', color: '#4a6a90' }}>
          🚧 Coming Soon
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {[
            { icon: '📊', title: 'Series 7 — General Securities', subtitle: 'Full licensing exam prep', modules: 8 },
            { icon: '🏦', title: 'Investment Banking Fundamentals', subtitle: 'DCF, LBO, M&A, pitch decks', modules: 6 },
            { icon: '💹', title: 'Technical Analysis', subtitle: 'Charts, patterns, indicators', modules: 5 },
          ].map(({ icon, title, subtitle, modules }) => (
            <div key={title} className="card" style={{ padding: '32px', opacity: 0.5, cursor: 'not-allowed' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.5rem' }}>{icon}</span>
                <span className="badge" style={{ background: 'rgba(74, 106, 144, 0.2)', color: '#4a6a90' }}>Coming Soon</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 6px' }}>{title}</h3>
              <p style={{ color: '#4a6a90', fontSize: '0.85rem', margin: '0 0 16px' }}>{subtitle}</p>
              <p style={{ color: '#4a6a90', fontSize: '0.8rem', margin: 0 }}>{modules} modules planned</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course }: { course: typeof allCourses[0] }) {
  const isGold = course.category === 'certification'
  const accentColor = isGold ? '#d4af37' : '#60a5fa'
  const bgColor = isGold ? 'rgba(212, 175, 55, 0.1)' : 'rgba(59, 130, 246, 0.1)'
  const borderColor = isGold ? 'rgba(212, 175, 55, 0.3)' : 'rgba(59, 130, 246, 0.3)'

  return (
    <Link href={`/courses/${course.slug}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ padding: '32px', height: '100%', cursor: 'pointer' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <span style={{ fontSize: '2.5rem' }}>{course.icon}</span>
          <span className="badge" style={{ background: bgColor, color: accentColor, border: `1px solid ${borderColor}` }}>
            {course.level}
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 4px' }}>{course.title}</h3>
        <p style={{ color: accentColor, fontSize: '0.85rem', fontWeight: '500', margin: '0 0 12px' }}>{course.subtitle}</p>
        <p style={{ color: '#7a9cc0', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 24px' }}>
          {course.description.substring(0, 130)}...
        </p>

        {/* Topics */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
          {course.topics.slice(0, 4).map(topic => (
            <span key={topic} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '2px 8px',
              fontSize: '0.72rem',
              color: '#7a9cc0',
            }}>{topic}</span>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '20px',
          borderTop: '1px solid rgba(212, 175, 55, 0.1)',
          paddingTop: '20px',
        }}>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>{course.modules.length}</div>
            <div style={{ fontSize: '0.72rem', color: '#4a6a90' }}>Modules</div>
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>{course.estimatedHours}h</div>
            <div style={{ fontSize: '0.72rem', color: '#4a6a90' }}>Study Time</div>
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>80%</div>
            <div style={{ fontSize: '0.72rem', color: '#4a6a90' }}>Pass Score</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: accentColor, fontSize: '1.2rem' }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
