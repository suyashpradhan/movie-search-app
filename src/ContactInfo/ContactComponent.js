import React from "react";

function ContactComponent(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.location}</h2>
      <h3>{props.designation}</h3>
      <h3>{props.interest}</h3>
      <h4>{props.socialLink}</h4>
      <h4>{props.langaugesKnown}</h4>
    </div>
  );
}

export default ContactComponent;
