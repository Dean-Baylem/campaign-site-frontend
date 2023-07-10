import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ActiveCharacterDisplay.css";

const ActiveCharacterDisplay = (props) => {
  const handleEditClick = () => {
    props.selectToEdit(props.character);
  };

  const handleDeleteClick = () => {
    props.selectToDelete(props.character);
  };

  return (
    <div className="character-box">
      <div className="character-display-container page-body dark-bg">
        <div className="party-token current-token">
          <img
            src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
            alt="character"
          />
        </div>
        <p className="current-name">
          Name: <strong>{props.character.name}</strong>
        </p>
        <p className="current-species">
          Species: <strong>{props.character.species}</strong>
        </p>
        <p className="current-class">
          Class: <em>{props.character.playerClass}</em>
        </p>
        {props.character.subclass && (
          <p className="current-subclass">
            Subclass: <em>{props.character.subclass}</em>
          </p>
        )}
        <div className="character-desc">
          {/* Change the below after update to DB */}
          <p>{props.character.appearance}</p>
        </div>
      </div>
      <div className="edit-icons-bottom">
        <IconButton onClick={handleEditClick}>
          <EditIcon fontSize="sm" />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default ActiveCharacterDisplay;
