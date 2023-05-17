import React, { useState, useContext } from "react";
import { useHttpRequest } from "../../../shared/hooks/request-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import { WorldContext } from "../../../shared/context/WorldContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import ErrorDisplay from "./ErrorDisplay";

const AddComment = (props) => {
  const auth = useContext(AuthContext);
  const worldManager = useContext(WorldContext);
  const { error, sendRequest } = useHttpRequest();

  const [addComment, setAddComment] = useState(false);

  const handleSwitch = () => {
    setAddComment(!addComment);
  };

  const validationSchema = yup.object({
    body: yup
      .string("Enter your comment")
      .required("Please enter your comment"),
  });

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await sendRequest(
          `http://localhost:5000/comment/new-world-comment/${auth.playerId}/${worldManager.currentWorld.id}`,
          "POST",
          JSON.stringify({
            body: values.body,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log("Comment added.");
        props.reload(true);
        setAddComment(false);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="add-comment-form">
      <form className="add-comment-form" onSubmit={formik.handleSubmit}>
        {addComment && (
          <TextField
            fullWidth
            id="body"
            name="body"
            label="Add Comment"
            value={formik.values.body}
            onChange={formik.handleChange}
            error={formik.touched.body && Boolean(formik.errors.email)}
            helperText={formik.touched.body && formik.errors.body}
          />
        )}
        {error && <ErrorDisplay error={error} />}
        <div className="custom-buttons">
          {addComment && (
            <Button sx={{ margin: "1rem" }} variant="outlined" type="submit">
              Add Comment
            </Button>
          )}
          <Button
            sx={{ margin: "1rem" }}
            onClick={handleSwitch}
            className="custom-buttons"
            variant="outlined"
          >
            {addComment ? "Cancel Comment" : "Add Comment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
