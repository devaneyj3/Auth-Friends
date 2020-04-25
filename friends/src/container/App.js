import React from 'react';
import './App.scss';
import LogIn from '../component/Login/LogIn';
import Friends from '../component/Friends/Friends';
import Nav from '../component/Nav/Nav';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Route path='/login' component={LogIn}/>
      {/* If I render LogIn I can't use useState */}
      <Redirect from='/' to='/login'/>
      <PrivateRoute exact path='/friends' component={Friends}/>

    </div>
  );
}

export default App;
