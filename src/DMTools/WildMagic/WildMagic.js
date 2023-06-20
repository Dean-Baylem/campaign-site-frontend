import React, { useState, useContext } from "react";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import MainNavigation from "../../shared/navigation/MainNavigation";
import WMIntro from "./WMIntro";
import Roller from "./Roller";
import WMCustomTables from "./WMCustomTables";
import Footer from "../../shared/Components/PageComponents/Footer";
import { CSSTransition } from "react-transition-group";
import "./WildMagic.css";
import ErrorModal from "../../shared/Components/UIComponents/ErrorModal";


const WildMagic = (props) => {
  const [pageState, setPageState] = useState("intro");
  const [nextPage, setNextPage] = useState("");
  const [wildMagicTable, setWildMagicTable] = useState([]);

  const { sendRequest, error, clearError } = useHttpRequest();

  const handlePageReset = (next) => {
    setNextPage(next);
    setPageState("");
  }

  const handlePageStateChange = () => {
    setPageState(nextPage);
  }
  

  const handleStandardClick = async () => {
    try {
      const responseData = await sendRequest("http://localhost:5000/tools/wildmagic/getstandard")
      let useList = {id: "standard", list: responseData.table[0].list}
      setWildMagicTable(useList);
    } catch (err) {
    }
    setNextPage("roller");
    setPageState("");
  };

  const handleCustomClick = () => {
    setNextPage("choose-table");
    setPageState("");
  };

  const handleCustomUse = () => {
    setNextPage("roller");
    setPageState("");
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

  return (
    <div className="wild-magic-page">
    {error && <ErrorModal modalHeader="Poof! Surge Failed!" modalToggle={clearError} error={error}/>}
      <div
        className="title-banner-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://img.freepik.com/free-photo/futuristic-galaxy-exploding-vibrant-multi-colored-shapes-generated-by-ai_188544-9616.jpg?w=826&t=st=1683241304~exp=1683241904~hmac=527339c2a998b55bd38d1a0ee4c239b107c801374e8dc6466243ec122a0ec8f2)`,
        }}
      >
        <MainNavigation clear={true} />
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
          onExited={handlePageStateChange}
        >
          <WMIntro handleStandardClick={handleStandardClick} handlePageReset={handlePageReset} />
        </CSSTransition>
        <CSSTransition
          in={pageState === "choose-table"}
          classNames="fade"
          timeout={300}
          unmountOnExit
          onExited={handlePageStateChange}
        >
          <WMCustomTables
            onChangeDie={onChangeDie}
            handleAddToTable={handleAddToTable}
            onChangeInput={onChangeInput}
            wildMagicTable={wildMagicTable}
            setWildMagicTable={setWildMagicTable}
            handleCustomUse={handleCustomUse}
            setPageState={setNextPage}
            handlePageReset={handlePageReset}
          />
        </CSSTransition>
        <CSSTransition
          in={pageState === "roller"}
          classNames="fade"
          timeout={300}
          unmountOnExit
          onExited={handlePageStateChange}
        >
          <Roller
            handlePageReset={handlePageReset}
            wildMagicTable={wildMagicTable}
          />
        </CSSTransition>
      </div>
      <Footer />
    </div>
  );
};

export default WildMagic;
