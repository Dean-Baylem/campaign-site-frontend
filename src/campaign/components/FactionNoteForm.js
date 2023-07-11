import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import "./FactionNoteForm.css";

const validationSchema = yup.object({
  title: yup
    .string("Enter the title for the note")
    .required("Please provide a title for the note"),
  note: yup
    .string("Please write your note")
    .required("Blank pages not allowed. Please fill out your note."),
});

const FactionNoteForm = (props) => {
  const { sendRequest } = useHttpRequest();
  const auth = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      title: props.title || "",
      note: props.note || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await sendRequest(
          props.url,
          props.requestType,
          JSON.stringify({
            title: values.title,
            note: values.note,
          }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
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
    <div className="faction-note-form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="faction-note-form-inner">
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Note Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title}
            variant="standard"
            sx={{paddingBottom: "1rem"}}
          />
          <TextField
            fullWidth
            multiline
            minRows={4}
            id="note"
            name="note"
            label="Note Contents"
            value={formik.values.note}
            onChange={formik.handleChange}
            error={formik.touched.note && Boolean(formik.errors.note)}
            helperText={formik.touched.note}
            variant="standard"
          />
        </div>
        <div className="custom-buttons button-list">
          <Button type="submit">Submit</Button>
          {props.closeButton}
        </div>
      </form>
    </div>
  );
};

export default FactionNoteForm;