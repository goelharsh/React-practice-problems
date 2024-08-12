import { useState } from 'react'
import './App.css'

function App() {
 
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  function changeHandler(e){
    setInputText(e.target.value);
  }
  const handleAdd = ()=>{
    setTodoList([...todoList,inputText]);
    setInputText("")
  }
  const handleDelete = (id)=>{
    setTodoList(todoList.filter((todo,index)=>index !== id));
  }
  return (
   <div>
    <input type='text' value={inputText} onChange={changeHandler}/>
    <button onClick={handleAdd}>Add</button>
   

    <ul>
      {
        todoList.map((todo,index)=>(
          <>
           <li key={index}>{todo}</li>
           <button onClick={()=>handleDelete(index)}>Delete</button></>
        ))
      }
    </ul>
   </div>
  )
}

export default App
