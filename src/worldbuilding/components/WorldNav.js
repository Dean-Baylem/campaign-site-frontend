import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./WorldNav.css";

const WorldNav = props => {
    return (
      <div className="world-nav">
        <Button
          sx={{ margin: "0% 5%" }}
          onClick={props.handleSwitch}
          className="world-button"
          variant="outlined"
        >
          <NavLink to={"/world/" + props.worldId + "/settings"}>
            Settings
          </NavLink>
        </Button>
        <Button
          sx={{ margin: "0% 5%" }}
          onClick={props.handleSwitch}
          className="world-button"
          variant="outlined"
        >
          Edit
        </Button>
      </div>
    );
}

export default WorldNav;