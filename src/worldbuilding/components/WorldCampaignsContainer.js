import React, { useContext } from "react";
import { WorldContext } from "../../shared/context/WorldContext";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorldCampaignsContainer.css";

const WorldCampaignsContainer = props => {

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
          {worldManager.currentWorld.campaigns && (
            <Slider {...settings}>
              {worldManager.currentWorld.campaigns.map((campaign, index) => (
                <div>
                  <SideCard
                    link={"/"}
                    clickable={true}
                    imgSrc="https://img.freepik.com/free-vector/magic-forest-with-round-stone-altar-night_107791-12862.jpg?w=740&t=st=1683679846~exp=1683680446~hmac=a6b5d4640e8e264b62095fbf9d3e84fbd107da8a36dc675d0c52ac391169e607"
                    key={index}
                    cardType="top-side"
                  >
                    <p>{campaign.campaignName}</p>
                  </SideCard>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    );
}

export default WorldCampaignsContainer;