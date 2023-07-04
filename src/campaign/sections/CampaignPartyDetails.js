import React, { useState } from "react";
import "./CampaignPartyDetails.css";
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
  };

  return (
    <React.Fragment>
      {manageCampaign && (
        <Modal hide={hideModal} modalHeader="Campaign Management">
          <ObjectivesManager handleHide={handleHide} reload={props.reload} />
          <div className="button-list custom-buttons space-top">
            <Button>Add Objective</Button>
            <Button
              onClick={() => {
                setManageCampaign(false);
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      <section className="campaign-status-section">
        <div className="campaign-party-details-container">
          <CampaignMap />
          <div className="campaign-synopsis page-body card-box-shadow page-body card-border light-bg">
            <h5>Campaign Synopsis</h5>
            <p>
              A diverse group of characters unite on a perilous quest,
              navigating treacherous landscapes, confronting allies and foes,
              and making impactful choices that shape their journey. Their
              actions and teamwork determine the outcome as they face the
              ultimate challenge in a climactic showdown.
            </p>
          </div>
          <CampaignCurrentDetails setManageCampaign={setManageCampaign} />
            <CampaignPreviousObjectives />
            <CampaignParty />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CampaignPartyDetails;
