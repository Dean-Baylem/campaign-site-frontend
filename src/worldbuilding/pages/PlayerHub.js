import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import MainNavigation from "../../shared/navigation/MainNavigation";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import HubNav from "../../shared/navigation/HubNav";
import WorldDisplay from "../../shared/PlayerHubComponents/WorldDisplay";
import WorldCard from "../../shared/Components/UIComponents/WorldCard";
import CampaignCard from "../../shared/Components/UIComponents/CampaignCard";
import ToolsContainer from "../components/ToolsContainer";
import Footer from "../../shared/Components/PageComponents/Footer";
import CreateNewCard from "../../shared/navigation/CreateNewCard";
import ErrorModal from "../../shared/Components/UIComponents/ErrorModal";
import { CSSTransition } from "react-transition-group";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import "./PlayerHub.css";
import wildMagicImg from "../../images/wildmagicexample.jpg";
import magicItemImg from "../../images/magicItemDisplay.jpeg";

const data = [
  {
    img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
    alt: "slide1",
  },
  {
    img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
    alt: "slide2",
  },
  {
    img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
    alt: "slide3",
  },
  {
    img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
    alt: "slide4",
  },
];

const currentTools = [
  {
    title: "Wild Magic Roller!",
    content:
      "Roll on the standard Wild Magic Table or create and customise your own Wild Magic Tables.",
    imgSrc: wildMagicImg,
    link: "/DMTools/wildmagictables",
  },
  {
    title: "Magic Item Generator",
    content:
      "An app to help decide what items to provide your party without searching through the source books first.",
    imgSrc: magicItemImg,
    link: "/DMTools/itemGenerator",
  },
];

const DUMMY_UPCOMING = [
  {
    name: "Ghosts of Saltmarsh",
    day: "Tuesday",
    hour: "5",
    mins: "30",
    am: false,
    timeZone: "JST",
  },
  {
    name: "Curse of Strahd",
    day: "Friday",
    hour: "8",
    mins: "00",
    am: false,
    timeZone: "JST",
  },
  {
    name: "Descent into Avernus",
    day: "Tuesday",
    hour: "10",
    mins: "30",
    am: true,
    timeZone: "JST",
  },
];

const PlayerHub = (props) => {
  const auth = useContext(AuthContext);
  const [activePanel, setActivePanel] = useState("worlds");
  const [nextPanel, setNextPanel] = useState("");
  const [loadedWorlds, setLoadedWorlds] = useState([]);
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);
  const { sendRequest, error, clearError } = useHttpRequest();

  useEffect(() => {
    const fetchWorlds = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/worlds/getall/${auth.playerId}`
        );
        setLoadedWorlds(responseData.worlds);
      } catch (err) {}
    };
    fetchWorlds();
  }, [auth.playerId, sendRequest]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        console.log(
          process.env.REACT_APP_REQUEST_URL +
            `/campaign/findall/${auth.playerId}`
        );
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/campaign/findall/${auth.playerId}`
        );
        console.log(responseData);
        if (responseData.campaigns !== "none") {
          setLoadedCampaigns(responseData.campaigns);
        }
      } catch (err) {}
    };
    fetchCampaigns();
  }, [auth.playerId, sendRequest]);

  const handlePanelChange = (value) => {
    setActivePanel(null);
    setNextPanel(value);
  };

  const handlePanelSwitch = () => {
    setActivePanel(nextPanel);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          modalHeader="Poof! Surge Failed!"
          modalToggle={clearError}
          error={error}
        />
      )}
      <MainNavigation />
      <div className="page-container hub-container">
        <Carousel data={data}></Carousel>
        <HubNav handlePanelChange={handlePanelChange}></HubNav>
        <div className="hub-body-container">
          <CSSTransition
            in={activePanel === "worlds"}
            classNames="fade"
            timeout={300}
            unmountOnExit
            onExited={handlePanelSwitch}
          >
            <WorldDisplay displayType="world-display-container">
              {loadedWorlds.map((world, index) => (
                <WorldCard
                  image={world.image}
                  worldName={world.worldName}
                  worldId={world._id}
                  key={index}
                />
              ))}
              <CreateNewCard
                data={loadedWorlds}
                type="Create World"
                successTitle="/ 5 Worlds created"
                successDesc="Start building a new world now!"
                failDesc="Allotment of worlds reached. Please delete a world before
                  making a new one."
                goto="/world/create"
              />
            </WorldDisplay>
          </CSSTransition>
          <CSSTransition
            in={activePanel === "campaigns"}
            classNames="fade"
            timeout={300}
            onExited={handlePanelSwitch}
            unmountOnExit
          >
            <WorldDisplay displayType="campaign-display-container">
              {loadedCampaigns.map((campaign, index) => (
                <CampaignCard campaign={campaign} key={index} />
              ))}
              <CreateNewCard
                campaigns={true}
                worlds={loadedWorlds}
                upcomingGames={DUMMY_UPCOMING}
                data={loadedCampaigns}
                type="Create Campaign"
                successTitle="/ 5 Campaigns created"
                successDesc="Gather the party and let's start rolling!"
                failDesc="Allotment of campaigns reached. Please delete a campaign before
                  making a new one."
              />
            </WorldDisplay>
          </CSSTransition>
          <CSSTransition
            in={activePanel === "dmtools"}
            classNames="fade"
            timeout={300}
            onExited={handlePanelSwitch}
            unmountOnExit
          >
            <ToolsContainer currentTools={currentTools} />
          </CSSTransition>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PlayerHub;
