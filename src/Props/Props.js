import React from "react";
import "../style.css";

function Calculate({ value }) {
  return <h1>Calculation is {value * value}</h1>;
}

function Props() {
  return <Calculate value="4"></Calculate>;
}

export default Props;
