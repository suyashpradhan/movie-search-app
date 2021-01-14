import React, { useState } from "react";
import "../style.css";

let Form = () => {
  let inputHandler = (e) => {};

  let submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1 className="header">Create an account</h1>
      <br />
      <form id="form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Set a password</label>
          <input
            type="password"
            className="form-control"
            autoComplete="none"
            onChange={inputHandler}
          ></input>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            autoComplete="none"
            onChange={inputHandler}
          ></input>
        </div>
        <br />
        <button className="button" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
