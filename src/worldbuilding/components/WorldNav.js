import React, {useState, useContext} from "react";
import { Button } from "@mui/material";
import Modal from "../../shared/Components/UIComponents/Modal";
import {WorldContext} from "../../shared/context/WorldContext";
import "./WorldNav.css";
import CreateNewCampaign from "../../shared/navigation/CreateNewCampaign";

const WorldNav = props => {

  const [newCampaignModal, setNewCampaignModal] = useState(false);

  const newCampaignModalSwitch = () => {
    setNewCampaignModal(!newCampaignModal);
  }

  const worldManager = useContext(WorldContext);

    return (
      <React.Fragment>
      {newCampaignModal && (
        <Modal modalHeader="New Campaign">
          <CreateNewCampaign return={newCampaignModalSwitch} world={worldManager.currentWorld}/>
        </Modal>
      )}
        <div className="world-nav custom-buttons-light">
          <Button
            sx={{ margin: "0% 5%" }}
            onClick={newCampaignModalSwitch}
            className="world-button"
            variant="outlined"
          >
            Add Campaign
          </Button>
        </div>
      </React.Fragment>
    );
}

export default WorldNav;