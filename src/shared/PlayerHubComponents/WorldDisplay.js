import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import WorldCard from "./WorldCard";

const WorldDisplay = props => {
    return (
      <div className="world-display-container">
        {props.children}
      </div>
    );
}

export default WorldDisplay;