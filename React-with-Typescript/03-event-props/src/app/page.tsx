"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button handleClick={(event,id)=> {
        console.log('Button Clicked!',event, id);
        setVal(val=>val+1);
        }} />
      <Input value={val} handleChange={(event,newVal)=> {
        console.log(event);
        setVal(newVal);
      }} />
    </main>
  )
}
