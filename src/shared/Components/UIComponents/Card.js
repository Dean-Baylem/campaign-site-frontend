import React from "react";
import "./Card.css";

const Card = props => {
    return (
      <div className="top-card-container">
        <div className="top-img-container">
          <img className="card-img" src={props.imgSrc} alt={props.title} />
        </div>
        <div className="top-card-content">
        {props.children}
        </div>
      </div>
    );
}

export default Card;