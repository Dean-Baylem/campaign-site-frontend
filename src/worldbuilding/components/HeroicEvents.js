import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { WorldContext } from "../../shared/context/WorldContext";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import SlideIn from "../../shared/Components/PageComponents/SlideIn";


const HeroicEvents = () => {
  const { sendRequest } = useHttpRequest();
  const worldManager = useContext(WorldContext);
  const worldId = useParams().worldId;
  const [heroicEvents, setHeroicEvents] = useState([]);

  useEffect(() => {
    const fetchHeroicEvents = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/campaign/events/getheroicbyworldid/${worldId}`
        );
        console.log(responseData.heroicEvents);
        setHeroicEvents(responseData.heroicEvents);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHeroicEvents();
  }, []);

    const battleImg =
      "https://cdn-icons-png.flaticon.com/512/1043/1043547.png?w=900&t=st=1683941548~exp=1683942148~hmac=a22bd33d3952cc12c0d357b965ff32690626709f17679c93d7874437991aa6ae";
    const socialImg =
      "https://cdn-icons-png.flaticon.com/512/1253/1253339.png?w=900&t=st=1683941577~exp=1683942177~hmac=bfc4ab12eef6f6a0d9558a18ea83a4b5e2cc68f425417c33e8a54fb0deaea1b9";
    const explortationImg =
      "https://cdn-icons-png.flaticon.com/512/784/784384.png?w=900&t=st=1683941659~exp=1683942259~hmac=b518bf21b571805ae10d9541ae049518739651d8a87e31d607d5e05f6812d86a";
    const discoverImg =
      "https://cdn-icons-png.flaticon.com/512/1021/1021357.png?w=900&t=st=1683941647~exp=1683942247~hmac=c8465ecf3aa747ee4d91838715806c32d3e61cfc7b497a7ee2ba93decd038ffc";
    const mishapImg =
      "https://cdn-icons-png.flaticon.com/512/1150/1150175.png?w=900&t=st=1683941684~exp=1683942284~hmac=d8482121c5ad3e5616dd61ba95e612dbcca0d4c0cb4d18d45db494b3b5f9c27d";

    return (
      <div>
        <div className="heroic-events-container">
          <div className="heroic-token-container">
            <img
              className="heroic-token hero"
              src="https://cdn-icons-png.flaticon.com/512/477/477130.png?w=900&t=st=1683682753~exp=1683683353~hmac=a11c85fdd9404d0a40b91e7a48f4b8db90431cc9132349afa983bf16a85ef42f"
              alt="hero"
            />
            <img
              className="heroic-token ogre"
              src="https://cdn-icons-png.flaticon.com/512/477/477115.png?w=900&t=st=1683682787~exp=1683683387~hmac=64afae92116349392e87dbc38f3bb39ac98bfc5ffd3ee1db9537d56c48c62eee"
              alt="ogre"
            />
          </div>
          <div className="heroic-events-title">
            <h5 className="page-subtitle">Heroic Events</h5>
            <p className="page-body">
              The world of{" "}
              <strong>{worldManager.currentWorld.worldName}</strong> has hosted
              exciting and significant moments in time. From epic battles
              against powerful foes, daring rescues of innocent civilians,
              solving complex puzzles and mysteries, and unfortunate moments of
              betrayal, heartbreak, and loss.
            </p>
            <p className="page-body">
              The most unforgettable moments have been documented and preserved
              by the archivests here at Dungeon Delvers HQ. If you wish to see
              more events then please go to the notes section of the individual
              campaign pages.
            </p>
          </div>
        </div>
        <div className="events-container">
          {heroicEvents.map((event, index) => (
            <SlideIn direction={`${index % 2 === 0 ? "left" : "right"}`}>
              <div
                className={`event-entry-container ${
                  index % 2 === 0 ? "dark-bg" : "light-bg"
                }`}
              >
                <div
                  className={`heroic-token-container ${
                    index % 2 !== 0 && "right-event-img"
                  }`}
                >
                  <img
                    className="heroic-token"
                    src={
                      event.eventType === "battle"
                        ? battleImg
                        : event.eventType === "social"
                        ? socialImg
                        : event.eventType === "exploration"
                        ? explortationImg
                        : event.eventType === "mishap"
                        ? mishapImg
                        : event.eventType === "discovery"
                        ? discoverImg
                        : ""
                    }
                    alt="event-type-token"
                  />
                </div>
                <div
                  className={`event-details ${
                    index % 2 !== 0 && "right-event-desc"
                  }`}
                >
                  <h5 className="page-subtitle">{event.eventTitle}</h5>
                  <p className="page-body">{event.eventDesc}</p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    );
}

export default HeroicEvents;