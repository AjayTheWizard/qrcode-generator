'use client'

import { useUser } from '@clerk/nextjs'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs';

export const UserNavigation = () => {
  const { isSignedIn } = useUser()
  return (
    <ul className='flex gap-3 items-center'>
      {isSignedIn ? (
        <li>
          <UserButton
            afterSignOutUrl='/'
          />
        </li>
      ) : (
        <>
          <li>
            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </li>
        </>
      )}
    </ul>
  )
}
