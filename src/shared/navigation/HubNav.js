import React from "react";
import { NavLink } from "react-router-dom";
import "./HubNav.css"

const HubNav = props => {
    return (
      <div className="hub-nav-container">
        <nav className="hub-nav">
          <ul className="hub-nav-list">
            <li className="hub-nav-list-item">
              <NavLink>Worlds</NavLink>
            </li>
            <li className="hub-nav-list-item">
              <NavLink>Campaigns</NavLink>
            </li>
            <li className="hub-nav-list-item">
              <NavLink>DM Tools</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default HubNav;