import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucas de Oliveira Amorim | Java Backend Developer',
  description: 'Java Backend Developer specialized in Spring Boot, REST APIs and scalable enterprise solutions. Currently working at Starcard developing corporate systems.',
  keywords: [
    'Backend Developer',
    'Java Developer',
    'Spring Boot',
    'REST API',
    'Software Engineer',
    'Lucas Amorim',
    'Lucas Oliveira',
    'Java',
    'AWS',
    'Spring Security',
    'SQL Server',
    'Docker',
    'Starcard',
  ],
  authors: [{ name: 'Lucas de Oliveira Amorim' }],
  creator: 'Lucas de Oliveira Amorim',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://lucasoliveiraamorim.dev',
    title: 'Lucas de Oliveira Amorim | Java Backend Developer',
    description: 'Java Backend Developer specialized in Spring Boot and enterprise solutions',
    siteName: 'Lucas Amorim Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas de Oliveira Amorim | Java Backend Developer',
    description: 'Java Backend Developer specialized in Spring Boot and enterprise solutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
