import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Durell Wilson | Software Engineer',
  description: 'Full-stack engineer specializing in Swift, iOS, and modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
