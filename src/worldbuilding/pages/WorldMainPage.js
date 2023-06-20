import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { WorldContext } from "../../shared/context/WorldContext";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/Components/UIComponents/ErrorModal";
import Footer from "../../shared/Components/PageComponents/Footer";
import WorldHeading from "../components/WorldHeading";
import WorldSubjectContainer from "../components/WorldSubjectContainer";
import HeroicEvents from "../components/HeroicEvents";
import ChatBox from "../../shared/Components/PageComponents/ChatBox";
import WorldTitle from "../components/WorldTitle";
import WorldNav from "../components/WorldNav";
import MainNavigation from "../../shared/navigation/MainNavigation";
import "../../shared/Components/UIComponents/Button.css";
import "./WorldMainPage.css";
import WorldCampaignsContainer from "../components/WorldCampaignsContainer";
// Carousel CSS

const WorldMainPage = (props) => {
  const { sendRequest, error, clearError } = useHttpRequest();
  const worldId = useParams().worldId;
  const [loadWorldDetails, setLoadWorldDetails] = useState(true);

  const worldManager = useContext(WorldContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchWorld = async () => {
      if (loadWorldDetails) {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_REQUEST_URL + `/worlds/getone/${worldId}`
          );
          worldManager.changeWorld(responseData.world);
          setLoadWorldDetails(false);
        } catch (err) {
        }
      }
    };
    fetchWorld();
  }, [loadWorldDetails]);

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          modalHeader="Poof! Surge Failed!"
          modalToggle={clearError}
          error={error}
        />
      )}
      <div className="page-container">
        <WorldHeading campaignBanner="https://img.freepik.com/free-photo/night-sky-glows-with-galaxy-mystical-silhouette-generative-ai_188544-11287.jpg?w=740&t=st=1683673772~exp=1683674372~hmac=acf8320765bcf7ad15d1d41e15153bd5eee319981a0adef75f39431a66221ec5">
          <MainNavigation clear={true} />
          <WorldTitle />
          {auth.playerId === worldManager.currentWorld.creator && (
            <WorldNav worldId={props.worldId} />
          )}
        </WorldHeading>
        <div className="world-subtitle page-subtitle">
          <h5>Explore and Discover</h5>
        </div>
        <WorldSubjectContainer worldID={worldManager.currentWorld.id} />
        <WorldCampaignsContainer />
        <HeroicEvents />
        <div className="chat-container light-bg">
          <div className="">
            <div className="world-subtitle">
              <h5 className="page-subtitle">Champions Chat</h5>
            </div>
          </div>
          <ChatBox
            reload={setLoadWorldDetails}
            comments={worldManager.currentWorld.comments}
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WorldMainPage;
