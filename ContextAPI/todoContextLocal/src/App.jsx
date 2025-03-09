import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoUI from '../components/TodoUI'
import TodoForm from '../components/TodoForm'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    // setTodos(todo); this is wrong because it will jzt add this value and dlt all
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updatedTodo = (id,todo) =>{
    setTodos(prev => prev.map((prevTodo)=>
      // (prevTodo.id===id ? todo:prevTodo) or we can write through if-else
    {if (prevTodo.id===id) return todo
      else return prevTodo}
    ))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((ele)=>ele.id!==id))  
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=>(
      prev.map((prevTodo)=>(prevTodo.id ===id ? {...prevTodo,completed: !prevTodo.completed}: prevTodo))
    ))
  }

  useEffect(()=>{
    const list = JSON.parse(localStorage.getItem("key"));
    if(list && list.length > 0){
      setTodos(list)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("key",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoUI todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
