import React, { useEffect } from 'react';
import axios from 'axios';
import './Friends.scss';

const Friends = (props) => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
            .then(res => console.log(res.data))
            .catch( err => console.error( err))
    }, [])
        return (
        <div className="Friends">
            <h1>Here is your friends list</h1>
            
    </div>
    );
}

export default Friends;
