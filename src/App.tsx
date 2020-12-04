import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import { AboutPage } from './pages/about-page';
import { MainPage } from './pages/main-page';


const App: React.FC = ( ) =>{

  return(
    <BrowserRouter>
      <Header/>
     
        <Switch>
          <Route component={MainPage} path="/" exact/>
          <Route component={AboutPage} path="/About"/>
        </Switch>
  
    </BrowserRouter>
  )
};

export default App;
