'use client'

import { Box } from "@/components/context/Box"
import { ThemeContextProvider } from "@/components/context/ThemeContext"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

    </main>
  )
}
