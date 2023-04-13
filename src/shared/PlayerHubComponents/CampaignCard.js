import React from "react";
import { Button } from "@mui/material";
import Collapsible from "react-collapsible";
import "./CampaignCard.css";


// Will change this to be an API call to the backend based on the campaign id
// provided by the props.



const CampaignCard = props => {
    return (
      <div className="campaign-card">
        <div
          className="campaign-card-title"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://fastly.picsum.photos/id/658/500/300.jpg?hmac=DO3v8m8T1OpH51FjvVy_YDNCpHPD0YO34B8c5VkyrHM)`,
          }}
        >
          <h3>{props.campaignTitle}</h3>
        </div>
        <div className="campaign-card-body">
          <div className="campaign-card-button-container">
            <Button>Manage</Button>
            <Button>View</Button>
          </div>
          <hr></hr>
          <Collapsible trigger="See Party">
            <div className="party-container">
            {props.party.map((member, index) => (
              <img src={member.token} alt="party-member" key={index} />
            ))}
            </div>
          </Collapsible>
        </div>
      </div>
    );
}

export default CampaignCard;