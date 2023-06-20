import React from "react";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import "./RecordForm.css";

const RecordForm = (props) => {
  const { sendRequest } = useHttpRequest();

  const formik = useFormik({
    initialValues: {
      recordTitle: props.recordTitle || "",
      recordDesc: props.recordDesc || "",
    },
    onSubmit: async (values) => {
      try {
        await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/worlds/${props.formType}/${props.routeId}`,
          props.requestType,
          JSON.stringify({
            recordTitle: values.recordTitle,
            recordDesc: values.recordDesc,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {
      }
      if (props.reload) {
        await props.reload(true);
        if (props.setEditable) {
          props.setEditable(false);
        }
      }
    },
  });

  return (
    <div className="record-container">
      <form onSubmit={formik.handleSubmit} className="record-form">
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
          error={formik.touched.recordDesc && Boolean(formik.errors.recordDesc)}
          helperText={formik.touched.recordDesc && formik.errors.recordDesc}
          variant="standard"
        />
        <div className="custom-buttons button-list">
          <Button type="submit">Submit</Button>
          {props.closeButton}
        </div>
      </form>
    </div>
  );
};

export default RecordForm;
