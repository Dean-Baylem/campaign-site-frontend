import React from "react";
import SlideIn from "../../shared/Components/PageComponents/SlideIn";
import Card from "../../shared/Components/UIComponents/Card";

const HeroicEvents = props => {
    return (
      <React.Fragment>
        <div className="world-title-container">
          <div className="world-title">
            <h3>Heroic Events</h3>
            <h5>Epic tales about the worlds greatest adventurers!</h5>
          </div>
        </div>
        <div className="events-container">
          <SlideIn direction="left">
            <Card
              imgSrc="https://img.freepik.com/free-vector/fantasy-scene_1196-513.jpg?w=740&t=st=1680653725~exp=1680654325~hmac=22e85a44df50caf9d3c2afdfe7efa7fde8e2d45e1acd7b4bcc91c43058e500e6"
              cardType="top"
              title="Serenade of the Sea Devils"
              content="An epic conflict between the heroes of Saltmarsh and the Sahaguin."
            />
          </SlideIn>
          <SlideIn direction="right">
            <Card
              imgSrc="https://img.freepik.com/free-vector/fantasy-scene_1196-513.jpg?w=740&t=st=1680653725~exp=1680654325~hmac=22e85a44df50caf9d3c2afdfe7efa7fde8e2d45e1acd7b4bcc91c43058e500e6"
              cardType="top"
              title="Serenade of the Sea Devils"
              content="An epic conflict between the heroes of Saltmarsh and the Sahaguin."
            />
          </SlideIn>
          <SlideIn direction="left">
            <Card
              imgSrc="https://img.freepik.com/free-vector/fantasy-scene_1196-513.jpg?w=740&t=st=1680653725~exp=1680654325~hmac=22e85a44df50caf9d3c2afdfe7efa7fde8e2d45e1acd7b4bcc91c43058e500e6"
              cardType="top"
              title="Serenade of the Sea Devils"
              content="An epic conflict between the heroes of Saltmarsh and the Sahaguin."
            />
          </SlideIn>
        </div>
      </React.Fragment>
    );
}

export default HeroicEvents;