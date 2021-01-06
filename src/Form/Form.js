import React, { useState } from "react";
import "../style.css";

let Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [select, setSelect] = useState("lawyer");

  let changeHandler = (event) => {
    setName(event.target.value);
  };

  let textAreaHandler = (event) => {
    setAddress(event.target.value);
  };

  let selectHandler = (event) => {
    setSelect(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, address, select);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        onChange={changeHandler}
        type="text"
        name="name"
        value={name}
      ></input>
      <br />
      <br />
      <textarea onChange={textAreaHandler} value={address}></textarea>
      <br />
      <br />
      <select value={select} onChange={selectHandler}>
        <option value="developer">Developer</option>
        <option value="lawyer">Lawyer</option>
        <option value="sales-manager">Sales Manager</option>
      </select>
      <input type="submit"></input>
    </form>
  );
};

export default Form;
