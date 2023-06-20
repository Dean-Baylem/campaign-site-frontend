import React from "react";
import { useHttpRequest } from "../../hooks/request-hook";
import { Button, Modal } from "@mui/material";

const DeleteModal = (props) => {
  const { error, sendRequest } = useHttpRequest();

  const handleDelete = async () => {
    try {
      await sendRequest(props.url, "DELETE");
      props.modalToggle();
      await props.reload(true);
      if (props.resetDisplay) {
        await props.resetDisplay();
      }
    } catch (err) {}
  };

  return (
    <div className="delete-modal-container">
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>Are you sure you wish to delete this?</p>
          <div className="custom-buttons button-list">
            <Button onClick={handleDelete} variant="outlined">
              Delete
            </Button>
            <Button onClick={props.modalToggle} variant="outlined">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
