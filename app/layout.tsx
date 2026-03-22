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
  title: 'Renda inteligente com IA - Crie Renda Extra com Inteligência Artificial',
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
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Script src="/remove-badges.js" strategy="afterInteractive" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
