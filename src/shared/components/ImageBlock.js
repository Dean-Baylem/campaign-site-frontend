import React from "react";

const ImageBlock = props => {
    return (
      <div className="display-img-box">
        <img
          className="display-img"
          src={props.imgSrc}
          alt={props.imgName}
        />
      </div>
    );
}

export default ImageBlock;