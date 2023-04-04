import React from "react";
import "./Button.css";

const Button = props => {
    return <button 
                className="btn" 
                type={props.type} 
                onClick={props.onClick}
            >
                {props.content}
            </button>
}

export default Button;