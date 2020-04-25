import React from 'react';
import './App.scss';
import LogIn from '../component/Login/LogIn';
import { Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Route path='/login' component={LogIn}/>
      {/* If I render LogIn I can't use useState */}
      <Redirect from='/' to='/login'/>
    </div>
  );
}

export default App;
