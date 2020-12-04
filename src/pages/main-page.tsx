import React, {useState,useEffect} from 'react'
import TodoList from '../components/todo-list/todo-list'
import TodoForm from '../components/todo-form/todo-form'

import {ITodo} from '../interfaces'

export const MainPage: React.FC = () =>{

    const [todos,setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
    },[])
  
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
  
  
    const addHandler = (title:string ) =>{
        console.log('Add new todo',title)
        const newTodo: ITodo = {
          title: title,
          id: Date.now(),
          completed :false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev =>[newTodo,...prev])
    }
  
    const toggleHandler = ( id:number ) =>{
      setTodos(prev => prev.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      }))
    }
  
    const removeHanlder = ( id:number ) =>{
     const shouldRemove = window.confirm('are u sure,u want to delete?')
        if(shouldRemove){
          setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
  

    return(
        <>
           <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} 
          onToggle={toggleHandler} 
          onRemove={removeHanlder}
          />
        </>
    )
}

