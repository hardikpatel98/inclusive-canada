import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inclusive Canada Foundation | Empowering Communities Through Inclusion',
  description:
    'Inclusive Canada Foundation builds belonging through Sports, Education, Health, and Culture, for every newcomer, family, and community in Surrey, BC.',
  keywords: ['inclusive canada', 'newcomers', 'cricket', 'diversity', 'surrey bc', 'community programs'],
  openGraph: {
    title: 'Inclusive Canada Foundation',
    description: 'Empowering Communities Through Inclusion.',
    url: 'https://inclusivecanada.com',
    siteName: 'Inclusive Canada Foundation',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
