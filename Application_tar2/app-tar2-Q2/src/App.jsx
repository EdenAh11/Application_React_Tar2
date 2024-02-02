import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Q2/EHeader'
import Grade from './GrageID/Grage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {EHeader}

     <Grade />
    </>
  )
}

export default App
