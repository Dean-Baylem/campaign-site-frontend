import React from "react";
import Subtitle from "../../shared/components/Subtitle";
import Card from "../../shared/components/Card";
import "./Features.css";

const Features = props => {
    return (
      <section className="features-section">
        <Subtitle content={props.subject} />
        <Card
          cardType="top"
          imgSrc="https://fastly.picsum.photos/id/453/1200/800.jpg?hmac=f26znPN_jRp3GFmXAKySIgsfkJ-rrl5Fba5-9b_gQTM"
          title="Card 1"
          content="This is a card"
        />
        <Card
          cardType="left"
          imgSrc="https://fastly.picsum.photos/id/453/1200/800.jpg?hmac=f26znPN_jRp3GFmXAKySIgsfkJ-rrl5Fba5-9b_gQTM"
          title="Card 1"
          content="This is a card"
        />
        <Card
          cardType="right"
          imgSrc="https://fastly.picsum.photos/id/453/1200/800.jpg?hmac=f26znPN_jRp3GFmXAKySIgsfkJ-rrl5Fba5-9b_gQTM"
          title="Card 1"
          content="This is a card"
        />
      </section>
    );
}

export default Features;