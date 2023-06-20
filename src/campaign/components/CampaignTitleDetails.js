import React, {useContext} from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";

const CampaignTitleDetails = () => {

    const campaignManager = useContext(CampaignContext);

    return (
      <div className="space-evenly page-body">
        <div className="world-name">
          <p>
            <strong>World: </strong>
            {campaignManager.currentCampaign.campaignName}
          </p>
        </div>
        <div className="gm-name">
          <p>
            <strong>GM: </strong>
            {campaignManager.currentCampaign.gameMaster.playername}
          </p>
        </div>
        <div className="party-level">
          {/* This will be changed once the party level is stored in the database */}
          <p>
            <strong>Party Level: </strong>
            {campaignManager.currentCampaign.partyLevel}
          </p>
        </div>
      </div>
    );
}

export default CampaignTitleDetails