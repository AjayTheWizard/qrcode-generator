import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@components/ThemeProvider'

 const RootWrapper = (props: PropsWithChildren) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </ClerkProvider>
  )
}
