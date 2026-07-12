export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      padding: '40px 24px',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: 'linear-gradient(135deg, #d4af37, #f0d060)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: '800',
            color: '#0a0f1a',
          }}>F</div>
          <span style={{
            fontSize: '1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37, #f0d060)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>FinPath</span>
        </div>
        <p style={{ color: '#4a6a90', fontSize: '0.85rem', margin: 0 }}>
          Finance mastery for the students who weren&apos;t handed the door — they&apos;re building it.
        </p>
        <p style={{ color: '#4a6a90', fontSize: '0.8rem', margin: 0 }}>
          © {new Date().getFullYear()} FinPath. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
