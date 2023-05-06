import React from "react";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import { Button } from "@mui/material";
import "./ToolsContainer.css";

const ToolsContainer = (props) => {
  

  return (
    <div className="tools-container">
      <div className="tool-display-vid-container">
        <h5 className="page-subtitle">
          Enhance your GM Experience with these handy tools!
        </h5>
        <p>This is where the video will go!</p>
      </div>
      <div className="tool-text-desc page-body">
        <p>
          As a fellow Dungeon Delver, you have access to an ever expanding range
          of tools available to enchance the game experience for yourself and
          your players.
        </p>
        <p>
          Feedback is always welcome at <strong>Dungeon Delver HQ</strong> to
          refine each tool to provide the best experience possible.
        </p>
        {/* The button below will bring up a modal with the feedback form */}
        <Button>Feedback</Button>
      </div>
      <div className="tool-card-display-container">
        {props.currentTools.map((tool, index) => (
            <SideCard link={tool.link} clickable={true} imgSrc={tool.imgSrc} cardType="top-side">
              <h5 className="tool-card-title page-subtitle">{tool.title}</h5>
              <p className="tool-card-body page-body">{tool.content}</p>
            </SideCard>
        ))}
      </div>
    </div>
  );
};

export default ToolsContainer;
