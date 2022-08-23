import './todo-list.css'


const Todolist = (props) => {

    return (
        <ul>
            {

                props.datatodo.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                })

            }


        </ul>
    )

}

export default Todolist