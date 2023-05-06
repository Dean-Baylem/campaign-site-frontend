import React from "react";
import "./LogoCard.css";

const LogoCard = props => {
    return (
      <div className="logo-card-container">
        <div className="token-container">
          <img src={props.img} alt="token" />
        </div>
        <div className="card-desc-container">
          <div className="page-subtitle logo-card-title">
            <h5>{props.heading}</h5>
          </div>
          <div className="page-body">
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    );
}

export default LogoCard;