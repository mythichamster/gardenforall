import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'GardenForAll — Personalized Gardens for the Bay Area',
  description:
    'Transform your outdoor space with a personalized garden. We handle design, installation, and maintenance so you can simply enjoy. Serving the San Francisco Bay Area.',
  keywords: [
    'garden design',
    'Bay Area gardening',
    'container garden',
    'raised garden bed',
    'personalized garden',
    'garden installation',
    'Palo Alto garden',
    'Menlo Park garden',
  ],
  openGraph: {
    title: 'GardenForAll — Personalized Gardens for the Bay Area',
    description: 'Sprinkle magic, cultivate joy. We design and install beautiful gardens tailored to your space.',
    url: 'https://gardenforall.com',
    siteName: 'GardenForAll',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
