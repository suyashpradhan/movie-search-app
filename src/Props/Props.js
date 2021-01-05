import React, { useState } from "react";
import "../style.css";

function GreetUser() {
  return <h2>Hello, welcome back!</h2>;
}

function GreetGuest() {
  return <h2>Hello, please login!</h2>;
}

function Greeter(props) {
  console.log(props);
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <GreetUser />;
  }

  return <GreetGuest />;
}

export default Greeter;

/* function LoginButton(props) {
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
 */
