import React from "react";
import {TextField} from "@mui/material";
import { styled } from '@mui/material/styles';



const Input = props => {
    return (
      <div className="form-input">
        <TextField
            sx={{backgroundColor: "white", borderRadius: "5px"}} 
            id="standard-basic" 
            label="Email" 
            variant="standard"
        />
      </div>
    );
}

export default Input;