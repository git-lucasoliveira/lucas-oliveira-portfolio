import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'
import MouseFollowEffect from '@/components/effects/MouseFollowEffect'
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
  title: 'Lucas de Oliveira Amorim | Backend Developer — Java & Spring | AWS Certified',
  description: 'Backend Developer specialized in Java, Spring Boot and REST APIs. AWS Certified Cloud Practitioner, postgraduate student in Software Engineering at FIAP. Systems Analyst at Starcard, Barueri/SP.',
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
    'AWS Certified Cloud Practitioner',
    'Spring Security',
    'Spring Cloud',
    'Microservices',
    'Kubernetes',
    'SQL Server',
    'Docker',
    'Starcard',
  ],
  authors: [{ name: 'Lucas de Oliveira Amorim' }],
  creator: 'Lucas de Oliveira Amorim',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://lucasoliveiraamorim.dev',
    title: 'Lucas de Oliveira Amorim | Backend Developer — Java & Spring | AWS Certified',
    description: 'Backend Developer specialized in Java, Spring Boot and enterprise solutions. AWS Certified Cloud Practitioner.',
    siteName: 'Lucas Amorim Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas de Oliveira Amorim | Backend Developer — Java & Spring | AWS Certified',
    description: 'Backend Developer specialized in Java, Spring Boot and enterprise solutions. AWS Certified Cloud Practitioner.',
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
            <MouseFollowEffect />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
