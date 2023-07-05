import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./CampaignPlots.css";
import EventsTimeline from "../components/EventsTimeline";
import { CampaignContext } from "../../shared/context/CampaignContext";
import PlotDisplay from "../components/PlotDisplay";
import PlotForm from "../components/PlotForm";
import Modal from "../../shared/Components/UIComponents/Modal";
import { Button, useThemeProps } from "@mui/material";

const CampaignPlots = (props) => {
  const campaignManager = useContext(CampaignContext);
  const [createPlotModal, setCreatePlotModal] = useState(false);

  const campaignId = useParams().campaignId;

  const handleCreateModal = () => {
    setCreatePlotModal(!createPlotModal);
  };

  return (
    <React.Fragment>
      {createPlotModal && (
        <Modal modalHeader="Create Plot Act">
          <PlotForm
            url={process.env.REACT_APP_REQUEST_URL + `/campaign/createplot/${campaignId}`}
            requestType="POST"
            setEditable={setCreatePlotModal}
            reload={props.reload}
            closeModal={handleCreateModal}
          />
        </Modal>
      )}
      <div className="campaign-plots-container light-bg">
        <div className="plot-summary">
          <div className="plot-summary-text">
            <h3 className="page-subtitle">Campaign Plot</h3>
            {campaignManager.currentCampaign.plots.map((plot, index) => (
              <p>{plot.name}</p>
            ))}
            {campaignManager.currentCampaign.plots.length === 0 && (
              <div>
                <p>The archives are empty! Start building today!</p>
                <Button onClick={handleCreateModal}>Create Act</Button>
              </div>
            )}
            {/* <PlotDisplay /> */}
          </div>
          <div className="campaign-plot-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/683/683836.png?w=740&t=st=1686459158~exp=1686459758~hmac=82de5fd7ab8afbbc6cb80295a836e0535d34d7a3c4493524b7218bb0e180234c"
              alt="Campaign-token"
            />
          </div>
        </div>
        <div className="plot-timeline">
          <div className="center page-subtitle">
            <h3>Timeline of events</h3>
          </div>
          <EventsTimeline />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampaignPlots;
