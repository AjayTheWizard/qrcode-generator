'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { FC, PropsWithChildren } from 'react'

type Theme = 'dark' | 'light'

const themeContext = createContext<
  null | [Theme | null, (value: (Theme | null) | ((prevState: (Theme | null)) => Theme)) => void]
>(null)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null)
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
      let themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (window.localStorage.getItem('theme')) {
        if (window.localStorage.getItem('theme') === 'dark') {
          console.log("set to dark")
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
    if(theme){
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
