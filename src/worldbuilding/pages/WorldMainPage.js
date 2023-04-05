import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "../../shared/components/Button.css"
import "./WorldMainPage.css";
import Footer from "../../shared/components/Footer";
import WorldHeading from "../components/WorldHeading";
import WorldSubjectContainer from "../components/WorldSubjectContainer";
import Card from "../../shared/components/Card";
import SlideIn from "../../shared/components/SlideIn";
import HeroicEvents from "../components/HeroicEvents";
import ChatBox from "../../shared/chatbox/ChatBox";


const DUMMY_DATA = [
  {
    id: "world1",
    worldName: "Greyhawk",
    campaign: "Ghosts of Saltmarsh",
  }
]


const WorldMainPage = props => {

  const worldId = useParams().worldId;
  const loadedWorld = DUMMY_DATA.filter(world => world.id === worldId);


    return (
      <React.Fragment>
        <div className="page-container">
          <WorldHeading
            worldName={loadedWorld[0].worldName}
            campaign={loadedWorld[0].campaign}
            worldId={loadedWorld[0].worldId}
          />
          <hr></hr>
          <WorldSubjectContainer />
          <hr></hr>
          <HeroicEvents />
          <hr></hr>
          <div className="chat-container">
            <div class="world-title-container">
              <div className="world-title">
                <h3>Champions Chat</h3>
                <h5>Join the conversation!</h5>
              </div>
            </div>
            <ChatBox />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
}

export default WorldMainPage