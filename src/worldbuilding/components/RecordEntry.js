import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./RecordEntry.css";
import RecordForm from "./RecordForm";

const RecordEntry = (props) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="record-entry">
      {editable ? (
        <RecordForm 
        formType="updaterecord"
        recordTitle={props.recordTitle}
        recordDesc={props.recordDesc}
        routeId={props.id}
        requestType="PATCH"
        closeButton={<Button
              onClick={() => {
                setEditable(false);
              }}
            >Cancel Changes</Button>}
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
              <IconButton>
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
  );
};

export default RecordEntry;