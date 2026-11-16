import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/navbar'

export const metadata: Metadata = {
  title: 'Productividad Pro - Hábitos, Finanzas y Metas',
  description: 'Aplicación completa para gestionar hábitos, finanzas, horarios y metas anuales',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
