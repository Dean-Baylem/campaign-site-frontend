import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import "./ObjectiveForm.css"

const ObjectiveForm = (props) => {
  
  const { sendRequest } = useHttpRequest();

  const formik = useFormik({
    initialValues: {
      objectiveTitle: props.objectiveTitle || "",
      objectiveDesc: props.objectiveDesc || "",
      main: props.main || false,
      completed: props.completed || false,
      successful: props.successful || false,
    },
    onSubmit: async (values) => {
      try {
        await sendRequest(
          props.url,
          props.requestType,
          JSON.stringify({
            objectiveTitle: values.objectiveTitle,
            objectiveDesc: values.objectiveDesc,
            main: values.main,
            completed: values.completed,
            successful: values.successful,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {}
      if (props.reload) {
        await props.reload(true);
      }
      if (props.setEditable) {
        props.setEditable(false);
      }
    },
  });

  return (
    <div className="objective-form-container">
      <form onSubmit={formik.handleSubmit} className="objective-form">
        <div className="obj-row">
          <TextField
            id="objectiveTitle"
            name="objectiveTitle"
            label="Title"
            value={formik.values.objectiveTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.objectiveTitle &&
              Boolean(formik.errors.objectiveTitle)
            }
            helperText={
              formik.touched.objectiveTitle && formik.errors.objectiveTitle
            }
            variant="standard"
            fullWidth
          />
        </div>
        <div className="obj-row">
          <FormControlLabel
            control={<Checkbox checked={formik.values.completed} />}
            label="Completed?"
            name="completed"
            id="completed"
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={formik.values.successful} />}
            label="Successful?"
            name="successful"
            id="successful"
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={formik.values.main} />}
            label="Main Objective?"
            name="main"
            id="main"
            onChange={formik.handleChange}
          />
        </div>
        <div className="obj-row">
          <TextField
            id="objectiveDesc"
            name="objectiveDesc"
            label="Description"
            value={formik.values.objectiveDesc}
            onChange={formik.handleChange}
            error={
              formik.touched.objectiveDesc &&
              Boolean(formik.errors.objectiveDesc)
            }
            helperText={
              formik.touched.objectiveDesc && formik.errors.objectiveDesc
            }
            variant="standard"
            fullWidth
            multiline
            minRows={4}
          />
        </div>
        <div className="button-list custom-buttons">
          <Button type="submit">Submit</Button>
          {props.closeButton}
        </div>
      </form>
    </div>
  );
};

export default ObjectiveForm;
