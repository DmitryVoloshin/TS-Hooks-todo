import React from 'react';

const TodoForm: React.FC = ( ) =>{
    return(
        <div className="todo-form_block">
            <input type="text" id="title"/>
            <label htmlFor="title" className="active">
                What need to do today?
            </label>
        </div>
    )
}

export default TodoForm