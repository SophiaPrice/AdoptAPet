import React, { Component } from "react";

class Pet extends Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "props.name"),
      React.createElement("h2", {}, "props.animal"),
      React.createElement("h2", {}, "props.breed")
      // React.createElement("h1", {}, props.name),
      // React.createElement("h2", {}, props.animal),
      // React.createElement("h2", {}, props.breed)
    ]);
  }
}

export default Pet;
