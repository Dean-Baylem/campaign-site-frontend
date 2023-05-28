import React, { useState } from "react";
import "./SubjectEntry.css";
import RecordEntry from "./RecordEntry";

const SubjectEntry = (props) => {

  return (
    <div className="subject-entry-container light-bg">
      <div className="subject-background">
        <div className="subject-name">
          <h2 className="page-subtitle">{props.data.subjectName}</h2>
          <p className="page-body">{props.data.subjectDesc}</p>
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
          <RecordEntry reload={props.reload} id={record._id} recordTitle={record.recordTitle} recordDesc={record.recordDesc} />
        ))}
      </div>
    </div>
  );
};

export default SubjectEntry;
