import React from "react";
import { Button } from "@mui/material";
import "./WMIntro.css";

const WMIntro = props => {
    return (
      <div className="selection-container">
        <Button onClick={props.handleStandardClick} className="select-button" variant="contained">
          Standard
        </Button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/477/477103.png?w=826&t=st=1683241177~exp=1683241777~hmac=be1c78eb5cc96620b06aacc41bb9270acacb4061c2ed56007ddc872a22469c84"
          alt="sorcerer"
        />
        <Button onClick={props.handleCustomClick} variant="contained" className="select-button">
          Custom
        </Button>
      </div>
    );
}

export default WMIntro;