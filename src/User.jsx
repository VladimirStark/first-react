import { useState } from "react"


export default function User(props) {
    const [name, setName] = useState('User')
    return (
    <>
    <h1>Hello {name}!</h1>
    <h2>Default name: {props.defaultName}</h2>
    {/* Binding (MVVM):*/}
    <input type="text" value={name} onChange={(event) => {
      setName(event.target.value)
    }} />
    </>
    )
}