import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./WorldCard.css";


const WorldCard = props => {

    return (
      <div
        className="world-card"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props.image})`,
        }}
      >
        <div className="world-card-title">
          <h3>{props.worldName}</h3>
        </div>
        <div className="world-card-nav">
          <Button
            sx={{ margin: "0% 20%" }}
            className="dark-button"
            variant="outlined"
          >
            <NavLink to={`/world/${props.worldId}`}>View World</NavLink>
          </Button>
          <Button
            sx={{ margin: "0% 20%" }}
            className="dark-button"
            variant="outlined"
          >
            <NavLink>Continue Building</NavLink>
          </Button>
        </div>
      </div>
    );
}

export default WorldCard;