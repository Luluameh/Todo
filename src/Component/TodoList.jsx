import React from "react"
import Todo from "./Todo"

export default function TodoList({ todos, toggledTodo }) {
    
    return (
        <>
         {
            todos.map(todo =>{
                return <Todo key={todo.id} toggledTodo={toggledTodo} todo={todo} />
            })
         } 
        </>
    )

}