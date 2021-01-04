import React, { useState } from "react";
import Greeter from "./Greetings.js";
import "../style.css";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function LoginController() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Greeter isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleClick} />
      ) : (
        <LoginButton onClick={handleClick} />
      )}
    </div>
  );
}

export default LoginController;
