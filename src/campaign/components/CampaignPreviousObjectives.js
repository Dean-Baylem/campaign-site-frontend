import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import "./CampaignPreviousObjectives.css";

const CampaignPreviousObjectives = () => {
  const campaignManager = useContext(CampaignContext);

  return (
    <div className="previous-objectives-container custom-buttons card-border card-box-shadow light-bg">
      <h5 className="page-subtitle">Previous Objectives</h5>
      {campaignManager.currentCampaign.objectives
        .filter((objective) => objective.completed === true)
        .map((objective, index) => (
          <div className="previous-objective page-body">
            <p key={index}>{objective.objectiveTitle}</p>
            <div style={{ color: `${objective.successful ? "green" : "red"}` }}>
              {objective.successful ? (
                <CheckCircleOutlineIcon />
              ) : (
                <CancelIcon />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CampaignPreviousObjectives;
