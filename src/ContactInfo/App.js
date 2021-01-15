import React from "react";
import Data from "./Data";
import ContactComponent from "./ContactComponent";
import "../style.css";

function App() {
  let component = Data.map((item) => (
    <ContactComponent key={item.id} info={item} />
  ));
  return <div>{component}</div>;

  /* let component = Data.map((item) => {
    return (
      <div className="container" key={item.id}>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        <h1>{item.location}</h1>
        <h1>{item.designation}</h1>
      </div>
    );
  });

  return <div>{component}</div>; */
}
export default App;
