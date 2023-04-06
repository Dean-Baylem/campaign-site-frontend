import React from "react";

const WorldTitle = props => {
    return (
      <div className="world-title">
        <p>Presenting</p>
        <h2>{props.worldName}</h2>
        {/* Note that the below section will include the names of all Campanigns
              currently being run in this world. Will change to a map function*/}
        <h5>{props.campaign && "Campanigns: " + props.campaign}</h5>
      </div>
    );
}

export default WorldTitle;