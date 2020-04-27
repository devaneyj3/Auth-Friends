import React from "react";
import "./FriendList.scss";

const FriendList = props => {
  return (
    <div key={props.id} className="friend-card">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
      <button>Delete</button>
    </div>
  );
};

export default FriendList;
