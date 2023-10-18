// Styles
import '@styles/globals.css'

// React/Next imports
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'

// Clerk imports
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

// Constants
import { DESCRIPTION, HOME_PAGE_TITLE } from '@constants'
import { ThemeProvider } from '@components/ThemeProvider'

// Components
import MainWrapper from '@components/MainWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: HOME_PAGE_TITLE,
  description: DESCRIPTION,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>
          <MainWrapper>{children}</MainWrapper>
        </body>
      </html>
    </RootProvider>
  )
}

const RootProvider = (props: PropsWithChildren) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </ClerkProvider>
  )
}
