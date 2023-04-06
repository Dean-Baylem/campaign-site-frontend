import React from "react";
import { Button } from "@mui/material";
import "./SubjectDesc.css";

const SubjectDesc = props => {
    return (
      <div className="subject-desc-container">
        <p>{props.desc}</p>
        {/* !! Note !! Change this button to the a plus icon !! Note !!*/}
        {/* !! Note !! Change so only visible to the GM account for this world once auth backend set up! !! Note !! */}
        <Button>(+)</Button>
      </div>
    );
}

export default SubjectDesc;