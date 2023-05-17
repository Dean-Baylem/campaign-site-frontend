import React from "react";
import { Button } from "@mui/material";
import "./SubjectDesc.css";

const SubjectDesc = props => {
    return (
      <div className="page-body subject-desc-container custom-buttons-light">
        <p>{props.desc}</p>
        <Button>Add Topic</Button>
      </div>
    );
}

export default SubjectDesc;