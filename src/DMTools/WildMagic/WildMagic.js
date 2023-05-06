import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import WMIntro from "./WMIntro";
import Roller from "./Roller";
import { CSSTransition } from "react-transition-group";
import "./WildMagic.css";
import WMCustomTables from "./WMCustomTables";
import TableEdit from "./TableEdit";

const WildMagic = (props) => {
  const [pageState, setPageState] = useState("intro");
  const [wildMagicTable, setWildMagicTable] = useState([]);

  const standardTable = [
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
  ];

  const handleStandardClick = () => {
    setPageState("roller");
    setWildMagicTable(standardTable);
  };

  const handleCustomClick = () => {
    setPageState("choose-table");
  };

  const handleCustomUse = () => {
    setPageState("roller");
  }

  // Functions to enable table customization
  // When entry is changed, update the table stored in state
  const onChangeInput = (e, id) => {
    const newResult = e.target.value;
    const editTable = wildMagicTable.list.map((entry) =>
      entry.id === id
        ? { id: entry.id, die: entry.die, result: newResult }
        : entry
    );
    setWildMagicTable({
      ...wildMagicTable,
      list: editTable,
    });
  };

  // When die entry is changed, update the table stored in state
  const onChangeDie = (e, id) => {
    const newDie = e.target.value;
    const editTable = wildMagicTable.list.map((entry) =>
      entry.id === id
        ? { id: entry.id, die: newDie, result: entry.result }
        : entry
    );
    setWildMagicTable({
      ...wildMagicTable,
      list: editTable,
    });
  };

  // Produces a blank entry for the user to add data to.
  const handleAddToTable = () => {
    setWildMagicTable(() => {
      return {
        id: wildMagicTable.id,
        list: [
          ...wildMagicTable.list,
          { id: wildMagicTable.list.length + 1, die: "", result: "" },
        ],
      };
    });
  };

  const handleSave = () => {
    console.log(wildMagicTable);
  };

  return (
    <div className="wild-magic-page">
      <div
        className="title-banner-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://img.freepik.com/free-photo/futuristic-galaxy-exploding-vibrant-multi-colored-shapes-generated-by-ai_188544-9616.jpg?w=826&t=st=1683241304~exp=1683241904~hmac=527339c2a998b55bd38d1a0ee4c239b107c801374e8dc6466243ec122a0ec8f2)`,
        }}
      >
        <h1 className="page-title">Wild Magic</h1>
        <h5 className="page-subtitle">
          Wild sparks of uncontrollable magic manifest from the resident
          sorcerer of the Dungeon Delvers.
        </h5>
      </div>
      <div className="page-body-container">
        <CSSTransition
          in={pageState === "intro"}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <WMIntro
            handleStandardClick={handleStandardClick}
            handleCustomClick={handleCustomClick}
          />
        </CSSTransition>
        <CSSTransition
          in={pageState === "choose-table"}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <WMCustomTables
            onChangeDie={onChangeDie}
            handleAddToTable={handleAddToTable}
            handleSave={handleSave}
            onChangeInput={onChangeInput}
            wildMagicTable={wildMagicTable}
            setWildMagicTable={setWildMagicTable}
            handleCustomUse={handleCustomUse}
          />
        </CSSTransition>
        <CSSTransition
          in={pageState === "roller"}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Roller wildMagicTable={wildMagicTable} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default WildMagic;
