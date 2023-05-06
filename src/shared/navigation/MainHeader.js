import React from "react";
import "./MainHeader.css";

const MainHeader = props => {
    return (
      <header
        className={
          props.clear
            ? "main-header clear-header"
            : "main-header dark-header"
        }
      >
        {props.children}
      </header>
    );
}

export default MainHeader;