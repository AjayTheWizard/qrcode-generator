import { User } from '@components/User'
import { UserNavigation } from '@components/UserNavigation'

export default function Home() {
  return (
    <div className="bg-background">
      <nav className="border border-border w-full flex justify-between py-3 px-6">
        <h1 className="text-xl">Hello</h1>
        <div className="flex gap-4 items-center">
          <UserNavigation />
        </div>
      </nav>
      <div>
        <User/>
      </div>
    </div>
  )
}
