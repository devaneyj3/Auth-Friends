import React from 'react';
import './App.scss';
import LogIn from '../component/Login/LogIn';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/login' render={LogIn}/>
      <Redirect from='/' to='/login'/>
    </div>
  );
}

export default App;
