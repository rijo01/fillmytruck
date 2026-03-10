import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'FillMyTruck.se — Kör aldrig tom igen',
  description: 'Den nordiska marknadsplatsen för returfrakter. Fyll tom lastbilskapacitet med smart transportmatchning.',
  keywords: 'returfrakt, tomkörning, lastbil, transport, logistik, Skandinavien, freight marketplace',
  openGraph: {
    title: 'FillMyTruck.se',
    description: 'Kör aldrig tom igen. Nordisk returfrakt-plattform.',
    url: 'https://fillmytruck.se',
    siteName: 'FillMyTruck',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FillMyTruck.se',
    description: 'Kör aldrig tom igen.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.5.2/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
