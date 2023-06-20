import React, { useState } from "react";
import "./CampaignPartyDetails.css"
import ObjectivesManager from "../components/ObjectivesManager";
import Modal from "../../shared/Components/UIComponents/Modal";
import CampaignMap from "../components/CampaignMap";
import CampaignCurrentDetails from "../components/CampaignCurrentDetails";
import CampaignPreviousObjectives from "../components/CampaignPreviousObjectives";
import CampaignParty from "../components/CampaignParty";
import { Button } from "@mui/material";

const CampaignPartyDetails = (props) => {

  const [manageCampaign, setManageCampaign] = useState(false);
  const [hideModal, setHideModal] = useState(false);

  const handleHide = () => {
    setHideModal(!hideModal);
  }

  return (
    <React.Fragment>
    {manageCampaign && (
      <Modal hide={hideModal} modalHeader="Campaign Management">
        <ObjectivesManager handleHide={handleHide} reload={props.reload}/>
        <div className="button-list custom-buttons space-top">
        <Button>Add Objective</Button>
          <Button onClick={() => {setManageCampaign(false)}}>Close</Button>
        </div>
      </Modal>
    )}
      <section className="campaign-status-section">
        <div className="page-subtitle" style={{ paddingLeft: "1rem" }}>
          <h3>Campaign Status</h3>
        </div>
        <div className="campaign-party-details-container">
          <CampaignMap />
          <CampaignCurrentDetails setManageCampaign={setManageCampaign}/>
          <CampaignPreviousObjectives />
          <CampaignParty />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CampaignPartyDetails;
