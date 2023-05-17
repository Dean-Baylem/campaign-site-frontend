import React from "react";
import "./Subtitle.css";

const Subtitle = props => {
    return (
      <div className={`${props.type}`}>
        <h2>{props.content}</h2>
      </div>
    );
}

export default Subtitle;