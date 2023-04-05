import React from "react";
import MainNavigation from "../../shared/navigation/MainNavigation";
import WorldNav from "./WorldNav";
import "./WorldHeading.css";


const WorldHeading = props => {
    return (
      <div className="world-title-container">
        <MainNavigation />
        <div className="world-title">
          <p>Presenting</p>
          <h2>{props.worldName}</h2>
          {/* Note that the below section will include the names of all Campanigns
              currently being run in this world. Will change to a map function*/}
          <h5>{"Campanigns: " + props.campaign}</h5>
        </div>
        <WorldNav worldId={props.worldId} />
      </div>
    );
}

export default WorldHeading;