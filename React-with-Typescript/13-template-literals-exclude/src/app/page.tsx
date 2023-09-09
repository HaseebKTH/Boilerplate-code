'use client'

import { Toast } from '@/components/templateliterals/Toast'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toast position='center' />
    </main>
  )
}
