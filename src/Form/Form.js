import React, { useState } from "react";
import "../style.css";

let Form = () => {
  let [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  let [data, setData] = useState([]);

  function inputHandler(e) {
    const { name } = e.target;
    setInputs({ ...inputs, name });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData([...data, inputs]);
  }

  return (
    <div className="container">
      <h1 className="header">Create an account</h1>
      <br />
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Set a password</label>
          <input
            type="password"
            className="form-control"
            autoComplete="none"
            name="password"
            onChange={inputHandler}
          ></input>
        </div>
        <br />
        <button className="button">Submit</button>
        <p></p>
      </form>

      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.username}</h1>
            <h1>{item.email}</h1>
            <h1>{item.password}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
