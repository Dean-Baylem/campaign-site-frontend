import React, {useState} from "react";
import { Input, Button } from "@mui/material";
import "./TableEdit.css";

const TableEdit = props => {

  const [activeField, setActiveField] = useState();
  const [changeName, setChangeName] = useState(false);

  const handleClick = e => {
    setActiveField(Number(e));
  }

  const handleNameEditState = () => {
    setChangeName(!changeName);
  }

    return (
      <div className="custom-table-display-container">
        <div
          className="table-name-entry custom-buttons"
          onClick={handleNameEditState}
        >
          <Input
            sx={{
              border: "0",
              textAlignLast: "center",
              margin: "1rem",
            }}
            name="name"
            value={props.tableToEdit.name}
            type="text"
            onChange={(e) => props.handleNameChange(e)}
          />
          <Button onClick={props.handleAddToTable} variant="outlined">
            Add More
          </Button>
          <Button onClick={props.handleSave} variant="outlined">
            Save Changes
          </Button>
        </div>
        <table className="custom-table page-body">
          <tr className="table-cell">
            <th className="die-entry">d100</th>
            <th className="desc-entry">Result</th>
          </tr>
          {props.wildMagicTable.list.map(({ die, result, id }, index) => (
            <tr
              key={id}
              className={
                index % 2 === 0 ? "light-bg" : ""
              }
            >
              <td
                className="die-entry"
                name={id}
                value={id}
                onClick={() => handleClick(id)}
              >
                {activeField === id ? (
                  <Input
                    sx={{
                      border: "0",
                      textAlignLast: "center",
                      margin: "1rem",
                    }}
                    name="die"
                    value={die}
                    type="text"
                    onChange={(e) => props.onChangeDie(e, id)}
                  />
                ) : (
                  die
                )}
              </td>
              <td className="desc-entry" onClick={() => handleClick(id)}>
                {activeField === id ? (
                  <Input
                    sx={{ border: "0" }}
                    fullWidth
                    name="result"
                    value={result}
                    type="text"
                    onChange={(e) => props.onChangeInput(e, id)}
                    multiline
                  />
                ) : (
                  result
                )}
              </td>
            </tr>
          ))}
        </table>
        <div className="option-buttons custom-buttons">
          <Button onClick={props.handleAddToTable} variant="outlined">
            Add More
          </Button>
          <Button onClick={props.handleSave} variant="outlined">
            Save Changes
          </Button>
        </div>
      </div>
    );
}

export default TableEdit;