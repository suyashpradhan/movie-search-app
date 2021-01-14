import React from "react";
import Data from "./Data";
import ContactComponent from "./ContactComponent";
import "../style.css";

function App() {
  let component = Data.map((item) => (
    <ContactComponent
      key={item.id}
      name={item.name}
      age={item.age}
      location={item.location}
      designation={item.designation}
      interest={item.interest.map((singleInterest) => singleInterest)}
      socialLink={item.socialLink.map((links) => links)}
      langaugesKnown={item.langaugesKnown.map((langauge) => langauge)}
    />
  ));

  return <div>{component}</div>;
}

export default App;
