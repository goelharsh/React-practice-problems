import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ForwardRef from './components/ForwardRef';

function App() {
  
  let inputRef = useRef(null);

  const clickHandler = ()=>{
    // to set some value 
    inputRef.current.value='1000'

    // to set focus on inout 
    inputRef.current.focus()

    //to set display null
    inputRef.current.style.display='none';

  }
  return (
   <div>
    <input type='text' ref={inputRef}/>
    <button onClick={clickHandler}>Handle Input</button>

    <ForwardRef/>
   </div>
  )
}

export default App
