import { useEffect, useState } from 'react';
import './App.css'
import Navbar from'./components/Navbar.jsx'
function App() {
  const[Todo,setTodo]=useState("");
  const[Todos,setTodos]=useState([]);

  useEffect(()=>{
    let Todos=JSON.parse(localStorage.getItem("Todos"))||[];
    setTodos(Todos)
  },[])

   const saveToLs= (Todos) => {
    localStorage.setItem("Todos",JSON.stringify(Todos))
  }
  

  const handleEdit=(index)=>{
  const newText=prompt("Enter Your text",Todos[index].text)
  if(newText&&newText.trim()!==""){
    const update=Todos.map((Todo,i)=>
      i===index ?{...Todo, text:newText}: Todo);
     setTodos(update);}
     saveToLs(update);}
  

  const handleDelete=(index)=>{
    const update=Todos.filter((Todo,i)=>i!=index);
    setTodos(update);
    saveToLs(update);
  }


  const handleAdd=(e)=>{
    if (Todo.trim()=== "") return;
    const update=[...Todos,{text:Todo,completed:false}];
    setTodos(update);
    saveToLs(update);
    setTodo("");
  }
 
  return (
    <>
        <Navbar />
        <div className=' mx-auto my-5 rounded-2xl rounded-b-none bg-slate-300 w-1/3 min-h-screen'>
        <div>
          <div className='mx-3 font-semibold text-lg'>Add a Task:</div>
          
          <input
           value={Todo}
           onChange={(e)=>{
            setTodo(e.target.value);
          }} type='text'placeholder='Add new task' className='w-4/5 text-black placeholder-slate-500 rounded-3xl mx-3 text-center'/>
          <button 
          value={Todo}
          onClick={handleAdd} 
          className='gap-22 rounded-md  bg-orange-500  p-1'>Add</button>
        </div>
        <div>
          <div className='mx-3 font-semibold text-lg my-7'>Your To-Do:</div>
        </div>
        <div>
          <ol >{
          Todos.map((Todo,index)=>(
            <li key={index} className='my-4'>
              <input type='checkbox'className='mx-4' checked={Todo.completed}
              onChange={() => {
              const updated = Todos.map((item, i) =>
              i === index ? { ...item, completed: !item.completed } : item
    );
    setTodos(updated);
    saveToLs(update);
  }}/>        
              <span className={Todo.completed ?'line-through':''}>
              {Todo.text}
              </span>
            <div className='mx-4'>
              <button 
              onClick={()=>handleEdit(index)} 
              className='rounded-md p-1 bg-green-400 gap-22 mx-2'>Edit</button>
              <button 
              onClick={()=>handleDelete(index)} 
              className='rounded-md  bg-red-500  p-1'>Delete</button>
            </div>
            </li>
          ))
          }</ol>
            
        </div>
        </div>
    </>
  )}


export default App
