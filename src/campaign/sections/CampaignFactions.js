import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import Slider from "react-slick";
import "./CampaignFactions.css";

const CampaignFactions = () => {
  const campaignManager = useContext(CampaignContext);

  let settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="campaign-factions-container">
      <div className="page-subtitle">
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
            The curators at Dungeon Delvers Incorporated present a catalogue of
            groups with distinct goals for your reading pleasure. Examples of
            factions include; Political houses, secret societies, religious
            organizations, and warrior guilds, each with its objectives.
            Interacting with these factions allows the characters to grow a
            deeper connection with the NPCs involved with them. Whatever your
            objective, it is wise to have information regarding these groups
            before starting your interactions with them. Additionally, we
            recommended that you document acquired knowledge for your reference
            and to serve others in their quests for information.
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
