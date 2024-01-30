import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Q3/EHeader'
import Table from './Table/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {EHeader}
    <Table width = "100%" />
    </>
  )
}

export default App
