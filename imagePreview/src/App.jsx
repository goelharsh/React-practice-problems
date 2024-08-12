import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [file, setFile] = useState("");

  const fileHandler = (e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <input type='file' onChange={fileHandler} />
      <img src={file}/>
    </div>
  )
}

export default App
