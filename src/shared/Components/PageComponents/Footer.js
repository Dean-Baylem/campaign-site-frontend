import React from "react";
import NavLinks from "../../navigation/NavLinks";
import "./Footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-main">
          <nav className="footer-nav">
            <NavLinks />
          </nav>
          <hr></hr>
          <div className="page-body">
            <p>Dungeon Delvers Inc.</p>
          </div>
          <hr></hr>
          <p className="page-body">© 2023 Dean Baylem</p>
        </div>
      </footer>
    );
}

export default Footer;