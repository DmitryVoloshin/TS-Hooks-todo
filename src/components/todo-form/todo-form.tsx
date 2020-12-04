import React,{useState} from 'react';

import './todo-form.css'

interface TodoFormProps{
    onAdd(title:string): void;

}


const TodoForm: React.FC<TodoFormProps> = (props) =>{

    const [ title , setTitle] = useState<string>('');

    const changeHandler = ( event: React.ChangeEvent<HTMLInputElement> ) =>{
        setTitle(event.target.value)
    }
    const keyPressHandler = ( event: React.KeyboardEvent) =>{
        if(event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }
   

    return(
        <div className="todo-form_block">
              <label htmlFor="title" className="active">
                What need to do today?
            </label>
            <input 
                onChange={changeHandler}
                value={title} 
                onKeyPress={keyPressHandler}
                type="text" 
                id="title" 
                placeholder="what to do today?"
            />
        </div>
    )
}

export default TodoForm