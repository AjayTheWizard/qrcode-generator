import React from 'react'

import { COMPANY_NAME } from '@constants'
import { UserNavigation } from './UserNavigation'

// Icons
import { BiQrScan } from 'react-icons/bi'

export default function NavBar() {
  return (
    <nav className="w-full absolute flex justify-between items-center py-3 px-6">
      <h1 className="text-lg font-medium flex items-center">
        <BiQrScan className="me-2" />
        <span>{COMPANY_NAME}</span>
      </h1>
      <div className="flex gap-4 items-center">
        <UserNavigation />
      </div>
    </nav>
  )
}
