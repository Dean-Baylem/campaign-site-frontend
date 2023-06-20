import React from "react";
import "./NPCCard.css";

const NPCCard = (props) => {
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
      </div>
    </div>
  );
};

export default NPCCard;