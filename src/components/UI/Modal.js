import React from "react";
import ReactDOM from "react-dom";

import cssClasses from "./Modal.module.css";

function ModalOverlay(props) {
  return (
    <div className={cssClasses.modal}>
      <div className={cssClasses.content}>{props.children}</div>
    </div>
  );
}

function Backdrop(props) {
  return <div className={cssClasses.backdrop} onClick={props.onClick}></div>;
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
