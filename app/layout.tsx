// Styles
import '@styles/globals.css'

// Next imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Clerk imports
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

// Constants
import { DESCRIPTION, HOME_PAGE_TITLE } from '@constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: HOME_PAGE_TITLE,
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <div className="dark bg-background text-foreground min-h-screen w-full">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
