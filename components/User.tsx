'use client'

import { useUser } from '@clerk/nextjs'

export const User = () => {
  const { isSignedIn, isLoaded, user } = useUser()

  if (!isLoaded) {
    return <h1 className="text-xl">Loading...</h1>
  }

  if (!isSignedIn) {
    return <h1 className="text-xl">Sign In</h1>
  }

  return <h1 className="text-xl">{user.fullName}</h1>
}
