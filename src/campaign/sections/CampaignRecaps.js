import React from "react";
import "./CampaignRecaps.css";
import RecapSheet from "../components/RecapSheet";
import PreviousRecaps from "../components/PreviousRecaps";

const CampaignRecaps = () => {
    return (
      <div className="reviews-container">
        <div className="session-recap-outer-container">
          <RecapSheet />
          <PreviousRecaps />
        </div>
      </div>
    );
}

export default CampaignRecaps;