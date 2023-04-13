import React from "react";

const TabButton = props => {
    return (
      <button className="tab-button" onClick={props.handleClick} value={props.value}>
        {props.text}
      </button>
    );
}

export default TabButton;