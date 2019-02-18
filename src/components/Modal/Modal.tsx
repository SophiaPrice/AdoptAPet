// https://reactjs.org/docs/portals.html
import { Component } from "react";
import { createPortal } from "react-dom";

class Modal extends Component {
  modalRoot = document.getElementById("modal");
  el = document.createElement("div");

  public componentDidMount() {
    if (this.modalRoot) this.modalRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
    // Prevents memory leaks
    if (this.modalRoot) this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;