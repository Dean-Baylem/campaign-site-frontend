import React from "react";

const WorldDisplay = props => {
    return (
      <div className={props.displayType}>
        {props.children}
      </div>
    );
}

export default WorldDisplay;