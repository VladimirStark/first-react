import React, { useState } from 'react'
import User from './User'
// const name = 'User'
// const jsxElement = <h1>Hello {name}!</h1>
export default function ReactComponent () {
// React hooks
// state variable
 const [count, setCount] = useState(0)
 //const [name, setName] = useState('User')
  return (
    <div className='red'>
      {/* <h1>Hello {name}!</h1>
      {/* Binding (MVVM):*/}
      {/* <input type="text" value={name} onChange={(event) => {
        setName(event.target.value)
      }} /> */} 
      <User defaultName='User'/>
      <span>Count:{count}</span>
      <button onClick={() => {
      // console.log(count)
       // count++
       setCount(count + 1)
      }}>+</button>
      <button onClick={() => {
        setCount(count -1)
      }}>-</button>
    </div>
  )
}