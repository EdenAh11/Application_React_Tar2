import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Q1/EHeader'
import BackColor from './Colors/BackColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {EHeader}
      <BackColor color = "white" />
    </>
  )
}

export default App
