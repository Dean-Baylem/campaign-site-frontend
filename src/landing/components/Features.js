import React from "react";
import Subtitle from "../../shared/components/Subtitle";
import UpperCard from "../../shared/components/UpperCard";
import "./Features.css";

const Features = props => {
    return (
      <section className="features-section">
        <Subtitle content="Features" />
        <div className="card-box">
          <UpperCard src="" title="Card 1" content="This is a card" />
          <UpperCard src="" title="Card 2" content="This is a card" />
          <UpperCard src="" title="Card 3" content="This is a card" />
        </div>
      </section>
    );
}

export default Features;