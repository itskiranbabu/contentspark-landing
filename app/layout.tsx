import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ContentSpark ⚡ - Transform Your Brand Story',
  description: 'Professional content creation agency helping brands create scroll-stopping content that converts followers into customers.',
  keywords: 'content creation, social media marketing, video production, content strategy, brand storytelling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}