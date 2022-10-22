import React, { useState, useRef, useEffect } from "react"
import './App.css';
import TodoList from "./Component/TodoList";


import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = "todoApp.todos"



function App() {
  const [todos, SetTodos] = useState([])
  const todoNameRef = useRef()
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
    if (storedTodos) SetTodos(storedTodos)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  function toggledTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    SetTodos(newTodos)

  }
  function clearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    SetTodos(newTodos)

  }
  function handle(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    SetTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
 }
  return (
    <div className="container">
      <div className="header">
        <h1>
          TODO
          </h1>
          <span className="moon-sun">
            <img src="images/icon-sun.svg" alt="" />
          </span>
         </div>
       <div className="App">
          <input className="input"ref={todoNameRef} type="text"placeholder="  Create a new todo...." /> <br /> 
          <button className="add" onClick={handle}>Add</button> <br />  
</div>

          <TodoList todos={todos} toggledTodo={toggledTodo} />
          <div className="down">
          <span className="left" >{todos.filter(todo => !todo.complete).length} items left    </span>
               <span className="all"> All</span>   <span className="active"> active completed </span>
            <button className="clear" onClick={clearTodo}>Clear completed</button> 
           </div>


<div>
           <span className="sm-mob" >{todos.filter(todo => !todo.complete).length} items left  <button className="clear" onClick={clearTodo}>Clear completed</button> </span>
            <span className="mobile"><strong className="strong">All </strong> active completed </span>
</div>
    </div>
  );
}

export default App;
