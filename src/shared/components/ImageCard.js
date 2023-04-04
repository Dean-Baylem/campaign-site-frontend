import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => {
  return (
    <div className="image-card-container">
        <img src={props.imgSrc} alt="World Subject" style={{width: '100%'}}/>
        <div className="image-card-text">{props.content}</div>
    </div>
  )
};

export default ImageCard;