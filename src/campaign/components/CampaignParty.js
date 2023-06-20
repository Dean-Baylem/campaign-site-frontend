import React, { useContext } from "react";
import {CampaignContext} from "../../shared/context/CampaignContext";
import "./CampaignParty.css";

const CampaignParty = () => {

    const campaignManager = useContext(CampaignContext);

    return (
      <div className="active-party-container card-border card-box-shadow light-bg">
        <h5 className="page-subtitle center">Current Party</h5>
        <div className="party-token-container center page-body">
        {campaignManager.currentCampaign.party.map((character, index) => (
            character.active && <div key={index} className="party-token center">
            <img
              src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
              alt={character.name}
            />
            <p>
              <strong>
                <em>{character.name}</em>
              </strong>
            </p>
          </div>
        ))}
        </div>
      </div>
    );
}

export default CampaignParty;