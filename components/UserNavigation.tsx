'use client'

import { useUser } from '@clerk/nextjs'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useTheme } from './ThemeProvider'

export const UserNavigation = () => {
  const { isSignedIn } = useUser()
  const [theme, setTheme] = useTheme()
  return (
    <ul className="flex gap-3 items-center">
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
      <li>
        <Button
          size="icon"
          onClick={() => {
            setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
          }}
        >
          {theme == 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </Button>
      </li>
    </ul>
  )
}
