import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devskeen.com'),
  title: 'devskeen | Scale Your Systems Without Scaling Your Costs',
  description:
    "Most infrastructure wasn't designed for what comes next. devskeen builds data, AI, and cloud systems that scale — so your team can stop firefighting and start shipping.",
  keywords:
    'devskeen, cloud infrastructure, data engineering, cost optimization, zero downtime cloud migration, custom software engineering house, scalable systems',
  authors: [{ name: 'devskeen', url: 'https://devskeen.com' }],
  creator: 'devskeen',
  publisher: 'devskeen',
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
  alternates: { canonical: 'https://devskeen.com/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devskeen.com/',
    siteName: 'devskeen',
    title: 'devskeen | Scale Your Systems Without Scaling Your Costs',
    description:
      'We build data and cloud systems that scale — cutting infrastructure bills by 50% with sub-500ms performance and zero downtime.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devskeen | Scale Your Systems Without Scaling Your Costs',
    description:
      'We build data and cloud systems that scale — so your team can stop firefighting and start shipping.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://devskeen.com/#organization',
      name: 'devskeen',
      url: 'https://devskeen.com',
      logo: 'https://devskeen.com/icon.svg',
      description:
        'Premier cloud, data, and software engineering house helping companies scale systems without scaling infrastructure costs.',
      knowsAbout: [
        'Cloud Cost Optimization',
        'Zero-Downtime Cloud Migration',
        'Data Engineering at Scale',
        'Custom Software Architecture',
        'High-Concurrency Systems',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@devskeen.com',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
      sameAs: ['https://linkedin.com/company/devskeen'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#10B981" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-white text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
