import React from "react";
import "./Card.css";

const Card = props => {
    return (
      <div className={props.cardType === "top" ? "top-card-container" : "side-card-container"}>
        <div className={props.cardType === "right" ? "image-container right-card" : "image-container"}>
          <img src={props.imgSrc} alt={props.title} />
        </div>
        <div className="content-container">
          <div className="card-title">
            <h5>{props.title}</h5>
          </div>
          <div className="card-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;