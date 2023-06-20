import React from "react";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import "./SubjectForm.css"

const SubjectForm = (props) => {
  const { sendRequest } = useHttpRequest();

  const formik = useFormik({
    initialValues: {
      subjectName: props.subjectName || "",
      subjectDesc: props.subjectDesc || "",
    },
    onSubmit: async (values) => {
      try {
        await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/worlds/${props.formType}/${props.routeId}`,
          props.requestType,
          JSON.stringify({
            subjectType: props.subjectType,
            subjectName: values.subjectName,
            cardImg: "",
            subjectDesc: values.subjectDesc,
            world: props.worldId,
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
          props.setEditable();
        }
      }
    },
  });

  return (
    <div className="subject-form-container">
      <form onSubmit={formik.handleSubmit} className="record-form">
        <TextField
          fullWidth
          id="subjectName"
          name="subjectName"
          label="Subject Name"
          value={formik.values.subjectName}
          onChange={formik.handleChange}
          onError={
            formik.touched.subjectName && Boolean(formik.errors.subjectName)
          }
          helperText={formik.touched.subjectName && formik.errors.subjectName}
          variant="standard"
        />
        <TextField
          fullWidth
          id="subjectDesc"
          name="subjectDesc"
          label="Description"
          value={formik.values.subjectDesc}
          onChange={formik.handleChange}
          onError={
            formik.touched.subjectDesc && Boolean(formik.errors.subjectDesc)
          }
          helperText={formik.touched.subjectDesc && formik.errors.subjectDesc}
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

export default SubjectForm;