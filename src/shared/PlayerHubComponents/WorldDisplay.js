import React from "react";

const WorldDisplay = props => {
    return (
      <div className="world-display-container">
        {props.children}
      </div>
    );
}

export default WorldDisplay;