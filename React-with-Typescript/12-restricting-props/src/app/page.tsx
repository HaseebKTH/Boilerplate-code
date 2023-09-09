'use client'

import { RandomNumber } from '@/components/restriction/RandomNumber'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RandomNumber value={-45} isNegative={true}/>
    </main>
  )
}
