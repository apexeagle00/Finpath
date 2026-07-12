import { ContentBlock } from '@/lib/types'

const calloutStyles: Record<string, { bg: string; border: string; color: string; label: string; icon: string }> = {
  key: { bg: 'rgba(212, 175, 55, 0.08)', border: 'rgba(212, 175, 55, 0.3)', color: '#d4af37', label: 'KEY POINT', icon: '🔑' },
  exam: { bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa', label: 'EXAM TIP', icon: '📝' },
  tip: { bg: 'rgba(34, 197, 94, 0.06)', border: 'rgba(34, 197, 94, 0.3)', color: '#22c55e', label: 'TIP', icon: '💡' },
  warning: { bg: 'rgba(239, 68, 68, 0.06)', border: 'rgba(239, 68, 68, 0.3)', color: '#ef4444', label: 'WARNING', icon: '⚠️' },
  info: { bg: 'rgba(99, 102, 241, 0.06)', border: 'rgba(99, 102, 241, 0.3)', color: '#818cf8', label: 'NOTE', icon: 'ℹ️' },
}

export default function LessonContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div style={{ lineHeight: '1.75', fontSize: '0.97rem' }}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const sizes = { 2: '1.6rem', 3: '1.2rem', 4: '1.05rem' }
            const size = sizes[block.level ?? 2] ?? '1.2rem'
            return (
              <h2 key={i} style={{
                fontSize: size,
                fontWeight: '700',
                margin: i === 0 ? '0 0 20px' : '36px 0 16px',
                letterSpacing: '-0.01em',
                color: '#e8f0fe',
              }}>
                {block.text}
              </h2>
            )
          }

          case 'paragraph':
            return (
              <p key={i} style={{ color: '#b8cce0', margin: '0 0 16px', lineHeight: '1.75' }}>
                {block.text}
              </p>
            )

          case 'list':
            return (
              <ul key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none' }}>
                {block.items?.map((item, j) => (
                  <li key={j} style={{
                    color: '#b8cce0',
                    padding: '8px 0 8px 20px',
                    position: 'relative',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#d4af37',
                      fontWeight: '700',
                    }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            )

          case 'callout': {
            const style = calloutStyles[block.variant ?? 'info'] ?? calloutStyles.info
            return (
              <div key={i} style={{
                background: style.bg,
                border: `1px solid ${style.border}`,
                borderRadius: '10px',
                padding: '20px 24px',
                margin: '20px 0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1rem' }}>{style.icon}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: style.color }}>
                    {style.label}
                  </span>
                </div>
                <p style={{ color: '#e8f0fe', margin: 0, whiteSpace: 'pre-line', lineHeight: '1.7', fontSize: '0.92rem' }}>
                  {block.text}
                </p>
              </div>
            )
          }

          case 'comparison':
            return (
              <div key={i} style={{ margin: '20px 0' }}>
                {block.comparisons?.map((item, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '12px',
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '20px',
                    alignItems: 'start',
                  }}>
                    <div style={{
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      color: '#d4af37',
                      lineHeight: '1.4',
                    }}>
                      {item.label}
                    </div>
                    <div style={{ color: '#b8cce0', fontSize: '0.92rem', lineHeight: '1.65' }}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            )

          case 'divider':
            return <hr key={i} className="divider" />

          default:
            return null
        }
      })}
    </div>
  )
}
