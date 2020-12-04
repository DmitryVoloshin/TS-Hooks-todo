import React,{useState} from 'react';

import './App.css';
import Header from './components/header/header';
import TodoForm from './components/todo-form/todo-form';

const App: React.FC = ( ) =>{

  const [todos,setTodos ] = useState([])

  const addHandler = (title:string ) =>{
      console.log('Add new todo',title)
  }

  return(
    <>
      <Header/>
      <div className="">
          <TodoForm onAdd={addHandler}/>
      </div>
    </>
  )
}

export default App;
