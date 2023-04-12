import React from "react";
import { Button } from "@mui/material";
import Collapsible from "react-collapsible";

const CampaignCard = props => {
    return (
      <div className="campaign-card">
        <div
          className="campaign-card-title"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://fastly.picsum.photos/id/658/500/300.jpg?hmac=DO3v8m8T1OpH51FjvVy_YDNCpHPD0YO34B8c5VkyrHM)`,
          }}
        >
          <h3>Campaign Title</h3>
        </div>
        <div className="campaign-card-body">
          <div className="campaign-card-button-container">
            <Button>Manage</Button>
            <Button>View</Button>
          </div>
          <hr></hr>
          <Collapsible trigger="See Party">
            <div className="party-container">
              <img
                src="https://i.pinimg.com/474x/97/86/d7/9786d7140e6ab76e4ae64c347ca28cbc.jpg"
                alt="party-member"
              />
            </div>
          </Collapsible>
        </div>
      </div>
    );
}

export default CampaignCard;