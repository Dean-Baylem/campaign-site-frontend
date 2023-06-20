import React, { useState, useEffect, useContext } from "react";
import ErrorModal from "../../shared/Components/UIComponents/ErrorModal";
import { Button, TextField } from "@mui/material";
import Modal from "../../shared/Components/UIComponents/Modal";
import TableEdit from "./TableEdit";
import { AuthContext } from "../../shared/context/auth-context";
import { CSSTransition } from "react-transition-group";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import "./WMCustomTables.css";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";

const WMCustomTables = (props) => {
  const auth = useContext(AuthContext);
  const [showEditTable, setShowEditTable] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteTableId, setDeleteTableId] = useState();
  const [fetchedTables, setFetchedTables] = useState([]);
  const { sendRequest, error, clearError } = useHttpRequest();
  const [standardList, setStandardList] = useState();
  const [callTables, setCallTables] = useState(true);
  const [tableToEdit, setTableToEdit] = useState();

  const handleReturnToSelect = () => {
    props.handlePageReset("intro");
  };

  // This hook will make a call to the backend to get the tables that the
  // user has stored. Will call each time the callTables state is changed.
  useEffect(() => {
    const fetchTables = async () => {
      if (callTables === true) {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_REQUEST_URL + `/tools/wildmagic/getalltables/${auth.playerId}`
          );
          setFetchedTables(responseData.tables);
        } catch (err) {}
      }
    };
    fetchTables();
    setCallTables(false);
    setConfirmDelete(false);
  }, [auth.playerId, callTables]);

  // This Will get the standard table from the database and store it in state.
  // This is for use when making new tables.
  useEffect(() => {
    const fetchStandard = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + "/tools/wildmagic/getstandard"
        );
        setStandardList(responseData.table);
      } catch (err) {}
    };
    fetchStandard();
  }, [sendRequest]);

  // Function prepares the selected table to be edited by the user
  const handleEditClick = async (e) => {
    const table = fetchedTables.find((table) => table._id === e.target.value);
    if (tableToEdit === table) {
      setTableToEdit([]);
      setShowEditTable(false);
    } else {
      setTableToEdit(table);
      await props.setWildMagicTable({ id: table._id, list: table.list });
      setShowEditTable(true);
    }
  };

  // Function saves the changed data to the database upon click of the save button
  const handleSave = async (e) => {
    try {
      await sendRequest(
        process.env.REACT_APP_REQUEST_URL + `/tools/wildmagic/update/${tableToEdit._id}`,
        "PATCH",
        JSON.stringify({ name: tableToEdit.name, list: props.wildMagicTable }),
        { "Content-Type": "application/json" }
      );
      setCallTables(true);
      setShowEditTable(false);
    } catch (err) {}
  };

  // Function to update the custom table name.
  const handleNameChange = async (e) => {
    const newTableName = e.target.value;
    setTableToEdit(() => {
      return { ...tableToEdit, name: newTableName };
    });
  };

  // This will prep the states needed for the roller function and then call the
  // function to change the page state.
  const handleUseClick = async (e) => {
    const table = fetchedTables.find((table) => table._id === e.target.value);
    await props.setWildMagicTable({ id: table._id, list: table.list });
    props.handleCustomUse();
  };

  // Function will handle the deletion of data from the database.
  const handleDelete = async (e) => {
    try {
      await sendRequest(
        process.env.REACT_APP_REQUEST_URL + `/tools/wildmagic/delete/${e.target.value}`,
        "DELETE"
      );
      setCallTables(true);
    } catch (err) {}
  };

  // This function will produce a standard list, add to database and then call
  // the useEffect() function by changing the state of the depenedency.
  const formik = useFormik({
    initialValues: {
      name: "",
      list: [],
    },
    onSubmit: async (values) => {
      try {
        await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/tools/wildmagic/createtable/${auth.playerId}`,
          "POST",
          JSON.stringify({
            name: values.name,
            list: standardList[0].list,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setCallTables(true);
      } catch (err) {}
    },
  });

  const deleteModalToggle = () => {
    setConfirmDelete(!confirmDelete);
  };

  const setToDelete = (e) => {
    setDeleteTableId(e.target.value);
    deleteModalToggle();
  };

  return (
    <React.Fragment>
      {confirmDelete && (
        <Modal modalHeader="Delete Table?">
          <DeleteModal
            url={process.env.REACT_APP_REQUEST_URL + `/tools/wildmagic/delete/${deleteTableId}`}
            reload={setCallTables}
            modalToggle={deleteModalToggle}
          />
        </Modal>
      )}
      {error && <ErrorModal error={error} modalToggle={clearError} />}
      <div className="custom-table-selection-container">
        <div className="custom-table-title page-subtitle custom-buttons">
          <h5>Your Custom Wild Magic Tables</h5>
          <Button variant="outlined" onClick={handleReturnToSelect}>
            Return to Select Screen
          </Button>
        </div>
        <div className="custom-table-list-container">
          <ul className="custom-table-list">
            {fetchedTables.length !== 0 &&
              fetchedTables.map((table, index) => (
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
                    <Button value={table._id} onClick={handleEditClick}>
                      Edit
                    </Button>
                  </div>
                  <div className="use-button">
                    <Button value={table._id} onClick={handleUseClick}>
                      Use
                    </Button>
                  </div>
                  <div className="delete-button">
                    <Button value={table._id} onClick={setToDelete}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            <li className="add-table-button">
              <div
                className={`page-body ${
                  fetchedTables.length % 2 === 0 && "light-bg"
                }`}
              >
                <form onSubmit={formik.handleSubmit}>
                  <div className="add-button-container">
                    <Button type="submit">Add Table</Button>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Table Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      variant="standard"
                    />
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <CSSTransition
          in={showEditTable}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <div>
            <TableEdit
              onChangeDie={props.onChangeDie}
              handleAddToTable={props.handleAddToTable}
              handleSave={handleSave}
              onChangeInput={props.onChangeInput}
              wildMagicTable={props.wildMagicTable}
              tableToEdit={tableToEdit}
              handleNameChange={handleNameChange}
            />
          </div>
        </CSSTransition>
      </div>
    </React.Fragment>
  );
};

export default WMCustomTables;
