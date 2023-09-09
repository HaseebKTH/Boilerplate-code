import React from "react"

type InputProps = {
    value:number
    handleChange:(event:React.ChangeEvent<HTMLInputElement>, newVal:number) => void
    }

export default function Input(props:InputProps) {
    return <input type="text" value={props.value} onChange={(event) => props.handleChange(event,Number(event.target.value))} />
  }
  