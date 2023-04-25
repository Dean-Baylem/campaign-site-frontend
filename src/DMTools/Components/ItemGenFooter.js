import React from "react";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ItemGenFooter = props => {

    const handleSubmit = () => {
        props.generateItem();
    }

    return (
      <div className="item-gen-footer">
        <Button onClick={handleSubmit} variant="outlined">
          Cast Generate Item <NavigateNextIcon />
        </Button>
      </div>
    );
}

export default ItemGenFooter;