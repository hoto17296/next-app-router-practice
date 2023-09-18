import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Server Action Counter Example',
  description: 'Counter app implemented using Next.js Server Actions feature.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
