// https://reactjs.org/docs/portals.html
import { Component } from "react";
import { createPortal } from "react-dom";

class Modal extends Component {
  componentDidMount() {
    this.modalRoot = document.getElementById("modal");
    this.el = document.createElement("div");
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Prevents memory leaks
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
