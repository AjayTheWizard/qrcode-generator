'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

type Theme = 'dark' | 'light'

const themeContext = createContext<
  null | [Theme, (value: Theme | ((prevState: Theme) => Theme)) => void]
>(null)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  function setMode(theme: Theme) {
    window.localStorage.setItem('theme', theme)
    setTheme(theme)
  }
  function onThemeChange(ev: MediaQueryListEvent) {
    if (ev.matches) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  useEffect(() => {
    if (window !== undefined) {
      let cls = document.getElementById('body') as HTMLDivElement
      let themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (window.localStorage.getItem('theme')) {
        if (window.localStorage.getItem('theme') === 'dark') {
          setMode('dark')
        } else {
          setMode('light')
        }
      } else {
        if (themeMediaQuery.matches) {
          setMode('dark')
        } else {
          setMode('light')
        }
      }
      themeMediaQuery.onchange = onThemeChange
    }else{

    }
  }, [])
  useEffect(() => {
    setMode(theme)
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
