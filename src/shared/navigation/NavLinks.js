import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {auth.isLoggedIn && (<li>
        <NavLink to={`/${auth.playerId}`}>Worlds</NavLink>
      </li>)}
      {/* Links when logged out */}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
      {/* links when logged in */}
      {auth.isLoggedIn && (
        <li>
          <NavLink onClick={auth.logout} to="/">
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
