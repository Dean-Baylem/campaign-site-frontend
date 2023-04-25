import React from "react";
import "./ItemDisplay.css"

const ItemDisplay = props => {
    return (
      <div className="item-display">
        {props.children}
      </div>
    );
}

export default ItemDisplay;