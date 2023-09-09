'use client'

import LoggedIn from "@/components/state/LoggedIn"
import User from "@/components/state/User"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LoggedIn /> */}
      <User />
    </main>
  )
}