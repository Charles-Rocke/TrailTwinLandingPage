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
    default: 'Trail Twin - Find a ride on your own time.',
  },
  description:
    'Find time to ride with a partner on your time. Meet new riding buddies and make new friendships!',
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
