import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Carousel from '../components/Carousel';
import "./PlayerHub.css";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';
import HubNav from '../navigation/HubNav';
import CssBaseline from "@mui/material/CssBaseline";
import WorldDisplay from '../PlayerHubComponents/WorldDisplay';
import WorldCard from '../PlayerHubComponents/WorldCard';

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

const PlayerHub = props => {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="page-container">
          <MainNavigation />
          <Carousel></Carousel>
          <HubNav></HubNav>
          <div className="hub-body-container">
            <WorldDisplay>
            {DUMMYDATA.map((world, index) => (
              <WorldCard image={world.image} worldName={world.worldName} key={index} />
            ))}
            </WorldDisplay>
          </div>
        </div>
      </ThemeProvider>
    );
}

export default PlayerHub;