'use client'

import type { PropsWithChildren } from 'react'
import { useTheme } from './ThemeProvider'

export default function MainWrapper(props: PropsWithChildren) {
  const [theme] = useTheme()
  return (
    <div
      className={`${theme} bg-background text-foreground min-h-screen w-full`}
    >
      {props.children}
    </div>
  )
}
