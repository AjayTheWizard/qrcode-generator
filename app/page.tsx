import Link from 'next/link'
import NavBar from '@components/NavBar'

// import { User } from '@components/User'
import { Button } from '@components/ui/button'
import { BiQrScan, BiUserPlus } from 'react-icons/bi'

export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />
      <div>
        {/* <User /> */}
        <section
          id="hero"
          className="min-h-screen container flex items-center justify-center text-center"
        >
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-bold mb-5">
              Free & Dynamic QR Code Generator
            </h1>
            <p className="text-xl lg:w-3/4 mx-auto">
              Generate simple & advanced QR codes. Easy, customizable &
              trackable.
            </p>
            <div className="space-x-2 mt-10">
              <Button asChild size="lg">
                <Link href="/generate" className="mb-2">
                  <BiQrScan className="me-2" />
                  Generate QRCode
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/login" className="mb-2">
                  <BiUserPlus className="text-lg me-2" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
