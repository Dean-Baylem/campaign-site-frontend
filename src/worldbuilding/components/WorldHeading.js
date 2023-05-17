import React from "react";
import MainNavigation from "../../shared/navigation/MainNavigation";
import "./WorldHeading.css";


const WorldHeading = props => {
    return (
      <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${props.campaignBanner})`}} className="world-title-container">
        {props.children}
      </div>
    );
}

export default WorldHeading;