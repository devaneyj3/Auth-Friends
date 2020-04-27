import React, { useState } from "react";
import axios from "axios";
import "./LogIn.scss";

import { Button, Alert, Form, FormGroup, Input, Label } from "reactstrap";

const LogIn = props => {
  const [data, setData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setData({ username: "", password: "" });
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setMessage("You are logged in. Redirecting will take a few seconds");
        setTimeout(() => {
          props.history.push("/friends");
        }, 2000);
      })
      .catch(err => setMessage(err.response.data.error));
    clearForm();
  };
  return (
    <div className="LogIn">
      <Form onSubmit={submitForm}>
        <h1>Sign In</h1>
        {message ? (
          <Alert color={localStorage.getItem("token") ? "sucess" : "danger"}>
            You are not allowed to enter.
          </Alert>
        ) : null}
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Enter your username"
            onChange={handleInputChange}
            value={data.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={data.password}
          />
        </FormGroup>
        <Button color="success" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
