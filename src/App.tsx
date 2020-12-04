import React from 'react';

import './App.css';
import Header from './components/header/header';
import TodoForm from './components/todo-form/todo-form';

const App: React.FC = ( ) =>{
  return(
    <>
      <Header/>
      <div className="">
          <TodoForm/>
      </div>
    </>
  )
}

export default App;
