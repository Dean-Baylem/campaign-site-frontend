import React from "react";

const Button = props => {
    return <button className={props.styleType}>{props.content}</button>
}

export default Button;