import { useThemeProps } from "@mui/material";
import React from "react";


const BlankCharacterItem = (props) => {

  return (
    <li>
      <div className="inactive-character center">
        <div className="party-token inactive-token" onClick={props.addNew}>
          <img
            src="https://s3.amazonaws.com/files.d20.io/images/153999642/_C8ERri7E3wIZnjo_prMUA/original.png?1596072416"
            alt="blank-token"
          />
        </div>
        <p>
          <strong>Available Slot</strong>
        </p>
        <p>
          <em>Create New Character</em>
        </p>
      </div>
    </li>
  );
};

export default BlankCharacterItem;
