import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.scss';

const LogIn = (props) => {
    const [ data, setData ] = useState({username: '', password: ''});
    const [ message, setMessage ] = useState('');

    const handleInputChange = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    };

    const clearForm = () => {
        setData({username: '', password: ''})
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', data)
            .then( res => {
                localStorage.setItem('token', res.data.payload)
                setMessage('You are logged in. Redirecting will take a few seconds')
                setTimeout(() => {
                    props.history.push('/friends')
                }, 2000); 
            })
            .catch(err=> setMessage(err.response.data.error))
            clearForm();
        }
        return (
        <div className="LogIn">
            {message ? <p>{message}</p>: null}
        <form onSubmit={submitForm}>
            <input type='text' 
                name='username'
                placeholder='Enter your username' 
                onChange={handleInputChange} 
                value={data.username}/>
            <input type='password' 
                name='password'
                placeholder='Enter your password' 
                onChange={handleInputChange} 
                value={data.password}/>
            <input type="submit"/>
        </form>
    </div>
    );
}

export default LogIn;
