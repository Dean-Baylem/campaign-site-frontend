import React from "react";
import { Input, Button } from "@mui/material";
import "./TableEdit.css";

const TableEdit = props => {
    return (
      <div className="custom-table-display-container">
        <table className="custom-table page-body">
          <tr className="table-cell">
            <th className="die-entry">d100</th>
            <th className="desc-entry">Result</th>
          </tr>
          {props.wildMagicTable.list.map(({ die, result, id }, index) => (
            <tr key={id} className={index % 2 === 0 ? "light-bg" : ""}>
              <td className="die-entry">
                <Input
                  sx={{ border: "0", textAlignLast: "center", margin: "1rem" }}
                  name="die"
                  value={die}
                  type="text"
                  onChange={(e) => props.onChangeDie(e, id)}
                />
              </td>
              <td className="desc-entry">
                <Input
                  sx={{ border: "0" }}
                  fullWidth
                  name="result"
                  value={result}
                  type="text"
                  onChange={(e) => props.onChangeInput(e, id)}
                  multiline
                />
              </td>
            </tr>
          ))}
        </table>
        <div className="option-buttons">
          <Button onClick={props.handleAddToTable} variant="contained">
            Add More
          </Button>
          <Button onClick={props.handleSave} variant="contained">
            Save Changes
          </Button>
        </div>
      </div>
    );
}

export default TableEdit;