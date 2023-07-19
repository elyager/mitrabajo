import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '¿Es Legal Mi Trabajo?',
  description: 'Te explicamos tus derechos laborales en México. Aprende a identificar si tu trabajo es legal o no.',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={ inter.className }>{ children }</body>
    </html>
  )
}
