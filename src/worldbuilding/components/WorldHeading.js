import React from "react";
import MainNavigation from "../../shared/navigation/MainNavigation";
import "./WorldHeading.css";


const WorldHeading = props => {
    return (
      <div className="world-title-container">
        <MainNavigation />
        {props.children}
      </div>
    );
}

export default WorldHeading;