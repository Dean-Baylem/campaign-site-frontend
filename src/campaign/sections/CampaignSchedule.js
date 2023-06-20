import React from "react";
import { Button } from "@mui/material";
import "./CampaignSchedule.css";

const CampaignSchedule = () => {
  return (
    <div className="campaign-schedule-container">
      <div className="page-subtitle center">
        <h3>Schedule & Recaps</h3>
      </div>
      <div className="schedule-banner card-light-bg">
        <div className="schedule-token">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1254/1254275.png?w=740&t=st=1686467454~exp=1686468054~hmac=d35245c8d933b300192117be1a792ac3b842f6191176a3cec3b7197874d42824"
            alt="schedule"
          />
        </div>
        <div className="page-body">
          <h5>Regular Game Time</h5>
          <p>Day | Time | TMZ</p>
        </div>
        <div className="page-body">
          <h5>Next Session</h5>
          <p>Details for next</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignSchedule;
