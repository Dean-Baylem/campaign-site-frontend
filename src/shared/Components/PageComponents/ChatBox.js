import React from "react";
import { Button } from "@mui/material";
import "./ChatBox.css";

const ChatBox = props => {
    return (
      <div className="chatbox-conatiner">
        <div className="chat-box-header">
          <p>Number of Comments</p>
          <Button
            sx={{ margin: "0% 5%" }}
            onClick={props.handleSwitch}
            className="comment-button"
            variant="outlined"
          >
            Add Comment
          </Button>
        </div>
        <div className="chat-box-body">
          <div className="chat-card-container">
            <div className="avatar-container">
              <img src="#" alt="Avatar" />
            </div>
            <div className="comment-box">
              <div className="commenter">
                <h5>Username</h5>
              </div>
              <div className="comment">
                <p>Thiis is a dummy comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChatBox;