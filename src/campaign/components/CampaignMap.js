import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import "./CampaignMap.css";

const CampaignMap = () => {
  const campaignManager = useContext(CampaignContext);

  return (
    <div className="campaign-map-container">
      <div className="page-subtitle">
        <h3>Campaign Status</h3>
      </div>
      <div className="campaign-map-body">
        <img
          src="https://img.freepik.com/free-vector/ancient-abstract-earth-relief-old-map-generated-conceptual-vector-elevation-map-fantasy-landscape_1217-5425.jpg?w=740&t=st=1686016130~exp=1686016730~hmac=cab302f32b1f0ebc8ebf098182f9bb20af283c540260eea3cd085f474fa2141a"
          alt="campaign-map"
          className="card-box-shadow"
        />
        <div className="campaign-desc page-body">
          <p>
            From the archives embedded in Dungeon Delvers Inc Headquarters, the
            curators present the current campaign status for
            {campaignManager.currentCampaign.campaignName}! Fresh from the
            cartographers, the regional map shows interesting locations
            highlighted by the Game Master. Click on the map to enlarge it!
          </p>
          <p>
            Additionally, the catalogue of previous objectives is present
            alongside the party's ongoing goals. See the currently active party,
            as designated by the Game Master, as well as details regarding the
            main villain of the adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignMap;
