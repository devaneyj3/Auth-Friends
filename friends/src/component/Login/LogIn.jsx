import React from 'react';
import './LogIn.scss';

function LogIn() {
    return (
        <div className="LogIn">
            <h1>Log in to view content</h1>
        <form>
            <input type='text' name='username' placeholder='Enter your username'/>
            <input type='password' name='password' placeholder='Enter your password'/>
            <input type="submit"/>
        </form>
    </div>
    );
}

export default LogIn;
