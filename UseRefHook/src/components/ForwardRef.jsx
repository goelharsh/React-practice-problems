import React, { useRef } from 'react'
import ChildUser from './ChildUser'

const ForwardRef = () => {
    const inputRef = useRef()
    function updateInput(){
        inputRef.current.value="1000";
    }
  return (
    <div>
        <h1>Understanding forwarding ref</h1>
        <ChildUser ref={inputRef}/>
      <button onClick={updateInput}>Update Input box</button>
    </div>
  )
}

export default ForwardRef
