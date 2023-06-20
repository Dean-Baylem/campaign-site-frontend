import React, { useState } from "react";
import RecordEntry from "./RecordEntry";
import Modal from "../../shared/Components/UIComponents/Modal";
import { Button } from "@mui/material";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";
import RecordForm from "./RecordForm";
import SubjectForm from "./SubjectForm";
import "./SubjectEntry.css";

const SubjectEntry = (props) => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [editTopic, setEditTopic] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const newModalToggle = () => {
    setShowNewModal(!showNewModal);
  };

  const editTopicToggle = () => {
    setEditTopic(!editTopic);
  };

  const deleteTopicToggle = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  return (
    <React.Fragment>
      {showNewModal && (
        <Modal
        modalHeader="Create New World Entry">
          <div className="new-entry-form-container">
            <RecordForm
              formType="createrecord"
              routeId={props.data._id}
              requestType="POST"
              closeButton={<Button onClick={newModalToggle}>Cancel</Button>}
              reload={props.reload}
              setEditable={newModalToggle}
            />
          </div>
        </Modal>
      )}
      {editTopic && (
        <Modal modalHeader="Edit World Entry">
          <SubjectForm
            formType="updatesubject"
            routeId={props.data._id}
            requestType="PATCH"
            subjectType=""
            reload={props.reload}
            setEditable={editTopicToggle}
            closeButton={<Button onClick={editTopicToggle}>Cancel</Button>}
            subjectName={props.data.subjectName}
            subjectDesc={props.data.subjectDesc}
          />
        </Modal>
      )}
      {deleteConfirmation && (
        <Modal modalHeader="Confirm World Entry Deletion">
          <DeleteModal
            url={process.env.REACT_APP_REQUEST_URL + `/worlds/deletesubject/${props.data._id}`}
            reload={props.reload}
            modalToggle={deleteTopicToggle}
            resetDisplay={props.resetDisplay}
          />
        </Modal>
      )}
      <div className="subject-entry-container light-bg">
        <div className="subject-background">
          <div className="subject-name">
            <h2 className="page-subtitle">{props.data.subjectName}</h2>
            <p className="page-body">{props.data.subjectDesc}</p>
            <div className="button-list custom-buttons">
              <Button onClick={newModalToggle}>Add New Entry</Button>
              <Button onClick={editTopicToggle}>Edit</Button>
              <Button onClick={deleteTopicToggle}>Delete</Button>
            </div>
          </div>
          <div className="subject-img">
            <img
              src="https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y"
              alt="subject"
            />
          </div>
        </div>
        <div className="records-container">
          {props.data.records.map((record, index) => (
            <RecordEntry
              reload={props.reload}
              id={record._id}
              recordTitle={record.recordTitle}
              recordDesc={record.recordDesc}
            />
          ))}
        </div>
        <div className="custom-buttons">
          <Button onClick={props.resetDisplay}>Return</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubjectEntry;
