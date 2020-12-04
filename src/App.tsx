import React,{useState} from 'react';

import './App.css';
import Header from './components/header/header';
import TodoForm from './components/todo-form/todo-form';
import TodoList from './components/todo-list/todo-list';
import { ITodo } from './interfaces';


const App: React.FC = ( ) =>{

  const [todos,setTodos] = useState<ITodo[]>([])

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
      <Header/>
      <div className="">
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHanlder}/>
      </div>
    </>
  )
}

export default App;
