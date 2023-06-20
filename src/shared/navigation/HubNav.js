import React from "react";
import "./HubNav.css"
import HubNavItem from "./HubNavItem";

const HubNav = props => {

  const handleClick = event => {
    props.handlePanelChange(event.target.value);
  }

    return (
      <div className="hub-nav-container">
        <nav className="hub-nav">
          <ul className="hub-nav-list">
            <HubNavItem handleClick={handleClick} text="Worlds" value="worlds" />
            <HubNavItem handleClick={handleClick} text="Campaigns" value="campaigns" />
            <HubNavItem handleClick={handleClick} text="DM Tools" value="dmtools"/>
          </ul>
        </nav>
      </div>
    );
}

export default HubNav;