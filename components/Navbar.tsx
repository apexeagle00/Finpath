'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(4, 13, 28, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px' }}>
          <div style={{
            width: '30px',
            height: '30px',
            background: 'linear-gradient(135deg, #d4af37 0%, #c09b20 100%)',
            borderRadius: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '900',
            color: '#060e1a',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}>F</div>
          <span style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            color: '#e8f0fe',
            letterSpacing: '-0.01em',
          }}>FinPath</span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { href: '/courses', label: 'Courses' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname.startsWith(href) ? ' active' : ''}`}
              style={{ padding: '6px 12px', borderRadius: '6px' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/courses" style={{ textDecoration: 'none' }}>
          <button className="btn-primary" style={{ padding: '7px 18px', fontSize: '0.82rem' }}>
            Start Learning
          </button>
        </Link>
      </div>
    </nav>
  )
}
