import React from 'react'
import Form from './Form';
import { useState } from "react";

function List() {
  const [todos, settodo] = useState([])
  const addToDo = (todo) => {
    const TodoCopy = [...todos]
    TodoCopy.push(todo)
    settodo(TodoCopy)
  }

  const marksascomplted = (name) => {
    const idx = todos.findIndex(todo => todo.name === name)
    const todocopy = [...todos];
    todocopy[idx].completed = !todocopy[idx].completed;
    settodo(todocopy)
  }

  return (
    <div>

      <div>
        {
          todos.map((todo) => {
            return <p key={todo.name} onClick={() => marksascomplted(todo.name)} className={todo.completed ? "strike" : ""} >{todo.name}
              {todo.name} </p>
          })
        }
      </div>

      <Form addToDoCallback={addToDo} ></Form>
    </div >
  )
}

export default List