import React, { useState, useEffect, useContext } from "react";
import MainNavigation from "../../shared/navigation/MainNavigation";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import HubNav from "../../shared/navigation/HubNav";
import WorldDisplay from "../../shared/PlayerHubComponents/WorldDisplay";
import WorldCard from "../../shared/Components/UIComponents/WorldCard";
import CampaignCard from "../../shared/Components/UIComponents/CampaignCard";
import { CSSTransition } from "react-transition-group";
import Footer from "../../shared/Components/PageComponents/Footer";
import { Button } from "@mui/material";
import { AuthContext } from "../../shared/context/auth-context";
import CreateNewCard from "../../shared/navigation/CreateNewCard";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import "./PlayerHub.css";
import ToolsContainer from "../components/ToolsContainer";

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
    title: "Wild Magic Tables",
    content: "Roll on the standard Wild Magic Table or customise up to 5 of your own Wild Magic Tables.",
    imgSrc:
      "https://fastly.picsum.photos/id/259/500/300.jpg?hmac=t3QXZeOjK_tKClaWxPcQTjWJJc5rPREMttsmg47Y4y8",
    link: "/DMTools/wildmagictables",
  },
  {
    title: "Magic Item Generator",
    content:
      "An app to help decide what items to provide your party without searching through the source books first.",
    imgSrc:
      "https://fastly.picsum.photos/id/504/500/300.jpg?hmac=aPbmXP8tNnrHBoQ_VRM8vCPuU2btdLu5lRKBfssPZh4",
    link: "/DMTools/itemGenerator",
  },
  {
    title: "DM Clock",
    content: "An app to help manage time, weather and travel in D&D 5e",
    imgSrc:
      "https://fastly.picsum.photos/id/259/500/300.jpg?hmac=t3QXZeOjK_tKClaWxPcQTjWJJc5rPREMttsmg47Y4y8",
    link: "/DMTools/itemGenerator",
  },
  {
    title: "Magic Item Generator",
    content:
      "An app to help decide what items to provide your party without searching through the source books first.",
    imgSrc:
      "https://fastly.picsum.photos/id/504/500/300.jpg?hmac=aPbmXP8tNnrHBoQ_VRM8vCPuU2btdLu5lRKBfssPZh4",
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
    timeZone: "JST"
  },
  {
    name: "Curse of Strahd",
    day: "Friday",
    hour: "8",
    mins: "00",
    am: false,
    timeZone: "JST"
  },
  {
    name: "Descent into Avernus",
    day: "Tuesday",
    hour: "10",
    mins: "30",
    am: true,
    timeZone: "JST"
  },
]

const PlayerHub = (props) => {
  const auth = useContext(AuthContext);
  const [activePanel, setActivePanel] = useState("worlds");
  const [nextPanel, setNextPanel] = useState("");
  const [loadedWorlds, setLoadedWorlds] = useState([]);
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);
  const { sendRequest } = useHttpRequest();

  useEffect(() => {
    const fetchWorlds = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/worlds/getall/${auth.playerId}`
        );
        setLoadedWorlds(responseData.worlds);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorlds();
  }, [auth.playerId, sendRequest]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/campaign/findall/${auth.playerId}`);
        setLoadedCampaigns(responseData.campaigns)
      } catch (err) {console.log(err)}
    }
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
      <MainNavigation />
      <div className="page-container">
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
                <CampaignCard
                  campaignTitle={campaign.campaignName}
                  key={index}
                />
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
