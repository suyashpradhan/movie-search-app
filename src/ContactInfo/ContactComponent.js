import React from "react";

function ContactComponent(props) {
  return (
    <div className="container">
      <h1>{props.info.name}</h1>
      <h1>{props.info.age}</h1>
      <h1>{props.info.location}</h1>
      <h1>{props.info.description}</h1>
      <h1>{props.info.interest.map((singleInterest) => singleInterest)}</h1>
      <h1>{props.info.socialLink.map((social) => social)}</h1>
      <h1>{props.info.langaugesKnown.map((langauges) => langauges)}</h1>
    </div>
  );
}

export default ContactComponent;
