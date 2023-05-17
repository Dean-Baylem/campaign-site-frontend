import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Table = (props) => {
  return (
    <table className={`table ${props.table.tableStyle}`}>
      <tr className={`table-heading ${props.table.headingStyle}`}>
        {props.table.headingList.map((heading, index) => (
          <th key={index} className={heading.style}>
            {heading.text}
          </th>
        ))}
      </tr>
        {props.table.tableData.map((data, index) => (
          <tr
            className={
              index % 2 === 0
                ? `light-bg ${data.rowStyle}`
                : `subject-entry ${data.rowStyle}`
            }
          >
            {data.cells.map((entry, index) => (
              <td key={index} className={`${entry.style}`}>
                {entry.hasImg === true ? (
                  <img src={entry.imgSrc} alt={entry.tag} />
                ) : entry.token === true ? (
                  <div>
                    <IconButton>
                      <EditIcon onClick={props.handleEdit} fontSize="small" />
                    </IconButton>
                    <IconButton onClick={props.handleDelete}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  <ul className="record-list">
                    {entry.displayData.length > 0 && entry.displayData.map((string, index) => (
                      <li key={index}>{string}</li>
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
