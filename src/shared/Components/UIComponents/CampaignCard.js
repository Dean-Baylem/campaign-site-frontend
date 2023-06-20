import React from "react";
import { Button } from "@mui/material";
import "./CampaignCard.css";
import { NavLink } from "react-router-dom";

const CampaignCard = (props) => {

  return (
    <div className="campaign-card">
      <div
        className="campaign-card-title page-title"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://img.freepik.com/free-photo/still-life-objects-with-role-playing-game-sheet_23-2149352341.jpg?w=1060&t=st=1683157158~exp=1683157758~hmac=eb74e4f5a7937444ffd4a9e0571d2f476f4352bdcc5fb1945edc82ed6c69dac1)`,
        }}
      >
        <h3>{props.campaign.campaignName}</h3>
        <div className="campaign-card-button-container">
          <NavLink to={`/campaign/${props.campaign._id}`}>
            <Button onClick={() => {console.log(props.campaign)}}>Manage / View</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
