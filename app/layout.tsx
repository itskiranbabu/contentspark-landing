import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ContentSpark ⚡ - Transform Your Brand Story',
  description: 'Professional content creation agency helping brands create scroll-stopping content that converts followers into customers.',
  keywords: 'content creation, social media marketing, video production, content strategy, brand storytelling',
  openGraph: {
    title: 'ContentSpark ⚡ - Transform Your Brand Story',
    description: 'Professional content creation agency helping brands create scroll-stopping content',
    url: 'https://contentspark-landing-lvch.vercel.app',
    siteName: 'ContentSpark',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContentSpark ⚡ - Transform Your Brand Story',
    description: 'Professional content creation agency helping brands create scroll-stopping content',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}