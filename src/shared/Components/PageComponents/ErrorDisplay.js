import React from "react";
import "./ErrorDisplay.css";

const ErrorDisplay = props => {
    return (
        <div className="error-display page-body">
            <p>{props.error}</p>
        </div>
    )
}

export default ErrorDisplay;