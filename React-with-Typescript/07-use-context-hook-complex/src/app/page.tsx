'use client'

import { User } from "@/components/context/User"
import { UserContextProvider } from "@/components/context/UserContext"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </main>
  )
}
