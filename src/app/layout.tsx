import './globals.css'
import type { Metadata } from 'next'
import Footer from './footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teknoids Studio',
  description: 'Digital Techlead Consultance and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className } >{children}
        <Footer/>
      </body>
    </html>
  )
}
