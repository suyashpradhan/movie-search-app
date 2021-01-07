import React from "react";
import "../style.css";

const alertName = (name) => {
  alert("hello " + name);
};

function PersonInfo(props) {
  return (
    <div>
      <h2>hello {props.name}</h2>
      <h3>age {props.age}</h3>
      <button onClick={() => props.alertName("suyash")}>Alert my name</button>
      <hr />
    </div>
  );
}

function Prop() {
  return (
    <div>
      <PersonInfo name="Suyash" age="24" alertName={alertName} />
    </div>
  );
}

export default Prop;
