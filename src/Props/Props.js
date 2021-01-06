import React, { useState } from "react";
import "../style.css";

function GreetUser() {
  return <h2>Hello, welcome back!</h2>;
}

function GreetGuest() {
  return <h2>Hello, please login!</h2>;
}

function Greeter(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <GreetUser />;
  }

  return <GreetGuest />;
}

export default Greeter;
