import React, {useContext} from "react";
import "./CampaignPlots.css";
import EventsTimeline from "../components/EventsTimeline";
import { CampaignContext } from "../../shared/context/CampaignContext";

const CampaignPlots = () => {

  const campaignManager = useContext(CampaignContext);

    return (
      <div className="campaign-plots-container light-bg">
        <div className="plot-summary">
          <div className="plot-summary-text">
            <h3 className="page-subtitle">Campaign Plot</h3>
            <p className="page-body">
              Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum. Loren
              Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum. Loren Ipsum
              Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum. Loren Ipsum Loren
              Ipsum Loren Ipsum Loren Ipsum Loren Ipsum.
            </p>
          </div>
          <div className="campaign-plot-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/683/683836.png?w=740&t=st=1686459158~exp=1686459758~hmac=82de5fd7ab8afbbc6cb80295a836e0535d34d7a3c4493524b7218bb0e180234c"
              alt="Campaign-token"
            />
          </div>
        </div>
        <div className="plot-timeline">
        <div className="center page-subtitle"><h3>Timeline of events</h3></div>
          <EventsTimeline />
        </div>
      </div>
    );
}

export default CampaignPlots;