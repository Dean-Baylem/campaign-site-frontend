import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Carousel from '../components/Carousel';
import "./PlayerHub.css";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HubNav from '../navigation/HubNav';
import WorldDisplay from '../PlayerHubComponents/WorldDisplay';
import WorldCard from '../PlayerHubComponents/WorldCard';
import Collapsible from 'react-collapsible';


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
                <WorldCard
                  image={world.image}
                  worldName={world.worldName}
                  key={index}
                />
              ))}
              <div className="campaign-card">
                <div
                  className="campaign-card-title"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://fastly.picsum.photos/id/658/500/300.jpg?hmac=DO3v8m8T1OpH51FjvVy_YDNCpHPD0YO34B8c5VkyrHM)`,
                  }}
                >
                  <h3>Campaign Title</h3>
                </div>
                <div className="campaign-card-body">
                  <div className="campaign-card-button-container">
                    <Button>Manage</Button>
                    <Button>View</Button>
                  </div>
                  <hr></hr>
                  <Collapsible trigger="See Party">
                    <div className="party-container">
                      <img
                        src="https://i.pinimg.com/474x/97/86/d7/9786d7140e6ab76e4ae64c347ca28cbc.jpg"
                        alt="party-member"
                      />
                    </div>
                  </Collapsible>
                </div>
              </div>
            </WorldDisplay>
          </div>
        </div>
      </ThemeProvider>
    );
}

export default PlayerHub;