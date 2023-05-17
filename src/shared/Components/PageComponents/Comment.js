import React, { useState } from "react";
import { useHttpRequest } from "../../../shared/hooks/request-hook";
import { useFormik } from "formik";
import { IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Comment.css";
import ErrorDisplay from "./ErrorDisplay";

const Comment = (props) => {
  const [editComment, setEditComment] = useState(false);
  const { error, sendRequest } = useHttpRequest();

  const handleEditSwitch = () => {
    setEditComment(!editComment);
  };

  const handleShowModal = () => {
    props.handleShowModal(props.comment.id);
  };

  const formik = useFormik({
    initialValues: {
      body: props.comment.body,
    },
    onSubmit: async (values) => {
      try {
        await sendRequest(
          `http://localhost:5000/comment/update/${props.comment.id}`,
          "PATCH",
          JSON.stringify({
            body: values.body,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log("Comment Edited.");
        props.reload(true);
        setEditComment(false);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <React.Fragment>
      <div key={props.key} className="chat-card-container">
        <div className="avatar-container">
          <img src="#" alt="Avatar" />
        </div>
        <div className="comment-box">
          <div className="page-subtitle">
            <h5>{props.comment.player.playername}</h5>
          </div>
          <div className="page-body">
            {!editComment && <p>{props.comment.body}</p>}
            {error && <ErrorDisplay error={error} />}
            {editComment && (
              <form
                className="edit-comment-field custom-buttons"
                onSubmit={formik.handleSubmit}
              >
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
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="outlined"
                  type="submit"
                >
                  Save changes
                </Button>
              </form>
            )}
          </div>
          {props.editable && (
            <div className="edit-delete-icons">
              <IconButton onClick={handleEditSwitch}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={handleShowModal}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
