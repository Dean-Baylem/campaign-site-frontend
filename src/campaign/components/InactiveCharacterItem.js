import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const InactiveCharacterItem = props => {

    const handleClick = () => {
        props.setEdit(props.character);
    }

    const handleDeleteClick = () => {
        props.setDelete(props.character)
    }

    return (
      <li>
        <div className="inactive-character center">
          <div className="party-token inactive-token" onClick={handleClick}>
            <img
              src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
              alt="party-token"
            />
          </div>
          <p>
            <strong>{props.character.name}</strong>
          </p>
          <p>
            <em>{props.character.species}</em>
          </p>
          <p>
            <em>{props.character.class}</em>
          </p>
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </li>
    );
}

export default InactiveCharacterItem;