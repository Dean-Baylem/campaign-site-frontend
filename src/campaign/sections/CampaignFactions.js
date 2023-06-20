import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import Slider from "react-slick";
import "./CampaignFactions.css";

const CampaignFactions = () => {
  const campaignManager = useContext(CampaignContext);

  let settings = {
    dots: true,
    arrows: true,
    centerMode: true,
  };

  return (
    <div className="campaign-factions-container">
      <div className="center page-subtitle">
        <h3>Factions in {campaignManager.currentCampaign.campaignName}</h3>
      </div>
      <div className="faction-example-container">
        <div className="faction-example-img-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/649/649087.png?w=740&t=st=1686460105~exp=1686460705~hmac=aa8523b7f4430b44764694b92dadb4275dba22a5984ca3b88c979fa50d4e61b8"
            alt="faction-example"
          />
        </div>
        <div className="faction-description page-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consequat quis tellus vel scelerisque. Vivamus mollis aliquam odio,
            sit amet euismod purus elementum sit amet. Suspendisse ac rhoncus
            nulla. In hac habitasse platea dictumst. Aenean sapien ligula,
            volutpat in porta eu, volutpat a nunc. In hac habitasse platea
            dictumst. Sed sit amet tempor velit. Aenean molestie facilisis
            commodo. Phasellus fermentum quam turpis, ultrices ultricies dui
            hendrerit nec.
          </p>
          <p>
            Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Maecenas quis massa a leo fermentum lobortis. Curabitur
            dapibus felis eu consectetur feugiat. Ut cursus condimentum augue
            vel scelerisque. Donec purus dui, finibus ac libero nec, mollis
            aliquam mauris. Donec mollis quam ornare malesuada vestibulum. Nam
            aliquam sapien nec purus faucibus, ac venenatis turpis cursus.
          </p>
        </div>
      </div>
      <div className="faction-carousel" style={{ textAlign: "center" }}>
        {campaignManager.currentCampaign.factions && (
          <Slider {...settings}>
            {campaignManager.currentCampaign.factions.map((faction, index) => (
              <div className="faction-carousel-item" key={index}>
                <SideCard
                  link={"/"}
                  clickable={true}
                  imgSrc={faction.factionToken}
                  cardType="top-side"
                >
                  <p>{faction.factionName}</p>
                </SideCard>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default CampaignFactions;
