import React from "react";
import "./Button.css";

const Button = props => {
    return <button className="btn">{props.content}</button>
}

export default Button;