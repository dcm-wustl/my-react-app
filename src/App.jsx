import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi.</h1>
    </>
  )
}

export default function Square() {
  return <button className="square">X</button><button className="square">X</button>;
}
