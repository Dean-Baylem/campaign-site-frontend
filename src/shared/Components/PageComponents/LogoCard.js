import React from "react";
import "./LogoCard.css";

const LogoCard = props => {
    return (
      <div className="logo-card-container">
        <div className="token-container">
          <img
            src={props.img}
            alt="token"
          />
        </div>
        <div className="card-desc-container">
          <h5>{props.heading}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    );
}

export default LogoCard;