import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Guia Tradutor de IA - Crie Renda Extra com Inteligência Artificial',
  description:
    'Descubra como usar Inteligência Artificial para prestar serviços digitais simples e abrir uma nova fonte de renda — mesmo começando do zero.',
  icons: {
    icon: [
      {
        url: '/images/IconeSite.png',
        type: 'image/png',
      },
    ],
    apple: '/images/IconeSite.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Script src="/remove-badges.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
