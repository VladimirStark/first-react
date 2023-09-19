import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = 'User'
const jsxElement = <h1>Hello {name}!</h1>
function ReactComponent() {
  return (
    <div className='red'>
      {jsxElement}
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
<div>
  <ReactComponent />
</div>
)
