import React from "react";
import "./ErrorDisplay.css";

const ErrorDisplay = props => {
    return (
      <div className={`error-display page-body ${props.center && "center"}`}>
        {props.error ? (
          <p>{props.error}</p>
        ) : (
          <div className="page-body">
            <h5>
              Pesky Kobolds have sabotaged the HQ! Come back later when things
              are back to normal!
            </h5>
          </div>
        )}
      </div>
    );
}

export default ErrorDisplay;