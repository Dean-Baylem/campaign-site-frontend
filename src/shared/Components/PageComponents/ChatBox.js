import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHttpRequest } from "../../../shared/hooks/request-hook";
import { Button } from "@mui/material";
import Modal from "../UIComponents/Modal";
import Comment from "./Comment";
import AddComment from "./AddComment";
import "./ChatBox.css";


const ChatBox = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState("");
  const { error, sendRequest } = useHttpRequest();
  const auth = useContext(AuthContext);

  const handleModalCollapse = () => {
    setShowModal(false);
  };

  const handleShowModal = (commentId) => {
    setCommentToDelete(commentId);
    setShowModal(true);
  };

  const handleDeleteComment = async () => {
    try {
      await sendRequest(
        process.env.REACT_APP_REQUEST_URL + `/comment/delete/${commentToDelete}`,
        "DELETE"
      );
      handleModalCollapse();
      await props.reload();
    } catch (err) {}
  };

  return (
    <React.Fragment>
      {showModal && (
        <Modal
          modalType="confirm-delete-modal"
          modalHeader="Confirm Delete"
          modalFooter={
            <div className="custom-buttons">
              <Button onClick={handleDeleteComment} variant="outlined">
                Delete Comment
              </Button>
              <Button onClick={handleModalCollapse} variant="outlined">
                Cancel
              </Button>
            </div>
          }
        >
          {error && <p>{error}</p>}
          <p>Are you sure you wish to delete the comment?</p>
        </Modal>
      )}
      <div className="chatbox-conatiner">
        <div className="chat-box-body">
          {props.comments &&
            props.comments.map((comment, index) => (
              <div>
              <Comment
                handleShowModal={handleShowModal}
                reload={props.reload}
                comment={comment}
                key={index}
                editable={auth.playerId === comment.player.id ? true : false}
              />
              <hr></hr>
              </div>
            ))}
          <AddComment reload={props.reload} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatBox;
