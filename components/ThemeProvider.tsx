'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { FC, PropsWithChildren } from 'react'

type Theme = 'dark' | 'light'

type ThemeContext = [
  Theme | null,
  (value: Theme | ((prevState: Theme | null) => Theme) | null) => void,
]

const themeContext = createContext<ThemeContext | null>(null)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  function setMode(theme: Theme) {
    window.localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  function onThemeChange(e: MediaQueryListEvent) {
    setMode(e.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    let themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const storedTheme = window.localStorage.getItem('theme')

    // If the user has set a theme before, we want to use that
    if (storedTheme) {
      setMode(storedTheme === 'dark' ? 'dark' : 'light')
    }

    // If the user has never set a theme before, we want to set it to dark mode
    else {
      setMode(themeMediaQuery.matches ? 'dark' : 'light')
    }

    themeMediaQuery.onchange = onThemeChange
  }, [])

  useEffect(() => {
    if (theme) {
      setMode(theme)
    }
  }, [theme])

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  let context = useContext(themeContext)

  if (!context) {
    throw new Error("Must be used within 'ThemeProvider'")
  }

  return context
}
