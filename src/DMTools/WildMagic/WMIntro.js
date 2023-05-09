import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { Button } from "@mui/material";
import "./WMIntro.css";
import { NavLink } from "react-router-dom";

const WMIntro = props => {

  const auth = useContext(AuthContext);
    return (
      <div className="selection-container">
        <Button
          onClick={props.handleStandardClick}
          className="select-button"
          variant="contained"
          value="roller"
        >
          Standard
        </Button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/477/477103.png?w=826&t=st=1683241177~exp=1683241777~hmac=be1c78eb5cc96620b06aacc41bb9270acacb4061c2ed56007ddc872a22469c84"
          alt="sorcerer"
        />
        {auth.isLoggedIn ? (
          <Button
            onClick={(e) => props.handlePageReset(e.target.value)}
            variant="contained"
            className="select-button"
            value="choose-table"
          >
            Custom
          </Button>
        ) : (
          <Button
            onClick={props.handleCustomClick}
            variant="contained"
            className="select-button"
            sx={{ fontSize: "12px", textDecoration: "none" }}
          >
            <NavLink to="/auth">Log in for custom</NavLink>
          </Button>
        )}
      </div>
    );
}

export default WMIntro;