                
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todosArr = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="mt-4 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
      {todosArr.length === 0 ? (
        <p className="text-gray-500 text-center">No todos available.</p>
      ) : (
        todosArr.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b p-3 last:border-none"
          >
            <span className="text-gray-800">{todo.text}</span>
            <button
            // WRONG : onClick={dispatch(removeTodo(todo.id))} WRONG :This immediately calls removeTodo() instead of setting up an event handler.
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default Todos;
