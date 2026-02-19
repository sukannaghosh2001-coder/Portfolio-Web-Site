import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Sukanna Ghosh - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Sukanna Ghosh, an MCA student specializing in full-stack web development with expertise in React, MERN stack, and UI/UX design.',
  generator: 'v0.app',
  icons: {
    icon: '/profile-icon.jpeg',
    shortcut: '/profile-icon.jpeg',
    apple: '/profile-icon.jpeg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
