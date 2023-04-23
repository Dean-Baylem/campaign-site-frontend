import React from "react";
import "./SideCard.css";

const SideCard = (props) => {
    return (
      <div className="side-card-container">
        <div className={`side-img-container ${props.cardType}`}>
          <img src={props.imgSrc} alt="card-display" className="card-img" />
        </div>
        <div className="side-card-content">{props.children}</div>
      </div>
    );
}

export default SideCard;