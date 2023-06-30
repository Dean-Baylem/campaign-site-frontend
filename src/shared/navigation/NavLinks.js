import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";


const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <div className={props.drawerOpen ? "drawer-links" : "nav-links"}>
      <li className="list-item">
        <NavLink to="/">Home</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className="list-item">
          <NavLink to={`/${auth.playerId}`}>Hub</NavLink>
        </li>
      )}
      {/* Links when logged out */}
      {!auth.isLoggedIn && (
        <li className="list-item">
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className="list-item">
          <NavLink to="/test-login">TESTERS</NavLink>
        </li>
      )}
      {/* links when logged in */}
      {auth.isLoggedIn && (
        <li className="list-item">
          <NavLink onClick={auth.logout} to="/">
            Logout
          </NavLink>
        </li>
      )}
    </div>
  );
};

export default NavLinks;
