import { useState } from 'react';
import './App.css'
import Navbar from'./components/Navbar.jsx'
function App() {
  const[Todo,setTodo]=useState("");
  const[Todos,setTodos]=useState([]);

  const handleAdd=(e)=>{
    if (Todo=== "") return;
    setTodos([...Todos,Todo]);
    setTodo("");
    
  }
  return (
    <>
        <Navbar />
        <div className=' mx-auto my-auto bg-slate-200 w-3/4 min-h-screen'>
        <div>
          <div className='mx-3 font-semibold text-lg'>Add a Task:</div>
          <input
           value={Todo}
           onChange={(e)=>{
            setTodo(e.target.value);
          }} type='text'placeholder='Add new task' className='w-4/5 bg-slate-500 rounded-3xl mx-3 text-center'/>
          <button 
          value={Todo}
          onClick={handleAdd} 
          className='rounded-md  bg-orange-500  p-1'>Add</button>
        </div>
        <div>
          <div className='mx-3 font-semibold text-lg my-7'>Your To-Do:</div>
        </div>
        <div>
          <ol>{Todos.map((Todo,index)=>(
            <li key={index}>{Todo}</li>
          ))
          }</ol>
            
        </div>
        </div>
    </>
  )
}

export default App
