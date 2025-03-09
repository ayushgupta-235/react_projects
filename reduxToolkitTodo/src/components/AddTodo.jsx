import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
//dispatch takes reducers to change in store
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center gap-2 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter a task..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}
