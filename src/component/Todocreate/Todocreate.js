import '../Todocreate/Todocreate.css'
import { useState } from 'react'

const Todocreate =(props)=>{
    const[getInputTodo , setInputTodo]=useState('')



    const HandleSubmit = (event) =>{
        event.preventDefault()
        const newtodo = {
            id:Math.floor(Math.random*100)+1,
            title: getInputTodo
        }
        props.onCreateTodo(newtodo)
        setInputTodo('')
    }

    const HandleInputTodo = (event)=>{
     setInputTodo(event.target.value)


    }

    return(

        <form className='todo-form' onSubmit={HandleSubmit}>
            <input type="text" value={getInputTodo}onChange={HandleInputTodo}></input>
            <button type='submit'>Add</button>
        </form>
    )
}
export default Todocreate;