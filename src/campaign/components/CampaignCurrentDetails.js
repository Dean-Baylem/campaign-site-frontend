import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { IconButton, useThemeProps } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./CampaignCurrentDetails.css";

const CampaignCurrentDetails = (props) => {

  const campaignManager = useContext(CampaignContext);

  const handleEditClick = () => {
    props.setManageCampaign(true);
  }

    return (
      <div className="current-party-details card-box-shadow page-body card-border light-bg">
        <ul className="party-details-list">
          <li className="current-objective">
            <h5 className="page-subtitle">Current Goal</h5>
            {campaignManager.currentCampaign.objectives
              .filter((objective) => objective.main === true)
              .map((objective, index) => (
                <p key={index}>{objective.objectiveTitle}</p>
              ))}
          </li>
          <li className="current-location">
            <h5 className="page-subtitle">Current Location</h5>
            {campaignManager.currentCampaign.locations
              .filter((location) => location.currentLocation === true).length > 0 ? 
              campaignManager.currentCampaign.locations
              .filter((location) => location.currentLocation === true)
              .map((location, index) => (
                <p key={index}>{location.locationName}</p>
              ))
              :<p>Location Unknown</p>}
          </li>
          <li className="current-villain">
            <div>
              <h5 className="page-subtitle">Villain</h5>
              <p>{campaignManager.currentCampaign.bbeg.name}</p>
            </div>
            <div className="party-token">
              <img
                src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
                alt="villain"
              />
            </div>
          </li>
        </ul>
        <div className="edit-icons-bottom">
          <IconButton onClick={handleEditClick}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
}

export default CampaignCurrentDetails;