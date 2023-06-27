import React, { useContext, useState } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import "./ObjectivesManager.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ObjectiveForm from "./ObjectiveForm";
import ObjectiveDisplay from "./ObjectiveDisplay";

const ObjectivesManager = (props) => {
  const campaignManager = useContext(CampaignContext);

  return (
    <div className="goal-manager">
      {campaignManager.currentCampaign.objectives.map((objective, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{objective.objectiveTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ObjectiveDisplay
            reload={props.reload}
              id={objective._id}
              objectiveTitle={objective.objectiveTitle}
              objectiveDesc={objective.objectiveDesc}
              main={objective.main}
              completed={objective.completed}
              successful={objective.successful}
              handleHide={props.handleHide}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ObjectivesManager;
