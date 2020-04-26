import React from 'react';
import './App.scss';
import LogIn from '../component/Login/LogIn';
import Friends from '../component/Friends/Friends';
import Nav from '../component/Nav/Nav';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';
import AddFriendForm from '../component/Form/AddFriendForm';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Route path='/login' component={LogIn}/>
      {/* If I render LogIn I can't use useState */}
      <Redirect from='/' to='/login'/>
      <PrivateRoute exact path='/friends' component={Friends}/>
      <PrivateRoute exact path='/make_new_friends' component={AddFriendForm}/>
    </div>
  );
}

export default App;
