import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ActiveCharacterDisplay.css";

const ActiveCharacterDisplay = (props) => {

  const handleEditClick = () => {
    props.selectToEdit(props.character)
  }

  const handleDeleteClick = () => {
    props.selectToDelete(props.character)
  }

  return (
    <div className="character-box">
      <div className="character-display-container page-body light-bg">
        <div className="party-token">
          <img
            src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
            alt="character"
          />
        </div>
        <div className="">
          <div className="character-details">
            <p>
              Name: <strong>{props.character.name}</strong>
            </p>
            <p>
              Species: <strong>{props.character.species}</strong>
            </p>
          </div>
          <div className="character-details">
            <p>
              Class: <em>{props.character.playerClass}</em>
            </p>
            {props.character.subclass && (
              <p>
                Subclass: <em>{props.character.subclass}</em>
              </p>
            )}
          </div>
          <div className="character-desc">
            {/* Change the below after update to DB */}
            <p>
              {props.character.appearance}
            </p>
          </div>
        </div>
        <div className="edit-icons-bottom">
          <IconButton onClick={handleEditClick}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ActiveCharacterDisplay;
