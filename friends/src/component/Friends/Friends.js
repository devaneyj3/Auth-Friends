import React, { useEffect, useState } from "react";
import "./Friends.scss";
import AxiosWithAuth from "../../Auth/AxiosWithAuth";
import FriendList from "../FriendList/FriendList";

const Friends = props => {
  const [friends, setFriends] = useState([]);

  const Delete = id => {
    AxiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriends([...friends]);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    AxiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.error(err));
  }, [friends]);
  return (
    <>
      <section className="friends-heading">
        <h3>Wow! People like you</h3>
      </section>
      <div className="cards">
        {friends.map(friend => {
          return (
            <FriendList
              id={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              delete={Delete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Friends;
