import React from "react";
import "./SideCard.css";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.link);
  }

    return (
      <ButtonBase sx={{width: "100%"}} onClick={handleClick} disabled={!props.clickable && true}>
        <div className="side-card-container">
          <div className={`side-img-container ${props.cardType}`}>
            <img src={props.imgSrc} alt="card-display" className="card-img" />
          </div>
          <div
            className={
              props.cardType === "top-side"
                ? "side-card-content full-bottom"
                : "side-card-content"
            }
          >
            {props.children}
          </div>
        </div>
      </ButtonBase>
    );
}

export default SideCard;