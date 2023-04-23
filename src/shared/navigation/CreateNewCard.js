import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./CreateNewCard.css";

const CreateNewCard = props => {
    return (
      <div className="create-new-card">
        <div className="new-item-notification">
          {props.data.length < 5 ? (
            <div className="create-new-body">
              <p>
                {props.data.length} {props.successTitle}
              </p>
              <p>{props.successDesc}</p>
              <Button
                sx={{ margin: "0% 20%" }}
                className="dark-button"
                variant="outlined"
              >
                <NavLink to={props.goto}>{props.type}</NavLink>
              </Button>
            </div>
          ) : (
            <div className="create-new-body">
              <p>{props.failDesc}</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default CreateNewCard;