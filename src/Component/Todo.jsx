import React from "react"



export default function Todo({todo, toggledTodo}) {
    function handleTodo() {
        toggledTodo(todo.id)
        
    }
    return( <>
    <div className="col">
    <div className="row">
    <input type="checkbox"  checked={todo.complete} onChange={handleTodo}/>
    
       <span className="todo"> {todo.name}</span>
       
         </div> <br />
       </div>
        </>
    )
}