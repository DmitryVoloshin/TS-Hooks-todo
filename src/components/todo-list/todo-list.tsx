import React from 'react'
import { ITodo } from '../../interfaces'

import './todo-list.css'

interface TodoListProps {
    todos: ITodo[]
    onToggle(id:number) :void
    onRemove(id:number) :void
}


const TodoList: React.FC<TodoListProps> = ( {todos,onRemove,onToggle} ) =>{

    if(todos.length === 0) {
        return <p >U dont have todo today :(</p>
    }

    const removeHandler = ( event: React.MouseEvent, id:number ) =>{
        event.preventDefault()

        onRemove(id)
    }


    return (
        <ul className="todo-list_block">
            {todos.map(todo =>{
                const classes = ['todo-list_item']
                if(todo.completed === true){
                    classes.push('completed')
                }


                return(
                    <li className={classes.join('')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}
                            onChange={onToggle.bind(null,todo.id)}
                            />
                            <span>
                                {todo.title}
                            </span>
                            <button onClick={event =>removeHandler(event,todo.id)}>delete</button>
                        </label>
                    </li>
                )
            })}
            
        </ul>
    )
}

export default TodoList
