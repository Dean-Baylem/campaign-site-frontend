import React, {useContext} from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";

const CampaignTitle = () => {
    const campaignManager = useContext(CampaignContext);

    return (
        <div className="world-title">
            <h2 className="page-title">{campaignManager.currentCampaign.campaignName}</h2>
        </div>
    )
}

export default CampaignTitle;