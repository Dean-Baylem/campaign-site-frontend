import React, { useState } from "react";
import { Button } from "@mui/material";
import TableEdit from "./TableEdit";
import { CSSTransition } from "react-transition-group";
import "./WMCustomTables.css";

const WMCustomTables = (props) => {
  const [showEditTable, setShowEditTable] = useState(false);
  const [dummyTable, setDummyTable] = useState([
    {
      id: 1,
      name: "Table 1",
      list: [
        {
          id: 1,
          die: "1 - 2",
          result: "Example",
        },
        {
          id: 2,
          die: "3 - 4",
          result: "Another Example",
        },
        {
          id: 3,
          die: "5 - 6",
          result: "Third Example",
        },
      ],
    },
    {
      id: 2,
      name: "Table 2",
      list: [
        {
          id: 1,
          die: "1 - 2",
          result: "Second List",
        },
        {
          id: 2,
          die: "3 - 4",
          result: "Another Second Example",
        },
        {
          id: 3,
          die: "5 - 6",
          result: "Second List, Third Example",
        },
      ],
    },
    {
      id: 3,
      name: "Table 3",
      list: [
        {
          id: 1,
          die: "1 - 2",
          result: "Third List",
        },
        {
          id: 2,
          die: "3 - 4",
          result: "Another Third Example",
        },
        {
          id: 3,
          die: "5 - 6",
          result: "Third List, Third Example",
        },
      ],
    },
    {
      id: 4,
      name: "Table 4",
      list: [
        {
          id: 1,
          die: "1 - 2",
          result: "Fourth List",
        },
        {
          id: 2,
          die: "3 - 4",
          result: "Another Fourth Example",
        },
        {
          id: 3,
          die: "5 - 6",
          result: "Fourth List, Third Example",
        },
      ],
    },
  ]);

  const handleEditClick = async (e) => {
    if (showEditTable) {
     setShowEditTable(false);
    } else {
      const table = dummyTable.find((table) => table.id == e.target.value);
      await props.setWildMagicTable({id: table.id, list: table.list});
      setShowEditTable(true);
    }
  };

  const handleSave = async (e) => {
    let tableToUpdate = dummyTable.find((table) => table.id == props.wildMagicTable.id);
    const editedTable = dummyTable.map((table) => table.id === tableToUpdate.id ? {...table, list: props.wildMagicTable.list} : table)
    setDummyTable(editedTable);
  }

  const handleUseClick = async (e) => {
    const table = dummyTable.find((table) => table.id == e.target.value);
    await props.setWildMagicTable({ id: table.id, list: table.list });
    props.handleCustomUse();
  }

  return (
    <div className="custom-table-selection-container">
      <div className="custom-table-title page-subtitle">
        <h5>Your Custom Wild Magic Tables</h5>
      </div>
      <div className="custom-table-list-container">
        <ul className="custom-table-list">
          {dummyTable.map((table, index) => (
            <li
              key={index}
              className={`custom-table-list-item page-body ${
                index % 2 === 0 && "light-bg"
              }`}
            >
              <div className="table-name">
                <h5>{table.name}</h5>
              </div>
              <div className="edit-button">
                <Button value={table.id} onClick={handleEditClick}>
                  Edit
                </Button>
              </div>
              <div className="use-button">
                <Button value={table.id} onClick={handleUseClick}>Use</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CSSTransition
        in={showEditTable}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <TableEdit
          onChangeDie={props.onChangeDie}
          handleAddToTable={props.handleAddToTable}
          handleSave={handleSave}
          onChangeInput={props.onChangeInput}
          wildMagicTable={props.wildMagicTable}
        />
      </CSSTransition>
    </div>
  );
};

export default WMCustomTables;
