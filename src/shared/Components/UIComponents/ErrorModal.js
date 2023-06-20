import React from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";

const ErrorModal = props => {
    return (
      <Modal
        modalHeader="Magic Malfunction!"
        modalFooter={
          <div className="custom-buttons">
            <Button onClick={props.modalToggle}>Close</Button>
          </div>
        }
      >
        <p>{props.error}</p>
      </Modal>
    );
}

export default ErrorModal;