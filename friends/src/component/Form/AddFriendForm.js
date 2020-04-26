import React, { useState } from "react";

import "./AddFriendForm.scss";
import AxiosWithAuth from "../../Auth/AxiosWithAuth";


const AddFriendForm = () => {
  const [data, setData] = useState({ name: "", age: '', email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({ name: "", age: '', email: "" });
    AxiosWithAuth().post('http://localhost:5000/api/friends', data)
        .then(res => console.log(res.data))
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className='sign-in'>
      <h2>Add A Friend</h2>
      <span>Enter your freinds name, age, and email</span>

      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          onChange={handleChange}
          value={data.name}
          placeholder='Enter Name'
          required
        />
        <input
          name='age'
          type='number'
          value={data.age}
          onChange={handleChange}
          placeholder='Enter Age'
          required
        />
        <input
          name='email'
          type='email'
          value={data.email}
          onChange={handleChange}
          placeholder='Enter Email'
          required
        />
        <input type='submit'/>
      </form>
    </div>
  );
};

export default AddFriendForm;
