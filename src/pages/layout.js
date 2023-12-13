'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider, signOut, useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <>
            <SessionProvider>{children}</SessionProvider>
          </>
        }
      </body>
    </html>
  )
}
