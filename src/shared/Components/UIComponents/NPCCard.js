import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./NPCCard.css";

const NPCCard = (props) => {

  const handleClick = (type) => {
    props.modalClickHandler(props.npc, type);
  }

  return (
    <div className="npc-card-container dark-bg card-box-shadow">
      <div className="npc-image-container">
        <img src={props.npc.npcImg} alt={props.npc.name} />
      </div>
      <div className="npc-details-container">
        <div className="page-subtitle character-name">
          <h5 className="center">{props.npc.name}</h5>
        </div>
        <div className="page-body">
          <p className="center">
            <em>{props.npc.species}</em> | <em>{props.npc.occupation}</em>
          </p>
          <p>{props.npc.appearance}</p>
        </div>
      </div>
      <div className="notes-container page-body">
        <h5>Notes</h5>
        <p>
          {props.npc.notes.length > 150
            ? `${props.npc.notes.substring(0, 250)}...`
            : props.npc.notes}
        </p>
        <div className="edit-objective-icons">
          <div>
            <IconButton onClick={() => handleClick("edit")}>
              <EditIcon fontSize="sm" />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => handleClick("delete")}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPCCard;

