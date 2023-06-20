import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ObjectiveDisplay.css";
import Modal from "../../shared/Components/UIComponents/Modal";
import ObjectiveForm from "./ObjectiveForm";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";

const ObjectiveDisplay = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteModalToggle = () => {setShowDeleteModal(!showDeleteModal)};

  const handleEditClick = () => {
    props.handleHide();
    setShowEditModal(!showEditModal);
  }

  return (
    <React.Fragment>
      {showEditModal && (
        <Modal secondary modalHeader="Edit Objective">
          <ObjectiveForm
            url={process.env.REACT_APP_REQUEST_URL + `/campaign/updateobjective/${props.id}`}
            requestType="PATCH"
            setEditable={handleEditClick}
            reload={props.reload}
            objectiveTitle={props.objectiveTitle}
            objectiveDesc={props.objectiveDesc}
            main={props.main}
            completed={props.completed}
            successful={props.successful}
            closeButton={
              <Button onClick={handleEditClick}>Close</Button>
            }
          />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal modalHeader="Delete Objective?">
          <DeleteModal
            url={process.env.REACT_APP_REQUEST_URL + `/campaign/deleteobjective/${props.id}`}
            reload={props.reload}
            modalToggle={deleteModalToggle}
          />
        </Modal>
      )}
      <div className="objective-display-container page-body">
        <div className="objective-desc">
          <p>
            <strong>Description</strong>
          </p>
          <p>{props.objectiveDesc}</p>
        </div>
        <div className="status-tokens space-around">
          <div className="center">
            <p>Completed</p>
            <IconButton sx={{ color: `${props.completed ? "green" : "red"}` }}>
              {props.completed ? <CheckCircleOutlineIcon /> : <CancelIcon />}
            </IconButton>
          </div>
          <div className="center">
            <p>Successful</p>
            <IconButton sx={{ color: `${props.success ? "green" : "red"}` }}>
              {props.success ? <CheckCircleOutlineIcon /> : <CancelIcon />}
            </IconButton>
          </div>
          <div className="center">
            <p>Main</p>
            <IconButton sx={{ color: `${props.main ? "green" : "red"}` }}>
              {props.main ? <CheckCircleOutlineIcon /> : <CancelIcon />}
            </IconButton>
          </div>
          <div className="edit-objective-icons">
            <div>
              <IconButton onClick={handleEditClick}>
                <EditIcon fontSize="small" />
              </IconButton>
            </div>
            <div>
              <IconButton onClick={() => setShowDeleteModal(true)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ObjectiveDisplay;
