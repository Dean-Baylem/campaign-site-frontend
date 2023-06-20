import React, { useContext, useEffect, useState } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import NPCCard from "../../shared/Components/UIComponents/NPCCard";
import "./CampaignNPCs.css";

const CampaignNPCs = () => {
  const campaignManager = useContext(CampaignContext);
  const [npcs, setNpcs] = useState([]);
  const { sendRequest, error } = useHttpRequest();

  useEffect(() => {
    const fetchNPCs = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/npc/npc/fetchbycampaign/${campaignManager.currentCampaign.id}`
        );
        setNpcs(responseData.npcs);
      } catch (err) {}
    };
    fetchNPCs();
  }, []);

  return (
    <div className="campaign-npcs-container light-bg">
      {error && <p>There was an error loading NPC's</p>}
      {npcs.length !== 0 ? (
        <div>
          <div className="page-subtitle center">
            <h3>NPC's of {campaignManager.currentCampaign.campaignName}</h3>
          </div>
          <div className="npc-flex-container">
            {npcs.map((npc, index) => (
              <NPCCard key={index} npc={npc} />
            ))}
          </div>
        </div>
      ) : (
        <h5>No NPC's for this campaign</h5>
      )}
    </div>
  );
};

export default CampaignNPCs;
