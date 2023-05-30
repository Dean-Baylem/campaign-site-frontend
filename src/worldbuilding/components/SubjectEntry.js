import React, { useState } from "react";
import "./SubjectEntry.css";
import RecordEntry from "./RecordEntry";
import Modal from "../../shared/Components/UIComponents/Modal";
import { Button, TextField } from "@mui/material";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";
import RecordForm from "./RecordForm";

const SubjectEntry = (props) => {

  const [showNewModal, setShowNewModal] = useState(false);

  const newModalToggle = () => {
    setShowNewModal(!showNewModal);
  }

  return (
    <React.Fragment>
      {showNewModal && (
        <Modal>
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
      <div className="subject-entry-container light-bg">
        <div className="subject-background">
          <div className="subject-name">
            <h2 className="page-subtitle">{props.data.subjectName}</h2>
            <p className="page-body">{props.data.subjectDesc}</p>
            <div className="add-entry-button custom-buttons">
              <Button onClick={newModalToggle}>Add New Entry</Button>
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
