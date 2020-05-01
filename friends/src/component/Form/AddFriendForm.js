import React, { useState } from "react";

import "./AddFriendForm.scss";
import AxiosWithAuth from "../../Auth/AxiosWithAuth";

import { Alert, Button, Form, FormGroup, Input } from "reactstrap";

const AddFriendForm = () => {
  const [data, setData] = useState({ name: "", age: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    setData({ name: "", age: "", email: "" });
    AxiosWithAuth()
      .post("http://localhost:5000/api/friends", data)
      .then(res => {
        console.log(res.data);
        setMessage(`${data.name} added`);
      });
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="add-friend-header">
        <h2>Add A Friend</h2>
        <span>Enter your freinds name, age, and email</span>
        {message ? <Alert color="success">{message}</Alert> : null}
      </div>
      <div className="add-friend-form">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              value={data.name}
              placeholder="Enter Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="age"
              type="number"
              value={data.age}
              onChange={handleChange}
              placeholder="Enter Age"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </FormGroup>
          <Button type="submit">Add Friend</Button>
        </Form>
      </div>
    </>
  );
};

export default AddFriendForm;
