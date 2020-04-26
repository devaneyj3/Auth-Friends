import React, { useEffect, useState } from 'react';
import './Friends.scss';
import AxiosWithAuth from '../../Auth/AxiosWithAuth';
import FriendList from '../FriendList/FriendList';

const Friends = (props) => {
    const [friends, setFriends ] = useState([])

    useEffect(() => {
        AxiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => setFriends(res.data))
            .catch( err => console.error( err))
    }, [])
        return (
        <div className="Friends">
            <h1>Here is your friends list</h1>
            {friends.map(friend => {
                return (
                    <FriendList
                        id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        />
                )
            })}
            
    </div>
    );
}

export default Friends;
