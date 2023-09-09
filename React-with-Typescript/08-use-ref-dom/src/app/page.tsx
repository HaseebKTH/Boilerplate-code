'use client'

import { DomRef } from "@/components/ref/DomRef"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DomRef />
    </main>
  )
}
