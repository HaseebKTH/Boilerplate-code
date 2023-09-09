import Greet from '@/components/Greet'
import Person from '@/components/Person'
import PersonList from '@/components/PersonList'

export default function Home() {
  const myName = {
    firstName:'Hafiz',
    lastName:'Sahib'
}

const myNames = [
  {
  firstName:"Ali",
  lastName:"Khan"
  },
  {
    firstName:"Umar",
    lastName:"Khano"
  },
  {
    firstName:"Alina",
    lastName:"Khanum"
  },
  {
    firstName:"Tayyab",
    lastName:"Rauf"
  },
]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet name="HaseebButt" messageCount={23} isLoggedIn={true}/>
      <Person  name={myName}/>
      <PersonList names={myNames} />
    </main>
  )
}
