import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Table.css";


const Table = (props) => {
  const handleClick = (data) => {
    if (props.clickable) {
      props.handleEdit(data);
  };
}

  const [editable, setEditable] = useState(false);
  const [valueToEdit, setValueToEdit] = useState();

  return (
    <table className={`table ${props.table.tableStyle}`}>
      <tr className={`table-heading ${props.table.headingStyle}`}>
        {props.table.headingList.map((heading, index) => (
          <th key={index} className={`${heading.style} table-heading page-subtitle`}>
            {heading.text}
          </th>
        ))}
      </tr>
      {props.table.tableData.map((data, index) => (
        <tr
          className={
            index % 2 === 0
              ? `light-table ${data.rowStyle}`
              : `subject-entry dark-table ${data.rowStyle}`
          }
          onClick={() => {handleClick(data)}}
        >
          {data.cells.map((entry, index) => (
            <td key={index} className={`${entry.style}`}>
              {entry.hasImg === true ? (
                <img src={entry.imgSrc} alt={entry.tag} />
              ) : entry.token === true ? (
                <div>
                  <IconButton
                    onClick={() => {
                      handleClick(entry.indexValue);
                    }}
                    value={index}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={props.handleDelete}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              ) : (
                <ul className="record-list">
                  {entry.displayData.length > 0 &&
                    entry.displayData.map((string, index) => (
                      <li className="page-body" key={index}>
                        {string}
                      </li>
                    ))}
                </ul>
              )}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
