import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import "../../shared/components/Button.css"
import "./WorldMainPage.css";
import Footer from "../../shared/components/Footer";
import WorldHeading from "../components/WorldHeading";
import WorldSubjectContainer from "../components/WorldSubjectContainer";
import HeroicEvents from "../components/HeroicEvents";
import ChatBox from "../../shared/chatbox/ChatBox";
import WorldTitle from "../components/WorldTitle";
import WorldNav from "../components/WorldNav";


const DUMMY_DATA = [
  {
    id: "world1",
    worldName: "Greyhawk",
    campaign: "Ghosts of Saltmarsh",
  }
]


const WorldMainPage = props => {
  const { error, sendRequest } = useHttpRequest();
  const worldId = useParams().worldId;
  const [ loadedWorld, setLoadedWorld ] = useState({});

  useEffect(() => {
    const fetchWorld = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/worlds/getone/${worldId}`)
        console.log(responseData.world);
        setLoadedWorld(responseData.world)
      } catch (err) {
        console.log(err)
      }
    };
    fetchWorld();
  }, [sendRequest, worldId]);


    return (
      <React.Fragment>
        <div className="page-container">
          <WorldHeading>
            <WorldTitle
              worldName={loadedWorld.worldName}
              campaign={loadedWorld.campaign}
              worldId={loadedWorld.worldId}
            />
            <WorldNav worldId={props.worldId} />
          </WorldHeading>
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