import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./RecordEntry.css";

const RecordEntry = (props) => {
  const [editable, setEditable] = useState(false);
    const { sendRequest } = useHttpRequest();

  const formik = useFormik({
    initialValues: {
      recordTitle: props.recordTitle,
      recordDesc: props.recordDesc
    },
    onSubmit: async (values) => {
      console.log(props.id)
      try {
        const data = await sendRequest(
          `http://localhost:5000/worlds/updaterecord/${props.id}`,
          "PATCH",
          JSON.stringify({
            recordTitle: values.recordTitle,
            recordDesc: values.recordDesc
          }),
          {
            "Content-Type": "application/json",
          }
        );
        await props.reload(true);
        setEditable(false);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="record-entry">
      {editable ? (
        <form onSubmit={formik.handleSubmit} className="record-edit-form">
          <TextField
            fullWidth
            id="recordTitle"
            name="recordTitle"
            label="Title"
            value={formik.values.recordTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.recordTitle && Boolean(formik.errors.recordTitle)
            }
            helperText={formik.touched.recordTitle && formik.errors.recordTitle}
            variant="standard"
          />
          <TextField
            fullWidth
            id="recordDesc"
            name="recordDesc"
            label="Description"
            value={formik.values.recordDesc}
            onChange={formik.handleChange}
            error={
              formik.touched.recordDesc && Boolean(formik.errors.recordDesc)
            }
            helperText={formik.touched.recordDesc && formik.errors.recordDesc}
            variant="standard"
          />
          <div className="custom-buttons">
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setEditable(false);
              }}
            >
              Cancel Changes
            </Button>
          </div>
        </form>
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
