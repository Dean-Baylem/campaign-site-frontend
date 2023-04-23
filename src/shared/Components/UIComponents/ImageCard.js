import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => {
  return (
    <div
      className="image-card-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props.imgSrc})`,
      }}
    >
      <div className="image-card-text">{props.content}</div>
    </div>
  );
};

export default ImageCard;