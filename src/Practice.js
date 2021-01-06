import React, { useState } from "react";

let Practice = () => {
  let [input, setInput] = useState("");
  let [fontSize, setFontSize] = useState(20);

  let changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Increase Font Size</h1>
      <input onChange={changeHandler} placeholder="Enter Text"></input>
      <br />
      <br />
      <button onClick={() => setFontSize(fontSize + 20)}>Increment + </button>
      <br /> <br />
      <button onClick={() => setFontSize(fontSize - 10)}>Decrement -</button>
      <p style={{ fontSize: fontSize }}>{input}</p>
    </div>
  );
};

export default Practice;
