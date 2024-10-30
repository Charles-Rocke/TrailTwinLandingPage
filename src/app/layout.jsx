import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Trail Twin',
    default: 'Trail Twin - Find mtb rides, friends, and trails near you.',
  },
  description:
    "With our app, you'll find local trails, rides, and friends that match your skill level and style.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('bg-[#FDFDF5] antialiased', inter.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
