import React, { useState } from "react";
import "../style.css";

let Form = () => {
  let [input, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  /* function inputHandler(event) {
    setInputs({ ...input, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, username, email, password } = input;
    alert(
      `name is ${name} username is ${username} email is ${email} password is ${password} `
    );
  } */

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
    </div>
  );
};

export default Form;
