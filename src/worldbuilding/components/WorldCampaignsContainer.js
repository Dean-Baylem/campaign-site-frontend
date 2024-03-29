import React, { useContext } from "react";
import { WorldContext } from "../../shared/context/WorldContext";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorldCampaignsContainer.css";
import { Button } from "@mui/material";

const WorldCampaignsContainer = (props) => {
  const worldManager = useContext(WorldContext);

  let settings = {
    dots: true,
    arrows: true,
  };

  return (
    <div className="world-campaigns-container">
      <div className="world-subtitle page-subtitle">
        <h5>Ongoing Campaigns</h5>
      </div>
      <div className="campaign-carousel">
        {worldManager.currentWorld.campaigns &&
        worldManager.currentWorld.campaigns.length > 0 ? (
          <Slider {...settings}>
            {worldManager.currentWorld.campaigns.map((campaign, index) => (
              <div key={index}>
                <SideCard
                  sx={{ width: "100%" }}
                  link={"/"}
                  clickable={true}
                  imgSrc="https://img.freepik.com/free-vector/magic-forest-with-round-stone-altar-night_107791-12862.jpg?w=740&t=st=1683679846~exp=1683680446~hmac=a6b5d4640e8e264b62095fbf9d3e84fbd107da8a36dc675d0c52ac391169e607"
                  cardType="top-side"
                >
                  <p>{campaign.campaignName}</p>
                </SideCard>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="custom-buttons page-body">
            <p>
              There are no ongoing campaigns in{" "}
              {worldManager.currentWorld.worldName}
            </p>
            <Button>Create One!</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldCampaignsContainer;
