import './todo.css'
import Todolist from '../todo-list/Todolist'
import Todocreate from '../Todocreate/Todocreate'
import { useState } from 'react'
const Todo = ()=>{
  const [getTodos, setTodos] =useState([
    {id:1 , title :'Eat'},
    {id:2 , title :'Sleep'},
    {id:3 , title :'Code'}

  ])

const eventCreateTodo = (todo)=>{

setTodos(getTodos.concat(todo))

}

  return(
    <div>
        <h3>to do list</h3>
        <Todocreate onCreateTodo={eventCreateTodo}/>
        <Todolist datatodo={getTodos}/>
    </div>
  )

}

export default Todo