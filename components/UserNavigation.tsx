'use client'

import Link from 'next/link'

import { useUser } from '@clerk/nextjs'
import { useTheme } from './ThemeProvider'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@components/ui/button'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

export const UserNavigation = () => {
  const { isSignedIn } = useUser()
  const [theme, setTheme] = useTheme()

  return (
    <ul className="flex gap-3 items-center">
      <li>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
          }}
        >
          {theme == 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </Button>
      </li>
      {isSignedIn ? (
        <li>
          <UserButton afterSignOutUrl="/" />
        </li>
      ) : (
        <>
          <li>
            <Button variant="secondary" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </li>
        </>
      )}
    </ul>
  )
}
