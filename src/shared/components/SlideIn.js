import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Slide } from "@mui/material";
import "./SlideIn.css";

const SlideIn = props => {

    const [visible, setVisible] = useState(false);

    const onChange = isVisible => {
        if (isVisible === true) {
            setVisible(true);
        }
    }
    
    return (
      <VisibilitySensor onChange={onChange}>
          <div className={visible === true ? props.direction === "right" ? "transition-container-right" : "transition-container-left" : "no-display"}>
            {props.children}
          </div>
      </VisibilitySensor>
    );
}

export default SlideIn;

