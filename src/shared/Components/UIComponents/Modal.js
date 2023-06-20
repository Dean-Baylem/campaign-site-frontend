import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.modalType} ${props.hide && "hide"}`}>
      <header className="modal-header page-subtitle">
        <h3>{props.modalHeader}</h3>
      </header>
      <div className="modal-body">
        <div className="modal-content page-body">{props.children}</div>
        <footer className="modal-footer">{props.modalFooter}</footer>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {!props.secondary && <Backdrop />}
      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
