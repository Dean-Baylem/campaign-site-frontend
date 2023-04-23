import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { WorldContext } from "../../shared/context/WorldContext";
import Footer from "../../shared/Components/PageComponents/Footer";
import WorldHeading from "../components/WorldHeading";
import WorldSubjectContainer from "../components/WorldSubjectContainer";
import HeroicEvents from "../components/HeroicEvents";
import ChatBox from "../../shared/Components/PageComponents/ChatBox";
import WorldTitle from "../components/WorldTitle";
import WorldNav from "../components/WorldNav";
import "../../shared/Components/UIComponents/Button.css";
import "./WorldMainPage.css";


const WorldMainPage = props => {
  const { sendRequest } = useHttpRequest();
  const worldId = useParams().worldId;

  const worldManager = useContext(WorldContext);

  useEffect(() => {
    const fetchWorld = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/worlds/getone/${worldId}`)
        console.log(responseData.world);
        worldManager.changeWorld(responseData.world);
      } catch (err) {
        console.log(err)
      }
    };
    fetchWorld();
  }, [sendRequest, worldId, worldManager]);


    return (
      <React.Fragment>
        <div className="page-container">
          <WorldHeading>
            <WorldTitle />
            <WorldNav worldId={props.worldId} />
          </WorldHeading>
          <hr></hr>
          <WorldSubjectContainer worldID={worldManager.currentWorld.id}/>
          <hr></hr>
          <HeroicEvents />
          <hr></hr>
          <div className="chat-container">
            <div className="world-title-container">
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