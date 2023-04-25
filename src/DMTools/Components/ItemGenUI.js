import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ItemGenUI.css";

const ItemGenUI = props => {
    return (
      <div className="item-gen-body">
        <div className="item-gen-text page-body">
          {props.maxAlert && (
            <em style={{ color: "#ff2800", margin: "0" }}>
              <p>You have reached the limit!</p>
            </em>
          )}
        </div>
        <div className="item-gen-buttons item-gen-text page-body">
          <Fab
            size="small"
            onClick={props.handleAdd}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
          <p>How Many?</p>
          <Fab
            size="small"
            onClick={props.handleMinus}
            color="danger"
            aria-label="minus"
          >
            <RemoveIcon />
          </Fab>
        </div>
      </div>
    );
}

export default ItemGenUI;