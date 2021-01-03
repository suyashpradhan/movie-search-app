import React from "react";
import "../style.css";

function Calculate({ value }) {
  return <h1>Calculation is {value * value}</h1>;
}

function Calculate2({ value }) {
  return <h1>Calculation is {parseInt(value + value)}</h1>;
}

function Props() {
  return (
    <div>
      <Calculate value="4"></Calculate>
      <Calculate2 value="4"></Calculate2>
    </div>
  );
}

export default Props;
