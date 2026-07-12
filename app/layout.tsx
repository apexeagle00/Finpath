import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FinPath — Finance Mastery Platform',
  description: 'Mastery-gated finance courses for serious students. SIE exam prep, finance fundamentals, and AI-powered learning. You don\'t advance until you actually know it.',
  keywords: 'SIE exam, finance courses, securities exam prep, finance education, mastery learning',
  openGraph: {
    title: 'FinPath — Finance Mastery Platform',
    description: 'Mastery-gated finance courses. You don\'t advance until you actually know it.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
