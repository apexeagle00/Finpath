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
      background: 'rgba(4, 13, 28, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #d4af37, #f0d060)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: '800',
            color: '#0a0f1a',
          }}>F</div>
          <span style={{
            fontSize: '1.2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37, #f0d060)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>FinPath</span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { href: '/courses', label: 'Courses' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: 'none',
                color: pathname.startsWith(href) ? '#d4af37' : '#7a9cc0',
                fontWeight: pathname.startsWith(href) ? '600' : '400',
                fontSize: '0.9rem',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/courses">
          <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Start Learning
          </button>
        </Link>
      </div>
    </nav>
  )
}
