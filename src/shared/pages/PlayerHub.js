import React, { useState } from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Carousel from '../components/Carousel';
import "./PlayerHub.css";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HubNav from '../navigation/HubNav';
import WorldDisplay from '../PlayerHubComponents/WorldDisplay';
import WorldCard from '../PlayerHubComponents/WorldCard';
import Collapsible from 'react-collapsible';
import CampaignCard from '../PlayerHubComponents/CampaignCard';
import Card from '../components/Card';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DUMMYDATA = [
  {
    worldName: "Greyhawk",
    image:
      "https://fastly.picsum.photos/id/524/500/300.jpg?hmac=J7fpUMjDr_zSBziCiTw9zsB8qHbKkX9d-AgWGynXTuo",
  },
  {
    worldName: "Sword Coast",
    image:
      "https://fastly.picsum.photos/id/906/500/300.jpg?hmac=rTJr5xyRi9f76MKFNA4r8JE9SMemy8wNIA69NqUybRk",
  },
];

const DUMMY_CAMPAIGN = [
  {
    campaignTitle: "Ghosts of Saltmarsh",
    party: [
      {
        name: "Player1",
        token:
          "https://i.pinimg.com/474x/97/86/d7/9786d7140e6ab76e4ae64c347ca28cbc.jpg",
      },
      {
        name: "Player2",
        token:
          "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/186906905/original/c93a521970405c3e1a383687292d37570dca1400/draw-your-dungeons-and-dragons-character-token.png",
      },
    ],
  },
  {
    campaignTitle: "Curse of Strahd",
    party: [
      {
        name: "Player1",
        token:
          "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/d1efe42feedb637835b08915563c8f8d-1627517323/Attachment_1627517305/draw-a-portrait-of-your-dnd-character.png",
      },
      {
        name: "Player2",
        token:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xAvcsJEsR9nkFmNAaRwpMs4rXvW4zwYbjQ&usqp=CAU",
      },
    ],
  },
];

const DUMMY_TOOLS = [
  {
    title: "DM Clock",
    content: "An app to help manage time, weather and travel in D&D 5e",
    imgSrc:
      "https://fastly.picsum.photos/id/259/500/300.jpg?hmac=t3QXZeOjK_tKClaWxPcQTjWJJc5rPREMttsmg47Y4y8",
  },
  {
    title: "Magic Item Generator",
    content:
      "An app to help decide what items to provide your party without searching through the source books first.",
    imgSrc:
      "https://fastly.picsum.photos/id/504/500/300.jpg?hmac=aPbmXP8tNnrHBoQ_VRM8vCPuU2btdLu5lRKBfssPZh4",
  },
  {
    title: "DM Clock",
    content: "An app to help manage time, weather and travel in D&D 5e",
    imgSrc:
      "https://fastly.picsum.photos/id/259/500/300.jpg?hmac=t3QXZeOjK_tKClaWxPcQTjWJJc5rPREMttsmg47Y4y8",
  },
  {
    title: "Magic Item Generator",
    content:
      "An app to help decide what items to provide your party without searching through the source books first.",
    imgSrc:
      "https://fastly.picsum.photos/id/504/500/300.jpg?hmac=aPbmXP8tNnrHBoQ_VRM8vCPuU2btdLu5lRKBfssPZh4",
  },
];

const PlayerHub = props => {

  const [activePanel, setActivePanel ] = useState("worlds");

  const handlePanelChange = value => {
    setActivePanel(value);
  }

    return (
      <ThemeProvider theme={darkTheme}>
        <div className="page-container">
          <MainNavigation />
          <Carousel></Carousel>
          <HubNav handlePanelChange={handlePanelChange}></HubNav>
          <div className="hub-body-container">
            {activePanel === "worlds" && <WorldDisplay>
              {DUMMYDATA.map((world, index) => (
                <WorldCard
                  image={world.image}
                  worldName={world.worldName}
                  key={index}
                />
              ))}
              </WorldDisplay>}
              {activePanel === "campaigns" && <WorldDisplay>{DUMMY_CAMPAIGN.map((campaign, index) => (
                <CampaignCard campaignTitle={campaign.campaignTitle} party={campaign.party} key={index}/>
              ))}</WorldDisplay>}
              {activePanel === "dmtools" && <div className="tools-container">
              {DUMMY_TOOLS.map((tool, index) => (
                <Card key={index} cardType="top" imgSrc={tool.imgSrc} title={tool.title} content={tool.content} />
              ))}
              </div>}
          </div>
        </div>
      </ThemeProvider>
    );
}

export default PlayerHub;