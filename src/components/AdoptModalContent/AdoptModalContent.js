import React from "react";

const AdoptModalContent = props => (
  <>
    <h1>Would you like to adopt {props.name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Cancel</button>
      <button onClick={props.toggleModal}>Yes!</button>
    </div>
  </>
);

export default AdoptModalContent;
