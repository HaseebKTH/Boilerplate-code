'use client'

import { Private } from '@/components/auth/Private'
import { Profile } from '@/components/auth/Profile'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Private isLoggedIn={true} component= {Profile} />
    </main>
  )
}