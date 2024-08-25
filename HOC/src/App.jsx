import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HOC from './components/HOC'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <HOC/>
  </>
  )
}

export default App
