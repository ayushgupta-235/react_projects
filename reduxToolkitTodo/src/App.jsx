import React from "react";
import TodoForm from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Redux Toolkit Todo App</h1>
      <TodoForm />
      <Todos />
    </div>
  </Provider>
  )
}

export default App
