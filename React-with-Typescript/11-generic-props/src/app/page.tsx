'use client'

import { ListSN } from "@/components/generics/ListSN";
import { ListObj } from "@/components/generics/ListObj";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListSN 
      items={['Typescript', 'PostGres', 'Javascript', 'Java', 'C#', 'Tailwind']} 
      onClick={(item) => console.log(item)} 
      />
      <ListSN 
      items={[123, 538, 111, 474, 4217]} 
      onClick={(item) => console.log(item)} 
      />
      <ListObj
      items={[{id:1, paid:234}, {id:2, paid:456}, {id:3, paid:731}, {id:4, paid:501}]} 
      onClick={(item) => console.log(item)} 
      />
    </main>
  )
}
