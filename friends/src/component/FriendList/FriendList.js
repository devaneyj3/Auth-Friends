import React from "react";
import "./FriendList.scss";

const FriendList = props => {
  return (
    <div className="friend-card">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
      <button onClick={() => props.delete(props.id, props.name)}>Delete</button>
    </div>
  );
};

export default FriendList;
