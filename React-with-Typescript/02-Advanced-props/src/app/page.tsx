import Greet from "@/components/Greet"
import Heading from "@/components/Heading"
import Oscar from "@/components/Oscar"
import Status from "@/components/Status"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Status status= "error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Haseeb</Heading>
      </Oscar>
      <Greet name="Haseeb" isLoggedIn={true} />
    </main>
  )
}
