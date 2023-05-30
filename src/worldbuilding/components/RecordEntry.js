import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import Modal from "../../shared/Components/UIComponents/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./RecordEntry.css";
import RecordForm from "./RecordForm";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";

const RecordEntry = (props) => {
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const modalToggle = () => {
    setShowModal(!showModal);
  }

  return (
    <React.Fragment>
      {showModal && (
        <Modal>
          <DeleteModal
            url={`http://localhost:5000/worlds/deleterecord/${props.id}`}
            reload={props.reload}
            modalToggle={modalToggle}
          />
        </Modal>
      )}
      <div className="record-entry">
        {editable ? (
          <RecordForm
            formType="updaterecord"
            recordTitle={props.recordTitle}
            recordDesc={props.recordDesc}
            routeId={props.id}
            requestType="PATCH"
            closeButton={
              <Button
                onClick={() => {
                  setEditable(false);
                }}
              >
                Cancel Changes
              </Button>
            }
            reload={props.reload}
            setEditable={setEditable}
          ></RecordForm>
        ) : (
          <div>
            <div className="record-title page-subtitle">
              <h5>{props.recordTitle}</h5>
              <div className="edit-delete-icons">
                <IconButton
                  onClick={() => {
                    setEditable(!editable);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={modalToggle}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
            <div className="record-body page-body">
              <p>{props.recordDesc}</p>
            </div>
          </div>
        )}
        <hr></hr>
      </div>
    </React.Fragment>
  );
};

export default RecordEntry;