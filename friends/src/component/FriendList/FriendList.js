import React from "react";
import "./FriendList.scss";
import { Button } from "reactstrap";

const FriendList = props => {
  return (
    <div className="friend-card">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
      <Button color="danger" onClick={() => props.delete(props.id, props.name)}>
        Delete
      </Button>
    </div>
  );
};

export default FriendList;
