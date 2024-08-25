import { useState } from 'react'
import './App.css'


const MyComponent = ({renderProp})=>{
  return (
    <>
      <div>Hi </div>
      {renderProp()}
    </>
  )
}

function App() {

  return (
    <>
      <MyComponent renderProp={()=> <p>My Name is harsh</p>} />
    </>
  )
}

export default App
