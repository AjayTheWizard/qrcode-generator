'use client'

import { useUser } from '@clerk/nextjs'
import { Button } from '@components/ui/button'
import Link from 'next/link'                    
import { UserButton } from '@clerk/nextjs'
import { BsFillMoonStarsFill } from "react-icons/bs"

export const UserNavigation = () => {
  const { isSignedIn } = useUser()
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
          <li>
            <Button size="icon" onClick={()=>{
              let cls = (document.getElementById("body") as HTMLDivElement).classList;
              if(cls.contains("dark")){
                cls.remove("dark")
              }else {
                cls.add("dark")
              }
            }}>
              <BsFillMoonStarsFill/>
            </Button>
          </li>
        </>
      )}
    </ul>
  )
}
