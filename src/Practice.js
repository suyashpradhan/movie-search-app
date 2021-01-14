import React, { useState } from "react";

/* let Practice = () => {
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
}; */

function Contact(props) {
  return (
    <div className="card">
      <h1> Name: {props.name} </h1> <h3> Designation:{props.designation} </h3>
      <h5> Location: {props.location} </h5>
      <hr />
    </div>
  );
}

function Practice() {
  return (
    <div>
      <Contact
        name="Suyash"
        designation="Full Stack Developer"
        location="Bangalore"
      />
      <Contact
        name="John"
        designation="Front End Engineer"
        location="San Fransisco"
      />
      <Contact name="Jane" designation="UI Engineer" location="Milan" />
    </div>
  );
}

export default Practice;
