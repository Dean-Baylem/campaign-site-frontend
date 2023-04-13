import React from "react";
import TabButton from "./TabButton";

const HubNavItem = props => {
    return (
      <li className="hub-nav-list-item">
        <TabButton text={props.text} value={props.value} handleClick={props.handleClick} />
      </li>
    );
}

export default HubNavItem;